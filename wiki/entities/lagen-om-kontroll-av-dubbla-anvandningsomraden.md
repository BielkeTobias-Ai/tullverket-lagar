---
title: Lagen om kontroll av produkter med dubbla användningsområden
type: entity
entity_type: lag
sfs: "2000:1064"
short_name: Dual-use-lagen
status: gallande
created: 2026-04-09
updated: 2026-04-09
befogenheter:
  - kräva tillstånd för export av dual-use-produkter
  - kräva tillstånd för förmedlingstjänster av dual-use-produkter
  - kräva tillstånd för tekniskt bistånd avseende dual-use-produkter
  - förbjuda transitering av dual-use-produkter
  - kräva tillstånd för införsel av kemiska prekursorer
  - återkalla tillstånd
  - utöva tillsyn (ISP) med rätt till tillträde till lokaler och handlingar
  - ta ut tillsynsavgift
tillampningsomrade: >
  Produkter med dubbla användningsområden (civil och militär användning) och tekniskt
  bistånd avseende sådana produkter. Kompletterar EU-förordning (EU) 2021/821. Gäller
  export, förmedling, transitering, överföring och tekniskt bistånd.
straffskala:
  - brott: olovlig export, överföring, förmedling eller tekniskt bistånd (uppsåt)
    straff: "böter till fängelse 2 år"
  - brott: grovt brott — systematisk brottslighet eller allvarlig kränkning
    straff: "fängelse 6 månader till 6 år"
  - brott: olovlig transitering (uppsåt)
    straff: "böter till fängelse 2 år"
  - brott: grov oaktsamhet
    straff: "böter till fängelse 2 år"
  - brott: oriktiga uppgifter, villkorsbrott, underrättelseskyldighet
    straff: "böter till fängelse 6 månader"
situationer:
  - export-kontroll-dual-use
  - transitering-strategiska-produkter
  - kemiska-prekursorer-import
  - kontroll-tekniskt-bistand-utlandet
connections:
  - type: overlappar
    target: "[[lagen-om-krigsmateriel]]"
    context: "Militära produkter i dual-use-lagen definieras som krigsmateriel enligt lagen om krigsmateriel (3 §); ISP är tillståndsmyndighet i båda lagarna"
  - type: hanvisar-till
    target: "[[smugglingslagen]]"
    context: "Olovlig export utgör även smuggling; 23 § möjliggör förverkande parallellt med smugglingslagens regler"
tags:
  - exportkontroll
  - dual-use
  - eu-forordning
  - tillstand
  - isp
  - kemiska-prekursorer
sources:
  - "[[lagen-om-kontroll-av-dubbla-anvandningsomraden-2000-1064]]"
---

## Sammanfattning

Lagen (2000:1064) om kontroll av produkter med dubbla användningsområden och av tekniskt bistånd kompletterar EU-förordning (EU) 2021/821. Lagen styr export, förmedling, transitering och tekniskt bistånd för produkter som kan användas både civilt och militärt. Inspektionen för strategiska produkter (ISP) är tillståndsmyndighet. Lagen reglerar också kontroll av kemiska prekursorer — ämnen som kan användas för tillverkning av kemiska stridsmedel.

## Befogenheter

- ISP prövar tillstånds- och förbudsfrågor; principiella ärenden till regeringen (4 §)
- Kräva tillstånd för export av dual-use-produkter (4 a §, 5 §)
- Kräva tillstånd eller förbud för förmedlingstjänster (4 b–4 c §§)
- Meddela förbud mot transitering (4 d §)
- Kräva tillstånd för tekniskt bistånd (4 e–4 f §§)
- Kräva tillstånd för införsel av kemiska prekursorer (10 §)
- Återkalla tillstånd (11 §)
- Tillsyn med rätt till tillträde till lokaler och handlingar (15–16 §§)
- Ta ut tillsynsavgift; kräva deklarationer (12–13 §§)

## Straffbestämmelser

| Brottstyp | Straff |
|-----------|--------|
| Olovlig export, överföring, förmedling, tekniskt bistånd (uppsåt) | Böter–fängelse 2 år |
| Grovt brott — systematisk brottslighet, allvarlig samhällskränkning | Fängelse 6 mån–6 år |
| Olovlig transitering (uppsåt) | Böter–fängelse 2 år |
| Grov oaktsamhet (samma gärningar) | Böter–fängelse 2 år |
| Oriktiga uppgifter, villkorsbrott, underrättelse-skyldighetsbrott | Böter–fängelse 6 månader |
| Kontroll-/ordningsföreskriftsbrott | Böter |

## Kopplingar

| Typ | Lag | Förklaring |
|-----|-----|------------|
| overlappar | [[lagen-om-krigsmateriel]] | Militära produkter = krigsmateriel; gemensam tillståndsmyndighet ISP; definitionen hämtas från krigsmateriellagen |
| hanvisar-till | [[smugglingslagen]] | Olovlig export utgör också smuggling; förverkanderegler i 23 § |

## Nyckelbestämmelser

- **1 §** — Tillämpningsområde; komplett till EU-förordning (EU) 2021/821
- **2–3 §§** — Definitioner; militära produkter = krigsmateriel enligt lagen (1992:1300)
- **4 §** — ISP som tillståndsmyndighet
- **4 a–4 f §§** — Tillståndskrav för export, förmedling och tekniskt bistånd
- **10 §** — Tillstånd för kemiska prekursorer
- **18 §** — Straffskalor; grovt brott 6 mån–6 år
- **18 a §** — Transitering utan tillstånd
- **23 §** — Förverkande

## Praktisk tillämpning

> [!situation] Export av dual-use-teknik
> Företag som exporterar teknologi med civil och militär användning utan ISP-tillstånd kan dömas under 18 § (böter–2 år) eller grovt brott (6 mån–6 år). Definitionen av vad som klassas som militär produkt hämtas från [[lagen-om-krigsmateriel]].

> [!situation] Transitering av strategiska produkter
> Vid transitering av dual-use-produkter genom Sverige som saknar tillstånd gäller 18 a § (böter–2 år). Tullverket kontrollerar i samarbete med ISP.

> [!situation] Kemiska prekursorer vid import
> Import av kemiska prekursorer som kan användas för kemiska stridsmedel kräver tillstånd enligt 10 §. Deklarationsplikt gäller för producenter och importörer (13 §).
