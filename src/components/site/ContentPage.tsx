import { ArrowRight, Check, Languages } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { SeoPage } from "@/lib/seo-pages";
import { pagesByLang } from "@/lib/seo-pages";
import { SiteFooter } from "@/components/site/SiteFooter";

export function ContentPage({ page }: { page: SeoPage }) {
  const de = page.lang === "de";
  const home = de ? "/" : "/en";
  const contact = de ? "/#kontakt" : "/en#contact";
  const related = pagesByLang(page.lang).filter((p) => p.path !== page.path);
  return (
    <main className="content-page">
      <section className="content-hero">
        <header className="content-header">
          <a href={home} aria-label="Bewerbungswerkstatt"><img className="brand-logo" src="/images/logo_darkmode.png" alt="Bewerbungswerkstatt" /></a>
          <nav aria-label={de ? "Navigation" : "Navigation"}>
            <a href={home}>{de ? "Startseite" : "Home"}</a>
            <Link to={de ? "/ratgeber/bewerben-in-der-schweiz" : "/en/guide/applying-for-jobs-in-switzerland"}>{de ? "Ratgeber" : "Guides"}</Link>
            {page.noEnAlternate ? null : <a href={page.alternate} hrefLang={de ? "en" : "de"} aria-label={de ? "English version" : "Deutsche Version"} className="lang-switch language-link"><Languages aria-hidden="true" />{de ? "EN" : "DE"}</a>}
            <a className="button button--primary" href={contact}>{de ? "Kontakt aufnehmen" : "Get in touch"}</a>
          </nav>
        </header>
        <div className="content-hero__copy container container--narrow">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.h1}</h1>
          <p className="hero-lead">{page.intro}</p>
        </div>
      </section>
      <article className="content-body section-white">
        <div className="container container--narrow">
          {page.sections.map((s) => (
            <section key={s.heading}>
              <h2>{s.heading}</h2>
              {s.paragraphs.map((p) => <p key={p}>{p}</p>)}
              {s.subsections?.map((sub) => (
                <div key={sub.title}>
                  <h3>{sub.title}</h3>
                  {sub.paragraphs?.map((p) => <p key={p}>{p}</p>)}
                  {sub.list ? <ul>{sub.list.map((li) => <li key={li}><Check />{li}</li>)}</ul> : null}
                </div>
              ))}
              {s.examples?.map((ex) => (
                <div className="content-example" key={ex.label}>
                  <p className="content-example__label">{ex.label}</p>
                  {ex.lines.map((line) => <p key={line}>{line}</p>)}
                </div>
              ))}
              {s.list ? <ul>{s.list.map((li) => <li key={li}><Check />{li}</li>)}</ul> : null}
              {s.checklist ? (
                <ul className="content-checklist">
                  {s.checklist.map((item) => <li key={item}><span className="content-checklist__box" aria-hidden="true" />{item}</li>)}
                </ul>
              ) : null}
              {s.links?.map((link) => <p key={link.to}>{link.before}<Link className="contextual-link" to={link.to}>{link.text}</Link>{link.after}</p>)}
              {s.sources ? (
                <ul className="content-sources">
                  {s.sources.map((src) => <li key={src.href}><a href={src.href} target="_blank" rel="noopener noreferrer">{src.label}</a></li>)}
                </ul>
              ) : null}
            </section>
          ))}
          {page.faq ? (
            <section className="content-faq">
              <h2>{de ? "Häufige Fragen" : "Frequently asked questions"}</h2>
              {page.faq.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </section>
          ) : null}
          <aside className="content-cta">
            <h2>{page.ctaTitle}</h2>
            <p>{page.ctaText}</p>
            <a className="button button--primary" href={contact}>{de ? "Kontakt aufnehmen" : "Get in touch"} <ArrowRight /></a>
          </aside>
          <nav className="content-related" aria-label={de ? "Weitere Themen" : "Related topics"}>
            <h2>{de ? "Weitere Themen" : "Related topics"}</h2>
            <div>{related.map((p) => <a href={p.path} key={p.path}>{p.navLabel} <ArrowRight /></a>)}</div>
          </nav>
        </div>
      </article>
      <SiteFooter lang={page.lang} />
    </main>
  );
}
