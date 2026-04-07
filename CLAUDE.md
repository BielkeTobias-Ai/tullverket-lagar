# Tullverket Lagar — LLM Wiki Schema

## Identitet

Detta vault är en personlig kunskapsbas om **svensk tullrätt** — Tullverkets lagar, förordningar, EU-regelverk och relaterad praxis. LLM:en agerar wiki-underhållare. Människan kuraterar källor, styr utforskningen och ställer frågorna. LLM:en gör allt grovjobb: sammanfattning, korsreferering, arkivering, syntes.

**Språk:** Svenska för allt wiki-innehåll. Juridiska och tekniska termer behåller sin officiella form (t.ex. "KN-nummer", "tullvärde", "AEO-tillstånd"). Engelska termer används bara när det är branschstandard utan svensk motsvarighet.

---

## Arkitektur — Tre lager

### 1. `raw/` — Källor (immutable)
Råkällor: artiklar, PDF:er, lagtexter, webbklipp, anteckningar. LLM:en läser men **ÄNDRAR ALDRIG** filer i `raw/`. Detta är sanningskällan.

- `raw/assets/` — Nedladdade bilder, PDF:er, bilagor

### 2. `wiki/` — Kunskapsbas (LLM-ägd)
LLM-genererade och underhållna markdown-filer. LLM:en skapar, uppdaterar, korsrefererar och håller allt konsistent. Människan läser; LLM:en skriver.

```
wiki/
  index.md              # Innehållskatalog — uppdateras vid varje ändring
  log.md                # Kronologisk aktivitetslogg — append-only
  overview.md           # Toppnivå-syntes av all kunskap
  sources/              # En sammanfattningssida per källa
  entities/             # Entiteter: lagar, myndigheter, organisationer, avtal
  concepts/             # Koncept och ämnesområden
  comparisons/          # Analyser, jämförelser, utredningar
  queries/              # Arkiverade svar på betydande frågor
```

### 3. `CLAUDE.md` — Schema (denna fil)
Operationsregler som styr LLM:ens beteende. Co-evolveras av människa och LLM.

---

## Sidformat

### Frontmatter (obligatoriskt)
Varje wiki-sida MÅSTE ha YAML-frontmatter:

```yaml
---
title: Sidtitel
type: source | entity | concept | comparison | query | overview
created: YYYY-MM-DD
updated: YYYY-MM-DD
tags:
  - relevant-tagg
sources:
  - "[[källa-sida]]"
---
```

**Typ-specifika fält:**

| Typ | Extra fält |
|-----|-----------|
| `source` | `source_type: lag \| förordning \| artikel \| rapport \| webb \| bok \| övrigt`, `author:`, `date_published:`, `url:` (om tillämpligt) |
| `entity` | `entity_type: lag \| myndighet \| organisation \| avtal \| person \| system` |
| `concept` | `domain:` (t.ex. tullförfaranden, tullvärde, ursprung) |
| `comparison` | `compares: ["[[sida1]]", "[[sida2]]"]` |
| `query` | `question:` (den ursprungliga frågan) |

### Innehållskonventioner

- **Wikilinks**: Använd `[[sidnamn]]` för alla korsreferenser. `[[sidnamn|visningstext]]` när sidnamnet inte läses naturligt
- **Källhänvisning**: Varje faktapåstående ska kunna spåras till en källa via `[[källa-sida]]`
- **Callouts** för speciella annotationer:

```markdown
> [!contradiction] Motstridiga uppgifter
> Källa A säger X, men källa B säger Y. Se [[källa-a]] vs [[källa-b]].

> [!gap] Informationslucka
> Vi saknar data om X. Möjlig källa: Tullverkets årsrapport 2024.

> [!stale] Potentiellt inaktuellt
> Denna uppgift baseras på lagstiftning från 2020. Kontrollera mot aktuell version.

> [!question] Öppen fråga
> Hur påverkar det nya UCC-tillägget svenska frizonskrav?

> [!updated] Nyligen uppdaterad
> Reviderad YYYY-MM-DD efter ingest av [[ny-källa]].
```

