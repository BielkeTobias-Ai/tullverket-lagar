---
title: Företagsstatistik — tekniska specifikationer (genomförandeförordning)
type: entity
entity_type: lag
celex: "32020R1197"
short_name: Företagsstatistik tekniska specifikationer
status: gallande
created: 2026-04-11
updated: 2026-04-11
befogenheter:
  - specificera datakrav och variabler för alla statistikämnen i företagsstatistikförordningen
  - fastställa SDMX-format för dataöverföring till Eurostat
  - fastställa villkor för mikrodata-utbyte om unionsintern varuexport
  - fastställa krav på kvalitets- och metadatarapporter
tillampningsomrade: >
  Tekniska specifikationer och förfaringssätt för genomförandet av
  företagsstatistikförordningen (EU) 2019/2152. Gäller alla EU:s
  nationella statistikmyndigheter och indirekt tullmyndigheter som
  uppgiftslämnare.
situationer:
  - tulldata-till-statistik
  - utrikeshandelsstatistik
connections:
  - type: speciallag-till
    target: "[[foretagsstatistikforordningen]]"
    context: "Genomförandeförordning för tekniska specifikationer till förordning (EU) 2019/2152"
  - type: overlappar
    target: "[[handelsstatistik-genomforande]]"
    context: "Båda genomförandeakterna preciserar tillämpningen av företagsstatistikförordningen; denna förordning täcker bredare tekniska krav"
tags:
  - eu-forordning
  - statistik
  - foretagsstatistik
  - tekniska-specifikationer
  - genomforande
  - sdmx
sources:
  - "[[eu-foretagsstatistik-genomforande-eu-2020-1197]]"
---

## Sammanfattning

Genomförandeförordning (EU) 2020/1197 fastställer de tekniska specifikationerna för genomförandet av företagsstatistikförordningen (2019/2152). Förordningen definierar industriella huvudgrupper och NACE-aggregat, specificerar statistiska variabler, fastställer SDMX som obligatoriskt dataformat, och reglerar utbyte av konfidentiella mikrodata om unionsintern varuexport (minst 95 % täckning). Den upphäver ett 20-tal äldre genomförandeförordningar.

## Nyckelbestämmelser

| Artikel/Kapitel | Innehåll |
|----------------|---------|
| Kap. I | Datakrav: variabler, NACE-aggregat, industriella huvudgrupper |
| Kap. II | EuroGroups-registret: tekniska krav, kontrollkedjor, format |
| Kap. III | Mikrodata-utbyte om unionsintern varuexport |
| — Art. om täckning | Minimitäckningsgrad 95 % för varuexport-mikrodata |
| — Art. om format | SDMX-format, metadata, tidtabell för överföring |
| Kap. IV | Format och säkerhetsåtgärder för dataöverföring till Eurostat |
| Kap. V | Kvalitetsrapporter: förfarande och periodicitet |

## Kopplingar

| Typ | Mål | Kontext |
|-----|-----|---------|
| speciallag-till | [[foretagsstatistikforordningen]] | Genomförandeförordning till moderförordningen (EU) 2019/2152 |
| overlappar | [[handelsstatistik-genomforande]] | Båda preciserar tillämpningen; denna täcker bredare tekniska krav |

## Praktisk tillämpning

SCB tillämpar SDMX-standarden vid rapportering till Eurostat. Tullverkets dataöverföringar till SCB ska följa de dataelement och format som specificeras i denna förordning. Uppgifterna om unionsintern varuexport som Tullverket lämnar bidrar direkt till det obligatoriska mikrodata-utbytet mellan EU:s statistikmyndigheter.
