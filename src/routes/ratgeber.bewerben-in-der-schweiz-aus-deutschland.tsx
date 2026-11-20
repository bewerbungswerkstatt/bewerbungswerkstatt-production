import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { seoHead, seoPages } from "@/lib/seo-pages";

export const Route = createFileRoute("/ratgeber/bewerben-in-der-schweiz-aus-deutschland")({
  head: () => seoHead(seoPages.zuzugDe),
  component: () => <ContentPage page={seoPages.zuzugDe} />,
});
