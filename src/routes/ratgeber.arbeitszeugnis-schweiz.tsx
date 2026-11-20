import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { seoHead, seoPages } from "@/lib/seo-pages";

export const Route = createFileRoute("/ratgeber/arbeitszeugnis-schweiz")({
  head: () => seoHead(seoPages.zeugnisDe),
  component: () => <ContentPage page={seoPages.zeugnisDe} />,
});
