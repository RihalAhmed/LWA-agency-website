import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import AboutUs from "@/components/AboutUs";
import WebsiteBeforeYouPay from "@/components/WebsiteBeforeYouPay";
import OurService from "@/components/OurService";
import WhyChooseUs from "@/components/WhyChooseUs";
import StillThinkingAboutIt from "@/components/StillThinkingAboutIt";
import OurProcess from "@/components/OurProcess";
import BlueprintForm from "@/components/BlueprintForm";

export const metadata: Metadata = {
  title: "The Luxury Watch Agency — AI Web Agency for Watch Brands",
  description:
    "Custom websites that make your watches look premium and collectors confident buying — built around trust, desire, and value. $0 until you approve.",
  alternates: {
    canonical: "https://www.theluxurywatchagency.com",
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://www.theluxurywatchagency.com/#organization",
      "name": "The Luxury Watch Agency",
      "alternateName": "TLWA",
      "url": "https://www.theluxurywatchagency.com",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://www.theluxurywatchagency.com/#logo",
        "url": "https://www.theluxurywatchagency.com/images/logo@2x.png",
        "caption": "The Luxury Watch Agency"
      },
      "image": "https://www.theluxurywatchagency.com/images/form-header-final.png",
      "description":
        "AI web agency built exclusively for luxury watch brands, dealers, and boutique retailers. Custom websites, branded social media design, and AI watch photography.",
      "founder": {
        "@type": "Person",
        "name": "Rihal",
        "jobTitle": "Founder & Principal Designer"
      },
      "email": "rihal@theluxurywatchagency.com",
      "telephone": "+8801763364217",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Custom Mor, Churhash",
        "addressLocality": "Kushtia",
        "addressCountry": "BD"
      },
      "areaServed": [
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "United Arab Emirates" },
        { "@type": "AdministrativeArea", "name": "Worldwide" }
      ],
      "priceRange": "$$$$",
      "sameAs": [
        "https://www.instagram.com/theluxurywatchagency/",
        "https://www.linkedin.com/company/the-luxury-watch-agency"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Services for Watch Brands",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Premium Watch Websites",
              "description":
                "Custom luxury websites built specifically for independent watch brands and dealers."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Social Media Design",
              "description":
                "Luxury-focused visual design for Instagram posts, stories, reels, and product releases."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Watch Photography",
              "description":
                "Collector-grade visual scenes and lifestyle imagery created without expensive physical studio shoots."
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.theluxurywatchagency.com/#website",
      "url": "https://www.theluxurywatchagency.com",
      "name": "The Luxury Watch Agency",
      "description":
        "Custom websites that make your watches look premium and collectors confident buying.",
      "publisher": {
        "@id": "https://www.theluxurywatchagency.com/#organization"
      }
    }
  ]
};

export default function Home() {
  return (
    <>
      {/* Static JSON-LD Schema rendered directly into HTML source for search & AI answer engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <Hero />
      <Portfolio />
      <AboutUs />
      <WebsiteBeforeYouPay />
      <OurService />
      <WhyChooseUs />
      <StillThinkingAboutIt />
      <OurProcess />
      <BlueprintForm />
    </>
  );
}
