---
title: Logg
type: overview
created: 2026-04-07
updated: 2026-04-08
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
