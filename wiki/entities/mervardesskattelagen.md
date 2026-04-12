---
title: Mervärdesskattelagen
type: entity
entity_type: lag
source_type: lag
created: 2026-04-09
updated: 2026-04-09
sfs: "2023:200"
short_name: Momslagen / ML
status: gallande
tags:
  - skatt
  - moms
  - mervardeskatt
  - import
sources:
  - "[[mervardesskattelagen-2023-200]]"
befogenheter:
  - fastställa moms vid import
  - bestämma beskattningsunderlag (tullvärde + tull + punktskatt)
  - kräva betalning av importmoms
  - undanta varor i skatteupplag/tullager/frizon från skatteplikt
  - tillämpa IOSS för lågvärdesimport
tillampningsomrade: >
  Mervärdesskatt på konsumtion — inklusive import av varor till Sverige.
  Tullverket beslutar om moms vid import; Skatteverket hanterar inrikes moms.
straffskala: []
situationer:
  - importklarering-moms
  - skatteupplag-tullager
  - distansforsakjning-ioss
  - lagvardesimport-150-euro
  - diplomatisk-momsfrihet
connections:
  - type: hanvisar-till
    target: "[[tullagen]]"
    context: "Import definieras via unionstullkodexen; tullskuld utlöser momsplikt"
  - type: hanvisar-till
    target: "[[lagen-om-skatt-pa-energi]]"
    context: "Skatteupplag för energiprodukter definieras i energiskattelagen"
  - type: hanvisar-till
    target: "[[lagen-om-alkoholskatt]]"
    context: "Skatteupplag för etylalkohol definieras i alkoholskattelagen"
  - type: overlappar
    target: "[[lagen-om-frihet-fran-skatt-vid-import]]"
    context: "Båda reglerar skattefrihet vid import — ML undantar, skattefrihetlagen specificerar kvoter"
  - type: hanvisar-till
    target: "[[smugglingslagen]]"
    context: "Otillåten införsel utlöser tullskuld och därmed importmomsplikt"
  - type: hanvisar-till
    target: "[[lagen-om-tullfrihet]]"
    context: "Tullbefrielse påverkar beskattningsunderlaget vid import"
  - type: kompletterar
    target: "[[mervardesskatteforordningen]]"
    context: "Förordningen verkställer ML:s administrativa processer"
  - type: overlappar
    target: "[[mervardesskatteforordningen]]"
    context: "Speglad fran [[mervardesskatteforordningen]] — Speglad fran [[mervardesskattelagen]] — Förordningen verkställer ML:s administrativa processer"
---

> [!note] Partiell ingest
> ML är 7 749 rader. Denna entity fokuserar på tullrelevanta aspekter: import, skatteupplag, distansförsäljning, IOSS.

## Sammanfattning

Mervärdesskattelagen (2023:200) är Sveriges centrala momslagstiftning. Vid import av varor fungerar Tullverket som beskattningsmyndighet — moms tas ut vid importtillfället utöver tull och eventuell punktskatt. Standardsatsen är 25 %, med reducerade satser för livsmedel (12 %) och böcker/kultur (6 %).

Lagen trädde i kraft 1 juli 2023 och ersatte den äldre ML (1994:200). Den implementerar EU:s mervärdesskattedirektiv (2006/112/EG).

## Befogenheter

| Befogenhet | Kapitel | Myndighet |
|-----------|---------|-----------|
| Besluta om importmoms | 16 kap. 18-22 §§ | Tullverket |
| Fastställa beskattningsunderlag vid import | 8 kap. 24-27 §§ | Tullverket |
| Undanta varor i skatteupplag/tullager/frizon | 11 kap. 4-5 §§ | Skatteverket (godkännande) |
| Tillämpa IOSS-ordningen | 22 kap. | Leverantör/plattform |
| Särskild importdeklaration ≤150 euro | 23 kap. | Anmälare → Tullverket |
| Godkänna upplagshavare/skatteupplag | 11 kap. 10-11 §§ | Skatteverket |

## Straffbestämmelser

ML har inga egna straffbestämmelser. Skatteundandragande vid import hanteras via [[smugglingslagen]] och [[skattebrottslagen]].

## Kopplingar

| Typ | Mål | Kontext |
|-----|-----|---------|
| hanvisar-till | [[tullagen]] | Import via unionstullkodexen; tullskuld utlöser momsplikt |
| hanvisar-till | [[lagen-om-skatt-pa-energi]] | Skatteupplag för energiprodukter (11 kap.) |
| hanvisar-till | [[lagen-om-alkoholskatt]] | Skatteupplag för etylalkohol (11 kap.) |
| overlappar | [[lagen-om-frihet-fran-skatt-vid-import]] | Båda reglerar skattefrihet vid import |
| hanvisar-till | [[smugglingslagen]] | Otillåten införsel → importmoms |
| hanvisar-till | [[lagen-om-tullfrihet]] | Tullbefrielse påverkar momsbasen |
| kompletterar | [[mervardesskatteforordningen]] | Verkställighetsförordning |

## Nyckelbestämmelser

| Paragraf | Innehåll |
|---------|----------|
| 5 kap. 37 § | Import av varor = beskattningsbar transaktion |
| 6 kap. 66-68 §§ | Platsen för import (kopplat till var varan lämnar tullförfarande) |
| 7 kap. 13 § | Beskattningsgrundande händelse = tidpunkt för tullskuld |
| 8 kap. 24-27 §§ | Beskattningsunderlag = tullvärde + tull + punktskatt + bikostnader |
| 9 kap. | Skattesatser: 25 %, 12 %, 6 % |
| 11 kap. 2-5 §§ | Skatteupplag: 27 varugrupper med KN-nummer, undantag vid placering |
| 11 kap. 6-8 §§ | Utlösningsmekanism: moms tas ut vid uttag ur skatteupplag/tullager |
| 16 kap. 18-22 §§ | Betalningsskyldig vid import = den som bär tullskulden |
| 22 kap. 6-8 §§ | Elektroniska gränssnitt behandlas som leverantör |
| 22 kap. 15 § | IOSS: registrering för distansförsäljning ≤150 euro |
| 23 kap. | Förenklad importordning: anmälaren tar ut moms direkt |

## Praktisk tillämpning

> [!situation] Import av varor
> Vid importklarering beräknar Tullverket moms på: tullvärde + tull + eventuell punktskatt. Importören betalar momsen vid frigivning av varan. Standardsats 25 %, reducerad för livsmedel (12 %) och böcker (6 %).

> [!situation] Skatteupplag och tullager
> Varor placerade i skatteupplag, tullager eller frizon är undantagna från moms så länge de ligger kvar. Moms tas ut först vid uttag. Gäller 27 specifika varugrupper (metaller, spannmål, kemikalier m.m.) — definierade med KN-nummer i 11 kap. 3 §.

> [!situation] IOSS — distansförsäljning ≤150 euro
> E-handelsplattformar registrerar sig via IOSS och redovisar moms direkt. Köparen slipper betala importmoms vid leverans. Alternativt: 23 kap. förenklad ordning där postombudet/speditören tar ut momsen och redovisar månadsvis till Tullverket.

> [!situation] Diplomatisk momsfrihet
> Diplomater och internationella organisationer med immunitet/privilegier kan vara befriade från importmoms. Se [[lagen-om-immunitet-och-privilegier]] och [[lagen-om-frihet-fran-skatt-vid-import]].
