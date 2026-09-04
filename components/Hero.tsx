"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import TrustBanner from "./TrustBanner";

const audienceList = ["Watch Brands", "Watch Dealers", "Boutique Retailers"];

function RotatingAudience({ index }: { index: number }) {
  return (
    <span className="inline-grid grid-cols-1 grid-rows-1 relative overflow-hidden h-[1.25em] items-center justify-items-start translate-y-[0.12em]">
      {audienceList.map((audience, i) => {
        const isActive = i === index;
        const isPrev = i === (index - 1 + audienceList.length) % audienceList.length;

        let transformClass = "translate-y-[120%] opacity-0 pointer-events-none transition-none";
        if (isActive) {
          transformClass = "translate-y-0 opacity-100 transition-all duration-[1600ms] ease-in-out";
        } else if (isPrev) {
          transformClass = "-translate-y-[120%] opacity-0 pointer-events-none transition-all duration-[1600ms] ease-in-out";
        }

        return (
          <span
            key={audience}
            className={`col-start-1 row-start-1 whitespace-nowrap leading-none ${transformClass}`}
            style={{
              background: "linear-gradient(to right, #a97628 0%, #e0b455 48%, #f7cd67 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {audience}
          </span>
        );
      })}
    </span>
  );
}

export default function Hero() {
  const [audienceIndex, setAudienceIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAudienceIndex((prev) => (prev + 1) % audienceList.length);
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full flex flex-col items-center pt-8 lg:pt-0 -mt-[10px]">
      <div className="w-full max-w-[1800px] mx-auto relative flex flex-col">
        {/* Main Content Area */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start relative mt-6 lg:mt-[100px] px-4 sm:px-6 lg:px-0 lg:pl-[72px]">
          
          {/* Left / Main Text Column (Single Source of Truth for H1 & Text) */}
          <div className="flex flex-col w-full lg:w-[50%] 2xl:w-[975px] max-w-[975px] z-10 items-center lg:items-start text-center lg:text-left pb-6 lg:pb-[100px] -mt-0 lg:-mt-4 xl:-mt-10 2xl:mt-0">
            
            {/* Main Headline (Single H1) */}
            <h1 className="w-full text-[26px] sm:text-[36px] md:text-[52px] lg:text-[36px] xl:text-[48px] 2xl:text-[64px] font-bold leading-[1.18] lg:leading-tight capitalize mb-4 lg:mb-[26px]">
              <span className="text-[#ffffff]">
                The AI Web Agency for{" "}
              </span>
              <span className="inline-flex items-center justify-center lg:justify-start align-baseline">
                <span className="text-white mr-[0.25em] leading-none">Luxury</span>
                <RotatingAudience index={audienceIndex} />
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="w-full text-[14px] sm:text-[16px] md:text-[20px] lg:text-[16px] xl:text-[18px] 2xl:text-[24px] font-normal lg:font-medium leading-relaxed 2xl:leading-[33px] text-white/90 lg:text-white mb-6 lg:mb-[41px] max-w-[640px] lg:max-w-none">
              Custom websites for watch brands and dealers. $0 until you approve, free $350 concept preview. See it before you pay a cent.
            </p>

            {/* Feature Bullet Points */}
            <div className="flex flex-row flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-4 2xl:gap-[40px] mb-6 lg:mb-[40px] w-full">
              {["Premium Website", "Social Media Design", "AI Watch Photography"].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 sm:gap-3 2xl:gap-[14px]">
                  <Image 
                    src="/images/shield-icon.svg" 
                    alt="Check" 
                    width={28} 
                    height={34} 
                    className="w-[18px] sm:w-[24px] 2xl:w-[28px] h-auto" 
                  />
                  <span className="text-[14px] sm:text-[16px] 2xl:text-[22px] font-bold text-white">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="https://calendly.com/rihalahmed10/introductory-call"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-fit px-8 min-h-[46px] 2xl:w-[406px] lg:h-[50px] 2xl:h-[60px] rounded-[99px] bg-gradient-to-r from-[#d8aa4e] to-[#f7cd67] flex items-center justify-center text-[14px] sm:text-[15px] lg:text-[16px] 2xl:text-[20px] font-bold text-[#000000] uppercase hover:shadow-[0_0_15px_rgba(247,205,103,0.5)] transition-all duration-300 mx-auto lg:mx-0"
            >
              Apply for a Free Project
            </Link>
          </div>

          {/* Right Column for Desktop (Laptop Mockup with Pinned Badges) */}
          <div className="hidden lg:block absolute right-[-30px] top-[0px] w-[817px] h-[593px] z-20 origin-top-right scale-[0.6] xl:scale-[0.75] 2xl:scale-100 transition-transform duration-300 pointer-events-none">
            {/* Glowing Background Blob (Rectangle 166) */}
            <div className="absolute left-[195px] top-[270px] w-[634px] h-[337px] bg-gradient-to-r from-[#f7cd67] to-[#ac7a2b] opacity-70 blur-[240px] -z-10 rounded-full pointer-events-none" />

            <Image
              src="/images/laptop-mockup.png"
              alt="Laptop showing luxury watch website"
              width={817}
              height={593}
              className="object-contain"
              priority
            />

            {/* Floating Badges pinned relative to the laptop bounding box */}
            {/* Badge 1 (Value) */}
            <div className="absolute left-[243px] top-[-71px] flex flex-col items-center">
              <Image src="/images/badge-hight-perceived-value@2x.png" alt="High Perceived Value" width={129} height={70} />
              <div className="mt-[-4px] ml-[44px]">
                <Image src="/images/avatar-1@2x.png" alt="Avatar 1" width={58} height={58} />
              </div>
            </div>

            {/* Badge 2 (Brand) */}
            <div className="absolute left-[414px] top-[-80px] flex flex-col items-center">
              <Image src="/images/badge-strong-brand-recall@2x.png" alt="Strong Brand Recall" width={117} height={67} />
              <div className="mt-[-6px] ml-[39px]">
                <Image src="/images/avatar-2@2x.png" alt="Avatar 2" width={58} height={58} />
              </div>
            </div>

            {/* Badge 3 (Premium) */}
            <div className="absolute left-[588px] top-[-95px] flex flex-col items-center">
              <Image src="/images/badge-premium-first-impression@2x.png" alt="Premium First Impression" width={121} height={76} />
              <div className="mt-[-10px] ml-[29px]">
                <Image src="/images/avatar-3@2x.png" alt="Avatar 3" width={58} height={58} />
              </div>
            </div>
          </div>

          {/* Visual Column for Mobile (Badges + Laptop below CTA) */}
          <div className="flex lg:hidden flex-col items-center w-full mt-4 pb-12 overflow-x-hidden">
            {/* Floating Badges (Above laptop on mobile) */}
            <div className="flex flex-row flex-wrap items-end justify-center w-full gap-4 sm:gap-8 mt-0 relative z-10">
              <div className="flex flex-col items-center">
                <Image src="/images/badge-hight-perceived-value@2x.png" alt="High Perceived Value" width={100} height={55} className="w-[80px] sm:w-[100px] h-auto" />
                <div className="-mt-1">
                  <Image src="/images/avatar-1@2x.png" alt="Avatar 1" width={48} height={48} className="w-[36px] sm:w-[48px] h-auto" />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/images/badge-strong-brand-recall@2x.png" alt="Strong Brand Recall" width={90} height={52} className="w-[72px] sm:w-[90px] h-auto" />
                <div className="-mt-1">
                  <Image src="/images/avatar-2@2x.png" alt="Avatar 2" width={48} height={48} className="w-[36px] sm:w-[48px] h-auto" />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/images/badge-premium-first-impression@2x.png" alt="Premium First Impression" width={95} height={60} className="w-[76px] sm:w-[95px] h-auto" />
                <div className="-mt-1">
                  <Image src="/images/avatar-3@2x.png" alt="Avatar 3" width={48} height={48} className="w-[36px] sm:w-[48px] h-auto" />
                </div>
              </div>
            </div>

            {/* Laptop Mockup Image */}
            <div className="w-full flex justify-center items-center -mt-6 sm:-mt-10 mb-2 relative z-0">
              {/* Glowing Background Blob */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[80%] h-[60%] bg-gradient-to-r from-[#f7cd67] to-[#ac7a2b] opacity-60 blur-[120px] -z-10 rounded-full pointer-events-none" />
              <Image
                src="/images/luxury-watch-website.png"
                alt="Laptop showing luxury watch website"
                width={1496}
                height={1051}
                className="w-full max-w-[640px] h-auto object-contain mx-auto relative z-10"
                priority
              />
            </div>
          </div>

        </div>
      </div>

      {/* Mobile banner is included inside TrustBanner component */}
      <TrustBanner />
    </section>
  );
}
