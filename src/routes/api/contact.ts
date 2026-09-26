import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const contactRequestSchema = z.object({
  name: z.string().trim().min(1, "Bitte geben Sie Ihren Namen ein.").max(100, "Der Name ist zu lang."),
  email: z.string().trim().email("Bitte geben Sie eine gültige E-Mail-Adresse ein.").max(255, "Die E-Mail-Adresse ist zu lang."),
  message: z.string().trim().min(1, "Bitte geben Sie eine Nachricht ein.").max(2000, "Die Nachricht ist zu lang."),
  website: z.string().max(200).optional().default(""),
});

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const SAFE_ERROR = "Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let rawBody: unknown;
        try {
          rawBody = await request.json();
        } catch {
          return Response.json({ error: "Ungültige Anfrage." }, { status: 400 });
        }

        const parsed = contactRequestSchema.safeParse(rawBody);
        if (!parsed.success) {
          const fieldErrors: Record<string, string> = {};
          for (const issue of parsed.error.issues) {
            const key = String(issue.path[0] ?? "form");
            if (!fieldErrors[key]) fieldErrors[key] = issue.message;
          }
          return Response.json(
            { error: "Bitte überprüfen Sie Ihre Eingaben.", fieldErrors },
            { status: 400 },
          );
        }
        const data = parsed.data;

        // A hidden field catches automated submissions without showing a success message.
        if (data.website) {
          return Response.json({ error: SAFE_ERROR }, { status: 400 });
        }

        const resendApiKey = process.env["RESEND_API_KEY"];
        const contactToEmail = process.env["CONTACT_TO_EMAIL"];
        if (!resendApiKey || !contactToEmail) {
          console.error(
            "Kontaktformular: RESEND_API_KEY oder CONTACT_TO_EMAIL ist auf dem Server nicht gesetzt.",
          );
          return Response.json({ error: SAFE_ERROR }, { status: 500 });
        }

        const from = "Bewerbungswerkstatt <kontakt@bewerbungswerkstatt.ch>";
        const subject = `Neue Kontaktanfrage von ${data.name}`;
        const html = `<h2>Neue Kontaktanfrage</h2><p><strong>Name:</strong> ${escapeHtml(data.name)}</p><p><strong>E-Mail:</strong> ${escapeHtml(data.email)}</p><p><strong>Nachricht:</strong></p><p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>`;
        const text = `Name: ${data.name}\nE-Mail: ${data.email}\n\nNachricht:\n${data.message}`;

        try {
          const { Resend } = await import("resend");
          const resend = new Resend(resendApiKey);
          const { error: sendError } = await resend.emails.send({
            from,
            to: [contactToEmail],
            replyTo: data.email,
            subject,
            html,
            text,
          });
          if (sendError) {
            console.error(
              `Resend-Versand fehlgeschlagen [${sendError.name}]: ${sendError.message}`,
              { to: contactToEmail, from, subject },
            );
            return Response.json({ error: SAFE_ERROR }, { status: 500 });
          }
        } catch (sendFailure) {
          console.error("Resend-Versand fehlgeschlagen:", sendFailure, {
            to: contactToEmail,
            from,
            subject,
          });
          return Response.json({ error: SAFE_ERROR }, { status: 500 });
        }

        return Response.json({ success: true }, { status: 200 });
      },
    },
  },
});
