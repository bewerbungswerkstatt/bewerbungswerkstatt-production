import { createFileRoute } from "@tanstack/react-router";
import { GuidesPage } from "@/components/site/GuidesPage";
import { guidesHead } from "@/lib/guides-content";

export const Route = createFileRoute("/en/guide/")({
  head: () => guidesHead("en"),
  component: () => <GuidesPage lang="en" />,
});