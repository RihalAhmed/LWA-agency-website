import Image from "next/image";
import Link from "next/link";

export default function SeoHero() {
  return (
    <section className="w-full flex flex-col items-center pt-10 pb-14 lg:pt-[120px] lg:pb-[100px] bg-black">
      <div className="w-full max-w-[1400px] px-5 sm:px-6 lg:px-8 xl:px-12 flex flex-col items-center text-center">

        {/* Main Headline */}
        <h1 className="text-[26px] sm:text-[32px] md:text-[42px] lg:text-[32px] xl:text-[42px] 2xl:text-[64px] font-bold leading-[1.15] capitalize max-w-[1100px]">
          <span className="text-white">
            Watch Website Design, Built by Someone Who Only Builds for{" "}
          </span>
          <span
            style={{
              background: "linear-gradient(to right, #a97628 0%, #e0b455 48%, #f7cd67 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Watches
          </span>
        </h1>

        {/* Subhead */}
        <p className="text-[14px] sm:text-[15px] md:text-[18px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-medium leading-relaxed text-white/80 mt-5 lg:mt-8 max-w-[900px] px-2">
          Not a web agency that &ldquo;also does watches.&rdquo; A studio built around one product category — so every decision, from layout to load speed, is made with a collector&apos;s eye, not a generic template.
        </p>

        {/* CTA Button */}
        <Link
          href="https://calendly.com/rihalahmed10/introductory-call"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 lg:mt-12 w-full sm:w-fit px-8 lg:px-10 min-h-[46px] lg:h-[60px] rounded-[99px] bg-gradient-to-r from-[#d8aa4e] to-[#f7cd67] flex items-center justify-center text-[13px] sm:text-[15px] lg:text-[20px] font-bold text-[#000000] uppercase hover:shadow-[0_0_20px_rgba(247,205,103,0.5)] transition-all duration-300 whitespace-nowrap"
        >
          Get Your Free $350 Concept Preview →
        </Link>

        {/* Feature Points */}
        <div className="flex flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-8 mt-6 lg:mt-10">
          {["Custom Design, Not a Template", "See It Before You Pay", "$0 Until You Approve"].map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 lg:gap-3">
              <Image 
                src="/images/shield-icon.svg" 
                alt="Verified service guarantee" 
                width={28} 
                height={34} 
                className="w-[18px] sm:w-[22px] lg:w-[28px] h-auto" 
              />
              <span className="text-[13px] sm:text-[14px] lg:text-[18px] font-bold text-white">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Contextual Internal Link to Homepage Portfolio */}
        <div className="mt-6 sm:mt-8 text-center">
          <Link 
            href="/#portfolio" 
            className="text-[13px] sm:text-[15px] font-medium text-white/70 hover:text-[#f7cd67] underline underline-offset-4 transition-colors"
          >
            See our recent work and live watch portfolio →
          </Link>
        </div>

      </div>
    </section>
  );
}
