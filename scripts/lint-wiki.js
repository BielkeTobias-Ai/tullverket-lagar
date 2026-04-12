#!/usr/bin/env node
/**
 * lint-wiki.js — Hälsokontroll för Tullverket wiki
 *
 * Kontrollerar:
 * 1. Frontmatter-komplethet (alla obligatoriska fält)
 * 2. Symmetriska overlappar-kopplingar
 * 3. Broken wikilinks (entity-till-entity)
 * 4. Saknade koncept (domäner utan koncept-sida)
 * 5. Index.md-konsistens
 *
 * Körning: node scripts/lint-wiki.js
 * Eller:   cd command-center && npm run lint-wiki
 */

const fs = require("fs");
const path = require("path");

const WIKI_ROOT = path.resolve(__dirname, "../wiki");
const ENTITIES_DIR = path.join(WIKI_ROOT, "entities");
const CONCEPTS_DIR = path.join(WIKI_ROOT, "concepts");
const SOURCES_DIR = path.join(WIKI_ROOT, "sources");
const COMPARISONS_DIR = path.join(WIKI_ROOT, "comparisons");
const QUERIES_DIR = path.join(WIKI_ROOT, "queries");
const INDEX_PATH = path.join(WIKI_ROOT, "index.md");

const issues = [];
const warnings = [];

function warn(msg) { warnings.push(msg); }
function error(msg) { issues.push(msg); }

function getFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => f.endsWith(".md"));
}

function getNames(dir) {
  return new Set(getFiles(dir).map(f => f.slice(0, -3)));
}

// --- 1. Frontmatter-komplethet ---

/**
 * Inferera source_type fran frontmatter-innehall och filnamn.
 * Anvands nar source_type saknas explicit. --fix skriver ut inferad source_type till filen.
 */
function inferSourceType(fm, filename) {
  const explicit = fm.match(/^source_type:\s*(\S+)/m);
  if (explicit) return explicit[1];

  // EU-forordningar har CELEX-nummer
  if (/^celex:/m.test(fm)) return "eu-forordning";

  // Svenska forordningar/kungorelser: filnamn innehaller "forordning" eller "kungorelsen"
  // men INTE som del av ett lagnamn (t.ex. "lagen-om-forordningar" vore fortfarande lag)
  const name = filename.slice(0, -3);
  if (/lag(en)?$/i.test(name)) return "lag";           // containerlagen, fiskelagen → lag
  if (/lag-[a-z]/i.test(name)) return "lag";           // rare edge case
  if (/forordning(en)?/i.test(name)) return "forordning";   // containerforordningen, forordningen-om-*
  if (/^kungorelsen-/i.test(name)) return "forordning";

  return "lag";
}

/**
 * Hamta obligatoriska falt baserat pa entity_type + source_type.
 */
function getRequiredFields(entityType, sourceType) {
  if (entityType === "myndighet") {
    return ["connections", "ansvarsomrade"];
  }
  if (entityType === "concept" || entityType === "koncept") {
    return ["connections"];
  }
  if (entityType === "avtal" || entityType === "organisation" || entityType === "system" || entityType === "person") {
    return ["connections"];
  }

  // Default: entity_type: lag — kravas baserat pa source_type
  if (sourceType === "eu-forordning") {
    return ["connections", "situationer", "celex"];
  }
  if (sourceType === "forordning") {
    return ["connections", "situationer", "befogenheter", "sfs"];
  }
  // Default: lag
  return ["connections", "situationer", "befogenheter", "straffskala", "sfs"];
}

function checkFrontmatter() {
  const files = getFiles(ENTITIES_DIR);

  for (const f of files) {
    const content = fs.readFileSync(path.join(ENTITIES_DIR, f), "utf8");

    const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!fmMatch) {
      error(`FRONTMATTER  ${f.slice(0, -3)}: saknar frontmatter`);
      continue;
    }
    const fm = fmMatch[1];

    const entityTypeMatch = fm.match(/^entity_type:\s*(\S+)/m);
    const entityType = entityTypeMatch ? entityTypeMatch[1] : "lag";

    const sourceType = entityType === "lag" ? inferSourceType(fm, f) : null;
    const required = getRequiredFields(entityType, sourceType);

    const missing = required.filter(field => !new RegExp(`^${field}:`, "m").test(fm));
    if (missing.length > 0) {
      error(`FRONTMATTER  ${f.slice(0, -3)} [${entityType}${sourceType ? "/" + sourceType : ""}]: saknar ${missing.join(", ")}`);
    }
  }
}

