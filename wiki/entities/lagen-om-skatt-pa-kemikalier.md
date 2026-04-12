---
title: Lagen om skatt på kemikalier i viss elektronik
type: entity
entity_type: lag
source_type: lag
created: 2026-04-09
updated: 2026-04-09
sfs: "2016:1067"
short_name: Kemikalieskattelagen
status: gallande
tags:
  - skatt
  - kemikalier
  - elektronik
  - punktskatt
  - bromerade-flamskyddsmedel
  - miljöskatt
sources:
  - "[[lagen-om-skatt-pa-kemikalier-2016-1067]]"
befogenheter:
  - Fastställa skattepliktiga elektronikprodukter via KN-nummer
  - Beräkna och ta ut skatt baserat på nettovikt
  - Godkänna lagerhållare, registrerade mottagare och EU-handlare
  - Återkalla godkännanden
  - Bestämma skattebelopp årligen baserat på prisindex
  - Ge rabatt (50-95%) för produkter med lågt kemikalieinnehål
  - Besluta om återbetalning för utförda/exporterade varor
  - Bestämma betalningstid för skatt
tillampningsomrade: >
  Elektroniska konsumprodukter innehållande bromerade eller klorade flamskyddsmedel. 
  Produkter klassificeras via Kombinerade nomenklaturen (KN). Lagens regel gäller försäljning, 
  tillverkning och import av dessa produkter till Sverige och inom EU:s punktskattområde. 
  Skatt utgår per kilogram nettovikt, men högst 489 kronor per enskild vara.
straffskala: []
situationer:
  - import-elektronik-från-tredjeland
  - försäljning-elektronik-mellan-eu-länder
  - tillverkning-elektronik-i-sverige
  - distansförsäljning-elektronik
  - säljare-överstiger-100kkr-gräns
connections:
  - type: hanvisar-till
    target: "[[tullagen]]"
    context: "Import definieras via unionstullkodexen; Tullverket beslutar om skatt vid import/otillåten införsel"
  - type: hanvisar-till
    target: "[[ucc]]"
    context: "Import avses enligt artikel 201 i UCC; tullskuld enligt artikel 79.1 och 124.1"
  - type: hanvisar-till
    target: "[[skatteforfarandelagen]]"
    context: "Proceduren för skatteväxling, beslut och överklagande följer skatteförfarandelagen (2011:1244) i tillämpliga delar"
  - type: hanvisar-till
    target: "[[skattebrottslagen]]"
    context: "Skatteundandragande vid smuggling kan åtalas även under skattebrottslagen"
  - type: kompletterar
    target: "[[miljobalken]]"
    context: "Kemikalieskatten kompletterar miljöbalkens regler om farliga ämnen genom ekonomisk incitament"
  - type: overlappar
    target: "[[punktskatt]]"
    context: "Kemikalieskatten är en form av punktskatt på konsumentelektronik"
---

## Sammanfattning

Lagen om skatt på kemikalier i viss elektronik (kemikalieskattelagen) är en svensk punktskatt på elektroniska konsumprodukter som innehåller bromerade eller klorade flamskyddsmedel. Skatten utgår per kilogram nettovikt (11-160 kr/kg beroende på produktkategori) men är maximerad till 489 kronor per vara.

Lagens syfte är att motverka användningen av miljöfarliga bromerade flamskyddsmedel (BFR) och klorade flamskyddsmedel (CFR) i konsumentelektronik genom att göra sådana produkter ekonomiskt mindre attraktiva. Lagen implementerar EU:s miljöpolitik och hälsoskyddsmål.

Skatt tas ut vid flera tidpunkter: när godkänd lagerhållare säljer, när varor förs in till Sverige (import), när tillverkning sker i Sverige, och vid distansförsäljning. Skatten kan helt eller delvis avdrivas om produkten saknar höga halter kemikalier.

**Giltigs sedan:** 1 april 2017 (senare utvidgat 1 juli 2023 och 1 april 2026).

---

## Befogenheter

