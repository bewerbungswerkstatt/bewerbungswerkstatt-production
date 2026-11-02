import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { seoHead, seoPages } from "@/lib/seo-pages";

export const Route = createFileRoute("/motivationsschreiben-schreiben-lassen")({
  head: () => seoHead(seoPages.letterDe),
  component: () => <ContentPage page={seoPages.letterDe} />,
});
