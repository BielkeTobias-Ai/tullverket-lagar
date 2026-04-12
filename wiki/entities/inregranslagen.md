---
title: Inregränslagen
type: entity
entity_type: lag
source_type: lag
sfs: "1996:701"
short_name: Inregränslagen
status: gallande
created: 2026-04-09
updated: 2026-04-09
befogenheter:
  - kräva anmälan om kontrollerade varor vid inre EU-gräns
  - kräva anmälan och redovisning av kontanta medel ≥ 10 000 euro vid inre EU-gräns
  - begära att befordringsföretag överlämnar misstänkta försändelser
tillampningsomrade: >
  Reglerar anmälnings- och redovisningsskyldighet vid in- och utförsel av kontrollerade varuslag (narkotika, vapen, explosiva varor, alkohol m.fl.) samt kontanta medel över Sveriges gräns mot annat EU-land. Befogenheterna vid själva kontrollen finns i tullbefogenhetslagen (2024:710).
straffskala:
  - brott: underlåten anmälan om vapen (2 § 3) vid inre EU-gräns
    straff: "böter (ringa fall: straffrihet)"
  - brott: underlåten anmälan om sprängämnesprekursorer med tillståndsplikt (2 § 14) vid inre EU-gräns
    straff: "böter (ringa fall: straffrihet)"
  - brott: brott mot anmälningsplikt för kontanta medel ≥ 10 000 euro (3 a §)
    straff: "böter (ringa fall: straffrihet)"
  - brott: brott mot redovisningsplikt för oledsagade kontanta medel (3 b §)
    straff: "böter (ringa fall: straffrihet)"
situationer:
  - inre-EU-gräns-kontroll-narkotika
  - inre-EU-gräns-kontroll-vapen
  - kontanta-medel-EU-gräns
  - befordringsföretag-misstänkt-försändelse
  - inre-EU-gräns-alkohol-tobak-ålderskontroll
  - inre-EU-gräns-explosiva-varor
connections:
  - type: hanvisar-till
    target: "[[tullbefogenhetslagen]]"
    context: "1 §, 4 §, 7 §: befogenheterna vid kontroll, husrannsakan och lagföring finns i tullbefogenhetslagen (2024:710)"
  - type: hanvisar-till
    target: "[[narkotikastrafflagen]]"
    context: "2 § 2: narkotika definieras med hänvisning till narkotikastrafflagen (1968:64)"
  - type: hanvisar-till
    target: "[[vapenlagen]]"
    context: "2 § 3: skjutvapen och ammunition definieras med hänvisning till vapenlagen (1996:67)"
  - type: hanvisar-till
    target: "[[alkohollagen]]"
    context: "2 § 9: alkohol definieras med hänvisning till alkohollagen (2010:1622)"
  - type: hanvisar-till
    target: "[[lagen-om-brandfarliga-och-explosiva-varor]]"
    context: "2 § 15: explosiva varor definieras med hänvisning till lagen (2010:1011) om brandfarliga och explosiva varor"
  - type: overlappar
    target: "[[smugglingslagen]]"
    context: "6 §: ansvar döms inte ut om gärningen är belagd med straff i smugglingslagen (2000:1225); lagens brott är subsidiära till smugglingslagen"
  - type: kompletterar
    target: "[[tullbefogenhetslagen]]"
    context: "Inregränslagen skapar anmälningsskyldigheterna; tullbefogenhetslagen ger befogenheterna att genomföra kontrollen"
  - type: overlappar
    target: "[[tullbefogenhetslagen]]"
    context: "Speglad fran [[tullbefogenhetslagen]] — Båda lagarna tillämpas vid kontroll vid inre EU-gräns; inregränslagen ger anmälningsskyldigheterna, tullbefogenhetslagen ger kontrollbefogenheterna"
tags:
  - lag
  - inregräns
  - EU-gräns
  - anmälningsskyldighet
  - kontanta-medel
  - tullverket
sources:
  - "[[inregranslagen-1996-701]]"
---

# Inregränslagen (1996:701)

## Sammanfattning

Inregränslagen reglerar anmälningsskyldigheten vid passage av Sveriges gräns mot annat EU-land för ett fastlagt antal kontrollerade varuslag samt kontanta medel. Lagen existerar eftersom EU:s inre marknad innebär fri rörlighet — det finns ingen ordinär tullkontroll vid inre EU-gräns — men Sverige ändå behöver kontrollera narkotika, vapen, explosiva varor med mera. Befogenheterna för Tullverket att genomföra kontrollen (stoppande, husrannsakan, omhändertagande) finns i tullbefogenhetslagen (2024:710); inregränslagen skapar de materiella skyldigheterna och straffstadgandena.

