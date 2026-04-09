import { chromium, type Page } from "playwright";
import { writeFileSync, existsSync } from "fs";
import { resolve } from "path";
import { LAWS, type Law } from "./laws.js";

const RAW_DIR = resolve(import.meta.dirname, "../../raw");
const FORCE = process.argv.includes("--force");
const TODAY = new Date().toISOString().split("T")[0];

// CLI: --url URL --name filename  →  single-law mode
function parseCLI(): Law[] | null {
  const args = process.argv.slice(2);
  const urlIdx = args.indexOf("--url");
  const nameIdx = args.indexOf("--name");
  if (urlIdx === -1 || nameIdx === -1) return null;
  const url = args[urlIdx + 1];
  const name = args[nameIdx + 1];
  if (!url || !name) {
    console.error("Usage: clip-laws.ts --url URL --name filename");
    process.exit(1);
  }
  return [{ url, filename: name }];
}

interface LawData {
  title: string;
  sfsNr: string;
  departement: string;
  utfardad: string;
  andrad: string;
  body: string;
}

// Browser-side extraction script as a string to avoid tsx/esbuild __name transforms
const EXTRACT_SCRIPT = `(() => {
  // Convert a DOM node to markdown recursively
  var toMd = function(node) {
    if (node.nodeType === Node.TEXT_NODE) return node.textContent || "";
    if (node.nodeType !== Node.ELEMENT_NODE) return "";

    var el = node;
    var tag = el.tagName.toLowerCase();

    if (["script", "style", "nav", "svg", "button"].includes(tag)) return "";

    // Anchors with name attr = transparent wrappers (paragraph markers)
    // Anchors with href = links, just return text
    if (tag === "a") {
      if (el.hasAttribute("name")) {
        return Array.from(el.childNodes).map(toMd).join("");
      }
      return el.textContent.trim();
    }

    var childMd = Array.from(el.childNodes).map(toMd).join("");

    switch (tag) {
      case "b": case "strong":
        var trimmed = childMd.trim();
        if (!trimmed) return "";
        return "**" + trimmed + "**";
      case "i": case "em":
        var it = childMd.trim();
        if (!it) return "";
        return "_" + it + "_";
      case "h2": return "\\n## " + childMd.trim() + "\\n\\n";
      case "h3": return "\\n### " + childMd.trim() + "\\n\\n";
      case "h4": return "\\n#### " + childMd.trim() + "\\n\\n";
      case "h5": return "\\n##### " + childMd.trim() + "\\n\\n";
      case "br": return "\\n";
      case "hr": return "";
      case "p":
        // Empty anchor paragraphs (<p><a name="P1S2"></a></p>) = paragraph break
        var pt = childMd.trim();
        if (!pt) return "\\n\\n";
        return pt + "\\n\\n";
      case "li": return "- " + childMd.trim() + "\\n";
      case "ol":
        var idx = 0;
        return Array.from(el.children).map(function(li) {
          idx++;
          return idx + ". " + toMd(li).replace(/^- /, "").trim() + "\\n";
        }).join("");
      case "ul": return childMd;
      case "table":
        return Array.from(el.querySelectorAll("tr")).map(function(row) {
          var cells = row.querySelectorAll("td, th");
          return "| " + Array.from(cells).map(function(c) { return c.textContent.trim(); }).join(" | ") + " |";
        }).join("\\n") + "\\n\\n";
      default: return childMd;
    }
  };

  var getMetaValue = function(label, container) {
    var bolds = container.querySelectorAll("b, strong");
    for (var i = 0; i < bolds.length; i++) {
      var b = bolds[i];
      var text = (b.textContent || "").trim().toLowerCase();
      if (text.includes(label.toLowerCase())) {
        var sibling = b.nextSibling;
        var parts = [];
        while (sibling) {
          if (sibling.nodeType === Node.TEXT_NODE) {
            var t = (sibling.textContent || "").trim();
            if (t && t !== ":") parts.push(t.replace(/^:\\s*/, ""));
          } else if (sibling.nodeType === Node.ELEMENT_NODE) {
            var stag = sibling.tagName.toLowerCase();
            if (["b", "strong", "h2", "h3", "hr"].includes(stag)) break;
            var st = (sibling.textContent || "").trim();
            if (st) parts.push(st);
          }
          sibling = sibling.nextSibling;
        }
        var val = parts.join(" ").trim();
        if (val) return val;
      }
    }
    return "";
  };

  var contentEl = document.querySelector("main")
    || document.querySelector("#content")
    || document.querySelector("article")
    || document.querySelector('[class*="DocumentPage"]');

  if (!contentEl) throw new Error("Could not find content element");

  var h1 = document.querySelector("h1");
  var title = h1 ? h1.textContent.trim() : "";

  var sfsNr = getMetaValue("SFS nr", contentEl);
  var departement = getMetaValue("Departement", contentEl);
  var utfardad = getMetaValue("Utf\\u00e4rdad", contentEl) || getMetaValue("Utfardad", contentEl);
  var andrad = getMetaValue("\\u00c4ndrad", contentEl) || getMetaValue("Andrad", contentEl);

  // Find the content div (parent of <hr>) and iterate ALL childNodes
  var hr = contentEl.querySelector("hr");
  var bodyMd = "";

  if (hr) {
    var parent = hr.parentElement;
    var nodes = parent.childNodes;
    var hrIdx = -1;
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i] === hr) { hrIdx = i; break; }
    }

    var skipToc = false;
    for (var j = hrIdx + 1; j < nodes.length; j++) {
      var node = nodes[j];

      // Skip TOC section: <h3>Innehåll:</h3> followed by <ul>
      if (node.nodeType === Node.ELEMENT_NODE) {
        var ntag = node.tagName.toLowerCase();
        if (ntag === "h3" && (node.textContent || "").trim().toLowerCase().startsWith("inneh")) {
          skipToc = true;
          continue;
        }
        if (skipToc && (ntag === "ul" || ntag === "ol")) {
          skipToc = false;
          continue;
        }
        skipToc = false;
      }

      bodyMd += toMd(node);
    }
  } else {
    bodyMd = toMd(contentEl);
  }

  // Clean up
  bodyMd = bodyMd
    .replace(/\\n{4,}/g, "\\n\\n\\n")
    .replace(/\\*\\*\\*\\*/g, "")
    .trim();

  return { title: title, sfsNr: sfsNr, departement: departement, utfardad: utfardad, andrad: andrad, body: bodyMd };
})()`;

