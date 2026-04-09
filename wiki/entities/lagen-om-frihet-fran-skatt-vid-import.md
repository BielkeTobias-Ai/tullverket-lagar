---
title: Lag om frihet från skatt vid import
type: entity
entity_type: lag
sfs: "1994:1551"
short_name: Skattefrihetlagen
status: gällande
created: 2026-04-09
updated: 2026-04-09
befogenheter:
  - medge frihet från mervärdesskatt och punktskatt vid import från tredje land
  - medge skattefrihet för resandes varor inom fastställda kvoter och värdegränser
  - beräkna tull och skatt med schablonbelopp för icke-kommersiell import
  - godkänna institutioner (gallerier, museer) för skattefri import av konstverk
  - publicera gällande kronobelopp för skattefrihetsgränser i Tullverkets författningssamling
tillampningsomrade: >
  Frihet från mervärdesskatt och punktskatter (ej tull) vid import av varor från tredje land, inklusive
  resandes skattefria kvoter och schablonberäkning av skatt i icke-kommersiella fall.
  Gäller även vid införsel från EU-tullområde som ligger utanför EU:s skatteområde.
straffskala: []
situationer:
  - resande-import-tredjelanda
  - granskontroll-resande
  - skattefri-import-institutioner
  - schablonberakning-tull-skatt
  - aterinforselbefrielse
  - besattningsman-import
connections:
  - type: kompletterar
    target: "[[lagen-om-tullfrihet]]"
    context: "Skattefriheten speglar och följer tullfrihetsreglerna — om vara är tullfri är den i regel även skattefri vid import (2 kap. 2 §, 2 kap. 11 §)"
  - type: hanvisar-till
    target: "[[tullagen]]"
    context: "Uttryck och begrepp i lagen har samma innebörd som i tullagen (1 kap. 5 §)"
  - type: hanvisar-till
    target: "[[alkohollagen]]"
    context: "Åldersgräns 20 år för alkohol vid resandes import hänvisar till alkohollagen 4 kap. 4 § (3 kap. 3 §)"
  - type: hanvisar-till
    target: "[[tobaksskattelagen]]"
    context: "Definitioner av tobaksvaror hämtas från tobaksskattelagen (3 kap. 2 §)"
  - type: hanvisar-till
    target: "[[lagen-om-skatt-pa-energi]]"
    context: "Lagen ingår i det bredare skattefrihetsystemet vid import som samverkar med punktskattelagstiftningen"
  - type: overlappar
    target: "[[lagen-om-proviantering]]"
    context: "Båda lagarna reglerar skattefrihet vid import — provianteringslagen för fartygs-/luftfartygsbruk, skattefrihetlagen för övrig import"
  - type: overlappar
    target: "[[mervardesskattelagen]]"
    context: "Båda reglerar skattefrihet vid import — ML undantar, skattefrihetlagen specificerar kvoter"
tags:
  - skattefrihet
  - import
  - resande
  - punktskatt
  - mervärdesskatt
  - tullrätt
  - schablonberäkning
sources:
  - "[[lagen-om-frihet-fran-skatt-vid-import-1994-1551]]"
---

## Sammanfattning

Lagen om frihet från skatt vid import (SFS 1994:1551), här kallad skattefrihetlagen, reglerar när **annan skatt än tull** — dvs. mervärdesskatt och punktskatter — inte ska tas ut vid import av varor från tredje land. Lagen trädde i kraft vid Sveriges EU-inträde 1995 och har uppdaterats löpande, senast 2024.

Den centrala principen är att skattefriheten **följer tullfrihetens logik**: en vara som är befriad från tull enligt EU:s tullbefrielsesystem eller [[lagen-om-tullfrihet]] är som regel även befriad från mervärdesskatt och punktskatter vid import. Lagen genomför fyra EU-direktiv om skattefrihet vid import och uppehåller sig särskilt vid resandes rättigheter.

## Regler

### Generell skattefrihet (2 kap.)

Skattefrihet medges när en vara övergår till fri omsättning under omständigheter som — för en tullpliktig vara — hade medfört tullbefrielse. Skattefriheten speglar alltså [[lagen-om-tullfrihet]] och EG-förordning 1186/2009.

**Skattefrihet medges inte** för: kapitalvaror vid verksamhetsöverföring, undervisningsmateriel utom specifika fall, skattemärken, proviant för järnvägståg, alkohol/tobak i privatpersonsförsändelser, eller försändelser av ringa värde.

**Specifika skattefria kategorier:**
- Återinförda unionsvaror utan bearbetning (kräver tullbefrielse enligt UCC art. 203–205)
- Fiskefartygs egna fångster från unionsbasserade fartyg
- FN-framställt undervisnings- och kulturmateriel
- Konstverk och samlarföremål till av Tullverket godkända institutioner
- Officiella publikationer och valbroschyrer

### Resandes skattefrihet (3 kap.)

Resande från tredje land medges skattefrihet för varor i personligt bagage vid icke-kommersiell import.

**Kvoter (flyg- och sjöresenärer):**

