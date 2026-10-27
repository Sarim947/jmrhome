import DailyPageClient from "@/components/DailyPageClient";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Daily Works: Custom Entrance Door Builds",
  description:
    "Browse recent custom entrance door projects from JMR Habitat: renders, real workshop photos and design notes for pivot, armored and glass entry systems.",
  keywords: [
    "custom entrance door projects",
    "door design gallery",
    "armored entrance door",
    "pivot door project",
    "bespoke door craftsmanship"
  ],
  path: "/daily"
});

export default function DailyPage() {
  return <DailyPageClient />;
}
