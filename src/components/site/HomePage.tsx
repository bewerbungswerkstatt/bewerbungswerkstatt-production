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
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { contactSchema } from "@/lib/contact-schema";
import { homeContent, type HomeContent, type Lang } from "@/lib/home-content";
import { SiteFooter } from "@/components/site/SiteFooter";
import { consultationPrices, labourMarket, registeredSeekersPerReportedVacancy } from "@/lib/verified-facts";
const audeliaAsset = { url: "/images/audelia.jpg" };
const danielAsset = { url: "/images/daniel.jpg" };
const darkLogoAsset = { url: "/images/logo_darkmode.png" };
const logoAsset = { url: "/images/logo.png" };
const zurichAsset = { url: "/images/zurich-panorama.jpeg" };

const reviews = [
  ["«Ich habe die Beratung und die Dossier-Updates sehr geschätzt. Das Team kennt ihr Businessbereich sehr gut.»", "Emilie H."],
  ["«Ich bin sehr dankbar für das Upgrade meines Lebenslaufes und Motivationsschreiben.»", "Alessia A."],
  ["«Ich bin absolut fasziniert von dem Motivationsschreiben von Audelia. Ich hatte sogar mein erstes Interview meiner jetzigen Stelle Dank ihr!»", "Basil N."],
  ["«Ich bin schon mehrere Jahre Kundin von Bewerbungswerkstatt und habe bereits einige Interviews ergattert dank ihren Bewerbungsdossiers. :) »", "Melissa H."],
  ["«Ich bin absolut zufrieden mit den Ratschlägen und natürlich mit meinen neuen Bewerbungsunterlagen, mit denen ich sofort erste Interviews ergattert habe.»", "Sarah M."],
  ["«Das Team hat mir geholfen meine Bewerbungsunterlagen professionell zu erstellen und ich wurde zu mehreren ersten Interviews eingeladen!»", "Raphael P."],
  ["«Sehr speditiv, setzt eigene und Kundenmeinung effizient und präzise um. Sehr netter Kontakt. Danke💪»", "Belinda S."],
  ["«Ich bin sehr zufrieden mit unserer Zusammenarbeit und finde, dass du die CVs und Motivationsschreiben sehr professionell erstellst. Was ich auch sehr gut finde, ist, dass deine Bewerbungsunterlagen trotz all den KI-Technologien, die es gibt, menschlich und authentisch aufgebaut sind, das merkt man!»", "Wladimir F."],

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

function MarketStats({ t }: { t: HomeContent }) {
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
      <article className="stat-card"><div className="stat"><span>≈{Math.round(registeredSeekersPerReportedVacancy)}</span><sup>*</sup></div><h3>{t.stats[0][0]}</h3><p>{t.stats[0][1]}</p></article>
      <article className="stat-card"><div className="stat stat--word">{t.stats[1][0]}</div><h3>{t.stats[1][1]}</h3><p>{t.stats[1][2]}</p></article>
      <article className="stat-card"><div className="stat stat--word"><span>{String(labourMarket.reportedVacancies).replace(/\B(?=(\d{3})+(?!\d))/g, "’")}</span><sup>*</sup></div><h3>{t.stats[2][0]}</h3><p>{t.stats[2][1]}</p></article>
    </div>
  );
}

function useScrollReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.18) {
  const ref = useRef<T>(null);
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
  const { ref, visible } = useScrollReveal<HTMLElement>();
  return (
    <article ref={ref} className={`scroll-reveal reveal-delay-${delay} ${visible ? "scroll-reveal--visible" : ""}`}>
      <span className="step-icon">{icon}</span><h3>{title}</h3><p>{children}</p>
    </article>
  );
}

function ComparisonCard({ title, issue, answer }: { title: string; issue: string; answer: string }) {
  const { ref, visible } = useScrollReveal<HTMLElement>(0.12);
  return (
    <article ref={ref} className={`comparison-row scroll-reveal ${visible ? "scroll-reveal--visible" : ""}`}>
      <div><h4>{title}</h4><p>{issue}</p></div>
      <span className="arrow"><ArrowRight /></span>
      <strong>{answer}</strong>
    </article>
  );
}