| Vara | Kvot |
|------|------|
| Cigaretter | 200 st |
| Cigariller | 100 st |
| Cigarrer | 50 st |
| Röktobak/övrig tobak | 250 g |
| Spritdryck (>22 vol%) | 1 liter |
| Starkvin (>15–22 vol%) | 2 liter |
| Vin | 4 liter |
| Starköl | 16 liter |

**Värdegränser:**
- Flyg- och sjöresenärer: 430 euro (ca 4 800–5 000 kr, indexeras årligen)
- Övriga resenärer (landgräns): 300 euro

**Besättningsmän:** Reducerade kvoter (100 cigaretter eller 20 cigarrer/cigariller eller 100 g tobak). Undantag gäller vid avslutad tjänst, semester ≥15 dagar, eller bosatt i Sverige med ≥15 dagars utlandsvistelse.

**Åldersgränser:**
- Sprit, vin, starköl: minst 20 år ([[alkohollagen]] 4 kap. 4 §)
- Tobak och e-cigaretter: minst 18 år

**E-vätskor:** Likställs med cigaretter (0,1 ml = 1 cigarett; 1 g nikotinprodukt = 1 cigarett).

### Schablonberäkning av tull och skatt (4 kap.)

För icke-kommersiell import under beloppsgräns för schablonberäkning kan tull och skatt tas ut med fasta schablonbelopp (senast uppdaterade genom SFS 2024:494):

| Vara | Tull | Skatt |
|------|------|-------|
| Spritdryck | 4 kr/liter | 267 kr/liter |
| Starkvin | 2 kr/liter | 92 kr/liter |
| Vin | 1 kr/liter | 41 kr/liter |
| Starköl | 3 kr/liter | 23 kr/liter |
| Cigaretter | 34 öre/st | 280 öre/st |
| Snus | 104 kr/kg | 855 kr/kg |
| Högkonc. e-vätskor | 320 kr/liter | 6 240 kr/liter |

## Kopplingar

| Typ | Entitet | Kontext |
|-----|---------|---------|
| Kompletterar | [[lagen-om-tullfrihet]] | Skattefriheten speglar tullfrihetsreglerna — 2 kap. 2 § och 11 § |
| Hänvisar till | [[tullagen]] | Begrepp och uttryck har samma innebörd som i tullagen — 1 kap. 5 § |
| Hänvisar till | [[alkohollagen]] | Åldersgräns 20 år för alkoholinförsel — 3 kap. 3 § |
| Hänvisar till | [[tobaksskattelagen]] | Definitioner av tobaksvaror — 3 kap. 2 § |

## Nyckelbestämmelser

| Paragraf | Innehåll |
|----------|----------|
| 1 kap. 1 § | Lagens tillämpningsområde — frihet från skatt (ej tull) vid import |
| 1 kap. 3 § | Skattefriheten gäller även vid import från EU-tullområde utanför EU:s skatteområde (t.ex. Åland) |
| 1 kap. 5 § | Uttryck har samma innebörd som i tullagen (2016:253) |
| 2 kap. 2 § | Huvudregeln — skattefrihet följer tullfrihetsreglerna |
| 2 kap. 3 § | Undantag — vad som inte ger rätt till skattefrihet |
| 2 kap. 10 § | Anmälningsskyldighet när förutsättningar för skattefrihet upphör |
| 3 kap. 1 § | Resandeimport — skattefrihet för icke-kommersiellt bagage |
| 3 kap. 4 § | Kvoter för tobak och alkohol |
| 3 kap. 5 § | Värdegränser: 430 euro (flyg/sjö) resp. 300 euro (land) |
| 3 kap. 7 § | Reducerade kvoter för besättningsmän |
| 3 kap. 10 § | E-vätskor likställs med cigaretter |
| 4 kap. 3 § | Schablonbelopp för tull och skatt |

## Praktisk tillämpning

> [!situation] Resande med varor vid flygplats/hamn
> En resande som anländer från USA med alkohol och tobak kontrolleras mot kvoterna i 3 kap. 4 §. Värdegränsen (430 euro) kontrolleras separat. Tullverket kan använda schablonbelopp (4 kap. 3 §) för varor som överstiger kvoten men inte är kommersiella. Minimiålder kontrolleras: 20 år för alkohol, 18 år för tobak.

> [!situation] Besättningsman på kryssningsfartyg
> Besättningsman som reser i tjänst medges endast personligt bagage och max 100 cigaretter (3 kap. 7 §). Undantag gäller om semestern är ≥15 dagar eller om tjänsten avslutas.

> [!situation] Museum importerar konstverk
> Ett museum kan få Tullverkets godkännande och därmed importera konstverk skattefritt (2 kap. 8 §). Förutsättning: verket är inte avsett för försäljning.

> [!situation] Import från Åland
> Varor som förs in från Åland (inom EU:s tullområde men utanför EU:s skatteområde) behandlas som om de kom från tredje land vad gäller skattefrihet — 1 kap. 3 § tillämpas.
