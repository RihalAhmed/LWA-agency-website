import Image from "next/image";

const AudienceCard = ({ title, text, iconPath }: { title: string, text: string, iconPath: string }) => (
  <div className="group w-full max-w-[780px] bg-white rounded-[14px] lg:rounded-[16px] p-4 sm:p-5 flex items-center gap-3.5 lg:gap-6 shadow-sm hover:shadow-xl border border-black/20 transition-all duration-300 hover:bg-black">
    <div className="relative w-[44px] lg:w-[80px] h-[44px] lg:h-[80px] flex-shrink-0 transition-all duration-300 brightness-0 group-hover:brightness-100">
      <Image src={iconPath} alt={title} fill className="object-contain" />
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
    <section className="w-full bg-[#f7f7f7] flex flex-col items-center py-14 lg:pt-[100px] lg:pb-[100px] overflow-hidden">
      <div className="w-full max-w-[1800px] px-5 sm:px-6 lg:px-8 xl:px-12 flex flex-col items-center lg:items-start">
        
        {/* Content Columns */}
        <div className="w-full max-w-[1728px] mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-center mt-2 lg:mt-[40px] gap-8 lg:gap-12 xl:gap-20 relative">
          
          {/* Left Column */}
          <div className="flex flex-col gap-3 lg:gap-5 w-full lg:w-[50%] 2xl:w-[780px] z-10 mt-0">
            
            {/* Header */}
            <div className="w-full mb-2 lg:mb-8">
              <h2 className="text-[26px] sm:text-[30px] md:text-4xl lg:text-[32px] xl:text-[38px] 2xl:text-[48px] font-bold text-black max-w-[881px] leading-tight text-center lg:text-left">
                Built Exclusively for <span className="text-[#c89841]">Watch Brands</span><br className="hidden 2xl:block"/> and Dealers
              </h2>
              <p className="text-[14px] sm:text-[15px] md:text-[18px] lg:text-[18px] 2xl:text-[20px] font-medium text-black/80 mt-2 lg:mt-4 max-w-[804px] leading-relaxed text-center lg:text-left mx-auto lg:mx-0 px-2 sm:px-0">
                We work with brands and dealers who take their online presence as seriously as their inventory.
              </p>
            </div>

            <AudienceCard 
              title="INDEPENDENT WATCH BRANDS" 
              text="Launching their first proper online presence — built to match the quality of the product from day one." 
              iconPath="/images/why-us-icon1.png" 
            />
            <AudienceCard 
              title="MULTI-BRAND BOUTIQUE RETAILERS" 
              text="Competing against bigger, better-funded dealer chains — with a website that makes the smaller operation feel more premium." 
              iconPath="/images/why-us-icon2.png" 
            />
            <AudienceCard 
              title="ESTABLISHED DEALERS" 
              text="Whose current site doesn't match the quality of their inventory — and they know it's costing them credibility." 
              iconPath="/images/why-us-icon3.png" 
            />
          </div>

          {/* Right Column (Image) */}
          <div className="relative w-full lg:w-[45%] 2xl:w-[703px] h-[260px] sm:h-[400px] lg:h-auto lg:aspect-[703/750] mt-4 lg:mt-0 shrink-0">
            {/* Main Image */}
            <div className="absolute inset-0 rounded-[14px] lg:rounded-[20px] overflow-hidden">
              <Image 
                src="/images/why-us-main.png" 
                alt="Watch website design for brands" 
                fill 
                className="object-cover object-center" 
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute w-[120px] sm:w-[170px] lg:w-[190px] xl:w-[230px] 2xl:w-[282px] h-auto aspect-square z-30 left-2 sm:left-3 lg:left-3 bottom-2 sm:bottom-3 lg:-bottom-[20px] 2xl:-bottom-[40px] drop-shadow-2xl">
              <Image 
                src="/images/why-us-float.png" 
                alt="Satisfaction Guarantee" 
                fill 
                className="object-contain" 
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
