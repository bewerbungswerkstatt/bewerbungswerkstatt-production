import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { seoHead, seoPages } from "@/lib/seo-pages";

export const Route = createFileRoute("/en/guide/applying-to-switzerland-from-abroad")({
  head: () => seoHead(seoPages.zuzugEn),
  component: () => <ContentPage page={seoPages.zuzugEn} />,
});
