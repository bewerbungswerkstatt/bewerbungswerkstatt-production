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