---
title: Lagen om brandfarliga och explosiva varor
type: entity
entity_type: lag
sfs: "2010:1011"
short_name: LBE
status: gällande
created: 2026-04-08
updated: 2026-04-09
befogenheter:
  - tillståndsprövning
  - tillsyn och tillträde
  - förelägganden och förbud (med vite)
  - marknadskontroll
  - provtagning
tillampningsomrade: >
  Hantering, överföring, import och export av brandfarliga och
  explosiva varor. Syftar till att hindra olyckor och förebygga
  obehörigt förfarande med varorna. Tillståndskrav.
straffskala:
  - brott: brott mot aktsamhetskrav (§6)
    straff: "böter eller fängelse högst 1 år"
  - brott: olovlig hantering brandfarliga varor (uppsåtligt)
    straff: "böter eller fängelse högst 1 år"
  - brott: olovlig hantering explosiva varor (uppsåtligt)
    straff: "böter eller fängelse högst 5 år"
  - brott: olovlig hantering explosiva varor (oaktsamhet)
    straff: "böter"
  - brott: grov olovlig hantering explosiva varor
    straff: "fängelse 4 till 7 år"
  - brott: synnerligen grov olovlig hantering explosiva varor
    straff: "fängelse 6 till 10 år"
situationer:
  - granskontroll-explosiva-varor
  - granskontroll-brandfarliga-varor
  - tillstandskontroll-explosiva
  - import-export-explosiva
connections:
  - type: overlappar
    target: "[[smugglingslagen]]"
    context: "Smugglingslagen §6b reglerar smuggling av explosiva varor över gräns. LBE reglerar hantering/tillstånd inom Sverige. §30: ansvar enligt LBE utgår om gärningen är belagd med straff i smugglingslagen."
  - type: overlappar
    target: "[[terroristbrottslagen]]"
    context: "Terroristbrottslagen 5 § nämner brandfarliga och explosiva varor vid samröre med terroristorganisation — olovlig hantering kan ge ansvar under båda lagarna"
  - type: overlappar
    target: "[[lagen-om-krigsmateriel]]"
    context: "Ammunition och explosiva varor kan falla under båda lagarna; krigsmateriellagen undantar hantering som regleras i LBE (4 §)"
  - type: overlappar
    target: "[[lagen-om-transport-av-farligt-gods]]"
    context: "Explosiva och brandfarliga varor som transporteras faller under bada lagarna — LBE for hantering/tillstand, lagen om farligt gods for sjalva transporten."
  - type: hanvisar-till
    target: "[[smugglingslagen]]"
    context: "§30 st.2: 'Till ansvar enligt 28, 29 eller 29 a § döms det inte om gärningen är belagd med straff i lagen (2000:1225) om straff för smuggling.'"
  - type: hanvisar-till
    target: "[[tullbefogenhetslagen]]"
    context: "Indirekt brottsbekämpning (8 kap. 2 §). Postspärr vid misstanke om explosiva varor (7 kap. 8 §)."
tags:
  - lag
  - explosiva-varor
  - brandfarliga-varor
  - tillstånd
  - säkerhet
sources:
  - "[[lagen-om-brandfarliga-och-explosiva-varor-2010-1011]]"
---

# Lagen om brandfarliga och explosiva varor (2010:1011)

## Sammanfattning

LBE reglerar hantering, överföring, import och export av brandfarliga och explosiva varor. Lagens fokus är **säkerhet och tillstånd** — den syftar till att hindra olyckor och förebygga obehörigt förfarande. All hantering av explosiva varor och yrkesmässig hantering av brandfarliga varor kräver tillstånd.

För tullverksamheten är lagen relevant framför allt genom sina **straffbestämmelser för explosiva varor** (§29-29a) som kan aktualiseras vid gränskontroll, samt genom sin koppling till [[smugglingslagen]] §6b.

## Befogenheter

