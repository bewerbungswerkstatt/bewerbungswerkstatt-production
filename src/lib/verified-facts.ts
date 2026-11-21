// SECO, Die Lage auf dem Arbeitsmarkt, October 2026, published November 5, 2026.
// Reported vacancies cover only part of the overall Swiss job market.
export const labourMarket = {
  period: "2026-10",
  published: "2026-11-05",
  registeredJobSeekers: 230001,
  reportedVacancies: 40462,
  source: "https://www.seco.admin.ch/dam/de/sd-web/Adw9I97GOT7i/2026-10_Die_Lage_auf_dem_Arbeitsmarkt_DE.pdf",
} as const;

export const registeredSeekersPerReportedVacancy =
  labourMarket.registeredJobSeekers / labourMarket.reportedVacancies;

export function formatSeekersPerVacancy(lang: "de" | "en") {
  return registeredSeekersPerReportedVacancy.toFixed(1).replace(".", lang === "de" ? "," : ".");
}

export const consultationPrices = {
  firstContact: 0,
  analysis: 105,
  editingPerHour: 85,
} as const;
export const consultationTerms = {
  analysisMaxMinutes: 30,
  vatIncluded: true,
} as const;
