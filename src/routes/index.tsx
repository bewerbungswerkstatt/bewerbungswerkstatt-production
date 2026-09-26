import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  FilePenLine,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  PenLine,
  Phone,
  Search,
  ShieldCheck,
  Star,
  X,
} from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import audeliaAsset from "../assets/audelia.jpg.asset.json";
import danielAsset from "../assets/daniel.jpg.asset.json";
import darkLogoAsset from "../assets/logo_darkmode.png.asset.json";
import logoAsset from "../assets/logo.png.asset.json";
import zurichAsset from "../assets/zurich-panorama.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bewerbungswerkstatt | Bewerbungen, die herausstechen" },
      {
        name: "description",
        content:
          "Persönliche CV-Beratung und überzeugende Motivationsschreiben für den Schweizer Arbeitsmarkt.",
      },
      {
        property: "og:title",
        content: "Bewerbungswerkstatt | Bewerbungen, die herausstechen",
      },
      {
        property: "og:description",
        content:
          "Persönliche Bewerbungsberatung für Professionals in Tech, Finance und Back Office.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const comparisons: Array<[string, string, string]> = [
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
];

const reviews = [
  ["«Ich habe die Beratung und die Dossier-Updates sehr geschätzt. Das Team kennt ihr Businessbereich sehr gut.»", "Emilie H."],
  ["«Ich bin sehr dankbar für das Upgrade meines Lebenslaufes und Motivationsschreiben.»", "Alessia A."],
  ["«Ich bin absolut fasziniert von dem Motivationsschreiben von Audelia. Ich hatte sogar mein erstes Interview meiner jetzigen Stelle Dank ihr!»", "Basil N."],
  ["«Ich bin schon mehrere Jahre Kundin von Bewerbungswerkstatt und habe bereits einige Interviews ergattert dank ihren Bewerbungsdossiers. :) »", "Melissa H."],
  ["«Ich bin absolut zufrieden mit den Ratschlägen und natürlich mit meinen neuen Bewerbungsunterlagen, mit denen ich sofort erste Interviews ergattert habe.»", "Sarah M."],
  ["«Das Team hat mir geholfen meine Bewerbungsunterlagen professionell zu erstellen und ich wurde zu mehreren ersten Interviews eingeladen!»", "Raphael P."],
];

function BrandLogo({ dark = false }: { dark?: boolean }) {
  return (
    <img
      className="brand-logo"
      src={dark ? darkLogoAsset.url : logoAsset.url}
      alt="Bewerbungswerkstatt"
    />
  );
}

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) setStarted(true);
    }, { threshold: 0.5 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 650;
    const startedAt = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, target]);

  return <span ref={ref}>{value}{suffix}</span>;
}

function MarketStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.18 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`market-grid ${visible ? "market-grid--visible" : ""}`}>
      <article className="stat-card"><div className="stat"><CountUp target={5} /><sup>*</sup></div><h3>Stellensuchende pro offene Stelle</h3><p>Der Schweizer Arbeitsmarkt erlebt einen sehr hohen Wettbewerb.</p></article>
      <article className="stat-card"><div className="stat stat--word">Mehrheit</div><h3>der Bewerbungen sind identische KI-Lebensläufe</h3><p>ChatGPT, gleiche Prompts, gleiche Resultate.</p></article>
      <article className="stat-card"><div className="stat"><CountUp target={200} suffix="+" /><sup>**</sup></div><h3>Bewerbungen auf beliebte Finance-Stellen</h3><p>Bei Rollen in Tech, Banking &amp; Finance ist der Wettbewerb besonders hart.</p></article>
    </div>
  );
}

function useScrollReveal(threshold = 0.18) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold });
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function StepCard({ icon, title, children, delay = 0 }: { icon: ReactNode; title: string; children: ReactNode; delay?: number }) {
  const { ref, visible } = useScrollReveal();
  return (
    <article ref={ref} className={`scroll-reveal reveal-delay-${delay} ${visible ? "scroll-reveal--visible" : ""}`}>
      <span className="step-icon">{icon}</span><h3>{title}</h3><p>{children}</p>
    </article>
  );
}

function ComparisonCard({ title, issue, answer }: { title: string; issue: string; answer: string }) {
  const { ref, visible } = useScrollReveal(0.12);
  return (
    <article ref={ref} className={`comparison-row scroll-reveal ${visible ? "scroll-reveal--visible" : ""}`}>
      <div><h4>{title}</h4><p>{issue}</p></div>
      <span className="arrow"><ArrowRight /></span>
      <strong>{answer}</strong>
    </article>
  );
}

