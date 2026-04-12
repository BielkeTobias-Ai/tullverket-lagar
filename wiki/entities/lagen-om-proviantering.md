---
title: Lag om proviantering av fartyg och luftfartyg
type: entity
entity_type: lag
source_type: lag
sfs: "1999:446"
short_name: Provianteringslagen
status: gällande
created: 2026-04-09
updated: 2026-04-09
befogenheter:
  - tillåta proviantering med obeskattade varor för förbrukning och försäljning ombord
  - bevilja och återkalla tillstånd för proviantering med alkohol, tobak och nikotinprodukter
  - utöva tillsyn över provianteringsverksamhet på fartyg och luftfartyg
  - bevilja dispens från vikt- och dräktighetsgränser vid särskilda skäl
  - besluta om undantag från begränsningar på specifika fartygslinjer (Skagerrak)
tillampningsomrade: >
  Reglerar proviantering — skattefri försäljning och förbrukning ombord — med obeskattade unionsvaror
  och icke-unionsvaror på fartyg och luftfartyg vid resa till utländsk ort. Tullverket beviljar
  tillstånd och utövar tillsyn.
straffskala: []
situationer:
  - proviantering-fartyg
  - proviantering-luftfartyg
  - obeskattad-forsaljning-ombord
  - tillstand-alkohol-tobak-ombord
  - granskning-fartygsverksamhet
  - skagerrak-fartygslinje
connections:
  - type: kompletterar
    target: "[[tullagen]]"
    context: "Provianteringslagen ger ett specifikt regelverk för skattefri hantering ombord som kompletterar tullagens allmänna regler om icke-unionsvaror"
  - type: hanvisar-till
    target: "[[tullforordningen]]"
    context: "Tullverkets tillsyns- och tillståndsuppdrag i provianteringslagen utövas inom ramen för tullorganisationens förordningsmässiga struktur"
  - type: kompletteras-av
    target: "[[forordningen-om-proviantering]]"
    context: "Verkställighetsförordning (SFS 1999:454) som bemyndigar Tullverket att meddela föreskrifter för provianteringslagens tillämpning"
  - type: overlappar
    target: "[[lagen-om-frihet-fran-skatt-vid-import]]"
    context: "Båda lagarna hanterar skattefrihet för varor — skattefrihetslagens resanderegler och provianteringslagens ombordregler gäller delvis samma varuslag (alkohol, tobak) men i olika sammanhang"
tags:
  - proviantering
  - fartyg
  - luftfartyg
  - skattefrihet
  - obeskattade-varor
  - tillstand
  - tullrätt
sources:
  - "[[lagen-om-proviantering-1999-446]]"
---

## Sammanfattning

Provianteringslagen (SFS 1999:446) reglerar under vilka förutsättningar **obeskattade varor** — varor som inte beskattats med svensk moms eller punktskatt — får användas som proviant på fartyg och luftfartyg vid resa till utländsk ort. Med proviantering avses varor avsedda för **förbrukning ombord** (mat, dryck, bränsle) eller **försäljning ombord** (tax-free-handel).

Lagen trädde i kraft den 1 januari 2000 och har senast ändrats 2023. Tullverket är tillståndsmyndighet och tillsynsmyndighet. Tillstånd krävs för proviantering med obeskattade alkoholdrycker, tobaksvaror och nikotinprodukter samt med icke-unionsvaror.

## Regler

### Vad får provianteras och vid vilka resor?

| Varutyp | Förbrukning ombord | Försäljning ombord | Krav |
|---------|-------------------|-------------------|------|
| Obeskattade unionsvaror | Resa till utländsk ort | Resa utanför EU:s skatteområde | — |
| Icke-unionsvaror (animaliska livsmedel) | Resa över fritt hav | Ej tillåtet | Importkontrollföreskrifter |
| Alla varutyper | Resa utanför EU:s tullområde | Resa utanför EU:s tullområde | — |

Mervärdesskatt: proviantering för momsens del styrs av mervärdesskattelagen (2023:200) 10 kap. 71 § 1–2.

### Begränsningar på specifika fartygslinjer

**Sverige–Norge och Sverige–Åland (5 §):**
Kiosk/butiksförsäljning ombord med obeskattade varor begränsas till: spritdrycker, vin, starköl, öl, tobaksvaror, parfymer, kosmetiska preparat, toalettmedel samt choklad- och konfektyrvaror.

**Skagerraklinjer (6 §):**
På linjer från norska gränsen–Lysekil (SE) mot Risör–svenska gränsen (NO):
- Obeskattad försäljning av sprit, vin och starköl är **förbjuden**
- Tobak: max 20 cigaretter **eller** 10 cigariller/cigarrer **eller** 50 g övrig tobak per passagerare

Tullverket kan bevilja undantag för linjer med åretrunttrafik och gods/fordonsfärjor (Strömstad–Lysekil mot Risör–Sandefjord).

