import { createFileRoute } from "@tanstack/react-router";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

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

        const parsed = contactSchema.safeParse(rawBody);
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

        // A hidden field catches automated submissions without showing a success for unsaved messages.
        if (data.website) {
          return Response.json({ error: "Ihre Nachricht konnte nicht gesendet werden." }, { status: 400 });
        }

        const { createHash } = await import("node:crypto");
        const ip = request.headers.get("cf-connecting-ip") ?? request.headers.get("x-real-ip") ?? "unknown";
        const salt = process.env["SUPABASE_SERVICE_ROLE_KEY"] ?? "contact-form";
        const ipHash = createHash("sha256").update(`${salt}:${ip}`).digest("hex");

        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const windowStart = new Date(Date.now() - 60 * 60 * 1000).toISOString();
        const { count, error: countError } = await supabaseAdmin
          .from("contact_messages")
          .select("id", { count: "exact", head: true })
          .eq("ip_hash", ipHash)
          .gte("created_at", windowStart);
        if (countError) {
          return Response.json(
            { error: "Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut." },
            { status: 500 },
          );
        }
        if ((count ?? 0) >= 5) {
          return Response.json(
            { error: "Zu viele Nachrichten. Bitte versuchen Sie es später erneut." },
            { status: 429 },
          );
        }

        const { error } = await supabaseAdmin.from("contact_messages").insert({
          name: data.name,
          email: data.email,
          message: data.message,
          ip_hash: ipHash,
        });
        if (error) {
          return Response.json(
            { error: "Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut." },
            { status: 500 },
          );
        }

        // E-Mail-Benachrichtigung über Resend. Die Nachricht ist bereits sicher
        // gespeichert — ein E-Mail-Fehler darf den Versand nicht als fehlgeschlagen
        // melden, sonst denkt der Absender, seine Nachricht sei verloren.
        try {
          const resendApiKey = process.env["RESEND_API_KEY"];
          const contactToEmail = process.env["CONTACT_TO_EMAIL"];
          if (!resendApiKey || !contactToEmail) throw new Error("Resend ist nicht konfiguriert.");

          const resend = new Resend(resendApiKey);
          const { error: sendError } = await resend.emails.send({
            from: "Bewerbungswerkstatt Website <website@bewerbungswerkstatt.ch>",
            to: [contactToEmail],
            replyTo: data.email,
            subject: `Neue Nachricht von ${data.name}`,
            html: `<p><strong>Name:</strong> ${escapeHtml(data.name)}</p><p><strong>E-Mail:</strong> ${escapeHtml(data.email)}</p><p><strong>Nachricht:</strong></p><p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>`,
          });
          if (sendError) throw new Error(sendError.message);
        } catch (notifyError) {
          // Der hier verknüpfte Resend-Schlüssel läuft über die gesicherte
          // Lovable-Verbindung; schlägt der direkte Versand fehl, wird darüber
          // zugestellt.
          try {
            const lovableApiKey = process.env["LOVABLE_API_KEY"];
            const resendApiKey = process.env["RESEND_API_KEY"];
            const contactToEmail = process.env["CONTACT_TO_EMAIL"];
            if (!lovableApiKey || !resendApiKey || !contactToEmail) throw notifyError;
            const response = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${lovableApiKey}`,
                "X-Connection-Api-Key": resendApiKey,
              },
              body: JSON.stringify({
                from: "Bewerbungswerkstatt Website <website@bewerbungswerkstatt.ch>",
                to: [contactToEmail],
                reply_to: data.email,
                subject: `Neue Nachricht von ${data.name}`,
                html: `<p><strong>Name:</strong> ${escapeHtml(data.name)}</p><p><strong>E-Mail:</strong> ${escapeHtml(data.email)}</p><p><strong>Nachricht:</strong></p><p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>`,
              }),
            });
            if (!response.ok) {
              const body = await response.text();
              console.error(`Resend-Benachrichtigung fehlgeschlagen [${response.status}]: ${body}`);
            }
          } catch (fallbackError) {
            console.error("Resend-Benachrichtigung fehlgeschlagen:", fallbackError);
          }
        }

        return Response.json({ ok: true });
      },
    },
  },
});
