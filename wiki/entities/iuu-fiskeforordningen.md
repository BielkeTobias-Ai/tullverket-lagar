---
title: IUU-fiskeförordningen
type: entity
entity_type: lag
source_type: eu-forordning
celex: "32008R1005"
short_name: IUU-förordningen
status: gallande
created: 2026-04-11
updated: 2026-04-11
befogenheter:
  - kräva fångstintyg för all import av havsfiskeriprodukter
  - neka hamntillträde för tredjelands fiskefartyg utan förhandsanmälan
  - neka import av fiskeriprodukter utan godkänt fångstintyg
  - föra upp fartyg på IUU-förteckningen
  - vidta handelsåtgärder mot icke-samarbetande tredjeländer
  - bevilja APEO-status (godkänd ekonomisk aktör inom fiske)
tillampningsomrade: >
  Förebyggande, motverkande och undanröjande av olagligt, orapporterat och
  oreglerat fiske (IUU). Gäller import och export av havsfiskeriprodukter till
  och från EU, hamntillträde för tredjelands fiskefartyg och handel med
  fiskeriprodukter inom gemenskapen.
situationer:
  - import-av-fiskeriprodukter
  - hamntilltrade-tredjelands-fartyg
  - olagligt-fiske
  - smuggling-av-fiskeriprodukter
connections:
  - type: kompletterar
    target: "[[fiskerikontrollforordningen]]"
    context: "IUU-förordningen specificerar åtgärder mot olagligt fiske; fiskerikontrollförordningen ger det breda kontrollsystemet"
  - type: hanvisar-till
    target: "[[iuu-genomforande]]"
    context: "Moderförordning; genomförandeförordning (EG) nr 1010/2009 fastställer tillämpningsföreskrifter"
  - type: overlappar
    target: "[[smugglingslagen]]"
    context: "Import av fiskeriprodukter utan giltigt fångstintyg kan utgöra smuggling vid tullkontroll"
tags:
  - eu-forordning
  - fiske
  - iuu
  - import-kontroll
  - fangstintyg
sources:
  - "[[iuu-fiske-eg-1005-2008]]"
---

## Sammanfattning

IUU-fiskeförordningen (EG) nr 1005/2008 inrättar EU:s system för att bekämpa olagligt, orapporterat och oreglerat (IUU) fiske. Kärnan är ett certifieringssystem med fångstintyg (catch certificate) som ska valideras av flaggstaten och medfölja all import av havsfiskeriprodukter till EU. EU är världens största marknad för fiskeriprodukter och bär ett särskilt ansvar för att importerade produkter inte härrör från IUU-fiske. Förordningen kompletteras av genomförandeförordning (EG) nr 1010/2009.

## Nyckelbestämmelser

| Artikel | Innehåll |
|---------|---------|
| Art. 4–9 | Hamntillträde: förhandsanmälan 3 arbetsdagar, inspektion av 5 % av landningar |
| Art. 12–19 | Fångstcertifieringssystemet: utfärdande, validering, importkontroll |
| Art. 16 | 3-dagars frist för inlämning av fångstintyg vid EU-gränsen |
| Art. 17 | Godkänd ekonomisk aktör (APEO) — förenklat förfarande |
| Art. 27–30 | IUU-fartygsförteckning |
| Art. 31–38 | Icke-samarbetande tredjeländer och handelsåtgärder |
| Art. 42–50 | Sanktioner och ömsesidigt bistånd |

## Kopplingar

| Typ | Mål | Kontext |
|-----|-----|---------|
| kompletterar | [[fiskerikontrollforordningen]] | Bildar tillsammans det samlade kontrollsystemet |
| hanvisar-till | [[iuu-genomforande]] | Genomförandeförordningen preciserar tillämpningen |
| overlappar | [[smugglingslagen]] | Import utan fångstintyg kan betraktas som smuggling |

## Praktisk tillämpning

Tullmyndigheten är behörig att kontrollera fångstintygets giltighet vid import av fiskeriprodukter. Import utan godkänt fångstintyg ska nekas. Tullverket samverkar med Havs- och vattenmyndigheten (HaV) som är den behöriga myndigheten för fiskeriövervakning i Sverige.

> [!situation] Typisk situation
> Import av räkor från tredjeländer: fångstintyg validerat av flaggstaten krävs. Vid avsaknad: Tullverket nekar import + HaV underrättas. Om avsiktlig: [[smugglingslagen]] kan aktualiseras.
