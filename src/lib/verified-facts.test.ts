import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { consultationPrices, consultationTerms, labourMarket, registeredSeekersPerReportedVacancy } from "./verified-facts";

describe("Verified labour market data, March 2026", () => {
  test("SECO reports 234815 registered job seekers and 48843 reported vacancies", () => {
    assert.equal(labourMarket.registeredJobSeekers, 234815);
    assert.equal(labourMarket.reportedVacancies, 48843);
    assert.equal(labourMarket.period, "2026-03");
  });
  test("the rounded five is a ratio of reported stocks, not applications per job", () => {
    assert.ok(Math.abs(registeredSeekersPerReportedVacancy - 4.8075466) < 0.00001);
    assert.equal(Math.round(registeredSeekersPerReportedVacancy), 5);
  });
});

describe("Contact and paid analysis are separate", () => {
  test("first contact is free", () => assert.equal(consultationPrices.firstContact, 0));
  test("analysis costs CHF 105", () => assert.equal(consultationPrices.analysis, 105));
  test("further editing costs CHF 85 per hour", () => assert.equal(consultationPrices.editingPerHour, 85));
});
describe("Consultation terms", () => {
  test("online analysis lasts up to 30 minutes", () => assert.equal(consultationTerms.analysisMaxMinutes, 30));
  test("both prices include VAT", () => assert.equal(consultationTerms.vatIncluded, true));
});
