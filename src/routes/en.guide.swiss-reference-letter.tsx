import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { seoHead, seoPages } from "@/lib/seo-pages";

export const Route = createFileRoute("/en/guide/swiss-reference-letter")({
  head: () => seoHead(seoPages.zeugnisEn),
  component: () => <ContentPage page={seoPages.zeugnisEn} />,
});
