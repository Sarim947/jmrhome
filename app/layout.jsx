import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: {
    default: "Entrance Architecture | Custom High-End Doors",
    template: "%s | Entrance Architecture"
  },
  description:
    "Custom high-end entrance doors blending intelligent design, security, and artistic expression."
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
      </head>
      <body>
        {children}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-GWP2L2DV7T" />
        <Script id="ga">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GWP2L2DV7T');
          `}
        </Script>
      </body>
    </html>
  );
}
