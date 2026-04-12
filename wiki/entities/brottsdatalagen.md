---
title: Brottsdatalagen
type: entity
entity_type: lag
source_type: lag
sfs: "2018:1177"
short_name: Brottsdatalagen
status: gallande
created: 2026-04-09
updated: 2026-04-09
befogenheter:
  - behöriga myndigheter får behandla personuppgifter i brottsbekämpande syfte
  - tillsynsmyndigheten (IMY) får utfärda förelägganden och sanktionsavgifter
  - registrerade har rätt att begära information, rättelse och radering
tillampningsomrade: >
  Gäller behöriga myndigheters behandling av personuppgifter för att förebygga, förhindra, utreda, avslöja eller lagföra brott, verkställa straffrättsliga påföljder, samt upprätthålla allmän ordning och säkerhet. Genomför EU:s dataskyddsdirektiv 2016/680.
straffskala:
  - brott: otillåten behandling av personuppgifter
    straff: "administrativ sanktionsavgift (ej straffrättslig påföljd)"
situationer:
  - tullverkets-behandling-av-personuppgifter-i-tullkontroll
  - kustbevakningens-personuppgiftsbehandling-i-brottsbekampning
  - polisens-register-over-misstankta-vid-tullbrottsutredning
  - utbyte-av-personuppgifter-mellan-tullverket-och-polisen
connections:
  - type: kompletterar
    target: "[[tullbefogenhetslagen]]"
    context: "Tullverket är behörig myndighet; brottsdatalagen reglerar hur personuppgifter insamlade med stöd av tullbefogenhetslagen får behandlas"
  - type: kompletterar
    target: "[[kustbevakningslagen]]"
    context: "Kustbevakningen är behörig myndighet; brottsdatalagen styr personuppgiftsbehandling i kustbevakningens brottsbekämpande verksamhet"
  - type: overlappar
    target: "[[kustbevakningslagen]]"
    context: "Kustbevakningen är behörig myndighet under brottsdatalagen; personuppgiftsbehandling i kustbevakningens brottsbekämpning regleras av båda lagarna"
  - type: hanvisar-till
    target: "[[lagen-om-atgarder-mot-penningtvatt]]"
    context: "Penningtvättslagen 5 kap. hänvisar till brottsdatalagen för personuppgiftsbehandling i brottsbekämpande verksamhet"
  - type: overlappar
    target: "[[passlagen]]"
    context: "Speglad fran [[passlagen]] — Biometriska data som tas vid passkontroll regleras av dataskyddsregler; 5 a § kräver omedelbar förstöring"
tags:
  - personuppgifter
  - dataskydd
  - brottsbekampning
  - tullverket
  - kustbevakning
sources:
  - "[[brottsdatalagen-2018-1177]]"
---

## Sammanfattning

Brottsdatalagen (2018:1177) genomför EU:s dataskyddsdirektiv (2016/680) och reglerar hur behöriga myndigheter — däribland Tullverket, Kustbevakningen, Polismyndigheten och Tullverkets kontrollenheter — får behandla personuppgifter i brottsförebyggande, utredande och lagförande verksamhet. Lagen balanserar skyddet för enskildas integritet mot myndigheternas behov av effektiv personuppgiftsbehandling. Tillsynen utövas av Integritetsskyddsmyndigheten (IMY).

## Befogenheter

- **Behöriga myndigheter:** Får behandla personuppgifter när det är nödvändigt för att utföra uppgifter inom brottsbekämpning, brottsutredning, lagföring, verkställighet av påföljder, eller upprätthållande av allmän ordning och säkerhet
- **Ändamålsbegränsning:** Personuppgifter får bara behandlas för de ändamål för vilka de samlades in; strikt proportionalitetskrav
- **Känsliga uppgifter:** Biometriska och genetiska uppgifter kräver särskild reglering; sökförbud på känsliga uppgifter
- **Automatiserade beslut:** Den registrerade har rätt att få ett helt automatiserat beslut prövat av en människa (2 kap. 19 §)
- **IMY:** Kan utfärda varningar, förelägganden, förbjuda behandling och besluta om sanktionsavgifter

## Straffbestämmelser

Brottsdatalagen innehåller inga straffrättsliga påföljder. Sanktioner är administrativa:

| Överträdelse | Sanktion |
|---|---|
| Brott mot behandlingsbestämmelserna | Sanktionsavgift (6 kap.) |
| Underlåtenhet att anmäla personuppgiftsincident | Sanktionsavgift |
| Bristande samarbete med IMY | Sanktionsavgift |
| Fortsatt otillåten behandling | IMY kan förbjuda behandlingen |

## Kopplingar

| Typ | Lag | Kontext |
|---|---|---|
| kompletterar | [[tullbefogenhetslagen]] | Tullverket är behörig myndighet; brottsdatalagen reglerar personuppgiftsbehandling vid tullkontroll |
| kompletterar | [[kustbevakningslagen]] | Kustbevakningen är behörig myndighet; brottsdatalagen styr dess personuppgiftshantering |
| hanvisar-till | [[lagen-om-atgarder-mot-penningtvatt]] | Penningtvättslagen 5 kap. hänvisar till brottsdatalagen |

## Nyckelbestämmelser

- **1 kap. 2 §** — Tillämpningsområde: brottsförebyggande, -utredande och lagförande verksamhet
- **1 kap. 4 §** — Undantag: gäller inte Säkerhetspolisens nationella säkerhetsarbete eller Försvarsmakten
- **2 kap. 1 §** — Rättslig grund: behandling får ske om nödvändigt för att utföra uppdraget
- **2 kap. 9-10 §§** — Åtskillnad mellan faktauppgifter och bedömningar; kategorier av registrerade
- **2 kap. 11 §** — Känsliga personuppgifter: ras, etnicitet, religion, hälsa m.m. — strikt begränsning
- **2 kap. 19 §** — Rätt till mänsklig granskning av automatiserade beslut
- **3 kap. 9 §** — Anmälan av personuppgiftsincident till IMY inom 72 timmar
- **4 kap.** — Registrerades rättigheter: information, rättelse, radering
- **6 kap.** — Sanktionsavgifter

## Praktisk tillämpning

> [!situation] Typisk situation
> Tullverket samlar in personuppgifter (t.ex. passuppgifter, fordonsdata, deklarationsuppgifter) vid gränskontroll. Brottsdatalagen styr hur dessa uppgifter får lagras, bearbetas och delas med Polismyndigheten eller Kustbevakningen i samband med brottsutredning.

> [!situation] Typisk situation
> Vid utbyte av personuppgifter om misstänkt person mellan Tullverket och utländsk tullmyndighet reglerar brottsdatalagens 2 kap. 20-20 a §§ villkoren för sådant utbyte med EU-länder.

- Tullverket måste ha dataskyddsombud och genomföra konsekvensbedömningar vid ny typ av behandling
- Uppgifter om misstänkta måste hållas åtskilda från uppgifter om brottsoffer och andra berörda (2 kap. 9 §)
- Personuppgifter i tullbrottsutredningar ska raderas när de inte längre behövs (2 kap. 17 §)
