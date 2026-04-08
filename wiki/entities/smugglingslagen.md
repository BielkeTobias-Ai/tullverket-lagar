---
title: Smugglingslagen
type: entity
entity_type: lag
sfs: "2000:1225"
short_name: Smugglingslagen
status: gällande
created: 2026-04-07
updated: 2026-04-08
befogenheter:
  - beslag av smuggelgods
  - förverkande av varor och hjälpmedel
tillampningsomrade: >
  Straffansvar för olaglig in- och utförsel av varor över Sveriges gräns,
  inklusive smuggling, tullbrott och befattning med smuggelgods.
straffskala:
  - brott: smuggling
    straff: "böter till fängelse 2 år"
  - brott: ringa smuggling
    straff: "penningböter"
  - brott: grov smuggling
    straff: "fängelse 6 mån till 6 år"
  - brott: narkotikasmuggling
    straff: "fängelse högst 3 år"
  - brott: grov narkotikasmuggling
    straff: "fängelse 2 till 7 år"
  - brott: synnerligen grov narkotikasmuggling
    straff: "fängelse 6 till 10 år"
  - brott: vapensmuggling
    straff: "fängelse högst 5 år"
  - brott: grov vapensmuggling
    straff: "fängelse 4 till 7 år"
  - brott: synnerligen grov vapensmuggling
    straff: "fängelse 6 till 10 år"
  - brott: smuggling av explosiv vara
    straff: "böter till fängelse 5 år"
  - brott: grov smuggling av explosiv vara
    straff: "fängelse 4 till 7 år"
  - brott: synnerligen grov smuggling av explosiv vara
    straff: "fängelse 6 till 10 år"
  - brott: tullbrott
    straff: "böter till fängelse 2 år"
  - brott: grovt tullbrott
    straff: "fängelse 6 mån till 6 år"
  - brott: olovlig befattning med smuggelgods
    straff: "böter till fängelse 2 år"
  - brott: grov olovlig befattning med smuggelgods
    straff: "fängelse 6 mån till 6 år"
situationer:
  - granskontroll-narkotika
  - granskontroll-vapen
  - granskontroll-explosiva-varor
  - tulldeklaration-felaktig
  - smuggelgods-hantering
  - granskontroll-forbudsvara
connections:
  - type: hanvisar-till
    target: "[[narkotikastrafflagen]]"
    context: "Definition av narkotika (§2). Undantag från smuggelgodsansvar om gärningen är belagd med straff i narkotikastrafflagen (§12)."
  - type: hanvisar-till
    target: "[[vapenlagen]]"
    context: "Definition av vapen (§2). Undantag från smuggelgodsansvar om gärningen är belagd med straff i vapenlagen (§12)."
  - type: hanvisar-till
    target: "[[lagen-om-brandfarliga-och-explosiva-varor]]"
    context: "Definition av explosiva varor (§2). Undantag från smuggelgodsansvar (§12)."
  - type: hanvisar-till
    target: "[[tullbefogenhetslagen]]"
    context: "Definition av tullbehandling (§2). Tullverkets rätt att försälja/förstöra beslagtagen egendom (§19)."
  - type: kompletteras-av
    target: "[[tullbefogenhetslagen]]"
    context: "Smugglingslagen definierar brotten, Tullbefogenhetslagen ger befogenheterna. Två delar av 2024-reformen."
  - type: hanvisar-till
    target: "[[tullagen]]"
    context: "Tulldeklaration vid centraliserad klarering (§8). Tulltillägg (§20)."
  - type: overlappar
    target: "[[narkotikastrafflagen]]"
    context: "Smugglingslagen §6 = narkotikasmuggling över gräns. Narkotikastrafflagen = innehav/överlåtelse/bruk inom Sverige."
  - type: overlappar
    target: "[[vapenlagen]]"
    context: "Smugglingslagen §6a = vapensmuggling. Vapenlagen = innehav/tillstånd inom Sverige."
  - type: overlappar
    target: "[[lagen-om-brandfarliga-och-explosiva-varor]]"
    context: "Smugglingslagen §6b = smuggling av explosiva varor. LBE = olovlig hantering/tillstånd inom Sverige."
  - type: overlappar
    target: "[[knivlagen]]"
    context: "Införsel av förbjudna knivar kan falla under både smugglingslagen §3 och knivlagen (innehav)."
  - type: overlappar
    target: "[[alkohollagen]]"
    context: "Alkohollagen definierar villkoren för införsel (4:4). Smugglingslagen straffar överträdelse vid gräns."
  - type: overlappar
    target: "[[tullagen]]"
    context: "Tullförseelse (Tullagen 5 kap.) överlappar med tullbrott (Smugglingslagen §8-10). Smugglingslagen går före (subsidiaritet)."
