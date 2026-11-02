import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { seoHead, seoPages } from "@/lib/seo-pages";

export const Route = createFileRoute("/ratgeber/bewerben-in-der-schweiz")({
  head: () => seoHead(seoPages.guideDe),
  component: () => <ContentPage page={seoPages.guideDe} />,
});
