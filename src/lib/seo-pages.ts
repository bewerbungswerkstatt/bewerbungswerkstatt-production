import type { Lang } from "@/lib/home-content";

export type SeoSection = { heading: string; paragraphs: string[]; list?: string[] };

export type SeoPage = {
  path: string;
  lang: Lang;
  alternate: string;
  navLabel: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  sections: SeoSection[];
  ctaTitle: string;
  ctaText: string;
  type: "service" | "article";
};

const de = (p: Omit<SeoPage, "lang">): SeoPage => ({ ...p, lang: "de" });
const en = (p: Omit<SeoPage, "lang">): SeoPage => ({ ...p, lang: "en" });

export const seoPages = {
  cvDe: de({
    path: "/lebenslauf-schreiben-lassen",
    alternate: "/en/swiss-cv-writing",
    navLabel: "Lebenslauf (CV)",
    type: "service",
    title: "Lebenslauf schreiben lassen – CV-Beratung Schweiz | Bewerbungswerkstatt",
    description: "Lebenslauf für die Schweiz schreiben lassen: persönliche CV-Beratung, klare Struktur und menschliche Texte statt KI-Floskeln. Erstgespräch ab CHF 95.",
    eyebrow: "CV-Beratung Schweiz",
    h1: "Lebenslauf schreiben lassen – ein CV, der in der Schweiz überzeugt",
    intro: "Recruiter entscheiden in wenigen Sekunden, ob sie Ihren Lebenslauf weiterlesen. Wir analysieren Ihren CV persönlich, schärfen Struktur und Kernaussagen und formulieren ihn so, dass er zum Schweizer Arbeitsmarkt passt – authentisch statt generisch.",
    sections: [
      {
        heading: "Was ein guter Schweizer Lebenslauf braucht",
        paragraphs: ["Ein Schweizer CV ist übersichtlich, vollständig und auf die Zielstelle ausgerichtet. Fliesstext wird selten gelesen – entscheidend sind klare Abschnitte und prägnante Stichworte."],
        list: [
          "Eine «Das bringe ich mit»-Übersicht mit Ihren wichtigsten Stärken",
          "Lückenlose, umgekehrt chronologische Berufserfahrung",
          "Ausbildung, Weiterbildungen und Sprachkenntnisse mit Niveau",
          "Ein professionelles Foto, das dem Text zugewandt ist",
          "Eine Länge, die den Recruiter nicht überfordert",
        ],
      },
      {
        heading: "So arbeiten wir",
        paragraphs: [
          "Im Erstgespräch (bis zu 45 Minuten, online) analysieren wir Ihre aktuellen Unterlagen und zeigen die grössten Verbesserungspotenziale. Danach überarbeiten wir Ihren Lebenslauf gemeinsam oder erstellen ihn komplett neu – auf Ihre Zielbranche zugeschnitten.",
          "Wir sind spezialisiert auf Finance, Versicherungen, Back Office und IT und beraten Sie auf Deutsch oder Englisch.",
        ],
      },
      {
        heading: "Preise",
        paragraphs: ["Analyse & Erstgespräch: CHF 95. CV-Review & Bearbeitung: CHF 75 pro Stunde. Keine versteckten Kosten – und wenn Sie mit dem Erstgespräch nicht zufrieden sind, erhalten Sie den vollen Betrag zurück."],
      },
    ],
    ctaTitle: "Bereit für einen besseren Lebenslauf?",
    ctaText: "Buchen Sie ein unverbindliches Erstgespräch.",
  }),
  letterDe: de({
    path: "/motivationsschreiben-schreiben-lassen",
    alternate: "/en/cover-letter-switzerland",
    navLabel: "Motivationsschreiben",
    type: "service",
    title: "Motivationsschreiben schreiben lassen – Schweiz | Bewerbungswerkstatt",
    description: "Motivationsschreiben schreiben lassen, das auf die Stelle zugeschnitten ist: ohne Floskeln, nach Schweizer Schreibnorm, menschlich formuliert. Persönliche Beratung.",
    eyebrow: "Motivationsschreiben",
    h1: "Motivationsschreiben schreiben lassen – zugeschnitten auf Ihre Wunschstelle",
    intro: "«Hiermit bewerbe ich mich…» – so beginnen unzählige Bewerbungen. Wir zeigen Ihnen, wie ein Motivationsschreiben aussieht, das aus der Masse heraussticht: direkt, konkret und in Ihrer eigenen Stimme.",
    sections: [
      {
        heading: "Typische Fehler, die wir vermeiden",
        paragraphs: ["Viele Motivationsschreiben scheitern nicht am Inhalt, sondern an austauschbaren Formulierungen."],
        list: [
          "«Sehr geehrte Damen und Herren» statt einer namentlichen Anrede",
          "Leere Floskeln wie «teamfähig, motiviert und belastbar» ohne Nachweis",
          "Kein Bezug zu den Anforderungen im Stelleninserat",
          "«Mit freundlichen Grüssen,» – in der Schweiz schreibt man «Freundliche Grüsse» ohne Komma",
        ],
      },
      {
        heading: "Unser Vorgehen",
        paragraphs: [
          "Wir lesen das Stelleninserat mit Ihnen, finden die passenden Argumente aus Ihrer Laufbahn und formulieren einen Einstieg, der sofort Ihren Mehrwert zeigt. Kein KI-Text von der Stange, sondern ein Schreiben, das nach Ihnen klingt.",
          "Auf Wunsch erstellen wir das Motivationsschreiben auf Deutsch oder Englisch.",
        ],
      },
    ],
    ctaTitle: "Ihr nächstes Motivationsschreiben soll überzeugen?",
    ctaText: "Kontaktieren Sie uns für ein unverbindliches Erstgespräch.",
  }),
  dossierDe: de({
    path: "/bewerbung-schreiben-lassen",
    alternate: "/en/job-application-switzerland",
    navLabel: "Bewerbungsdossier",
    type: "service",
    title: "Bewerbung schreiben lassen – Bewerbungscoach Schweiz | Bewerbungswerkstatt",
    description: "Komplette Bewerbung schreiben lassen: Lebenslauf und Motivationsschreiben neu erstellt oder überarbeitet, von Bewerbungscoaches aus der Deutschschweiz.",
    eyebrow: "Bewerbungsservice",
    h1: "Bewerbung schreiben lassen – Ihr komplettes Dossier vom Bewerbungscoach",
    intro: "Sie möchten Ihre Bewerbungsunterlagen von Grund auf erneuern? Wir überarbeiten oder erstellen Ihr ganzes Dossier – Lebenslauf und Motivationsschreiben – und achten dabei auf jedes Wort.",
    sections: [
      {
        heading: "Was Ihr Dossier umfasst",
        paragraphs: ["Ein Schweizer Bewerbungsdossier ist mehr als ein CV. Wir sorgen dafür, dass alle Teile zusammenpassen und eine klare Geschichte erzählen."],
        list: ["Lebenslauf mit klarer Struktur und Kernkompetenzen", "Auf die Stelle zugeschnittenes Motivationsschreiben", "Hinweise zur Zusammenstellung von Arbeitszeugnissen und Diplomen", "Laufende Anpassungen und Feedback für weitere Bewerbungen"],
      },
      {
        heading: "Für wen wir arbeiten",
        paragraphs: ["Wir begleiten Professionals in Tech, Finance, Versicherungen und Back Office – vom Berufseinstieg bis zur erfahrenen Fachkraft. Audelia Babbev-Pittet hat über 5 Jahre Erfahrung in der Beratung von Stellensuchenden, Daniel Babbev ist Softwareingenieur mit über 10 Jahren Erfahrung."],
      },
      {
        heading: "Preise",
        paragraphs: ["Start mit Analyse & Erstgespräch für CHF 95, danach CHF 75 pro Stunde für die Bearbeitung. Vollständig online, schweizweit."],
      },
    ],
    ctaTitle: "Bereit für Ihr neues Bewerbungsdossier?",
    ctaText: "Erzählen Sie uns von Ihrer Wunschstelle.",
  }),
  guideDe: de({
    path: "/ratgeber/bewerben-in-der-schweiz",
    alternate: "/en/guide/applying-for-jobs-in-switzerland",
    navLabel: "Ratgeber: Bewerben in der Schweiz",
    type: "article",
    title: "Bewerben in der Schweiz – Ratgeber für Zuzügler | Bewerbungswerkstatt",
    description: "Bewerbung in der Schweiz aus Deutschland, Österreich oder dem Ausland: Was ins Dossier gehört, wie ein Schweizer Lebenslauf aussieht und welche Fehler Sie vermeiden.",
    eyebrow: "Ratgeber",
    h1: "Bewerben in der Schweiz – was Zuzügler wissen sollten",
    intro: "Wer aus Deutschland, Österreich oder einem anderen Land in die Schweiz wechseln möchte, merkt schnell: Schweizer Bewerbungen funktionieren etwas anders. Dieser Ratgeber fasst die wichtigsten Unterschiede zusammen.",
    sections: [
      {
        heading: "Das Schweizer Bewerbungsdossier",
        paragraphs: ["Arbeitgeber erwarten in der Regel ein vollständiges Dossier:"],
        list: ["Motivationsschreiben", "Lebenslauf (CV), meist mit Foto", "Arbeitszeugnisse früherer Arbeitgeber", "Diplome und relevante Zertifikate"],
      },
      {
        heading: "Schweizer Schreibweise beachten",
        paragraphs: ["In der Schweiz gibt es kein «ß» – man schreibt «ss» (z. B. «Grüsse»). Die Grussformel lautet üblicherweise «Freundliche Grüsse», ohne Komma. Solche Details zeigen, dass Sie sich mit dem Schweizer Markt auseinandergesetzt haben."],
      },
      {
        heading: "Angaben, die ausländische Bewerbende ergänzen sollten",
        paragraphs: ["Machen Sie es Recruitern leicht, Ihren Hintergrund einzuordnen:"],
        list: ["Ihren Aufenthalts- bzw. Bewilligungsstatus oder Ihre Nationalität", "Sprachkenntnisse mit Niveau (z. B. nach GER: B2, C1)", "Kurze Erklärungen zu ausländischen Abschlüssen und Arbeitgebern", "Ihre Verfügbarkeit und Ihren gewünschten Arbeitsort"],
      },
      {
        heading: "Ein umkämpfter Markt",
        paragraphs: ["Im März 2026 standen in der Schweiz 234’815 registrierten Stellensuchenden 48’843 beim RAV gemeldete offene Stellen gegenüber (SECO). Umso wichtiger ist ein Dossier, das auf den ersten Blick überzeugt – und nicht wie hundert andere KI-generierte Bewerbungen aussieht."],
      },
    ],
    ctaTitle: "Sie planen den Wechsel in die Schweiz?",
    ctaText: "Wir prüfen Ihre Unterlagen und machen sie fit für den Schweizer Arbeitsmarkt.",
  }),
  cvEn: en({
    path: "/en/swiss-cv-writing",
    alternate: "/lebenslauf-schreiben-lassen",
    navLabel: "Swiss CV writing",
    type: "service",
    title: "Swiss CV Writing Service – CV Consultant Switzerland | Bewerbungswerkstatt",
    description: "Professional Swiss CV writing and review by local consultants. Get a CV in the Swiss format that stands out from AI-generated applications. First call from CHF 95.",
    eyebrow: "CV consulting in Switzerland",
    h1: "Swiss CV writing – a CV that works in the Swiss job market",
    intro: "Recruiters decide within seconds whether to keep reading your CV. We review your CV personally, sharpen its structure and key messages, and adapt it to the Swiss CV format – authentic rather than generic. In English or German.",
    sections: [
      {
        heading: "What a Swiss CV needs",
        paragraphs: ["A Swiss CV is clear, complete and focused on the target role. Long paragraphs are rarely read – clear sections and concise bullet points are what count."],
        list: ["A “what I bring” summary of your key strengths", "Complete work experience in reverse chronological order", "Education, further training and language skills with levels", "A professional photo facing towards the text", "Your residence or work permit status, if you are moving from abroad"],
      },
      {
        heading: "How we work",
        paragraphs: [
          "In a first online meeting (up to 45 minutes) we analyse your current documents and show you the biggest improvement potential. Then we revise your CV together or create a new one – tailored to your target industry.",
          "We specialise in finance, insurance, back office and IT roles in German-speaking Switzerland, including Zurich.",
        ],
      },
      {
        heading: "Pricing",
        paragraphs: ["Analysis & first call: CHF 95. CV review & editing: CHF 75 per hour. No hidden costs – and if you are not satisfied with the first call, you get a full refund."],
      },
    ],
    ctaTitle: "Ready for a better CV?",
    ctaText: "Book a free, no-obligation first conversation.",
  }),
  letterEn: en({
    path: "/en/cover-letter-switzerland",
    alternate: "/motivationsschreiben-schreiben-lassen",
    navLabel: "Cover letters",
    type: "service",
    title: "Cover Letter Writing for Swiss Jobs | Bewerbungswerkstatt",
    description: "Cover letters for jobs in Switzerland, tailored to each role and written in a human voice – in English or German, following Swiss conventions.",
    eyebrow: "Cover letters",
    h1: "Cover letters for Switzerland – tailored to the role you want",
    intro: "Countless applications open with “I hereby apply…”. We show you what a cover letter that stands out looks like: direct, specific and in your own voice.",
    sections: [
      {
        heading: "Common mistakes we avoid",
        paragraphs: ["Many cover letters fail not because of their content, but because of interchangeable phrases."],
        list: ["“Dear Sir or Madam” instead of addressing the contact person by name", "Clichés like “team player, motivated and resilient” without proof", "No link to the requirements in the job ad", "Ignoring Swiss conventions when writing in German, such as “Freundliche Grüsse” without a comma"],
      },
      {
        heading: "Our approach",
        paragraphs: ["We go through the job ad with you, find the right arguments from your career and write an opening that shows your value immediately. No off-the-shelf AI text, but a letter that sounds like you – in English or German."],
      },
    ],
    ctaTitle: "Want your next cover letter to convince?",
    ctaText: "Contact us for a no-obligation first conversation.",
  }),
  dossierEn: en({
    path: "/en/job-application-switzerland",
    alternate: "/bewerbung-schreiben-lassen",
    navLabel: "Application dossier",
    type: "service",
    title: "Job Application Service Switzerland – Career Coach | Bewerbungswerkstatt",
    description: "Have your complete Swiss job application written or revised: CV and cover letter by application coaches based in German-speaking Switzerland.",
    eyebrow: "Application service",
    h1: "Job applications for Switzerland – your complete dossier",
    intro: "Want to renew your application documents from scratch? We revise or create your entire dossier – CV and cover letter – and choose every word carefully.",
    sections: [
      {
        heading: "What your dossier includes",
        paragraphs: ["A Swiss application dossier is more than a CV. We make sure all parts fit together and tell a clear story."],
        list: ["A CV with a clear structure and core competencies", "A cover letter tailored to the role", "Advice on compiling references (Arbeitszeugnisse) and diplomas", "Ongoing adjustments and feedback for further applications"],
      },
      {
        heading: "Who we work with",
        paragraphs: ["We support professionals in tech, finance, insurance and back office. Audelia Babbev-Pittet has more than 5 years of experience advising job seekers; Daniel Babbev is a software engineer with more than 10 years of experience."],
      },
      {
        heading: "Pricing",
        paragraphs: ["Start with an analysis & first call for CHF 95, then CHF 75 per hour for editing. Fully online – wherever you are."],
      },
    ],
    ctaTitle: "Ready for your new application dossier?",
    ctaText: "Tell us about the role you are aiming for.",
  }),
  guideEn: en({
    path: "/en/guide/applying-for-jobs-in-switzerland",
    alternate: "/ratgeber/bewerben-in-der-schweiz",
    navLabel: "Guide: applying in Switzerland",
    type: "article",
    title: "Applying for Jobs in Switzerland – Guide for Expats | Bewerbungswerkstatt",
    description: "Moving to Switzerland for work? What belongs in a Swiss application, how a Swiss CV looks, and the mistakes international applicants should avoid.",
    eyebrow: "Guide",
    h1: "Applying for jobs in Switzerland – what international applicants should know",
    intro: "If you want to move to Switzerland for work, you will quickly notice that Swiss applications work a little differently. This guide summarises the most important points.",
    sections: [
      {
        heading: "The Swiss application dossier",
        paragraphs: ["Employers usually expect a complete dossier:"],
        list: ["Cover letter", "CV, usually with a photo", "Reference letters from previous employers (Arbeitszeugnisse)", "Diplomas and relevant certificates"],
      },
      {
        heading: "Details international applicants should add",
        paragraphs: ["Make it easy for recruiters to understand your background:"],
        list: ["Your nationality or Swiss permit status", "Language skills with levels (e.g. CEFR: B2, C1) – German is often required in German-speaking Switzerland", "Short explanations of foreign degrees and employers", "Your availability and preferred work location"],
      },
      {
        heading: "Applying in German? Mind the Swiss spelling",
        paragraphs: ["Swiss German writing does not use “ß” – it is written “ss”. Letters typically close with “Freundliche Grüsse”, without a comma. Details like these show that you understand the Swiss market."],
      },
      {
        heading: "A competitive market",
        paragraphs: ["In March 2026, 234,815 registered job seekers in Switzerland faced 48,843 open positions reported to the regional employment centres (SECO). That makes a dossier that convinces at first glance – and doesn't look like a hundred other AI-generated applications – all the more important."],
      },
    ],
    ctaTitle: "Planning your move to Switzerland?",
    ctaText: "We review your documents and get them ready for the Swiss job market – in English or German.",
  }),
} satisfies Record<string, SeoPage>;

