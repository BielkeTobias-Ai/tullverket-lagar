---
title: Förordningen om elektroniska system för UCC (EU) 2025/512
type: entity
entity_type: lag
source_type: eu-forordning
celex: "32025R0512"
short_name: UCC IT-förordningen
status: gallande
created: 2026-04-11
updated: 2026-04-11
befogenheter:
  - fastställa tekniska arrangemang för UCC:s elektroniska system
  - specificera komponenterna i CDS, EORI, AEO, ICS2, NCTS, AES m.fl.
  - reglera systemägarskap, dataskydd och systemsäkerhet
  - fastställa alternativa lösningar vid systemfel
  - reglera åtkomst till centrala komponenter (inkl. kommissionens EORI-åtkomst)
  - specificera övergångsarrangemang för AES och andra system
tillampningsomrade: >
  Tekniska och organisatoriska arrangemang för de elektroniska system som krävs för tillämpningen av unionens tullkodex (UCC). Ersätter genomförandeförordning (EU) 2023/1070 och täcker 14 centrala IT-system från CDS och EBTI till ICS2, AES och NCTS.
situationer:
  - systemfel-it
  - aeo-elektronisk-ansokan
  - summarisk-inforseldeklaration-ics2
  - transitering-ncts
  - export-aes
  - bindande-klassificeringsbesked-ebti
  - eori-registrering
  - garanti-gum
connections:
  - type: kompletterar
    target: "[[ucc]]"
    context: "Specificerar IT-infrastrukturen för UCC:s elektroniska system per artiklarna 8.1 b, 17 och 50.1"
  - type: hanvisar-till
    target: "[[genomforandeforordningen]]"
    context: "Ersätter delar av 2015/2447 avseende tekniska arrangemang för IT-systemen"
  - type: overlappar
    target: "[[ucc-enda-kontaktpunkt]]"
    context: "EU CSW-CERTEX koordineras med IT-infrastrukturen i 2025/512 (bl.a. EORI-integration)"
  - type: overlappar
    target: "[[ucc-elektroniska-system-2023]]"
    context: "Speglad fran [[ucc-elektroniska-system-2023]] — 2025-versionen ersätter 2023-versionen när tidsplaner revideras ytterligare"
tags:
  - eu-forordning
  - tullkodex
  - elektroniska-system
  - it-infrastruktur
  - ucc-familj
sources:
  - "[[ucc-elektroniska-system-eu-2025-512]]"
---

## Sammanfattning

Kommissionens genomförandeförordning (EU) 2025/512, antagen den 13 mars 2025, fastställer de tekniska arrangemangen för de elektroniska system som behövs för tillämpningen av unionens tullkodex (UCC, 952/2013). Den ersätter den tidigare förordningen (EU) 2023/1070 och uppdaterar reglerna för att spegla att garantihanteringssystemet (GUM) nu är fullt operativt, ändrade arrangemang för det automatiserade exportsystemet (AES) och uppdaterad dataåtkomst för EORI. Förordningen täcker 14 centrala IT-system och specificerar deras komponenter, funktioner och sammankopplingar.

## Befogenheter / Nyckelfunktioner

De elektroniska system som regleras av förordningen:

| System | Funktion |
|--------|---------|
| CDS | Systemet för tullbeslut — harmoniserar ansöknings- och beslutsprocesser |
| UUM&DS | Enhetlig användaradministration och digital signatur |
| EBTI | Europeiska BTI-systemet — bindande klassificeringsbesked |
| EORI 2 | Uppgraderat system för registrering och identifiering av ekonomiska aktörer |
| AEO | Systemet för godkända ekonomiska aktörer — ansökningar och tillstånd |
| ICS2 | Importkontrollsystem 2 — summariska införseldeklarationer |
| INF SP | Informationsblad för särskilda förfaranden |
| REX | Registrerade exportörer — ursprungscertifiering |
| PoUS | Bevis för tullstatus som unionsvaror (T2L/T2LF) |
| SURV3 | Surveillance 3 — övervaknings- och analysdata |
| GUM | Säkerhetsförvaltningssystem för garantier (exkl. transitering) |
| AES | Automatiserade exportsystemet |
| NCTS | Nya datoriserade transiteringssystemet |
| CCI | Centraliserad tullklarering för import |
| EUCTP | EU:s tullportal för näringsidkare — gemensam ingång |

## Nyckelbestämmelser

| Artikel/ämne | Innehåll |
|--------------|---------|
| Tillämpningsområde (art. 1) | De 14 centrala systemen listas explicit |
| Tekniska arrangemang | Specifikationer för utveckling, testning, drift och underhåll |
| Dataskydd | GDPR och institutionernas dataskyddsregler; gemensamt personuppgiftsansvar |
| Systemägarskap | Ansvarsfördelning mellan kommissionen och MS |
| Systemsäkerhet | Cybersäkerhetskrav; åtgärder vid systemfel |
| EORI-åtkomst | Kommissionen ges åtkomst till centrala EORI-komponenten |
| Nordirland/Windsorram | ICS2-data för UK/Nordirland regleras per gemensamma kommitténs beslut |
| AES-övergång | MS kan fortsätta med central konverterare för AES under förlängd period |
| Datalagring | Lagringsperioder fastställda för fullständig riskhantering och efterhandskontroll |

## Kopplingar

| Lag/förordning | Typ | Beskrivning |
|----------------|-----|-------------|
| [[ucc]] | kompletterar | Specificerar IT-systemen som krävs för UCC:s tillämpning |
| [[genomforandeforordningen]] | hanvisar-till | Ersätter delar av 2015/2447 avseende tekniska IT-arrangemang |
| [[ucc-enda-kontaktpunkt]] | overlappar | EU CSW-CERTEX koordineras med IT-infrastrukturen; EORI som gemensam identifierare |

## Praktisk tillämpning

**Situation — ICS2-deklaration:** Flygfrakt ankommer till Arlanda. ICS2-systemet (reglerat av 2025/512) samlar in uppgifterna i den summariska införseldeklarationen och genomför säkerhets- och skyddsriskanalys.

**Situation — NCTS-transitering:** Varor transiteras via flera MS. NCTS (reglerat av 2025/512) hanterar den elektroniska transiteringsdeklarationen och kommunikationen mellan avsändnings- och destinationstullkontor.

**Situation — AEO-elektronisk ansökan:** Speditionsföretag ansöker om AEO-C via EUCTP-portalen. AEO-systemet (reglerat av 2025/512) hanterar ansökan, konsultation och tillståndsutfärdande.

**Situation — Systemfel:** Om ett centralt elektroniskt system (t.ex. CDS) tillfälligt slutar fungera, anger 2025/512 vilka alternativa lösningar och reservrutiner som ska användas för att säkerställa kontinuitet.
