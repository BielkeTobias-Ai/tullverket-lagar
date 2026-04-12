---
title: Tullverket
type: entity
entity_type: myndighet
created: 2026-04-12
updated: 2026-04-12
short_name: Tullverket
webbplats: "https://www.tullverket.se"
huvudkontor: Stockholm
organisationsnummer: "202100-0969"
chef_titel: Generaltulldirektör
tillsynsmyndighet: Regeringen (Finansdepartementet)
forfattningsgrund:
  - "Förordning (2016:1332) med instruktion för Tullverket"
  - "Myndighetsförordning (2007:515)"
ansvarsomrade: >
  Sveriges tullmyndighet. Övervakar och kontrollerar varuflödet in och ut ur Sverige,
  fastställer och tar ut tullar/skatter/avgifter vid gränsen, samt bekämpar smuggling
  och annan brottslighet kopplad till in- och utförsel av varor.
befogenheter:
  - ta ut tullar, skatter och avgifter vid in- och utförsel av varor
  - övervaka och kontrollera trafiken till och från Sverige
  - göra tullkontroller av fordon, personer och gods
  - utföra kroppsvisitation och ytlig kroppsbesiktning (kroppsbesiktning av kroppens ihåligheter kräver åklagarbeslut)
  - beslagta olagliga varor och omhänderta restriktionsvaror
  - bedriva utrednings- och åklagarverksamhet vid brott mot in-/utförselbestämmelser
  - bedriva viss verksamhet i fråga om rattfylleribrott
  - utfärda AEO-tillstånd (Authorised Economic Operator)
  - tillämpa sanktioner och in-/utförselrestriktioner på uppdrag av andra myndigheter
connections:
  - type: forvaltar
    target: "[[tullagen]]"
    context: "Primär tillämpare av svensk tullag"
  - type: forvaltar
    target: "[[tullforordningen]]"
    context: "Primär tillämpare"
  - type: forvaltar
    target: "[[tullbefogenhetslagen]]"
    context: "Primär tillämpare — lagen ger Tullverket specifika operativa befogenheter"
  - type: forvaltar
    target: "[[tullbefogenhetsforordningen]]"
    context: "Primär tillämpare — kompletterar tullbefogenhetslagen"
  - type: forvaltar
    target: "[[smugglingslagen]]"
    context: "Primär tillämpare vid smugglingsbrott över Sveriges gräns"
  - type: forvaltar
    target: "[[lagen-om-punktskattekontroll]]"
    context: "Tillsammans med Skatteverket — punktskattekontroll av transporter"
  - type: samarbetar-med
    target: "[[skatteverket]]"
    context: "Moms vid import, punktskatter, myndighetsgemensamt arbete mot organiserad brottslighet"
  - type: samarbetar-med
    target: "[[statens-jordbruksverk]]"
    context: "CITES-kontroll, import av livsmedel och växter, djurskydd vid gräns"
  - type: samarbetar-med
    target: "[[kommerskollegium]]"
    context: "Export-/importlicenser, dual-use, antidumpning, handelsstatistik"
sources:
  - "[[myndighet-tullverket]]"
tags:
  - myndighet
  - tullverket
  - gransskydd
situationer:
  - granskontroll-fordon
  - granskontroll-person
  - tullklarering
  - beslag-narkotika
  - beslag-vapen
  - aeo-tillstand
  - smuggling-utredning
---

## Sammanfattning

Tullverket är Sveriges tullmyndighet och lyder under regeringen (Finansdepartementet). Myndighetens slogan är "Bara godkända varor över gränsen". Tullverket arbetar för ett samhälle fritt från varor som hotar miljön eller människors hälsa och trygghet, och där näringslivet konkurrerar på lika villkor.

Verksamheten består av två huvuddelar: **uppbörd** (ta ut tullar, skatter och avgifter vid in- och utförsel) och **kontroll** (övervaka varuflödet och se till att in-/utförselrestriktioner följs). Tullverket är en kontrollmyndighet som ofta agerar på uppdrag av andra myndigheter som äger reglerna (t.ex. Läkemedelsverket för läkemedel, Jordbruksverket för CITES, Kemikalieinspektionen för kemikalier).

## Ansvarsområde

Tullverket ansvarar enligt [förordning (2016:1332) med instruktion för Tullverket](https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-20161332-med-instruktion-for_sfs-2016-1332) för att:

- fastställa och ta ut tullar, skatter och avgifter
- övervaka och kontrollera trafiken till och från Sverige
- förebygga, förhindra och upptäcka brottslig verksamhet vid in- och utförsel av varor
- delta i myndighetsgemensamt arbete mot grov och organiserad brottslighet
- bedriva utrednings- och åklagarverksamhet i vissa brottmål
- vara beredskapsmyndighet enligt förordningen om statliga myndigheters beredskap

Tullverket ansvarar för hela det svenska tullområdet och tillämpar både svensk lagstiftning (tullagen, tullförordningen, smugglingslagen m.fl.) och direkt EU-rätt (främst [[ucc-elektroniska-system-2023|UCC]] — Unionens tullkodex, förordning 952/2013).

