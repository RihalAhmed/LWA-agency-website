import type { Metadata } from "next";
import Script from "next/script";
import SeoHero from "@/components/seo/SeoHero";
import SeoWhyWatchBrands from "@/components/seo/SeoWhyWatchBrands";
import SeoWhatsIncluded from "@/components/seo/SeoWhatsIncluded";
import SeoHowItWorks from "@/components/seo/SeoHowItWorks";
import SeoBuiltFor from "@/components/seo/SeoBuiltFor";
import SeoFaq from "@/components/seo/SeoFaq";
import SeoFinalCta from "@/components/seo/SeoFinalCta";

export const metadata: Metadata = {
  title: "Watch Website Design | Built Exclusively for Watch Brands",
  description:
    "Custom watch website design for independent brands and dealers. $0 until you approve. Free $350 concept preview. See it before you pay.",
  openGraph: {
    title: "Watch Website Design | Built Exclusively for Watch Brands",
    description:
      "Custom watch website design for independent brands and dealers. $0 until you approve. Free $350 concept preview. See it before you pay.",
    url: "https://theluxurywatchagency.com/watch-website-design",
    siteName: "The Luxury Watch Agency",
    images: [
      {
        url: "/images/form-header-final.png",
        width: 1200,
        height: 630,
        alt: "Watch Website Design by The Luxury Watch Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Watch Website Design | Built Exclusively for Watch Brands",
    description:
      "Custom watch website design for independent brands and dealers. $0 until you approve. Free $350 concept preview.",
    images: ["/images/form-header-final.png"],
  },
  alternates: {
    canonical: "https://theluxurywatchagency.com/watch-website-design",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a custom watch website cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on scope — collection size, whether you need e-commerce or an enquiry-based model, and how much content and photography you already have. We start every project with a free $350 concept preview so you see exactly what you're getting before any commitment.",
      },
    },
    {
      "@type": "Question",
      name: "How is this different from using a Shopify template?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A template is built to work for any product. We build specifically around how watches are evaluated — case detail, movement, provenance, story — so the site does work a generic template structurally cannot do.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to pay before I see the finished website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We build first, you review the live site, and final payment happens only after you approve it.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most projects move from the initial call to a finished, approved site within a few weeks, depending on how much content is ready on your end.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with brands outside the US?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work with independent watch brands and dealers in the US, UK, and UAE.",
      },
    },
  ],
};

export default function WatchWebsiteDesignPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SeoHero />
      <SeoWhyWatchBrands />
      <SeoWhatsIncluded />
      <SeoHowItWorks />
      <SeoBuiltFor />
      <SeoFaq />
      <SeoFinalCta />
    </>
  );
}
