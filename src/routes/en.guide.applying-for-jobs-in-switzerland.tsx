import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { seoHead, seoPages } from "@/lib/seo-pages";

export const Route = createFileRoute("/en/guide/applying-for-jobs-in-switzerland")({
  head: () => seoHead(seoPages.guideEn),
  component: () => <ContentPage page={seoPages.guideEn} />,
});
