---
title: Statens jordbruksverk (Jordbruksverket)
type: entity
entity_type: myndighet
created: 2026-04-12
updated: 2026-04-12
short_name: Jordbruksverket
webbplats: "https://jordbruksverket.se"
huvudkontor: Jönköping
chef_titel: Generaldirektör
tillsynsmyndighet: Regeringen (Landsbygds- och infrastrukturdepartementet)
forfattningsgrund:
  - "Förordning (2009:1464) med instruktion för Statens jordbruksverk"
  - "Myndighetsförordning (2007:515)"
ansvarsomrade: >
  Sveriges förvaltningsmyndighet inom jordbruk, fiske, vattenbruk, djurhållning,
  rennäring, trädgård och landsbygd. Betalar ut EU-stöd, skyddar djur och växter,
  är beredskapsmyndighet. I tullsammanhang: tillsynsmyndighet för CITES,
  växtskydd, jordbruksprodukter och IUU-fiske vid gränsen.
befogenheter:
  - utfärda CITES-tillstånd för levande djur och växter
  - betala ut EU-stöd (jordbruksfonder)
  - besluta om djurskydd och djurhälsa
  - tillsyn av växtskydd och karantänskadegörare
  - kontroll av livsmedel av animaliskt ursprung vid import
  - tillsyn av IUU-fiske och fiskerikontroll
  - utfärda tillstånd för import/export av jordbruksprodukter
  - distriktsveterinärernas operativa verksamhet (djurhälsa, smittskydd)
  - beredskapsansvar för djursjukdomar, djurfoder och växtskadegörare
connections:
  - type: forvaltar
    target: "[[cites-forordningen]]"
    context: "Tillsynsmyndighet för CITES i Sverige (tillsammans med Naturvårdsverket)"
  - type: forvaltar
    target: "[[cites-genomforande-eg-865-2006|CITES-genomförandeförordningen]]"
    context: "Operativ tillämpning i Sverige"
  - type: forvaltar
    target: "[[cites-tillstand-eu-792-2012|CITES-tillståndsförordningen]]"
    context: "Utfärdar CITES-tillstånd"
  - type: forvaltar
    target: "[[artskyddsforordningen]]"
    context: "Svensk tillämpning av CITES och art- och habitatdirektivet"
  - type: forvaltar
    target: "[[jaktforordningen]]"
    context: "Administrerar jakt-tillstånd (tillsammans med Naturvårdsverket)"
  - type: forvaltar
    target: "[[iuu-fiskeforordningen]]"
    context: "IUU-fiskekontroll vid import"
  - type: forvaltar
    target: "[[iuu-genomforande]]"
    context: "Genomförandeförordning IUU-fiske"
  - type: forvaltar
    target: "[[fiskerikontrollforordningen]]"
    context: "Fiskerikontroll enligt EU-förordning 1224/2009"
  - type: forvaltar
    target: "[[rennaringsforordningen]]"
    context: "Rennäringsfrågor och renmärkning"
  - type: forvaltar
    target: "[[livsmedelslagen]]"
    context: "Livsmedel av animaliskt ursprung (tillsammans med Livsmedelsverket)"
  - type: samarbetar-med
    target: "[[tullverket]]"
    context: "Operativ gränskontroll av CITES, jordbruksprodukter, djur och växter"
  - type: samarbetar-med
    target: "[[skatteverket]]"
    context: "Beskattning av jordbruksstöd"
  - type: samarbetar-med
    target: "[[kommerskollegium]]"
    context: "EU:s jordbrukspolitik (CAP), importlicenser för jordbruksprodukter"
sources:
  - "[[myndighet-statens-jordbruksverk]]"
tags:
  - myndighet
  - jordbruksverket
  - jordbruk
  - fiske
  - cites
  - beredskapsmyndighet
situationer:
  - cites-import
  - cites-export
  - import-levande-djur
  - import-vaxter
  - iuu-fiske-kontroll
  - jordbruksstod
---

## Sammanfattning

Jordbruksverket är Sveriges förvaltningsmyndighet inom jordbruk, fiske och vattenbruk. Myndigheten har ett samlat ansvar för att följa och bidra till Sveriges utveckling inom jordbruk, djurhållning, fiske, vattenbruk, rennäring, trädgård och landsbygd. Inom organisationen finns även **Distriktsveterinärerna** (ca 700 anställda, 60 platser). Jordbruksverket är också en **beredskapsmyndighet**.

I tullsammanhang är Jordbruksverket primärt relevant för:
- **CITES-tillstånd** (hotade arter) — tillsammans med Naturvårdsverket
- **Växtskydd** — kontroll av karantänskadegörare vid import
- **Jordbruksprodukter** — EU-licenser för import/export
- **Livsmedel av animaliskt ursprung** — veterinär gränskontroll
- **IUU-fiske** — import av fiskprodukter

