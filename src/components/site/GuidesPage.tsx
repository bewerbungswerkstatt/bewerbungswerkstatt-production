import { ArrowRight, Languages } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Lang } from "@/lib/home-content";
import { guidesContent } from "@/lib/guides-content";
import { SiteFooter } from "@/components/site/SiteFooter";

export function GuidesPage({ lang }: { lang: Lang }) {
  const de = lang === "de";
  const c = guidesContent[lang];
  return (
    <main className="content-page guides-page">
      <section className="content-hero">
        <header className="content-header">
          <a href={de ? "/" : "/en"} aria-label="Bewerbungswerkstatt"><img className="brand-logo" src="/images/logo_darkmode.png" alt="Bewerbungswerkstatt" /></a>
          <nav aria-label="Navigation">
            <Link to={de ? "/" : "/en"}>{de ? "Startseite" : "Home"}</Link>
            <Link to={de ? "/ratgeber" : "/en/guide"} aria-current="page">{de ? "Ratgeber" : "Guides"}</Link>
            <Link to={de ? "/en/guide" : "/ratgeber"} className="lang-switch language-link" hrefLang={de ? "en" : "de"} aria-label={de ? "English version" : "Deutsche Version"}><Languages aria-hidden="true" />{de ? "EN" : "DE"}</Link>
            <a className="button button--primary" href={de ? "/#kontakt" : "/en#contact"}>{de ? "Kontakt aufnehmen" : "Get in touch"}</a>
          </nav>
        </header>
        <div className="content-hero__copy container container--narrow">
          <p className="eyebrow">{de ? "Ratgeber" : "Guides"}</p>
          <h1>{c.title}</h1>
          <p className="hero-lead">{c.intro}</p>
        </div>
      </section>
      <section className="section-white" aria-label={de ? "Ratgeberartikel" : "Guide articles"}>
        <div className="container guide-grid">
          {c.cards.map(({ page, category, title, text }) => (
            <article className="guide-card" key={page.path}>
              <p className="eyebrow">{category}</p>
              <h2><a href={page.path}>{title}</a></h2>
              <p>{text}</p>
              <a className="service-more" href={page.path} aria-label={`${de ? "Weiterlesen" : "Read more"}: ${title}`}>{de ? "Weiterlesen" : "Read more"}<ArrowRight aria-hidden="true" /></a>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter lang={lang} />
    </main>
  );
}