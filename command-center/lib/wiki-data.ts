/**
 * Data access layer — reads pre-generated JSON from content/
 * Server-only: uses fs.readFileSync for build-time static generation
 */

import fs from "fs";
import path from "path";
import type {
  WikiEntity,
  WikiConcept,
  WikiSource,
  WikiQuery,
  GraphData,
  SearchEntry,
} from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content");

function readJson<T>(filename: string): T {
  const filepath = path.join(CONTENT_DIR, filename);
  try {
    const raw = fs.readFileSync(filepath, "utf-8");
    return JSON.parse(raw) as T;
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    throw new Error(
      `Failed to read ${filename}: ${msg}. Run "npm run parse" to generate content files.`
    );
  }
}

// Lazy-loaded caches (populated on first access per build)
let _entities: WikiEntity[] | null = null;
let _concepts: WikiConcept[] | null = null;
let _sources: WikiSource[] | null = null;
let _queries: WikiQuery[] | null = null;
let _graph: GraphData | null = null;
let _searchIndex: SearchEntry[] | null = null;

function entities(): WikiEntity[] {
  if (!_entities) _entities = readJson<WikiEntity[]>("entities.json");
  return _entities;
}

function concepts(): WikiConcept[] {
  if (!_concepts) _concepts = readJson<WikiConcept[]>("concepts.json");
  return _concepts;
}

function sources(): WikiSource[] {
  if (!_sources) _sources = readJson<WikiSource[]>("sources.json");
  return _sources;
}

function queriesData(): WikiQuery[] {
  if (!_queries) _queries = readJson<WikiQuery[]>("queries.json");
  return _queries;
}

// ---------------------------------------------------------------------------
// Entities (laws)
// ---------------------------------------------------------------------------

export function getAllEntities(): WikiEntity[] {
  return entities();
}

export function getEntity(slug: string): WikiEntity | undefined {
  return entities().find((e) => e.slug === slug);
}

export function getEntitiesByTag(tag: string): WikiEntity[] {
  return entities().filter((e) => e.tags.includes(tag));
}

export function getEntitiesBySituation(situation: string): WikiEntity[] {
  return entities().filter((e) => e.situationer.includes(situation));
}

export function getEntitySlugs(): string[] {
  return entities().map((e) => e.slug);
}

// ---------------------------------------------------------------------------
// Concepts
// ---------------------------------------------------------------------------

export function getAllConcepts(): WikiConcept[] {
  return concepts();
}

export function getConcept(slug: string): WikiConcept | undefined {
  return concepts().find((c) => c.slug === slug);
}

export function getConceptSlugs(): string[] {
  return concepts().map((c) => c.slug);
}

// ---------------------------------------------------------------------------
// Sources
// ---------------------------------------------------------------------------

export function getAllSources(): WikiSource[] {
  return sources();
}

export function getSource(slug: string): WikiSource | undefined {
  return sources().find((s) => s.slug === slug);
}

// ---------------------------------------------------------------------------
// Queries
// ---------------------------------------------------------------------------

export function getAllQueries(): WikiQuery[] {
  return queriesData();
}

export function getQuery(slug: string): WikiQuery | undefined {
  return queriesData().find((q) => q.slug === slug);
}

// ---------------------------------------------------------------------------
// Graph
// ---------------------------------------------------------------------------

export function getGraphData(): GraphData {
  if (!_graph) _graph = readJson<GraphData>("graph.json");
  return _graph;
}

// ---------------------------------------------------------------------------
// Search
// ---------------------------------------------------------------------------

export function getSearchIndex(): SearchEntry[] {
  if (!_searchIndex) _searchIndex = readJson<SearchEntry[]>("search-index.json");
  return _searchIndex;
}

export function searchPages(query: string): SearchEntry[] {
  const q = query.toLowerCase();
  return getSearchIndex().filter(
    (entry) =>
      entry.title.toLowerCase().includes(q) ||
      entry.slug.includes(q) ||
      (entry.sfs && entry.sfs.includes(q)) ||
      (entry.short_name && entry.short_name.toLowerCase().includes(q)) ||
      entry.tags.some((t) => t.includes(q)) ||
      entry.snippet.toLowerCase().includes(q)
  );
}

// ---------------------------------------------------------------------------
// Slug → type map (for wikilink resolution at runtime)
// ---------------------------------------------------------------------------

export function getSlugTypeMap(): Record<string, string> {
  const map: Record<string, string> = {};
  for (const e of entities()) map[e.slug] = "entity";
  for (const c of concepts()) map[c.slug] = "concept";
  for (const s of sources()) map[s.slug] = "source";
  for (const q of queriesData()) map[q.slug] = "query";
  return map;
}