function RevealBlock({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useScrollReveal();
  return <div ref={ref} className={`${className} scroll-reveal reveal-delay-${delay} ${visible ? "scroll-reveal--visible" : ""}`}>{children}</div>;
}

function ServiceCard({ icon, title, children, delay = 0, href, more }: { icon: ReactNode; title: string; children: ReactNode; delay?: number; href: string; more: string }) {
  const { ref, visible } = useScrollReveal<HTMLElement>();
  return (
    <article ref={ref} className={`scroll-reveal reveal-delay-${delay} ${visible ? "scroll-reveal--visible" : ""}`}>
      <span className="service-icon">{icon}</span><h3>{title}</h3><p>{children}</p>
      <a className="service-more" href={href}>{more} <ArrowRight /></a>
    </article>
  );
}

function SectionHeading({ children, subline, light = false }: { children: ReactNode; subline?: string; light?: boolean }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div ref={ref} className={`section-heading scroll-reveal ${light ? "section-heading--light" : ""} ${visible ? "scroll-reveal--visible" : ""}`}>
      <h2>{children}</h2>
      {subline ? <p>{subline}</p> : null}
    </div>
  );
}

function Header({ t }: { t: HomeContent }) {
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

  const contactHref = t.menu[5]![0];

  return (
    <>
      <header className="hero-header">
        <BrandLogo dark />
        <nav aria-label={t.navLabel}>
          {t.menu.map(([href, label]) => <a href={href} key={href}>{label}</a>)}
          <Link to={t.switchText === "EN" ? "/ratgeber/bewerben-in-der-schweiz" : "/en/guide/applying-for-jobs-in-switzerland"}>{t.switchText === "EN" ? "Ratgeber" : "Guides"}</Link>
          <a href={t.switchHref} className="lang-switch" aria-label={t.switchLabel} hrefLang={t.switchText.toLowerCase()}>{t.switchText}</a>
        </nav>
        <a className="button button--primary hero-header__cta" href={contactHref}>{t.cta}</a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={t.menuOpen}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(true)}
        >
          <Menu />
        </button>
      </header>
      <div className={`menu-overlay ${menuOpen ? "menu-overlay--open" : ""}`} aria-hidden={!menuOpen}>
        <button className="menu-backdrop" type="button" aria-label={t.menuClose} onClick={() => setMenuOpen(false)} />
        <aside className="mobile-menu" id="mobile-menu" aria-label={t.mobileNavLabel}>
          <button className="menu-close" type="button" aria-label={t.menuClose} onClick={() => setMenuOpen(false)}><X /></button>
          <nav>
            {t.menu.map(([href, label]) => <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <Link to={t.switchText === "EN" ? "/ratgeber/bewerben-in-der-schweiz" : "/en/guide/applying-for-jobs-in-switzerland"} onClick={() => setMenuOpen(false)}>{t.switchText === "EN" ? "Ratgeber" : "Guides"}</Link>
            <a href={t.switchHref} hrefLang={t.switchText.toLowerCase()}>{t.switchLabel}</a>
          </nav>
          <a className="button button--primary button--wide" href={contactHref} onClick={() => setMenuOpen(false)}>{t.cta}</a>
        </aside>
      </div>
      <header className={`sticky-header ${scrolled ? "sticky-header--visible" : ""}`} aria-hidden={!scrolled}>
        <BrandLogo />
        <a className="button button--primary" href={contactHref}>{t.cta}</a>
      </header>
    </>
  );
}

function ContactSection({ t, lang, id }: { t: HomeContent; lang: Lang; id: string }) {
  const c = t.contact;
  const [sending, setSending] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const localize = (errors: Record<string, string>) => {
    if (lang === "de") return errors;
    const out: Record<string, string> = {};
    for (const key of Object.keys(errors)) out[key] = c.fieldErrors[key] ?? errors[key]!;
    return out;
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    const parsed = contactSchema.safeParse({
      name: fields.get("name"),
      email: fields.get("email"),
      message: fields.get("message"),
      website: fields.get("website"),
    });
    if (!parsed.success) {
      const errors: Record<string, string> = {};
      for (const issue of parsed.error.issues) errors[String(issue.path[0])] ??= issue.message;
      setFieldErrors(localize(errors));
      return;
    }
    setFieldErrors({});
    setError("");
    setSending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const result = (await response.json().catch(() => null)) as
        | { success?: boolean; error?: string; fieldErrors?: Record<string, string> }
        | null;
      if (!response.ok || !result?.success) {
        if (result?.fieldErrors) setFieldErrors(localize(result.fieldErrors));
        throw new Error(lang === "de" ? (result?.error ?? c.genericError) : c.genericError);
      }
      form.reset();
      setSuccessOpen(true);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : c.genericError);
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="contact section-dark" id={id}>
      <div className="container contact-inner">
        <div className="contact-left">
          <RevealBlock><p className="eyebrow">{c.eyebrow}</p><h2>{c.title}</h2><p>{c.text}</p></RevealBlock>
          <RevealBlock className="contact-list" delay={1}>
            <a href="mailto:audelia@bewerbungswerkstatt.ch"><Mail /><span><small>{c.email}</small>audelia@bewerbungswerkstatt.ch</span></a>
            <a href="tel:+41766295056"><Phone /><span><small>{c.phone}</small>+41 76 629 50 56</span></a>
            <div><MapPin /><span><small>{c.location}</small>6418 Rothenthurm{lang === "en" ? ", Switzerland" : ""}</span></div>
          </RevealBlock>
        </div>
        <RevealBlock className="contact-form-wrap" delay={1}>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-field"><label htmlFor="contact-name">{c.name}</label><input id="contact-name" name="name" autoComplete="name" maxLength={100} aria-invalid={!!fieldErrors['name']} aria-describedby={fieldErrors['name'] ? "contact-name-error" : undefined} required />{fieldErrors['name'] && <small id="contact-name-error" className="contact-field-error">{fieldErrors['name']}</small>}</div>
            <div className="contact-field"><label htmlFor="contact-email">{c.email}</label><input id="contact-email" name="email" type="email" autoComplete="email" maxLength={255} aria-invalid={!!fieldErrors['email']} aria-describedby={fieldErrors['email'] ? "contact-email-error" : undefined} required />{fieldErrors['email'] && <small id="contact-email-error" className="contact-field-error">{fieldErrors['email']}</small>}</div>
            <div className="contact-field"><label htmlFor="contact-message">{c.message}</label><textarea id="contact-message" name="message" rows={6} maxLength={2000} aria-invalid={!!fieldErrors['message']} aria-describedby={fieldErrors['message'] ? "contact-message-error" : undefined} required />{fieldErrors['message'] && <small id="contact-message-error" className="contact-field-error">{fieldErrors['message']}</small>}</div>
            <div className="contact-honeypot" aria-hidden="true"><label htmlFor="contact-website">Website</label><input id="contact-website" name="website" tabIndex={-1} autoComplete="off" /></div>
            {error && <p className="contact-submit-error" role="alert">{error}</p>}
            <Button className="button button--primary button--wide" type="submit" disabled={sending}>{sending ? c.sending : c.send}</Button>
          </form>
        </RevealBlock>
      </div>
      <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
        <DialogContent className="contact-success-dialog">
          <DialogTitle>{c.successTitle}</DialogTitle>
          <DialogDescription>{c.successText}</DialogDescription>
          <Button className="button button--primary" onClick={() => setSuccessOpen(false)}>{c.close}</Button>
        </DialogContent>
      </Dialog>
    </section>
  );
}

