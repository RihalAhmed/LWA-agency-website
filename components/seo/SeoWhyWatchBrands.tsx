import Image from "next/image";
import Link from "next/link";

export default function SeoWhyWatchBrands() {
  return (
    <section className="w-full bg-[#0a0a0a] flex justify-center py-14 lg:pt-[140px] lg:pb-[120px]">
      <div className="w-full max-w-[1800px] px-5 sm:px-6 xl:px-12 2xl:px-4 flex flex-col-reverse lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-10 xl:gap-[60px] 2xl:gap-[100px]">
        
        {/* Left Column: Image */}
        <div className="relative w-full lg:w-[45%] 2xl:w-[703px] max-w-[703px] aspect-[703/849]">
          <div className="absolute inset-0 bg-[#0a0a0a] z-10 overflow-hidden rounded-[20px] lg:rounded-[40px]" style={{ transform: "translateZ(0)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/about-image.png" 
              alt="Rihal Ahmed, founder and watch website design specialist at The Luxury Watch Agency"
              className="w-full h-full object-cover rounded-[20px] lg:rounded-[40px]"
            />
            
            {/* Bottom Gradient Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10 rounded-b-[20px] lg:rounded-b-[40px]" />

            {/* Overlaid Text */}
            <div className="absolute bottom-6 md:bottom-[40px] left-5 md:left-[34px] flex flex-col items-start z-20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/rihal-signature.png" 
                alt="Signature of founder Rihal Ahmed"
                className="w-auto h-[36px] md:h-[58px] mb-[3px] object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <p className="text-[11px] md:text-[14px] font-medium text-white tracking-wide">
                Founder of The Luxury Watch Agency
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Copy */}
        <div className="w-full lg:w-[55%] 2xl:w-[843px] max-w-[843px] flex flex-col text-center lg:text-left">
          <h2 className="text-[26px] sm:text-[30px] md:text-4xl lg:text-[32px] xl:text-[38px] 2xl:text-[58px] font-bold text-white leading-[1.2] lg:leading-[1.3] 2xl:leading-[70px]">
            Why <span className="bg-gradient-to-r from-[#c89841] to-[#f7cd67] text-transparent bg-clip-text">Watch Brands</span> Need More Than a <span className="bg-gradient-to-r from-[#c89841] to-[#f7cd67] text-transparent bg-clip-text">Standard Website</span>
          </h2>
          
          <div className="mt-5 md:mt-8 lg:mt-[30px] 2xl:mt-[55px] text-[14px] sm:text-[15px] xl:text-[16px] 2xl:text-[20px] font-normal text-white/70 leading-[1.6] lg:leading-[1.8] 2xl:leading-[40px] flex flex-col gap-4 lg:gap-6 text-left">
            <p>
              Collectors decide whether to trust your brand in the first few seconds on your site — <strong className="text-white/90">before they read a single word of copy.</strong> A $3,000 watch on a generic Shopify theme looks like a $300 watch. That&apos;s not an exaggeration; it&apos;s how visual trust works.
            </p>
            <p>
              Perceived value is set by the site before the product ever gets a chance to speak for itself.
            </p>
            <p>
              Most web agencies don&apos;t understand this because they&apos;re not built around it — they build the same site structure for a dentist, a law firm, and a watch brand, with different photos dropped in.
            </p>
            <p className="uppercase font-bold text-white/90">
              WE ONLY BUILD FOR WATCHES. THAT&apos;S THE ENTIRE BUSINESS.
            </p>
            <div className="pt-2">
              <Link 
                href="/#about" 
                className="text-[14px] sm:text-[16px] font-medium text-[#f7cd67] underline underline-offset-4 hover:text-[#e8b94b] transition-colors"
              >
                Learn more about our agency story and design standards →
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
