/**
 * Chat context builder — tag/situation filtering + system prompt construction.
 *
 * Strategy: match user query against wiki entity tags, situations, titles,
 * and connection contexts. Inject matched entities as structured context
 * into the system prompt. No RAG / embeddings needed at current scale (~12 entities).
 */

import type { WikiEntity, Connection } from "./types";

// ---------------------------------------------------------------------------
// Relevance scoring
// ---------------------------------------------------------------------------

interface ScoredEntity {
  entity: WikiEntity;
  score: number;
  matchReasons: string[];
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-zåäö0-9\s-]/g, "")
    .split(/\s+/)
    .filter((w) => w.length > 2);
}

/** Score how relevant an entity is to a user query. */
function scoreEntity(entity: WikiEntity, queryTokens: string[]): ScoredEntity {
  const reasons: string[] = [];
  let score = 0;

  const titleLower = entity.title.toLowerCase();
  const shortNameLower = (entity.short_name || "").toLowerCase();
  const queryFull = queryTokens.join(" ");

  // Title / short_name match (highest weight)
  for (const token of queryTokens) {
    if (titleLower.includes(token) || shortNameLower.includes(token)) {
      score += 10;
      reasons.push(`title: ${token}`);
    }
  }

  // SFS-number match
  if (entity.sfs && queryFull.includes(entity.sfs.replace(":", ""))) {
    score += 15;
    reasons.push("sfs");
  }

  // Tag match
  for (const tag of entity.tags) {
    for (const token of queryTokens) {
      if (tag.includes(token) || token.includes(tag)) {
        score += 5;
        reasons.push(`tag: ${tag}`);
      }
    }
  }

  // Situation match
  for (const sit of entity.situationer) {
    const sitLower = sit.toLowerCase();
    for (const token of queryTokens) {
      if (sitLower.includes(token)) {
        score += 7;
        reasons.push(`situation: ${sit}`);
      }
    }
  }

  // Befogenheter match
  for (const bef of entity.befogenheter) {
    const befLower = bef.toLowerCase();
    for (const token of queryTokens) {
      if (befLower.includes(token)) {
        score += 3;
        reasons.push(`befogenhet: ${bef}`);
      }
    }
  }

  // Connection context match
  for (const conn of entity.connections) {
    const ctxLower = conn.context.toLowerCase();
    for (const token of queryTokens) {
      if (ctxLower.includes(token)) {
        score += 4;
        reasons.push(`connection: ${conn.targetSlug}`);
        break;
      }
    }
  }

  // Tillämpningsområde match
  if (entity.tillampningsomrade) {
    const tillLower = entity.tillampningsomrade.toLowerCase();
    for (const token of queryTokens) {
      if (tillLower.includes(token)) {
        score += 4;
        reasons.push(`tillämpning: ${token}`);
      }
    }
  }

  return { entity, score, matchReasons: [...new Set(reasons)] };
}

// ---------------------------------------------------------------------------
// Context selection
// ---------------------------------------------------------------------------

const MAX_CONTEXT_ENTITIES = 6;
const MIN_SCORE_THRESHOLD = 3;

/** Select the most relevant entities for a query. */
export function selectRelevantEntities(
  entities: WikiEntity[],
  query: string
): ScoredEntity[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];

  const scored = entities
    .map((e) => scoreEntity(e, tokens))
    .filter((s) => s.score >= MIN_SCORE_THRESHOLD)
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_CONTEXT_ENTITIES);

  return scored;
}

// ---------------------------------------------------------------------------
// Entity → context string
// ---------------------------------------------------------------------------

function formatConnection(conn: Connection): string {
  const typeLabels: Record<string, string> = {
    overlappar: "överlappar",
    "hanvisar-till": "hänvisar till",
    kompletterar: "kompletterar",
    "kompletteras-av": "kompletteras av",
    "speciallag-till": "speciallag till",
  };
  return `${typeLabels[conn.type] || conn.type} ${conn.targetSlug}: ${conn.context}`;
}

function entityToContext(entity: WikiEntity): string {
  const parts: string[] = [];

  parts.push(`## ${entity.title}${entity.sfs ? ` (SFS ${entity.sfs})` : ""}`);

  if (entity.short_name) parts.push(`Vardagsnamn: ${entity.short_name}`);
  if (entity.status) parts.push(`Status: ${entity.status}`);
  if (entity.tillampningsomrade)
    parts.push(`Tillämpningsområde: ${entity.tillampningsomrade}`);

  if (entity.befogenheter.length > 0) {
    parts.push(`Befogenheter: ${entity.befogenheter.join("; ")}`);
  }

  if (entity.straffskala.length > 0) {
    const straff = entity.straffskala
      .map((s) => `${s.brott}: ${s.straff}`)
      .join("; ");
    parts.push(`Straffskalor: ${straff}`);
  }

  if (entity.situationer.length > 0) {
    parts.push(`Typiska situationer: ${entity.situationer.join("; ")}`);
  }

  if (entity.connections.length > 0) {
    parts.push(`Kopplingar: ${entity.connections.map(formatConnection).join(". ")}`);
  }

  // Include wiki body (truncated) for full-depth entities
  if (entity.depth === "full" && entity.bodyRaw) {
    const bodyTruncated = entity.bodyRaw.slice(0, 1500);
    parts.push(`\nDetaljer:\n${bodyTruncated}`);
  }

  return parts.join("\n");
}

// ---------------------------------------------------------------------------
// System prompt builder
// ---------------------------------------------------------------------------

const SYSTEM_PREAMBLE = `Du är en kunskapsassistent specialiserad på svensk tullrätt. Du hjälper tulltjänstemän att snabbt hitta rätt lag, befogenhet och koppling mellan lagar.

REGLER:
1. Svara ENBART baserat på kunskapsbasen nedan. Fabricera aldrig information.
2. Om svaret inte finns i kunskapsbasen, säg tydligt: "Jag hittar inte den informationen i kunskapsbasen."
3. Citera alltid vilken lag du refererar till med namn och SFS-nummer.
4. Vid osäkerhet, ange att informationen bör verifieras mot aktuell lagtext på riksdagen.se.
5. Svara koncist och strukturerat — tulltjänstemän behöver snabba svar i fält.
6. Om frågan gäller en konkret situation, lista alla tillämpliga lagar och deras befogenheter.

SPRÅK: Svara alltid på svenska. Använd juridiska termer i sin officiella form.`;

export function buildSystemPrompt(
  entities: WikiEntity[],
  query: string
): { prompt: string; usedEntities: string[] } {
  const relevant = selectRelevantEntities(entities, query);

  if (relevant.length === 0) {
    return {
      prompt: `${SYSTEM_PREAMBLE}\n\nKUNSKAPSBAS:\nInga specifikt relevanta lagar hittades för denna fråga. Informera användaren att frågan ligger utanför kunskapsbasens nuvarande täckning.`,
      usedEntities: [],
    };
  }

  const contextBlocks = relevant.map((r) => entityToContext(r.entity));

  const prompt = `${SYSTEM_PREAMBLE}\n\nKUNSKAPSBAS (${relevant.length} relevanta lagar):\n\n${contextBlocks.join("\n\n---\n\n")}`;

  return {
    prompt,
    usedEntities: relevant.map((r) => r.entity.slug),
  };
}
