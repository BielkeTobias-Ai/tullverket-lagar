---
title: Handelsstatistik — landnomenklatur
type: entity
entity_type: lag
source_type: eu-forordning
celex: "32020R1470"
short_name: Handelsstatistik landnomenklatur
status: gallande
created: 2026-04-11
updated: 2026-04-11
befogenheter:
  - fastställa vilka landkoder som ska användas i europeisk handelsstatistik
  - ange geografisk uppdelning för annan europeisk företagsstatistik
tillampningsomrade: >
  Nomenklatur avseende länder och territorier för europeisk statistik om
  internationell varuhandel samt geografisk uppdelning för annan
  europeisk företagsstatistik. Gäller från 1 januari 2021.
situationer:
  - utrikeshandelsstatistik
  - tulldata-till-statistik
connections:
  - type: speciallag-till
    target: "[[foretagsstatistikforordningen]]"
    context: "Genomförandeförordning som specificerar landklassificering enligt artikel 7.1 d i förordning (EU) 2019/2152"
  - type: overlappar
    target: "[[foretagsstatistik-genomforande]]"
    context: "Båda är genomförandeakter till företagsstatistikförordningen; denna specificerar landnomenklatur"
  - type: overlappar
    target: "[[handelsstatistik-genomforande]]"
    context: "Samtliga fyra statistikförordningar (2019/2152 + tre genomförandeakter) bildar ett sammanhängande paket"
tags:
  - eu-forordning
  - statistik
  - handelsstatistik
  - landnomenklatur
  - geografisk-uppdelning
sources:
  - "[[eu-handelsstatistik-komplettering-eu-2020-1470]]"
---

## Sammanfattning

Genomförandeförordning (EU) 2020/1470 fastställer nomenklaturen avseende länder och territorier för europeisk statistik om internationell varuhandel (bilaga I) och den geografiska uppdelning som krävs för annan europeisk företagsstatistik (bilaga II). Nomenklaturen baseras på ISO 3166 alpha-2 med anpassningar för EU-rättens krav. Förordningen gäller från 1 januari 2021 och ersätter förordning (EU) nr 1106/2012.

## Nyckelbestämmelser

| Artikel | Innehåll |
|---------|---------|
| Art. 1 | Landnomenklatur för varuhandelsstatistik: bilaga I, gäller fr.o.m. 1 januari 2021 |
| Art. 2 | Geografisk uppdelning för övrig företagsstatistik: bilaga II (grövre uppdelning) |
| Art. 3 | Upphävande av förordning (EU) nr 1106/2012 från 1 januari 2021 |
| Art. 4 | Ikraftträdande: 1 januari 2021 |
| Bilaga I | Komplett landnomenklatur (ISO 3166 alpha-2 + EU-specifika koder) |
| Bilaga II | Förenklad geografisk uppdelning för övrig statistik |

## Kopplingar

| Typ | Mål | Kontext |
|-----|-----|---------|
| speciallag-till | [[foretagsstatistikforordningen]] | Genomförandeförordning för landklassificering (art. 7.1 d) |
| overlappar | [[foretagsstatistik-genomforande]] | Båda genomförandeakter till samma moderförordning |
| overlappar | [[handelsstatistik-genomforande]] | Ingår i samma statistikpaket (fyra sammanhängande förordningar) |

## Praktisk tillämpning

Tullverket och SCB använder landnomenklaturen i denna förordning för alla tulldeklarationsdata som rör ursprungsland, exportland och destinationsland. Koderna ska stämma med bilaga I. Avvikande eller felaktiga landkoder i tulldeklarationer kan leda till fel i utrikeshandelsstatistiken. Förordningen uppdateras vid geopolitiska förändringar (t.ex. nya stater, namnbyten) via kommissionens genomförandebeslut.

> [!situation] Typisk situation
> Vid rapportering av tulldeklarationsdata till SCB: Tullverket använder landkoderna i bilaga I. Landkod "GB" (Storbritannien) gäller efter brexit; "XI" (Nordirland) har specifik behandling. Felaktig kodning av ursprungsland kan påverka preferenssystemets statistik.
