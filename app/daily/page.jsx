import DailyPageClient from "@/components/DailyPageClient";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Daily Works",
  description: "Explore recent custom entrance door work, concepts, renders, and finished designs.",
  path: "/daily"
});

export default function DailyPage() {
  return <DailyPageClient />;
}
