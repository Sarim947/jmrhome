import HomePageClient from "@/components/HomePageClient";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Custom Front Doors & Entrance Systems | JMR Habitat",
  absoluteTitle: true,
  description:
    "Custom front doors made to your project dimensions. Explore pivot, aluminum, steel and glass entrance doors with finish, glazing and hardware options.",
  keywords: ["custom front doors", "custom entrance doors", "architectural entrance doors", "custom entry doors"],
  path: "/"
});

export default function HomePage() {
  return <HomePageClient />;
}