// --- 1b. Comparison frontmatter ---

function checkComparisonFrontmatter() {
  const required = ["title", "type", "compares", "sources"];
  const files = getFiles(COMPARISONS_DIR);

  for (const f of files) {
    const content = fs.readFileSync(path.join(COMPARISONS_DIR, f), "utf8");
    const missing = required.filter(field => !new RegExp(`^${field}:`, "m").test(content));
    if (missing.length > 0) {
      error(`FRONTMATTER  comparisons/${f.slice(0, -3)}: saknar ${missing.join(", ")}`);
    }

    // Verify type: comparison
    if (!/^type:\s*comparison/m.test(content)) {
      error(`FRONTMATTER  comparisons/${f.slice(0, -3)}: type måste vara "comparison"`);
    }

    // Verify compares targets exist as entities
    const entityNames = getNames(ENTITIES_DIR);
    const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (fmMatch) {
      const fm = fmMatch[1];
      const comparesSection = fm.match(/compares:\n((?:\s+-.*\n)*)/);
      if (comparesSection) {
        let tm;
        const linkRe = /\[\[([^\]|]+)\]\]/g;
        while ((tm = linkRe.exec(comparesSection[1])) !== null) {
          if (!entityNames.has(tm[1])) {
            error(`COMPARISON  comparisons/${f.slice(0, -3)}: jämför med [[${tm[1]}]] som inte finns i entities/`);
          }
        }
      }
    }
  }
}

// --- 2. Symmetriska overlappar ---

/**
 * Extrahera bara frontmatter (mellan --- markers) for att undvika att body-text
 * falskt matchar som connection-block.
 */
function extractFrontmatter(content) {
  const m = content.match(/^---\n([\s\S]*?)\n---/);
  return m ? m[1] : "";
}

function checkSymmetry() {
  const entityNames = getNames(ENTITIES_DIR);
  const conceptNames = getNames(CONCEPTS_DIR);
  const validTargets = new Set([...entityNames, ...conceptNames]);

  for (const f of getFiles(ENTITIES_DIR)) {
    const name = f.slice(0, -3);
    const content = fs.readFileSync(path.join(ENTITIES_DIR, f), "utf8");
    const fm = extractFrontmatter(content);
    const blocks = fm.split(/\n\s*- type:/);

    for (const block of blocks) {
      if (!block.includes("overlappar")) continue;
      const tm = block.match(/target:\s*"\[\[([^\]]+)\]\]"/);
      if (!tm) continue;
      const target = tm[1];

      if (!validTargets.has(target)) {
        error(`MISSING_TARGET  ${name} → ${target} (entitet/koncept existerar inte)`);
        continue;
      }

      // Concept-targets har ingen reciprok-regel (lag kan referera till koncept utan tvang pa koncept att referera tillbaka)
      if (conceptNames.has(target)) continue;

      const tc = fs.readFileSync(path.join(ENTITIES_DIR, target + ".md"), "utf8");
      const tfm = extractFrontmatter(tc);
      const tblocks = tfm.split(/\n\s*- type:/);
      let found = false;
      for (const tb of tblocks) {
        if (tb.includes("overlappar") && tb.includes(name)) { found = true; break; }
      }
      if (!found) {
        error(`ASYMMETRIC  ${name} ↔ ${target} (${name} har overlappar men ${target} saknar reciprok)`);
      }
    }
  }
}

// --- 3. Broken wikilinks (entity→entity) ---

function checkWikilinks() {
  const queriesDir = path.join(WIKI_ROOT, "queries");
  const comparisonsDir = path.join(WIKI_ROOT, "comparisons");
  const entityNames = getNames(ENTITIES_DIR);
  const conceptNames = getNames(CONCEPTS_DIR);
  const sourceNames = getNames(SOURCES_DIR);
  const queryNames = getNames(queriesDir);
  const comparisonNames = getNames(comparisonsDir);
  const allNames = new Set([...entityNames, ...conceptNames, ...sourceNames, ...queryNames, ...comparisonNames]);

  // Special files i wiki root
  const rootFiles = getFiles(WIKI_ROOT).map(f => f.slice(0, -3));
  for (const rf of rootFiles) allNames.add(rf);

  // Case-insensitive lookup (Obsidian är case-insensitive)
  const allNamesLower = new Set([...allNames].map(n => n.toLowerCase()));

  // Alias-wikilinks ([[target|display]]) — kolla bara target-delen
  // Hanterar escaped pipe i tabeller: [[target\|display]]
  const wikilinkRe = /\[\[([^\]|\\]+)(?:[\\|][^\]]+)?\]\]/g;

  for (const dir of [ENTITIES_DIR, CONCEPTS_DIR, COMPARISONS_DIR]) {
    for (const f of getFiles(dir)) {
      const content = fs.readFileSync(path.join(dir, f), "utf8");
      let match;
      while ((match = wikilinkRe.exec(content)) !== null) {
        const target = match[1].trim();
        // Ignorera URL-liknande, headers, och källreferenser (med årtal)
        if (target.includes("/") || target.includes("#")) continue;
        if (target.match(/-\d{4}-\d+$/)) continue; // käll-sida typ smugglingslagen-2000-1225
        if (target === "att-hamta") continue; // intentional gap-marker (raw/att-hamta.md)
        if (!allNamesLower.has(target.toLowerCase())) {
          warn(`BROKEN_LINK  ${f.slice(0, -3)} → [[${target}]]`);
        }
      }
    }
  }
}

