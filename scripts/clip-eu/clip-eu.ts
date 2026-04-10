import { chromium, type Page } from "playwright";
import { writeFileSync, existsSync } from "fs";
import { resolve } from "path";
import { EU_REGULATIONS, type EuRegulation } from "./eu-regulations.js";

const RAW_DIR = resolve(import.meta.dirname, "../../raw");
const FORCE = process.argv.includes("--force");
const TODAY = new Date().toISOString().split("T")[0];

// CLI: --celex CELEX --name filename  →  single-regulation mode
function parseCLI(): EuRegulation[] | null {
  const args = process.argv.slice(2);
  const celexIdx = args.indexOf("--celex");
  const nameIdx = args.indexOf("--name");
  if (celexIdx === -1 || nameIdx === -1) return null;
  const celex = args[celexIdx + 1];
  const name = args[nameIdx + 1];
  if (!celex || !name) {
    console.error("Usage: clip-eu.ts --celex CELEX --name filename");
    process.exit(1);
  }
  return [{ celex, filename: name }];
}

function celexToUrl(celex: string): string {
  return `https://eur-lex.europa.eu/legal-content/SV/TXT/HTML/?uri=CELEX:${celex}`;
}

interface EuData {
  title: string;
  eutRef: string;
  body: string;
}

// Browser-side extraction script — uses var/function to avoid tsx __name transforms
// EUR-Lex 2024+ uses oj-* prefixed CSS classes and #docHtml container
const EXTRACT_SCRIPT = `(() => {
  var toMd = function(node) {
    if (node.nodeType === Node.TEXT_NODE) return node.textContent || "";
    if (node.nodeType !== Node.ELEMENT_NODE) return "";

    var el = node;
    var tag = el.tagName.toLowerCase();

    if (["script","style","nav","svg","button","aside","noscript","iframe"].includes(tag)) return "";

    // EUR-Lex oj-* class-based heading detection for <p> elements
    if (tag === "p") {
      var cls = (el.className || "").toString();
      var txt = (el.textContent || "").trim();
      if (!txt) return "\\n";

      // Document title lines
      if (cls.includes("oj-doc-ti")) return "**" + txt + "**\\n\\n";

      // Header metadata — skip (extracted separately)
      if (cls.includes("oj-hd-")) return "";

      // AVDELNING (Title) — top level
      if (cls.includes("oj-ti-section-1")) return "\\n---\\n\\n## " + txt + "\\n\\n";

      // KAPITEL (Chapter)
      if (cls.includes("oj-ti-section-2")) return "\\n### " + txt + "\\n\\n";

      // AVSNITT (Section)
      if (cls.includes("oj-ti-section-3")) return "\\n#### " + txt + "\\n\\n";

      // Artikel number (e.g. "Artikel 1")
      if (cls.includes("oj-ti-art")) return "\\n#### " + txt + "\\n\\n";

      // Artikel subtitle/name
      if (cls.includes("oj-sti-art")) return "**" + txt + "**\\n\\n";

      // Signatory block
      if (cls.includes("oj-signatory")) return "_" + txt + "_\\n\\n";

      // Footnotes
      if (cls.includes("oj-note")) return "> " + txt + "\\n\\n";

      // Table classes — handled by table element, but if standalone paragraph
      if (cls.includes("oj-tbl-")) {
        var pMd2 = Array.from(el.childNodes).map(toMd).join("");
        return pMd2.trim() + "\\n\\n";
      }

      // Regular paragraphs (oj-normal and others) — recursive for rich text
      var pMd = Array.from(el.childNodes).map(toMd).join("");
      var pt = pMd.trim();
      return pt ? pt + "\\n\\n" : "";
    }

    // Anchors — just return text content
    if (tag === "a") return el.textContent.trim();

    var childMd = Array.from(el.childNodes).map(toMd).join("");

    switch (tag) {
      case "b": case "strong":
        var bt = childMd.trim();
        return bt ? "**" + bt + "**" : "";
      case "i": case "em":
        var it = childMd.trim();
        return it ? "_" + it + "_" : "";
      case "sup":
        return "^(" + childMd.trim() + ")";
      case "h1": return "\\n# " + childMd.trim() + "\\n\\n";
      case "h2": return "\\n## " + childMd.trim() + "\\n\\n";
      case "h3": return "\\n### " + childMd.trim() + "\\n\\n";
      case "h4": return "\\n#### " + childMd.trim() + "\\n\\n";
      case "h5": return "\\n##### " + childMd.trim() + "\\n\\n";
      case "br": return "\\n";
      case "hr": return "\\n---\\n\\n";
      case "li": return "- " + childMd.trim() + "\\n";
      case "ul": return childMd;
      case "ol":
        var idx = 0;
        return Array.from(el.children).map(function(li) {
          idx++;
          return idx + ". " + toMd(li).replace(/^- /, "").trim() + "\\n";
        }).join("");
      case "table":
        var trs = el.querySelectorAll(":scope > tbody > tr, :scope > thead > tr, :scope > tr");
        if (trs.length === 0) return "";
        var tbl = "";
        for (var r = 0; r < trs.length; r++) {
          var cells = trs[r].querySelectorAll(":scope > td, :scope > th");
          tbl += "| " + Array.from(cells).map(function(c) {
            return (c.textContent || "").trim().replace(/\\n/g, " ").replace(/\\|/g, "\\\\|");
          }).join(" | ") + " |\\n";
        }
        return tbl + "\\n";
      case "div": return childMd;
      default: return childMd;
    }
  };

  // Primary: #docHtml (current EUR-Lex), fallback: .eli-container, #document1
  var contentEl = document.querySelector(".eli-container")
    || document.querySelector("#docHtml")
    || document.querySelector("#document1");

  if (!contentEl) {
    // Last resort: find the div with the most text
    var allDivs = document.querySelectorAll("div");
    var maxLen = 0;
    var best = null;
    for (var d = 0; d < allDivs.length; d++) {
      var len = (allDivs[d].textContent || "").length;
      if (len > maxLen && len > 1000) {
        maxLen = len;
        best = allDivs[d];
      }
    }
    contentEl = best;
  }

  if (!contentEl) throw new Error("Kunde inte hitta innehallselement pa EUR-Lex-sidan");

  // Extract title from oj-doc-ti elements
  var titleParts = [];
  var docTitles = contentEl.querySelectorAll(".oj-doc-ti");
  for (var t = 0; t < Math.min(docTitles.length, 4); t++) {
    titleParts.push(docTitles[t].textContent.trim());
  }
  var title = titleParts.join(" — ");
  if (!title) {
    var h1 = document.querySelector("h1");
    title = h1 ? h1.textContent.trim() : "Okand titel";
  }

  // Extract EUT reference from oj-hd-oj element
  var eutEl = contentEl.querySelector(".oj-hd-oj");
  var eutRef = eutEl ? eutEl.textContent.trim() : "";

  // Convert body to markdown
  var bodyMd = toMd(contentEl)
    .replace(/\\n{4,}/g, "\\n\\n\\n")
    .replace(/\\*\\*\\*\\*/g, "")
    .trim();

  return { title: title, eutRef: eutRef, body: bodyMd };
})()`;

