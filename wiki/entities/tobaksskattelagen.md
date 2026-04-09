---
title: Tobaksskattelagen
type: entity
entity_type: lag
sfs: "2022:155"
short_name: Tobaksskattelagen
status: gallande
created: 2026-04-09
updated: 2026-04-09
befogenheter: []
tillampningsomrade: >
  Reglerar punktbeskattning av tobaksvaror (cigaretter, cigarrer, cigariller, röktobak, snus, tuggtobak, övrig tobak) i Sverige. Genomför EU:s tobaksskattedirektiv 2011/64/EU och punktskattedirektivet (EU) 2020/262. Skattskyldighet vid import kopplas till tullskuldens uppkomst enligt unionstullkodexen.
straffskala:
  - brott: tillhandahållande av cigaretter utan föreskriven kontrollmärkning
    straff: "böter eller fängelse i högst 6 månader"
  - brott: skattebrott avseende tobaksskatt
    straff: "se skattebrottslagen (1971:69)"
situationer:
  - import-tobak-tredjeländer
  - smuggling-tobak-punktskattebrott
  - distansförsäljning-tobak-EU
  - kontrollmärkning-cigaretter
  - otillåten-införsel-tobak
connections:
  - type: overlappar
    target: "[[lagen-om-skatt-pa-nikotinhaltiga-produkter]]"
    context: "Båda beskattar nikotinprodukter — tobaksskattelagen för tobaksvaror enligt KN-klassificering, nikotinskattelagen för e-vätskor och oralt/nasalt nikotinbruk. Samma administrativa ram (lagerhållare, EU-regler), olika varusortering. Undantagen i 5 § tobaksskattelagen hänvisar till att produkter redan skattepliktiga under nikotinskattelagen är undantagna."
  - type: hanvisar-till
    target: "[[tullagen]]"
    context: "Tullagstiftningsbegreppet används; skattskyldighet vid import kopplas till tullskuld enligt UCC och tullagen"
  - type: hanvisar-till
    target: "[[tullbefogenhetslagen]]"
    context: "9 kap. 24 §: beskattade varor omhändertagna av Tullverket enligt tullbefogenhetslagen 5 kap. 16 § ska beskattas"
  - type: overlappar
    target: "[[smugglingslagen]]"
    context: "Smuggling av tobak kan parallellt ge skattskyldighet under tobaksskattelagen och straffansvar under smugglingslagen"
  - type: kompletterar
    target: "[[forordningen-om-tobaksskatt]]"
    context: "Förordningen (2022:182) är verkställighetsförordning — reglerar administrativa förfaranden, bemyndiganden och dokumenthantering"
  - type: overlappar
    target: "[[lagen-om-alkoholskatt]]"
    context: "Båda är punktskattelagar med liknande uppskovsförfarande och importbeskattning kopplad till tullskuld"
tags:
  - lag
  - punktskatt
  - tobak
  - skattskyldighet
  - import
sources:
  - "[[tobaksskattelagen-2022-155]]"
---

# Tobaksskattelagen (2022:155)

## Sammanfattning

Tobaksskattelagen reglerar punktbeskattning av tobaksvaror och genomför EU:s tobaksskatte- och punktskattedirektiv. Lagen täcker hela kedjan från tillverkning via uppskovsförfarande till import, export och distansförsäljning. Vid import är skattskyldigheten direkt kopplad till tullskuldens uppkomst enligt unionstullkodexen — vilket gör lagen nära sammankopplad med Tullverkets arbete vid yttre gräns. Kontrollmärkning av cigaretter är obligatorisk och kontrolleras vid gränsen.

## Befogenheter

Lagen ger inga direkta befogenheter till Tullverket utöver vad som följer av anknytningen till tulllagstiftningen. Skattemyndighet är Skatteverket (beskattningsmyndigheten). Tullverket är dock involverat i:

- Mottagande av administrativa referenskoder vid export av tobaksvaror under uppskovsförfarande (5 kap. 7 §)
- Utfärdande av intyg om att varor lämnat EU (5 kap. 11 §)
- Omhändertagande av beskattade tobaksvaror (tullbefogenhetslagen 5 kap. 16 §, vars effekt regleras i 9 kap. 24 §)

## Straffbestämmelser

| Brott | Straff |
|-------|--------|
| Tillhandahållande av cigaretter utan kontrollmärkning (2 kap. 21 §) | Böter eller fängelse i högst 6 månader |
| Skattebrott (undanhållande av tobaksskatt) | Skattebrottslagen (1971:69) |

## Kopplingar

| Typ | Lag | Kontext |
|-----|-----|---------|
| hanvisar-till | [[tullagen]] | Import definieras via UCC art. 201; tullskuldens uppkomst utlöser skattskyldighet |
| hanvisar-till | [[tullbefogenhetslagen]] | 9 kap. 24 §: omhändertagna tobaksvaror beskattas |
| overlappar | [[smugglingslagen]] | Tobakssmuggling ger parallellt skattskyldighet och straffansvar |
| kompletterar | [[forordningen-om-tobaksskatt]] | Verkställighetsförordning (2022:182) — administrativa förfaranden, bemyndiganden, dokumenthantering |

## Nyckelbestämmelser

| Paragraf | Innehåll |
|----------|----------|
| 1 kap. 7–8 §§ | Definitioner av import och otillåten införsel (kopplade till UCC) |
| 2 kap. 2 § | Skattebelopp för cigaretter: 2 kr 1 öre/st + 1 % av detaljhandelspris |
| 2 kap. 21 § | Kontrollmärkningskrav; brott: böter eller fängelse i högst 6 mån |
| 9 kap. 13 § | Skattskyldighet vid import: deklaranten eller person enl. UCC art. 77.3 |
| 9 kap. 14 § | Skattskyldigheten inträder när tullskulden uppkommer |
| 9 kap. 24 § | Tobaksvaror omhändertagna av Tullverket ska beskattas |

## Praktisk tillämpning

- **Import av tobak från tredjeland:** Tullverket hanterar tullklarering; tobaksskatten inträder parallellt med tullskulden och deklareras till Skatteverket
- **Smuggling av tobak:** Otillåten införsel utlöser skattskyldighet för alla inblandade; parallellt gäller smugglingslagen
- **Kontrollmärkning vid gränskontroll:** Tullpersonal kan kontrollera att cigaretter bär korrekt kontrollmärkning; avsaknad = brott (böter/fängelse upp till 6 mån)
- **Export under uppskovsförfarande:** Exportören lämnar administrativ referenskod till Tullverket; Tullverket intygar att varorna lämnat EU

> [!situation] Typisk situation
> Vid beslag av odeklarerade cigaretter vid yttre gräns: [[smugglingslagen]] för smugglingsbrottet + [[tobaksskattelagen]] för skatteskulden + [[tullbefogenhetslagen]] för befogenheterna.
