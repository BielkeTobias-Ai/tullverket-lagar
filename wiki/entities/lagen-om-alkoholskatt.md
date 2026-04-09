---
title: Lagen om alkoholskatt
type: entity
entity_type: lag
created: 2026-04-09
updated: 2026-04-09
sfs: "2022:156"
short_name: Alkoholskattelagen
status: gallande
tags:
  - skatt
  - alkoholskatt
  - punktskatt
  - uppskov
  - import
sources:
  - "[[lagen-om-alkoholskatt-2022-156]]"
befogenheter:
  - beskatta alkoholvaror vid import
  - besluta om skattskyldighet vid otillaten inforsel
  - godkanna upplagshavare och skatteupplag
  - godkanna registrerade avsandare och varumottagare
  - krava sakerhet for uppskovsforfarande
tillampningsomrade: >
  Beskattning av alkoholvaror (ol, vin, andra jasta drycker,
  mellanklassprodukter, etylalkohol) vid import, tillverkning,
  lagring och handel i Sverige. Genomfor EU:s punktskattedirektiv.
straffskala: []
situationer:
  - import-alkohol
  - tullager-alkohol
  - uppskov-alkohol
  - resandeinforsel-alkohol
  - distansforrsaljning-alkohol
  - oegentlighet-punktskatt
connections:
  - type: kompletterar
    target: "[[alkohollagen]]"
    context: "Alkoholskattelagen reglerar beskattningen av alkohol; alkohollagen reglerar handeln och tillstanden."
  - type: hanvisar-till
    target: "[[tullagen]]"
    context: "13 kap. 3 ss: For skatt vid import galler tullagen. Tullverket beslutar och indriver skatten."
  - type: overlappar
    target: "[[smugglingslagen]]"
    context: "Otillaten inforsel av alkoholvaror beskattas enligt 9 kap. 13 ss och straffas enligt smugglingslagen."
  - type: hanvisar-till
    target: "[[tullbefogenhetslagen]]"
    context: "12 kap. 8 ss: Aterbetalning av skatt om Tullverket omhandertagit och inte lamnat ut varorna (5 kap. 24 ss tullbefogenhetslagen)."
  - type: hanvisar-till
    target: "[[lagen-om-frihet-fran-skatt-vid-import]]"
    context: "Undantag fran skatteplikt vid viss import kan folja av lagen om frihet fran skatt vid import."
  - type: overlappar
    target: "[[lagen-om-skatt-pa-energi]]"
    context: "Bada ar punktskattelagar med parallellt uppskovsforfarande, sakerhetskrav och registrerade aktorer."
  - type: overlappar
    target: "[[tobaksskattelagen]]"
    context: "Bada ar punktskattelagar (SFS 2022:155 och 2022:156) med identisk struktur for uppskov, distansforrsaljning och import."
---

# Lagen om alkoholskatt (2022:156)

## Sammanfattning

Alkoholskattelagen reglerar **beskattningen av alkoholvaror** i Sverige. Lagen genomfor EU:s punktskattedirektiv (2020/262) och harmoniseringsdirektiv for alkoholskatt (92/83/EEG, 92/84/EEG). Den erstatte den aldre lagen (1994:1564) om alkoholskatt den 13 februari 2023.

For tullverksamheten ar lagen central pa tre satt:
1. **Import**: Tullverket beslutar om och indriver alkoholskatt vid import och otillaten inforsel (13 kap. 3 ss)
2. **Uppskovsforfarande**: Importerade varor kan avsandas under uppskov fran importplatsen, vilket skjuter upp skattskyldigheten
3. **Dokumentkontroll**: Tullverket tar emot uppgifter om punktskattenummer och administrativ referenskod vid import under uppskov

## Befogenheter

Lagen ger **Tullverket** foljande roller:

| Befogenhet | Paragraf | Beskrivning |
|------------|----------|-------------|
| Besluta om alkoholskatt vid import | 13 kap. 3 ss | Tullverket beslutar om och uppbar skatt for importskattskyldig (9 kap. 13 ss) |
| Ta emot importuppgifter for uppskov | 4 kap. 8 ss | Deklaranten ska lamna punktskattenummer och uppskovsbevis till Tullverket |
| Intyga export | 5 kap. 11 ss | Tullverket lamnar intyg till Skatteverket om att varor lamnat EU |
| Intyga hamnande till extern transitering | 5 kap. 11 ss 2 st | Tullverket lamnar uppgifter om att varor hanforts till extern transitering |

**Skatteverket** beslutar om alla ovriga skattskyldigheter (upplagshavare, varumottagare, distansforrsaljning, oegentligheter m.m.).

## Straffbestammelser

Lagen saknar egna straffbestammelser. Vid otillaten inforsel av alkoholvaror tillampas [[smugglingslagen]]. For skattebrott (undandragande av punktskatt) tillampas [[skattebrottslagen]].

## Kopplingar

### Kompletterar

| Lag | Kontext |
|-----|---------|
| [[alkohollagen]] | Alkoholskattelagen reglerar beskattningen; alkohollagen reglerar handeln och tillstanden. |

### Overlappar med

| Lag | Kontext |
|-----|---------|
| [[smugglingslagen]] | Otillaten inforsel av alkohol beskattas enligt 9 kap. 13 ss och straffas enligt smugglingslagen. |
| [[lagen-om-skatt-pa-energi]] | Parallella punktskattelagar med identiskt uppskovsforfarande. |
| [[tobaksskattelagen]] | Parallella punktskattelagar (SFS 2022:155 och 2022:156) med identisk struktur. |

### Hanvisar till