// --- 4. Index-konsistens ---

function checkIndex() {
  if (!fs.existsSync(INDEX_PATH)) {
    error("INDEX  wiki/index.md saknas!");
    return;
  }

  const indexContent = fs.readFileSync(INDEX_PATH, "utf8");
  const entityNames = getNames(ENTITIES_DIR);
  const conceptNames = getNames(CONCEPTS_DIR);
  const sourceNames = getNames(SOURCES_DIR);

  for (const name of entityNames) {
    if (!indexContent.includes(`[[${name}]]`)) {
      error(`INDEX  entitet ${name} saknas i index.md`);
    }
  }
  for (const name of conceptNames) {
    if (!indexContent.includes(name)) {
      error(`INDEX  koncept ${name} saknas i index.md`);
    }
  }
  for (const name of sourceNames) {
    if (!indexContent.includes(`[[${name}]]`)) {
      warn(`INDEX  källa ${name} saknas i index.md`);
    }
  }

  const comparisonNames = getNames(COMPARISONS_DIR);
  for (const name of comparisonNames) {
    if (!indexContent.includes(`[[${name}]]`)) {
      error(`INDEX  jämförelse ${name} saknas i index.md`);
    }
  }
}

// --- 5. Stats ---

function printStats() {
  const entities = getFiles(ENTITIES_DIR).length;
  const concepts = getFiles(CONCEPTS_DIR).length;
  const sources = getFiles(SOURCES_DIR).length;
  const comparisons = getFiles(COMPARISONS_DIR).length;
  const queries = getFiles(QUERIES_DIR).length;

  let overlapCount = 0;
  let totalConnections = 0;
  for (const f of getFiles(ENTITIES_DIR)) {
    const content = fs.readFileSync(path.join(ENTITIES_DIR, f), "utf8");
    const overlaps = (content.match(/type:\s*overlappar/g) || []).length;
    const all = (content.match(/- type:\s*(overlappar|hanvisar-till|kompletterar|speciallag-till)/g) || []).length;
    overlapCount += overlaps;
    totalConnections += all;
  }

  console.log("\n📊 Wiki-statistik:");
  console.log(`   Entiteter:    ${entities}`);
  console.log(`   Koncept:      ${concepts}`);
  console.log(`   Källor:       ${sources}`);
  console.log(`   Jämförelser:  ${comparisons}`);
  console.log(`   Frågor:       ${queries}`);
  console.log(`   Kopplingar:   ${totalConnections} (varav ${overlapCount} overlappar)`);
}

// --- FIX: auto-fix lint-problem ---

const fixApplied = [];

/**
 * Hitta slutet av ett YAML-arrayfalt i frontmatter (hanterar multi-line arrays).
 * Returnerar index efter sista arrayraden.
 */
function findFieldBlockEnd(lines, fieldIdx) {
  let i = fieldIdx + 1;
  while (i < lines.length && /^\s+/.test(lines[i])) i++;
  return i;
}

/**
 * Skriv ut source_type explicit till alla lag-entities som saknar det.
 * Inferar fran celex och filnamn.
 */
function fixSourceType() {
  let count = 0;
  for (const f of getFiles(ENTITIES_DIR)) {
    const filepath = path.join(ENTITIES_DIR, f);
    const content = fs.readFileSync(filepath, "utf8");
    const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!fmMatch) continue;
    const fm = fmMatch[1];

    const etMatch = fm.match(/^entity_type:\s*(\S+)/m);
    const et = etMatch ? etMatch[1] : "lag";
    if (et !== "lag") continue;
    if (/^source_type:/m.test(fm)) continue;

    const st = inferSourceType(fm, f);
    const lines = content.split("\n");
    const etLineIdx = lines.findIndex(l => /^entity_type:/.test(l));
    if (etLineIdx === -1) continue;

    lines.splice(etLineIdx + 1, 0, `source_type: ${st}`);
    fs.writeFileSync(filepath, lines.join("\n"));
    count++;
    fixApplied.push(`source_type ${st}: ${f.slice(0, -3)}`);
  }
  return count;
}

