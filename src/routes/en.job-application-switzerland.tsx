import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { seoHead, seoPages } from "@/lib/seo-pages";

export const Route = createFileRoute("/en/job-application-switzerland")({
  head: () => seoHead(seoPages.dossierEn),
  component: () => <ContentPage page={seoPages.dossierEn} />,
});
