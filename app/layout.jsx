import { Suspense } from "react";
import Script from "next/script";
import "./globals.css";
import CookieBanner from "../components/CookieBanner";
import GoogleTagManager from "../components/GoogleTagManager";
import JsonLd from "../components/JsonLd";
import MetaPixel from "../components/MetaPixel";
import {
  absoluteUrl,
  defaultDescription,
  defaultOgImage,
  defaultOgImageAlt,
  siteKeywords,
  siteName,
  siteUrl
} from "../lib/metadata";
import { organizationSchema, webSiteSchema } from "../lib/schema";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Custom Entrance Doors for Modern Architecture | JMR Habitat",
    template: "%s | JMR Habitat"
  },
  description: defaultDescription,
  keywords: siteKeywords,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: absoluteUrl("/")
  },
  openGraph: {
    title: "Custom Entrance Doors for Modern Architecture | JMR Habitat",
    description: defaultDescription,
    siteName,
    url: absoluteUrl("/"),
    type: "website",
    locale: "en_US",
    images: [
      {
        url: absoluteUrl(defaultOgImage),
        width: 1200,
        height: 630,
        alt: defaultOgImageAlt
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Entrance Doors for Modern Architecture | JMR Habitat",
    description: defaultDescription,
    images: [absoluteUrl(defaultOgImage)]
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
        <JsonLd data={[organizationSchema(), webSiteSchema()]} />
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
        <Suspense fallback={null}>
          <MetaPixel />
        </Suspense>
        <GoogleTagManager />
      </body>
    </html>
  );
}