### Filnamngivning

- Gemener, bindestreck för mellanslag: `tullag-2024.md`
- Inga specialtecken (åäö OK i sidinnehåll men undvik i filnamn — använd `a`, `o` istället)
- Prefix efter typ behövs ej — mappen anger typen
- Källsidor: `wiki/sources/{deskriptivt-namn}.md`
- Entiteter: `wiki/entities/{entitetsnamn}.md`
- Koncept: `wiki/concepts/{konceptnamn}.md`

---

## Arbetsflöden

### INGEST — Bearbeta ny källa

**Trigger:** Människan lägger en fil i `raw/` och säger "ingest", "bearbeta", "läs in", eller liknande.

**Steg:**

1. **Läs** källdokumentet fullständigt
2. **Diskutera** nyckelinsikter med människan — kort sammanfattning, anmärkningsvärda punkter, frågor
3. **Skapa källsida** i `wiki/sources/`:
   - Fullständig sammanfattning
   - Nyckelpåståenden och datapunkter
   - Länkar till nämnda entiteter och koncept
4. **Uppdatera entitetsidor** — skapa nya eller uppdatera befintliga i `wiki/entities/`
5. **Uppdatera konceptsidor** — skapa nya eller uppdatera befintliga i `wiki/concepts/`
6. **Flagga motsägelser** — om ny källa motsäger befintligt wiki-innehåll, lägg till `[!contradiction]`-callouts på berörda sidor
7. **Uppdatera `wiki/index.md`** — lägg till nya sidor, uppdatera sammanfattningar
8. **Uppdatera `wiki/overview.md`** — revidera syntesen om det är motiverat
9. **Logga i `wiki/log.md`** — tidsstämplat inlägg med berörda sidor

**Regel:** Ingest en källa åt gången som default. Batch-ingest (flera samtidigt) kräver explicit begäran.

### QUERY — Besvara frågor

**Trigger:** Människan ställer en fråga om domänen.

**Steg:**

1. **Läs `wiki/index.md`** för att hitta relevanta sidor
2. **Läs relevanta sidor** (följ korsreferenser vid behov)
3. **Syntetisera svar** med citeringar till wiki-sidor
4. **Arkivera svaret** som ny sida i `wiki/queries/` om det är betydande (syntes av flera källor, ny insikt, komplex analys)
5. **Logga** om en ny sida skapades

**Svarsformat:** Kan vara markdown-text, jämförelsetabell, lista, eller hänvisning till befintlig wiki-sida. Välj det format som bäst kommunicerar svaret.

### LINT — Hälsokontroll

**Trigger:** Människan säger "lint", "hälsokoll", "granska wiki", eller LLM:en föreslår det periodiskt.

**Checklista:**

- [ ] Motsägelser mellan sidor
- [ ] Inaktuella påståenden som nyare källor har ersatt
- [ ] Föräldralösa sidor (inga inkommande länkar)
- [ ] Viktiga koncept som nämns men saknar egen sida
- [ ] Saknade korsreferenser
- [ ] Informationsluckor som kan fyllas med forskning
- [ ] Index-noggrannhet (matchar faktiska sidor)
- [ ] Frontmatter-komplethet

**Output:** Rapport med fynd och förslag. Åtgärdar efter godkännande.

### UPDATE — Uppdatera befintlig sida

**Trigger:** Ny information kräver revision av en befintlig wiki-sida.

**Steg:**

1. Läs befintlig sida
2. Integrera ny information (ersätt inte — komplettera och notera ändringar)
3. Uppdatera `updated:`-fält i frontmatter
4. Lägg till `[!updated]`-callout om ändringen är betydande
5. Kontrollera och uppdatera korsreferenser
6. Uppdatera index och logga

---

## Index-format (`wiki/index.md`)

Organiserat per kategori. Varje rad: wikilink + en-rads sammanfattning.

