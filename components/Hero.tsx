import Image from "next/image";
import Link from "next/link";
import TrustBanner from "./TrustBanner";

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center pt-8 lg:pt-0 -mt-[10px]">

      {/* =========================================
          DESKTOP LAYOUT (Pixel-Perfect Grid/Flex)
          ========================================= */}
      <div className="hidden lg:flex w-full max-w-[1800px] mx-auto relative flex-col">

        {/* Main Content Area Split */}
        <div className="w-full flex flex-row items-start relative mt-[100px] pl-[72px]">

          {/* Left Column (Text & CTAs) */}
          <div className="flex flex-col w-[50%] 2xl:w-[975px] max-w-[975px] z-10 pb-[100px] -mt-4 xl:-mt-10 2xl:mt-0">

            {/* Main Headline */}
            <h1 className="w-full text-[36px] xl:text-[48px] 2xl:text-[64px] font-bold leading-tight capitalize mb-[26px]">
              <span className="text-[#ffffff]">
                The AI Web Agency for Luxury{" "}
              </span>
              <span
                style={{
                  background: "linear-gradient(to right, #a97628 0%, #e0b455 48%, #f7cd67 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Watch Brands
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="w-full text-[16px] xl:text-[18px] 2xl:text-[24px] font-medium leading-relaxed 2xl:leading-[33px] text-[#ffffff] mb-[41px]">
              Custom websites that make your watches look premium and collectors
              confident buying — built around trust, desire, and value
            </p>

            {/* Feature Bullet Points */}
            <div className="flex flex-wrap items-center gap-4 2xl:gap-[40px] mb-[40px]">
              {/* Premium Website */}
              <div className="flex items-center gap-2 2xl:gap-[14px]">
                <Image src="/images/shield-icon.svg" alt="Check" width={28} height={34} className="w-[20px] 2xl:w-[28px] h-auto" />
                <span className="text-[14px] xl:text-[16px] 2xl:text-[22px] font-bold text-[#ffffff]">Premium Website</span>
              </div>
              {/* Social Media Design */}
              <div className="flex items-center gap-2 2xl:gap-[14px]">
                <Image src="/images/shield-icon.svg" alt="Check" width={28} height={34} className="w-[20px] 2xl:w-[28px] h-auto" />
                <span className="text-[14px] xl:text-[16px] 2xl:text-[22px] font-bold text-[#ffffff]">Social Media Design</span>
              </div>
              {/* AI Watch Photography */}
              <div className="flex items-center gap-2 2xl:gap-[14px]">
                <Image src="/images/shield-icon.svg" alt="Check" width={28} height={34} className="w-[20px] 2xl:w-[28px] h-auto" />
                <span className="text-[14px] xl:text-[16px] 2xl:text-[22px] font-bold text-[#ffffff]">AI Watch Photography</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="https://calendly.com/rihalahmed10/introductory-call"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit px-8 2xl:w-[406px] h-[50px] 2xl:h-[60px] rounded-[99px] bg-gradient-to-r from-[#d8aa4e] to-[#f7cd67] flex items-center justify-center text-[16px] 2xl:text-[20px] font-bold text-[#000000] uppercase hover:shadow-[0_0_15px_rgba(247,205,103,0.5)] transition-all duration-300"
            >
              Apply for a Free Project
            </Link>
          </div>

          {/* Right Column (Laptop Mockup) */}
          <div className="absolute right-[-30px] top-[0px] w-[817px] h-[593px] z-20 origin-top-right scale-[0.6] xl:scale-[0.75] 2xl:scale-100 transition-transform duration-300 pointer-events-none">
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
        </div>
      </div>

      {/* =========================================
          MOBILE/TABLET LAYOUT (Fluid Flexbox)
          ========================================= */}
      <div className="flex flex-col lg:hidden gap-6 mt-6 px-4 sm:px-6 pb-12 w-full max-w-[100vw] overflow-x-hidden items-center text-center">

        {/* Headline */}
        <h1 className="text-[28px] sm:text-[36px] md:text-[52px] font-bold leading-[1.1] capitalize w-full text-center">
          <span className="text-white">
            The AI Web Agency for Luxury{" "}
          </span>
          <span
            style={{
              background: "linear-gradient(to right, #a97628 0%, #e0b455 48%, #f7cd67 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Watch Brands
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-[14px] sm:text-[16px] md:text-[20px] font-normal leading-relaxed text-white/90 text-center max-w-[640px] mx-auto">
          Custom websites that make your watches look premium and collectors
          confident buying — built around trust, desire, and value
        </p>

        {/* Feature Bullet Points */}
        <div className="flex flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 mt-2 w-full">
          {["Premium Website", "Social Media Design", "AI Watch Photography"].map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 sm:gap-3">
              <Image src="/images/shield-icon.svg" alt="Check" width={24} height={29} className="w-[18px] sm:w-[24px]" />
              <span className="text-[14px] sm:text-[16px] font-bold text-white">
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
          className="w-full sm:w-fit px-8 min-h-[46px] rounded-[99px] bg-gradient-to-r from-[#d8aa4e] to-[#f7cd67] flex items-center justify-center text-[14px] sm:text-[15px] font-bold text-[#000000] uppercase mt-4 hover:shadow-[0_0_15px_rgba(247,205,103,0.5)] transition-all duration-300 mx-auto"
        >
          Apply for a Free Project
        </Link>

        {/* Floating Badges (Above laptop on mobile) */}
        <div className="flex flex-row flex-wrap items-end justify-center w-full gap-4 sm:gap-8 mt-5 relative z-10">
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
          <Image
            src="/images/luxury-watch-website.png"
            alt="Laptop showing luxury watch website"
            width={1496}
            height={1051}
            className="w-full max-w-[640px] h-auto object-contain mx-auto"
            priority
          />
        </div>
      </div>

      {/* Mobile banner is included inside TrustBanner component */}
      <TrustBanner />
    </section>
  );
}
