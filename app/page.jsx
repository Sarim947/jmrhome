import HomePageClient from "@/components/HomePageClient";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Entrance Architecture | Custom High-End Doors",
  metadataTitle: {
    absolute: "Entrance Architecture | Custom High-End Doors"
  },
  description:
    "Custom high-end entrance doors blending intelligent design, security, and artistic expression.",
  path: "/"
});

export default function HomePage() {
  return <HomePageClient />;
}