/**
 * Lagg till tom straffskala: [] till lagar som saknar det.
 * TODO-kommentar markerar manuell uppfoljning.
 */
function fixEmptyStraffskala() {
  let count = 0;
  for (const f of getFiles(ENTITIES_DIR)) {
    const filepath = path.join(ENTITIES_DIR, f);
    const content = fs.readFileSync(filepath, "utf8");
    const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!fmMatch) continue;
    const fm = fmMatch[1];

    const etMatch = fm.match(/^entity_type:\s*(\S+)/m);
    const et = etMatch ? etMatch[1] : "lag";
    if (et !== "lag") continue;

    const stMatch = fm.match(/^source_type:\s*(\S+)/m);
    const st = stMatch ? stMatch[1] : inferSourceType(fm, f);
    if (st !== "lag") continue;
    if (/^straffskala:/m.test(fm)) continue;

    // Infoga fore sista --- (frontmatter-end)
    const lines = content.split("\n");
    let fmEndIdx = -1;
    for (let i = 1; i < lines.length; i++) {
      if (lines[i] === "---") { fmEndIdx = i; break; }
    }
    if (fmEndIdx === -1) continue;

    lines.splice(fmEndIdx, 0, "straffskala: []  # TODO: fylla i fran rakallan");
    fs.writeFileSync(filepath, lines.join("\n"));
    count++;
    fixApplied.push(`straffskala []: ${f.slice(0, -3)}`);
  }
  return count;
}

/**
 * For varje A → overlappar → B dar B saknar reciprok, lagg till B → overlappar → A.
 * Markeras med "Speglad fran" for manuell verifiering.
 */
function fixAsymmetric() {
  let count = 0;
  const entityNames = getNames(ENTITIES_DIR);

  for (const f of getFiles(ENTITIES_DIR)) {
    const name = f.slice(0, -3);
    const content = fs.readFileSync(path.join(ENTITIES_DIR, f), "utf8");
    const fm = extractFrontmatter(content);
    const blocks = fm.split(/\n\s*- type:/);

    for (const block of blocks) {
      if (!block.includes("overlappar")) continue;
      const tm = block.match(/target:\s*"\[\[([^\]]+)\]\]"/);
      if (!tm) continue;
      const target = tm[1];

      if (!entityNames.has(target)) continue;

      const targetPath = path.join(ENTITIES_DIR, target + ".md");
      const tc = fs.readFileSync(targetPath, "utf8");
      const tfm = extractFrontmatter(tc);
      const tblocks = tfm.split(/\n\s*- type:/);
      let found = false;
      for (const tb of tblocks) {
        if (tb.includes("overlappar") && tb.includes(name)) { found = true; break; }
      }
      if (found) continue;

      const ctxMatch = block.match(/context:\s*"([^"]+)"/);
      const origCtx = ctxMatch ? ctxMatch[1] : `Koppling till [[${name}]]`;

      // Find connections: section in target frontmatter
      const tLines = tc.split("\n");
      let fmEndIdx = -1;
      for (let i = 1; i < tLines.length; i++) {
        if (tLines[i] === "---") { fmEndIdx = i; break; }
      }
      if (fmEndIdx === -1) continue;

      // Find `connections:` block start in target frontmatter
      let connIdx = -1;
      for (let i = 0; i < fmEndIdx; i++) {
        if (/^connections:/.test(tLines[i])) { connIdx = i; break; }
      }
      if (connIdx === -1) continue;

      // Insert new block right after connections: line (or at end of connections block)
      const connEnd = findFieldBlockEnd(tLines, connIdx);
      const insertIdx = connEnd;

      const newBlock = [
        "  - type: overlappar",
        `    target: "[[${name}]]"`,
        `    context: "Speglad fran [[${name}]] — ${origCtx}"`,
      ];

      tLines.splice(insertIdx, 0, ...newBlock);
      fs.writeFileSync(targetPath, tLines.join("\n"));
      count++;
      fixApplied.push(`asymmetric: ${target} ← ${name}`);
    }
  }
  return count;
}