tags:
  - lag
  - smuggling
  - strafflag
  - gränsbrott
  - narkotika
  - vapen
  - explosiva-varor
  - tullbrott
sources:
  - "[[smugglingslagen-2000-1225]]"
---

# Smugglingslagen (2000:1225)

## Sammanfattning

Smugglingslagen är Sveriges centrala strafflag för olaglig in- och utförsel av varor. Den kriminaliserar smuggling av förbudsvaror, [[tullbrott]] (skatteundandragande) och hantering av smuggelgods. Lagen fungerar som en **fallback** — om annan lag redan bestraffar samma gärning gäller den lagen istället (§1, subsidiaritetsprincipen).

Sedan 2024 års reform (SFS 2024:739) innehåller lagen enbart straff- och [[forverkande|förverkandebestämmelser]]. Befogenheter för tulltjänstemän har flyttats till [[tullbefogenhetslagen]].

## Befogenheter

Smugglingslagen ger i sig inte tulltjänstemän operativa befogenheter (dessa finns i [[tullbefogenhetslagen]]). Däremot ger lagen:

- **Förverkande** av varor som varit föremål för brott (§16)
- **Förverkande av hjälpmedel** eller alternativa åtgärder (§17)
- **Försäljning/förstörelse** av förverkad egendom (§18-19)
- **Kustbevakningens ingreppssrätt** — samma rätt som polis att ingripa mot brott enligt lagen (§22)

## Straffbestämmelser

### Smugglingsbrott (§3-7)

| Brottstyp | Paragraf | Straffskala |
|-----------|----------|-------------|
| Smuggling | §3 | Böter — fängelse 2 år |
| Ringa smuggling | §4 | Penningböter |
| Grov smuggling | §5 | Fängelse 6 mån — 6 år |
| Narkotikasmuggling | §6 st.1 | Fängelse högst 3 år |
| Narkotikasmuggling (försäljningssyfte) | §6 st.2 | Fängelse 6 mån — 3 år |
| Ringa narkotikasmuggling | §6 st.3 | Böter — fängelse 6 mån |
| Grov narkotikasmuggling | §6 st.4 | Fängelse 2 — 7 år |
| Synnerligen grov narkotikasmuggling | §6 st.5 | Fängelse 6 — 10 år |
| Vapensmuggling | §6a st.1 | Fängelse högst 5 år |
| Ringa vapensmuggling | §6a st.2 | Böter — fängelse 6 mån |
| Grov vapensmuggling | §6a st.3 | Fängelse 4 — 7 år |
| Synnerligen grov vapensmuggling | §6a st.4 | Fängelse 6 — 10 år |
| Smuggling av explosiv vara | §6b st.1 | Böter — fängelse 5 år |
| Ringa smuggling av explosiv vara | §6b st.2 | Penningböter |
| Grov smuggling av explosiv vara | §6b st.3 | Fängelse 4 — 7 år |
| Synnerligen grov smuggling av explosiv vara | §6b st.4 | Fängelse 6 — 10 år |
| Olovlig införsel/utförsel (oaktsamhet) | §7 | Böter — fängelse 2 år |

### Tullbrott (§8-11)

| Brottstyp | Paragraf | Straffskala |
|-----------|----------|-------------|
| [[Tullbrott]] | §8 | Böter — fängelse 2 år |
| Ringa tullbrott | §9 | Penningböter |
| Grovt tullbrott | §10 | Fängelse 6 mån — 6 år |
| Vårdslös tullredovisning | §11 | Böter — fängelse 2 år |

### Smuggelgods (§12-13)

