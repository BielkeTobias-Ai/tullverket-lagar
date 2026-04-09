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
];
