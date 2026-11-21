import type { ReactNode } from "react";

export type Lang = "de" | "en";

type Comparison = [string, string, string];

export type HomeContent = {
  menu: Array<[string, string]>;
  cta: string;
  menuOpen: string;
  menuClose: string;
  navLabel: string;
  mobileNavLabel: string;
  switchLabel: string;
  switchHref: string;
  switchText: string;
  heroEyebrow: string;
  heroTitle: ReactNode;
  heroLead: ReactNode;
  heroCaption: string;
  marketTitle: string;
  marketSub: string;
  stats: [[string, string], [string, string, string], [string, string]];
  marketCopy: ReactNode;
  sources: [string];
  diffTitle: string;
  diffSub: string;
  steps: Array<[string, string]>;
  compTitle: string;
  compSub: string;
  comparisons: Comparison[];
  servicesTitle: string;
  servicesSub: string;
  services: Array<[string, string, string]>;
  more: string;
  bannerAlt: string;
  flagLabel: string;
  bannerTitle: string;
  bannerText: string;
  reviewsTitle: string;
  pricingTitle: string;
  pricingSub: string;
  price1: { pill: string; title: string; unit: string; items: string[]; button: string; refund: string };
  price2: { pill: string; title: string; unit: string; items: string[]; button: string };
  expertsTitle: string;
  audelia: { role: string; lead: string; text: string };
  daniel: { role: string; texts: [string, string] };
  contact: {
    eyebrow: string;
    title: ReactNode;
    text: string;
    email: string;
    phone: string;
    location: string;
    name: string;
    message: string;
    send: string;
    sending: string;
    successTitle: string;
    successText: string;
    close: string;
    genericError: string;
    fieldErrors: Record<string, string>;
  };
};

