import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { seoHead, seoPages } from "@/lib/seo-pages";

export const Route = createFileRoute("/en/swiss-cv-writing")({
  head: () => seoHead(seoPages.cvEn),
  component: () => <ContentPage page={seoPages.cvEn} />,
});