**Skatteverket** får:
- Godkänna lagerhållare, registrerade mottagare och registrerade EU-handlare för skattepliktiga varor
- Återkalla godkännanden
- Fastställa skattebelopp årligen baserat på prisindex (från 2024 och framåt)
- Besluta om skatt för icke-importörer
- Besluta om återbetalning för diplomater, väpnade styrkor och exporterade/förflyttade varor
- Bestämma betalningstid för skattebetalning
- Inhämta uppgifter för skatteväxling

**Tullverket** får:
- Besluta om skatt för import eller otillåten införsel av skattepliktiga varor
- Inhämta deklarationer och uppgifter om nettovikt
- Genomföra omprövning av tidigare skattebeslut när nettovikt kan verifieras

**Regeringen** får:
- Fastställa årliga skattebelopp före november månad varje år
- Meddela föreskrifter om undantag från diplomatierintygs-krav för väpnade styrkor

---

## Straffbestämmelser

Kemikalieskattelagen innehåller själv inte straffskalor. Straffhänvisningar till andra lagar kan gälla för:

- **Skatteundandragande:** Kan åtalas under [[skattebrottslagen]] (betalning av mindre skatt än skyldig)
- **Smuggling:** Kan åtalas under [[smugglingslagen]] vid otillåten införsel eller dolande av skattepliktiga varor
- **Felaktiga uppgifter:** Konsumenter kan belastas med tilläggsavgift på 500 kr per vara (2022:1774) vid felaktig uppgift om köpets art

Lagbrott handläggs enligt skatteförfarandelagen (2011:1244).

---

## Kopplingar

| Typ | Lag/koncept | Kontext |
|-----|-----------|---------|
| Hänvisar till | [[tullagen]] | Import definieras via unionstullkodexen (UCC); Tullverket beslutar om skatt vid import |
| Hänvisar till | [[ucc]] | Tekniska definitioner av import, otillåten införsel, tullskuld och unionsvara |
| Hänvisar till | [[skatteforfarandelagen]] | Procedurer för skatteväxling, överklagande, omprövning, information |
| Hänvisar till | [[skattebrottslagen]] | Straffhänvisning för skatteundandragande |
| Hänvisar till | [[smugglingslagen]] | Straffhänvisning för otillåten införsel eller dolande |
| Kompletterar | [[miljobalken]] | Skapar ekonomiska incitament för att undvika bromerade flamskyddsmedel |
| Överlappar | [[punktskatt]] | Kemikalieskatten är en särskild form av punktskatt |

---

## Nyckelbestämmelser

### Skattesubjekt (3 § & 3 a §)

**Skattepliktiga produkter identifieras via KN-nummer:**

| KN-nr | Produkttyp | Skattesats |
|-------|-----------|-----------|
| 8418 10, 8418 21-30, 8418 40 | Kylskåp, djupfrysare | 11 kr/kg, max 489 kr |
| 8422 11 | Diskmaskiner | 11 kr/kg, max 489 kr |
| 8450 11-19 | Tvättmaskiner | 11 kr/kg, max 489 kr |
| 8451 21 | Torktumlare | 11 kr/kg, max 489 kr |
| 8471 30, 8471 41-49 | Datorer, bärbar data | 160 kr/kg, max 489 kr |
| 8508 11 | Dammsugare | 160 kr/kg, max 489 kr |
| 8516 50, 8516 60 | Värmare, elspis | 160 kr/kg, max 489 kr |
| 8517 11-18, 8517 62 | Telefoner, nätverksutrustning | 160 kr/kg, max 489 kr |
| 8519 30, 8519 81-89 | Audioåtgångar | 160 kr/kg, max 489 kr |
| 8521 10, 8521 90 | TV-apparater | 160 kr/kg, max 489 kr |
| 8527 12-19, 8527 91-99 | Radioapparater | 160 kr/kg, max 489 kr |
| 8528 42-73 | Bildskärmar, mottagarutrustning | 160 kr/kg, max 489 kr |
| 9504 50 | Spelkonsoler | 160 kr/kg, max 489 kr |

**Årlig omräkning (3 a §):** Från 2024 och framåt räknas skattebeloppen om varje år enligt prisindex (jämförelsetal för allmänt prisläge juni månad).

### Avdragsrätt (4 §)

