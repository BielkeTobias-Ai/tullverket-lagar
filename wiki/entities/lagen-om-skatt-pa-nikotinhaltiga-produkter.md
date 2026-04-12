---
title: Lagen om skatt på vissa nikotinhaltiga produkter
type: entity
entity_type: lag
source_type: lag
sfs: "2018:696"
short_name: Nikotinskattelagen
status: gallande
created: 2026-04-09
updated: 2026-04-09
befogenheter:
  - Skatteverket administrerar beskattning av nikotinhaltiga produkter
  - Tullverket beslutar skatt vid import och otillåten införsel
  - Tullverket omhändertar varor och kan fastställa skattskuld vid gränskontroll
tillampningsomrade: >
  Reglerar punktbeskattning av e-vätskor och andra nikotinhaltiga produkter för oralt/nasalt bruk. Gäller vid tillverkning, lagerhållning, import från tredjeland, införsel från andra EU-länder och distansförsäljning. Tillämpas ej på tobaksvaror klassificerade enligt KN-nomenklaturen (dessa faller under tobaksskattelagen) eller på narkotikaklassificerade respektive hälsofarliga produkter.
straffskala:
  - brott: underrapportering av skattskuld
    straff: "skattebrottslagen (1971:69)"
  - brott: otillåten införsel
    straff: "skatt tas ut hos Tullverket enligt tullagen"
situationer:
  - import-e-vätskor-tredjeländer
  - distansförsäljning-nikotinprodukter-EU
  - lagerhollare-godkannande-nikotinprodukter
  - otillåten-införsel-nikotinprodukter
  - beslag-nikotinvaror-granskontroll
  - destruktion-nikotinprodukter-skatteavdrag
connections:
  - type: overlappar
    target: "[[tobaksskattelagen]]"
    context: "Båda beskattar nikotinprodukter men olika varugrupper — nikotinskattelagen omfattar e-vätskor och annat oralt/nasalt nikotinbruk, tobaksskattelagen omfattar tobaksvaror enligt KN-klassificering. Samma administrativa ram men separata skattesatser."
  - type: overlappar
    target: "[[lagen-om-tobak-och-liknande-produkter]]"
    context: "Nikotinskattelagen är rent skatterättslig. Tobakslagen (2018:2088) är produktregulerande (märkning, försäljning, tillståndsplikt). E-cigarette-reglerna överlappar båda — de är både skattepliktiga enligt nikotinskattelagen och föremål för produktkrav enligt tobakslagen."
  - type: hanvisar-till
    target: "[[tullagen]]"
    context: "Importdefinitionen bygger på UCC (unionstullkodexen). Tullskuldens uppkomst enligt artikel 201 UCC utlöser skattskyldighet enligt nikotinskattelagen. Tullverket beslutar skatt vid import och otillåten införsel; skatten betalas till Tullverket enligt tullagen (2016:253)."
  - type: hanvisar-till
    target: "[[narkotikastrafflagen]]"
    context: "Produkter klassificerade som narkotika enligt narkotikastrafflagen (1968:64) är undantagna från nikotinskatten (5 § 1)."
  - type: hanvisar-till
    target: "[[lagen-om-forbud-mot-vissa-halsofarliga-varor]]"
    context: "Produkter klassificerade som hälsofarliga enligt denna lag (1999:42) är undantagna från nikotinskatten (5 § 1). E-vätskor klassificerade som akut giftig (farokategori 1–3) är också undantagna, utom högkoncentrerade e-vätskor."
  - type: hanvisar-till
    target: "[[skatteforfarandelagen]]"
    context: "Generell administrativ ramen för skattebeslut, omprövning och överklagande — utom för import, där tullagen (2016:253) gäller istället."
tags:
  - lag
  - punktskatt
  - nikotinskatt
  - e-vätskor
  - skattskyldighet
  - import
  - lagerhållare
sources:
  - "[[lagen-om-skatt-pa-nikotinhaltiga-produkter-2018-696]]"
---

# Lagen om skatt på vissa nikotinhaltiga produkter (2018:696)

## Sammanfattning

Nikotinskattelagen är ett komplement till [[tobaksskattelagen]] som beskattar **e-vätskor och andra nikotinhaltiga produkter för oralt/nasalt bruk** — men **inte** tobaksvaror enligt KN-klassificering. Skattepolitiken är förenad med [[tobaksskattelagen]] genom EU:s punktskattedirektiv, men nikotinskattelagen är senare (2018) och täcker den snabbt växande e-cigarettsektorn.

Administrationen delas mellan **Skatteverket** (lagerhållare, distansförsäljning, återbetalningar) och **Tullverket** (import, otillåten införsel, gränskontroller). Lagerhållarens system möjliggör skattefri lagring och internationell handel under uppskov, liknande [[tobaksskattelagen]].

## Befogenheter

| Myndighet | Befogenhet |
|-----------|-----------|
| **Skatteverket** | Administrerar beskattning av lagerhållare, tillverkare, distansförsäljare; godkänner lagerhållare; gör skattefrihetsögöranden för destruktion |
| **Tullverket** | Beslutar skatt vid import och otillåten införsel; omhändertar varor vid gränskontroll; fastställer skattskuld för deklaranten och andra inblandade vid smuggling |
| **Kommun** | (Via tobakslagen) beviljar försäljningstillstånd för detaljhandel (e-cigarette-försäljning) |

