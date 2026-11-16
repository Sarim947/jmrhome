import DailyPageClient from "@/components/DailyPageClient";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Custom Front Door Projects & Workshop Updates",
  description:
    "Browse JMR Habitat front door projects, workshop photographs, renders and design notes for custom pivot, steel and glass entrance systems.",
  keywords: ["custom front door projects", "custom entrance door projects", "pivot door project", "door workshop"],
  path: "/daily"
});

export default function DailyPage() {
  return <DailyPageClient />;
}
