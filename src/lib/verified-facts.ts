// SECO, Die Lage auf dem Arbeitsmarkt, March 2026, tables 1 and 23.
// Reported vacancies cover only part of the market (including 172 abroad).
export const labourMarket = {
  period: "2026-03",
  registeredJobSeekers: 234815,
  reportedVacancies: 48843,
  source: "https://www.seco.admin.ch/dam/de/sd-web/C6Htf34KPwjy/2026-03_Die_Lage_auf_dem_Arbeitsmarkt_DE.pdf",
} as const;

export const registeredSeekersPerReportedVacancy =
  labourMarket.registeredJobSeekers / labourMarket.reportedVacancies;

export const consultationPrices = {
  firstContact: 0,
  analysis: 95,
  editingPerHour: 75,
} as const;