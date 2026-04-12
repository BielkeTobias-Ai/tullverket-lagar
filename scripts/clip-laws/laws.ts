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

  // 9. TIER 3 — Sjöfart och hamnavgifter
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-1981655-om-vissa-avgifter-i-allman-hamn_sfs-1981-655", filename: "lagen-om-avgifter-i-allman-hamn-1981-655" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/kungorelse-1969475-om-uppbord-av-sarskilda_sfs-1969-475", filename: "kungorelsen-om-uppbord-av-sarskilda-avgifter-1969-475" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-19971121-om-farledsavgift_sfs-1997-1121", filename: "forordningen-om-farledsavgift-1997-1121" },

  // 10. TIER 3 — Karantän och hälsoskydd
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-20061570-om-skydd-mot-internationella-hot_sfs-2006-1570", filename: "lagen-om-skydd-mot-internationella-hot-2006-1570" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-2007156-om-skydd-mot_sfs-2007-156", filename: "forordningen-om-skydd-mot-internationella-hot-2007-156" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/kungorelse-1955105-om-tillampning-av-en-mellan_sfs-1955-105", filename: "kungorelsen-om-nordisk-sanitarkontroll-1955-105" },

  // 11. TIER 3 — Sjöfynd och hittegods
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-1918163-med-vissa-bestammelser-om-sjofynd_sfs-1918-163", filename: "lagen-om-sjofynd-1918-163" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-1984985-om-handlaggningen-av_sfs-1984-985", filename: "forordningen-om-sjofynd-1984-985" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-1984983-om-ensamratt-till-bargning_sfs-1984-983", filename: "lagen-om-ensamratt-till-bargning-1984-983" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-1938121-om-hittegods_sfs-1938-121", filename: "lagen-om-hittegods-1938-121" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-19741065-om-visst-stoldgods-mm_sfs-1974-1065", filename: "lagen-om-visst-stoldgods-1974-1065" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-19741066-om-forfarande-med-forverkad_sfs-1974-1066", filename: "lagen-om-forfarande-med-forverkad-egendom-1974-1066" },

  // 12. TIER 3 — Skeppsmätning
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-19941162-om-skeppsmatning_sfs-1994-1162", filename: "forordningen-om-skeppsmatning-1994-1162" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/kungorelse-1954555-angaende-matbrev-for-fart_sfs-1954-555", filename: "kungorelsen-om-matbrev-suezkanalen-1954-555" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/kungorelse-1954556-angaende-matbrev-for-fart_sfs-1954-556", filename: "kungorelsen-om-matbrev-panamakanalen-1954-556" },

  // 13. TIER 3 — Sjöterritorium och tillträde
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-20171272-om-sveriges-sjoterritorium-och_sfs-2017-1272", filename: "lagen-om-sveriges-sjoterritorium-2017-1272" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-20171273-om-sveriges-angransande-zon_sfs-2017-1273", filename: "lagen-om-sveriges-angransande-zon-2017-1273" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/tilltradesforordning-1992118_sfs-1992-118", filename: "tilltradesforordningen-1992-118" },

  // 14. TIER 3 — Sjötrafik
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/sjolag-19941009_sfs-1994-1009", filename: "sjolagen-1994-1009" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-1979377-om-registrering-av-batar_sfs-1979-377", filename: "lagen-om-registrering-av-batar-1979-377" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/fartygsregisterforordning-1975927_sfs-1975-927", filename: "fartygsregisterforordningen-1975-927" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-1975929-med-vissa-bestammelser-om_sfs-1975-929", filename: "forordningen-om-fartygs-identifiering-1975-929" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-1978205-om-internationellt_sfs-1978-205", filename: "forordningen-om-internationellt-certifikat-fritidsfartyg-1978-205" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/sjotrafikforordning-1986300_sfs-1986-300", filename: "sjotrafikforordningen-1986-300" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-1980424-om-atgarder-mot-fororening-fran_sfs-1980-424", filename: "lagen-om-atgarder-mot-fororening-fran-fartyg-1980-424" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-1996519-om-verkstallighet-av-domar-och_sfs-1996-519", filename: "lagen-om-verkstallighet-havsrattskonvention-1996-519" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-1974235-om-tillstand-till-sjofart-i_sfs-1974-235", filename: "forordningen-om-sjofart-inrikes-utlandskt-fartyg-1974-235" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/fartygssakerhetslag-2003364_sfs-2003-364", filename: "fartygssakerhetslagen-2003-364" },

  // 15. TIER 3 — Vägtransport
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/yrkestrafiklag-2012210_sfs-2012-210", filename: "yrkestrafiklagen-2012-210" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/yrkestrafikforordning-2012237_sfs-2012-237", filename: "yrkestrafikforordningen-2012-237" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-1998786-om-internationella_sfs-1998-786", filename: "forordningen-om-internationella-vagtransporter-1998-786" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-20101578-om-provavgifter-for_sfs-2010-1578", filename: "forordningen-om-provavgifter-2010-1578" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/_sfs-1980-152", filename: "containerlagen-1980-152" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/containerforordning-1980640_sfs-1980-640", filename: "containerforordningen-1980-640" },

  // 16. TIER 3 — Luftfart
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/luftfartslag-2010500_sfs-2010-500", filename: "luftfartslagen-2010-500" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/luftfartsforordning-2010770_sfs-2010-770", filename: "luftfartsforordningen-2010-770" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-2005801-om-restriktioner-for_sfs-2005-801", filename: "forordningen-om-restriktioner-for-luftfart-2005-801" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-20041100-om-luftfartsskydd_sfs-2004-1100", filename: "lagen-om-luftfartsskydd-2004-1100" },

  // 17. TIER 3 — Utlänning och pass
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/utlanningslag-2005716_sfs-2005-716", filename: "utlanningslagen-2005-716" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/utlanningsforordning-200697_sfs-2006-97", filename: "utlanningsforordningen-2006-97" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/passlag-1978302_sfs-1978-302", filename: "passlagen-1978-302" },

  // 18. TIER 3 — Jakt och fiske
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-19941709-om-eus-forordningar-om-den_sfs-1994-1709", filename: "lagen-om-eus-fiskeripolitik-1994-1709" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-19941716-om-fisket-vattenbruket_sfs-1994-1716", filename: "forordningen-om-fisket-1994-1716" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/jaktlag-1987259_sfs-1987-259", filename: "jaktlagen-1987-259" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/jaktforordning-1987905_sfs-1987-905", filename: "jaktforordningen-1987-905" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/fiskelag-1993787_sfs-1993-787", filename: "fiskelagen-1993-787" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/rennaringslag-1971437_sfs-1971-437", filename: "rennaringslagen-1971-437" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/rennaringsforordning-1993384_sfs-1993-384", filename: "rennaringsforordningen-1993-384" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-2000592-om-viltvardsomraden_sfs-2000-592", filename: "lagen-om-viltvardsomraden-2000-592" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-1980896-om-viltvardsomraden_sfs-1980-896", filename: "forordningen-om-viltvardsomraden-1980-896" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-1950595-om-grans-mot-allmant-vattenomrade_sfs-1950-595", filename: "lagen-om-grans-mot-allmant-vattenomrade-1950-595" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-2010897-om-gransalvsoverenskommelse-mellan_sfs-2010-897", filename: "lagen-om-gransalvsoverenskommelse-2010-897" },
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-20101098-om_sfs-2010-1098", filename: "forordningen-om-gransalvsoverenskommelsen-2010-1098" },

  // 19. TIER 3 — Övrigt (skatt/tull)
  { url: "https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/forordning-1968226-om-ratt-for-konungen-att_sfs-1968-226", filename: "forordningen-om-tull-och-skattefrihet-gransanlaggning-1968-226" },
  { url: "https://riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/kungorelse-1972116-om-tull--och-skattefrihet_sfs-1972-116", filename: "kungorelsen-om-tull-och-skattefrihet-renstangsel-1972-116" },
];