## Straffbestämmelser

Ingen explicit straffskala i nikotinskattelagen själv. Straff för skattebrott framgår istället av:

| Brott | Rättslig grund |
|-------|---|
| Underhållande av skatt (skattebrott) | [[skattebrottslagen]] (1971:69) |
| Otillåten införsel med måssätt att undgå skatt | Deklaranten/inblandad är skattskyldig enligt 7 §; skatten kan tas ut med påförande på grund av otillåten importöverträdelse |

**Notering:** Kontrollmärkning av cigaretter (under [[tobaksskattelagen]]) ger straffansvar; nikotinskattelagen har inga motsvarande märkningskrav för e-vätskor.

## Nyckelbestämmelser

### Varor och skattesatser (1–4 a §§)

| Varukategori | Skattesats | Grund |
|--------------|-----------|-------|
| **E-vätskor** (innehål nikotin) | 2 020 kr/liter | 3 § 1 st |
| **Högkoncentrerade e-vätskor** (15–20 mg/ml nikotin) | 4 040 kr/liter | 3 § 2 st |
| **Andra nikotinhaltiga produkter** (oralt/nasalt bruk, ej tobak) | 202 kr/kilogram | 4 § |
| **Årsvis justering** (från 2025) | Inflationsindex | 4 a § |

### Undantag från skatt (5 §)

Skatt tas **inte** ut för:
1. Produkter klassificerade som narkotika eller hälsofarliga varor
2. Läkemedel och medicintekniska produkter enligt läkemedelslagen eller förordning (EU) 2017/745
3. **Produkter redan skattepliktiga enligt [[tobaksskattelagen]]** ← detta är den kritiska gränsdragningen
4. Produkter klassificerade som akut giftig (farokategori 1–3) vid kemikaliemarkering, **utom** högkoncentrerade e-vätskor

### Skattskyldig (6–7 §§)

**Inhemsk försäljning/tillverkning:**
- Godkänd lagerhållare (när vara levereras eller tas i anspråk för annat ändamål)
- Tillverkare (när varan tillverkas)
- Distansförsäljare från EU-land (vid införsel till Sverige)
- Introduktör från annat EU-land utan lagerhållarskap (vid införsel)

**Vid import/otillåten införsel:**
- **Deklaranten** (personens klassiska tullansvar enligt UCC art. 77.3)
- **Varje annan person involverad** i otillåten införsel
- Från skattskyldighet undantas lagerhållare vars varor är i uppskov vid tullklarering

### Personlig bruk — skattefrihet (8 §)

En enskild person får transportera själv utan skatt:
- **20 ml e-vätskor** max
- **200 gram andra produkter** max

per person och **per tillfälle**.

### Lagerhållarskap (9 §)

En lagerhållare måste:
- Yrkesmässigt tillverka, importera från tredje, föra in från EU, eller sälja i exportbutik
- Vara lämplig med hänsyn till ekonomiska förhållanden och omständigheter

Godkännandet kan återkallas om förutsättningarna försvinner.

### Avdrag och återbetalning (12–15 §§)

**Lagerhållare får göra avdrag** för skatt på varor som:
1. Levereras till EU-köpare (12 § 1)
2. Förvärvats före lagerhållares godkännande men redan skattade (12 § 2–3)
3. Förstörts genom oförutsebara omständigheter eller under Skatteverkets tillsyn (12 § 4)
4. Användes vid tillverkning av andra skattepliktiga varor (12 § 5)
5. Exporteras eller förs till frizon (12 § 6)
6. Levereras till särskilda köpare (FN-organisationer, väpnade styrkor, proviantering av fartyg/luftfartyg) (12 § 7–9)

**Återbetalning** efter export eller EU-försäljning (14 §):
- Ansökan till Skatteverket inom **3 år** efter kvartal för export
- Återbetalning medges ej för belopp under 1 500 kr/kvartal
- Tullverkets intyg krävs för export

**Diplomatiska immunitet och försvarsbeslut** (15 §):
- Återbetalning för utländsk beskickning, karriärkonsulat, diplomatisk personal
- Väpnade styrkor från EU-länder eller NATO-länder (med undantag för USA om försvarsbeslut från 2023 är tillämpligt)

### Tullverkets befogenheter (17 §)

- Tullverket **beslutar skatt** för den som är skattskyldig vid import eller otillåten införsel
- Skatten **betalas till Tullverket**
- **Tullagen (2016:253)** tillämpas för uppkrav, överklagande och tvister

### Överklagande (18 §)

- Lagerhållarnas godkännande kan överklagas till allmän förvaltningsdomstol
- För övriga skattebeslut gäller [[skatteforfarandelagen]] (2011:1244), **utom** import — där tullagen gäller

## Kopplingar

