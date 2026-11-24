import { useEffect, useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Lang } from "@/lib/home-content";

type ContentHeaderProps = {
  lang: Lang;
  /** Ziel des Sprachwechsels; null blendet den Wechsel aus. */
  langSwitch: string | null;
  guidesCurrent?: boolean;
};

export function ContentHeader({ lang, langSwitch, guidesCurrent = false }: ContentHeaderProps) {
  const de = lang === "de";
  const home = de ? "/" : "/en";
  const contact = de ? "/#kontakt" : "/en#contact";
  const [menuOpen, setMenuOpen] = useState(false);

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

  const guidesLink = de ? (
    <Link to="/ratgeber" {...(guidesCurrent ? { "aria-current": "page" as const } : {})}>Ratgeber</Link>
  ) : (
    <Link to="/en/guide" {...(guidesCurrent ? { "aria-current": "page" as const } : {})}>Guides</Link>
  );
  const langLink = langSwitch ? (
    <a href={langSwitch} hrefLang={de ? "en" : "de"} aria-label={de ? "English version" : "Deutsche Version"} className="lang-switch language-link">
      <Globe aria-hidden="true" />{de ? "EN" : "DE"}
    </a>
  ) : null;

  return (
    <>
      <div className="content-header-bar">
      <header className="content-header">
        <a href={home} aria-label="Bewerbungswerkstatt"><img className="brand-logo" src="/images/logo_darkmode.png" alt="Bewerbungswerkstatt" /></a>
        <div className="content-header__actions">
          <nav aria-label="Navigation">
            <a href={home}>{de ? "Startseite" : "Home"}</a>
            {guidesLink}
            {langLink}
          </nav>
          <a className="button button--primary" href={contact}>{de ? "Kontakt aufnehmen" : "Get in touch"}</a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={de ? "Menü öffnen" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </header>
      </div>
      <div className={`menu-overlay ${menuOpen ? "menu-overlay--open" : ""}`} aria-hidden={!menuOpen}>
        <button className="menu-backdrop" type="button" aria-label={de ? "Menü schliessen" : "Close menu"} onClick={() => setMenuOpen(false)} />
        <aside className="mobile-menu" id="mobile-menu" aria-label={de ? "Mobile Navigation" : "Mobile navigation"}>
          <button className="menu-close" type="button" aria-label={de ? "Menü schliessen" : "Close menu"} onClick={() => setMenuOpen(false)}><X /></button>
          <nav>
            <a href={home} onClick={() => setMenuOpen(false)}>{de ? "Startseite" : "Home"}</a>
            {de ? (
              <Link to="/ratgeber" onClick={() => setMenuOpen(false)}>Ratgeber</Link>
            ) : (
              <Link to="/en/guide" onClick={() => setMenuOpen(false)}>Guides</Link>
            )}
            {langSwitch ? (
              <a className="language-link" href={langSwitch} hrefLang={de ? "en" : "de"} aria-label={de ? "English version" : "Deutsche Version"} onClick={() => setMenuOpen(false)}>
                <Globe aria-hidden="true" />{de ? "EN" : "DE"}
              </a>
            ) : null}
          </nav>
          <a className="button button--primary button--wide" href={contact} onClick={() => setMenuOpen(false)}>{de ? "Kontakt aufnehmen" : "Get in touch"}</a>
        </aside>
      </div>
    </>
  );
}
