---
title: Logg
type: overview
created: 2026-04-07
updated: 2026-04-09
tags:
  - meta
  - logg
sources: []
---

# Logg

Kronologisk aktivitetslogg. Append-only. Varje inlägg har parsbart prefix.

---

## [2026-04-07] init | Wiki initialiserad
Wiki-strukturen skapad. Mappar: `raw/`, `wiki/sources/`, `wiki/entities/`, `wiki/concepts/`, `wiki/comparisons/`, `wiki/queries/`. Schema: `CLAUDE.md`. Grundfiler: `index.md`, `log.md`, `overview.md`. Redo för första ingest.

## [2026-04-07] ingest | Smugglingslagen (2000:1225)
Bearbetade lagtext från riksdagen.se. Skapade: [[smugglingslagen-2000-1225]] (källa), [[smugglingslagen]] (entitet), [[smuggling]] (koncept). Uppdaterade: [[index]], [[overview]]. Lagen är central strafflag för gränsbrott med subsidiaritetsregel. 2024-reformen flyttade befogenheter till Tullbefogenhetslagen.

## [2026-04-07] update | CLAUDE.md schema utökat
Lade till: lagentitets-frontmatter (sfs, befogenheter, straffskala, connections, situationer), kopplingstyper-sektion, lagentitetens innehållsmall, situationscallout, CONNECT- och SITUATION-workflows, utökad LINT-checklista.

## [2026-04-08] ingest | Tullbefogenhetslagen (2024:710)
Bearbetade lagtext från riksdagen.se (102k tecken — stor lag). Skapade: [[tullbefogenhetslagen-2024-710]] (källa), [[tullbefogenhetslagen]] (entitet), [[brottsbekämpning]] (koncept). Uppdaterade: [[smugglingslagen]] (lade till kompletteras-av-koppling), [[index]], [[overview]]. Lagen är den andra halvan av 2024-reformen — ger tulltjänstemän befogenheter i tre sfärer: kontroll, brottsupptäckt, brottsutredning. Hänvisar till alla 8 fas 1-lagar.

## [2026-04-08] ingest | Narkotikastrafflagen (1968:64)
Skapade: [[narkotikastrafflagen-1968-64]] (källa), [[narkotikastrafflagen]] (entitet). Kort lag (9 §§) men central — all olovlig befattning med narkotika. Överlappar med [[smugglingslagen]] §6. Sedan 2023 även narkotikaprekursorer (§3b).

## [2026-04-08] ingest | Vapenlagen (1996:67)
Skapade: [[vapenlagen-1996-67]] (källa), [[vapenlagen]] (entitet). Stor lag med 11 kapitel. Ger tulltjänstemän direkt beslagsrätt (9:6) och omhändertaganderätt (6:4). Olovlig införsel → smugglingslagen (9:4). Speciallag till [[knivlagen]].

## [2026-04-08] ingest | Knivlagen (1988:254)
Skapade: [[knivlagen-1988-254]] (källa), [[knivlagen]] (entitet). Kort lag (4 §§). Förbud mot knivar på allmän plats. Vapenlagen går före för föremål den är tillämplig på (§3). Överlappar med smugglingslagen vid gräns.

## [2026-04-08] ingest | Lagen om brandfarliga och explosiva varor (2010:1011)
Skapade: [[lagen-om-brandfarliga-och-explosiva-varor-2010-1011]] (källa), [[lagen-om-brandfarliga-och-explosiva-varor]] (entitet). Tillståndslag — fokus på säkerhet och förebyggande. Subsidiär till smugglingslagen (§30). Högsta straff 10 år för synnerligen grov olovlig hantering explosiva varor.

## [2026-04-08] ingest | Alkohollagen (2010:1622)
Skapade: [[alkohollagen-2010-1622]] (källa), [[alkohollagen]] (entitet). Stor lag (78k tecken). 4 kap. 4 § central för tullkontroll — definierar privatinförsel. Olovlig införsel → smugglingslagen (11:12). Inga kvantitetsgränser i alkohollagen — se skattelagstiftningen.

## [2026-04-08] ingest | Tullagen (2016:253)
Skapade: [[tullagen-2016-253]] (källa), [[tullagen]] (entitet). Kompletteringslagstiftning till EU:s tullkodex. Kap 4 upphävt 2024 — befogenheter i [[tullbefogenhetslagen]]. Sanktioner: tulltillägg (10-20 %), tullförseelse (böter), förseningsavgift (500-1000 kr).

## [2026-04-08] update | Fas 1 komplett
Alla 8 grundlagar ingestade. Uppdaterade: [[smugglingslagen]] (överlappar-kopplingar), [[index]], [[overview]], [[log]]. Kopplingsgraf har 8 entiteter, 2 koncept, 8 källor. Totalt ~40 kopplingar mellan lagar.

