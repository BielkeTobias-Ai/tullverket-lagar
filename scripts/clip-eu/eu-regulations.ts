export interface EuRegulation {
  celex: string;
  filename: string;
  shortName?: string;
}

// Tullkodex
export const TULLKODEX: EuRegulation[] = [
  { celex: "32013R0952", filename: "ucc-eu-952-2013", shortName: "Unionens tullkodex (UCC)" },
  { celex: "32015R2446", filename: "ucc-komplettering-eu-2015-2446", shortName: "Kompletteringsforordningen" },
  { celex: "32015R2447", filename: "ucc-genomforande-eu-2015-2447", shortName: "Genomforandeforordningen" },
  { celex: "32016R0341", filename: "ucc-overgang-eu-2016-341", shortName: "Overgangsforordningen" },
  { celex: "32023R2879", filename: "ucc-elektroniska-system-eu-2023-2879", shortName: "Elektroniska system (2023)" },
  { celex: "32025R0512", filename: "ucc-elektroniska-system-eu-2025-512", shortName: "Elektroniska system (2025)" },
  { celex: "32022R2399", filename: "ucc-enda-kontaktpunkt-eu-2022-2399", shortName: "Enda kontaktpunkt" },
];

// CITES och djurskydd
export const CITES: EuRegulation[] = [
  { celex: "31997R0338", filename: "cites-forordningen-eg-338-97", shortName: "CITES-forordningen" },
  { celex: "32006R0865", filename: "cites-genomforande-eg-865-2006", shortName: "CITES genomforande" },
  { celex: "32012R0792", filename: "cites-tillstand-eu-792-2012", shortName: "CITES tillstand/intyg" },
  { celex: "32025R0006", filename: "importforbud-arter-eu-2025-6", shortName: "Importforbud arter" },
  { celex: "32007R1523", filename: "forbud-pals-katt-hund-eg-1523-2007", shortName: "Forbud pals katt/hund" },
  { celex: "32009R1007", filename: "salprodukter-eg-1007-2009", shortName: "Salprodukter" },
  { celex: "32015R1850", filename: "salprodukter-genomforande-eu-2015-1850", shortName: "Salprodukter genomforande" },
];

// Tullar, tullbefrielse och statistik
export const TULLAR: EuRegulation[] = [
  { celex: "31987R2658", filename: "kombinerade-nomenklaturen-eeg-2658-87", shortName: "Kombinerade nomenklaturen (KN)" },
  { celex: "32003R0150", filename: "tullbefrielse-eg-150-2003", shortName: "Tullbefrielse (2003)" },
  { celex: "32018R0581", filename: "tullbefrielse-eu-2018-581", shortName: "Tullbefrielse (2018)" },
  { celex: "32009R1186", filename: "tullbefrielse-eg-1186-2009", shortName: "Tullbefrielse (2009)" },
  { celex: "32016R1036", filename: "antidumping-eu-2016-1036", shortName: "Antidumpingsforordningen" },
  { celex: "32016R1037", filename: "antisubvention-eu-2016-1037", shortName: "Antisubventionsforordningen" },
  { celex: "32011R1224", filename: "genomforande-tullar-eu-1224-2011", shortName: "Genomforande tullar" },
  { celex: "32011R1225", filename: "genomforande-antidumping-eu-1225-2011", shortName: "Genomforande antidumping" },
  { celex: "32012R0080", filename: "genomforande-tullkvoter-eu-80-2012", shortName: "Genomforande tullkvoter" },
];

// Fiske
export const FISKE: EuRegulation[] = [
  { celex: "32009R1224", filename: "fiskerikontroll-eg-1224-2009", shortName: "Fiskerikontroll" },
  { celex: "32008R1005", filename: "iuu-fiske-eg-1005-2008", shortName: "IUU-fiske" },
  { celex: "32009R1010", filename: "iuu-genomforande-eg-1010-2009", shortName: "IUU genomforande" },
];

// Dual-use
export const DUAL_USE: EuRegulation[] = [
  { celex: "32021R0821", filename: "pgs-forordningen-eu-2021-821", shortName: "PGS-forordningen (dual-use)" },
];

// Transport
export const TRANSPORT: EuRegulation[] = [
  { celex: "32009R1072", filename: "vagtransport-eg-1072-2009", shortName: "Vagtransport" },
  { celex: "32008R1100", filename: "inre-vattenvaagar-eg-1100-2008", shortName: "Inre vattenvaagar" },
  { celex: "31992R3912", filename: "tullterritorium-eeg-3912-92", shortName: "Tullterritorium" },
];

// Statistik
export const STATISTIK: EuRegulation[] = [
  { celex: "32019R2152", filename: "eu-foretagsstatistik-eu-2019-2152", shortName: "Foretagsstatistik" },
  { celex: "32021R1704", filename: "eu-handelsstatistik-eu-2021-1704", shortName: "Handelsstatistik genomforande" },
  { celex: "32020R1197", filename: "eu-foretagsstatistik-genomforande-eu-2020-1197", shortName: "Foretagsstatistik genomforande" },
  { celex: "32020R1470", filename: "eu-handelsstatistik-komplettering-eu-2020-1470", shortName: "Handelsstatistik komplettering" },
];

// All regulations combined
export const EU_REGULATIONS: EuRegulation[] = [
  ...TULLKODEX,
  ...CITES,
  ...TULLAR,
  ...FISKE,
  ...DUAL_USE,
  ...TRANSPORT,
  ...STATISTIK,
];
