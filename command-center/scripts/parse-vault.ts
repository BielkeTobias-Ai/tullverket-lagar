/**
 * Build-time vault parser
 * Reads wiki/*.md → generates JSON files in content/
 *
 * Run: npx tsx scripts/parse-vault.ts
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import { extractSlug, resolveWikilinks } from "../lib/wikilink";
import type {
  WikiEntity,
  WikiConcept,
  WikiSource,
  WikiComparison,
  WikiQuery,
  WikiPage,
  WikiPageType,
  Connection,
  DepthLevel,
  GraphData,
  GraphNode,
  GraphEdge,
  SearchEntry,
  VaultData,
} from "../lib/types";

// ---------------------------------------------------------------------------
// Skip on Vercel — content/ is pre-committed, wiki/ doesn't exist there
// ---------------------------------------------------------------------------

if (process.env.VERCEL) {
  console.log("⏭️  Vercel detected — skipping parse (using committed content/)");
  process.exit(0);
}

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const VAULT_ROOT = path.resolve(__dirname, "../../wiki");
const CONTENT_DIR = path.resolve(__dirname, "../content");

const WIKI_DIRS: Record<string, WikiPageType> = {
  entities: "entity",
  concepts: "concept",
  sources: "source",
  comparisons: "comparison",
  queries: "query",
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function getMarkdownFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => path.join(dir, f));
}

function slugFromFilename(filepath: string): string {
  return path.basename(filepath, ".md");
}

async function mdToHtml(md: string): Promise<string> {
  const result = await remark().use(remarkHtml).process(md);
  return String(result);
}

function parseConnections(
  raw: Array<{ type: string; target: string; context: string }> | undefined
): Connection[] {
  if (!raw || !Array.isArray(raw)) return [];
  return raw.map((c) => ({
    type: c.type as Connection["type"],
    target: c.target,
    targetSlug: extractSlug(c.target),
    context: c.context || "",
  }));
}

function determineDepth(data: Record<string, unknown>, bodyLen: number): DepthLevel {
  const hasStraffskala =
    Array.isArray(data.straffskala) && data.straffskala.length > 0;
  const hasBefogenheter =
    Array.isArray(data.befogenheter) && data.befogenheter.length > 0;
  const hasConnections =
    Array.isArray(data.connections) && data.connections.length > 0;
  const hasSituationer =
    Array.isArray(data.situationer) && data.situationer.length > 0;
  const hasBody = bodyLen > 200;

  if (hasStraffskala && hasConnections && hasBody) return "full";
  if (hasBefogenheter || hasStraffskala || hasSituationer) return "standard";
  return "grund";
}

function asStringArray(val: unknown): string[] {
  if (!Array.isArray(val)) return [];
  return val.map(String);
}

function firstNChars(text: string, n: number): string {
  const clean = text.replace(/\s+/g, " ").trim();
  return clean.length > n ? clean.slice(0, n) + "…" : clean;
}

// ---------------------------------------------------------------------------
// Parse a single file
// ---------------------------------------------------------------------------

async function parseFile(
  filepath: string,
  pageType: WikiPageType
): Promise<WikiPage | null> {
  const raw = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(raw);
  const slug = slugFromFilename(filepath);
  const bodyHtml = await mdToHtml(content);

  const base = {
    slug,
    title: String(data.title || slug),
    type: pageType,
    created: String(data.created || ""),
    updated: String(data.updated || ""),
    tags: asStringArray(data.tags),
    sources: asStringArray(data.sources),
    bodyHtml,
    bodyRaw: content,
  };

  switch (pageType) {
    case "entity": {
      const connections = parseConnections(
        data.connections as Array<{ type: string; target: string; context: string }>
      );
      return {
        ...base,
        type: "entity",
        entity_type: data.entity_type || "lag",
        sfs: data.sfs ? String(data.sfs) : undefined,
        short_name: data.short_name ? String(data.short_name) : undefined,
        status: data.status as WikiEntity["status"],
        befogenheter: asStringArray(data.befogenheter),
        tillampningsomrade: data.tillampningsomrade
          ? String(data.tillampningsomrade).trim()
          : undefined,
        straffskala: Array.isArray(data.straffskala) ? data.straffskala : [],
        situationer: asStringArray(data.situationer),
        connections,
        depth: determineDepth(data as Record<string, unknown>, content.length),
      } satisfies WikiEntity;
    }
    case "concept":
      return {
        ...base,
        type: "concept",
        domain: data.domain ? String(data.domain) : undefined,
      } satisfies WikiConcept;
    case "source":
      return {
        ...base,
        type: "source",
        source_type: data.source_type as WikiSource["source_type"],
        author: data.author ? String(data.author) : undefined,
        date_published: data.date_published
          ? String(data.date_published)
          : undefined,
        url: data.url ? String(data.url) : undefined,
      } satisfies WikiSource;
    case "comparison":
      return {
        ...base,
        type: "comparison",
        compares: asStringArray(data.compares),
      } satisfies WikiComparison;
    case "query":
      return {
        ...base,
        type: "query",
        question: data.question ? String(data.question) : undefined,
      } satisfies WikiQuery;
    default:
      return null;
  }
}

// ---------------------------------------------------------------------------
// Build graph data from entities
// ---------------------------------------------------------------------------

function buildGraph(
  entities: WikiEntity[],
  concepts: WikiConcept[],
  slugTypeMap: Record<string, string>
): GraphData {
  const nodes: GraphNode[] = [];
  const edges: GraphEdge[] = [];
  const edgeIds = new Set<string>();

  for (const e of entities) {
    nodes.push({
      id: e.slug,
      label: e.short_name || e.title,
      type: "entity",
      entity_type: e.entity_type,
      sfs: e.sfs,
      status: e.status,
      tags: e.tags,
      depth: e.depth,
      connectionCount: e.connections.length,
    });

    for (const c of e.connections) {
      const edgeId = `${e.slug}--${c.type}--${c.targetSlug}`;
      if (edgeIds.has(edgeId)) continue;
      edgeIds.add(edgeId);

      edges.push({
        id: edgeId,
        source: e.slug,
        target: c.targetSlug,
        type: c.type,
        context: c.context,
      });
    }
  }

  for (const c of concepts) {
    nodes.push({
      id: c.slug,
      label: c.title,
      type: "concept",
      tags: c.tags,
      depth: "standard",
      connectionCount: 0,
    });
  }

  return { nodes, edges };
}

// ---------------------------------------------------------------------------
// Build search index
// ---------------------------------------------------------------------------

function buildSearchIndex(
  pages: WikiPage[],
  slugTypeMap: Record<string, string>
): SearchEntry[] {
  return pages.map((p) => {
    const entry: SearchEntry = {
      slug: p.slug,
      title: p.title,
      type: p.type,
      tags: p.tags,
      snippet: firstNChars(p.bodyRaw, 120),
      url:
        p.type === "entity"
          ? `/laws/${p.slug}`
          : p.type === "concept"
            ? `/concepts/${p.slug}`
            : `/${p.type}s/${p.slug}`,
    };
    if (p.type === "entity") {
      entry.entity_type = p.entity_type;
      entry.sfs = p.sfs;
      entry.short_name = p.short_name;
    }
    return entry;
  });
}

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------

function validate(
  entities: WikiEntity[],
  allSlugs: Set<string>
): string[] {
  const errors: string[] = [];

  for (const e of entities) {
    for (const c of e.connections) {
      if (!allSlugs.has(c.targetSlug)) {
        errors.push(
          `[${e.slug}] connection target "${c.targetSlug}" does not exist`
        );
      }
    }
    if (!e.title) {
      errors.push(`[${e.slug}] missing title`);
    }
  }

  return errors;
}

// ---------------------------------------------------------------------------
// Resolve wikilinks in all HTML bodies
// ---------------------------------------------------------------------------

function resolveAllWikilinks(
  pages: WikiPage[],
  slugTypeMap: Record<string, string>
): void {
  for (const p of pages) {
    p.bodyHtml = resolveWikilinks(p.bodyHtml, slugTypeMap);
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log("🔍 Parsing vault at:", VAULT_ROOT);
  ensureDir(CONTENT_DIR);

  // 1. Collect all pages
  const allPages: WikiPage[] = [];

  for (const [dir, pageType] of Object.entries(WIKI_DIRS)) {
    const dirPath = path.join(VAULT_ROOT, dir);
    const files = getMarkdownFiles(dirPath);
    console.log(`  📁 ${dir}/: ${files.length} files`);

    for (const f of files) {
      const page = await parseFile(f, pageType);
      if (page) allPages.push(page);
    }
  }

  // Also parse top-level wiki files (overview.md, index.md, log.md)
  const topLevelFiles = getMarkdownFiles(VAULT_ROOT).filter(
    (f) => !slugFromFilename(f).startsWith(".")
  );
  for (const f of topLevelFiles) {
    const slug = slugFromFilename(f);
    if (slug === "index" || slug === "log") continue; // skip meta files
    const page = await parseFile(f, "overview");
    if (page) allPages.push(page);
  }

  console.log(`\n📊 Total pages: ${allPages.length}`);

  // 2. Build slug→type lookup
  const slugTypeMap: Record<string, string> = {};
  const allSlugs = new Set<string>();
  for (const p of allPages) {
    slugTypeMap[p.slug] = p.type;
    allSlugs.add(p.slug);
  }

  // 3. Resolve wikilinks in HTML
  resolveAllWikilinks(allPages, slugTypeMap);

  // 4. Split by type
  const entities = allPages.filter((p): p is WikiEntity => p.type === "entity");
  const concepts = allPages.filter((p): p is WikiConcept => p.type === "concept");
  const sources = allPages.filter((p): p is WikiSource => p.type === "source");
  const comparisons = allPages.filter(
    (p): p is WikiComparison => p.type === "comparison"
  );
  const queries = allPages.filter((p): p is WikiQuery => p.type === "query");

  // 5. Validate
  const errors = validate(entities, allSlugs);
  if (errors.length > 0) {
    console.log("\n⚠️  Validation warnings:");
    errors.forEach((e) => console.log(`   ${e}`));
  } else {
    console.log("\n✅ Validation passed — all connections valid");
  }

  // 6. Build graph
  const graph = buildGraph(entities, concepts, slugTypeMap);
  console.log(
    `📈 Graph: ${graph.nodes.length} nodes, ${graph.edges.length} edges`
  );

  // 7. Build search index
  const searchIndex = buildSearchIndex(allPages, slugTypeMap);

  // 8. Compile vault data
  const vaultData: VaultData = {
    entities,
    concepts,
    sources,
    comparisons,
    queries,
    graph,
    searchIndex,
    meta: {
      parsedAt: new Date().toISOString(),
      totalPages: allPages.length,
      validationErrors: errors,
    },
  };

  // 9. Write JSON files
  const write = (name: string, data: unknown) => {
    const filepath = path.join(CONTENT_DIR, `${name}.json`);
    fs.writeFileSync(filepath, JSON.stringify(data, null, 2), "utf-8");
    console.log(`  📝 ${name}.json (${Math.round(fs.statSync(filepath).size / 1024)} KB)`);
  };

  console.log("\n💾 Writing JSON files:");
  write("entities", entities);
  write("concepts", concepts);
  write("sources", sources);
  write("queries", queries);
  write("graph", graph);
  write("search-index", searchIndex);
  write("vault", vaultData);

  // Summary
  console.log("\n" + "─".repeat(50));
  console.log("📊 Summary:");
  console.log(`   Entities:    ${entities.length} (${entities.filter((e) => e.depth === "full").length} full, ${entities.filter((e) => e.depth === "standard").length} standard, ${entities.filter((e) => e.depth === "grund").length} grund)`);
  console.log(`   Concepts:    ${concepts.length}`);
  console.log(`   Sources:     ${sources.length}`);
  console.log(`   Queries:     ${queries.length}`);
  console.log(`   Graph:       ${graph.nodes.length} nodes, ${graph.edges.length} edges`);
  console.log(`   Search:      ${searchIndex.length} entries`);
  console.log(`   Warnings:    ${errors.length}`);
  console.log("─".repeat(50));
}

main().catch((err) => {
  console.error("❌ Parser failed:", err);
  process.exit(1);
});