/**
 * Normalisera wikilinks: casing och å/ä/ö till filnamns-form. Hanterar kanda alias.
 */
function fixBrokenLinks() {
  const normalize = (s) => s.toLowerCase()
    .replace(/[åä]/g, "a").replace(/ö/g, "o")
    .replace(/[ÅÄ]/g, "a").replace(/Ö/g, "o");

  const allNames = new Set([
    ...getNames(ENTITIES_DIR),
    ...getNames(CONCEPTS_DIR),
    ...getNames(SOURCES_DIR),
    ...getNames(COMPARISONS_DIR),
  ]);
  const canonicalMap = new Map();
  for (const n of allNames) canonicalMap.set(normalize(n), n);

  // Kanda alias → canonical (lank-mal som ska omdirigeras)
  const aliases = {
    "tullkodex-for-unionen": "ucc",
    "unionstullkodexen": "ucc",
    "unionstullkodex": "ucc",
    "cites-grundforordningen-eg-338-97": "cites-forordningen",
    "eu-forordning-1007-2009-handel-med-salprodukter": "salproduktforordningen",
    "eu-forordning-1007-2009-salprodukter": "salproduktforordningen",
    "eu-forordning-2015-1850-genomforing-salprodukter": "salprodukter-genomforande",
    "forordning-om-brandfarliga-och-explosiva-varor": "lagen-om-brandfarliga-och-explosiva-varor",
    "lagen-om-internationella-sanktioner": "lagen-om-vissa-internationella-sanktioner",
  };

  let count = 0;
  const dirs = [ENTITIES_DIR, CONCEPTS_DIR, COMPARISONS_DIR];

  for (const dir of dirs) {
    for (const f of getFiles(dir)) {
      const filepath = path.join(dir, f);
      let content = fs.readFileSync(filepath, "utf8");
      const original = content;

      content = content.replace(/\[\[([^\]|\\]+)(\|[^\]]+)?\]\]/g, (match, target, display) => {
        target = target.trim();
        if (target.includes("/") || target.includes("#")) return match;
        if (target.match(/-\d{4}-\d+$/)) return match;
        if (target === "att-hamta") return match;

        // 1. Direct alias
        if (aliases[target]) {
          fixApplied.push(`link alias: [[${target}]] → [[${aliases[target]}]] (${f.slice(0, -3)})`);
          return `[[${aliases[target]}]]${display || ""}`;
        }

        // 2. Casing / å-ä-ö
        const canonical = canonicalMap.get(normalize(target));
        if (canonical && canonical !== target) {
          fixApplied.push(`link case: [[${target}]] → [[${canonical}]] (${f.slice(0, -3)})`);
          return `[[${canonical}]]${display || ""}`;
        }

        return match;
      });

      if (content !== original) {
        fs.writeFileSync(filepath, content);
        count++;
      }
    }
  }
  return count;
}

function runFixes() {
  console.log("🔧 Kor auto-fix...\n");
  const sourceType = fixSourceType();
  const straffskala = fixEmptyStraffskala();
  const asymmetric = fixAsymmetric();
  const brokenLinks = fixBrokenLinks();

  console.log(`   source_type tillagd:        ${sourceType}`);
  console.log(`   straffskala []:             ${straffskala}`);
  console.log(`   Asymmetric reciprok:        ${asymmetric}`);
  console.log(`   Filer med lank-fix:         ${brokenLinks}`);
  console.log();

  if (process.argv.includes("--verbose") && fixApplied.length > 0) {
    console.log("Detaljer:");
    for (const a of fixApplied) console.log(`   • ${a}`);
    console.log();
  } else if (fixApplied.length > 0) {
    console.log(`   (${fixApplied.length} operationer, kor --verbose for detaljer)\n`);
  }
}

// --- Kör ---

const FIX_MODE = process.argv.includes("--fix");

console.log("🔍 Lint: wiki/\n");

if (FIX_MODE) {
  runFixes();
}

checkFrontmatter();
checkComparisonFrontmatter();
checkSymmetry();
checkWikilinks();
checkIndex();
printStats();

if (issues.length > 0) {
  console.log(`\n❌ ${issues.length} fel:`);
  for (const i of issues) console.log(`   ${i}`);
}

if (warnings.length > 0) {
  console.log(`\n⚠️  ${warnings.length} varningar:`);
  for (const w of warnings) console.log(`   ${w}`);
}

if (issues.length === 0 && warnings.length === 0) {
  console.log("\n✅ Inga problem hittade.");
}

process.exit(issues.length > 0 ? 1 : 0);
