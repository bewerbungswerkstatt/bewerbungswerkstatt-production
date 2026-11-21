import type { Lang } from "@/lib/home-content";

const copy = {
  de: {
    title: "Bewerbung & Lebenslauf schreiben lassen Schweiz | Bewerbungswerkstatt",
    description: "Lebenslauf erstellen lassen, Motivationsschreiben und Bewerbungsdossier optimieren – persönliche, authentische Bewerbungsberatung in der Schweiz für Tech, Finance und Back Office.",
  },
  en: {
    title: "Swiss CV Writing & Job Application Service | Bewerbungswerkstatt",
    description: "Personal CV consulting and convincing cover letters for the Swiss job market – for professionals in tech, finance and back office. In English or German.",
  },
};

export function homeHead(lang: Lang) {
  const c = copy[lang];
  const path = lang === "de" ? "https://www.bewerbungswerkstatt.ch/" : "https://www.bewerbungswerkstatt.ch/en";
  return {
    meta: [
      { title: c.title },
      { name: "description", content: c.description },
      { property: "og:title", content: c.title },
      { property: "og:description", content: c.description },
      { property: "og:url", content: path },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: lang === "de" ? "de_CH" : "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: path },
      { rel: "alternate", hrefLang: "de-CH", href: "https://www.bewerbungswerkstatt.ch/" },
      { rel: "alternate", hrefLang: "en", href: "https://www.bewerbungswerkstatt.ch/en" },
      { rel: "alternate", hrefLang: "x-default", href: "https://www.bewerbungswerkstatt.ch/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Bewerbungswerkstatt",
          description: c.description,
          telephone: "+41 76 629 50 56",
          email: "audelia@bewerbungswerkstatt.ch",
          areaServed: "CH",
          availableLanguage: ["de", "en"],
          priceRange: "CHF 75–95",
          address: { "@type": "PostalAddress", postalCode: "6418", addressLocality: "Rothenthurm", addressCountry: "CH" },
        }),
      },
    ],
  };
}
