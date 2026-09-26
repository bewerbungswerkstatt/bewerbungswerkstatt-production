import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { createHash } from "node:crypto";
import { contactSchema } from "./contact-schema";

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
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
    return { success: true };
  });