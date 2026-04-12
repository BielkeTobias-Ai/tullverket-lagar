---
title: Förordningen om enda kontaktpunkt för tullen i EU (EU) 2022/2399
type: entity
entity_type: lag
source_type: eu-forordning
celex: "32022R2399"
short_name: EU CSW-förordningen
status: gallande
created: 2026-04-11
updated: 2026-04-11
befogenheter:
  - inrätta EU CSW-CERTEX (Certificate Exchange System)
  - kräva att MS inrättar nationella miljöer med enda kontaktpunkt
  - möjliggöra automatisk kontroll av icke-tullrelaterade unionsformaliteter
  - fastställa digitalt samarbete mellan tullmyndigheter och behöriga partnermyndigheter
  - ändra UCC:s definition av tullagstiftning (artikel 5.2)
  - reglera kvantitetsförvaltning för godkända varukvantiteter på unionsnivå
  - fastställa kostnadsfördelning mellan kommissionen och MS
tillampningsomrade: >
  Inrättar en miljö med en enda kontaktpunkt för tullen i EU (EU CSW) som möjliggör digitalt samarbete mellan tullmyndigheter och behöriga partnermyndigheter. Det centrala systemet EU CSW-CERTEX kopplar samman nationella tullsystem med icke-tullrelaterade unionssystem. Ändrar UCC (952/2013).
situationer:
  - import-med-sanitara-krav
  - import-ekologiska-produkter
  - import-fluorerade-vaxthusgaser
  - import-kulturobjekt
  - klarering-med-icke-tullrelaterade-formaliteter
  - kvantitetskontroll-import
connections:
  - type: kompletterar
    target: "[[ucc]]"
    context: "Ändrar UCC artiklarna 5.2 och 163.1; integrerar enda kontaktpunkt i definitionen av tullagstiftning"
  - type: overlappar
    target: "[[ucc-elektroniska-system]]"
    context: "EU CSW-CERTEX koordineras med IT-infrastrukturen i 2025/512; EORI som gemensam identifierare"
tags:
  - eu-forordning
  - tullkodex
  - digitalisering
  - enda-kontaktpunkt
  - eu-csw-certex
  - ucc-familj
sources:
  - "[[ucc-enda-kontaktpunkt-eu-2022-2399]]"
---

## Sammanfattning

Europaparlamentets och rådets förordning (EU) 2022/2399, antagen den 23 november 2022, inrättar en miljö med en enda kontaktpunkt för tullen i EU (EU Customs Single Window — EU CSW). Det centrala systemet EU CSW-CERTEX (Certificate Exchange System) kopplar samman nationella tulls enda kontaktpunkter med icke-tullrelaterade unionssystem (t.ex. TRACES för veterinärkrav, CERES för ekologiska produkter). Förordningen ändrar också UCC så att enda kontaktpunktsmiljön inkluderas i definitionen av tullagstiftning och att skyldigheten att uppvisa styrkande dokument anses uppfylld när tullmyndigheterna kan hämta uppgifterna via EU CSW-CERTEX. Förordningen antogs med rättslig grund i artiklarna 33, 114 och 207 i EUF-fördraget.

## Befogenheter / Nyckelfunktioner

- **EU CSW-CERTEX:** Det centrala certifikatutbytessystemet som automatiskt utbyter uppgifter mellan nationella tullsystem och icke-tullrelaterade unionssystem
- **Nationella enda kontaktpunkter:** Krav på att varje MS inrättar och driver en nationell enda kontaktpunkt för tullen som kopplas till EU CSW-CERTEX
- **Automatisk formalitetskontroll:** Tullmyndigheterna kan automatiskt kontrollera att icke-tullrelaterade unionsformaliteter är uppfyllda
- **Kvantitetsförvaltning:** Behöriga partnermyndigheter kan övervaka hur godkända kvantiteter används vid klarering
- **Principen "endast en gång":** Ekonomiska aktörer lämnar uppgifter en gång; systemet återanvänder dem
- **Integrerad datamängd:** Gemensam datamängd identifieras för tullformaliteter och icke-tullrelaterade formaliteter
- **Nationell samordnare:** Varje MS utser en nationell samordnare som kontaktpunkt mot kommissionen

## Nyckelbestämmelser

| Bestämmelse | Innehåll |
|-------------|---------|
| Tillämpningsområde | Icke-tullrelaterade unionsformaliteter i bilagan; successivt utbyggbart |
| Initiala formaliteter | Sanitära/fytosanitära krav; ekologiska produkter; F-gaser; kulturföremål |
| EU CSW-CERTEX | Central komponent driftas av kommissionen; MS ansvarar för nationella delar |
| Nationella enda kontaktpunkter | Minimiuppsättning funktioner; ska kopplas till EU CSW-CERTEX |
| Ändring av UCC art. 5.2 | EU CSW-förordningen inkluderas i definitionen av tullagstiftning |
| Ändring av UCC art. 163.1 | Skyldighet att uppvisa styrkande dokument uppfylld via EU CSW-CERTEX |
| Dataskydd | Gemensamt personuppgiftsansvar; GDPR och institutionernas dataskyddsregler |
| Cybersäkerhet | ENISA-riktlinjer; kryptering och organisatoriska åtgärder |
| Kostnadsfördelning | Kommissionen: EU CSW-CERTEX och gränssnitt mot icke-tullrelaterade unionssystem; MS: nationella delar |
| Delegerade akter | Kommissionen kan ändra bilagan och specificera dataelement via delegerade akter |
| Arbetsprogram | Kommissionen upprättar och uppdaterar (minst vart 3:e år) ett arbetsprogram |

## Kopplingar

| Lag/förordning | Typ | Beskrivning |
|----------------|-----|-------------|
| [[ucc]] | kompletterar | Ändrar UCC artiklarna 5.2 och 163.1; EU CSW ingår i tullagstiftningsdefinitionen |
| [[ucc-elektroniska-system]] | overlappar | EORI-systemet används som gemensam identifierare; IT-koordinering |

## Praktisk tillämpning

**Situation — Import med sanitära krav:** Importör inleder tullklarering för en sändning kött. Via den nationella enda kontaktpunkten lämnas tulldeklarationen in. EU CSW-CERTEX hämtar automatiskt veterinärintyget från TRACES och vidarebefordrar godkännandet till tullmyndigheten — utan att importören behöver separat lämna in intyget.

**Situation — Import av ekologiska produkter:** Importör av ekologisk olivolja inleder klarering. EU CSW-CERTEX kontrollerar automatiskt i unionens kontrollsystem för ekologisk produktion (CERES) att certifikaten är giltiga och rapporterar tillbaka till tullens system.

**Situation — Fluorerade växthusgaser (F-gaser):** Import av kylanordningar med HFC-köldmedier kräver licens under kvotsystemet. EU CSW-CERTEX kontrollerar licensuppgifterna och hanterar kvantitetsavräkning mot kvoten.

**Situation — Import av kulturföremål:** Importör för in ett konstverk som kräver importlicens enligt förordningen om kulturföremål. EU CSW-CERTEX kontrollerar licensen i det icke-tullrelaterade systemet och bekräftar för tullmyndigheten.

> [!question] Öppen fråga
> I vilken utsträckning har Sverige implementerat den nationella enda kontaktpunkten och kopplingen till EU CSW-CERTEX? Tidsplan och nuläge behöver klargöras.
