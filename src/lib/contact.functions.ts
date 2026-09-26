import { createServerFn } from "@tanstack/react-start";
import { contactSchema } from "./contact-schema";

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const { getRequest } = await import("@tanstack/react-start/server");
    const { createHash } = await import("node:crypto");
    // A hidden field catches automated submissions without showing a success for unsaved messages.
    if (data.website) throw new Error("Ihre Nachricht konnte nicht gesendet werden.");

    const request = getRequest();
    const ip = request.headers.get("cf-connecting-ip") ?? request.headers.get("x-real-ip") ?? "unknown";
    const salt = process.env['SUPABASE_SERVICE_ROLE_KEY'] ?? "contact-form";
    const ipHash = createHash("sha256").update(`${salt}:${ip}`).digest("hex");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const windowStart = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const { count, error: countError } = await supabaseAdmin
      .from("contact_messages")
      .select("id", { count: "exact", head: true })
      .eq("ip_hash", ipHash)
      .gte("created_at", windowStart);
    if (countError) throw new Error("Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.");
    if ((count ?? 0) >= 5) throw new Error("Zu viele Nachrichten. Bitte versuchen Sie es später erneut.");

    const { error } = await supabaseAdmin.from("contact_messages").insert({
      name: data.name,
      email: data.email,
      message: data.message,
      ip_hash: ipHash,
    });
    if (error) throw new Error("Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.");

    // E-Mail-Benachrichtigung über Resend. Die Nachricht ist bereits sicher
    // gespeichert — ein E-Mail-Fehler darf den Versand nicht als fehlgeschlagen
    // melden, sonst denkt der Absender, seine Nachricht sei verloren.
    try {
      const lovableApiKey = process.env['LOVABLE_API_KEY'];
      const resendApiKey = process.env['RESEND_API_KEY'];
      const contactToEmail = process.env['CONTACT_TO_EMAIL'];
      if (!lovableApiKey || !resendApiKey || !contactToEmail) throw new Error("Resend ist nicht konfiguriert.");
      const escapeHtml = (value: string) =>
        value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
      const response = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${lovableApiKey}`,
          "X-Connection-Api-Key": resendApiKey,
        },
        body: JSON.stringify({
          from: "Bewerbungswerkstatt <onboarding@resend.dev>",
          to: ["audelia@bewerbungswerkstatt.ch"],
          reply_to: data.email,
          subject: `Neue Nachricht von ${data.name}`,
          html: `<p><strong>Name:</strong> ${escapeHtml(data.name)}</p><p><strong>E-Mail:</strong> ${escapeHtml(data.email)}</p><p><strong>Nachricht:</strong></p><p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>`,
        }),
      });
      if (!response.ok) {
        const body = await response.text();
        console.error(`Resend-Benachrichtigung fehlgeschlagen [${response.status}]: ${body}`);
      }
    } catch (notifyError) {
      console.error("Resend-Benachrichtigung fehlgeschlagen:", notifyError);
    }
    return { success: true };
  });