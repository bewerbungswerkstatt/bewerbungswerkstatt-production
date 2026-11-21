# Suchoptimierungen – 21. November 2026

## Umgesetzt

- Dezenter Menüpunkt **Ratgeber** / **Guides** auf der deutschen und englischen Startseite, im Desktopmenü und im Mobilmenü. Er führt zum bestehenden allgemeinen Bewerbungsratgeber; weitere Artikel bleiben dort unter «Weitere Themen» erreichbar. Auch die Unterseiten haben den Verweis im oberen Menü.
- Jede der sechs bestehenden Ratgeberseiten enthält zwei thematisch passende Leistungslinks innerhalb passender Abschnitte.
- Jede der sechs Leistungsseiten enthält zwei passende Ratgeberlinks. Bestehende Texte bleiben unverändert; hinzugefügt wurden lediglich kurze Linksätze. Keine neuen Artikel oder Seiten.
- Menüabstände und Umschaltgrenze zum Mobilmenü geringfügig angepasst, damit der zusätzliche Eintrag nicht mit Logo oder Buchungsbutton kollidiert.

## Prüfung

- Vorschau: alle 14 Inhaltsseiten HTTP 200, jeweils korrekter absoluter Canonical. Alle zwölf Unterseiten enthalten zwei neue Kontextlinks.
- Desktop und Mobilgeräte geprüft, einschliesslich 1280, 1181, 684 und 390 Pixel Bildschirmbreite. Menü → Ratgeber → Leistung → Ratgeber in beiden Sprachen erfolgreich durchgeklickt. Keine beobachteten Browserfehler.
- Kennzahlen in der Vorschau nach der Animation korrekt: **5\*** und **200+\*\***.
- Öffentliche Website: alle 14 Seiten HTTP 200; Titel und Beschreibungen stimmen mit der aktuellen Vorlage überein, Canonicals zeigen jeweils auf `https://www.bewerbungswerkstatt.ch` mit dem passenden Seitenpfad.
- Im öffentlichen HTML stehen auf beiden Startseiten bereits **5\*** und **200+\*\*** statt 0 – auch ohne JavaScript.
- `http://www.bewerbungswerkstatt.ch/` → **308** → `https://www.bewerbungswerkstatt.ch/`.
- `http://bewerbungswerkstatt.ch/` → **308** → `https://bewerbungswerkstatt.ch/` → **308** → `https://www.bewerbungswerkstatt.ch/`.
- `https://bewerbungswerkstatt.ch/` → **308** → `https://www.bewerbungswerkstatt.ch/`.
- 308 ist eine permanente Weiterleitung; hier ist keine Korrektur erforderlich. HTTP-Impressionen in der Search Console allein belegen keinen aktuellen Weiterleitungsfehler; sie können ältere Daten betreffen. Die konkrete Zuordnung wurde ohne Zugriff auf den Bericht nicht bestätigt.

## Noch offen

Die **neuen Menü- und Kontextlinks sind noch nicht auf Vercel veröffentlicht**. Der bestehende öffentliche Stand wurde erfolgreich geprüft, aber eine Prüfung *nach Veröffentlichung dieser Änderungen* ist damit noch nicht abgeschlossen. Dafür ist zuerst ein Vercel-Deployment erforderlich; dieses wurde in dieser Sitzung nicht ausgelöst. Nach dem Deployment erneut Menü, Kontextlinks, Kennzahlen und Metadaten auf den öffentlichen DE-/EN-Seiten prüfen.

## Abschliessender Audit – 21. November 2026, ab 08:46 UTC

Dieser Abschnitt aktualisiert den obigen Veröffentlichungsstand.

### Öffentlich bestätigt

- Ratgeber und Guides sind nun auf den öffentlichen Startseiten vorhanden, auch im Mobilmenü. Im aktuellen Quellcode fehlt kein deutscher Menüpunkt; ein zweiter Eintrag wurde deshalb nicht angelegt.
- Frischer Netzwerkabruf über Chromium, jeweils mit und ohne JavaScript: Das initiale HTML enthält auf **beiden** Startseiten 5* und 200+**. Nach der Animation sind diese Werte ebenfalls korrekt. Ein spezifischer deutscher SSR-Nullfehler war nicht reproduzierbar.
- Ein automatischer, JavaScript-gerenderter Abruf lieferte dagegen sogar negative Zwischenwerte in beiden Sprachen. Diese Ergebnisse sind nicht das initiale Server-HTML. Die laufende Zählanimation ist für unterschiedliche Abrufstände anfällig; der konkrete frühere 0-Abruf konnte nicht rekonstruiert werden.
- Alle 14 öffentlichen Inhaltsseiten liefern HTTP 200 und lesbaren Inhalt. Selbstreferenzierende absolute www-Canonicals, wechselseitige de-CH/en-Hreflang-Verweise und x-default stimmen. Keine beobachteten noindex-Meta-Tags oder ausschliessenden X-Robots-Tag-Header.
- Öffentliche robots.txt und Sitemap liefern HTTP 200. Crawler sind zugelassen; Sitemap enthält alle 14 Inhalts-URLs mit Sprachalternativen. Der Unterschied zwischen de in der Sitemap und de-CH im HTML ist zulässig und erfordert keine Korrektur.
- Technische Indexierbarkeit ist geprüft, nicht die tatsächliche Aufnahme oder Platzierung im Google-Index.

