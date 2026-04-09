---
title: Alkohollagen
type: entity
entity_type: lag
sfs: "2010:1622"
short_name: Alkohollagen
status: gällande
created: 2026-04-08
updated: 2026-04-09
befogenheter: []
tillampningsomrade: >
  Tillverkning, marknadsföring, införsel, import, handel och
  servering av alkoholdrycker, sprit och alkoholhaltiga preparat.
  Systembolagets detaljhandelsmonopol.
straffskala:
  - brott: olovlig befattning med sprit
    straff: "böter eller fängelse högst 2 år"
  - brott: olovlig försäljning av alkohol
    straff: "böter eller fängelse högst 2 år"
  - brott: grovt brott (yrkesmässigt/riktat mot ungdomar)
    straff: "fängelse 6 mån till 6 år"
  - brott: olovligt anskaffande av alkohol
    straff: "böter eller fängelse högst 2 år"
  - brott: grovt olovligt anskaffande
    straff: "fängelse högst 4 år"
situationer:
  - privatinforsel-grans
  - yrkesmassig-import-olovlig
  - tillfallig-forvaring-tullverket
  - ees-bestallning-privatperson
connections:
  - type: hanvisar-till
    target: "[[smugglingslagen]]"
    context: "11 kap. 12 §: 'Bestämmelser om ansvar för olovlig införsel och utförsel av sprit och alkoholdrycker finns i smugglingslagen.' Brott vid gräns = smugglingslagen, inte alkohollagen."
  - type: overlappar
    target: "[[smugglingslagen]]"
    context: "Alkohollagen 4 kap. 4 § definierar vad som är laglig/olaglig införsel. Smugglingslagen straffar den olagliga införseln. Båda behövs för att bedöma en situation."
  - type: hanvisar-till
    target: "[[tullbefogenhetslagen]]"
    context: "Tullbefogenhetslagen 5 kap. 24 § och 27 § hänvisar till alkohollagen för omhändertagande av alkoholvara."
  - type: hanvisar-till
    target: "[[tullagen]]"
    context: "12 kap. 5 §: alkoholdrycker i tillfällig lagring förverkas efter 30 dagar."
  - type: kompletterar
    target: "[[lagen-om-alkoholskatt]]"
    context: "Alkohollagen reglerar handeln och tillstanden; alkoholskattelagen (2022:156) reglerar beskattningen. Kvantitetsgranser for resandeinforsel finns i alkoholskattelagen 2 kap. 11 ss."
tags:
  - lag
  - alkohol
  - privatinförsel
  - monopol
  - tillstånd
sources:
  - "[[alkohollagen-2010-1622]]"
---

# Alkohollagen (2010:1622)

## Sammanfattning

Alkohollagen reglerar all handel med alkohol i Sverige — tillverkning, import, försäljning, servering. För tullverksamheten är 4 kap. 4 § central: den definierar **vem som får föra in alkohol** och under vilka villkor.

Viktigt: alkohollagens straffkapitel täcker **inte** gränsöverskridande brott. Olovlig införsel/utförsel regleras av [[smugglingslagen]] (11 kap. 12 §).

## Befogenheter

Alkohollagen ger inga direkta befogenheter till Tullverket. Befogenheter vid alkoholkontroll regleras i [[tullbefogenhetslagen]] (5 kap. för punktskattepliktiga varor).

## Straffbestämmelser

| Brottstyp | Paragraf | Straffskala |
|-----------|----------|-------------|
| Olovlig befattning med sprit | 11:1 | Böter — fängelse 2 år |
| Innehav destillationsapparat | 11:2 | Böter — fängelse 1 år |
| Olovlig försäljning | 11:3 | Böter — fängelse 2 år |
| Grovt brott (yrkesmässigt/ungdomar) | 11:4 | Fängelse 6 mån — 6 år |
| Olovlig tillverkning folköl/vin | 11:5 | Böter — fängelse 6 mån |
| Olovligt innehav (försäljningssyfte) | 11:6 | Böter — fängelse 2 år |
| Olovligt anskaffande | 11:7 | Böter — fängelse 2 år; grovt: 4 år |

**Undantag**: Olovlig **införsel** straffas enligt [[smugglingslagen]], inte alkohollagen (11 kap. 12 §).

## Privatinförsel — 4 kap. 4 § (central för tullkontroll)

**Huvudregel:** Alkohol får föras in enbart av partihandlare eller Systembolaget.

**Undantag för resandeinförsel:** Enskild person, fylld 20 år, som:
- Själv har förvärvat dryckerna
- Själv transporterar dem
- Dryckerna är för personligt bruk eller gåva till närstående

> [!situation] Typisk situation
> Resande passerar gräns med stor mängd alkohol. Tulltjänstemannen bedömer 4 kap. 4 § — är personen 20+, har själv köpt, transporterar själv, för personligt bruk? Om nej → olovlig införsel → [[smugglingslagen]]. Kvantitetsgränser regleras av alkoholskattelagen, inte alkohollagen.

## Kopplingar

### Överlappar med

| Lag | Kontext |
|-----|---------|
| [[smugglingslagen]] | Alkohollagen definierar villkoren, smugglingslagen straffar överträdelse vid gräns. |

### Kompletterar

| Lag | Kontext |
|-----|---------|
| [[lagen-om-alkoholskatt]] | Alkohollagen reglerar handeln; alkoholskattelagen (2022:156) reglerar beskattningen. Kvantitetsgranser for resandeinforsel finns i alkoholskattelagen 2 kap. 11 ss. |

### Hänvisar till

| Lag | Kontext |
|-----|---------|
| [[smugglingslagen]] | 11 kap. 12 §: olovlig in-/utförsel → smugglingslagen. |
| [[tullbefogenhetslagen]] | Tullbefogenhetslagen 5 kap. 24 §, 27 §: omhändertagande av alkoholvara. |
| [[tullagen]] | 12 kap. 5 §: förverkande efter 30 dagars tillfällig lagring. |

## Praktisk tillämpning

- **Privatinförsel vid gräns**: Bedöm 4 kap. 4 § — ålder, eget förvärv, personlig transport, personligt bruk. Inga kvantitetsgränser i alkohollagen — se skattelagstiftningen.
- **Tillfällig förvaring**: Alkohol Tullverket omhändertar förverkas efter 30 dagar (12 kap. 5 §).
- **Informationsutbyte**: Kommuner skyldiga att lämna uppgifter till Tullverket på begäran (9 kap. 8 §).
