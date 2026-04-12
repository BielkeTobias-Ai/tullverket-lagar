---
title: Skatteverket
type: entity
entity_type: myndighet
created: 2026-04-12
updated: 2026-04-12
short_name: Skatteverket
webbplats: "https://www.skatteverket.se"
huvudkontor: Solna
chef_titel: Generaldirektör
tillsynsmyndighet: Regeringen (Finansdepartementet)
forfattningsgrund:
  - "Förordning (2017:154) med instruktion för Skatteverket"
  - "Myndighetsförordning (2007:515)"
ansvarsomrade: >
  Sveriges skattemyndighet. Tar in skatter (inkomstskatt, moms, punktskatter,
  socialavgifter), sköter folkbokföring, registrerar bouppteckningar,
  är borgenär åt staten och utreder skattebrott. Vid import samverkar Skatteverket
  med Tullverket om moms och punktskatter.
befogenheter:
  - fastställa och ta in skatter (inkomstskatt, moms, punktskatt, socialavgifter)
  - besluta om skattetillägg och andra avgifter
  - sköta folkbokföring och personnummer
  - registrera bouppteckningar, äktenskapsförord och fastighetstaxering
  - utfärda id-kort med e-legitimation
  - utreda skattebrott och ekonomisk brottslighet
  - vara borgenär åt staten (bevaka statens fordringar, ansöka om konkurs)
  - genomföra skattekontroller och revisioner
  - godkänna skattskyldighet för punktskatter (upplagshavare, registrerad mottagare)
connections:
  - type: forvaltar
    target: "[[mervardesskattelagen]]"
    context: "Primär tillämpare — moms, inklusive moms vid import (samordnas med Tullverket)"
  - type: forvaltar
    target: "[[lagen-om-alkoholskatt]]"
    context: "Primär tillämpare — punktskatt på alkoholhaltiga drycker"
  - type: forvaltar
    target: "[[tobaksskattelagen]]"
    context: "Primär tillämpare — punktskatt på tobak"
  - type: forvaltar
    target: "[[lagen-om-skatt-pa-energi]]"
    context: "Primär tillämpare — energiskatt och koldioxidskatt"
  - type: forvaltar
    target: "[[lagen-om-skatt-pa-nikotinhaltiga-produkter]]"
    context: "Primär tillämpare — punktskatt på nikotinprodukter"
  - type: forvaltar
    target: "[[skattebrottslagen]]"
    context: "Utredningsmyndighet för skattebrott"
  - type: forvaltar
    target: "[[lagen-om-punktskattekontroll]]"
    context: "Delat ansvar med Tullverket — punktskattekontroll av transporter"
  - type: samarbetar-med
    target: "[[tullverket]]"
    context: "Moms vid import, punktskattekontroll, myndighetsgemensamt arbete mot organiserad brottslighet"
  - type: samarbetar-med
    target: "[[statens-jordbruksverk]]"
    context: "Skatt på jordbruksstöd, enskilda näringsidkare inom jordbruk"
  - type: samarbetar-med
    target: "[[kommerskollegium]]"
    context: "Utrikeshandelsstatistik (Intrastat-data)"
sources:
  - "[[myndighet-skatteverket]]"
tags:
  - myndighet
  - skatteverket
  - beskattning
  - punktskatt
situationer:
  - import-moms
  - punktskatt-alkohol
  - punktskatt-tobak
  - punktskatt-energi
  - folkbokforing
  - skattebrott-utredning
---

## Sammanfattning

Skatteverket är Sveriges skattemyndighet och lyder under regeringen (Finansdepartementet), men är en fristående myndighet — regeringen kan inte påverka enskilda skattefrågor. Uppdraget är att säkerställa finansieringen av den offentliga sektorn och bidra till ett väl fungerande samhälle genom att motverka brottslighet.

I tullsammanhang är Skatteverket primärt relevant för **moms vid import** (samordnas med Tullverket), **punktskatter** på alkohol, tobak, energi och nikotinprodukter, samt **punktskattekontroll av transporter** (delat ansvar med Tullverket).

## Ansvarsområde

Skatteverkets huvuduppgifter enligt egen beskrivning:
- Ta in skatter (inkomstskatt, moms, punktskatt, socialavgifter)
- Sköta folkbokföring, äktenskapsregistret och fastighetstaxering
- Registrera bouppteckningar
- Vara borgenär åt staten
- Utfärda id-kort för folkbokförda personer
- Utreda skattebrott

