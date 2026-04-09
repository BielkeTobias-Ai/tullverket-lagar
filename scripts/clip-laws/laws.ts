export interface Law {
  url: string;
  filename: string;
}

export const LAWS: Law[] = [
  // 1. HOG PRIORITET — Brottsbekampning
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/skattebrottslag-197169_sfs-1971-69/", filename: "skattebrottslagen-1971-69" },
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/terroristbrottslag-2022666_sfs-2022-666/", filename: "terroristbrottslagen-2022-666" },
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-1951649-om-straff-for-vissa-trafikbrott_sfs-1951-649/", filename: "trafikbrottslagen-1951-649" },
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-19911969-om-forbud-mot-vissa-dopningsmedel_sfs-1991-1969/", filename: "lagen-om-forbud-mot-vissa-dopningsmedel-1991-1969" },
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-199942-om-forbud-mot-vissa-halsofarliga_sfs-1999-42/", filename: "lagen-om-forbud-mot-vissa-halsofarliga-varor-1999-42" },

  // 2. HOG PRIORITET — Stod och befogenheter
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/tullforordning-2016287_sfs-2016-287/", filename: "tullforordningen-2016-287" },
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/kustbevakningslag-201932_sfs-2019-32/", filename: "kustbevakningslagen-2019-32" },
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-1996701-om-tullverkets-befogenheter-vid_sfs-1996-701/", filename: "inregranslagen-1996-701" },
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/brottsdatalag-20181177_sfs-2018-1177/", filename: "brottsdatalagen-2018-1177" },

  // 3. MEDEL PRIORITET — Varurestriktioner
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-1990415-om-tills_sfs-1990-415", filename: "forordning-om-tillstand-for-farliga-foremal-1990-415" },
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-19921300-om-krigsmateriel_sfs-1992-1300/", filename: "lagen-om-krigsmateriel-1992-1300" },
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-20001064-om-kontroll-av-produkter-med_sfs-2000-1064/", filename: "lagen-om-kontroll-av-dubbla-anvandningsomraden-2000-1064" },
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/kulturmiljolag-1988950_sfs-1988-950/", filename: "kulturmiljolagen-1988-950" },
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/artskyddsforordning-2007845_sfs-2007-845/", filename: "artskyddsforordningen-2007-845" },
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-2009366-om-handel-med-lakemedel_sfs-2009-366/", filename: "lagen-om-handel-med-lakemedel-2009-366" },
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/livsmedelslag-2006804_sfs-2006-804/", filename: "livsmedelslagen-2006-804" },
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/stralskyddslag-2018396_sfs-2018-396/", filename: "stralskyddslagen-2018-396" },
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/miljobalk-1998808_sfs-1998-808/", filename: "miljobalken-1998-808" },
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-20182088-om-tobak-och-liknande-produkter_sfs-2018-2088/", filename: "lagen-om-tobak-och-liknande-produkter-2018-2088" },

  // 4. MEDEL PRIORITET — Punktskatt och ekonomisk brottslighet
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-2022155-om-tobaksskatt_sfs-2022-155/", filename: "tobaksskattelagen-2022-155" },
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-19941776-om-skatt-pa-energi_sfs-1994-1776/", filename: "lagen-om-skatt-pa-energi-1994-1776" },
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-2014307-om-straff-for-penningtvattsbrott_sfs-2014-307/", filename: "lagen-om-straff-for-penningtvattsbrott-2014-307" },
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-2017630-om-atgarder-mot-penningtvatt-och_sfs-2017-630/", filename: "lagen-om-atgarder-mot-penningtvatt-2017-630" },
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-199695-om-vissa-internationella-sanktioner_sfs-1996-95/", filename: "lagen-om-vissa-internationella-sanktioner-1996-95" },

  // 5. TIER 1 — Komplement och wiki-refererade
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/tullbefogenhetsforordning-2024759_sfs-2024-759/", filename: "tullbefogenhetsforordningen-2024-759" },
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/inregransforordning-1996702_sfs-1996-702/", filename: "inregransforordningen-1996-702" },
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-1992860-om-kontroll-av-narkotika_sfs-1992-860/", filename: "lagen-om-kontroll-av-narkotika-1992-860" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-19921303-om-krigsmateriel_sfs-1992-1303", filename: "forordningen-om-krigsmateriel-1992-1303" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-20001217-om-kontroll-av-produkter_sfs-2000-1217", filename: "forordningen-om-dual-use-2000-1217" },
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-19941547-om-tullfrihet-m-m_sfs-1994-1547/", filename: "lagen-om-tullfrihet-1994-1547" },
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-19941605-om-tullfrihet-m-m_sfs-1994-1605/", filename: "forordningen-om-tullfrihet-1994-1605" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-19941551-om-frihet-fran-skatt-vid-import_sfs-1994-1551", filename: "lagen-om-frihet-fran-skatt-vid-import-1994-1551" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-1999446-om-proviantering-av-fartyg-och_sfs-1999-446", filename: "lagen-om-proviantering-1999-446" },
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/rattegangsbalk-1942740_sfs-1942-740/", filename: "rattegangsbalken-1942-740" },

  // 6. TIER 2 — Skatter och punktskatter
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2022181-om-skatt-pa-energi_sfs-2022-181/", filename: "forordningen-om-skatt-pa-energi-2022-181" },
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2022182-om-tobaksskatt_sfs-2022-182/", filename: "forordningen-om-tobaksskatt-2022-182" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-2022156-om-alkoholskatt_sfs-2022-156", filename: "lagen-om-alkoholskatt-2022-156" },
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-2022183-om-alkoholskatt_sfs-2022-183/", filename: "forordningen-om-alkoholskatt-2022-183" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-1998506-om-punktskattekontroll-av_sfs-1998-506", filename: "lagen-om-punktskattekontroll-1998-506" },
  { url: "https://riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-1998518-om-punktskattekontroll-av_sfs-1998-518", filename: "forordningen-om-punktskattekontroll-1998-518" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-2018696-om-skatt-pa-vissa-nikotinhaltiga_sfs-2018-696", filename: "lagen-om-skatt-pa-nikotinhaltiga-produkter-2018-696" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-2018704-om-skatt-pa-vissa_sfs-2018-704", filename: "forordningen-om-skatt-pa-nikotinhaltiga-produkter-2018-704" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-20161067-om-skatt-pa-kemikalier-i-viss_sfs-2016-1067", filename: "lagen-om-skatt-pa-kemikalier-2016-1067" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-2017214-om-skatt-pa-kemikalier-i_sfs-2017-214", filename: "forordningen-om-skatt-pa-kemikalier-2017-214" },
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/mervardesskattelag-2023200_sfs-2023-200/", filename: "mervardesskattelagen-2023-200" },
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/mervardesskatteforordning-2023328_sfs-2023-328/", filename: "mervardesskatteforordningen-2023-328" },

  // 7. TIER 2 — Import/export och djur/växtskydd
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-1997969_sfs-1997-969", filename: "forordningen-om-import-och-exportreglering-1997-969" },
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/forordning-1999454-om-proviantering-av-fartyg_sfs-1999-454/", filename: "forordningen-om-proviantering-1999-454" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-20081049-om-forbud-mot-utslappande-pa_sfs-2008-1049", filename: "lagen-om-forbud-mot-pals-av-katt-och-hund-2008-1049" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-20111070-om-handel-med-salprodukter_sfs-2011-1070", filename: "lagen-om-handel-med-salprodukter-2011-1070" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-20101491-om-handel-med-salprodukter_sfs-2010-1491", filename: "forordningen-om-handel-med-salprodukter-2010-1491" },

  // 8. TIER 2 — Transport och farligt gods
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-2006263-om-transport-av-farligt-gods_sfs-2006-263", filename: "lagen-om-transport-av-farligt-gods-2006-263" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-2006311-om-transport-av-farligt_sfs-2006-311", filename: "forordningen-om-transport-av-farligt-gods-2006-311" },
  { url: "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-1976661-om-immunitet-och-privilegier-i_sfs-1976-661/", filename: "lagen-om-immunitet-och-privilegier-1976-661" },
];
