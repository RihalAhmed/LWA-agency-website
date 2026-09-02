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
  title: "The Luxury Watch Agency — AI Web Agency for Watch Brands",
  description:
    "Custom websites that make your watches look premium and collectors confident buying — built around trust, desire, and value.",
  openGraph: {
    title: "The Luxury Watch Agency",
    description: "Custom websites that make your watches look premium and collectors confident buying.",
    url: "https://theluxurywatchagency.com",
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
  metadataBase: new URL("https://theluxurywatchagency.com"),
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