| Typ | Lag | Kontext |
|--------|-----|---------|
| **overlappar** | [[tobaksskattelagen]] | Båda beskattar nikotinprodukter — nikotinskattelagen för e-vätskor och oralt/nasalt nikotinbruk, tobaksskattelagen för tobaksvaror enligt KN. Samma administrativa ram (lagerhållare, EU-regler), olika varusortering |
| **overlappar** | [[lagen-om-tobak-och-liknande-produkter]] | E-cigarette-reglerna är både skattepliktiga (nikotinskattelagen) och produktreglerade (märkning, försäljning, tillståndsplikt enligt tobakslagen). Nikotinskattelagen är rent skatterättslig; tobakslagen är produktregulerande. |
| **hanvisar-till** | [[tullagen]] | UCC-definitionerna är ankarpunkten; tullskuldens uppkomst enligt UCC art. 201 utlöser skattskyldighet. Tullverket beslutar skatt; skatten betalas enligt tullagen. |
| **hanvisar-till** | [[narkotikastrafflagen]] | Narkotikaklassificeringar ger undantag från skatt (5 § 1). Gränsdragningen mellan narkotika och nikotinprodukter är praktiskt viktig. |
| **hanvisar-till** | [[lagen-om-forbud-mot-vissa-halsofarliga-varor]] | Hälsofarlig-klassificeringar ger undantag från skatt (5 § 1). E-vätskor klassificerade som akut giftig är undantagna (utom högkoncentrerade). |
| **hanvisar-till** | [[skatteforfarandelagen]] | Generell administrativ ram för skattebeslut och överklagande — **utom för import**, där tullagen gäller |

## Praktisk tillämpning

> [!situation] Import av e-vätskor från tredjeland
> En leverantör i Filippinerna säljer 50 liter e-vätskor per månad till Sverige. Importören måste antingen (1) vara godkänd lagerhållare, eller (2) betala nikotinskat på hele leveransen. Om lagerhållare: skatten inträder när tullskulden uppkommer (UCC art. 201 — övergång till fri omsättning). Skatten deklareras och betalas till Tullverket, som rapporterar till Skatteverket.

> [!situation] Beslag vid gränskontroll
> En privatperson åker från Polen med 5 liter e-vätskor i väskan — långt över 20 ml-gränsen (8 §). Vid gränskontroll omhändertar Tullverket varorna. Personen är skattskyldig enligt 7 § som "person involverad i otillåten införsel". Tullverket fastställer skattskuld på cirka 10 100 kr (5 × 2 020 kr). Om personen inte betalar kan skatten tas ut enligt tullagen.

> [!situation] Distansförsäljning från EU till Sverige
> En engelsk e-cigarett-leverantör säljer produkter online till svenska köpare utan att vara lagerhållare i Sverige. Vid leverans till Sverige utan lagerhållarskap är försäljaren skattskyldig enligt 6 § 2 c (vid införsel till Sverige). Skatteverket eller Tullverket kan föra upp skatteskuld. Om försäljaren inte är registrerad i Sverige blir det praktiskt svårt att kräva in skatten.

> [!situation] Lagerhållares godkännande
> En aktör vill godkännas som lagerhållare för import av nikotinpåsar från Turkiet. Ansökan går till Skatteverket, som prövar lämplighet (9 §). Efter godkännande kan aktören ta emot varor utan skatt, förutsatt att lagerhållningen följer föreskrifterna. Vid varje försäljning till slut­konsument inträder skatt.

> [!situation] Destruktion av utgangna varor
> En lagerhållare lagrar 200 kg nikotinpåsar som inte löser sig. Väl-datorerna meddelas Skatteverket om destruktion under opartisk tillsyn. Enligt 11 a § (från 2021) **får skatten avdrags** — lagerhållaren får skattefrihet för destruerade varor. Detta är en viktig rätt för lagerhållare.

> [!situation] Export under uppskov
> En lagerhållare i Sverige möter export av 1 ton nikotinpåsar till Norge. Varorna förblir i uppskov under lagerhållningen. Vid export attesteras av Tullverket. Lagerhållaren kan sedan ansöka om återbetalning av innehållen skatt hos Skatteverket (14 §).

## Förhållande till EU-lagstiftning

Nikotinskattelagen genomför EU:s **punktskattedirektiv** (EU) 2020/262 och senare ändringar. E-vätskor klassificeras som specialprodukter under direktivet, separat från tobak.

## Ändringshistorik (senaste omfattande revideringar)

| SFS | Ikraft | Innehål |
|-----|--------|---------|
| 2020:1018 | 1 jan 2021 | Införde 11 a § om skattefrihet för destruktion under Skatteverkets tillsyn |
| 2022:179 | 13 feb 2023 | Grundläggande anpassning till unionstullkodexen (UCC); nya definitioner av import, deklarant, och otillåten införsel |
| 2024:496 | 1 nov 2024 | Årlig justering av skattesatser enligt inflationsindex med start 2025 |
| 2026:35 | 1 apr 2026 | Senaste anpassning till UCC; förtydligande av deklaranternas ansvar och unionsvara-begreppet |

---

**Skapad från:** [[lagen-om-skatt-pa-nikotinhaltiga-produkter-2018-696]]