## Befogenheter

- Kräva anmälan om kontrollerade varuslag vid inre EU-gräns (3 §)
- Kräva omedelbar anmälan och tillgängliggörande av kontanta medel ≥ 10 000 euro (3 a §)
- Begära redovisning inom 30 dagar för oledsagade kontanta medel ≥ 10 000 euro (3 b §)
- Kräva att befordringsföretag anmäler och överlämnar misstänkta försändelser (4 §)

## Straffbestämmelser

| Brott | Straff |
|-------|--------|
| Underlåten anmälan: vapen (2 § 3) vid inre EU-gräns | Böter (ringa = straffrihet) |
| Underlåten anmälan: tillståndspliktiga sprängämnesprekursorer (2 § 14) | Böter (ringa = straffrihet) |
| Brott mot anmälningsplikt: kontanta medel ≥ 10 000 euro (3 a §) | Böter (ringa = straffrihet) |
| Brott mot redovisningsplikt: oledsagade kontanta medel (3 b §) | Böter (ringa = straffrihet) |

Ansvar döms inte ut om gärningen är belagd med straff i brottsbalken, smugglingslagen (2000:1225), lagen om penningtvättsbrott (2014:307) eller terroristbrottslagen (2022:666).

## Kopplingar

| Typ | Lag | Kontext |
|-----|-----|---------|
| hanvisar-till | [[tullbefogenhetslagen]] | Befogenheter vid kontroll, utredning och lagföring |
| hanvisar-till | [[narkotikastrafflagen]] | Definition av narkotika (2 § 2) |
| hanvisar-till | [[vapenlagen]] | Definition av skjutvapen och ammunition (2 § 3) |
| hanvisar-till | [[alkohollagen]] | Definition av alkohol (2 § 9) |
| hanvisar-till | [[lagen-om-brandfarliga-och-explosiva-varor]] | Definition av explosiva varor (2 § 15) |
| overlappar | [[smugglingslagen]] | Smugglingslagen har prioritet; inregränslagens brott är subsidiära (6 §) |
| kompletterar | [[tullbefogenhetslagen]] | Inregränslagen: skyldigheterna. Tullbefogenhetslagen: kontrollbefogenheterna |

## Nyckelbestämmelser

| Paragraf | Innehåll |
|----------|----------|
| 2 § | Uttömmande lista över kontrollerade varuslag (15, fr.o.m. 2026-05-01 16 st.) |
| 3 § | Anmälningsskyldighet vid passage av inre EU-gräns |
| 3 a § | Anmälningsplikt för kontanta medel ≥ 10 000 euro (Lag 2026:120) |
| 3 b § | Redovisningsplikt för oledsagade kontanta medel (Lag 2026:120) |
| 4 § | Befordringsföretags skyldigheter (narkotika, vapen, explosiva varor) |
| 5 § | Straffstadganden |
| 6 § | Subsidiaritet: ingen dubbelbestraffning med brottsbalken, smugglingslagen m.fl. |
| 7 § | Utredning och lagföring: hänvisning till tullbefogenhetslagen |

## Praktisk tillämpning

- **Gränskontroll inre EU-gräns:** Tullverket kan kontrollera resande som passerar från annat EU-land; varuslaget avgör om anmälningsskyldighet föreligger
- **Narkotika från EU-land:** Anmälningsskyldighet om förbud eller villkor är uppfyllt; befogenheter att stoppa och kontrollera finns i tullbefogenhetslagen
- **Kontanta medel EU-resenär:** ≥ 10 000 euro måste anmälas omedelbart; brott ger böter (subsidiärt till penningtvättsbrottslagen)
- **Vapen från EU-land:** Alltid anmälningsskyldigt oavsett om tillstånd finns; underlåtenhet ger böter
- **Befordringsföretag:** Post- och kurirföretag som misstänker narkotika/vapen/explosiva varor i försändelse ska anmäla till Tullverket och överlämna vid begäran

> [!situation] Typisk situation
> Resande som passerar Öresundsbron med narkotika från Danmark: [[inregranslagen]] (anmälningsskyldighet), [[tullbefogenhetslagen]] (befogenheterna att kontrollera), [[narkotikastrafflagen]] (brottet) — och eventuellt [[smugglingslagen]] som tar över straffansvaret (6 § inregränslagen).
