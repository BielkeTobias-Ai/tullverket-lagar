---
title: Vapenlagen
type: entity
entity_type: lag
sfs: "1996:67"
short_name: Vapenlagen
status: gällande
created: 2026-04-08
updated: 2026-04-08
befogenheter:
  - omhändertagande av vapen utan förestående beslut (tulltjänsteman)
  - omhändertagande vid utebliven legitimation (tulltjänsteman)
  - beslag av vapen (tulltjänsteman, samma rätt som polisman)
  - förverkande av vapen och ammunition
  - direktåtkomst till vapenregister
tillampningsomrade: >
  Tillståndsplikt för innehav, handel, förmedling, utlåning,
  reparation, förvaring, transport och in-/utförsel av skjutvapen,
  ammunition, ljuddämpare och vapenmagasin.
straffskala:
  - brott: vapenbrott
    straff: "fängelse högst 5 år"
  - brott: vapenbrott (ringa/oaktsamhet)
    straff: "böter eller fängelse högst 6 mån"
  - brott: grovt vapenbrott
    straff: "fängelse 4 till 7 år"
  - brott: synnerligen grovt vapenbrott
    straff: "fängelse 6 till 10 år"
  - brott: märkningsbrott
    straff: "böter eller fängelse högst 1 år"
  - brott: otillåtet innehav ammunition/ljuddämpare/vapenmagasin
    straff: "böter eller fängelse högst 6 mån"
situationer:
  - granskontroll-vapen
  - granskontroll-ammunition
  - resande-vapen-utan-tillstand
  - nordisk-jagare-transit
  - postpaket-vapen
  - forvaring-tullager-vapen
connections:
  - type: overlappar
    target: "[[smugglingslagen]]"
    context: "Smugglingslagen §6a = vapensmuggling över gräns. Vapenlagen = tillståndsplikt och innehav inom Sverige. §9 kap 4 §: olovlig införsel regleras av smugglingslagen."
  - type: hanvisar-till
    target: "[[smugglingslagen]]"
    context: "9 kap. 4 §: olovlig införsel av vapen, ammunition, ljuddämpare → smugglingslagen."
  - type: hanvisar-till
    target: "[[tullbefogenhetslagen]]"
    context: "Indirekt brottsbekämpning (8 kap. 2 §). Postspärr vid misstanke om skjutvapen (7 kap. 8 §)."
  - type: speciallag-till
    target: "[[knivlagen]]"
    context: "Knivlagen §3: vapenlagen gäller istället för föremål som vapenlagen är tillämplig på. Vapenlagen är lex specialis."
  - type: hanvisar-till
    target: "[[lagen-om-brandfarliga-och-explosiva-varor]]"
    context: "1 kap. 6 §: 'Bestämmelser om ammunition som räknas till explosiva varor finns även i lagen (2010:1011) om brandfarliga och explosiva varor.' Avgränsning mellan vapenlagens ammunitionsbegrepp och LBE:s explosiva varor."
tags:
  - lag
  - vapen
  - skjutvapen
  - ammunition
  - tillstånd
sources:
  - "[[vapenlagen-1996-67]]"
---

# Vapenlagen (1996:67)

## Sammanfattning

Vapenlagen reglerar tillståndsplikt för innehav, handel och in-/utförsel av skjutvapen, ammunition, ljuddämpare och vapenmagasin. Lagen ger tulltjänsteman **direkt beslagsrätt och omhändertaganderätt** — en av de starkaste operativa befogenheterna i lagstiftningen.

## Befogenheter

Vapenlagen ger tulltjänsteman särskilda befogenheter:

| Befogenhet | Paragraf | Förutsättning |
|-----------|----------|---------------|
| Omhändertagande utan förestående beslut | 6 kap. 4 § | Överhängande missbruksrisk |
| Omhändertagande vid utebliven legitimation | 6 kap. 4b § | Kan inte visa rätt till innehav |
| Beslag (samma rätt som polisman) | 9 kap. 6 § | Egendom som skäligen kan antas bli förverkad |
| Direktåtkomst till vapenregister | 1a kap. 14 § | Realtidskontroll av tillstånd |

## Straffbestämmelser

| Brottstyp | Paragraf | Straffskala |
|-----------|----------|-------------|
| Vapenbrott | 9:1 st.1 | Fängelse högst 5 år |
| Vapenbrott (ringa/oaktsamhet) | 9:1 st.2 | Böter — fängelse 6 mån |
| Grovt vapenbrott | 9:1a st.1 | Fängelse 4 — 7 år |
| Synnerligen grovt vapenbrott | 9:1a st.2 | Fängelse 6 — 10 år |
| Märkningsbrott | 9:1b | Böter — fängelse 1 år |
| Otillåtet innehav ammo/ljuddämpare/magasin | 9:2 d | Böter — fängelse 6 mån |

## Kopplingar

### Överlappar med

| Lag | Kontext |
|-----|---------|
| [[smugglingslagen]] | Smugglingslagen §6a = vapensmuggling. Vapenlagen = innehav/tillstånd. 9 kap. 4 §: olovlig införsel regleras av smugglingslagen. |

### Hänvisar till

| Lag | Kontext |
|-----|---------|
| [[smugglingslagen]] | 9 kap. 4 §: olovlig införsel → smugglingslagen. |
| [[tullbefogenhetslagen]] | Indirekt brottsbekämpning. Postspärr. |
| [[lagen-om-brandfarliga-och-explosiva-varor]] | 1 kap. 6 §: ammunition som räknas till explosiva varor regleras även av LBE. |

### Speciallag till

| Lag | Kontext |
|-----|---------|
| [[knivlagen]] | Knivlagen §3: vapenlagen gäller istället för föremål den är tillämplig på. |

> [!situation] Typisk situation
> Resande ankommer med skjutvapen utan tillstånd. Tulltjänstemannen omhändertar vapnet (6 kap. 4b §), kontrollerar vapenregistret (1a kap. 14 §). Om införsel skett olovligen → smugglingslagen. Om vägran att föra ut → vapen tillfaller staten efter 4 mån (2 kap. 15 §).

## Praktisk tillämpning

- **Gränskontroll — vapen hittat**: Omhänderta (6:4/4b), kontrollera register (1a:14), rubricera under smugglingslagen om olovlig införsel.
- **Nordisk jägare i transit**: Tillåtet utan tillstånd under 2 kap. 13 § b — kontrollera permanenttillstånd i hemlandet.
- **Omärkta vapen vid import**: 2a kap. 7 § — märkning krävs inom en månad vid införsel från tredjeland.
- **Förvaring på tullager**: Kräver Polismyndighetens medgivande (2 kap. 14 §).
