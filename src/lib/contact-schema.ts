import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Bitte geben Sie Ihren Namen ein.").max(100, "Der Name ist zu lang."),
  email: z.string().trim().email("Bitte geben Sie eine gültige E-Mail-Adresse ein.").max(255, "Die E-Mail-Adresse ist zu lang."),
  message: z.string().trim().min(1, "Bitte geben Sie eine Nachricht ein.").max(2000, "Die Nachricht ist zu lang."),
  website: z.string().max(200).default(""),
});