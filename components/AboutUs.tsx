import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="w-full bg-[#0a0a0a] flex justify-center pt-16 pb-8 lg:pt-[201px] lg:pb-[168px]">
      <div className="w-full max-w-[1800px] px-6 xl:px-12 2xl:px-4 flex flex-col-reverse lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-10 xl:gap-[60px] 2xl:gap-[100px]">
        
        {/* Left Column: Image & Signature */}
        <div className="relative w-full lg:w-[45%] 2xl:w-[703px] max-w-[703px] aspect-[703/849]">
          {/* Main Image Mask */}
          <div className="absolute inset-0 bg-[#0a0a0a] z-10 overflow-hidden rounded-t-[30px] rounded-b-[30px] lg:rounded-[40px]" style={{ transform: "translateZ(0)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/about-image.png" 
              alt="Rihal - Founder of The Luxury Watch Agency"
              className="w-full h-full object-cover rounded-t-[30px] rounded-b-[30px] lg:rounded-[40px]"
            />
            
            {/* Bottom Gradient Overlay to blend image into background */}
            <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10 rounded-b-[30px] lg:rounded-b-[40px]" />

            {/* Overlaid Signature & Title */}
            <div className="absolute bottom-8 md:bottom-[40px] left-6 md:left-[34px] flex flex-col items-start z-20">
              {/* Signature Image */}
              <img 
                src="/images/rihal-signature.png" 
                alt="Rihal Signature"
                className="w-auto h-[40px] md:h-[58px] mb-[3px] object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <p className="text-[12px] md:text-[14px] font-medium text-white tracking-wide">
                Founder of The Luxury Watch Agency
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Typography & Copy */}
        <div className="w-full lg:w-[55%] 2xl:w-[843px] max-w-[843px] flex flex-col">
          <h2 className="text-[28px] md:text-4xl lg:text-[32px] xl:text-[38px] 2xl:text-[58px] font-bold text-white leading-[1.2] lg:leading-[1.3] 2xl:leading-[70px]">
            I&apos;m <span className="bg-gradient-to-r from-[#c89841] to-[#f7cd67] text-transparent bg-clip-text">Rihal</span> — and Yes, I&apos;m the One You&apos;ll <span className="bg-gradient-to-r from-[#c89841] to-[#f7cd67] text-transparent bg-clip-text">Actually Talk To.</span>
          </h2>
          
          <div className="mt-6 md:mt-8 lg:mt-[30px] 2xl:mt-[55px] text-[14px] sm:text-[15px] xl:text-[16px] 2xl:text-[20px] font-normal text-white/70 leading-[1.6] lg:leading-[1.8] 2xl:leading-[40px] flex flex-col gap-4 lg:gap-6">
            <p>
              I&apos;ll tell you straight: this was never about building &quot;just another web agency.&quot; It was about giving independent watch brands and boutique dealers <strong className="text-white/90">something that actually matches what they&apos;re selling.</strong>
            </p>
            <p>
              I specialize exclusively in watch brands — no templates, no stock 3D, no recycled layouts borrowed from unrelated industries. Every site is built from scratch to make a <strong className="text-white/90">$3,000 watch feel like $30,000</strong> before a collector reads a single word.
            </p>
            <p>
              Here&apos;s the reality: collectors judge trust in seconds. If your site doesn&apos;t <strong className="text-white/90">instantly feel as premium</strong> as your inventory, you lose that sale before they ever message you. That&apos;s the real cost of a generic website — not visible, but constant.
            </p>
            <p className="uppercase font-bold text-white/90">
              THAT&apos;S WHY I PUT MY NAME ON EVERY PROJECT, PERSONALLY. NOT A SUPPORT TICKET, NOT A PROJECT MANAGER YOU&apos;VE NEVER MET - ME.
            </p>
            <p>
              When you work with me, you&apos;re not hiring a generalist agency that &quot;<strong className="text-white/90">also does watches.</strong>&quot; You&apos;re hiring someone who&apos;s built specifically to understand collectors, and who&apos;s reachable the moment something needs fixing, adjusting, or explaining.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
