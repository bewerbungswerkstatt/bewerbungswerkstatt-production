import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";
import { homeHead } from "@/lib/home-head";

export const Route = createFileRoute("/en/")({
  head: () => homeHead("en"),
  component: () => <HomePage lang="en" />,
});
