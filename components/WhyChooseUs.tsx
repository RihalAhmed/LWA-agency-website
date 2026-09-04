import Image from "next/image";

const FeatureCard = ({ title, text, iconPath }: { title: string, text: string, iconPath: string }) => (
  <div className="group w-full max-w-[780px] bg-white rounded-[10px] lg:rounded-[16px] p-3 lg:p-5 flex items-center gap-3 lg:gap-6 shadow-sm hover:shadow-xl border border-black/20 transition-all duration-300 hover:bg-black">
    <div className="relative w-[40px] lg:w-[80px] h-[40px] lg:h-[80px] flex-shrink-0 transition-all duration-300 brightness-0 group-hover:brightness-100">
      <Image src={iconPath} alt={title} fill className="object-contain" />
    </div>
    <div className="flex flex-col">
      <h3 className="text-[13px] sm:text-[14px] lg:text-[20px] font-bold text-black group-hover:text-white uppercase leading-tight transition-colors duration-300">{title}</h3>
      <p className="text-[11px] sm:text-[12px] lg:text-[14px] font-medium text-black/70 group-hover:text-white/70 mt-1 lg:mt-1.5 leading-snug transition-colors duration-300">
        {text}
      </p>
    </div>
  </div>
);

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#f7f7f7] flex flex-col items-center pt-[30px] pb-[40px] lg:pt-[90px] lg:pb-[90px] overflow-hidden">
      <div className="w-full max-w-[1800px] px-4 lg:px-8 xl:px-12 flex flex-col items-center">
        
        {/* Content Column — centered while image is pending */}
        <div className="w-full max-w-[880px] mx-auto flex flex-col items-center mt-[10px] lg:mt-[20px]">
          
          {/* Header */}
          <div className="w-full mb-4 lg:mb-10 text-center">
            <h2 className="text-[26px] lg:text-[32px] xl:text-[38px] 2xl:text-[48px] font-bold text-black max-w-[881px] leading-tight text-center mx-auto">
              Why <span className="text-[#c89841]">Watch Brands</span> Choose<br className="hidden sm:block"/> The Luxury Watch Agency
            </h2>
            <p className="text-[14px] lg:text-[18px] 2xl:text-[20px] font-medium text-black/80 mt-2 lg:mt-4 max-w-[804px] leading-relaxed text-center mx-auto">
              Watch brands don&apos;t need another pretty website.<br className="hidden sm:block"/> They need a website that makes the watch feel worth the price.
            </p>
          </div>

          <div className="flex flex-col gap-2.5 lg:gap-5 w-full z-10">
            <FeatureCard 
              title="WE ONLY WORK WITH WATCH BRANDS" 
              text="We understand watches, collectors, craftsmanship, positioning, and what makes a luxury product feel genuinely premium online." 
              iconPath="/images/why-us-icon1.png" 
            />
            <FeatureCard 
              title="WE BUILD CUSTOM. NOT TEMPLATES" 
              text="Every website is designed from scratch around your brand, your watches, and the price you're asking customers to believe in." 
              iconPath="/images/why-us-icon2.png" 
            />
            <FeatureCard 
              title="WE PUT OUR NAME ON IT" 
              text="If we wouldn't proudly show the finished website as our own work, it doesn't go live. Your reputation matters. So does ours." 
              iconPath="/images/why-us-icon3.png" 
            />
            <FeatureCard 
              title="WE MAKE YOUR WATCHES LOOK WORTH THE PRICE" 
              text="Because that's the real job. Not building another website — building an online experience that makes your brand feel as premium as your product." 
              iconPath="/images/why-us-icon4.png" 
            />
          </div>

        </div>

      </div>
    </section>
  );
}
