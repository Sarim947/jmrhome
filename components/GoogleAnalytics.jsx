"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

// Public measurement ID verified against the JMR Habitat GA4 web stream.
const gaId = "G-LDEQ93ZGQV";

export default function GoogleAnalytics() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const updateConsent = () => {
      setAccepted(localStorage.getItem("cookie-consent") === "accepted");
    };
    updateConsent();
    window.addEventListener("cookie-consent-change", updateConsent);
    window.addEventListener("storage", updateConsent);
    return () => {
      window.removeEventListener("cookie-consent-change", updateConsent);
      window.removeEventListener("storage", updateConsent);
    };
  }, []);

  // Basic consent mode: no Google Analytics script until analytics is accepted.
  if (!accepted) return null;

  return (
    <>
      <Script id="ga-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
          window.gtag('consent', 'update', { analytics_storage: 'granted' });
          window.gtag('js', new Date());
          window.gtag('config', ${JSON.stringify(gaId)});
        `}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
    </>
  );
}