## [2026-04-08] update | Råkällor kompletterade + åäö-fix källsidor
Kompletterade råkällor med full lagtext: Narkotikastrafflagen, Knivlagen, LBE (scrapade från riksdagen.se). Fixade åäö i alla 8 källsidor (wiki/sources/) och loggen. Alla wiki-filer har nu korrekt svenska.

## [2026-04-08] query | Springknivar och kaststjärnor i postpaket
SITUATION-test: analyserade vilka lagar som gäller vid fynd av springknivar och kaststjärnor i postpaket. Arkiverad som: [[springknivar-kaststjarnor-postpaket]]. Nyckelinsikt: postspärr (7:8) gäller INTE för knivlagen-föremål — bara narkotika/vapen/explosiva varor. Identifierad lucka: införselförordning för knivar saknas i wikin.

## [2026-04-09] ingest | Kulturmiljölagen (1988:950), Artskyddsförordningen (2007:845), Livsmedelslagen (2006:804), Miljöbalken (1998:808)
Batch-ingest av 4 lagar. Skapade: [[kulturmiljolagen-1988-950]] (källa), [[kulturmiljolagen]] (entitet), [[artskyddsforordningen-2007-845]] (källa), [[artskyddsforordningen]] (entitet), [[livsmedelslagen-2006-804]] (källa), [[livsmedelslagen]] (entitet), [[miljobalken-1998-808]] (källa), [[miljobalken]] (entitet). Uppdaterade: [[index]]. Nyckelkopplingar: kulturmiljölagen → [[smugglingslagen]] (straffhänvisning 5:17), artskyddsförordningen → [[miljobalken]] (speciallag-till), livsmedelslagen → [[smugglingslagen]] (overlapp/subsidiaritet 30 §), miljöbalken → [[artskyddsforordningen]] (overlapp bemyndigandebas).

## [2026-04-09] ingest | Batch A: Skattebrottslagen, Penningtvättsbrottslagen, Trafikbrottslagen, Terroristbrottslagen
Batch-ingest av 4 lagar. Skapade: [[skattebrottslagen-1971-69]], [[skattebrottslagen]], [[lagen-om-straff-for-penningtvattsbrott-2014-307]], [[lagen-om-straff-for-penningtvattsbrott]], [[trafikbrottslagen-1951-649]], [[trafikbrottslagen]], [[terroristbrottslagen-2022-666]], [[terroristbrottslagen]]. Nyckelkopplingar: skattebrottslagen subsidiär till smugglingslagen (1 §), terroristbrottslagen överlappar smugglingslagen vid samröre med vapen/explosiva varor.

## [2026-04-09] ingest | Batch B: Penningtvättsåtgärder, Internationella sanktioner, Brottsdatalagen, Kustbevakningslagen
Batch-ingest av 4 lagar. Skapade: [[lagen-om-atgarder-mot-penningtvatt-2017-630]], [[lagen-om-atgarder-mot-penningtvatt]], [[lagen-om-vissa-internationella-sanktioner-1996-95]], [[lagen-om-vissa-internationella-sanktioner]], [[brottsdatalagen-2018-1177]], [[brottsdatalagen]], [[kustbevakningslagen-2019-32]], [[kustbevakningslagen]]. Nyckelkopplingar: kustbevakningslagen ger kustbevakningstjänsteman = tulltjänsteman (7 kap.), sanktionslagen 14 § → tullbefogenhetslagen.

## [2026-04-09] ingest | Batch C: Tullförordningen, Tobaksskattelagen, Energiskattelagen, Inregränslagen
Batch-ingest av 4 lagar. Skapade: [[tullforordningen-2016-287]], [[tullforordningen]], [[tobaksskattelagen-2022-155]], [[tobaksskattelagen]], [[lagen-om-skatt-pa-energi-1994-1776]], [[lagen-om-skatt-pa-energi]], [[inregranslagen-1996-701]], [[inregranslagen]]. Uppdaterade: [[smugglingslagen]] (overlappar tobaks-/energiskatt), [[tullbefogenhetslagen]] (kompletterar inregränslagen).

## [2026-04-09] ingest | Batch D: Krigsmateriellagen, Dual-use-lagen, Förordning farliga föremål, Strålskyddslagen
Batch-ingest av 4 lagar. Skapade: [[lagen-om-krigsmateriel-1992-1300]], [[lagen-om-krigsmateriel]], [[lagen-om-kontroll-av-dubbla-anvandningsomraden-2000-1064]], [[lagen-om-kontroll-av-dubbla-anvandningsomraden]], [[forordning-om-tillstand-for-farliga-foremal-1990-415]], [[forordning-om-tillstand-for-farliga-foremal]], [[stralskyddslagen-2018-396]], [[stralskyddslagen]]. Nyckelkopplingar: krigsmateriel och dual-use → smugglingslagen (hänvisar-till), farliga föremål ↔ knivlagen (overlappar).