| Brottstyp | Paragraf | Straffskala |
|-----------|----------|-------------|
| Olovlig befattning med smuggelgods | §12 st.1 | Böter — fängelse 2 år |
| Olovlig befattning, oaktsamhet | §12 st.2 | Böter |
| Grov olovlig befattning | §13 | Fängelse 6 mån — 6 år |

## Kopplingar

### Kompletteras av

| Lag | Relation |
|-----|----------|
| [[tullbefogenhetslagen]] | Smugglingslagen definierar brotten, Tullbefogenhetslagen ger befogenheterna. Två delar av 2024-reformen. |

### Överlappningar

| Lag | Kontext |
|-----|---------|
| [[narkotikastrafflagen]] | Smugglingslagen §6 = narkotikasmuggling över gräns. Narkotikastrafflagen = innehav/överlåtelse inom Sverige. |
| [[vapenlagen]] | Smugglingslagen §6a = vapensmuggling. Vapenlagen = innehav/tillstånd inom Sverige. |
| [[lagen-om-brandfarliga-och-explosiva-varor]] | Smugglingslagen §6b = smuggling av explosiva varor. LBE = hantering/tillstånd inom Sverige. |
| [[knivlagen]] | Införsel av förbjudna knivar kan falla under både smugglingslagen §3 och knivlagen. |
| [[alkohollagen]] | Alkohollagen definierar villkoren (4:4), smugglingslagen straffar överträdelse vid gräns. |
| [[tullagen]] | Tullförseelse (Tullagen 5 kap.) överlappas av tullbrott (§8-10). Smugglingslagen går före. |

### Hänvisar till

| Lag | Kontext |
|-----|---------|
| [[narkotikastrafflagen]] | Definition av narkotika (§2). Undantag från smuggelgodsansvar (§12). |
| [[vapenlagen]] | Definition av vapen (§2). Undantag från smuggelgodsansvar (§12). |
| [[lagen-om-brandfarliga-och-explosiva-varor]] | Definition av explosiva varor (§2). Undantag (§12). |
| [[tullbefogenhetslagen]] | Definition av tullbehandling (§2). Beslagsregler (§19). |
| [[tullagen]] | Centraliserad klarering (§8). Tulltillägg (§20). |

> [!situation] Typisk situation
> Vid gränskontroll hittas narkotika i ett fordon. Tulltjänstemannen använder [[tullbefogenhetslagen]] för att stoppa och visitera, men **brottet** rubriceras under Smugglingslagen §6 (narkotikasmuggling). Om personen även kan åtalas för innehav enligt [[narkotikastrafflagen]], gäller narkotikastrafflagen för innehav (subsidiaritet, §1) medan Smugglingslagen gäller för själva införseln.

## Nyckelbestämmelser

- **§1 — Subsidiaritetsprincipen**: Annan lag med straffbestämmelse går före. Avgörande för vilken lag som tillämpas i praktiken.
- **§2 — Definitioner**: Kopplar varubegreppen till respektive speciallag.
- **§3 — Grundbrottet**: Att bryta mot införselförbud/-villkor genom att inte anmäla till tullbehandling.
- **§6, 6a, 6b — Specialiserade brottsrubriker**: Narkotika, vapen och explosiva varor har egna paragrafer med högre straffskalor.
- **§8 — Tullbrott**: Skatteundandragande vid tullbehandling — en helt annan brottstyp än smuggling av förbudsvaror.
- **§12 — Smuggelgodsbefattning**: Att hantera vara man vet/borde veta är smugglad.
- **§14 — Försöksbrott**: Redan försök är straffbart för de flesta brottstyper.
- **§15 — Frivillig rättelse**: Ansvarsfrihet om faran undanröjs frivilligt.

## Praktisk tillämpning

- **Gränskontroll — förbudsvara hittad**: Brottet rubriceras under §3 (generellt) eller §6/6a/6b (narkotika/vapen/explosiva varor) beroende på varutyp.
- **Felaktig tulldeklaration**: Om syftet är skatteundandragande → [[tullbrott]] (§8), inte smuggling (§3).
- **Hantering av smuggelgods**: Den som transporterar/förvarar/säljer smugglad vara — §12-13. Men om varan är narkotika/vapen/explosiva varor och gärningen är straffbar under speciallagen, gäller den istället.
- **Försök att smuggla**: Straffbart enligt §14 — behövs inte fullbordat brott.