- **50 % avdrag** — om varan innehåller ingen brom- eller klorförening (>0,1 viktprocent)
- **95 % avdrag** — om varan innehåller ingen brom-, klor- eller fosforförening

*Bedömningen gäller endast föreningar i kretskort (exklusive komponenter) eller plastdelar >25 gram.*

### Skattskyldiga (8 §)

Skattskyldiga är:

1. **Godkänd lagerhållare** — när varan säljs till icke-godkänd eller levereras till försäljningsställe
2. **Registrerad mottagare** — från annat EU-land yrkesmässigt
3. **Registrerad EU-handlare** — bedriva eller förmedla distansförsäljning
4. **Distansförsäljare** — årlig försäljning >100 000 kr/år till Sverige
5. **Förmedlare av distansförsäljning** — samlad förmedling >100 000 kr/år
6. **Tillverkare** — yrkesmässigt i Sverige
7. **Importör från tredjeland** — yrkesmässigt förande in från land utanför EU

### Godkända aktörer (10-10 c §)

**Lagerhållare** — Kan:
- Tillverka, föra in, ta emot eller köpa skattepliktiga varor
- Lagra och säljer vidare (skattefritt mellan lagerhållare)
- Förmedla distansförsäljning från undantagna säljare

**Registrerad mottagare** — Kan:
- Ta emot varor från annat EU-land yrkesmässigt

**Registrerad EU-handlare** — Kan:
- Bedriva distansförsäljning över gränser
- Förmedla distansförsäljning från undantagna säljare

**Undantagssäljare** — Ingen godkänning krävs om årlig försäljning <100 000 kr.

Alla godkännanden kan återkallas (10 c §).

### Skattskyldighetens inträde (12 §)

Skatt inträder när:

1. **Godkänd lagerhållare** säljer till icke-godkänd, tar till försäljningsställe, eller använder för annat än försäljning
2. **Tillverkare** tillverkar en vara
3. **Registrerad mottagare, EU-handlare, distansföljare** för in varan till Sverige
4. **Importör vid otillåten införsel** — vid tidpunkten då tullskulden uppkommer eller skulle ha uppkommit

*Undantag:* Godkänd lagerhållare som äger varan vid övergång till fri omsättning vid import är inte skattskyldig för importstadiet.

### Konsument-regel (8 a §)

Om en konsument i Sverige köpt via distansförsäljning och felaktigt uppgett att köpet är yrkesmässigt, kan säljaren/förmedlaren slippa skattskyldighet **om** denne upplyst konsumenten om risken för tilläggsavgift. Då är konsumenten istället skattskyldig för:
- Skatten (enligt gällande sats när varan fördes in)
- Tilläggsavgift: **500 kronor per vara** (om inte uppenbart oskäligt)

### Undantag & återbetalning (13-14 b §)

**Ingen skatt för:**
- Varor som tidigare ägts av icke-lagerhållare i Sverige
- Varor tillverkade före 1 juli 2017
- Väpnade styrkor (USA, EU-länder, NATO) under särskilda villkor (intyg, faktura)
- Diplomater och internationella organisationer (på ansökan om återbetalning)
- Destruerade/avfallsåtervinnade/återanvända varor (godkänd lagerhållare)

**Återbetalning möjlig för:**
- Varor som flyttats till annat EU-land eller exporterats (ansökan inom 3 år, 3 månaders karantän innan)
- Diplomater, väpnade styrkor, internationella organisationer (på ansökan)

---

## Praktisk tillämpning — Vanliga situationer

### 1. Import av datorer från Kina till Sverige

**Situation:** Ett företag importerar 1 000 bärbara datorer (KN 8471 30) från Kina. Varorna innehåller bromerade flamskyddsmedel i kretskorten.

**Tillämpning:** 
- Importören blir skattskyldig vid övergång till fri omsättning
- Skatt utgår: 160 kr/kg × (nettovikt per dator) = max 489 kr/dator
- Tullverket beslutar om skatten, som betalas till Tullverket

**Möjlig rabatt:** Om plastdelar <25g eller brom <0,1% i kretskort → 50 eller 95 % avdrag.

### 2. Godkänd lagerhållare säljer TV-apparater

