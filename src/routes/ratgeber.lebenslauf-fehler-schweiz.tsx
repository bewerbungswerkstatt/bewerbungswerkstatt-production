import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { seoHead, seoPages } from "@/lib/seo-pages";

export const Route = createFileRoute("/ratgeber/lebenslauf-fehler-schweiz")({
  head: () => seoHead(seoPages.cvFehlerDe),
  component: () => <ContentPage page={seoPages.cvFehlerDe} />,
});