## Ansvarsområde

Huvudsakliga arbetsområden:
- konkurrenskraftig, hållbar och ökande matproduktion i Sverige
- Sveriges miljömål — särskilt ansvar för "Ett rikt odlingslandskap"
- gott skydd av djur, växter och hälsa
- Sveriges förvaltningsmyndighet inom jordbruk, fiske och vattenbruk
- ansvar för utbetalning från tre EU-fonder:
  - Europeiska garantifonden för jordbruket
  - Europeiska jordbruksfonden för landsbygdsutveckling
  - Europeiska havs-, fiskeri- och vattenbruksfonden
- beredskapsmyndighet (civilt försvar) — särskilt ansvar för smittsamma djursjukdomar, förorenat djurfoder och karantänskadegörare

## Befogenheter (tullrelaterade)

| Område | Befogenhet |
|--------|-----------|
| CITES | Utfärda import-/exporttillstånd för CITES-listade arter |
| Levande djur | Veterinär gränskontroll, importtillstånd |
| Växter | Fytosanitär kontroll, karantänskadegörare |
| Livsmedel (animaliskt) | Gränskontrollstation, importgodkännande |
| Fiske | IUU-certifiering vid import, fiskerikontroll |
| EU-licenser | Import/exportlicenser för jordbruksprodukter |
| Djurskydd | Tillsyn vid gränspassage |
| Beredskap | Djurseparatoriska åtgärder vid epidemi |

## Relaterade lagar (tullrelevant)

**CITES:**
- [[cites-forordningen]] — EG 338/97
- [[cites-genomforande-eg-865-2006]] — EG 865/2006
- [[cites-tillstand-eu-792-2012]] — EU 792/2012
- [[artskyddsforordningen]] — SFS 2007:845

**Fiske:**
- [[iuu-fiskeforordningen]] — EG 1005/2008
- [[iuu-genomforande]] — Genomförandeförordning
- [[fiskerikontrollforordningen]] — EG 1224/2009

**Jakt och viltvård:**
- [[jaktforordningen]] — tillsammans med Naturvårdsverket
- [[forordningen-om-viltvardsomraden]]

**Jordbruk och livsmedel:**
- [[livsmedelslagen]]
- [[rennaringsforordningen]]
- [[forordningen-om-gransalvsoverenskommelsen]]

## Samarbeten

| Myndighet | Samarbetsområde |
|-----------|----------------|
| [[tullverket]] | Operativ gränskontroll av CITES, växter, djur, fiskprodukter, jordbruksvaror |
| Naturvårdsverket | CITES (delat tillsynsansvar), vilda djur och naturvård |
| Livsmedelsverket | Import av livsmedel, gränskontrollstationer |
| [[skatteverket]] | Beskattning av EU-stöd, enskilda näringsidkare inom jordbruk |
| [[kommerskollegium]] | EU:s gemensamma jordbrukspolitik (CAP), handelsfrågor |
| Havs- och vattenmyndigheten | Fiskeripolitik, datainsamling (DCF) |
| Statens veterinärmedicinska anstalt (SVA) | Djursjukdomar, foderkontroll |
| Länsstyrelserna | Regional tillsyn av djurskydd och jordbruk |

## Organisation

- **Chef:** Generaldirektör
- **Huvudkontor:** Jönköping
- **Distriktsveterinärerna:** ~60 platser, ~700 anställda (veterinärer, djursjukskötare, djurvårdare)
- **Styrning:** Regeringen via instruktionsförordning + årligt regleringsbrev
- **Beredskapsmyndighet** enligt förordningen om statliga myndigheters beredskap

## Praktisk tillämpning

> [!situation] Import av CITES-skyddad art
> Jordbruksverket utfärdar CITES-tillstånd (äger regelverket via [[cites-forordningen]]). [[tullverket|Tullverket]] genomför fysisk kontroll vid gränsen och beslagtar varor utan giltigt tillstånd.

> [!situation] Import av levande djur från tredje land
> Djuret måste passera godkänd gränskontrollstation. Jordbruksverket (veterinär) kontrollerar hälsostatus. Tullverket kontrollerar tullklarering och tillstånd.

> [!situation] Misstänkt IUU-fisk i container
> Tullverket upptäcker saknat IUU-fångstcertifikat. Jordbruksverket är tillsynsmyndighet enligt [[iuu-fiskeforordningen]] och beslutar om varan får släppas.

> [!situation] Karantänskadegörare upptäckt i växtpartiet
> Jordbruksverket (fytosanitär inspektör) gör bedömning, kan besluta om destruktion. Tullverket operativt involverat vid gränsen.
