---
title: "Lag (1918:163) med vissa bestämmelser om sjöfynd"
type: entity
entity_type: lag
source_type: lag
sfs: "1918:163"
short_name: Sjöfyndslagen
status: gallande
created: 2026-04-12
updated: 2026-04-12
befogenheter:
  - ålägga bärgare att anmäla fynd till Polismyndigheten eller Kustbevakningen
  - besiktiga och kungöra sjöfynd
  - sälja sjöfynd på auktion
tillampningsomrade: >
  Reglerar anmälnings- och förfarandeskyldigheter vid bärgning av övergivna fartyg, fartygslämningar och gods i svenska vatten.
situationer:
  - sjofynd-kust-hamn
  - ofortullat-gods-i-vatten
connections:
  - type: hanvisar-till
    target: "[[forordningen-om-sjofynd-1984-985]]"
    context: "Tillämpningsförordning som reglerar handläggning och Tullverkets underrättelse om oförtullat gods"
  - type: hanvisar-till
    target: "[[lagen-om-ensamratt-till-bargning]]"
    context: "Lagen hänvisar till ensamrättslagen för bärgning av sjunket gods (§ 9)"
  - type: hanvisar-till
    target: "[[lagen-om-hittegods]]"
    context: "Lagen hänvisar till hittegodslagens bestämmelser (§ 9)"
  - type: kompletterar
    target: "[[kustbevakningslagen]]"
    context: "Kustbevakningstjänsteman mottar anmälningar och underrättar Polismyndigheten (§ 1)"
  - type: overlappar
    target: "[[lagen-om-hittegods]]"
    context: "Speglad fran [[lagen-om-hittegods]] — Lagen hänvisar till sjöfyndslagen för fartygslämningar och sjöfynd (§ 11)"
tags:
  - sjofynd
  - bargning
  - hittegods
  - tull
sources:
  - "[[lagen-om-sjofynd-1918-163]]"
straffskala: []  # TODO: fylla i fran rakallan
---

## Sammanfattning

Sjöfyndslagen (1918:163) ålägger den som bärgar övergivna fartyg eller gods i svenska vatten att anmäla fyndet till Polismyndigheten eller Kustbevakningen. Polismyndigheten besiktigar, kungör och förvaltar fyndet tills ägaren anmäler sig eller fristen löper ut.

Tullrelevansen uppstår när bärgat gods kan utgöra **oförtullade varor** — i sådana fall ska Polismyndigheten underrätta Tullverket (via tillämpningsförordningen 1984:985).

## Nyckelbestämmelser

| Paragraf | Innehåll |
|----------|----------|
| 1 § | Bärgare ska anmäla till Polismyndigheten eller Kustbevakningen |
| 3 § | Polismyndigheten besiktigar och kungör; 90 dagars frist för ägaren |
| 4 § | Ägaren återfår godset mot bärgarlön; annars tillfaller det bärgaren |
| 9 § | Hänvisningar till kulturmiljölagen, hittegodslagens och ensamrättslagen |

## Kopplingar

| Typ | Entitet | Kontext |
|-----|---------|---------|
| hanvisar-till | [[forordningen-om-sjofynd-1984-985]] | Tillämpningsregler inkl. Tullverkets underrättelse |
| hanvisar-till | [[lagen-om-ensamratt-till-bargning]] | Ensamrätt att bärga sjunket gods |
| hanvisar-till | [[lagen-om-hittegods]] | Hittegods generellt |
| kompletterar | [[kustbevakningslagen]] | Kustbevakningstjänsteman mottar bärgningsanmälan |

## Praktisk tillämpning

> [!situation] Bärgat gods — oförtullad vara?
> Vid bärgning av gods i svenska vatten: anmälan till Kustbevakning/Polis → besiktning → om godset kan vara oförtullad vara underrättar Polismyndigheten Tullverket (förordning 1984:985 § 4).
