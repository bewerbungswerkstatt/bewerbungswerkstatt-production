<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project architecture

- Keep the Bewerbungswerkstatt experience as one anchor-navigated landing page because the source site and requested scroll interactions form one continuous journey.
- Keep the three labour-market statistic cards equal-height, stack them below 980px, and reveal them upward on first scroll into view so the layout stays legible.
- The contact form must not depend on the database: the POST route `src/routes/api/contact.ts` validates with Zod, then sends only via the `resend` package (`RESEND_API_KEY`, recipient `CONTACT_TO_EMAIL`, from `Bewerbungswerkstatt <kontakt@bewerbungswerkstatt.ch>`, visitor address as replyTo, no auto-reply) and returns `200 {success:true}` only after Resend accepted the mail; failures are logged server-side with details and answered with the generic German error message. Never add Supabase, `SUPABASE_URL` or `SUPABASE_SERVICE_ROLE_KEY` back into this route, because the site is deployed on Vercel where those credentials do not exist.
- `vite.config.ts` sets `nitro.preset` to `"vercel"` whenever `VERCEL=1` is present, because the Lovable build default targets `cloudflare-module` and Vercel could not deploy that output; the Lovable sandbox still forces its own target, so the preview is unaffected.
