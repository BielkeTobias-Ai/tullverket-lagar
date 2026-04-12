---
title: Förordningen om dual-use
type: entity
entity_type: lag
source_type: forordning
sfs: "2000:1217"
short_name: Dual-use-förordningen
status: gällande
created: 2026-04-09
updated: 2026-04-09
befogenheter:
  - fastställa nationella tillståndsformer (globalt, generellt) utöver EU-förordningens individuella tillstånd
  - tillämpa catch-all-klausuler på icke-förtecknade produkter vid misstänkt militär/destruktiv slutanvändning
  - förbjuda transitering av icke-unionsprodukter med dubbla användningsområden
  - ålägga 48-timmars anmälningsplikt till Tullverket vid export/överföring
  - reglera ISP:s och Strålsäkerhetsmyndighetens tillstånds- och tillsynsroll
  - fastställa nationell kontrollförteckning (bilaga) för exportkontroll av avancerad teknik
  - reglera tillstånd för import av kemiska prekursorer
tillampningsomrade: >
  Kompletterar EU-förordning 2021/821 och lagen (2000:1064) om kontroll av
  produkter med dubbla användningsområden. Reglerar nationella tillståndsformer,
  catch-all-klausuler, Tullverkets roll, och en nationell kontrollförteckning
  för avancerade produkter såsom kvantdatorer och halvledartillverkningsutrustning.
straffskala: []
situationer:
  - export-dual-use
  - catch-all-militär-slutanvändning
  - transitering-dual-use
  - anmalan-tullverket-48h
  - kvantdatorer-export
  - halvledare-export
  - karnmaterial-export
  - formedlingstjanster-dual-use
connections:
  - type: speciallag-till
    target: "[[lagen-om-kontroll-av-dubbla-anvandningsomraden]]"
    context: "Tillämpningsförordning som preciserar tillståndsformer, procedurer och nationell kontrollförteckning för lagen (2000:1064)"
  - type: hanvisar-till
    target: "[[tullbefogenhetslagen]]"
    context: "Tullverket tar emot 48-timmarsanmälan om export/överföring av tillståndspliktiga dual-use-produkter (9 §)"
  - type: hanvisar-till
    target: "[[smugglingslagen]]"
    context: "Otillåten export av dual-use-produkter utan tillstånd kan utgöra smuggling"
  - type: overlappar
    target: "[[forordningen-om-krigsmateriel]]"
    context: "Båda förordningarna reglerar strategisk exportkontroll och innehåller 48-timmarsanmälan till Tullverket; ISP hanterar tillstånd i båda systemen"
tags:
  - dual-use
  - exportkontroll
  - ISP
  - PGS-forordningen
  - catch-all
  - kvantdatorer
  - halvledare
  - tullverket
  - karnmaterial
sources:
  - "[[forordningen-om-dual-use-2000-1217]]"
---

# Förordningen om dual-use (SFS 2000:1217)

## Sammanfattning

Förordning (2000:1217) om kontroll av produkter med dubbla användningsområden och av tekniskt bistånd är tillämpningsförordning till [[lagen-om-kontroll-av-dubbla-anvandningsomraden]] (SFS 2000:1064) och kompletterar EU-förordning 2021/821 (PGS-förordningen). Den fastställer nationella tillståndsformer (globalt och generellt tillstånd utöver EU-förordningens individuella), innehåller catch-all-klausuler som utvidgar tillståndskravet till icke-förtecknade produkter vid misstänkt militär eller destruktiv slutanvändning, reglerar ISP:s och Strålsäkerhetsmyndighetens roller, samt innehåller en nationell kontrollförteckning med avancerade produkter (kvantdatorer, halvledartillverkningsutrustning, kryogena system m.m.). Senast ändrad t.o.m. SFS 2025:878.

## Nyckelregler

### Tre nationella tillståndsformer

Utöver EU:s tillståndsformer enligt 2021/821 finns nationella former:

| Typ | Karaktär |
|---|---|
| Individuellt tillstånd | Enligt EU 2021/821 — ett specifikt exporttillfälle |
| Globalt tillstånd | Nationell form; täcker flera transaktioner under giltighetstiden |
| Generellt tillstånd | ISP meddelar föreskrifter; används för standardiserade lågrisksituationer |

### Catch-all-klausuler — utvidgat tillämpningsområde

Förordningen utvidgar kontrollsystemet bortom den formella förteckningen (bilaga I till EU 2021/821) via fyra parallella mekanismer:

1. **Export (4 a §)**: Exportör med misstanke om militär/destruktiv slutanvändning ska anmäla till ISP → ISP beslutar om tillståndskrav.
2. **Förmedling (4 b §)**: Tillstånd krävs om ISP informerat förmedlaren om misstänkt militär/destruktiv användning, eller om förmedlaren själv misstänker detta.
3. **Transitering (4 c §)**: ISP kan förbjuda transitering av icke-unionsprodukter vid misstänkt restriktiv användning.
4. **Tekniskt bistånd (4 d §)**: Tillstånd krävs om ISP informerat tillhandahållaren eller om denne själv misstänker militär/destruktiv slutanvändning.

### Nationell kontrollförteckning — avancerade produkter

Bilagan till förordningen innehåller en nationell kontrollförteckning med produkter som kräver exporttillstånd utöver EU:s förteckning. Produkterna inkluderar bl.a.:

**Kvantteknik:**
- Kvantdatorer med ≥ 34 fysiska kvantbitar (kretsmodell och mätningsbaserade) med specificerade C-NOT-felgränser.
- Kvantbitenheter, kvantkontrollkomponenter och kvantmätningsutrustning.

**Halvledare och mikroelektronik:**
- Avancerade integrerade kretsar: CMOS för ≤ 4,5 K drift, parametriska signalförstärkare vid < 1 K, AI-chip med total prestanda ≥ 6 000 TPP.
- Halvledartillverkningsutrustning: torretsning, EUV-masker, svepelektronmikroskop (positioneringsnoggrannhet ≤ 30 nm).
- Kryogena kylsystem (≥ 600 µW vid ≤ 0,1 K).

**Materialbearbetning:**
- Utrustning för additiv tillverkning (3D-printing) av metaller med laserkonsolidering och realtidsövervakning.

### Anmälningsplikt till Tullverket

Export och överföring inom EU av tillståndspliktiga dual-use-produkter ska anmälas till **Tullverket senast 48 timmar** före planerad export/överföring, under helgfri måndag–fredag. Undantag gäller vid reparation, demonstration, reklamation, biologiska agens eller när globalt/generellt exporttillstånd beviljats. Undantagen befriar inte från deklarationsskyldighet enligt unionstullkodexen. Generellt exporttillstånd ska åberopas i tulldeklarationen.

### Delad tillstånds- och tillsynsroll

- **ISP**: Prövning och tillsyn i normalfallet. Principiellt viktiga ärenden lämnas till regeringen.
- **Strålsäkerhetsmyndigheten**: Prövning och tillsyn för kärnämnen (kategori 0 i EU 2021/821 bilaga I); ärenden med mottagare utan icke-spridningsavtal lämnas till regeringen.

### Kemiska prekursorer

ISP får meddela föreskrifter om tillstånd för **import** av kemiska prekursorer som kan användas för tillverkning av kemiska stridsmedel (5 §).

## Kopplingar

| Typ | Kopplad entitet | Förklaring |
|---|---|---|
| Speciallag till | [[lagen-om-kontroll-av-dubbla-anvandningsomraden]] | Tillämpningsförordning som specificerar tillståndsformer och procedurer |
| Hänvisar till | [[tullbefogenhetslagen]] | Tullverket tar emot 48-timmarsanmälan (9 §) |
| Hänvisar till | [[smugglingslagen]] | Otillåten export utan tillstånd kan utgöra smuggling |
| Överlappar | [[forordningen-om-krigsmateriel]] | Båda reglerar strategisk exportkontroll med ISP och 48-timmarsanmälan till Tullverket |

## Nyckelbestämmelser

| Paragraf | Innehåll |
|---|---|
| 1 § | Förordningens syfte och koppling till EU 2021/821 och lagen (2000:1064) |
| 2 § | Definitioner (naturligt, utarmat och anrikat uran) |
| 3 § | Nationella tillståndsformer: globalt och generellt tillstånd |
| 4 a § | Catch-all: export av icke-förtecknade produkter |
| 4 b § | Catch-all: förmedlingstjänster |
| 4 c § | Catch-all: transitering |
| 4 d § | Catch-all: tekniskt bistånd |
| 4 f § | Undantag från EU:s generella exporttillstånd avsnitt G |
| 4 g § | Nationell kontrollförteckning (bilagan) |
| 5 § | Tillstånd för import av kemiska prekursorer |
| 6 § | ISP som tillståndsmyndighet; delegation till regeringen |
| 7 § | Strålsäkerhetsmyndighetens roll för kärnämnen |
| 9 § | Anmälningsplikt till Tullverket — 48 timmar |
| 10 § | Undantag från anmälningsplikten |
| 15 § | Tillsynsreglering: ISP och Strålsäkerhetsmyndigheten |

## Praktisk tillämpning

> [!situation] Export av kvantdator
> Företag som exporterar en kvantdator med ≥ 34 kontrollerade fysiska kvantbitar och specificerade C-NOT-felgränser kräver exporttillstånd enligt nationell kontrollförteckning (4 g §, bilaga 4A901) samt 48-timmarsanmälan till Tullverket.

> [!situation] Export av avancerade AI-chip
> Integrerade kretsar med total prestanda ≥ 6 000 TPP (GPU, TPU, ASIC m.m.) kräver exporttillstånd enligt bilagan (3A901 c) och 48-timmarsanmälan till Tullverket.

> [!situation] Misstänkt militär slutanvändning — icke-förtecknad produkt
> Om en exportör misstänker att en produkt som inte finns i kontrollförteckningen är avsedd för t.ex. massförstörelsevapen ska denne underrätta ISP (4 a §). ISP beslutar om tillståndsplikt. Att inte anmäla kan ge straffrättsliga konsekvenser (se [[smugglingslagen]]).

> [!situation] Transitering av dual-use-produkter
> Icke-unionsprodukter med dubbla användningsområden som transiterar Sverige och som ISP bedömer vara avsedda för militär/destruktiv användning kan förbjudas av ISP (4 c §). Vanlig tulldeklaration gäller oavsett förbudsundantag.

> [!situation] Kärnmaterialexport
> Export av kärnämnen (kategori 0) handläggs av Strålsäkerhetsmyndigheten, inte ISP. Export till stater utan bilateralt icke-spridningsavtal kräver regeringsbeslut.
