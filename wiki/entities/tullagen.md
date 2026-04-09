---
title: Tullagen
type: entity
entity_type: lag
sfs: "2016:253"
short_name: Tullagen
status: gällande
created: 2026-04-08
updated: 2026-04-08
befogenheter: []
tillampningsomrade: >
  Kompletteringslagstiftning till EU:s tullkodex (UTK).
  Reglerar tullskuld, skatt, räntor, sanktioner (tulltillägg,
  tullförseelse), överklagande och särskilda bestämmelser.
straffskala:
  - brott: tullförseelse
    straff: "böter"
  - brott: tulltillägg (oriktig uppgift)
    straff: "20 procent av undandragen tull (administrativ avgift)"
  - brott: tulltillägg (avdragsgill moms)
    straff: "10 procent"
  - brott: förseningsavgift
    straff: "500-1000 kr"
situationer:
  - tulldeklaration-felaktig
  - tulldeklaration-oriktig-uppgift
  - tullskuld-skatteundandragande
  - utebliven-kompletterande-deklaration
  - foretradare-betalningsansvar
connections:
  - type: kompletteras-av
    target: "[[tullbefogenhetslagen]]"
    context: "Kap 4 upphävt 2024 — alla befogenheter flyttade till Tullbefogenhetslagen. Tullagen är det finansiella ramverket, Tullbefogenhetslagen det operativa."
  - type: hanvisar-till
    target: "[[smugglingslagen]]"
    context: "5 kap. 3 §: tullförseelse utgår om gärningen straffas i smugglingslagen. 2 kap. 5-6 §: preskriptionstid förlängs vid åtal för smuggling."
  - type: overlappar
    target: "[[smugglingslagen]]"
    context: "Tullagen 5 kap. (tullförseelse) överlappar med Smugglingslagen §8-10 (tullbrott). Subsidiaritet: tullförseelse utgår om smugglingslagen tillämpas."
  - type: hanvisar-till
    target: "[[tullbefogenhetslagen]]"
    context: "1 kap. 1 §: befogenhetsregler finns i tullbefogenhetslagen. 3 kap.: tullövervakning hänvisar till tullbefogenhetslagen."
  - type: overlappar
    target: "[[livsmedelslagen]]"
    context: "Livsmedel på tullager och i frizoner regleras parallellt; livsmedelslagen kan förbjuda återutförsel vid gränskontrollstation och tullager"
tags:
  - lag
  - tull
  - tullskuld
  - tulltillägg
  - tullförseelse
  - eu-tullkodex
sources:
  - "[[tullagen-2016-253]]"
---

# Tullagen (2016:253)

## Sammanfattning

Tullagen är en **kompletteringslagstiftning** till EU:s tullkodex (UTK, förordning 952/2013). Den reglerar det finansiella och processrättsliga ramverket: tullskuld, skatt, räntor, sanktioner och överklagande. Sedan 2024 års reform innehåller lagen **inga befogenhetsbestämmelser** — dessa finns i [[tullbefogenhetslagen]].

## Befogenheter

Inga operativa befogenheter. Kap 4 (tullkontroll) upphävdes 2024 och överfördes till [[tullbefogenhetslagen]].

## Straffbestämmelser — 5 kap.

### Tullförseelse (5 kap. 2-4 §§)

| Handling | Straff |
|----------|--------|
| Brott mot tullagstiftningen | Böter |
| Brott mot anmälningsskyldighet kontanta medel | Böter |
| Ringa fall | Inget ansvar |

**Subsidiaritet** (5 kap. 3 §): Tullförseelse utgår om gärningen straffas i [[smugglingslagen]], brottsbalken, penningtvättslagen eller terroristbrottslagen.

### Tulltillägg (5 kap. 5-14 §§) — administrativ avgift

| Situation | Procentsats |
|-----------|-------------|
| Oriktig uppgift → undandragen tull | 20 % |
| Oriktig uppgift → avdragsgill moms | 10 % |
| Skönsfastställelse | 20 % |
| Tullskuld art. 79 UTK | 20 % |
| Felaktig återbetalning | 20 % |

### Förseningsavgift (5 kap. 15 §)

| Situation | Avgift |
|-----------|--------|
| Kompletterande deklaration ej inlämnad i tid | 500 kr |
| Ej inlämnad trots uppmaning | 1 000 kr |

## Kopplingar

### Kompletteras av

| Lag | Kontext |
|-----|---------|
| [[tullbefogenhetslagen]] | Kap 4 upphävt — befogenheter finns i tullbefogenhetslagen. |

### Överlappar med

| Lag | Kontext |
|-----|---------|
| [[smugglingslagen]] | Tullförseelse (Tullagen 5 kap.) överlappar med tullbrott (Smugglingslagen §8-10). Smugglingslagen går före. |

### Hänvisar till

| Lag | Kontext |
|-----|---------|
| [[smugglingslagen]] | 5:3 subsidiaritet, 2:5-6 preskription vid åtal. |
| [[tullbefogenhetslagen]] | 1:1, 3:1, 3:10, 7:5 — befogenhetshänvisningar. |

> [!situation] Typisk situation
> Importör lämnar tulldeklaration med för lågt värde. Tullverket beslutar tulltillägg på 20 % av undandragen tull (5 kap. 5 §). Om gärningen är grov nog för åtal → smugglingslagen §8 (tullbrott) istället, och tulltillägg kan minskas/befrias (5 kap. 17 §).

## Praktisk tillämpning

- **Sanktionsverktygslådan**: Tre nivåer — förseningsavgift (500-1000 kr), tulltillägg (10-20 %), tullförseelse (böter). För grövre fall: smugglingslagen §8-10.
- **Tullskuldens preskription**: Normalt 3 år, förlängd till 5 år vid brott, ytterligare förlängd vid åtal för smuggling (2 kap. 5-6 §§).
- **Skatteuppbörd**: Tullverket uppbär tull + energiskatt + kemikalieskatt + alkohol-/tobaksskatt + moms (om importör ej momsregistrerad).
