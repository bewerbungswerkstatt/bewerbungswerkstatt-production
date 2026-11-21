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

- Main Ratgeber/Guides navigation targets bilingual card overviews at `/ratgeber` and `/en/guide`; retain existing article URLs and contextual links to preserve indexed content.

- Render labour-market figures as stable SSR text and source them with consultation prices from `verified-facts.ts`; card reveal animations remain independent so crawlers never capture transient numerical values.
- Source consultation duration and all DE/EN price copy, including SEO descriptions, from `verified-facts.ts` so offer changes stay consistent across pages.

- Keep contextual service/guide links on their relevant section in `seo-pages.ts` and render them with typed router links in `ContentPage`; this preserves existing prose and makes thematic cross-links explicit.

- The homepage stays one anchor-navigated landing page (rendered by `src/components/site/HomePage.tsx` for `/` in German and `/en` in English, copy in `src/lib/home-content.tsx`); SEO subpages are separate routes driven by data in `src/lib/seo-pages.ts` and rendered by `ContentPage`, each with canonical + hreflang alternates, because search visibility for DE and international visitors needs distinct indexable URLs.
- Keep the three labour-market statistic cards equal-height, stack them below 980px, and reveal them upward on first scroll into view so the layout stays legible.
- The contact form must not depend on the database: the POST route `src/routes/api/contact.ts` validates with Zod, then sends only via the `resend` package (`RESEND_API_KEY`, recipient `CONTACT_TO_EMAIL`, from `Bewerbungswerkstatt <kontakt@bewerbungswerkstatt.ch>`, visitor address as replyTo, no auto-reply) and returns `200 {success:true}` only after Resend accepted the mail; failures are logged server-side with details and answered with the generic German error message. Never add Supabase, `SUPABASE_URL` or `SUPABASE_SERVICE_ROLE_KEY` back into this route, because the site is deployed on Vercel where those credentials do not exist.
- `vite.config.ts` sets `nitro.preset` to `"vercel"` whenever `VERCEL=1` is present, because the Lovable build default targets `cloudflare-module` and Vercel could not deploy that output; the Lovable sandbox still forces its own target, so the preview is unaffected.
