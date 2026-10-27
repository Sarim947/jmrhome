import HomePageClient from "@/components/HomePageClient";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Custom Entrance Doors for Modern Architecture | JMR Habitat",
  absoluteTitle: true,
  description:
    "JMR Habitat builds custom entrance doors for architects: pivot, aluminum, steel and glass systems made to your dimensions, finishes and hardware.",
  keywords: [
    "custom entrance doors",
    "architectural entrance doors",
    "pivot doors",
    "aluminum entry doors",
    "steel entry doors",
    "modern front doors"
  ],
  path: "/"
});

export default function HomePage() {
  return <HomePageClient />;
}
