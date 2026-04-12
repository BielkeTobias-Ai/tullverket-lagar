---
title: "Lag (2004:1100) om luftfartsskydd"
type: entity
entity_type: lag
source_type: lag
sfs: "2004:1100"
short_name: Luftfartsskyddslagen
status: gallande
created: 2026-04-12
updated: 2026-04-12
befogenheter:
  - sakerhetskontrollera passagerare och bagage pa flygplats
  - kroppsvisitera personer inom flygplatsomradet
  - undersoka fordon och forvaringsstellen pa flygplats
  - avvisa eller avlagsna person som vagrar kontroll
tillampningsomrade: >
  Säkerhetsskydd på flygplatser för civil luftfart. Kompletterar EU-förordning
  (EG) nr 300/2008. Gäller passagerare, personal och gods på flygplatsområdet.
situationer:
  - sakerhetskontroll-flygplats
  - beslag-farliga-foremal-flygplats
connections:
  - type: kompletterar
    target: "[[luftfartslagen]]"
    context: "Luftfartsskydd är ett delområde inom den civila luftfartens ramlag"
  - type: hanvisar-till
    target: "[[tullagen]]"
    context: "Tullkontroll på flygplats sker parallellt med luftfartsskyddet"
  - type: overlappar
    target: "[[smugglingslagen]]"
    context: "Säkerhetskontroller kan avslöja smuggelgods — men luftfartsskydd och tullkontroll är separata system"
tags:
  - luftfart
  - sakerhet
  - flygplats
  - sakerhetskontroll
sources:
  - "[[lagen-om-luftfartsskydd-2004-1100]]"
straffskala: []  # TODO: fylla i fran rakallan
---

## Sammanfattning

Luftfartsskyddslagen kompletterar EU:s gemensamma regler för civil luftfartsäkerhet. Lagen reglerar säkerhetskontroll av passagerare, bagage och fordon på flygplatser. Polismyndigheten leder kontrollen; flygplatshavaren ansvarar för resurser och avgifter. Tullverkets parallella kontrollsystem styrs av tullagstiftningen, inte denna lag.

## Nyckelbestämmelser

| Paragraf | Innehåll |
|----------|----------|
| 1 § | Kompletterar EU-förordning (EG) nr 300/2008 |
| 2 § | Säkerhetskontroll utförs av polisman eller Polismyndigheten-förordnad person |
| 3 § | Kroppsvisitation och fordonsundersökning tillåten inom flygplatsområdet |
| 5 § | Farliga föremål kan tas i beslag; vägran leder till avvisning |
| 8 § | Flygplatshavaren ansvarar ekonomiskt för säkerhetsresurser |
| 9–10 §§ | Polismyndigheten / Transportstyrelsen kan besluta om strängare åtgärder |
| 11 § | Säkerhetsavgift per avresande passagerare |

## Kopplingar

| Typ | Entitet | Kontext |
|-----|---------|---------|
| kompletterar | [[luftfartslagen]] | Luftfartsskydd inom luftfartens ramlag |
| hanvisar-till | [[tullagen]] | Parallell kontrollsystem för tullandamål |
| overlappar | [[smugglingslagen]] | Kontroller kan avslöja smuggling |

## Praktisk tillämpning

På en internationell flygplats finns två parallella kontrollsystem:
1. **Luftfartsskyddet** (denna lag) — kontrollerar säkerhetshot mot luftfarten (vapen, sprängmedel). Polisledd.
2. **Tullkontrollen** ([[tullagen]], [[tullbefogenhetslagen]]) — kontrollerar varor, smuggling, valutatransporter. Tullledda.

Fynd vid luftfartsskyddskontroll som tyder på smuggling överlämnas till Tullverket. Fynd vid tullkontroll som tyder på säkerhetshot anmäls till polis.