| Lag | Kontext |
|-----|---------|
| [[tullagen]] | 13 kap. 3 ss: Tullagen galler for skatt som betalas till Tullverket vid import. |
| [[tullbefogenhetslagen]] | 12 kap. 8 ss: Aterbetalning om Tullverket omhandertagit varor (5 kap. 24 ss). |
| [[lagen-om-frihet-fran-skatt-vid-import]] | Undantag fran skatteplikt vid viss import. |

## Nyckelbestammelser

### Import och skattskyldighet (9 kap. 13-15 ssss)

**Vem ar skattskyldig vid import?** Deklaranten eller annan person enligt artikel 77.3 i unionstullkodexen. Vid otillaten inforsel aven den som ar involverad.

**Nar intrader skattskyldigheten?** Vid den tidpunkt da tullskuld uppkommer i Sverige, eller skulle ha uppkommit om varan hade varit belagd med tull (9 kap. 14 ss).

**Undantag**: Skattskyldighet vid import galler *inte* om varorna omedelbart avsands under uppskovsforfarandet av en registrerad avsandare (9 kap. 15 ss). Detta ar den centrala mekanismen for att skjuta upp skatten vid import.

### Uppskovsforfarandet (3-5 kap.)

Uppskovsforfarandet ar karnmekanismen for att flytta alkoholvaror inom EU utan att skatten intrader. Systemet bygger pa:

- **Godkanda aktorer**: Upplagshavare (3 kap. 2 ss), registrerade varumottagare (3 kap. 10 ss), registrerade avsandare (3 kap. 17 ss)
- **Skatteupplag**: Fysisk plats godkand av Skatteverket for lagring under uppskov (3 kap. 3 ss)
- **Sakerhet**: Upplagshavare staller sakerhet bade for flyttning (3 kap. 6 ss) och lagring (3 kap. 8 ss — minst 10 % av skatten pa lagrade varor)
- **Dokumentation**: Elektroniskt administrativt dokument via EMCS (5 kap. 4 ss) med administrativ referenskod som ska medfolja varorna

> [!situation] Typisk situation
> Alkoholvaror importeras till Sverige. Vid tullklarering lamnar deklaranten den registrerade avsandarens punktskattenummer och mottagarens punktskattenummer till Tullverket (4 kap. 8 ss). Varorna overgar till fri omsattning men avsands omedelbart under uppskovsforfarandet — skattskyldigheten intrader da *inte* (9 kap. 15 ss). Skatten intrader forst nar varorna tas ut fran skatteupplaget for konsumtion.

### Ytterligare krav vid import (4 kap. 8 ss)

Vid flyttning under uppskov fran importplats ska deklaranten eller annan involverad person lamna till **Tullverket**:
1. Registrerad avsandares punktskattenummer
2. Mottagarens punktskattenummer
3. Bevis pa att varorna ska avsandas under uppskov

Undantag: Galler inte om importplatsen ar ett godkant skatteupplag.

### Personlig inforsel — indikativa mangder (2 kap. 10-11 ssss)

| Varuslag | Indikativ mangd |
|----------|-----------------|
| Ol | 110 liter |
| Vin och andra jasta drycker | 90 liter (varav max 60 l mousserande) |
| Mellanklassprodukter | 20 liter |
| Etylalkohol | 10 liter |

Over dessa mangder presumeras varorna inte vara for personligt bruk — bevisborda vands till den resande (2 kap. 11 ss). Se aven [[alkohollagen]] 4 kap. 4 ss for villkoren for laglig inforsel.

### Tullverkets beslutanderatt (13 kap. 3 ss)

Tullverket beslutar om alkoholskatt for den som ar skattskyldig vid **import** eller **otillaten inforsel** (9 kap. 13 ss). Skatten betalas till Tullverket och for denna skatt galler [[tullagen]].

## Praktisk tillampning

### Import av alkohol till Sverige

1. **Med uppskov**: Deklaranten lamnar punktskattenummer till Tullverket (4 kap. 8 ss). Varorna overgar till fri omsattning men skatten skjuts upp. Registrerad avsandare avsander under uppskov till skatteupplag. Skatten intrader forst vid uttag fran upplaaget.

2. **Utan uppskov**: Skattskyldigheten intrader vid tidpunkten for tullskuldens uppkomst (9 kap. 14 ss). Tullverket beslutar om och indriver skatten (13 kap. 3 ss).

3. **Otillaten inforsel**: Deklaranten och involverade personer ar skattskyldiga (9 kap. 13 ss). Tullverket beslutar om skatten. Straffansvar foljer av [[smugglingslagen]].

### Resandeinforsel

Tulltjanstemannen bedomer forst om inforseln ar laglig enligt [[alkohollagen]] 4 kap. 4 ss (alder, eget forvarv, personlig transport, personligt bruk). Om alkoholskattefragor uppstar — t.ex. mangden overstiger indikativa granser (2 kap. 11 ss) — overvags skattskyldighet. Mangderna ar *indikativa*, inte absoluta — den resande kan visa att varorna ar for personligt bruk aven vid hogre mangder.

### Uppskovsforfarande vid lagerverksamhet

Upplagshavare med godkant skatteupplag kan lagra alkoholvaror under uppskov. Krav:
- Lagerbokforing (3 kap. 4 ss)
- Sakerhet for lagring — minst 10 % av skatten pa lagrade varor (3 kap. 8 ss)
- Sakerhet for flyttning — genomsnittlig skatt per dygn (3 kap. 6 ss)
- Regelbunden inventering

### Aterbetalning vid omhandertagande

Om Tullverket omhandertar alkoholvaror enligt [[tullbefogenhetslagen]] 5 kap. 16 ss och darefter beslutar att inte lamna ut dem (5 kap. 24 ss), ska Skatteverket aterbetalsa redan erlagd skatt (12 kap. 8 ss).
