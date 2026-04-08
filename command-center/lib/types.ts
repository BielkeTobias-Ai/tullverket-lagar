// ---------------------------------------------------------------------------
// Wiki data model — mirrors the CLAUDE.md YAML schema
// ---------------------------------------------------------------------------

// --- Frontmatter field types ---

export type ConnectionType =
  | "overlappar"
  | "hanvisar-till"
  | "kompletterar"
  | "speciallag-till"
  | "kompletteras-av";

export interface Connection {
  type: ConnectionType;
  target: string; // raw wikilink, e.g. "[[smugglingslagen]]"
  targetSlug: string; // resolved slug, e.g. "smugglingslagen"
  context: string;
}

export interface Straffskala {
  brott: string;
  straff: string;
}

export type EntityType =
  | "lag"
  | "myndighet"
  | "organisation"
  | "avtal"
  | "person"
  | "system";

export type SourceType =
  | "lag"
  | "forordning"
  | "artikel"
  | "rapport"
  | "webb"
  | "bok"
  | "ovrigt";

export type WikiPageType =
  | "entity"
  | "concept"
  | "source"
  | "comparison"
  | "query"
  | "overview";

export type DepthLevel = "grund" | "standard" | "full";

// --- Wiki page types ---

interface WikiPageBase {
  slug: string;
  title: string;
  type: WikiPageType;
  created: string;
  updated: string;
  tags: string[];
  sources: string[];
  bodyHtml: string;
  bodyRaw: string;
}

export interface WikiEntity extends WikiPageBase {
  type: "entity";
  entity_type: EntityType;
  sfs?: string;
  short_name?: string;
  status?: "gallande" | "upphavd" | "andrad";
  befogenheter: string[];
  tillampningsomrade?: string;
  straffskala: Straffskala[];
  situationer: string[];
  connections: Connection[];
  depth: DepthLevel;
}

export interface WikiConcept extends WikiPageBase {
  type: "concept";
  domain?: string;
}

export interface WikiSource extends WikiPageBase {
  type: "source";
  source_type?: SourceType;
  author?: string;
  date_published?: string;
  url?: string;
}

export interface WikiComparison extends WikiPageBase {
  type: "comparison";
  compares: string[];
}

export interface WikiQuery extends WikiPageBase {
  type: "query";
  question?: string;
}

export interface WikiOverview extends WikiPageBase {
  type: "overview";
}

export type WikiPage =
  | WikiEntity
  | WikiConcept
  | WikiSource
  | WikiComparison
  | WikiQuery
  | WikiOverview;

// --- Graph types (for Cytoscape.js) ---

export interface GraphNode {
  id: string;
  label: string;
  type: WikiPageType;
  entity_type?: EntityType;
  sfs?: string;
  status?: string;
  tags: string[];
  depth: DepthLevel;
  connectionCount: number;
  category?: string;
}

export interface GraphEdge {
  id: string;
  source: string;
  target: string;
  type: ConnectionType;
  context: string;
}

export interface GraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

// --- Search index ---

export interface SearchEntry {
  slug: string;
  title: string;
  type: WikiPageType;
  entity_type?: EntityType;
  sfs?: string;
  short_name?: string;
  tags: string[];
  snippet: string;
  url: string;
}

// --- Parsed vault output ---

export interface VaultData {
  entities: WikiEntity[];
  concepts: WikiConcept[];
  sources: WikiSource[];
  comparisons: WikiComparison[];
  queries: WikiQuery[];
  graph: GraphData;
  searchIndex: SearchEntry[];
  meta: {
    parsedAt: string;
    totalPages: number;
    validationErrors: string[];
  };
}
