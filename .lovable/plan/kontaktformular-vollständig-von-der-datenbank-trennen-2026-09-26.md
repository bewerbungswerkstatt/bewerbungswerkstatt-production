# Kontaktformular vollständig von der Datenbank trennen

## Umsetzung
- Die Validierung direkt in der bestehenden Route `/api/contact` definieren, damit ihr Importpfad ausschließlich Zod und Resend enthält.
- Im POST-Handler nur JSON einlesen, Name/E-Mail/Nachricht prüfen, `RESEND_API_KEY` und `CONTACT_TO_EMAIL` lesen und über Resend senden.
- Sicherstellen, dass Absender und `replyTo` korrekt gesetzt sind und Erfolg beziehungsweise sichere Fehlermeldungen unverändert zurückgegeben werden.
- Veraltete lokale Vercel-Ausgabe entfernen, damit sie nicht mit einer früheren Route verwechselt wird.

## Prüfung
- Projektweit bestätigen, dass die Kontakt-Route keine Datenbank- oder Supabase-Referenz enthält.
- Den Vercel-Ziel-Build prüfen und dessen erzeugten Kontakt-Handler ebenfalls auf solche Referenzen untersuchen.
- Erfolg, Validierungsfehler und Resend-Fehler des Endpunkts testen.