```markdown
## Oversikt
- [[overview]] — Toppniva-syntes av all kunskap i wikin

## Kallor
- [[kalla-namn]] — En-rads sammanfattning (YYYY-MM-DD)

## Entiteter
- [[entitet-namn]] — En-rads beskrivning

## Koncept
- [[koncept-namn]] — En-rads beskrivning

## Jamforelser
- [[jamforelse-namn]] — En-rads beskrivning

## Fragor
- [[fraga-namn]] — En-rads beskrivning
```

---

## Logg-format (`wiki/log.md`)

Kronologisk, append-only. Varje inlägg har parsbart prefix.

```markdown
## [YYYY-MM-DD] ingest | Källtitel
Bearbetade källa. Skapade: [[sida1]], [[sida2]]. Uppdaterade: [[sida3]].

## [YYYY-MM-DD] query | Frågesammanfattning
Besvarade fråga. Arkiverad som: [[frågesida]].

## [YYYY-MM-DD] lint | Hälsokontroll
Hittade N problem. Åtgärdade: ... Uppskjutna: ...

## [YYYY-MM-DD] update | Sidnamn
Uppdaterade sida med ny information från [[källa]].
```

---

## Regler

1. **Rör aldrig `raw/`.** Källor är immutable sanning.
2. **Uppdatera alltid `index.md`** efter varje wiki-ändring.
3. **Logga alltid** betydande operationer i `log.md`.
4. **Citera källor.** Varje faktapåstående länkar till en källsida.
5. **Flagga motsägelser explicit** — välj aldrig tyst en källa framför en annan.
6. **En sak per sida.** En entitet, ett koncept. Dela upp sidor som växer förbi ~300 rader.
7. **Frontmatter är obligatoriskt** på alla wiki-sidor.
8. **Uppdatera, duplicera inte.** När ny info kommer för ett befintligt ämne — uppdatera sidan, skapa inte en ny.
9. **Overview speglar allt.** Revidera overview när betydande ny kunskap läggs till.
10. **Korsreferera generöst.** Om en sida nämner en entitet eller ett koncept som har egen sida — länka.
11. **Människan godkänner.** Vid osäkerhet om klassificering, struktur eller tolkning — fråga innan du agerar.
12. **Bevara kedjan.** Varje wiki-sida → käll-sida → rådokument. Kedjan ska vara spårbar.

---

## Output-format

Wiki-innehåll är alltid markdown. Men svar på frågor kan ta olika former:

| Behov | Format |
|-------|--------|
| Faktasvar | Inline-text med wiki-citeringar |
| Jämförelse | Markdown-tabell |
| Tidslinje | Kronologisk lista |
| Komplex analys | Ny wiki-sida i `queries/` |
| Presentation | Marp-slides (om efterfrågat) |
| Visualisering | Excalidraw eller diagram (om efterfrågat) |

---

## Underhåll

### Periodisk lint
Föreslå hälsokontroll var ~10:e ingest eller när människan frågar.

### Sidsplittning
När en sida passerar ~300 rader, föreslå uppdelning i mer specifika sidor.

### Overview-revision
Revidera `overview.md` efter varje 3-5 ingest, eller när en källa fundamentalt ändrar förståelsen.

---

## Konventioner för denna domän

### Vanliga entitetstyper
- **Lagar:** Tullag, Tullförordning, UCC (Union Customs Code), etc.
- **Myndigheter:** Tullverket, Skatteverket, EU-kommissionen, WCO
- **System:** TARIC, KN (Kombinerade nomenklaturen), TDS, AEO
- **Avtal:** Frihandelsavtal, ursprungsregler, ömsesidiga avtal

### Vanliga konceptområden
- Tullförfaranden (import, export, transit, lagring)
- Tullvärde och värdering
- Ursprung och preferensursprung
- Tulltaxan och klassificering (KN/HS)
- Restriktioner och förbud
- Sanktioner och straff
- Tullombud och representation
- Förenklingar och tillstånd (AEO, samlad garanti)
