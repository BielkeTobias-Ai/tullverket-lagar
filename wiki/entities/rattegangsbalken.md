---
title: Rättegångsbalken
type: entity
entity_type: lag
sfs: "1942:740"
short_name: Rättegångsbalken
status: gällande
created: 2026-04-09
updated: 2026-04-09
befogenheter:
  - inleda förundersökning
  - hålla förhör (med viteskallelse)
  - gripa misstänkt (polisman vid fara i dröjsmål, envar på bar gärning)
  - anhålla misstänkt
  - häkta misstänkt
  - ta föremål i beslag
  - penningbeslag
  - husrannsakan
  - genomsökning på distans
  - kroppsvisitation
  - kroppsbesiktning
  - biometrisk autentisering
  - reseförbud
  - kvarstad
  - hemlig avlyssning av elektronisk kommunikation
  - hemlig dataavläsning
tillampningsomrade: >
  Sveriges centrala processlag. Reglerar domstolsförfarande i brott- och
  tvistemål samt tvångsmedel vid brottsutredning. Kap 23-28 ger de
  grundläggande tvångsmedelsbefogenheterna som Tullverket använder via
  tullbefogenhetslagen.
straffskala: []
situationer:
  - brottsutredning-smuggling
  - beslag-narkotika
  - beslag-vapen
  - husrannsakan
  - gripande-misstankt
  - forundersokning
connections:
  - type: kompletterar
    target: "[[tullbefogenhetslagen]]"
    context: "RB 23-28 ger de tvångsmedelsbefogenheter som tullbefogenhetslagen 8 kap. tilldelar tulltjänstemän (förhör, gripande, beslag, husrannsakan, kroppsvisitation m.m.)"
  - type: hanvisar-till
    target: "[[kustbevakningslagen]]"
    context: "RB 23:3 nämner kustbevakningslagen angående rapporteftergift"
  - type: kompletterar
    target: "[[smugglingslagen]]"
    context: "RB:s tvångsmedel (beslag, husrannsakan) används vid utredning av smugglingsbrott"
tags:
  - lag
  - processrätt
  - tvångsmedel
  - förundersökning
  - beslag
  - husrannsakan
  - polismansbefogenhet
sources:
  - "[[rattegangsbalken-1942-740]]"
---

# Rättegångsbalken (1942:740)

> [!note] Partiell ingest
> Denna entity fokuserar på **kap 23-28** — tvångsmedel vid förundersökning. Det är dessa kapitel som [[tullbefogenhetslagen]] hänvisar till för Tullverkets polismansbefogenheter. Övriga delar av RB (domstolsorganisation, tvistemål, rättsmedel) är inte behandlade.

## Sammanfattning

Rättegångsbalken (RB) är Sveriges grundläggande processlag, utfärdad 1942. Den reglerar hela rättsprocessen från förundersökning till dom och överklagande. För tullverksamheten är **tredje avdelningen** (kap 23-28) central — den definierar tvångsmedlen som tulltjänstemän får använda genom [[tullbefogenhetslagen]] 8 kap. (polismansbefogenheter).

Tulltjänstemän har genom tullbefogenhetslagen **samma rätt som polisman** att använda dessa tvångsmedel inom direkt och indirekt brottsbekämpning. RB-hänvisningarna i tullbefogenhetslagen fungerar som rättslig grund — utan RB har inte befogenheterna sitt ramverk.

## Befogenheter — Tullverkets användning via RB