## [2026-04-09] ingest | Batch E: Dopningsmedel, Hälsofarliga varor, Läkemedelshandel, Tobaksprodukter
Batch-ingest av 4 lagar. Skapade: [[lagen-om-forbud-mot-vissa-dopningsmedel-1991-1969]], [[lagen-om-forbud-mot-vissa-dopningsmedel]], [[lagen-om-forbud-mot-vissa-halsofarliga-varor-1999-42]], [[lagen-om-forbud-mot-vissa-halsofarliga-varor]], [[lagen-om-handel-med-lakemedel-2009-366]], [[lagen-om-handel-med-lakemedel]], [[lagen-om-tobak-och-liknande-produkter-2018-2088]], [[lagen-om-tobak-och-liknande-produkter]]. Nyckelkopplingar: dopningsmedel/hälsofarliga varor → smugglingslagen (hänvisar-till), hälsofarliga varor ↔ narkotikastrafflagen (overlappar).

## [2026-04-09] update | Symmetriska kopplingar konsoliderade
Lade till saknade overlappar-kopplingar: smugglingslagen ← kustbevakningslagen/penningtvättsbrottslagen/livsmedelslagen, knivlagen ← förordning farliga föremål, narkotikastrafflagen ← hälsofarliga varor, vapenlagen ← kustbevakningslagen. Uppdaterade: [[index]], [[overview]], [[log]].

## [2026-04-08] connect | Vapenlagen — nya kopplingar kartlagda
CONNECT-test: granskade vapenlagen (raw) mot befintliga connections. Hittade saknad koppling: vapenlagen 1:6 → [[lagen-om-brandfarliga-och-explosiva-varor]] (ammunition/explosiva varor). Uppdaterade entitetssidan. Identifierade 6 externa lagar som refereras men saknar råkälla — listade i `raw/att-hamta.md` med URL:er för Obsidian Clipper.

## [2026-04-09] concept | Punktskatt och Artskydd och miljö
Skapade 2 nya konceptsidor: [[punktskatt]] (punktskatter i tullsammanhang — tobak, alkohol, energi, skattskyldighet vid import, tullbrott vs punktskatteundandragande) och [[artskydd-och-miljo]] (CITES, artskyddsförordningen, miljöbalken, kulturmiljölagen, typiska gränssituationer). Uppdaterade: [[index]]. Källor: [[tobaksskattelagen]], [[lagen-om-skatt-pa-energi]], [[alkohollagen]], [[artskyddsforordningen]], [[miljobalken]], [[kulturmiljolagen]], [[smugglingslagen]].

## [2026-04-09] update | Konceptsidor: penningtvätt och narkotika
Skapade: [[penningtvatt|penningtvätt]] (koncept), [[narkotika]] (koncept). Penningtvätt täcker dubbel lagstiftning (strafflag + preventivlag), förbrott-principen, Tullverkets samverkansroll, typiska situationer (kontanter vid gräns, hawala, bulvanupplägg). Narkotika täcker tre substanslagar (narkotika/dopning/hälsofarliga varor), hierarki och reklassificering, narkotikasmuggling som specialbrott, straffskalejämförelse, arbetsfördelning vid gräns. Uppdaterade: [[index]].

## [2026-04-09] concept | Exportkontroll och vapenreglering
Skapade 2 nya konceptsidor: [[exportkontroll]] (tre pelare: krigsmateriel/dual-use/sanktioner, ISP:s roll, PGS-forordningen, catch-all-klausul, typiska situationer) och [[vapenreglering]] (hela vapenspektrumet vid gransen: skjutvapen/ammunition/explosiva varor/farliga foremal/knivar, lagsamverkan med smugglingslagen, subsidiaritetsregler, Tullverkets befogenheter, postparr-luckan). Uppdaterade: [[index]]. Kallor: [[lagen-om-krigsmateriel]], [[lagen-om-kontroll-av-dubbla-anvandningsomraden]], [[lagen-om-vissa-internationella-sanktioner]], [[vapenlagen]], [[lagen-om-brandfarliga-och-explosiva-varor]], [[forordning-om-tillstand-for-farliga-foremal]], [[smugglingslagen]].

## [2026-04-09] comparison | Pilot-comparisons: 2 jämförelsesidor
Skapade 2 pilot-comparisons: [[smugglingslagen-vs-tullbefogenhetslagen]] (brott vs befogenheter, 2024 års reform, tre sfärer, trigger-punkt, förverkande, flödesschema) och [[narkotika-dopning-halsofarliga-varor]] (tre substanslagar jämförda: hierarkitabell, klassificeringssystem, reklassificering, smugglingslagen-koppling, eget bruk, handläggningssteg). Uppdaterade: [[index]].
