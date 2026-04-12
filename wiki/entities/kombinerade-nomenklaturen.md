---
title: Kombinerade nomenklaturen (KN)
type: entity
entity_type: lag
source_type: eu-forordning
celex: "31987R2658"
short_name: KN
status: gallande
created: 2026-04-11
updated: 2026-04-11
befogenheter:
  - fastställa 8-siffrig varukod för alla varor vid EU-handel
  - ligga till grund för Gemensamma tulltaxans tullsatser
  - bilda basen för TARIC med ytterligare underuppdelningar
  - användas för statistik över EU:s utrikeshandel
tillampningsomrade: >
  All import och export av varor i handeln mellan EU och tredjeland.
  KN utgör den obligatoriska nomenklaturen för tulldeklarationer och
  handelsstatistik. Direkt tillämplig i alla EU:s medlemsstater.
  Uppdateras årligen av kommissionen senast 31 oktober.
situationer:
  - tulldeklaration-import
  - tulldeklaration-export
  - klassificering-KN
  - varuvärdering
  - statistik-utrikeshandel
  - TARIC-sökning
  - preferenstull-beräkning
connections:
  - type: kompletterar
    target: "[[ucc]]"
    context: "UCC art. 56-57 reglerar varuklassificering och hänvisar till KN som den nomenklaturen som ska användas. KN är den tekniska grunden för UCC:s klassificeringssystem."
  - type: hanvisar-till
    target: "[[tullagen]]"
    context: "Tullagen hänvisar till KN-koder vid tulldeklaration och beräkning av tullskuld."
  - type: hanvisar-till
    target: "[[tullforordningen]]"
    context: "Tullförordningen specificerar hur KN-koder används i svenska tullförfaranden."
tags:
  - KN
  - varuklassificering
  - tulltaxa
  - TARIC
  - nomenklatur
  - EU-forordning
sources:
  - "[[kombinerade-nomenklaturen-eeg-2658-87]]"
---

## Sammanfattning

Den kombinerade nomenklaturen (KN) är EU:s system för varuklassificering, upprättat genom rådets förordning (EEG) nr 2658/87. KN definierar ett **8-siffrigt kodnummer** för varje varukategori och är den obligatoriska nomenklaturen för alla tulldeklarationer och statistik över EU:s utrikeshandel. KN bildar även grunden för TARIC — EU:s integrerade tulltaxa som integrerar alla handelspolitiska åtgärder.

KN bygger på det internationella **harmoniserade systemet (HS)** framtaget av Tullsamarbetsrådet (WCO), med EU-specifika underuppdelningar på 7:e och 8:e siffran.

## Befogenheter

KN är inte en befogenhetslag i traditionell mening — den är en **teknisk nomenklatur** som styr klassificering:

- Fastställer den 8-siffriga varukod som ska anges i alla tulldeklarationer vid EU-handel
- Utgör den legala grunden för Gemensamma tulltaxans tullsatser (autonoma och konventionella)
- Bildar basen för TARIC-numren (10-11 siffror) som används operativt av tullmyndigheter
- Används av kommissionen och medlemsstaterna för statistik över utrikeshandel

## Kodnummerstruktur

| Siffror | Ursprung | Funktion |
|---------|----------|---------|
| 1-6 | HS (internationellt) | Rubrik/underrubrik i Harmoniserade systemet |
| 7-8 | KN (EU-nivå) | EU-specifik underuppdelning; "00" om ingen uppdelning |
| 9 | Nationell nivå | Nationella statistiska underuppdelningar |
| 10-11 | TARIC (EU-nivå) | EU:s handelspolitiska åtgärder; "00" om ingen åtgärd |

## Kopplingar

| Typ | Målllag | Kontext |
|-----|---------|---------|
| kompletterar | [[ucc]] | UCC art. 56-57 stödjer sig på KN för klassificeringsregler |
| hanvisar-till | [[tullagen]] | KN-koder används vid tulldeklaration och tullskuldsberäkning |
| hanvisar-till | [[tullforordningen]] | KN-tillämpning i svenska förfaranden |

## Nyckelbestämmelser

| Artikel | Innehåll |
|---------|----------|
| Art. 1 | Upprättar KN och anger dess tre beståndsdelar (HS + EU-underuppdelningar + anmärkningar) |
| Art. 2 | Upprättar TARIC baserat på KN |
| Art. 3 | Definierar kodnummerstrukturen (8-siffrig KN, 2 TARIC-siffror, 1 nationell) |
| Art. 4 | KN + TARIC = Gemensamma tulltaxan; KN obligatorisk för handelsstatistik |
| Art. 5 | TARIC-koder obligatoriska vid import |
| Art. 12 | Kommissionen publicerar ny KN-version årligen senast 31 oktober, gällande från 1 januari |

## Praktisk tillämpning

KN är central i nästan alla tullsituationer:

> [!situation] Tulldeklaration vid import
> Importören måste ange rätt 8-siffrigt KN-nummer för varorna. Fel klassificering kan leda till felaktig tullsats, böter eller tullskuld. Tullverket kan omklassificera varor.

> [!situation] TARIC-sökning
> Tullombud och importörer söker i TARIC-databasen med KN-numret som nyckel för att se tillämpliga tullsatser, kvoter, antidumpningsåtgärder och andra handelspolitiska åtgärder.

> [!situation] Klassificeringsbesked (BTI)
> Tullverket och EU-kommissionen utfärdar bindande klassificeringsbesked (BTI) baserade på KN. Dessa är bindande i alla EU-länder.

> [!situation] Preferenstull och ursprung
> KN-numret avgör vilka frihandelsavtal och ursprungsregler som är tillämpliga vid import.
