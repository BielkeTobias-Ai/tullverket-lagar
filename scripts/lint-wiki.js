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

function checkFrontmatter() {
  const required = ["connections", "situationer", "befogenheter", "straffskala", "sfs"];
  const files = getFiles(ENTITIES_DIR);

  for (const f of files) {
    const content = fs.readFileSync(path.join(ENTITIES_DIR, f), "utf8");
    const missing = required.filter(field => !new RegExp(`^${field}:`, "m").test(content));
    if (missing.length > 0) {
      error(`FRONTMATTER  ${f.slice(0, -3)}: saknar ${missing.join(", ")}`);
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

function checkSymmetry() {
  const entityNames = getNames(ENTITIES_DIR);

  for (const f of getFiles(ENTITIES_DIR)) {
    const name = f.slice(0, -3);
    const content = fs.readFileSync(path.join(ENTITIES_DIR, f), "utf8");
    const blocks = content.split(/\n\s*- type:/);

    for (const block of blocks) {
      if (!block.includes("overlappar")) continue;
      const tm = block.match(/target:\s*"\[\[([^\]]+)\]\]"/);
      if (!tm) continue;
      const target = tm[1];

      if (!entityNames.has(target)) {
        error(`MISSING_TARGET  ${name} → ${target} (entitet existerar inte)`);
        continue;
      }

      const tc = fs.readFileSync(path.join(ENTITIES_DIR, target + ".md"), "utf8");
      const tblocks = tc.split(/\n\s*- type:/);
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

// --- Kör ---

console.log("🔍 Lint: wiki/\n");

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
