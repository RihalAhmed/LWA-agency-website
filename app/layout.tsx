import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScrolling from "@/components/SmoothScrolling";
import "./globals.css";

const avantGarde = localFont({
  src: [
    {
      path: "../public/fonts/ITC Avant Garde Gothic Std Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/ITC Avant Garde Gothic Std Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/ITC Avant Garde Gothic Std Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-avant-garde",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.theluxurywatchagency.com"),
  title: {
    default: "The Luxury Watch Agency — AI Web Agency for Watch Brands",
    template: "%s | The Luxury Watch Agency",
  },
  description:
    "Custom websites that make your watches look premium and collectors confident buying — built around trust, desire, and value.",
  alternates: {
    canonical: "https://www.theluxurywatchagency.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "The Luxury Watch Agency",
    description: "Custom websites that make your watches look premium and collectors confident buying.",
    url: "https://www.theluxurywatchagency.com",
    siteName: "The Luxury Watch Agency",
    images: [
      {
        url: "/images/form-header-final.png", 
        width: 1200,
        height: 630,
        alt: "The Luxury Watch Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Luxury Watch Agency",
    description: "Custom websites that make your watches look premium and collectors confident buying.",
    images: ["/images/form-header-final.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`antialiased ${avantGarde.variable}`}>
      <body className="bg-black text-white font-sans overflow-x-hidden min-h-screen flex flex-col">
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-PTDYW80ZLM`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PTDYW80ZLM');
          `}
        </Script>

        <SmoothScrolling>
          <Header />
          <main className="flex-grow w-full flex flex-col items-center">
            {children}
          </main>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