### Tullrelevanta delar

**Moms vid import:** Staten tar ut moms på varor som importeras. Tullverket tar ut momsen operativt vid gränsen, men den tillförs Skatteverkets domän. Sedan 2015 hanterar momsregistrerade företag importmoms i sin vanliga momsdeklaration (reverse charge).

**Punktskatter:** På bränsle, energi, alkohol och tobak tar staten ut punktskatt. Skatteverket administrerar tillstånden (upplagshavare, registrerad mottagare/avsändare) och tar in skatten. Tullverket gör operativ kontroll vid transport inom [[lagen-om-punktskattekontroll|LPK]].

## Befogenheter

| Område | Befogenhet |
|--------|-----------|
| Uppbörd | Fastställa och ta in skatter, besluta om skattetillägg |
| Kontroll | Skatterevisioner, skattekontroller, folkbokföringskontroller |
| Register | Personnummer, folkbokföring, äktenskapsregister, bouppteckningar |
| Punktskatt | Utfärda tillstånd (upplagshavare, registrerad mottagare) |
| Borgenär | Bevaka statens fordringar, ansöka om konkurs |
| Brottsutredning | Utreda skattebrott, ekonomisk brottslighet |
| Samverkan | Myndighetsgemensamt arbete mot grov organiserad brottslighet |

## Relaterade lagar (tullrelevant urval)

**Moms:**
- [[mervardesskattelagen]] — SFS 2023:200

**Punktskatter:**
- [[lagen-om-alkoholskatt]] — SFS 2022:156
- [[tobaksskattelagen]] — SFS 2022:155
- [[lagen-om-skatt-pa-energi]] — SFS 1994:1776
- [[lagen-om-skatt-pa-nikotinhaltiga-produkter]] — SFS 2022:1696
- Lag om skatt på kemikalier (kemikalieskatt) — SFS 2016:1067

**Skattebrott:**
- [[skattebrottslagen]] — SFS 1971:69

**Kontroll:**
- [[lagen-om-punktskattekontroll]] — SFS 1998:506 (delat ansvar med [[tullverket]])

**Folkbokföring:**
- Folkbokföringslagen — SFS 1991:481

## Samarbeten

| Myndighet | Samarbetsområde |
|-----------|----------------|
| [[tullverket]] | Moms vid import, punktskattekontroll av transporter, grov organiserad brottslighet |
| [[statens-jordbruksverk]] | Beskattning av jordbruksstöd, enskilda näringsidkare |
| [[kommerskollegium]] | Utrikeshandelsstatistik (Intrastat) |
| Polismyndigheten | Ekonomisk brottslighet |
| Ekobrottsmyndigheten | Grov ekonomisk brottslighet |
| Kronofogdemyndigheten | Indrivning av skattefordringar |

## Organisation

- **Chef:** Generaldirektör
- **Huvudkontor:** Solna
- **Fristående myndighet** under regeringen — regeringen kan inte påverka enskilda skattefrågor
- **Styrning:** Regeringen via årligt regleringsbrev + instruktionsförordning
- **Kontor:** Nationellt spritt med servicekontor i flera städer

## Praktisk tillämpning

> [!situation] Moms vid import från tredje land
> Företag importerar varor via [[tullverket|Tullverket]]. Tullverket tar ut tull och registrerar importen. Momsregistrerat företag redovisar momsen i sin momsdeklaration hos Skatteverket (reverse charge).

> [!situation] Punktskatt på importerad alkohol
> Vid privatimport: Tullverket tar ut [[lagen-om-alkoholskatt|alkoholskatt]] vid gränsen. Vid kommersiell handel: upplagshavare hos Skatteverket hanterar skatten via [[lagen-om-punktskattekontroll|LPK]].

> [!situation] Misstänkt punktskattebrott i transport
> Tullverket gör operativ kontroll under [[lagen-om-punktskattekontroll]]. Skatteverket äger skatteregelverket och beslutar om skattetillägg/efterbeskattning.

> [!situation] Grov ekonomisk brottslighet — bolagsled
> Myndighetsgemensamt arbete: Skatteverket ([[skattebrottslagen]]) + Tullverket ([[smugglingslagen]]) + Polismyndigheten + Ekobrottsmyndigheten samverkar vid utredning av kriminella nätverk.
