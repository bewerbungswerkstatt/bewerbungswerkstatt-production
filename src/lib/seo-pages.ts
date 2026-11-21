import type { LinkProps } from "@tanstack/react-router";
import type { Lang } from "@/lib/home-content";

export type SeoSubsection = { title: string; paragraphs?: string[]; list?: string[] };
export type SeoExample = { label: string; lines: string[] };
export type SeoSource = { label: string; href: string };

export type SeoSection = { heading: string; paragraphs: string[]; list?: string[]; links?: { before: string; text: string; to: NonNullable<LinkProps["to"]>; after: string }[]; subsections?: SeoSubsection[]; examples?: SeoExample[]; checklist?: string[]; sources?: SeoSource[] };

export type SeoFaq = { q: string; a: string };

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
  faq?: SeoFaq[];
  noEnAlternate?: boolean;
  dates?: { published: string; modified: string };
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
    description: "Lebenslauf für die Schweiz schreiben lassen: persönliche CV-Beratung, klare Struktur und menschliche Texte statt KI-Floskeln. Analysegespräch CHF 95.",
    eyebrow: "CV-Beratung Schweiz",
    h1: "Lebenslauf schreiben lassen – ein CV, der in der Schweiz überzeugt",
    intro: "Recruiter entscheiden in wenigen Sekunden, ob sie Ihren Lebenslauf weiterlesen. Wir analysieren Ihren CV persönlich, schärfen Struktur und Kernaussagen und formulieren ihn so, dass er zum Schweizer Arbeitsmarkt passt – authentisch statt generisch.",
    sections: [
      {
        heading: "Was ein guter Schweizer Lebenslauf braucht",
        links: [{"before": "Welche Unterlagen dazugehören, zeigt unser ", "text": "Ratgeber zum Bewerben in der Schweiz", "to": "/ratgeber/bewerben-in-der-schweiz", "after": "."}, {"before": "Die häufigsten Schwachstellen zeigt unser Ratgeber zu den ", "text": "7 typischen Fehlern im Schweizer Lebenslauf", "to": "/ratgeber/lebenslauf-fehler-schweiz", "after": "."}],
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
        links: [{"before": "Wenn Sie aus dem Ausland kommen, finden Sie ergänzende ", "text": "Tipps für Bewerbungen aus Deutschland und Österreich", "to": "/ratgeber/bewerben-in-der-schweiz-aus-deutschland", "after": "."}],
        paragraphs: [
          "Im Analysegespräch (CHF 95, bis zu 45 Minuten, online) analysieren wir Ihre aktuellen Unterlagen und zeigen die grössten Verbesserungspotenziale. Danach überarbeiten wir Ihren Lebenslauf gemeinsam oder erstellen ihn komplett neu – auf Ihre Zielbranche zugeschnitten.",
          "Wir sind spezialisiert auf Finance, Versicherungen, Back Office und IT und beraten Sie auf Deutsch oder Englisch.",
        ],
      },
      {
        heading: "Preise",
        paragraphs: ["Analysegespräch: CHF 95. CV-Review & Bearbeitung: CHF 75 pro Stunde. Keine versteckten Kosten – und wenn Sie mit dem Analysegespräch nicht zufrieden sind, erhalten Sie den vollen Betrag zurück."],
      },
    ],
    faq: [{ q: "Was kostet es, den Lebenslauf schreiben zu lassen?", a: "Der Erstkontakt ist kostenlos. Das separate Analysegespräch kostet CHF 95, die weitere Bearbeitung CHF 75 pro Stunde." }, { q: "Findet die Beratung auch online statt?", a: "Ja, alle Gespräche finden online statt – Sie können von überall in der Schweiz oder aus dem Ausland teilnehmen." }],
    ctaTitle: "Bereit für einen besseren Lebenslauf?",
    ctaText: "Der Erstkontakt ist kostenlos und unverbindlich; das separate Analysegespräch kostet CHF 95.",
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
        links: [{"before": "Weitere sprachliche Unterschiede erklärt der ", "text": "Ratgeber für Bewerbungen aus Deutschland und Österreich", "to": "/ratgeber/bewerben-in-der-schweiz-aus-deutschland", "after": "."}],
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
        links: [{"before": "Zum Zusammenspiel von Anschreiben und weiteren Unterlagen lesen Sie unseren ", "text": "Ratgeber zum Schweizer Bewerbungsdossier", "to": "/ratgeber/bewerben-in-der-schweiz", "after": "."}],
        paragraphs: [
          "Wir lesen das Stelleninserat mit Ihnen, finden die passenden Argumente aus Ihrer Laufbahn und formulieren einen Einstieg, der sofort Ihren Mehrwert zeigt. Kein KI-Text von der Stange, sondern ein Schreiben, das nach Ihnen klingt.",
          "Auf Wunsch erstellen wir das Motivationsschreiben auf Deutsch oder Englisch.",
        ],
      },
    ],
    faq: [{ q: "Wie lang sollte ein Motivationsschreiben sein?", a: "In der Regel maximal eine A4-Seite – kurz, konkret und auf die Stelle bezogen." }, { q: "Kann ich das Schreiben für mehrere Stellen verwenden?", a: "Wir erarbeiten eine starke Grundlage, die Sie mit wenig Aufwand an jede Stelle anpassen können." }],
    ctaTitle: "Ihr nächstes Motivationsschreiben soll überzeugen?",
    ctaText: "Der Erstkontakt ist kostenlos und unverbindlich; das separate Analysegespräch kostet CHF 95.",
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
        links: [{"before": "Wie Sie die Beilagen einordnen, erklärt unser ", "text": "Ratgeber zu Arbeitszeugnissen in der Schweiz", "to": "/ratgeber/arbeitszeugnis-schweiz", "after": "."}],
        paragraphs: ["Ein Schweizer Bewerbungsdossier ist mehr als ein CV. Wir sorgen dafür, dass alle Teile zusammenpassen und eine klare Geschichte erzählen."],
        list: ["Lebenslauf mit klarer Struktur und Kernkompetenzen", "Auf die Stelle zugeschnittenes Motivationsschreiben", "Hinweise zur Zusammenstellung von Arbeitszeugnissen und Diplomen", "Laufende Anpassungen und Feedback für weitere Bewerbungen"],
      },
      {
        heading: "Für wen wir arbeiten",
        links: [{"before": "Für den Wechsel aus dem Ausland helfen unsere ", "text": "Tipps zum Bewerben in der Schweiz", "to": "/ratgeber/bewerben-in-der-schweiz", "after": "."}],
        paragraphs: ["Wir begleiten Professionals in Tech, Finance, Versicherungen und Back Office – vom Berufseinstieg bis zur erfahrenen Fachkraft. Audelia Babbev-Pittet hat über 5 Jahre Erfahrung in der Beratung von Stellensuchenden, Daniel Babbev ist Softwareingenieur mit über 10 Jahren Erfahrung."],
      },
      {
        heading: "Preise",
        paragraphs: ["Analysegespräch für CHF 95, danach CHF 75 pro Stunde für die Bearbeitung. Vollständig online, schweizweit."],
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
        links: [{"before": "Wenn Sie Unterstützung bei allen Unterlagen wünschen, können Sie Ihr ", "text": "Bewerbungsdossier persönlich überarbeiten lassen", "to": "/bewerbung-schreiben-lassen", "after": "."}],
        paragraphs: ["Arbeitgeber erwarten in der Regel ein vollständiges Dossier:"],
        list: ["Motivationsschreiben", "Lebenslauf (CV), meist mit Foto", "Arbeitszeugnisse früherer Arbeitgeber", "Diplome und relevante Zertifikate"],
      },
      {
        heading: "Schweizer Schreibweise beachten",
        paragraphs: ["In der Schweiz gibt es kein «ß» – man schreibt «ss» (z. B. «Grüsse»). Die Grussformel lautet üblicherweise «Freundliche Grüsse», ohne Komma. Solche Details zeigen, dass Sie sich mit dem Schweizer Markt auseinandergesetzt haben."],
      },
      {
        heading: "Angaben, die ausländische Bewerbende ergänzen sollten",
        links: [{"before": "Für die passende Darstellung Ihres Profils bieten wir ", "text": "persönliche CV-Beratung für die Schweiz", "to": "/lebenslauf-schreiben-lassen", "after": "."}],
        paragraphs: ["Machen Sie es Recruitern leicht, Ihren Hintergrund einzuordnen:"],
        list: ["Ihren Aufenthalts- bzw. Bewilligungsstatus oder Ihre Nationalität", "Sprachkenntnisse mit Niveau (z. B. nach GER: B2, C1)", "Kurze Erklärungen zu ausländischen Abschlüssen und Arbeitgebern", "Ihre Verfügbarkeit und Ihren gewünschten Arbeitsort"],
      },
      {
        heading: "Ein umkämpfter Markt",
        paragraphs: ["Im März 2026 erfasste das SECO 234’815 registrierte Stellensuchende und 48’843 bei den RAV gemeldete offene Stellen. Die gemeldeten Stellen bilden nur einen Teil des Stellenangebots ab; daraus lässt sich keine Bewerbungszahl je Stelle ableiten. Ein klar strukturiertes, auf die Zielstelle ausgerichtetes Dossier hilft, Ihre Qualifikationen verständlich darzustellen."],
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
    description: "Professional Swiss CV writing and review by local consultants. Get a CV in the Swiss format that stands out from AI-generated applications. Analysis meeting CHF 95.",
    eyebrow: "CV consulting in Switzerland",
    h1: "Swiss CV writing – a CV that works in the Swiss job market",
    intro: "Recruiters decide within seconds whether to keep reading your CV. We review your CV personally, sharpen its structure and key messages, and adapt it to the Swiss CV format – authentic rather than generic. In English or German.",
    sections: [
      {
        heading: "What a Swiss CV needs",
        links: [{"before": "For the complete set of documents, read our ", "text": "guide to applying for jobs in Switzerland", "to": "/en/guide/applying-for-jobs-in-switzerland", "after": "."}],
        paragraphs: ["A Swiss CV is clear, complete and focused on the target role. Long paragraphs are rarely read – clear sections and concise bullet points are what count."],
        list: ["A “what I bring” summary of your key strengths", "Complete work experience in reverse chronological order", "Education, further training and language skills with levels", "A professional photo facing towards the text", "Your residence or work permit status, if you are moving from abroad"],
      },
      {
        heading: "How we work",
        links: [{"before": "Moving from another country? See our ", "text": "CV tips for applicants from abroad", "to": "/en/guide/applying-to-switzerland-from-abroad", "after": "."}],
        paragraphs: [
          "In an online analysis meeting (CHF 95, up to 45 minutes) we analyse your current documents and show you the biggest improvement potential. Then we revise your CV together or create a new one – tailored to your target industry.",
          "We specialise in finance, insurance, back office and IT roles in German-speaking Switzerland, including Zurich.",
        ],
      },
      {
        heading: "Pricing",
        paragraphs: ["Analysis meeting: CHF 95. CV review & editing: CHF 75 per hour. No hidden costs – and if you are not satisfied with the analysis meeting, you get a full refund."],
      },
    ],
    ctaTitle: "Ready for a better CV?",
    ctaText: "First contact is free and without obligation; the separate analysis meeting costs CHF 95.",
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
        links: [{"before": "Our ", "text": "guide to applying from abroad", "to": "/en/guide/applying-to-switzerland-from-abroad", "after": " explains further Swiss conventions."}],
        paragraphs: ["Many cover letters fail not because of their content, but because of interchangeable phrases."],
        list: ["“Dear Sir or Madam” instead of addressing the contact person by name", "Clichés like “team player, motivated and resilient” without proof", "No link to the requirements in the job ad", "Ignoring Swiss conventions when writing in German, such as “Freundliche Grüsse” without a comma"],
      },
      {
        heading: "Our approach",
        links: [{"before": "See how your letter fits with the other documents in our ", "text": "Swiss job application guide", "to": "/en/guide/applying-for-jobs-in-switzerland", "after": "."}],
        paragraphs: ["We go through the job ad with you, find the right arguments from your career and write an opening that shows your value immediately. No off-the-shelf AI text, but a letter that sounds like you – in English or German."],
      },
    ],
    ctaTitle: "Want your next cover letter to convince?",
    ctaText: "First contact is free and without obligation; the separate analysis meeting costs CHF 95.",
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
        links: [{"before": "Our ", "text": "guide to Swiss reference letters", "to": "/en/guide/swiss-reference-letter", "after": " explains how to understand these documents."}],
        paragraphs: ["A Swiss application dossier is more than a CV. We make sure all parts fit together and tell a clear story."],
        list: ["A CV with a clear structure and core competencies", "A cover letter tailored to the role", "Advice on compiling references (Arbeitszeugnisse) and diplomas", "Ongoing adjustments and feedback for further applications"],
      },
      {
        heading: "Who we work with",
        links: [{"before": "For a move to Switzerland, start with our ", "text": "guide for international job applicants", "to": "/en/guide/applying-for-jobs-in-switzerland", "after": "."}],
        paragraphs: ["We support professionals in tech, finance, insurance and back office. Audelia Babbev-Pittet has more than 5 years of experience advising job seekers; Daniel Babbev is a software engineer with more than 10 years of experience."],
      },
      {
        heading: "Pricing",
        paragraphs: ["An analysis meeting costs CHF 95, then CHF 75 per hour for editing. Fully online – wherever you are."],
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
        links: [{"before": "For personal help with all your documents, explore our ", "text": "Swiss application dossier service", "to": "/en/job-application-switzerland", "after": "."}],
        paragraphs: ["Employers usually expect a complete dossier:"],
        list: ["Cover letter", "CV, usually with a photo", "Reference letters from previous employers (Arbeitszeugnisse)", "Diplomas and relevant certificates"],
      },
      {
        heading: "Details international applicants should add",
        links: [{"before": "Our ", "text": "Swiss CV writing and review service", "to": "/en/swiss-cv-writing", "after": " helps present your background clearly."}],
        paragraphs: ["Make it easy for recruiters to understand your background:"],
        list: ["Your nationality or Swiss permit status", "Language skills with levels (e.g. CEFR: B2, C1) – German is often required in German-speaking Switzerland", "Short explanations of foreign degrees and employers", "Your availability and preferred work location"],
      },
      {
        heading: "Applying in German? Mind the Swiss spelling",
        paragraphs: ["Swiss German writing does not use “ß” – it is written “ss”. Letters typically close with “Freundliche Grüsse”, without a comma. Details like these show that you understand the Swiss market."],
      },
      {
        heading: "A competitive market",
        paragraphs: ["SECO recorded 234,815 registered job seekers and 48,843 vacancies reported to regional employment centres in March 2026. Reported vacancies cover only part of the job market; these figures do not measure applications per job. A clearly structured dossier tailored to the role helps employers understand your qualifications."],
      },
    ],
    ctaTitle: "Planning your move to Switzerland?",
    ctaText: "We review your documents and get them ready for the Swiss job market – in English or German.",
  }),
  zeugnisDe: de({
    path: "/ratgeber/arbeitszeugnis-schweiz",
    alternate: "/en/guide/swiss-reference-letter",
    navLabel: "Ratgeber: Arbeitszeugnis",
    type: "article",
    title: "Arbeitszeugnis Schweiz – Formulierungen verstehen | Bewerbungswerkstatt",
    description: "Arbeitszeugnis in der Schweiz: Was drinstehen muss, wie Sie Formulierungen richtig lesen und wann Sie eine Berichtigung verlangen sollten.",
    eyebrow: "Ratgeber",
    h1: "Arbeitszeugnis in der Schweiz – was drinsteht und wie Sie es richtig lesen",
    intro: "In der Schweiz gehört das Arbeitszeugnis in fast jedes Bewerbungsdossier. Recruiter lesen es genau – deshalb lohnt es sich zu wissen, worauf es ankommt.",
    sections: [
      {
        heading: "Ihr Recht auf ein Zeugnis",
        paragraphs: ["Nach Art. 330a des Obligationenrechts können Sie jederzeit ein Arbeitszeugnis verlangen – nicht erst beim Austritt. Ein Vollzeugnis äussert sich zu Art und Dauer der Anstellung sowie zu Leistung und Verhalten. Eine reine Arbeitsbestätigung nennt nur Art und Dauer."],
      },
      {
        heading: "Was ein gutes Zeugnis enthält",
        links: [{"before": "Für eine stimmige Zusammenstellung können Sie Ihr ", "text": "komplettes Bewerbungsdossier überarbeiten lassen", "to": "/bewerbung-schreiben-lassen", "after": "."}],
        paragraphs: ["Ein aussagekräftiges Vollzeugnis umfasst typischerweise:"],
        list: ["Funktion, Dauer und wichtigste Aufgaben", "Beurteilung von Leistung und Fachwissen", "Beurteilung des Verhaltens gegenüber Vorgesetzten, Kollegen und Kunden", "Grund des Austritts (auf Wunsch) und eine Schlussformel mit Dank und guten Wünschen"],
      },
      {
        heading: "Zwischen den Zeilen lesen",
        paragraphs: ["Ein Zeugnis muss wahr und wohlwollend sein. Deshalb sind Kritikpunkte oft nur indirekt formuliert: Fehlende Aussagen zum Verhalten, auffällig knappe Beschreibungen oder eine fehlende Schlussformel fallen Recruitern auf."],
      },
      {
        heading: "Wann Sie eine Berichtigung verlangen sollten",
        links: [{"before": "Ihre Erfahrungen und Stärken lassen sich zudem in einem ", "text": "individuell formulierten Motivationsschreiben", "to": "/motivationsschreiben-schreiben-lassen", "after": " hervorheben."}],
        paragraphs: ["Sind Angaben falsch oder unvollständig, dürfen Sie eine Korrektur verlangen. Am besten schlagen Sie konkrete Formulierungen vor – sachlich und mit Belegen. Gerne prüfen wir Ihr Zeugnis und helfen bei der Formulierung."],
      },
    ],
    faq: [
      { q: "Muss ich alle Arbeitszeugnisse beilegen?", a: "In der Regel die Zeugnisse der letzten Stellen und die für die Zielstelle relevanten. Sehr alte Zeugnisse können Sie weglassen." },
      { q: "Was tun, wenn ein Zeugnis schlecht ist?", a: "Verlangen Sie zuerst eine Berichtigung. Lässt sich nichts ändern, stärken Sie Ihr Dossier mit Referenzen und einem überzeugenden Motivationsschreiben." },
    ],
    ctaTitle: "Unsicher, was Ihr Zeugnis aussagt?",
    ctaText: "Wir lesen es mit Ihnen und zeigen, wie Sie es im Dossier am besten einsetzen.",
  }),
  zuzugDe: de({
    path: "/ratgeber/bewerben-in-der-schweiz-aus-deutschland",
    alternate: "/en/guide/applying-to-switzerland-from-abroad",
    navLabel: "Ratgeber: aus Deutschland & Österreich",
    type: "article",
    title: "Bewerben in der Schweiz aus Deutschland & Österreich | Bewerbungswerkstatt",
    description: "Als Deutsche oder Österreicherin in der Schweiz bewerben: Unterschiede bei Lebenslauf, Anschreiben und Sprache – und was Schweizer Recruiter erwarten.",
    eyebrow: "Ratgeber",
    h1: "Bewerben in der Schweiz aus Deutschland oder Österreich",
    intro: "Viele Bewerbende aus Deutschland und Österreich unterschätzen die kleinen Unterschiede. Wer sie kennt, wirkt sofort vertrauter mit dem Schweizer Arbeitsmarkt.",
    sections: [
      {
        heading: "Die wichtigsten Unterschiede",
        links: [{"before": "Bei der passenden Wortwahl unterstützt Sie unser ", "text": "Service für Schweizer Motivationsschreiben", "to": "/motivationsschreiben-schreiben-lassen", "after": "."}],
        paragraphs: ["Inhaltlich ähneln sich die Unterlagen, doch Details machen den Unterschied:"],
        list: ["Kein «ß» – in der Schweiz schreibt man immer «ss»", "«Freundliche Grüsse» ohne Komma statt «Mit freundlichen Grüßen,»", "Arbeitszeugnisse sind fester Bestandteil des Dossiers", "Ein sachlicher, eher zurückhaltender Ton wirkt besser als Selbstlob"],
      },
      {
        heading: "Aufenthalt und Verfügbarkeit angeben",
        paragraphs: ["Für Personen aus EU/EFTA-Staaten gilt das Freizügigkeitsabkommen. Geben Sie im Lebenslauf trotzdem an, ob Sie bereits eine Bewilligung haben, als Grenzgänger arbeiten möchten oder ab wann Sie umziehen können – das beantwortet die erste Frage des Recruiters."],
      },
      {
        heading: "Abschlüsse verständlich machen",
        links: [{"before": "Wir helfen Ihnen, Ihre Laufbahn mit einer ", "text": "persönlichen Schweizer Lebenslauf-Beratung", "to": "/lebenslauf-schreiben-lassen", "after": " verständlich darzustellen."}],
        paragraphs: ["Nicht jeder Schweizer Recruiter kennt ausländische Abschlüsse oder Arbeitgeber. Eine kurze Einordnung (z. B. Branche, Grösse des Unternehmens, vergleichbarer Schweizer Abschluss) hilft, Ihr Profil richtig einzuschätzen."],
      },
    ],
    faq: [
      { q: "Brauche ich ein Foto im Lebenslauf?", a: "In der Schweiz ist ein professionelles Foto weiterhin üblich und wird von vielen Recruitern erwartet." },
      { q: "Soll ich Schweizerdeutsch erwähnen?", a: "Wenn Sie Schweizerdeutsch verstehen, lohnt sich ein kurzer Hinweis bei den Sprachkenntnissen – gerade bei Kundenkontakt." },
    ],
    ctaTitle: "Planen Sie den Schritt in die Schweiz?",
    ctaText: "Wir passen Ihre Unterlagen an den Schweizer Markt an.",
  }),
  zeugnisEn: en({
    path: "/en/guide/swiss-reference-letter",
    alternate: "/ratgeber/arbeitszeugnis-schweiz",
    navLabel: "Guide: Swiss reference letters",
    type: "article",
    title: "Swiss Reference Letter (Arbeitszeugnis) Explained | Bewerbungswerkstatt",
    description: "What a Swiss reference letter (Arbeitszeugnis) contains, how to read its wording and when to ask your employer for a correction.",
    eyebrow: "Guide",
    h1: "The Swiss reference letter (Arbeitszeugnis) – what it says and how to read it",
    intro: "In Switzerland, reference letters from previous employers are part of almost every application. Recruiters read them closely – so it pays to understand them.",
    sections: [
      {
        heading: "Your right to a reference",
        paragraphs: ["Under Article 330a of the Swiss Code of Obligations you can request a reference letter at any time, not only when you leave. A full reference covers the type and duration of employment as well as performance and conduct; a simple confirmation only states type and duration."],
      },
      {
        heading: "What a good reference contains",
        links: [{"before": "For a coherent set of documents, we offer ", "text": "complete Swiss application dossier support", "to": "/en/job-application-switzerland", "after": "."}],
        paragraphs: ["A meaningful full reference usually includes:"],
        list: ["Job title, duration and key responsibilities", "An assessment of performance and expertise", "An assessment of conduct towards managers, colleagues and clients", "A closing statement with thanks and good wishes"],
      },
      {
        heading: "Reading between the lines",
        paragraphs: ["A reference must be truthful and benevolent, so criticism is often only implied: missing statements about conduct, unusually short descriptions or a missing closing statement stand out to recruiters."],
      },
      {
        heading: "When to ask for a correction",
        links: [{"before": "You can also highlight your strengths with our ", "text": "tailored cover letter writing service", "to": "/en/cover-letter-switzerland", "after": "."}],
        paragraphs: ["If information is wrong or incomplete, you may ask for a correction. Suggest concrete wording, politely and with evidence. We are happy to review your reference and help you phrase the request."],
      },
    ],
    faq: [
      { q: "Do I need to include all reference letters?", a: "Usually the letters from your recent positions and those relevant to the target role. Very old ones can be left out." },
      { q: "I come from abroad and have no Swiss references. Is that a problem?", a: "No. Include recommendation letters or contacts for references from your previous employers and explain them briefly." },
    ],
    ctaTitle: "Not sure what your reference says?",
    ctaText: "We read it with you and show you how to use it in your dossier.",
  }),
  zuzugEn: en({
    path: "/en/guide/applying-to-switzerland-from-abroad",
    alternate: "/ratgeber/bewerben-in-der-schweiz-aus-deutschland",
    navLabel: "Guide: applying from abroad",
    type: "article",
    title: "Applying to Swiss Jobs from Abroad – CV Tips | Bewerbungswerkstatt",
    description: "Applying for a job in Switzerland from Germany, Austria or elsewhere: how Swiss CVs differ, what recruiters expect and how to present permits and degrees.",
    eyebrow: "Guide",
    h1: "Applying for Swiss jobs from abroad",
    intro: "Many applicants from abroad underestimate the small differences in Swiss applications. Knowing them makes you look familiar with the Swiss job market from the first page.",
    sections: [
      {
        heading: "The key differences",
        links: [{"before": "For wording that fits Swiss expectations, explore our ", "text": "cover letter writing service for Swiss jobs", "to": "/en/cover-letter-switzerland", "after": "."}],
        paragraphs: ["The content is similar to other countries, but details matter:"],
        list: ["Reference letters (Arbeitszeugnisse) are a standard part of the dossier", "A professional photo on the CV is still common", "A factual, modest tone works better than self-praise", "In German applications: “ss” instead of “ß” and “Freundliche Grüsse” without a comma"],
      },
      {
        heading: "State your permit and availability",
        paragraphs: ["Say clearly whether you already hold a Swiss permit, plan to commute as a cross-border worker or when you can relocate. EU/EFTA citizens benefit from the free movement agreement; other nationals usually need employer sponsorship, so mention your situation openly."],
      },
      {
        heading: "Make your background easy to understand",
        links: [{"before": "Our ", "text": "personal Swiss CV consulting service", "to": "/en/swiss-cv-writing", "after": " helps make your experience and qualifications clear."}],
        paragraphs: ["Swiss recruiters may not know foreign degrees or employers. A short explanation – industry, company size, comparable Swiss qualification – helps them place your profile correctly."],
      },
    ],
    faq: [
      { q: "Can I apply in English?", a: "Many international companies, especially in IT and finance, accept English applications. If the job ad is in German, apply in German." },
      { q: "Do you work with clients outside Switzerland?", a: "Yes. All consultations take place online, in English or German." },
    ],
    ctaTitle: "Planning your move to Switzerland?",
    ctaText: "We get your documents ready for the Swiss job market.",
  }),
  cvFehlerDe: de({
    path: "/ratgeber/lebenslauf-fehler-schweiz",
    alternate: "/ratgeber/lebenslauf-fehler-schweiz",
    noEnAlternate: true,
    navLabel: "Ratgeber: Lebenslauf-Fehler",
    type: "article",
    title: "Lebenslauf Schweiz: 7 typische Fehler und praktische Tipps",
    description: "Zu viel Text, unklare Stärken oder schlechtes Layout? Entdecken Sie 7 typische Fehler im Schweizer Lebenslauf – mit Beispielen und einer CV-Checkliste.",
    eyebrow: "Ratgeber / Lebenslauf",
    h1: "Lebenslauf Schweiz: 7 typische Fehler, die Ihren CV schwächen",
    intro: "Viele Lebensläufe sehen heute ähnlich aus. Dieselben Vorlagen, ähnliche Formulierungen und oft viel Text, der wenig über die eigentlichen Stärken einer Person aussagt. Dabei muss ein guter Lebenslauf weder besonders kreativ noch aussergewöhnlich gestaltet sein. Viel wichtiger ist, dass die relevanten Erfahrungen und Fähigkeiten schnell erkennbar sind. Gerade bei Bewerbungen in der Schweiz lohnt es sich deshalb, den eigenen CV kritisch zu überprüfen. Wir zeigen Ihnen sieben typische Schwachstellen und wie Sie Ihren Lebenslauf gezielt verbessern können.",
    dates: { published: "2026-11-21", modified: "2026-11-21" },
    sections: [
      {
        heading: "1. Zu viel Text: Die wichtigen Informationen gehen unter",
        paragraphs: [
          "Ein Lebenslauf soll einen Überblick über den beruflichen Werdegang geben und nicht jede einzelne Aufgabe ausführlich beschreiben.",
          "Besonders bei Berufserfahrenen sammeln sich im Laufe der Jahre viele Tätigkeiten und Verantwortungsbereiche an. Wer alles aufführt, riskiert, dass die für die gewünschte Stelle relevanten Informationen untergehen.",
        ],
        subsections: [
          {
            title: "So wird es übersichtlicher:",
            list: [
              "Verwenden Sie kurze, aussagekräftige Stichpunkte.",
              "Beschränken Sie sich auf die wichtigsten Aufgaben und Erfahrungen.",
              "Beschreiben Sie aktuelle und relevante Positionen ausführlicher als weit zurückliegende Tätigkeiten.",
              "Vermeiden Sie lange Fliesstexte.",
            ],
          },
        ],
        examples: [
          { label: "Weniger aussagekräftig:", lines: ["«Ich war für verschiedene administrative Tätigkeiten zuständig, habe Dokumente bearbeitet, mit Kunden kommuniziert und unterschiedliche interne Prozesse unterstützt.»"] },
          { label: "Besser:", lines: ["Administrative Betreuung von Kundenaufträgen", "Erstellung und Prüfung von Vertragsunterlagen", "Koordination zwischen Kunden und internen Fachabteilungen"] },
        ],
      },
      {
        heading: "2. Es ist nicht erkennbar, warum Sie zur Stelle passen",
        paragraphs: [
          "Ein häufiger Schwachpunkt ist ein Lebenslauf, der für jede Bewerbung unverändert verwendet wird.",
          "Natürlich müssen Sie Ihren CV nicht jedes Mal vollständig neu erstellen. Aber die wichtigsten Anforderungen einer Stelle sollten sich in Ihrem Lebenslauf wiederfinden – sofern Sie die entsprechenden Erfahrungen tatsächlich mitbringen.",
        ],
        examples: [
          { label: "Beispiel:", lines: ["Sie bewerben sich auf eine Stelle im Finanzbereich. Im Inserat werden Kenntnisse in der Rechnungsprüfung, Excel und der Zusammenarbeit mit verschiedenen Fachabteilungen verlangt. Diese Erfahrungen sind in Ihrem Lebenslauf vorhanden, stehen aber zwischen zahlreichen anderen Aufgaben. Hier hilft es, die relevanten Kompetenzen weiter oben zu platzieren und bei der Berufserfahrung deutlicher hervorzuheben."] },
        ],
      },
      {
        heading: "3. Sie beschreiben nur Aufgaben statt Ihren Beitrag",
        paragraphs: [
          "«Verantwortlich für Projekte.» «Bearbeitung von Kundenanfragen.» «Mitarbeit im Tagesgeschäft.» Solche Aussagen sind nicht grundsätzlich falsch. Sie bleiben aber sehr allgemein.",
          "Ein überzeugender Lebenslauf sollte möglichst konkret zeigen, welche Verantwortung Sie übernommen haben und welchen Beitrag Sie im Unternehmen geleistet haben.",
        ],
        examples: [
          { label: "Back Office", lines: ["Statt: «Allgemeine administrative Tätigkeiten»", "Besser: «Selbstständige Bearbeitung von Kundenaufträgen sowie Koordination mit internen Fachabteilungen»"] },
          { label: "Finance", lines: ["Statt: «Zuständig für das Reporting»", "Besser: «Erstellung monatlicher Finanzreportings und Aufbereitung von Abweichungsanalysen für die Bereichsleitung»"] },
          { label: "IT", lines: ["Statt: «Entwicklung von Software»", "Besser: «Entwicklung und Wartung interner Webanwendungen sowie Analyse und Behebung technischer Fehler»"] },
        ],
      },
      {
        heading: "4. Allgemeine Stärken werden nicht belegt",
        paragraphs: [
          "Teamfähig, belastbar, motiviert, zuverlässig. Diese Eigenschaften finden sich in vielen Lebensläufen. Ohne konkreten Zusammenhang sagen sie allerdings wenig darüber aus, wie jemand arbeitet.",
          "Statt möglichst viele persönliche Stärken aufzuzählen, sollten Sie überlegen, wie Sie diese anhand Ihrer beruflichen Erfahrungen sichtbar machen können.",
        ],
        examples: [
          { label: "Beispiel:", lines: ["Statt lediglich «organisationsstark» aufzuführen, können Sie bei einer passenden beruflichen Station erwähnen: «Eigenständige Organisation und Koordination von Terminen, Sitzungen und administrativen Abläufen für mehrere Fachabteilungen.» Damit wird nachvollziehbarer, worauf die genannte Stärke beruht."] },
        ],
      },
      {
        heading: "5. Das Design macht den Lebenslauf schwer lesbar",
        paragraphs: [
          "Ein modernes Layout kann einen Lebenslauf aufwerten. Zu viele Farben, Symbole, Grafiken oder ungewöhnliche Schriftarten können jedoch vom Inhalt ablenken.",
          "Auch eine aufwendige Vorlage ist nicht automatisch besser als ein schlicht gestalteter CV.",
        ],
        subsections: [
          {
            title: "Worauf Sie achten sollten:",
            list: [
              "Gut lesbare Schrift und angemessene Schriftgrösse",
              "Klare Überschriften und einheitliche Formatierung",
              "Genügend Abstand zwischen den Abschnitten",
              "Einheitliche Datumsangaben",
              "Eine nachvollziehbare Reihenfolge der beruflichen Stationen",
            ],
          },
        ],
      },
      {
        heading: "6. Wichtige Angaben fehlen oder sind unklar",
        paragraphs: ["Manchmal sind es kleine Unklarheiten, die einen Lebenslauf unnötig kompliziert machen. Dazu gehören beispielsweise:"],
        list: [
          "Fehlende oder veraltete Kontaktdaten",
          "Unklare Zeitangaben bei früheren Anstellungen",
          "Sprachkenntnisse ohne nachvollziehbare Einstufung",
          "Abkürzungen, die ausserhalb der eigenen Branche nicht verständlich sind",
          "Fehlende Informationen zu relevanten Weiterbildungen",
        ],
      },
      {
        heading: "7. Der Lebenslauf klingt zu generisch oder offensichtlich KI-generiert",
        paragraphs: [
          "KI-Tools können beim Formulieren eines Lebenslaufs hilfreich sein. Sie können beispielsweise Texte kürzen, die Struktur verbessern oder alternative Formulierungen vorschlagen. Schwierig wird es, wenn Vorschläge ungeprüft übernommen werden.",
          "Dann entstehen häufig sehr allgemeine Beschreibungen wie: «Ergebnisorientierte Fachperson mit ausgeprägten Kommunikationsfähigkeiten und einer Leidenschaft für innovative Lösungen.» Das klingt professionell, verrät aber kaum etwas über die tatsächliche Erfahrung.",
        ],
        examples: [
          { label: "Besser ist eine konkrete Beschreibung:", lines: ["«Kundenberaterin mit Erfahrung in der Betreuung von Privatkunden, der Bearbeitung komplexer Anfragen und der Zusammenarbeit mit internen Fachabteilungen.» Das zweite Beispiel macht das berufliche Profil verständlicher."] },
        ],
      },
      {
        heading: "Checkliste: Wie gut ist Ihr Lebenslauf?",
        paragraphs: ["Bevor Sie Ihre nächste Bewerbung verschicken, nehmen Sie sich einige Minuten für diese Fragen:"],
        checklist: [
          "Sind meine wichtigsten Stärken und Erfahrungen sofort erkennbar?",
          "Ist mein Lebenslauf übersichtlich und angenehm zu lesen?",
          "Sind die relevantesten Qualifikationen auf die gewünschte Stelle ausgerichtet?",
          "Beschreibe ich meine Aufgaben und Verantwortungsbereiche konkret?",
          "Sind alle wichtigen Angaben aktuell, korrekt und nachvollziehbar?",
          "Habe ich allgemeine Floskeln und unnötige Wiederholungen entfernt?",
          "Ist mein CV frei von Rechtschreibfehlern und korrekt als PDF gespeichert?",
        ],
      },
      {
        heading: "Wann lohnt sich ein professioneller CV-Check?",
        paragraphs: [
          "Nicht jeder Lebenslauf muss komplett neu geschrieben werden. Oft ist bereits eine gute Grundlage vorhanden. Trotzdem kann es schwierig sein, den eigenen Werdegang aus einer neutralen Perspektive zu betrachten.",
          "Eine persönliche Überprüfung ist beispielsweise sinnvoll, wenn Sie:",
        ],
        list: [
          "sich schon länger bewerben und unsicher sind, ob Ihr CV Ihre Stärken ausreichend zeigt;",
          "nach mehreren Jahren einen Stellenwechsel planen;",
          "sich beruflich neu orientieren möchten;",
          "sich aus dem Ausland auf Stellen in der Schweiz bewerben;",
          "Ihren Lebenslauf gezielt auf eine bestimmte Position ausrichten möchten.",
        ],
      },
      {
        heading: "Persönliche CV-Beratung bei der Bewerbungswerkstatt",
        links: [
          { before: "Weitere Informationen finden Sie auf unserer Seite zur ", text: "persönlichen Lebenslauf-Beratung in der Schweiz", to: "/lebenslauf-schreiben-lassen", after: "." },
          { before: "Wenn Sie sich erstmals mit dem Schweizer Bewerbungsprozess beschäftigen, empfehlen wir zusätzlich unseren ", text: "Ratgeber zum Bewerben in der Schweiz", to: "/ratgeber/bewerben-in-der-schweiz", after: "." },
        ],
        paragraphs: [
          "Bei der Bewerbungswerkstatt prüfen wir bestehende Lebensläufe persönlich und besprechen, wo Verbesserungen sinnvoll sind. Dabei berücksichtigen wir Ihren beruflichen Hintergrund, Ihre Erfahrungen und die Stellen, auf die Sie sich bewerben möchten.",
          "Das Online-Analysegespräch dauert bis zu 45 Minuten und kostet CHF 95. Für eine anschliessende Überarbeitung des Lebenslaufs gilt ein Stundensatz von CHF 75.",
        ],
      },
      {
        heading: "Fazit: Ein guter Lebenslauf zeigt, was Sie wirklich mitbringen",
        links: [{ before: "Die Bewerbungswerkstatt unterstützt Sie mit einer persönlichen Analyse und konkreten Verbesserungsvorschlägen: ", text: "Jetzt Lebenslauf prüfen lassen und Kontakt aufnehmen", to: "/lebenslauf-schreiben-lassen", after: "." }],
        paragraphs: [
          "Ein überzeugender Lebenslauf braucht keine komplizierten Formulierungen und kein aussergewöhnliches Design. Er soll verständlich zeigen, was Sie können, welche Erfahrungen Sie mitbringen und warum Ihr Profil für eine bestimmte Stelle interessant ist.",
        ],
      },
      {
        heading: "Quellen und weiterführende Informationen",
        paragraphs: [],
        sources: [
          { label: "arbeit.swiss – Bewerbungstipps des Staatssekretariats für Wirtschaft (SECO)", href: "https://www.arbeit.swiss/de/stellensuchende/bewerbungstipps" },
          { label: "ZHAW Career Services – Bewerbungsunterlagen für die Schweiz", href: "https://www.zhaw.ch/de/studium/nach-dem-studium/career-services/bewerbungsunterlagen" },
          { label: "jobs.ch – Lebenslauf erstellen", href: "https://www.jobs.ch/de/job-coach/ratgeber-checklisten/lebenslauf-erstellen/" },
        ],
      },
    ],
    faq: [
      { q: "Wie lang sollte ein Lebenslauf in der Schweiz sein?", a: "Für viele Bewerbungen sind ein bis zwei Seiten ausreichend. Bei umfangreicher Berufserfahrung kann auch eine dritte Seite sinnvoll sein. Entscheidend sind Übersichtlichkeit und Relevanz, nicht eine starre Seitenzahl." },
      { q: "Brauche ich ein Bewerbungsfoto?", a: "Ein Bewerbungsfoto ist in der Schweiz weiterhin üblich, aber nicht gesetzlich vorgeschrieben. Wenn Sie ein Foto verwenden, sollte es aktuell und professionell sein." },
      { q: "Kann ich meinen Lebenslauf mit ChatGPT erstellen?", a: "Ja. KI kann bei Formulierungen und der Struktur helfen. Prüfen Sie jedoch alle Angaben sorgfältig und übernehmen Sie keine erfundenen Erfahrungen oder übertriebenen Aussagen." },
      { q: "Was ist der Unterschied zwischen CV-Check und Lebenslauf-Erstellung?", a: "Bei einem CV-Check wird ein bestehender Lebenslauf überprüft und es werden Verbesserungspotenziale aufgezeigt. Bei einer vollständigen Neuerstellung wird der Lebenslauf auf Basis Ihrer Informationen und Erfahrungen neu aufgebaut." },
      { q: "Muss ich meinen Lebenslauf für jede Stelle anpassen?", a: "Eine komplette Neuerstellung ist meistens nicht erforderlich. Es empfiehlt sich aber, die besonders relevanten Fähigkeiten, Erfahrungen und Fachkenntnisse passend zur ausgeschriebenen Stelle hervorzuheben." },
    ],
    ctaTitle: "Sie möchten Ihren bestehenden Lebenslauf professionell prüfen lassen?",
    ctaText: "Der Erstkontakt ist kostenlos und unverbindlich; das separate Analysegespräch kostet CHF 95.",
  }),
} satisfies Record<string, SeoPage>;

