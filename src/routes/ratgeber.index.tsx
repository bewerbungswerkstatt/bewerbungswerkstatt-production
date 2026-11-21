import { createFileRoute } from "@tanstack/react-router";
import { GuidesPage } from "@/components/site/GuidesPage";
import { guidesHead } from "@/lib/guides-content";

export const Route = createFileRoute("/ratgeber/")({
  head: () => guidesHead("de"),
  component: () => <GuidesPage lang="de" />,
});