export const homeContent: Record<Lang, HomeContent> = {
  de: {
    menu: [
      ["#herausforderung", "Herausforderung"],
      ["#loesung", "Lösung"],
      ["#angebot", "Angebot"],
      ["#preise", "Preise"],
      ["#experten", "Experten"],
      ["#kontakt", "Kontakt"],
    ],
    cta: "Erstkontakt anfragen",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schliessen",
    navLabel: "Hauptnavigation",
    mobileNavLabel: "Mobile Navigation",
    switchLabel: "English version",
    switchHref: "/en",
    switchText: "EN",
    heroEyebrow: "Für Professionals in Tech, Finance & Back Office",
    heroTitle: <>Heben Sie sich ab <strong>von der KI-generierten<br />Masse</strong></>,
    heroLead: <>Wir helfen Ihnen, Ihren besten Lebenslauf zu schreiben — authentisch,<br className="desktop-break" /> überzeugend und menschlich. Keine generischen Phrasen, sondern<br className="desktop-break" /> echte Worte, die Recruiter überzeugen.</>,
    heroCaption: "Standardformulierungen oder ein persönliches Profil: Was macht Ihre Bewerbung aus?",
    marketTitle: "Die Realität des Schweizer Arbeitsmarkts",
    marketSub: "Ein Blick auf gemeldete Stellensuchende und offene Stellen – Stand März 2026.",
    stats: [
      ["Registrierte Stellensuchende je gemeldeter Stelle", "Verhältnis der RAV-Bestände im März 2026; keine Zahl der Bewerbungen je Stelle."],
      ["KI", "ersetzt kein persönliches Profil", "Standardformulierungen können austauschbar wirken. Konkrete Erfahrungen machen Ihr Profil greifbar."],
      ["Offene Stellen bei den RAV gemeldet", "Stand März 2026. Gemeldete Stellen bilden nur einen Teil des gesamten Stellenangebots ab."],
    ],
    marketCopy: <>Laut SECO waren im März 2026 insgesamt 234’815 Stellensuchende und 48’843 offene Stellen bei den RAV registriert. Das ergibt rechnerisch rund 4,8 Stellensuchende je gemeldeter Stelle.<br />Die Stellenzahl umfasst nur einen Teil des Stellenangebots, einschliesslich 172 Stellen im grenznahen Ausland. Das Verhältnis sagt weder aus, wie viele Personen sich auf eine einzelne Stelle bewerben, noch wie gross der Wettbewerb in einer bestimmten Branche ist.</>,
    sources: ["* SECO: Die Lage auf dem Arbeitsmarkt, März 2026 – Tabellen 1 und 23"],
    diffTitle: "So machen Sie den Unterschied",
    diffSub: "Drei Schritte zu einer Bewerbung, die wirklich überzeugt.",
    steps: [
      ["Menschliche Analyse", "Ein echter Experte analysiert Ihren Lebenslauf — nicht ein Algorithmus, sondern jemand, der den Schweizer Arbeitsmarkt kennt."],
      ["Erster Eindruck optimieren", "Struktur, Layout, Kernaussagen — wir optimieren alles, beim ersten Eindruck zählt."],
      ["Ehrlicher, menschlicher Text", "Keine generischen KI-Phrasen. Echte Worte, die Ihre tatsächlichen Stärken und Erfahrungen zeigen."],
    ],
    compTitle: "Der Unterschied auf einen Blick",
    compSub: "Typische Fehler in Schweizer Bewerbungen — und wie es besser geht.",
    comparisons: [
      ["Fliesstext im CV", "Wichtige Informationen gehen unter, Text wird nicht gelesen.", "Eine DAS BRINGE ICH MIT Section und Stichwortartige Aufzählung."],
      ["Person auf dem Bild wendet sich GEGEN den CV", "Macht psychologisch einen unsauberen Eindruck", "Das Bild muss gespiegelt werden."],
      ["Wichtiges fehlt im Lebenslauf", "Rekrutierer finden die relevanten Infos nicht.", "Unbedingt darauf achten, dass der Lebenslauf vollständig ist."],
      ["„Sehr geehrte Damen und Herren”", "Generische Anrede — zeigt keine Mühe beim Finden der Ansprechsperson.", "Die zuständige Person namentlich ansprechen"],
      ["„Hiermit bewerbe ich mich...”", "Nutzlos — sagt nur das Offensichtliche", "Direkt mit Ihrem Mehrwert oder Interesse einsteigen"],
      ["„Mit grosser Freude habe ich Ihr Stelleninserat gesehen...”", "08/15", "Auch hier: direkt mit Ihrem Mehrwert oder Interesse einsteigen"],
      ["Das Anschreiben ist nicht auf die Stelle zugeschnitten", "Man geht nicht auf die Forderungen vom Stellenprofil ein.", "Die eigenen Qualifikationen und Erfahrungen an die gewünschten Fähigkeiten anpassen."],
      ["„Ich bin teamfähig, motiviert und belastbar.”", "Leere Standardfloskeln ohne Nachweis", "Was macht Sie tatsächlich als Person aus?"],
      ["„Ich würde mich sehr auf ein Interview freuen.”", "08/15, passiv und scheu", "„Ich freue mich darauf, Ihnen zu zeigen, wer hinter diesem Bewerbungsschreiben steckt.”"],
      ["„Mit freundlichen Grüssen,”", "Entspricht nicht der Schweizerischen Schreibnorm.", "„Freundliche Grüsse” (ohne Komma)"],
    ],
    servicesTitle: "Unsere Dienstleistungen",
    servicesSub: "Massgeschneiderte Unterstützung in Deutsch und Englisch.",
    services: [
      ["Einen CV, der beim ersten Eindruck überzeugt.", "Persönliche Analyse Ihres Lebenslaufs mit einem Experten. Wir identifizieren Schwachstellen und erarbeiten gemeinsam eine überzeugende Darstellung Ihrer Laufbahn.", "/lebenslauf-schreiben-lassen"],
      ["Ein Motivationsschreiben, das auf die Anforderungen der Stelle zugeschnitten ist.", "Wir zeigen Ihnen, wie ein von der Masse herausstechendes Motivationsschreiben aussehen könnte.", "/motivationsschreiben-schreiben-lassen"],
      ["Komplett neues Dossier erstellen", "Professionelle Überarbeitung oder Neuerstellung von Lebenslauf und Motivationsschreiben. Jedes Wort wird sorgfältig gewählt.", "/bewerbung-schreiben-lassen"],
      ["Lokale Expertise", "Unsere Berater kennen den Arbeitsmarkt in der Deutschschweiz — von Tech-Startups über Banken bis zu Back-Office-Positionen.", "/ratgeber/bewerben-in-der-schweiz"],
    ],
    more: "Mehr erfahren",
    bannerAlt: "Zürich Panorama",
    flagLabel: "Schweizer Flagge",
    bannerTitle: "Lokal verankert. Persönlich engagiert.",
    bannerText: "Unsere Berater leben und arbeiten in der Deutschschweiz — sie kennen den Markt, die Kultur und die Erwartungen Ihrer zukünftigen Arbeitgeber.",
    reviewsTitle: "Das sagen unsere Kunden",
    pricingTitle: "Transparente Preise",
    pricingSub: "Erstkontakt kostenlos. Analysegespräch CHF 95; anschliessende Bearbeitung CHF 75 pro Stunde.",
    price1: { pill: "Einstieg", title: "Analysegespräch", unit: "Online Besprechung bis zu 45 Minuten", items: ["Analyse Ihrer aktuellen Unterlagen", "Identifikation der grössten Verbesserungspotenziale", "Konkreter Massnahmenplan", "Vollständig online", "Keine Verpflichtung zur Weiterbearbeitung"], button: "Termin vereinbaren", refund: "Nicht zufrieden? Volle Rückerstattung." },
    price2: { pill: "Weiterführend", title: "CV-Review & Bearbeitung", unit: "pro Stunde", items: ["Detaillierte Überarbeitung Lebenslauf", "Motivationsschreiben Optimierung", "Laufende Anpassungen & Feedback", "Auf Ihre Zielbranche zugeschnitten"], button: "Kontakt aufnehmen" },
    expertsTitle: "Ihre Experten",
    audelia: {
      role: "Bewerbungsspezialistin im Finanz- Versicherungs- und Back Office Sektor",
      lead: "Mit mehr als 5 Jahre Erfahrung in der Beratung von Stellensuchenden habe ich es mir zur Aufgabe gemacht, Sie dabei zu unterstützen, sich authentisch und überzeugend zu bewerben.",
      text: "Ich schreibe Bewerbungen mit Leidenschaft - und das widerspiegelt sich in jedem Text. In einer Welt voller KI-generierter Lebensläufe und Motivationsschreiben zeige ich Ihnen, wie Sie mit ehrlichen, menschlichen Worten den Unterschied machen. Als lokale Beraterin in der Deutschschweiz kenne ich den Markt und weiss, worauf Rekruter wirklich achten.",
    },
    daniel: {
      role: "Bewerbungsspezialist im IT Sektor",
      texts: [
        "Als Softwareingenieur mit über 10 Jahren Erfahrung weiss ich genau, worauf es bei technischen Bewerbungen ankommt. Ich habe mich darauf spezialisiert, Ihre technischen Kenntnisse, Projekte und Fähigkeiten überzeugend und professionell auf Papier zu bringen.",
        "Als jemand, der selbst für die Besetzung mehrerer Stellen verantwortlich war, weiss ich genau, worauf technische Rekruter achten - und wie ich Ihren Lebenslauf genau dort positioniere.",
      ],
    },
    contact: {
      eyebrow: "Persönlich. Unverbindlich. Auf Augenhöhe.",
      title: <>Bereit für den nächsten<br />Karriereschritt?</>,
      text: "Der Erstkontakt zur Klärung Ihres Anliegens ist kostenlos und unverbindlich. Die separate Analyse Ihrer Unterlagen im Gespräch (bis zu 45 Minuten) kostet CHF 95.",
      email: "E-Mail",
      phone: "Telefon",
      location: "Standort",
      name: "Name",
      message: "Nachricht",
      send: "Nachricht absenden",
      sending: "Wird gesendet …",
      successTitle: "Vielen Dank für Ihre Nachricht.",
      successText: "Wir melden uns innerhalb von zwei Arbeitstagen bei Ihnen.",
      close: "Schliessen",
      genericError: "Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.",
      fieldErrors: {},
    },
  },
  en: {
    menu: [
      ["#challenge", "Challenge"],
      ["#solution", "Solution"],
      ["#services", "Services"],
      ["#pricing", "Pricing"],
      ["#experts", "Experts"],
      ["#contact", "Contact"],
    ],
    cta: "Request first contact",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    navLabel: "Main navigation",
    mobileNavLabel: "Mobile navigation",
    switchLabel: "Deutsche Version",
    switchHref: "/",
    switchText: "DE",
    heroEyebrow: "For professionals in tech, finance & back office",
    heroTitle: <>Stand out <strong>from the AI-generated<br />crowd</strong></>,
    heroLead: <>We help you write your best CV for the Swiss job market — authentic,<br className="desktop-break" /> convincing and human. No generic phrases, but<br className="desktop-break" /> real words that win over recruiters.</>,
    heroCaption: "Standard phrases or a personal profile: what makes your application yours?",
    marketTitle: "The reality of the Swiss job market",
    marketSub: "Registered job seekers and reported vacancies – a snapshot from March 2026.",
    stats: [
      ["Registered job seekers per reported vacancy", "Ratio of RAV registers in March 2026; not the number of applications per job."],
      ["AI", "cannot replace your personal profile", "Standard phrases can sound interchangeable. Concrete experience makes your profile tangible."],
      ["Vacancies reported to the RAV", "March 2026. Reported vacancies cover only part of the overall job market."],
    ],
    marketCopy: <>SECO recorded 234,815 registered job seekers and 48,843 vacancies reported to the RAV in March 2026: a calculated ratio of roughly 4.8 job seekers per reported vacancy.<br />Reported vacancies cover only part of the job market, including 172 positions in neighbouring countries. This ratio does not measure applications per job or competition in a particular industry.</>,
    sources: ["* SECO: Labour market report, March 2026 – tables 1 and 23 (German)"],
    diffTitle: "How you make the difference",
    diffSub: "Three steps to an application that truly convinces.",
    steps: [
      ["Human analysis", "A real expert reviews your CV — not an algorithm, but someone who knows the Swiss job market."],
      ["Optimise the first impression", "Structure, layout, key messages — we optimise everything that counts for the first impression."],
      ["Honest, human writing", "No generic AI phrases. Real words that show your actual strengths and experience."],
    ],
    compTitle: "The difference at a glance",
    compSub: "Typical mistakes in Swiss applications — and how to do better.",
    comparisons: [
      ["Running text in the CV", "Important information gets lost, the text is not read.", "A “WHAT I BRING” section and bullet-point lists."],
      ["The person in the photo faces AWAY from the CV", "Creates an awkward psychological impression", "Mirror the photo."],
      ["Key information missing from the CV", "Recruiters can't find the relevant details.", "Make sure your CV is complete."],
      ["“Dear Sir or Madam”", "Generic greeting — shows no effort to find the contact person.", "Address the responsible person by name"],
      ["“I hereby apply...”", "Useless — only states the obvious", "Open directly with your value or interest"],
      ["“It was with great pleasure that I saw your job ad...”", "Run-of-the-mill", "Again: open directly with your value or interest"],
      ["The cover letter is not tailored to the role", "It ignores the requirements of the job profile.", "Match your qualifications and experience to the required skills."],
      ["“I am a team player, motivated and resilient.”", "Empty clichés without proof", "What actually makes you who you are?"],
      ["“I would be very happy to have an interview.”", "Run-of-the-mill, passive and shy", "“I look forward to showing you who is behind this application.”"],
      ["German letters signed “Mit freundlichen Grüssen,”", "Does not follow the Swiss writing standard.", "“Freundliche Grüsse” (without a comma)"],
    ],
    servicesTitle: "Our services",
    servicesSub: "Tailored support in German and English.",
    services: [
      ["A CV that convinces at first glance.", "Personal analysis of your CV with an expert. We identify weak points and work together on a convincing presentation of your career.", "/en/swiss-cv-writing"],
      ["A cover letter tailored to the requirements of the role.", "We show you what a cover letter that stands out from the crowd can look like.", "/en/cover-letter-switzerland"],
      ["A completely new application dossier", "Professional revision or new creation of your CV and cover letter. Every word is chosen carefully.", "/en/job-application-switzerland"],
      ["Local expertise", "Our consultants know the job market in German-speaking Switzerland — from tech start-ups to banks and back-office roles.", "/en/guide/applying-for-jobs-in-switzerland"],
    ],
    more: "Learn more",
    bannerAlt: "Zurich panorama",
    flagLabel: "Swiss flag",
    bannerTitle: "Locally rooted. Personally committed.",
    bannerText: "Our consultants live and work in German-speaking Switzerland — they know the market, the culture and the expectations of your future employers.",
    reviewsTitle: "What our clients say",
    pricingTitle: "Transparent pricing",
    pricingSub: "First contact is free. Analysis meeting CHF 95; subsequent editing CHF 75 per hour.",
    price1: { pill: "Starter", title: "Analysis meeting", unit: "Online meeting of up to 45 minutes", items: ["Analysis of your current documents", "Identification of the biggest improvement potential", "Concrete action plan", "Fully online", "No obligation to book further editing"], button: "Book an appointment", refund: "Not satisfied? Full refund." },
    price2: { pill: "Advanced", title: "CV review & editing", unit: "per hour", items: ["Detailed revision of your CV", "Cover letter optimisation", "Ongoing adjustments & feedback", "Tailored to your target industry"], button: "Get in touch" },
    expertsTitle: "Your experts",
    audelia: {
      role: "Application specialist for finance, insurance and back office",
      lead: "With more than 5 years of experience advising job seekers, I have made it my mission to help you apply authentically and convincingly.",
      text: "I write applications with passion — and it shows in every text. In a world full of AI-generated CVs and cover letters, I show you how to make the difference with honest, human words. As a local consultant in German-speaking Switzerland, I know the market and what recruiters really look for.",
    },
    daniel: {
      role: "Application specialist for IT",
      texts: [
        "As a software engineer with more than 10 years of experience, I know exactly what matters in technical applications. I specialise in presenting your technical skills, projects and abilities convincingly and professionally.",
        "Having been responsible for filling several positions myself, I know exactly what technical recruiters look for — and how to position your CV right there.",
      ],
    },
    contact: {
      eyebrow: "Personal. No obligation. On equal terms.",
      title: <>Ready for your next<br />career step?</>,
      text: "First contact to discuss your needs is free and without obligation, in English or German. The separate document analysis meeting (up to 45 minutes) costs CHF 95.",
      email: "Email",
      phone: "Phone",
      location: "Location",
      name: "Name",
      message: "Message",
      send: "Send message",
      sending: "Sending …",
      successTitle: "Thank you for your message.",
      successText: "We will get back to you within two working days.",
      close: "Close",
      genericError: "Your message could not be sent. Please try again later.",
      fieldErrors: {
        name: "Please enter your name.",
        email: "Please enter a valid email address.",
        message: "Please enter a message.",
      },
    },
  },
};