async function extractLawData(page: Page): Promise<LawData> {
  return page.evaluate(EXTRACT_SCRIPT) as Promise<LawData>;
}

function formatLaw(data: LawData, url: string): string {
  const lines = [
    `# ${data.title}`,
    "",
    `Källa: ${url}`,
    `Hämtad: ${TODAY}`,
    "",
    `SFS nr: ${data.sfsNr}`,
    `Departement: ${data.departement}`,
    `Utfärdad: ${data.utfardad}`,
    `Ändrad: ${data.andrad}`,
    "",
    "---",
    "",
    data.body,
    "",
  ];
  return lines.join("\n");
}

async function main() {
  const laws = parseCLI() ?? LAWS;

  console.log(`\n=== Clip Laws — ${laws.length} lagar att hämta ===\n`);
  console.log(`Output: ${RAW_DIR}`);
  console.log(`Force overwrite: ${FORCE}\n`);

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    locale: "sv-SE",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  });

  const results: { filename: string; ok: boolean; error?: string }[] = [];

  for (let i = 0; i < laws.length; i++) {
    const law = laws[i];
    const outPath = resolve(RAW_DIR, `${law.filename}.md`);
    const prefix = `[${i + 1}/${laws.length}]`;

    // Skip if file exists and not forcing
    if (!FORCE && existsSync(outPath)) {
      console.log(`${prefix} SKIP ${law.filename} (finns redan)`);
      results.push({ filename: law.filename, ok: true });
      continue;
    }

    try {
      const page = await context.newPage();
      await page.goto(law.url, {
        waitUntil: "networkidle",
        timeout: 30_000,
      });

      // Wait for law content to render (bold § markers)
      await page.waitForSelector("h1", { timeout: 10_000 });
      await page.waitForSelector("main b", { timeout: 10_000 });

      const data = await extractLawData(page);

      if (!data.title) throw new Error("Kunde inte extrahera titel");
      if (!data.body || data.body.length < 100)
        throw new Error(`Lagtext for kort (${data.body.length} tecken)`);

      const markdown = formatLaw(data, law.url);
      writeFileSync(outPath, markdown, "utf-8");

      console.log(
        `${prefix} OK   ${law.filename} (${Math.round(markdown.length / 1024)}kb)`
      );
      results.push({ filename: law.filename, ok: true });

      await page.close();
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`${prefix} FAIL ${law.filename}: ${msg}`);
      results.push({ filename: law.filename, ok: false, error: msg });
    }

    // Rate limit: 1.5s between requests
    if (i < laws.length - 1) {
      await new Promise((r) => setTimeout(r, 1500));
    }
  }

  await browser.close();

  // Summary
  const ok = results.filter((r) => r.ok).length;
  const fail = results.filter((r) => !r.ok).length;
  console.log(`\n=== Klart: ${ok} OK, ${fail} misslyckades ===`);
  if (fail > 0) {
    console.log("\nMisslyckade:");
    results
      .filter((r) => !r.ok)
      .forEach((r) => console.log(`  - ${r.filename}: ${r.error}`));
  }
}

main().catch(console.error);
