import Script from "next/script";
import "./globals.css";
import CookieBanner from "../components/CookieBanner";
import GoogleTagManager from "../components/GoogleTagManager";
import { absoluteUrl, siteUrl } from "../lib/metadata";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Entrance Architecture | Custom High-End Doors",
    template: "%s | Entrance Architecture"
  },
  description:
    "Custom high-end entrance doors blending intelligent design, security, and artistic expression.",
  openGraph: {
    siteName: "Entrance Architecture",
    url: absoluteUrl("/"),
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              analytics_storage: 'denied'
            });
          `}
        </Script>
      </head>
      <body>
        {children}
        <CookieBanner />
        <GoogleTagManager />
      </body>
    </html>
  );
}
