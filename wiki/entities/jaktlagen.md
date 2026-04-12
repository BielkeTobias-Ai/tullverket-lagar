---
title: "Jaktlag"
type: entity
entity_type: lag
sfs: "1987:259"
short_name: Jaktlagen
status: gallande
created: 2026-04-12
updated: 2026-04-12
befogenheter:
  - fridlysa och freda vilt
  - tillstånd till jakt (licens)
  - beslag av vilt och jaktredskap vid jaktbrott (jakträttshavare och kustbevakningstjänstemän)
  - förverkande av vilt och hjälpmedel
tillampningsomrade: >
  Viltvård, rätten till jakt och jaktens bedrivande inom svenskt territorium,
  ekonomisk zon och från svenska fartyg/luftfartyg på fria havet.
situationer:
  - beslag-jaktbrott-kustbevakning
  - smuggling-cites-vilt
  - gransoverskridande-jakt
connections:
  - type: kompletterar
    target: "[[kustbevakningslagen]]"
    context: "Kustbevakningstjänstemän har beslagsbefogenhet vid jaktbrott (47 §)"
  - type: overlappar
    target: "[[smugglingslagen]]"
    context: "Smuggling av skyddat vilt kan aktualisera bägge lagarna; jakthäleri om vilt åtkommits via jaktbrott"
  - type: hanvisar-till
    target: "[[artskyddsforordningen]]"
    context: "Hotat, sällsynt och särskilt skyddsvärt vilt — försvårande omständighet vid grovt jaktbrott"
  - type: overlappar
    target: "[[miljobalken]]"
    context: "Ej dömas till ansvar enligt jaktlagen om gärningen täcks av miljöbalken (46 §)"
  - type: hanvisar-till
    target: "[[rennaringslagen-1971-437]]"
    context: "Samernas jakträtt regleras i rennäringslagen, undantas från jakträttsreglerna"
  - type: speciallag-till
    target: "[[jaktforordningen-1987-905]]"
    context: "Jaktförordningen är genomförandeförordning till jaktlagen"
straffskala:
  - brott: jaktbrott
    straff: "böter till fängelse 1 år"
  - brott: grovt jaktbrott
    straff: "fängelse 6 månader till 4 år"
  - brott: jakthäleri
    straff: "böter till fängelse 1 år"
  - brott: grovt jakthäleri
    straff: "fängelse 6 månader till 4 år"
tags:
  - jakt
  - viltvard
  - brott
  - kustbevakning
  - tier3
sources:
  - "[[jaktlagen-1987-259]]"
---

## Sammanfattning

Grundläggande lag om viltvård, rätten till jakt och jaktens bedrivande. Gäller inom hela Sverige, ekonomisk zon och från svenska fartyg på det fria havet. Reglerar jakträtt, jakttider, tillståndskrav (licensjakt för älg m.fl.) och straffrättsliga påföljder. Kustbevakningstjänstemän har beslagsbefogenhet.

## Nyckelbestämmelser

| Paragraf | Innehåll |
|----------|---------|
| 1 § | Tillämpningsområde — inkl. EEZ och fria havet |
| 3 § | Allt vilt är fredat — jakt kräver lagstöd |
| 43–44 §§ | Jaktbrott: böter/1 år; grovt: 6 mån–4 år |
| 46 § | Jakthäleri: böter/1 år; grovt: 6 mån–4 år |
| 47 § | Beslagsbefogenhet — jakträttshavare och kustbevakningstjänstemän |
| 48–49 §§ | Förverkande av vilt och jaktredskap |

## Kopplingar

| Typ | Entitet | Kontext |
|-----|---------|---------|
| Kompletterar | [[kustbevakningslagen]] | Kustbevakningstjänstemäns beslagsbefogenhet |
| Överlappar | [[smugglingslagen]] | Smuggling av skyddat vilt — bägge lagarna kan tillämpas |
| Hänvisar till | [[artskyddsforordningen]] | Skyddsvärt vilt som försvårande omständighet |
| Överlappar | [[miljobalken]] | Miljöbalken har företräde i vissa fall |
| Hänvisar till | [[rennaringslagen-1971-437]] | Samernas jakträtt undantas |

## Praktisk tillämpning

- **Beslag vid gräns:** Kustbevakningstjänsteman som påträffar någon på bar gärning vid jaktbrott i kustvatten kan ta egendom i beslag
- **CITES-vilt smugglas in:** Jaktlagen + smugglingslagen + artskyddsförordningen kan alla aktualiseras samtidigt
- **Jaktbrott utomlands:** Gäller från svenska fartyg på det fria havet utanför EEZ
