import Image from "next/image";

export default function BlueprintForm() {
  return (
    <section id="contact" className="relative w-full bg-white flex flex-col items-center py-16 lg:pt-[120px] lg:pb-[160px] overflow-hidden">
      <div className="w-full max-w-[1700px] px-4 lg:px-8 xl:px-12 flex flex-col xl:flex-row gap-10 xl:gap-8 2xl:gap-[71px] items-center xl:items-start xl:justify-between">
        
        {/* Blueprint Info Column (Source First for H2 SEO hierarchy) */}
        <div className="w-full xl:w-[53%] flex flex-col max-w-[833px] mx-auto xl:mx-0 xl:order-2">
          <h2 className="text-[28px] md:text-[40px] lg:text-[32px] xl:text-[38px] 2xl:text-[53px] font-bold text-[#141414] leading-tight mb-4 text-center xl:text-left">
            Your Watch And <span className="text-[#a67326]">Our Blueprint</span>
          </h2>
          <h3 className="hidden sm:block text-[16px] sm:text-[20px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] font-medium text-[#141414] mb-8 uppercase text-center xl:text-left">
            LET&apos;S SHOW YOU WHAT YOUR BRAND COULD LOOK LIKE ONLINE.
          </h3>
          
          <div className="hidden sm:flex w-full sm:w-fit bg-[#a67326] rounded-[10px] py-3 px-4 sm:px-6 mb-8 lg:mb-10 items-center justify-center mx-auto xl:mx-0 text-center">
            <p className="text-[13px] sm:text-[15px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] font-medium text-white whitespace-normal lg:whitespace-nowrap">
              You don&apos;t need another sales pitch. <br className="block sm:hidden" /> <span className="font-bold">You need to see the difference.</span>
            </p>
          </div>

          <h4 className="text-[20px] lg:text-[20px] xl:text-[24px] 2xl:text-[32px] font-bold text-[#141414] mb-3 uppercase text-center xl:text-left">
            HERE&apos;S WHAT WE&apos;LL LOOK AT:
          </h4>
          <p className="text-[13px] sm:text-[14px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] text-[#141414]/90 leading-relaxed mb-8 max-w-[780px] text-center xl:text-left mx-auto xl:mx-0">
            We&apos;ll look at your current website, your brand, and how you&apos;re presenting your watches online. Then we&apos;ll show you what we&apos;d change, why we&apos;d change it, and what we&apos;d build instead.
          </p>

          <div className="w-full flex flex-col gap-2 lg:gap-4">
            {/* Checklist Item 1 */}
            <div className="group w-full max-w-[780px] min-h-[70px] lg:min-h-[104px] p-3 lg:py-4 lg:px-6 border border-[#141414] rounded-[10px] lg:rounded-[20px] flex items-center gap-3 lg:gap-6 bg-white hover:bg-[#141414] transition-all duration-300 shrink-0 cursor-default">
              <div className="w-[40px] h-[40px] lg:w-[72px] lg:h-[72px] relative flex-shrink-0 group-hover:invert transition-all duration-300">
                <Image src="/images/form-icon-1.png" alt="Monitor Icon" fill className="object-contain" />
              </div>
              <p className="text-[13px] sm:text-[14px] lg:text-[22px] font-bold text-[#141414] group-hover:text-white transition-colors duration-300 leading-snug">
                Your Current Website: <span className="font-medium text-[#141414]/90 group-hover:text-white/90">See what&apos;s working and what needs improving.</span>
              </p>
            </div>
            {/* Checklist Item 2 */}
            <div className="group w-full max-w-[780px] min-h-[70px] lg:min-h-[104px] p-3 lg:py-4 lg:px-6 border border-[#141414] rounded-[10px] lg:rounded-[20px] flex items-center gap-3 lg:gap-6 bg-white hover:bg-[#141414] transition-all duration-300 shrink-0 cursor-default">
              <div className="w-[40px] h-[40px] lg:w-[72px] lg:h-[72px] relative flex-shrink-0 group-hover:invert transition-all duration-300">
                <Image src="/images/form-icon-3.png" alt="Chart Icon" fill className="object-contain" />
              </div>
              <p className="text-[13px] sm:text-[14px] lg:text-[22px] font-bold text-[#141414] group-hover:text-white transition-colors duration-300 leading-snug">
                Your COMPETITORS: <span className="font-medium text-[#141414]/90 group-hover:text-white/90">how competitors present themselves and where you can stand apart.</span>
              </p>
            </div>
            {/* Checklist Item 3 */}
            <div className="group w-full max-w-[780px] min-h-[70px] lg:min-h-[104px] p-3 lg:py-4 lg:px-6 border border-[#141414] rounded-[10px] lg:rounded-[20px] flex items-center gap-3 lg:gap-6 bg-white hover:bg-[#141414] transition-all duration-300 shrink-0 cursor-default">
              <div className="w-[40px] h-[40px] lg:w-[72px] lg:h-[72px] relative flex-shrink-0 group-hover:invert transition-all duration-300">
                <Image src="/images/form-icon-5.png" alt="Price Tag Icon" fill className="object-contain" />
              </div>
              <p className="text-[13px] sm:text-[14px] lg:text-[22px] font-bold text-[#141414] group-hover:text-white transition-colors duration-300 leading-snug">
                Your Positioning: <span className="font-medium text-[#141414]/90 group-hover:text-white/90">Find where your website is losing perceived value.</span>
              </p>
            </div>
            {/* Checklist Item 4 */}
            <div className="group w-full max-w-[780px] min-h-[70px] lg:min-h-[104px] p-3 lg:py-4 lg:px-6 border border-[#141414] rounded-[10px] lg:rounded-[20px] flex items-center gap-3 lg:gap-6 bg-white hover:bg-[#141414] transition-all duration-300 shrink-0 cursor-default">
              <div className="w-[40px] h-[40px] lg:w-[72px] lg:h-[72px] relative flex-shrink-0 group-hover:invert transition-all duration-300">
                <Image src="/images/form-icon-7.png" alt="Map Pin Icon" fill className="object-contain" />
              </div>
              <p className="text-[13px] sm:text-[14px] lg:text-[22px] font-bold text-[#141414] group-hover:text-white transition-colors duration-300 leading-snug">
                Your Next Direction: <span className="font-medium text-[#141414]/90 group-hover:text-white/90">See what we&apos;d change and how we&apos;d build it.</span>
              </p>
            </div>
          </div>

        </div>

        {/* Form Card Column (Positioned left on desktop via xl:order-1) */}
        <div className="w-full xl:w-[42%] 2xl:w-[670px] max-w-[670px] mx-auto xl:mx-0 bg-transparent rounded-[20px] overflow-hidden flex flex-col xl:order-1">
          {/* Header Graphic area */}
          <div className="w-full aspect-[670/381] min-h-[220px] relative">
            <Image 
              src="/images/form-header-final.png" 
              alt="I Build Like Your Reputation Is Mine. You Have My Word." 
              fill 
              className="object-cover" 
              priority
            />
          </div>

          {/* Form Content */}
          <div className="w-full p-5 sm:p-8 lg:p-12 flex flex-col pt-5 bg-white border-x border-b border-black/30 rounded-b-[20px] shadow-[0_30px_60px_rgba(0,0,0,0.1)]">
            <h3 className="text-[18px] sm:text-[24px] lg:text-[28px] font-bold text-[#141414] uppercase mb-4 lg:mb-8 text-center">
              SEE WHAT <span className="text-[#a67326]">WE&apos;D BUILD</span> FOR YOU.
            </h3>
            
            <form className="w-full flex flex-col gap-3 lg:gap-4">
              <input type="text" placeholder="Full Name:" className="w-full h-[40px] lg:h-[46px] rounded-[10px] border border-black/50 bg-transparent px-4 text-[13px] lg:text-[14px] text-[#141414] placeholder-[#141414]/70 focus:outline-none focus:border-[#a67326] font-medium" />
              <input type="tel" placeholder="Phone:" className="w-full h-[40px] lg:h-[46px] rounded-[10px] border border-black/50 bg-transparent px-4 text-[13px] lg:text-[14px] text-[#141414] placeholder-[#141414]/70 focus:outline-none focus:border-[#a67326] font-medium" />
              <input type="email" placeholder="Email:" className="w-full h-[40px] lg:h-[46px] rounded-[10px] border border-black/50 bg-transparent px-4 text-[13px] lg:text-[14px] text-[#141414] placeholder-[#141414]/70 focus:outline-none focus:border-[#a67326] font-medium" />
              <input type="url" placeholder="Website Url (if have)" className="w-full h-[40px] lg:h-[46px] rounded-[10px] border border-black/50 bg-transparent px-4 text-[13px] lg:text-[14px] text-[#141414] placeholder-[#141414]/70 focus:outline-none focus:border-[#a67326] font-medium" />
              
              <button type="submit" className="w-full min-h-[44px] lg:min-h-[49px] bg-[#a67326] text-white rounded-[10px] text-[14px] lg:text-[16px] font-bold mt-2 hover:brightness-110 transition-all cursor-pointer uppercase py-2 lg:py-3">
                Submit Now
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