**Situation:** Lagerhållare A köper 500 TV-apparater (KN 8521) från lagerhållare B i Danmark (skattefritt mellan godkänd). Sedan säljer A de till en återförsäljare (ej godkänd).

**Tillämpning:**
- Lagerhållare A blir skattskyldig vid försäljningen till icke-godkänd
- Skatt utgår per TV enligt gällande sats
- Skatteverket beslutar

### 3. Distansförsäljning — konsument köper smartphone från Estland

**Situation:** En svensk konsument köper en smartphone (KN 8517) från en liten estnisk e-handlare genom webben. Konsumenten uppger felaktigt att det är ett köp för sitt företag. Estniska säljaren skickar varorna direkt till konsumenten.

**Tillämpning:**
- Estniska säljaren är registrerad EU-handlare eller undantagssäljare
- **Om säljaren inte lyste upp konsumenten om risken:** Säljaren blir skattskyldig
- **Om säljaren upplyste konsumenten om risken:** Konsumenten blir skattskyldig för skatt + 500 kr tilläggsavgift
- Skatteverket beslutar

### 4. Tillverkare av värmeelement i Sverige

**Situation:** Företag C tillverkar värmeelement (KN 8516 50) i Sverige som innehåller bromerade flamskyddsmedel. Det säljer till svenska distributörer.

**Tillämpning:**
- Vid tillverkningstillfället inträder skattskyldighet för fabrikanten
- Skatt utgår per enhet enligt gällande sats
- Skatteverket beslutar

### 5. Export av elektronik från Sverige

**Situation:** Godkänd lagerhållare exporterar 100 bärbara datorer till USA.

**Tillämpning:**
- **Ingen skatt** — exporterade varor är skattefria (14 §)
- Om skatt redan betalats kan återbetalning sökas (13 a §)

---

## Administrativa processer

### Godkännande som lagerhållare/mottagare/handlare

1. Ansökan till Skatteverket
2. Prövning av ekonomisk lämplighet
3. Godkännande eller avslag
4. Överklagning till förvaltningsdomstol möjlig

### Skattebeslut och överklagande

- **Tullverket** (import/otillåten införsel) — överklagande enligt tullagen
- **Skatteverket** (övrig skatt) — överklagning enligt skatteförfarandelagen
- **Förvaltningsdomstol** — första instans
- **Kammarrätt** — andra instans (prövningstillstånd krävs)

### Återbetalning

Konsument eller lagerhållare kan ansöka om återbetalning hos Skatteverket:
- Max 3 år efter kvartalets utgång
- Måste visa att skatten betalats och att undantaget inte redan använts
- Ansökan ska omfatta ett helt kalenderkvartal

---

## Viktiga definitioner

| Begrepp | Definition |
|---------|-----------|
| **Bromförening** | Kemisk förening innehållande grundämnet brom |
| **Klorförening** | Kemisk förening innehållande grundämnet klor |
| **Fosforförening** | Kemisk förening innehållande grundämnet fosfor |
| **Yrkesmässig aktivitet** | Aktivitet utförd av juridisk person eller fysisk person för icke-privata varor |
| **Konsument** | Köpare för vilken köpet inte är yrkesmässigt |
| **Godkänd lagerhållare** | Registrerad aktör godkänd av Skatteverket för skattepliktiga varor |
| **Distansförsäljning** | Försäljning där varor transporteras från annat EU-land utan att köpet är yrkesmässigt |
| **Undantagen säljare** | Säljare utan godkännande och försäljning <100 000 kr/år |
| **Import** | Övergång till fri omsättning enligt unionstullkodexen |
| **Unionstullkodex** | EU:s ramlag för tullförfaranden |

---

## Rättslig status

- **Ikraftträdande:** 1 april 2017
- **Status:** Gällande
- **Senaste ändring:** SFS 2026:34 (1 april 2026)
- **Språk:** Svenska
- **Applicerbar på:** Sverige och EU:s punktskattområde

Lagen hör hemma i området **punktskatter** och **miljörättsmaterial** och reglerar både det nationella och EU-interna varukretsloppet för miljöfarlig elektronik.