| RB-paragraf | Tvångsmedel | TBL-hänvisning | Förutsättning |
|-------------|-------------|-----------------|---------------|
| 23:3 | Inleda förundersökning | 8:3 | Anledning anta brott under allmänt åtal |
| 23:6 | Hålla förhör | 8:6 | Under förundersökning, med envar |
| 24:7 | Gripa misstänkt | 8:8 | Skälig misstanke + flykt/kolusion/recidivfara |
| 27:1 | Beslag av föremål | 8:10 | Skäligen kan antas ha utredningsbetydelse/förverkas |
| 27:1 a | Penningbeslag | 8:10 | Pengar/fordringar som kan förverkas |
| 27:4 | Beslag vid gripande | 8:10 | I samband med laga gripande/anhållande |
| 27:17 a-f | Biometrisk autentisering | 8:15 | Tvinga upplåsning av elektronisk utrustning |
| 28:1, 28:5 | Husrannsakan | 8:17 | Anledning anta brott med fängelsestraff |
| 28:10 a-i | Genomsökning på distans | 8:17 | Söka i informationssystem (moln etc.) |
| 28:11 | Kroppsvisitation | 8:20 | Anledning anta brott med fängelsestraff |
| 28:12 | Kroppsbesiktning | 8:20 | Skälig misstanke + fängelsestraff |

## Kopplingar

### Kompletterar

| Lag | Relation |
|-----|----------|
| [[tullbefogenhetslagen]] | RB kap 23-28 ger det processuella ramverket för tvångsmedel som tulltjänstemän använder via TBL 8 kap. |
| [[smugglingslagen]] | RB:s tvångsmedel (beslag, husrannsakan) tillämpas vid utredning av smugglingsbrott. |

### Hänvisar till

| Lag | Kontext |
|-----|---------|
| [[kustbevakningslagen]] | RB 23:3 nämner rapporteftergift enligt kustbevakningslagen 3 kap. 18 §. |

## Nyckelbestämmelser

- **23:3 — Förundersökningsinledning:** Polisman som beslutar om tvångsmedel (kap 24-28) inleder automatiskt förundersökning. Explicit undantag för rapporteftergift enligt [[tullbefogenhetslagen]] 2:9 och [[kustbevakningslagen]] 3:18.
- **23:4 — Objektivitetsprincipen:** Förundersökning ska bedrivas objektivt — söka bevis som talar både för och emot den misstänkte.
- **24:7 — Gripande:** Polisman (och tulltjänsteman med polismansbefogenhet) får gripa den skäligen misstänkte. Envar-rätt vid bar gärning.
- **27:4 — Beslag vid fara i dröjsmål:** Polisman (tulltjänsteman) får beslagta utan beslut av undersökningsledare/åklagare.
- **28:5 — Husrannsakan vid fara i dröjsmål:** Polisman (tulltjänsteman) får genomföra utan rättens förordnande.
- **28:11 — Kroppsvisitation:** Definition: "undersökning av kläder och annat som någon bär på sig samt av väskor, paket och andra föremål". Skillnad mot tullbefogenhetslagens kontrollvisitation (bredare, lägre tröskel).

## Praktisk tillämpning

> [!situation] Typisk situation — Beslag vid gränskontroll
> Tulltjänsteman hittar misstänkt narkotika vid kontroll (TBL 3 kap.). Övergång till brottsutredning (TBL 8 kap.): Tjänstemannen griper misstänkt (RB 24:7 via TBL 8:8), tar varan i beslag (RB 27:4 via TBL 8:10), kan göra husrannsakan i fordonet (RB 28:1 via TBL 8:17). Förundersökning inleds automatiskt (RB 23:3). Åklagare underrättas skyndsamt.

> [!situation] Typisk situation — Genomsökning av telefon
> Vid misstanke om smuggling vill tulltjänsteman söka i den misstänktes molnlagring. Kräver beslut om genomsökning på distans (RB 28:10 a-i via TBL 8:17). Om den misstänkte vägrar upplåsa telefonen kan biometrisk autentisering beslutas (RB 27:17 a-f via TBL 8:15).

- **Tröskelskillnad:** RB:s tvångsmedel kräver generellt "anledning anta brott med fängelsestraff" — högre tröskel än tullbefogenhetslagens kontrollbefogenheter (kap 3-6) som kan tillämpas utan brottsmisstanke.
- **Proportionalitetsprincipen** genomsyrar alla RB-tvångsmedel: "skälen för åtgärden ska uppväga intrånget" (27:1 st. 3, 28:3 a).
- **Tidsgränser:** Förhör max 6+6 timmar (23:9), häktningsframställning senast kl 12 tredje dagen (24:12), beslag kräver åtalstidsfrist (27:7).
