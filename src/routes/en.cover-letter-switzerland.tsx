import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { seoHead, seoPages } from "@/lib/seo-pages";

export const Route = createFileRoute("/en/cover-letter-switzerland")({
  head: () => seoHead(seoPages.letterEn),
  component: () => <ContentPage page={seoPages.letterEn} />,
});
