import Image from "next/image";

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      image: "/images/portfolio-1.png",
      title: "Dubai Watches",
      link: "https://luxury-watchsite.vercel.app/"
    },
    {
      id: 2,
      image: "/images/portfolio-2.png",
      title: "Rolex GMT-Master II",
      link: "https://luxury-watchsite-2.vercel.app/"
    }
  ];

  return (
    <section id="portfolio" className="w-full bg-white flex flex-col items-center py-16 lg:pt-[114px] lg:pb-[157px]">
      <div className="w-full max-w-[1400px] flex flex-col items-center px-4">
        
        {/* Headings */}
        <h2 className="text-[28px] md:text-4xl lg:text-[32px] xl:text-[38px] 2xl:text-[58px] font-bold text-black text-center leading-[1.2] lg:leading-[70px]">
          Our Work. Our Standard.
        </h2>
        <p className="mt-[16px] lg:mt-[6px] text-[14px] sm:text-[16px] md:text-[20px] font-normal text-black text-center max-w-[1104px] px-2 leading-relaxed">
          Concept builds shown for demonstration — brand names and imagery altered for privacy.
        </p>

        {/* Portfolio Grid */}
        <div className="mt-10 lg:mt-[49px] grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-4 2xl:gap-[31px] w-full justify-items-center">
          {portfolioItems.map((item) => (
            <a 
              key={item.id} 
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live site for ${item.title}`}
              className="group block relative w-full max-w-[659px] aspect-[659/384] cursor-pointer"
            >
              {/* Card Wrapper/Border with Angular Gradient */}
              <div 
                className="absolute inset-0 z-0 rounded-[20px] transition-all duration-500 group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)]"
                style={{
                  background: "conic-gradient(from 180deg at 50% 50%, rgba(219,219,219,0.5) 0deg, rgba(56,43,26,0.2) 360deg)"
                }}
              />
              
              {/* Inner Mask Group */}
              <div className="absolute top-[2%] left-[1.5%] right-[1.5%] bottom-[3%] bg-[#181818] z-10 overflow-hidden rounded-[20px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* CTA Button */}
              <div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] sm:w-[236px] h-[36px] bg-gradient-to-r from-[#c89841] to-[#f7cd67] rounded-t-[20px] rounded-b-none z-20 flex items-center justify-center gap-2 transition-all duration-300 group-hover:brightness-105 group-hover:shadow-[0_-4px_16px_rgba(200,152,65,0.25)]"
              >
                <span className="text-[13px] sm:text-[14px] font-medium text-black">Open Live site</span>
                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M1.5 1.5L6.5 6.5L1.5 11.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
