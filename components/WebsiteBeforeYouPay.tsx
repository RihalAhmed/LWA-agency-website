import Image from "next/image";

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#c89841] flex-shrink-0">
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Badge = ({ text, top, left, delay }: { text: string, top: number, left: number, delay: number }) => (
  <div 
    className="absolute flex items-center gap-2 px-[18px] py-[10px] bg-[#181818] rounded-full shadow-lg whitespace-nowrap z-20 w-max animate-[float_8s_ease-in-out_infinite]"
    style={{ top: `${top}px`, left: `${left}px`, animationDelay: `${delay}s` }}
  >
    <CheckIcon />
    <span className="text-[16px] font-medium text-white">{text}</span>
  </div>
);

export default function WebsiteBeforeYouPay() {
  return (
    <section className="w-full bg-[#0a0a0a] flex flex-col items-center pt-[40px] pb-[100px] overflow-hidden">
      {/* Matched max-width and padding to align exactly with About Us section */}
      <div className="w-full max-w-[1800px] flex flex-col items-center px-4 relative">
        
        {/* Main Hero Card */}
        <div className="relative w-full max-w-[1646px] bg-white rounded-[20px] flex flex-col items-center pt-[60px] 2xl:pt-[85px] pb-[30px] hidden lg:flex shadow-2xl overflow-hidden">
          
          <h2 className="text-[32px] xl:text-[40px] 2xl:text-[44px] font-bold text-black text-center uppercase tracking-wide px-4">
            SEE YOUR FINISHED WATCH WEBSITE BEFORE YOU <span className="text-[#d33a3a]">PAY A CENT</span>
          </h2>
          <p className="mt-[15px] text-[16px] lg:text-[20px] xl:text-[22px] 2xl:text-[29px] font-medium text-black/80 text-center w-full px-4 lg:whitespace-nowrap">
            The website system built specifically for independent watch brands and boutique retailers
          </p>

          {/* Relative container for image & badges to ensure they flow below text and don't overlap if text wraps */}
          <div className="relative w-[1584px] h-[406px] mt-[34px] origin-top scale-[0.7] xl:scale-[0.85] 2xl:scale-100 transition-transform duration-300">
            {/* Central Image */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[425px] h-[406px] z-10">
              <Image 
                src="/images/website-before-you-pay.png" 
                alt="Website preview"
                fill
                className="object-contain"
              />
            </div>

            {/* Badges (recalculated top offsets relative to this 406px container: original top - 222) */}
            <Badge text="Built exclusively for watch brands" top={304 - 222} left={43} delay={0} />
            <Badge text="Free $350 concept preview" top={404 - 222} left={167} delay={0.3} />
            <Badge text="Designed to turn attention into enquiries" top={514 - 222} left={124} delay={0.6} />
            <Badge text="No generic templates" top={249 - 222} left={379} delay={0.9} />
            <Badge text="No stock-looking visuals" top={249 - 222} left={983} delay={1.2} />
            <Badge text="Cinematic product presentation" top={337 - 222} left={1151} delay={1.5} />
            <Badge text="Built around your brand, not ours" top={439 - 222} left={1030} delay={1.8} />
            <Badge text="Your risk stays low from day one" top={527 - 222} left={1110} delay={2.1} />
          </div>
        </div>

        {/* Mobile Fallback for Main Card */}
        <div className="w-full bg-white rounded-[20px] p-8 flex flex-col items-center lg:hidden gap-6 shadow-xl">
          <h2 className="text-[22px] sm:text-[26px] font-bold text-black text-center uppercase tracking-tight leading-[1.1] px-2">
            SEE YOUR FINISHED<br />WATCH WEBSITE<br />BEFORE YOU <span className="text-[#d33a3a]">PAY A CENT</span>
          </h2>
          <p className="text-[14px] sm:text-[15px] font-medium text-black/80 text-center leading-[1.4] max-w-[320px] mx-auto mt-[-4px]">
            The website system built specifically for independent watch brands and boutique retailers
          </p>
          <div className="relative w-full max-w-[425px] aspect-square">
            <Image 
              src="/images/website-before-you-pay.png" 
              alt="Website preview"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-3 w-full items-center">
            {["Built exclusively for watch brands", "Free $350 concept preview", "No generic templates", "Cinematic product presentation", "Built around your brand, not ours", "Your risk stays low from day one"].map((text, i) => (
              <div key={i} className="flex items-center justify-center gap-2 px-[18px] py-[10px] bg-[#181818] rounded-full w-full max-w-[100%] sm:max-w-fit shadow-md">
                <CheckIcon />
                <span className="text-[13px] sm:text-[16px] font-medium text-white text-center leading-tight">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-[42px] relative w-full max-w-[1646px] h-auto lg:h-[122px] bg-white rounded-[20px] flex flex-col lg:flex-row items-center justify-between p-6 lg:p-0 lg:pl-[57px] lg:pr-[35px] gap-6 lg:gap-0 shadow-2xl">
          
          <h3 className="text-xl lg:text-[24px] font-bold text-black text-center lg:text-left lg:max-w-[421px] leading-tight">
            READY TO BUILD A WATCH WEBSITE THAT ACTUALLY FEELS LUXURY?
          </h3>

          <p className="text-[13px] sm:text-[14px] lg:text-[15px] font-medium text-black/70 text-center lg:text-left lg:absolute lg:left-[580px]">
            <span className="text-black font-bold">BUILT EXCLUSIVELY FOR WATCH BRANDS.</span> See your concept before you pay a cent.
          </p>

          <a href="https://calendly.com/rihalahmed10/introductory-call" target="_blank" rel="noopener noreferrer" className="w-full lg:w-fit px-8 min-h-[46px] bg-gradient-to-r from-[#d8aa4e] to-[#f7cd67] rounded-full flex items-center justify-center hover:shadow-[0_0_15px_rgba(247,205,103,0.5)] transition-all duration-300 cursor-pointer">
            <span className="text-[14px] sm:text-[15px] font-bold text-black uppercase">GET YOUR FREE $350 CONCEPT</span>
          </a>
          
        </div>

      </div>
    </section>
  );
}