export const pagesByLang = (lang: Lang) => Object.values(seoPages).filter((p) => p.lang === lang);

const SITE = "https://www.bewerbungswerkstatt.ch";

export function seoHead(page: SeoPage) {
  const de = SITE + (page.lang === "de" ? page.path : page.alternate);
  const en = SITE + (page.lang === "en" ? page.path : page.alternate);
  const self = SITE + page.path;
  const alternates = page.noEnAlternate
    ? [
        { rel: "alternate", hrefLang: "de-CH", href: de },
        { rel: "alternate", hrefLang: "x-default", href: de },
      ]
    : [
        { rel: "alternate", hrefLang: "de-CH", href: de },
        { rel: "alternate", hrefLang: "en", href: en },
        { rel: "alternate", hrefLang: "x-default", href: de },
      ];
  return {
    meta: [
      { title: page.title },
      { name: "description", content: page.description },
      { property: "og:title", content: page.title },
      { property: "og:description", content: page.description },
      { property: "og:url", content: self },
      { property: "og:type", content: page.type === "article" ? "article" : "website" },
      { property: "og:locale", content: page.lang === "de" ? "de_CH" : "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: self }, ...alternates],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          page.type === "article"
            ? {
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: page.h1,
                description: page.description,
                inLanguage: page.lang === "de" ? "de-CH" : "en",
                author: { "@type": "Organization", name: "Bewerbungswerkstatt" },
                ...(page.dates ? { datePublished: page.dates.published, dateModified: page.dates.modified } : {}),
              }
            : { "@context": "https://schema.org", "@type": "Service", name: page.h1, description: page.description, inLanguage: page.lang, areaServed: "CH", provider: { "@type": "ProfessionalService", name: "Bewerbungswerkstatt", telephone: "+41 76 629 50 56", email: "audelia@bewerbungswerkstatt.ch", address: { "@type": "PostalAddress", postalCode: "6418", addressLocality: "Rothenthurm", addressCountry: "CH" } } },
        ),
      },
    ],
  };
}
