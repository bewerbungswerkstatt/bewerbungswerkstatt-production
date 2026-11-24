import { ArrowRight } from "lucide-react";
import type { Lang } from "@/lib/home-content";
import { guidesContent } from "@/lib/guides-content";
import { ContentHeader } from "@/components/site/ContentHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export function GuidesPage({ lang }: { lang: Lang }) {
  const de = lang === "de";
  const c = guidesContent[lang];
  return (
    <main className="content-page guides-page">
      <ContentHeader lang={lang} langSwitch={de ? "/en/guide" : "/ratgeber"} guidesCurrent />
      <section className="content-hero">
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