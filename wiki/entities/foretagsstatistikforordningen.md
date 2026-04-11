---
title: Företagsstatistikförordningen
type: entity
entity_type: lag
celex: "32019R2152"
short_name: Företagsstatistikförordningen
status: gallande
created: 2026-04-11
updated: 2026-04-11
befogenheter:
  - kräva att tullmyndigheter lämnar tulldeklarationsdata till nationella statistikmyndigheter
  - kräva att skattemyndigheter lämnar momsdata för varuhandelsstatistik
  - reglera utbyte av konfidentiella mikrodata om unionsintern varuexport mellan medlemsstater
  - ålägga nationella statistikmyndigheter att tillhandahålla harmoniserad företagsstatistik
tillampningsomrade: >
  Gemensam rättslig ram för europeisk företagsstatistik inklusive strukturstatistik,
  konjunkturstatistik, utrikeshandelsstatistik, FoU och innovation. Tull- och
  skattemyndigheterna är uppgiftslämnare för handelsstatistik.
situationer:
  - tulldata-till-statistik
  - utrikeshandelsstatistik
  - centraliserad-klarering-statistik
connections:
  - type: hanvisar-till
    target: "[[tullforordningen]]"
    context: "Tulldeklarationer (UCC art. 179) är primär datakälla för utrikeshandelsstatistik"
  - type: hanvisar-till
    target: "[[handelsstatistik-genomforande]]"
    context: "Kompletteras av delegerad förordning (EU) 2021/1704 om detaljer för tull- och skattedata"
  - type: hanvisar-till
    target: "[[foretagsstatistik-genomforande]]"
    context: "Genomförs av genomförandeförordning (EU) 2020/1197 om tekniska specifikationer"
  - type: hanvisar-till
    target: "[[handelsstatistik-komplettering]]"
    context: "Landnomenklatur fastställs i genomförandeförordning (EU) 2020/1470"
tags:
  - eu-forordning
  - statistik
  - foretagsstatistik
  - handelsstatistik
  - eurostat
sources:
  - "[[eu-foretagsstatistik-eu-2019-2152]]"
---

## Sammanfattning

Företagsstatistikförordningen (EU) 2019/2152 skapar en gemensam rättslig ram för all europeisk företagsstatistik och upphäver tio tidigare enskilda rättsakter. Förordningen reglerar hur tull- och skattemyndigheter ska lämna data till nationella statistikmyndigheter, standardiserar statistikprocesser och inrättar EuroGroups-registret för multinationella företagsgrupper. Tullmyndigheternas tulldeklarationsdata är en primär datakälla för utrikeshandelsstatistiken.

## Nyckelbestämmelser

| Artikel/Bilaga | Innehåll |
|---------------|---------|
| Art. 5 | Datakällor: tull- och skattemyndigheter ska lämna uppgifter |
| Art. 7 | Klassificeringar: produkter, länder, transaktionstyper |
| Art. 9–10 | EuroGroups-registret: unik identifierare, kontrollkedjor |
| Art. 17 | Mikrodata-utbyte: unionsintern varuexport obligatoriskt |
| Bilaga I | Statistikämnen: konjunktur, struktur, handel, FoU, innovation m.fl. |
| Bilaga V | Data från skattemyndigheter (momsdeklarationer, sammanställningar) |
| Bilaga VI | Data från tullmyndigheter: tulldeklarationsuppgifter |

## Kopplingar

| Typ | Mål | Kontext |
|-----|-----|---------|
| hanvisar-till | [[tullforordningen]] | UCC är rättslig bas för tulldeklarationsdata (art. 179 om centraliserad klarering) |
| hanvisar-till | [[handelsstatistik-genomforande]] | Delegerad förordning preciserar tull- och skattedata |
| hanvisar-till | [[foretagsstatistik-genomforande]] | Tekniska specifikationer och SDMX-format |
| hanvisar-till | [[handelsstatistik-komplettering]] | Landnomenklatur för handelsstatistik |

## Praktisk tillämpning

Tullverket är enligt denna förordning skyldigt att löpande lämna tulldeklarationsdata till SCB. Centraliserad klarering (UCC art. 179) skapar särskilda skyldigheter: vid klarering i ett annat EU-land ska det landet rapportera till Tullverket, som vidarebefordrar till SCB. Bristande rapportering kan leda till ofullständig utrikeshandelsstatistik och kommissionsärenden.

> [!situation] Typisk situation
> Tullverket vidarebefordrar månadsvis export- och importdata från tulldeklarationssystemet (TDS) till SCB. SCB sammanställer utrikeshandelsstatistik som publiceras av Eurostat. Uppgifterna används för handelsbalans och BNP-beräkningar.
