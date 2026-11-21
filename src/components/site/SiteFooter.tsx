import type { Lang } from "@/lib/home-content";
import { Languages } from "lucide-react";
import { pagesByLang } from "@/lib/seo-pages";

export function SiteFooter({ lang }: { lang: Lang }) {
  const pages = pagesByLang(lang);
  return (
    <footer className="site-footer">
      <nav className="footer-links" aria-label={lang === "de" ? "Weitere Seiten" : "More pages"}>
        <a href={lang === "de" ? "/" : "/en"}>{lang === "de" ? "Startseite" : "Home"}</a>
        <a href={lang === "de" ? "/ratgeber" : "/en/guide"}>{lang === "de" ? "Ratgeber" : "Guides"}</a>
        {pages.map((p) => <a href={p.path} key={p.path}>{p.navLabel}</a>)}
        <a className="language-link" href={lang === "de" ? "/en" : "/"} aria-label={lang === "de" ? "English version" : "Deutsche Version"} hrefLang={lang === "de" ? "en" : "de"}><Languages aria-hidden="true" />{lang === "de" ? "EN" : "DE"}</a>
      </nav>
      <p>© 2026 Digital Trust Solutions GmbH</p>
    </footer>
  );
}