### Tillståndskrav

Tillstånd krävs för proviantering med:
- Obeskattade **alkoholdrycker**
- **Tobaksvaror**
- **Nikotinprodukter** (e-vätskor och andra nikotinhaltiga produkter)
- **Icke-unionsvaror** (alla slag)

**Berättigade transportmedel:**

| Typ | Krav |
|-----|------|
| Luftfartyg | Högsta tillåtna startvikt >5 700 kg, destinerat utländsk flygplats |
| Fartyg | Bruttodräktighet ≥75, yrkesmässig trafik (ej fiskefartyg), ska anlöpa utländsk hamn |
| Statsfartyg/luftfartyg | Alltid berättigade, inga storlekskrav |

Tullverket kan bevilja dispens från storlekskraven vid särskilda skäl.

**Skälighetsregel:** Provianterad mängd får inte överstiga vad som är skäligt med hänsyn till resans art, antal passagerare, omsättningsbegränsningar och befintligt förråd.

### Tillsyn och kontroll

- Tullverket utövar tillsyn
- Tillståndshavare ska föra kontrollerbar bokföring
- Tullverket kan begära handlingar och tillträde till utrymmen
- Skatteförfarandelagens regler om handlingsgranskning (47 kap. 2–7 §§) gäller i tillämpliga delar

### Återkallelse av tillstånd

Tullverket får återkalla tillstånd vid:
1. Förutsättningarna för tillstånd upphör
2. Varorna används för annat ändamål än angett
3. Bokförings-/handlingsskyldigheten inte fullgörs
4. Tillståndshavaren inte samverkar vid revision

Återkallelse gäller omedelbart om inget annat beslutas.

## Kopplingar

| Typ | Entitet | Kontext |
|-----|---------|---------|
| Kompletterar | [[tullagen]] | Provianteringslagen ger specifikt regelverk för skattefri hantering ombord |
| Hänvisar till | [[tullforordningen]] | Tullverkets tillsyns- och tillståndsuppdrag utövas inom tullorganisationens struktur |
| Överlappar | [[lagen-om-frihet-fran-skatt-vid-import]] | Båda hanterar skattefrihet för alkohol/tobak — skattefrihetslagens resanderegler kontra provianteringslagens ombordregler |

## Nyckelbestämmelser

| Paragraf | Innehåll |
|----------|----------|
| 1 § | Lagens tillämpningsområde — proviantering med icke-unionsvaror och obeskattade unionsvaror |
| 2 § | Definitioner: obeskattade varor, unionsvaror, icke-unionsvaror, nikotinprodukter |
| 3 § | Provianteringsregler för resa till plats utanför EU:s skatteområde |
| 4 § | Provianteringsregler för resa till plats utanför EU:s tullområde |
| 5 § | Begränsning av varuslag på Sverige–Norge/Åland-linjer |
| 6 § | Striktare förbud på Skaggerraklinjer; dispens möjlig |
| 7 § | Tillståndskrav för alkohol, tobak, nikotinprodukter och icke-unionsvaror |
| 8 § | Krav på luftfartyg och fartyg för att få provianteras |
| 9 § | Skälighetsregeln — mängden ska anpassas till resan |
| 10 § | Tullverket beviljar tillstånd |
| 11 § | Tullverket utövar tillsyn |
| 14 § | Grunder för återkallelse av tillstånd |

## Praktisk tillämpning

> [!situation] Tax-free-handel på kryssningsfartyg
> Ett kryssningsfartyg med bruttodräktighet ≥75 i yrkesmässig trafik som anlöper utländsk hamn kan beviljas tillstånd (7–8 §§) för obeskattad försäljning ombord. Provianteringen måste vara skälig i förhållande till resans längd och passagerarantal (9 §).

> [!situation] Färja Sverige–Norge (Skagerrak)
> På korta Skaggerraklinjer (t.ex. Strömstad–Sandefjord) gäller 6 §: sprit, vin och starköl får inte säljas obeskattade; tobakförsäljning begränsad till 20 cigaretter/passagerare. Rederiet kan ansöka om undantag om det är en åretrunttrafiklinje med gods/fordonsfärja.

> [!situation] Charterflyg till Kanarieöarna
> Luftfartyg med startvikt >5 700 kg destinerat till utländsk flygplats kan provianteras (8 § 1). Obeskattade unionsvaror kan säljas ombord vid resa till plats utanför EU:s skatteområde (3 §). Tillstånd krävs för alkohol och tobak (7 §).

> [!situation] Tullverkets kontroll av tillståndshavare
> Tullverket kan begära att tillståndshavaren visar upp bokföring och ger tillträde till utrymmen (13 §). Om bokföringen inte är kontrollerbar, eller om varorna används för annat ändamål, kan tillståndet återkallas omedelbart (14 §).