## Befogenheter

Tullverkets operativa befogenheter regleras främst i [[tullbefogenhetslagen]] och [[tullbefogenhetsforordningen]] (i kraft sedan augusti 2024, tidigare i [[tullagen]] och inregränslagen). De viktigaste befogenheterna är:

| Område | Befogenhet |
|--------|-----------|
| Trafikkontroll | Stoppa fordon, fartyg, tåg och luftfartyg vid gränsen och inom tullområdet |
| Person | Kroppsvisitation och ytlig kroppsbesiktning vid misstanke om dold vara |
| Kroppsbesiktning | Undersökning av kroppens ihåligheter (kräver åklagarbeslut) |
| Gods | Tulldeklaration, dokumentkontroll, varudeklaration, fysisk granskning |
| Beslag | Ta olagliga varor i beslag, omhänderta restriktionsvaror |
| Förvar | Ta personer i tillfälligt förvar vid misstanke om brott |
| Utredning | Förundersökning vid smugglingsbrott, åklagarverksamhet |
| Administrativt | Utfärda AEO-tillstånd, tullager-tillstånd, förenklade förfaranden |

## Relaterade lagar

Tullverket är primär tillämpare eller medansvarig för:

**Grundläggande tullagstiftning:**
- [[tullagen]] — SFS 2016:253
- [[tullforordningen]] — SFS 2016:287
- [[tullbefogenhetslagen]] — SFS 2024:710
- [[tullbefogenhetsforordningen]] — SFS 2024:733
- [[ucc-elektroniska-system-2023|Unionens tullkodex (UCC)]] — EU 952/2013

**Smuggling och brott:**
- [[smugglingslagen]] — SFS 2000:1225
- [[narkotikastrafflagen]] (vid narkotikasmuggling)
- [[lagen-om-forbud-mot-vissa-dopningsmedel]]
- [[lagen-om-forbud-mot-vissa-halsofarliga-varor]]

**Punktskatt och moms vid import:**
- [[lagen-om-punktskattekontroll]] — SFS 1998:506 (delat ansvar med Skatteverket)
- [[mervardesskattelagen]] (moms vid import)

**Restriktioner och kontroller:**
- [[cites-forordningen]] — EG 338/97 (tillsammans med Jordbruksverket/Naturvårdsverket)
- [[forordningen-om-dual-use]] — EU 2021/821
- [[lagen-om-kontroll-av-dubbla-anvandningsomraden]]
- [[lagen-om-krigsmateriel]]
- [[pgs-forordningen]]
- [[lagen-om-vissa-internationella-sanktioner]]

## Samarbeten

| Myndighet | Samarbetsområde |
|-----------|----------------|
| [[skatteverket]] | Moms vid import, punktskatter, organiserad ekonomisk brottslighet |
| [[statens-jordbruksverk]] | CITES, import av livsmedel, djur och växter, IUU-fiske |
| [[kommerskollegium]] | Export-/importlicenser, dual-use, antidumpning, handelsstatistik |
| Polismyndigheten | Narkotika, vapensmuggling, organiserad brottslighet |
| Kustbevakningen | Sjögränskontroll, samverkan i fiskevatten |
| Läkemedelsverket | Läkemedelsrestriktioner vid import |
| Kemikalieinspektionen | Kemikaliekontroll vid import |
| Naturvårdsverket | CITES (tillsammans med Jordbruksverket), avfallstransporter |
| ISP (Inspektionen för strategiska produkter) | Krigsmateriel, dual-use |
| Ekobrottsmyndigheten | Grov ekonomisk brottslighet |

## Organisation

- **Chef:** Generaltulldirektör (leder ledningsgruppen)
- **Organisationsnummer:** 202100-0969
- **Momsregistreringsnummer:** SE202100096901
- **Styrning:** Regeringen via årligt regleringsbrev + instruktionsförordning
- **Allmänna ombudet:** Utses av regeringen; kan överklaga Tullverkets beslut om tull och annan skatt
- **Beredskapsmyndighet:** Tullverket har roll i Sveriges civila försvar

## Praktisk tillämpning

Typiska situationer där Tullverket är primär operativ myndighet:

> [!situation] Gränskontroll av fordon
> Vid [[smugglingslagen]]-kontroll av lastbil vid Öresundsbron: Tullverket stoppar fordonet (tullbefogenhetslagen), visiterar förare/last, beslagtar misstänkta varor.

> [!situation] Import av varor från tredje land
> Företag deklarerar varor genom Tullverkets system. Tullverket tar ut importtull ([[ucc-elektroniska-system-2023|UCC]]) + [[mervardesskattelagen|moms]] (för Skatteverkets räkning).

> [!situation] CITES-skyddad art i beslag
> Jordbruksverket äger reglerna ([[cites-forordningen]]), men Tullverket är den operativa kontrollmyndigheten vid gränsen.

> [!situation] Dual-use-export till sanktionerat land
> Kommerskollegium/ISP hanterar licenser, Tullverket kontrollerar fysiskt vid utförsel ([[forordningen-om-dual-use]]).
