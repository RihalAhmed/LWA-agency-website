import Image from "next/image";
import Link from "next/link";

const AudienceCard = ({ title, text, iconPath, iconAlt }: { title: string, text: string, iconPath: string, iconAlt: string }) => (
  <div className="group w-full max-w-[780px] bg-white rounded-[14px] lg:rounded-[16px] p-4 sm:p-5 flex items-center gap-3.5 lg:gap-6 shadow-sm hover:shadow-xl border border-black/20 transition-all duration-300 hover:bg-black">
    <div className="relative w-[44px] lg:w-[80px] h-[44px] lg:h-[80px] flex-shrink-0 transition-all duration-300 brightness-0 group-hover:brightness-100">
      <Image src={iconPath} alt={iconAlt} fill className="object-contain" />
    </div>
    <div className="flex flex-col">
      <h3 className="text-[13px] sm:text-[14px] lg:text-[20px] font-bold text-black group-hover:text-white uppercase leading-tight transition-colors duration-300">{title}</h3>
      <p className="text-[12px] sm:text-[13px] lg:text-[14px] font-medium text-black/70 group-hover:text-white/70 mt-1 lg:mt-1.5 leading-snug transition-colors duration-300">
        {text}
      </p>
    </div>
  </div>
);

export default function SeoBuiltFor() {
  return (
    <section className="w-full bg-[#f7f7f7] flex flex-col items-center py-14 lg:pt-[90px] lg:pb-[90px] overflow-hidden">
      <div className="w-full max-w-[1800px] px-5 sm:px-6 lg:px-8 xl:px-12 flex flex-col items-center">
        
        {/* Content Column */}
        <div className="w-full max-w-[880px] mx-auto flex flex-col items-center mt-2 lg:mt-[20px]">
          
          {/* Header */}
          <div className="w-full mb-4 lg:mb-8 text-center">
            <h2 className="text-[26px] sm:text-[30px] md:text-4xl lg:text-[32px] xl:text-[38px] 2xl:text-[48px] font-bold text-black max-w-[881px] leading-tight text-center mx-auto">
              Built Exclusively for <span className="text-[#c89841]">Watch Brands</span><br className="hidden sm:block"/> and Dealers
            </h2>
            <p className="text-[14px] sm:text-[15px] md:text-[18px] lg:text-[18px] 2xl:text-[20px] font-medium text-black/80 mt-2 lg:mt-4 max-w-[804px] leading-relaxed text-center mx-auto px-2 sm:px-0">
              We work with brands and dealers who take their online presence as seriously as their inventory.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:gap-5 w-full z-10">
            <AudienceCard 
              title="INDEPENDENT WATCH BRANDS" 
              text="Launching their first proper online presence — built to match the quality of the product from day one." 
              iconPath="/images/why-us-icon1.png" 
              iconAlt="Independent watch brand website design icon"
            />
            <AudienceCard 
              title="MULTI-BRAND BOUTIQUE RETAILERS" 
              text="Competing against bigger, better-funded dealer chains — with a website that makes the smaller operation feel more premium." 
              iconPath="/images/why-us-icon2.png" 
              iconAlt="Multi-brand boutique watch retailer website icon"
            />
            <AudienceCard 
              title="ESTABLISHED DEALERS" 
              text="Whose current site doesn't match the quality of their inventory — and they know it's costing them credibility." 
              iconPath="/images/why-us-icon3.png" 
              iconAlt="Established watch dealer website redesign icon"
            />

            {/* Contextual Link to Founder/About approach */}
            <div className="pt-2 text-center text-[14px] sm:text-[15px] lg:text-[16px] text-black/80 font-medium">
              Want to know how we work with founders directly?{" "}
              <Link 
                href="/#about" 
                className="text-[#c89841] font-semibold underline underline-offset-4 hover:text-black transition-colors"
              >
                Read more about our approach →
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
