import type { Lang } from "@/lib/home-content";
import { seoPages } from "@/lib/seo-pages";

export const guidesContent = {
  de: {
    title: "Ratgeber für Ihre Bewerbung in der Schweiz",
    intro: "Tipps zu Lebenslauf, Bewerbungsunterlagen und Stellensuche – für Schweizerinnen und Schweizer sowie Bewerbende aus dem Ausland.",
    cards: [
      { page: seoPages.cvFehlerDe, category: "Lebenslauf", title: "Lebenslauf Schweiz: 7 typische Fehler", text: "Häufige Schwachstellen erkennen und Ihren Lebenslauf gezielt verbessern." },
      { page: seoPages.zeugnisDe, category: "Arbeitszeugnis", title: "Arbeitszeugnisse richtig einordnen", text: "Welche Zeugnisse ins Bewerbungsdossier gehören und worauf Sie achten sollten." },
      { page: seoPages.guideDe, category: "Bewerbungsdossier", title: "Bewerben in der Schweiz", text: "Die wichtigsten Unterlagen, Schweizer Schreibweise und zusätzliche Angaben für Zuzügler." },
      { page: seoPages.zuzugDe, category: "Bewerben aus dem Ausland", title: "Aus Deutschland oder Österreich bewerben", text: "Unterschiede bei Lebenslauf, Anschreiben und Sprache für Ihren Wechsel in die Schweiz." },
    ],
  },
  en: {
    title: "Guides to applying for jobs in Switzerland",
    intro: "Practical advice on CVs, application documents and job searching – for Swiss applicants and people applying from abroad.",
    cards: [
      { page: seoPages.zeugnisEn, category: "Reference letters", title: "Understanding Swiss reference letters", text: "Which references belong in your application dossier and what to look out for." },
      { page: seoPages.guideEn, category: "Application dossier", title: "Applying for jobs in Switzerland", text: "Essential documents, Swiss spelling and additional details for international applicants." },
      { page: seoPages.zuzugEn, category: "Applying from abroad", title: "Applying to Switzerland from abroad", text: "Key differences in CVs, cover letters and language when moving to Switzerland." },
    ],
  },
};

export function guidesHead(lang: Lang) {
  const c = guidesContent[lang];
  const base = "https://www.bewerbungswerkstatt.ch";
  const path = lang === "de" ? "/ratgeber" : "/en/guide";
  const title = `${c.title} | Bewerbungswerkstatt`;
  return {
    meta: [
      { title },
      { name: "description", content: c.intro },
      { property: "og:title", content: title },
      { property: "og:description", content: c.intro },
      { property: "og:type", content: "website" },
      { property: "og:url", content: base + path },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: base + path },
      { rel: "alternate", hrefLang: "de-CH", href: base + "/ratgeber" },
      { rel: "alternate", hrefLang: "en", href: base + "/en/guide" },
      { rel: "alternate", hrefLang: "x-default", href: base + "/ratgeber" },
    ],
  };
}