Lagen ger primärt befogenheter till tillståndsmyndigheter (MSB, kommuner), inte till Tullverket direkt:
- **Tillsyn** med rätt till tillträde, upplysningar, provtagning (§24)
- **Förelägganden och förbud** med vite (§25)
- **Återkallelse av tillstånd** (§20)
- **Marknadskontroll** (§25a-f)

Tullverkets befogenheter vid brott mot LBE regleras i [[tullbefogenhetslagen]].

## Straffbestämmelser

| Brottstyp | Paragraf | Straffskala |
|-----------|----------|-------------|
| Brott mot aktsamhetskrav (§6) | §28 st.1 | Böter — fängelse 1 år |
| Brott mot krav §7-15 + föreskrifter | §28 st.2 | Böter |
| Oriktig uppgift i ansökan | §28 st.2 p.2 | Böter |
| Olovlig hantering brandfarliga varor (oaktsamhet) | §29 st.1 | Böter |
| Olovlig hantering brandfarliga varor (uppsåtligt/grov oaktsamhet) | §29 st.2 p.1 | Böter — fängelse 1 år |
| Olovlig hantering explosiva varor (uppsåtligt/grov oaktsamhet) | §29 st.2 p.2 | Böter — fängelse 5 år |
| Grov olovlig hantering explosiva varor | §29a st.1 | Fängelse 4 — 7 år |
| Synnerligen grov olovlig hantering explosiva varor | §29a st.2 | Fängelse 6 — 10 år |

**Subsidiaritetsregel** (§30 st.2): Ansvar enligt LBE utgår om gärningen är belagd med straff i [[smugglingslagen]] eller brottsbalken.

## Kopplingar

### Överlappar med

| Lag | Kontext |
|-----|---------|
| [[smugglingslagen]] | Smugglingslagen §6b = smuggling av explosiva varor över gräns. LBE = olovlig hantering/tillstånd inom Sverige. Vid gränskontroll kan båda aktualiseras, men subsidiaritetsregeln (§30) ger smugglingslagen företräde. |

| [[lagen-om-transport-av-farligt-gods]] | Explosiva och brandfarliga varor som transporteras faller under bada lagarna — LBE for hantering/tillstand, lagen om farligt gods for sjalva transporten. |

### Hänvisar till

| Lag | Kontext |
|-----|---------|
| [[smugglingslagen]] | §30 st.2: ansvar utgår om gärningen redan straffas i smugglingslagen. |
| [[tullbefogenhetslagen]] | Indirekt brottsbekämpning (8 kap. 2 §). Postspärr (7 kap. 8 §). |

> [!situation] Typisk situation
> Vid gränskontroll hittas explosiva varor utan tillstånd. Införseln rubriceras under [[smugglingslagen]] §6b. LBE:s straffbestämmelser (§29-29a) utgår på grund av subsidiaritetsregeln (§30). Men om personen även hanterat explosiva varor inom Sverige utan tillstånd — då kan LBE aktualiseras för den hanteringen.

## Nyckelbestämmelser

- **§3-4 — Definitioner**: Brandfarliga varor (gaser, vätskor, brandreaktiva). Explosiva varor (ämnen, blandningar, föremål med explosionseffekt).
- **§16 — Tillståndskrav**: All hantering av explosiva varor kräver tillstånd. Yrkesmässig/större mängd brandfarliga varor likaså.
- **§29-29a — Straffbestämmelser för explosiva varor**: Högsta straffet är 10 år för synnerligen grov olovlig hantering.
- **§30 — Subsidiaritet**: Smugglingslagen och brottsbalken går före.

## Praktisk tillämpning

- **Gränskontroll — explosiva varor**: Primärt [[smugglingslagen]] §6b. LBE är relevant som bakgrund för tillståndskrav.
- **Postkontroll**: [[Tullbefogenhetslagen]] 7 kap. 8 § ger postspärr vid misstanke om explosiva varor.
- **Tillståndskontroll**: Främst MSB:s och kommuners ansvar, men Tullverket får utreda om misstanke uppstår vid kontroll.
