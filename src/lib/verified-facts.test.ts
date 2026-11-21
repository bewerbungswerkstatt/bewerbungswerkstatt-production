import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { consultationPrices, consultationTerms, labourMarket, registeredSeekersPerReportedVacancy, formatSeekersPerVacancy } from "./verified-facts";

describe("Verified labour market data, October 2026", () => {
  test("SECO reports 230001 registered job seekers", () => {
    assert.equal(labourMarket.registeredJobSeekers, 230001);
  });
  test("SECO reports 40462 reported vacancies", () => {
    assert.equal(labourMarket.reportedVacancies, 40462);
  });
  test("figures refer to October 2026", () => {
    assert.equal(labourMarket.period, "2026-10");
  });
  test("report was published on November 5, 2026", () => {
    assert.equal(labourMarket.published, "2026-11-05");
  });
  test("the ratio of registered stocks rounds to 5.7, not applications per job", () => {
    assert.ok(Math.abs(registeredSeekersPerReportedVacancy - 5.6843725) < 0.00001);
    assert.equal(formatSeekersPerVacancy("de"), "5,7");
    assert.equal(formatSeekersPerVacancy("en"), "5.7");
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
