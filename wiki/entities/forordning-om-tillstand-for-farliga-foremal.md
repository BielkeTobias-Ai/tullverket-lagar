---
title: Förordning om tillstånd för farliga föremål
type: entity
entity_type: lag
sfs: "1990:415"
short_name: Farliga-föremål-förordningen
status: gallande
created: 2026-04-09
updated: 2026-04-09
befogenheter:
  - förbjuda införsel av springstiletter, springknivar och liknande föremål utan tillstånd
  - bevilja tillstånd för vapensamlare och tjänsteutrustning
  - tillämpa vapenlagstiftningens regler i relevanta delar
tillampningsomrade: >
  Reglerar införsel till Sverige av springstiletter, springknivar, knogjärn, kaststjärnor,
  riv- och nithandskar, batonger, karatepinnar, blydaggar, spikklubbor och liknande föremål.
  Polismyndigheten prövar tillstånd; tillstånd ges bara för vapensamling eller tjänsteutrustning.
straffskala:
  - brott: olovlig införsel
    straff: "se smugglingslagen (2000:1225)"
situationer:
  - granskontroll-farliga-foremal
  - beslag-springkniv-knogjarn
  - import-kaststjarna-batong
  - tillstand-vapensamling
connections:
  - type: hanvisar-till
    target: "[[smugglingslagen]]"
    context: "5 § hänvisar direkt till smugglingslagen för påföljd vid olovlig införsel"
  - type: hanvisar-till
    target: "[[vapenlagen]]"
    context: "4 § föreskriver att vapenlagen och vapenförordningens regler om skjutvapen tillämpas i relevanta delar på förordningens föremål"
  - type: overlappar
    target: "[[knivlagen]]"
    context: "Knivlagen förbjuder innehav av knivar på offentlig plats; farliga-föremål-förordningen reglerar inresekontroll och tillstånd för import av springstiletter och springknivar"
tags:
  - farliga-foremal
  - granskontroll
  - springkniv
  - knogjarn
  - tillstand
  - polismyndigheten
sources:
  - "[[forordning-om-tillstand-for-farliga-foremal-1990-415]]"
---

## Sammanfattning

Förordning (1990:415) om tillstånd till införsel av vissa farliga föremål förbjuder import till Sverige av ett antal specifikt uppräknade vapen och slagvapen utan tillstånd. Polismyndigheten beviljar tillstånd, men bara för vapensamlare eller för batonger som ingår i tjänsteutrustning. Vapenlagstiftningens regler tillämpas i relevanta delar. Påföljd vid olovlig införsel regleras av smugglingslagen.

## Befogenheter

Förordningen ger inga direkta befogenheter till Tullverket eller polisen utöver att:
- Förbjuda införsel utan tillstånd (1 §)
- Polismyndigheten prövar och beviljar tillstånd (3 §)
- Vapenlagstiftningens regler om skjutvapen tillämpas i relevanta delar (4 §) — ger t.ex. möjlighet till omhändertagande vid gräns

## Straffbestämmelser

| Brottstyp | Straff |
|-----------|--------|
| Olovlig införsel och försök | Se [[smugglingslagen]] (2000:1225) — 5 § |

## Kopplingar

| Typ | Lag | Förklaring |
|-----|-----|------------|
| hanvisar-till | [[smugglingslagen]] | 5 § hänvisar direkt hit för påföljd vid olovlig införsel |
| hanvisar-till | [[vapenlagen]] | 4 § tillämpar vapenlagstiftningens regler i relevanta delar |
| overlappar | [[knivlagen]] | Knivlagen reglerar innehav; denna förordning reglerar import och tillstånd |

## Nyckelbestämmelser

- **1 §** — Förteckning över förbjudna föremål: springstiletter, springknivar, knogjärn, kaststjärnor, riv-/nithandskar, batonger, karatepinnar, blydaggar, spikklubbor, liknande
- **2 §** — Tillståndsgrunder: vapensamling, eller batong för tjänsteutrustning
- **3 §** — Polismyndigheten prövar tillståndsansökningar
- **4 §** — Vapenlagen (1996:67) kap. 1:8, 2:11–15, 10:1–2, 11:2 f tillämpas; vapenförordningen kap. 2:6, 2:11, 3:1–2, 4:4, 4:6 tillämpas
- **5 §** — Straffansvar: smugglingslagen (2000:1225) gäller

## Praktisk tillämpning

> [!situation] Beslag av springkniv vid gränskontroll
> Vid gränskontroll och fynd av springstiletter, springknivar, knogjärn, kaststjärnor eller liknande: [[forordning-om-tillstand-for-farliga-foremal]] förbjuder inresekontroll utan tillstånd (1 §). Påföljd regleras av [[smugglingslagen]] (5 §). Vapenlagstiftningens omhändertaganderegler tillämpas analogt (4 §).

> [!situation] Batong i tjänsteutrustning
> En batong kan föras in om den ingår i tjänsteutrustning och tillstånd beviljats av Polismyndigheten (2 § 2 st). Utan tillstånd gäller smugglingslagen.

> [!situation] Kniv som inte är springkniv
> En vanlig kniv som inte är springstillett eller springkniv täcks inte av denna förordning — då är [[knivlagen]] relevant för innehav på offentlig plats. Gränsövergången kan beröra smugglingslagen om kniven klassas som vapen.
