import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { seoHead, seoPages } from "@/lib/seo-pages";

export const Route = createFileRoute("/bewerbung-schreiben-lassen")({
  head: () => seoHead(seoPages.dossierDe),
  component: () => <ContentPage page={seoPages.dossierDe} />,
});
