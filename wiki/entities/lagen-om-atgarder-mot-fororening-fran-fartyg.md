---
title: "Lag (1980:424) om åtgärder mot förorening från fartyg"
type: entity
entity_type: lag
source_type: lag
sfs: "1980:424"
short_name: Fartygsmiljölagen / MARPOL-lagen
status: gallande
created: 2026-04-12
updated: 2026-04-12
befogenheter:
  - förbjuda oljeutsläpp från fartyg
  - inspektera fartyg för efterlevnadskontroll
  - förbjuda fartygs avgång och anlöpande av hamn
  - ta ut vattenföroreningsavgift
tillampningsomrade: >
  Implementerar MARPOL-konventionen. Förbud mot utsläpp av olja och
  skadliga ämnen inom Sveriges sjöterritorium, EEZ och Östersjöområdet.
  Tillsyn, dagböcker, certifikat, mottagningsanordningar i hamnar.
situationer:
  - oljeutsläpp-fartyg-östersjön
  - fartygsförbud-avgång-miljöbrott
  - tullverket-stoppar-avgång-miljöbeslut
connections:
  - type: kompletterar
    target: "[[fartygssakerhetslagen]]"
    context: "Parallell tillsynsstruktur; fartygssäkerhetslagen hänvisar till MARPOL-lagen"
  - type: kompletterar
    target: "[[kustbevakningslagen]]"
    context: "Kustbevakningen är primär tillsynsmyndighet till sjöss"
  - type: kompletterar
    target: "[[tullagen]]"
    context: "Tullverket stoppar tullförrättningar under fartygsförbud (6 kap. 10 §)"
  - type: overlappar
    target: "[[fartygssakerhetslagen]]"
    context: "Speglad fran [[fartygssakerhetslagen]] — Parallella tillsynssystem; MARPOL-lagen 1 kap. 1 § hänvisar till fartygssäkerhetslagen"
tags:
  - fororening
  - marpol
  - fartyg
  - miljo
  - tullverket
sources:
  - "[[lagen-om-atgarder-mot-fororening-fran-fartyg-1980-424]]"
straffskala: []  # TODO: fylla i fran rakallan
---

## Sammanfattning

Implementerar MARPOL i Sverige. Förbjuder olje- och kemikalieutsläpp till sjöss. Tillsynsmyndigheten (Transportstyrelsen/Kustbevakningen) kan förbjuda fartygs avgång. Tullverket underrättas om sådana förbud och ska ställa in tullförrättningar.

## Nyckelbestämmelser

| Paragraf | Innehåll |
|----------|----------|
| 2 kap. 2 § | Förbud mot oljeutsläpp i sjöterritorium, EEZ, Östersjöområdet |
| 5 kap. 2 § | Dagböcker tillgängliga för Polis, Kustbevakning och tillsynsmyndighet |
| 6 kap. 10 § | **Tullverket** underrättas om fartygsförbud; ställer in förrättningar |
| 8 kap. 1 § | Vattenföroreningsavgift vid utsläppsöverträdelse |

## Kopplingar

| Typ | Lag | Kontext |
|-----|-----|---------|
| kompletterar | [[fartygssakerhetslagen]] | Parallella tillsynssystem med Tullverket |
| kompletterar | [[kustbevakningslagen]] | Kustbevakning primär sjötillsyn |
| kompletterar | [[tullagen]] | Tullverket stoppar förrättningar vid fartygsförbud |

## Praktisk tillämpning

Tullverkets roll är sekundär men konkret: vid miljörelaterat fartygsförbud stoppas all tullklarering. Tullverket fungerar som ett av flera "grindvakter" som hindrar fartyget från att lämna hamn i strid mot förbudet.