async function extractEuData(page: Page): Promise<EuData> {
  return page.evaluate(EXTRACT_SCRIPT) as Promise<EuData>;
}

function formatEu(data: EuData, celex: string, url: string): string {
  const lines = [
    `# ${data.title}`,
    "",
    `Källa: ${url}`,
    `Hämtad: ${TODAY}`,
    `CELEX: ${celex}`,
    ...(data.eutRef ? [`EUT: ${data.eutRef}`] : []),
    "",
    "---",
    "",
    data.body,
    "",
  ];
  return lines.join("\n");
}

async function main() {
  const regulations = parseCLI() ?? EU_REGULATIONS;

  console.log(`\n=== Clip EU — ${regulations.length} forordningar att hamta ===\n`);
  console.log(`Output: ${RAW_DIR}`);
  console.log(`Force overwrite: ${FORCE}\n`);

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    locale: "sv-SE",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  });

  const results: { filename: string; ok: boolean; error?: string }[] = [];

  for (let i = 0; i < regulations.length; i++) {
    const reg = regulations[i];
    const url = celexToUrl(reg.celex);
    const outPath = resolve(RAW_DIR, `${reg.filename}.md`);
    const prefix = `[${i + 1}/${regulations.length}]`;

    if (!FORCE && existsSync(outPath)) {
      console.log(`${prefix} SKIP ${reg.filename} (finns redan)`);
      results.push({ filename: reg.filename, ok: true });
      continue;
    }

    try {
      const page = await context.newPage();

      // EUR-Lex can be slow for large regulations — generous timeouts
      await page.goto(url, { waitUntil: "load", timeout: 90_000 });

      // Wait for the actual regulation content to render
      await page.waitForSelector("#docHtml, .eli-container", {
        timeout: 60_000,
      });

      // Extra wait for large documents to fully render
      await page.waitForTimeout(3000);

      const data = await extractEuData(page);

      if (!data.title) throw new Error("Kunde inte extrahera titel");
      if (!data.body || data.body.length < 200) {
        throw new Error(`Forordningstext for kort (${data.body.length} tecken)`);
      }

      const markdown = formatEu(data, reg.celex, url);
      writeFileSync(outPath, markdown, "utf-8");

      console.log(
        `${prefix} OK   ${reg.filename} (${Math.round(markdown.length / 1024)}kb)`
      );
      results.push({ filename: reg.filename, ok: true });

      await page.close();
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`${prefix} FAIL ${reg.filename}: ${msg}`);
      results.push({ filename: reg.filename, ok: false, error: msg });
    }

    // Rate limit: 2.5s between requests (EUR-Lex is slower than riksdagen.se)
    if (i < regulations.length - 1) {
      await new Promise((r) => setTimeout(r, 2500));
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
