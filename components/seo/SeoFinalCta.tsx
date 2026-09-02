import Link from "next/link";

export default function SeoFinalCta() {
  return (
    <section className="w-full bg-[#0a0a0a] flex flex-col items-center py-12 lg:py-[80px]">
      <div className="w-full max-w-[1646px] px-5 sm:px-6 lg:px-8">

        {/* CTA Banner */}
        <div className="w-full h-auto bg-white rounded-[20px] flex flex-col xl:flex-row items-center justify-between p-6 sm:p-8 xl:py-7 xl:px-[57px] gap-6 xl:gap-8 shadow-2xl">
          
          <h3 className="text-[18px] sm:text-xl xl:text-[22px] font-bold text-black text-center xl:text-left xl:max-w-[420px] leading-tight">
            READY TO BUILD A WATCH WEBSITE THAT ACTUALLY FEELS LUXURY?
          </h3>

          <p className="text-[13px] sm:text-[14px] xl:text-[15px] font-medium text-black/70 text-center xl:text-left">
            <span className="text-black font-bold">BUILT EXCLUSIVELY FOR WATCH BRANDS.</span><br className="hidden xl:block" /> See your concept before you pay a cent.
          </p>

          <Link 
            href="https://calendly.com/rihalahmed10/introductory-call" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full sm:w-auto xl:w-fit px-8 min-h-[46px] bg-gradient-to-r from-[#d8aa4e] to-[#f7cd67] rounded-full flex items-center justify-center hover:shadow-[0_0_15px_rgba(247,205,103,0.5)] transition-all duration-300 cursor-pointer flex-shrink-0 text-center"
          >
            <span className="text-[13px] sm:text-[14px] xl:text-[15px] font-bold text-black uppercase whitespace-nowrap">Book Your Free 15-Minute Call →</span>
          </Link>
          
        </div>

      </div>
    </section>
  );
}
