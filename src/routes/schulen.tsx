import { createFileRoute, redirect } from "@tanstack/react-router";

// Old URL from the previous website; permanently forward to the homepage.
export const Route = createFileRoute("/schulen")({
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301 });
  },
});
