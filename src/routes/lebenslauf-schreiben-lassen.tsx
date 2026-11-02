import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { seoHead, seoPages } from "@/lib/seo-pages";

export const Route = createFileRoute("/lebenslauf-schreiben-lassen")({
  head: () => seoHead(seoPages.cvDe),
  component: () => <ContentPage page={seoPages.cvDe} />,
});