const serviceIcons = [<ClipboardCheck key="a" />, <MessageSquare key="b" />, <FilePenLine key="c" />, <MapPin key="d" />];
const stepIcons = [<Search key="a" />, <Star key="b" />, <PenLine key="c" />];

export function HomePage({ lang }: { lang: Lang }) {
  const t = homeContent[lang];
  const id = (n: number) => t.menu[n]![0].slice(1);
  const contactHref = t.menu[5]![0];
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <Header t={t} />
        <div className="hero-copy">
          <p className="eyebrow">{t.heroEyebrow}</p>
          <h1 id="hero-title">{t.heroTitle}</h1>
          <p className="hero-lead">{t.heroLead}</p>
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
        <p className="hero-caption">{t.heroCaption}</p>
      </section>

      <section className="market section-light" id={id(0)}>
        <div className="container">
          <SectionHeading subline={t.marketSub}>{t.marketTitle}</SectionHeading>
          <MarketStats t={t} />
          <p className="market-copy">{t.marketCopy}</p>
          <div className="sources"><a href={labourMarket.source} target="_blank" rel="noreferrer">{t.sources[0]}</a></div>
        </div>
      </section>

      <section className="difference section-dark" id={id(1)}>
        <div className="container">
          <SectionHeading light subline={t.diffSub}>{t.diffTitle}</SectionHeading>
          <div className="steps">
            {t.steps.map(([title, text], i) => <StepCard icon={stepIcons[i]} title={title} delay={i} key={title}>{text}</StepCard>)}
          </div>
          <RevealBlock className="comparison-heading"><h3>{t.compTitle}</h3><p>{t.compSub}</p></RevealBlock>
          <div className="comparisons">
            {t.comparisons.map(([title, issue, answer]) => (
              <ComparisonCard title={title} issue={issue} answer={answer} key={title} />
            ))}
          </div>
        </div>
      </section>

      <section className="services section-white" id={id(2)}>
        <div className="container container--narrow">
          <SectionHeading subline={t.servicesSub}>{t.servicesTitle}</SectionHeading>
          <div className="service-grid">
            {t.services.map(([title, text, href], i) => <ServiceCard icon={serviceIcons[i]} title={title} delay={i % 2} href={href} more={t.more} key={title}>{text}</ServiceCard>)}
          </div>
          <RevealBlock className="local-banner"><img src={zurichAsset.url} alt={t.bannerAlt} /><span className="swiss-flag" aria-label={t.flagLabel} /><div><h3>{t.bannerTitle}</h3><p>{t.bannerText}</p></div></RevealBlock>
        </div>
      </section>

      <section className="reviews section-light" aria-labelledby="reviews-title">
        <RevealBlock className="reviews-heading"><h2 id="reviews-title">{t.reviewsTitle}</h2></RevealBlock>
        <div className="review-marquee">
          <div className="review-track">
            {[...reviews, ...reviews].map(([quote, name], index) => <article className="review-card" key={`${name}-${index}`}><p>{quote}</p><strong>{name}</strong></article>)}
          </div>
        </div>
      </section>

      <section className="pricing section-light" id={id(3)}>
        <div className="container container--pricing">
          <SectionHeading subline={t.pricingSub}>{t.pricingTitle}</SectionHeading>
          <div className="pricing-grid">
            <RevealBlock className="price-card price-card--featured"><span className="pill">{t.price1.pill}</span><h3>{t.price1.title}</h3><div className="price">{consultationPrices.analysis} <small>CHF</small></div><p>{t.price1.unit}</p><ul>{t.price1.items.map(item => <li key={item}><Check />{item}</li>)}</ul><a className="button button--primary button--wide" href={contactHref}>{t.price1.button}</a><small className="refund"><ShieldCheck /> {t.price1.refund}</small></RevealBlock>
            <RevealBlock className="price-card" delay={1}><span className="pill pill--muted">{t.price2.pill}</span><h3>{t.price2.title}</h3><div className="price">{consultationPrices.editingPerHour} <small>CHF</small></div><p>{t.price2.unit}</p><ul>{t.price2.items.map(item => <li key={item}><Check />{item}</li>)}</ul><a className="button button--outline button--wide" href={contactHref}>{t.price2.button}</a></RevealBlock>
          </div>
        </div>
      </section>

      <section className="experts section-white" id={id(4)}>
        <div className="container container--experts">
          <RevealBlock className="experts-heading"><h2>{t.expertsTitle}</h2></RevealBlock>
          <RevealBlock className="expert-row"><img className="expert-photo expert-photo--audelia" src={audeliaAsset.url} alt="Audelia Babbev-Pittet" /><div><h3>Audelia Babbev-Pittet</h3><p className="expert-role">{t.audelia.role}</p><p className="expert-lead">{t.audelia.lead}</p><p>{t.audelia.text}</p></div></RevealBlock>
          <RevealBlock className="expert-row"><img className="expert-photo" src={danielAsset.url} alt="Daniel Babbev" /><div><h3>Daniel Babbev</h3><p className="expert-role">{t.daniel.role}</p><p>{t.daniel.texts[0]}</p><p>{t.daniel.texts[1]}</p></div></RevealBlock>
        </div>
      </section>

      <ContactSection t={t} lang={lang} id={id(5)} />
      <SiteFooter lang={lang} />
    </main>
  );
}