export const pagesByLang = (lang: Lang) => Object.values(seoPages).filter((p) => p.lang === lang);

export function seoHead(page: SeoPage) {
  const de = page.lang === "de" ? page.path : page.alternate;
  const en = page.lang === "en" ? page.path : page.alternate;
  return {
    meta: [
      { title: page.title },
      { name: "description", content: page.description },
      { property: "og:title", content: page.title },
      { property: "og:description", content: page.description },
      { property: "og:url", content: page.path },
      { property: "og:type", content: page.type === "article" ? "article" : "website" },
      { property: "og:locale", content: page.lang === "de" ? "de_CH" : "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: page.path },
      { rel: "alternate", hrefLang: "de-CH", href: de },
      { rel: "alternate", hrefLang: "en", href: en },
      { rel: "alternate", hrefLang: "x-default", href: de },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          page.type === "article"
            ? { "@context": "https://schema.org", "@type": "Article", headline: page.h1, description: page.description, inLanguage: page.lang, author: { "@type": "Organization", name: "Bewerbungswerkstatt" } }
            : { "@context": "https://schema.org", "@type": "Service", name: page.h1, description: page.description, inLanguage: page.lang, areaServed: "CH", provider: { "@type": "ProfessionalService", name: "Bewerbungswerkstatt", telephone: "+41 76 629 50 56", email: "audelia@bewerbungswerkstatt.ch", address: { "@type": "PostalAddress", postalCode: "6418", addressLocality: "Rothenthurm", addressCountry: "CH" } } },
        ),
      },
    ],
  };
}