### Jetzt korrigiert, noch nicht öffentlich veröffentlicht

- Zählanimation entfernt; die Einblendanimation der gleich grossen Karten bleibt. Zahlen sind dauerhaft identisch im initialen HTML und nach JavaScript-Ausführung.
- Unbelegte Behauptungen über eine Mehrheit identischer KI-CVs und 200+ Bewerbungen auf Finance-Stellen entfernt. Der allgemeine LinkedIn-Economic-Graph-Link belegte weder diese Zahl noch ihre Branche oder Region. Die dritte Karte nennt stattdessen **48’843 gemeldete offene Stellen**, belegt durch den konkreten SECO-Bericht vom März 2026, Tabellen 1 und 23.
- Erste Karte zeigt **≈5** als gerundetes Verhältnis 234’815 / 48’843 ≈ 4,8. Klarstellung: registrierte Stellensuchende je RAV-gemeldeter Stelle, keine Bewerbungen je Stelle, keine Quote für das gesamte Stellenangebot. Die gemeldeten Stellen umfassen auch 172 Stellen im grenznahen Ausland.
- Generische KI-Behauptungen und die unbelegte Acht-Sekunden-Angabe sachlicher formuliert. Entsprechende statistische Einordnungen auch auf den beiden vorhandenen allgemeinen Ratgeberseiten berichtigt; keine neuen Artikel.
- Kostenloser Erstkontakt zur Klärung des Anliegens und separates Analysegespräch (bis zu 45 Minuten) für **CHF 95** sind nun ausdrücklich getrennt: Kontaktbereich, Preisuntertitel, Gesprächsbezeichnung, Kontaktbuttons und betroffene Leistungsseiten. Weitere Bearbeitung bleibt CHF 75/Stunde.
- Fünf Tests für SECO-Werte, Verhältnis und Gesprächspreise bestanden. Vorschau auf Desktop und Mobilgeräten geprüft: Zahlen ohne JavaScript korrekt, auch nach Einblendung stabil, Menüs funktionieren, keine beobachteten Browserfehler. Projektprüfung erfolgreich.

Quelle: https://www.seco.admin.ch/dam/de/sd-web/C6Htf34KPwjy/2026-03_Die_Lage_auf_dem_Arbeitsmarkt_DE.pdf

**Verbleibend:** Die neuen Korrekturen brauchen ein Vercel-Deployment; es wurde hier nicht ausgelöst. Auf der öffentlichen Website sind zum Prüfzeitpunkt noch die unbelegten 200+-/Mehrheitsangaben und die unklare Erstgespräch-Bezeichnung vorhanden. Nach Veröffentlichung erneut öffentlich kontrollieren.

## Neuer Ratgeberartikel – 21. November 2026

- Freigegebener Fachartikel «Lebenslauf Schweiz: 7 typische Fehler, die Ihren CV schwächen» vollständig und ungekürzt unter `/ratgeber/lebenslauf-fehler-schweiz` veröffentlicht (nur Deutsch, de-CH). Kein inhaltlicher Doppelkonflikt mit bestehenden Seiten.
- Meta-Title «Lebenslauf Schweiz: 7 typische Fehler und praktische Tipps», freigegebene Meta-Description, selbstreferenzierender absoluter Canonical, Hreflang nur de-CH + x-default (keine erfundene EN-Zielseite), BlogPosting-JSON-LD mit datePublished/dateModified 2026-11-21.
- Darstellung im bestehenden Design: H2-/H3-Zwischentitel, dezent hervorgehobene Beispiel-Boxen, Checkliste mit Kästchen, FAQ (5 Fragen), Quellenliste, Kontakt-CTA am Ende. Keine Stockfotos, keine neuen Animationen.
- Interne Verlinkung: Artikel verlinkt auf `/lebenslauf-schreiben-lassen` und `/ratgeber/bewerben-in-der-schweiz`; die Lebenslauf-Leistungsseite verlinkt zurück auf den neuen Artikel. Der Artikel erscheint automatisch unter «Weitere Themen» auf den anderen deutschen Ratgeberseiten.
- Sitemap um die neue URL ergänzt (jetzt 15 URLs). Sprachumschalter EN/DE wird auf dieser Seite ausgeblendet, da keine englische Fassung existiert.
- Vorschau geprüft (Desktop 1280 px, Mobil 390 px): Seite lädt mit HTTP 200, alle Inhalte, Boxen, Checkliste und FAQ korrekt, keine Browserfehler.

**Verbleibend:** Live-Schaltung erfolgt erst nach ausdrücklicher Freigabe; danach Vercel-Deployment und öffentliche Kontrolle von Artikel, Sitemap und Ratgeber-Navigation.