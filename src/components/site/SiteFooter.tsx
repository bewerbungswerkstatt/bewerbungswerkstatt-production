import type { Lang } from "@/lib/home-content";
import { pagesByLang } from "@/lib/seo-pages";

export function SiteFooter({ lang }: { lang: Lang }) {
  const pages = pagesByLang(lang);
  return (
    <footer className="site-footer">
      <nav className="footer-links" aria-label={lang === "de" ? "Weitere Seiten" : "More pages"}>
        <a href={lang === "de" ? "/" : "/en"}>{lang === "de" ? "Startseite" : "Home"}</a>
        {pages.map((p) => <a href={p.path} key={p.path}>{p.navLabel}</a>)}
        <a href={lang === "de" ? "/en" : "/"} hrefLang={lang === "de" ? "en" : "de"}>{lang === "de" ? "English" : "Deutsch"}</a>
      </nav>
      <p>© 2026 Digital Trust Solutions GmbH</p>
    </footer>
  );
}