function SectionHeading({ children, subline, light = false }: { children: ReactNode; subline?: string; light?: boolean }) {
  return (
    <div className={`section-heading ${light ? "section-heading--light" : ""}`}>
      <h2>{children}</h2>
      {subline ? <p>{subline}</p> : null}
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 70);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.body.classList.add("menu-open");
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  const menuLinks = [
    ["#herausforderung", "Herausforderung"],
    ["#loesung", "Lösung"],
    ["#angebot", "Angebot"],
    ["#preise", "Preise"],
    ["#experten", "Experten"],
    ["#kontakt", "Kontakt"],
  ];

  return (
    <>
      <header className="hero-header">
        <BrandLogo dark />
        <nav aria-label="Hauptnavigation">
          {menuLinks.map(([href, label]) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <a className="button button--primary hero-header__cta" href="#kontakt">Erstgespräch buchen</a>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Menü öffnen"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(true)}
        >
          <Menu />
        </button>
      </header>
      <div className={`menu-overlay ${menuOpen ? "menu-overlay--open" : ""}`} aria-hidden={!menuOpen}>
        <button className="menu-backdrop" type="button" aria-label="Menü schliessen" onClick={() => setMenuOpen(false)} />
        <aside className="mobile-menu" id="mobile-menu" aria-label="Mobile Navigation">
          <button className="menu-close" type="button" aria-label="Menü schliessen" onClick={() => setMenuOpen(false)}><X /></button>
          <nav>
            {menuLinks.map(([href, label]) => <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          </nav>
          <a className="button button--primary button--wide" href="#kontakt" onClick={() => setMenuOpen(false)}>Erstgespräch buchen</a>
        </aside>
      </div>
      <header className={`sticky-header ${scrolled ? "sticky-header--visible" : ""}`} aria-hidden={!scrolled}>
        <BrandLogo />
        <a className="button button--primary" href="#kontakt">Erstgespräch buchen</a>
      </header>
    </>
  );
}

function Index() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <Header />
        <div className="hero-copy">
          <p className="eyebrow">Für Professionals in Tech, Finance &amp; Back Office</p>
          <h1 id="hero-title">Heben Sie sich ab <strong>von der KI-generierten<br />Masse</strong></h1>
          <p className="hero-lead">Wir helfen Ihnen, Ihren besten Lebenslauf zu schreiben — authentisch,<br className="desktop-break" /> überzeugend und menschlich. Keine generischen Phrasen, sondern<br className="desktop-break" /> echte Worte, die Recruiter überzeugen.</p>
        </div>
        <div className="application-field" aria-hidden="true">
          {["application-row--right", "application-row--left"].map((direction, row) => (
            <div className={`application-row ${direction}`} key={direction}>
              <div className="application-track">
                {Array.from({ length: 32 }, (_, index) => {
                  const position = index % 16;
                  const active = row === 0 ? position === 12 : position === 4;
                  const profile = (position + row) % 2 === 0;
                  return (
                    <div className={`application-card ${profile ? "application-card--profile" : "application-card--letter"} ${active ? "application-card--active" : ""}`} key={index}>
                      <div className="application-card__heading">{profile ? <i /> : null}<span><b /><b /></span></div>
                      <em><b /><b /><b /><b /><b /></em>
                      {active ? <small><b /><b /><b /></small> : null}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <p className="hero-caption">Hunderte Bewerbungen. Fast alle identisch. Welche sticht heraus?</p>
      </section>

      <section className="market section-light" id="herausforderung">
        <div className="container">
          <SectionHeading subline="Kennen Sie das? Hunderte Bewerbungen verschickt, nur generische Absagen erhalten.">Die Realität des Schweizer Arbeitsmarkts</SectionHeading>
          <MarketStats />
          <p className="market-copy">Der Schweizer Arbeitsmarkt bleibt hart umkämpft: Im März 2026 standen 234’815 registrierten Stellensuchenden 48’843 beim RAV gemeldete offene Stellen gegenüber.<br />Alle benutzen dieselben KI-Tools, um dieselben generischen Lebensläufe und Motivationsschreiben zu erstellen. Ihr CV sieht aus wie jeder andere — und landet auf demselben Stapel.</p>
          <div className="sources"><a href="https://www.seco.admin.ch/seco/de/home/Publikationen_Dienstleistungen/Publikationen_und_Formulare/Arbeit/Arbeitslosenversicherung/Die_Lage_auf_dem_Arbeitsmarkt/lage_arbeitsmarkt_2026.html" target="_blank" rel="noreferrer">* Offizieller Arbeitsmarktbericht 2026 (SECO)</a><a href="https://economicgraph.linkedin.com/" target="_blank" rel="noreferrer">** LinkedIn Economic Graph</a></div>
        </div>
      </section>

      <section className="difference section-dark" id="loesung">
        <div className="container">
          <SectionHeading light subline="Drei Schritte zu einer Bewerbung, die wirklich überzeugt.">So machen Sie den Unterschied</SectionHeading>
          <div className="steps">
            <StepCard icon={<Search />} title="Menschliche Analyse">Ein echter Experte analysiert Ihren Lebenslauf — nicht ein Algorithmus, sondern jemand, der den Schweizer Arbeitsmarkt kennt.</StepCard>
            <StepCard icon={<Star />} title="Erster Eindruck optimieren" delay={1}>Struktur, Layout, Kernaussagen — wir optimieren alles, was in den ersten 8 Sekunden zählt.</StepCard>
            <StepCard icon={<PenLine />} title="Ehrlicher, menschlicher Text" delay={2}>Keine generischen KI-Phrasen. Echte Worte, die Ihre tatsächlichen Stärken und Erfahrungen zeigen.</StepCard>
          </div>
          <div className="comparison-heading"><h3>Der Unterschied auf einen Blick</h3><p>Typische Fehler in Schweizer Bewerbungen — und wie es besser geht.</p></div>
          <div className="comparisons">
            {comparisons.map(([title, issue, answer]) => (
              <ComparisonCard title={title} issue={issue} answer={answer} key={title} />
            ))}
          </div>
        </div>
      </section>

      <section className="services section-white" id="angebot">
        <div className="container container--narrow">
          <SectionHeading subline="Massgeschneiderte Unterstützung in Deutsch und Englisch.">Unsere Dienstleistungen</SectionHeading>
          <div className="service-grid">
            <article><span className="service-icon"><ClipboardCheck /></span><h3>Einen CV, der beim ersten Eindruck überzeugt.</h3><p>Persönliche Analyse Ihres Lebenslaufs mit einem Experten. Wir identifizieren Schwachstellen und erarbeiten gemeinsam eine überzeugende Darstellung Ihrer Laufbahn.</p></article>
            <article><span className="service-icon"><MessageSquare /></span><h3>Ein Motivationsschreiben, das auf die Anforderungen der Stelle zugeschnitten ist.</h3><p>Wir zeigen Ihnen, wie ein von der Masse herausstechendes Motivationsschreiben aussehen könnte.</p></article>
            <article><span className="service-icon"><FilePenLine /></span><h3>Komplett neues Dossier erstellen</h3><p>Professionelle Überarbeitung oder Neuerstellung von Lebenslauf und Motivationsschreiben. Jedes Wort wird sorgfältig gewählt.</p></article>
            <article><span className="service-icon"><MapPin /></span><h3>Lokale Expertise</h3><p>Unsere Berater kennen den Arbeitsmarkt in der Deutschschweiz — von Tech-Startups über Banken bis zu Back-Office-Positionen.</p></article>
          </div>
          <div className="local-banner"><img src={zurichAsset.url} alt="Zürich Panorama" /><span className="swiss-flag" aria-label="Schweizer Flagge" /><div><h3>Lokal verankert. Persönlich engagiert.</h3><p>Unsere Berater leben und arbeiten in der Deutschschweiz — sie kennen den Markt, die Kultur und die Erwartungen Ihrer zukünftigen Arbeitgeber.</p></div></div>
        </div>
      </section>

      <section className="reviews section-light" aria-labelledby="reviews-title">
        <h2 id="reviews-title">Das sagen unsere Kunden</h2>
        <div className="review-marquee">
          <div className="review-track">
            {[...reviews, ...reviews].map(([quote, name], index) => <article className="review-card" key={`${name}-${index}`}><p>{quote}</p><strong>{name}</strong></article>)}
          </div>
        </div>
      </section>

      <section className="pricing section-light" id="preise">
        <div className="container container--pricing">
          <SectionHeading subline="Faire Stundensätze, keine versteckten Kosten.">Transparente Preise</SectionHeading>
          <div className="pricing-grid">
            <article className="price-card price-card--featured"><span className="pill">Einstieg</span><h3>Analyse &amp; Erstgespräch</h3><div className="price">95 <small>CHF</small></div><p>Online Besprechung bis zu 45 Minuten</p><ul>{["Analyse Ihrer aktuellen Unterlagen", "Identifikation der grössten Verbesserungspotenziale", "Konkreter Massnahmenplan", "Vollständig online", "Unverbindlich"].map(item => <li key={item}><Check />{item}</li>)}</ul><a className="button button--primary button--wide" href="#kontakt">Termin vereinbaren</a><small className="refund"><ShieldCheck /> Nicht zufrieden? Volle Rückerstattung.</small></article>
            <article className="price-card"><span className="pill pill--muted">Weiterführend</span><h3>CV-Review &amp; Bearbeitung</h3><div className="price">75 <small>CHF</small></div><p>pro Stunde</p><ul>{["Detaillierte Überarbeitung Lebenslauf", "Motivationsschreiben Optimierung", "Laufende Anpassungen & Feedback", "Auf Ihre Zielbranche zugeschnitten"].map(item => <li key={item}><Check />{item}</li>)}</ul><a className="button button--outline button--wide" href="#kontakt">Kontakt aufnehmen</a></article>
          </div>
        </div>
      </section>

      <section className="experts section-white" id="experten">
        <div className="container container--experts">
          <h2>Ihre Experten</h2>
          <div className="expert-row"><img className="expert-photo expert-photo--audelia" src={audeliaAsset.url} alt="Audelia Babbev-Pittet" /><div><h3>Audelia Babbev-Pittet</h3><p className="expert-role">Bewerbungsspezialistin im Finanz- Versicherungs- und Back Office Sektor</p><p>Mit mehr als 5 Jahre Erfahrung in der Beratung von Stellensuchenden habe ich es mir zur Aufgabe gemacht, Sie dabei zu unterstützen, sich authentisch und überzeugend zu bewerben.</p><p>Ich schreibe Bewerbungen mit Leidenschaft - und das widerspiegelt sich in jedem Text. In einer Welt voller KI-generierter Lebensläufe und Motivationsschreiben zeige ich Ihnen, wie Sie mit ehrlichen, menschlichen Worten den Unterschied machen. Als lokale Beraterin in der Deutschschweiz kenne ich den Markt und weiss, worauf Rekruter wirklich achten.</p></div></div>
          <div className="expert-row"><img className="expert-photo" src={danielAsset.url} alt="Daniel Babbev" /><div><h3>Daniel Babbev</h3><p className="expert-role">Bewerbungsspezialist im IT Sektor</p><p>Als Softwareingenieur mit über 10 Jahren Erfahrung weiss ich genau, worauf es bei technischen Bewerbungen ankommt. Ich habe mich darauf spezialisiert, Ihre technischen Kenntnisse, Projekte und Fähigkeiten überzeugend und professionell auf Papier zu bringen.</p><p>Als jemand, der selbst für die Besetzung mehrerer Stellen verantwortlich war, weiss ich genau, worauf technische Rekruter achten - und wie ich Ihren Lebenslauf genau dort positioniere.</p></div></div>
        </div>
      </section>

      <section className="contact section-dark" id="kontakt">
        <div className="container contact-inner"><div><p className="eyebrow">Persönlich. Unverbindlich. Auf Augenhöhe.</p><h2>Bereit für den nächsten<br />Karriereschritt?</h2><p>Kontaktieren Sie uns für ein unverbindliches Erstgespräch.</p></div><div className="contact-list"><a href="mailto:audelia@bewerbungswerkstatt.ch"><Mail /><span><small>E-Mail</small>audelia@bewerbungswerkstatt.ch</span></a><a href="tel:+41766295056"><Phone /><span><small>Telefon</small>076 629 50 56</span></a><div><MapPin /><span><small>Standort</small>Einsiedeln / Deutschschweiz</span></div><a className="button button--primary button--wide" href="mailto:audelia@bewerbungswerkstatt.ch?subject=Erstgespräch">Erstgespräch buchen</a></div></div>
      </section>
      <footer><BrandLogo dark /><p>© 2026 Bewerbungswerkstatt. Alle Rechte vorbehalten.</p></footer>
    </main>
  );
}