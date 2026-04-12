---
title: "Lag (1974:1066) om förfarande med förverkad egendom och hittegods m.m."
type: entity
entity_type: lag
sfs: "1974:1066"
short_name: Förfarandelagen (förverkad egendom)
status: gallande
created: 2026-04-12
updated: 2026-04-12
befogenheter:
  - sälja förverkad eller omhändertagen egendom
  - förstöra egendom som kan komma till brottslig användning
  - behålla förverkad egendom för utbildnings- eller forensikändamål
  - lämna ut egendom till rättsinnehavare
tillampningsomrade: >
  Praktiskt förfarande med egendom som tillfallit staten genom förverkande, hittegods, stöldgodsförvar, eller omhändertaganden av polis, kustbevakning eller tull.
situationer:
  - forverkad-egendom-hantering
  - tullomhandertagen-egendom-ej-hamtad
  - klampat-fordon-ej-hamtat
connections:
  - type: kompletterar
    target: "[[tullbefogenhetslagen]]"
    context: "Reglerar förfarandet med egendom omhändertagen enligt tullbefogenhetslagen 10 kap. 1 § (§ 1 punkt 4 och § 2a)"
  - type: kompletterar
    target: "[[kustbevakningslagen]]"
    context: "Reglerar förfarandet med egendom omhändertagen av Kustbevakningen (§ 1 punkt 4)"
  - type: hanvisar-till
    target: "[[lagen-om-visst-stoldgods]]"
    context: "Stöldgodslagen delegerar förfarandefrågor till denna lag"
  - type: hanvisar-till
    target: "[[lagen-om-hittegods]]"
    context: "Hittegods som tillfaller staten hanteras enligt denna lag"
tags:
  - forverkande
  - hittegods
  - stoldgods
  - tullbefogenhetslagen
  - kustbevakning
  - egendomshantering
sources:
  - "[[lagen-om-forfarande-med-forverkad-egendom-1974-1066]]"
---

## Sammanfattning

Förfarandelagen (1974:1066) är den centrala lagen för vad som händer med egendom efter att den tagits om hand av staten. Den täcker förverkad egendom, hittegods som tillfaller staten, stöldgods i förvar, och — sedan 2024 — egendom omhändertagen av Tullverket med stöd av tullbefogenhetslagen (10 kap. 1 §).

Tullverket är direkt nämnt som förvaringshavare vid klampning (§ 2c via klampningslagen 2024:1089).

## Nyckelbestämmelser

| Paragraf | Innehåll |
|----------|----------|
| 1 § 4 | Gäller egendom omhändertagen av Tullverket (tullbefogenhetslagen 10 kap. 1 §) |
| 2a § | Tullverkets omhändertagna egendom tillgänglig hos Polismyndigheten i minst en månad |
| 2c § | Klampegods förvaras hos Polismyndigheten eller Tullverket i minst en månad |
| 4 § | Omedelbar försäljning om godset riskerar förstöras eller vård är för kostsam |
| 5 § | Egendom för brottslig användning ska oskadliggöras |
| 5a § | Brottsbekämpande myndigheter kan behålla för utbildning/forensik |
| 6 § | Övrig egendom säljs; kan förstöras om osäljbar |
| 7 § | Rättsinnehavare kan återfå egendom om den ej sålts/förstörts |

## Kopplingar

| Typ | Entitet | Kontext |
|-----|---------|---------|
| kompletterar | [[tullbefogenhetslagen]] | Förfarandet med tullomhändertagen egendom |
| kompletterar | [[kustbevakningslagen]] | Förfarandet med kustbevakningsomhändertagen egendom |
| hanvisar-till | [[lagen-om-visst-stoldgods]] | Stöldgodslagen delegerar förfarandefrågor hit |
| hanvisar-till | [[lagen-om-hittegods]] | Statens hittegods hanteras här |

## Praktisk tillämpning

> [!situation] Tullverket omhändertar egendom — inte hämtad
> Omhändertagen egendom (tullbefogenhetslagen 10 kap. 1 §) → finns tillgänglig hos Polismyndigheten minst en månad → om ej hämtad → säljs, oskadliggörs eller behålls av brottsbekämpande myndighet.

> [!situation] Klampat fordon — ej hämtat
> Klampegods (klampningslagen 2024:1089) förvaras hos Tullverket eller Polismyndigheten → minst en månads avhämtningsfrist → sedan förfarandelagen tillämpas.
