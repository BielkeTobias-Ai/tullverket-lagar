---
title: Lagen om skatt på energi
type: entity
entity_type: lag
sfs: "1994:1776"
short_name: Energiskattelagen
status: gallande
created: 2026-04-09
updated: 2026-04-09
befogenheter:
  - godkänna depåer för märkning och färgning av bränsle
tillampningsomrade: >
  Reglerar energiskatt, koldioxidskatt och svavelskatt på bränslen samt energiskatt på elektrisk kraft. Genomför EU:s energiskattedirektiv 2003/96/EG och punktskattedirektivet (EU) 2020/262 för harmoniserade energiprodukter. Skattskyldighet vid import kopplas till tullskuldens uppkomst enligt unionstullkodexen.
straffskala:
  - brott: otillåten användning av märkta oljeprodukter (avlägsna märkämne eller ta befattning i syfte att använda i strid mot märkningsreglerna)
    straff: "böter eller fängelse i högst 6 månader"
  - brott: grovt brott (betydande värden)
    straff: "fängelse i högst 2 år (om ej strängare straff enligt skattebrottslagen)"
  - brott: försök eller förberedelse till grovt brott
    straff: "ansvar enligt 23 kap. brottsbalken"
  - brott: skattebrott avseende energiskatt
    straff: "se skattebrottslagen (1971:69)"
situationer:
  - import-bränsle-tredjeländer
  - märkta-oljeprodukter-kontroll
  - otillåten-användning-röd-diesel
  - export-bränsle-uppskovsförfarande
  - smuggling-bränsle-punktskattebrott
  - märkning-kontroll-energiprodukter
  - dokumentering-uppskovsförfarande-bränsle
  - underrättelse-tullverket-skatteverket
  - gränskontroll-märkt-energiprodukt
connections:
  - type: hanvisar-till
    target: "[[tullagen]]"
    context: "Tullagstiftningsbegreppet används; skattskyldighet vid import kopplas till tullskuld enligt UCC och tullagen"
  - type: overlappar
    target: "[[smugglingslagen]]"
    context: "Smuggling av bränsle (t.ex. odeklarerad diesel) ger parallellt skattskyldighet och straffansvar under smugglingslagen"
  - type: hanvisar-till
    target: "[[forordningen-om-skatt-pa-energi]]"
    context: "Verkställighetsförordning som reglerar detaljerade administrativa förfaranden för godkännanden, märkning, dokumenthantering och överenskommelser"
  - type: overlappar
    target: "[[lagen-om-alkoholskatt]]"
    context: "Båda är punktskattelagar med liknande uppskovsförfarande och skattskyldighet vid import"
tags:
  - lag
  - punktskatt
  - energi
  - bränsle
  - koldioxidskatt
  - märkta-oljeprodukter
sources:
  - "[[lagen-om-skatt-pa-energi-1994-1776]]"
---

# Lagen om skatt på energi (1994:1776)

## Sammanfattning

Energiskattelagen reglerar energiskatt, koldioxidskatt och svavelskatt på bränslen samt energiskatt på elektrisk kraft. Bränslen identifieras via KN-nummer (Kombinerade nomenklaturen). Vid import kopplas skattskyldigheten direkt till tullskuldens uppkomst enligt unionstullkodexen. Lagen innehåller också ett eget straffsystem mot otillåten användning av märkta oljeprodukter (s.k. röd diesel) — ett vanligt kontrollproblem vid gränsen.

## Befogenheter

Tullverket har följande direkta roller enligt lagen:

- Godkänner depåer för märkning och färgning av bränsle (2 kap. 9 a §)
- Mottar administrativa referenskoder vid export av bränsle under uppskovsförfarande (4b kap. 7 §)
- Utfärdar intyg och exportrapporter om att bränsle lämnat EU (4b kap. 11–13 §§)

## Straffbestämmelser

| Brott | Straff |
|-------|--------|
| Otillåten befattning med märkta oljeprodukter (10 kap. 1 § 1 st.) | Böter eller fängelse i högst 6 månader |
| Grovt brott — betydande värden (10 kap. 1 § 2 st.) | Fängelse i högst 2 år |
| Försök/förberedelse till grovt brott (10 kap. 2 §) | 23 kap. brottsbalken |
| Skattebrott — undanhållande av energiskatt | Skattebrottslagen (1971:69) |

## Kopplingar

| Typ | Lag | Kontext |
|-----|-----|---------|
| hanvisar-till | [[tullagen]] | Import definieras via UCC art. 201; tullskuldens uppkomst utlöser skattskyldighet |
| overlappar | [[smugglingslagen]] | Odeklarerad bränsleimport ger parallellt skattskyldighet och straffansvar |

## Nyckelbestämmelser

| Paragraf | Innehåll |
|----------|----------|
| 1 kap. 2 b § | KN-nummer definierar energiprodukter |
| 1 kap. 7 § | Definitioner av import och otillåten införsel (kopplade till UCC) |
| 2 kap. 9 a § | Märkta oljeprodukter; Tullverket godkänner märkningsdepåer |
| 5 kap. 13 § | Skattskyldighet vid import: deklaranten eller person enl. UCC art. 77.3 |
| 5 kap. 14 § | Skattskyldigheten inträder när tullskulden uppkommer |
| 10 kap. 1–2 §§ | Straff för otillåten användning av märkta oljeprodukter |

## Praktisk tillämpning

- **Import av bränsle från tredjeland:** Tullverket hanterar tullklarering; energiskatten inträder parallellt med tullskulden och deklareras till Skatteverket
- **Röd diesel vid vägkontroll:** Polisen och Tullverket kontrollerar om märkta oljeprodukter används i fordon; brott leder till åtal under 10 kap. LSE; om undanhållning av skatt kan skattebrottslagen tillämpas parallellt
- **Smuggling av bränsle:** Odeklarerad import av diesel/bensin utlöser skattskyldighet; smugglingslagen tillämpas parallellt
- **Export under uppskovsförfarande:** Exportören lämnar referenskod till Tullverket; Tullverket intygar utförsel

> [!situation] Typisk situation
> Vid kontroll av fordon med otillåten röd diesel: 10 kap. [[lagen-om-skatt-pa-energi]] för det direkta brottet (böter/fängelse 6 mån, eller 2 år om grovt) + eventuellt [[smugglingslagen]] om bränslet förts in odeklarerat.
