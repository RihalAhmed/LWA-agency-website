"use client";
import React, { useState } from "react";
import Image from "next/image";
import { 
  Monitor, 
  Layout, 
  MousePointerClick,
  Camera,
  Clapperboard,
  Megaphone,
  Aperture,
  Lightbulb,
  MapPin,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const ServiceFeature = ({ title, description, icon: Icon, highlighted }: { title: string, description: string, icon: any, highlighted?: boolean }) => (
  <div className={`flex gap-3 lg:gap-4 ${highlighted ? 'bg-[#f7cd67]/[0.13] border-[0.5px] border-[#c89841] rounded-[10px] p-4 -mx-4 -my-1 mb-1 lg:mb-0' : ''}`}>
    <div className="w-[36px] h-[36px] rounded-[6px] bg-[#5d5132] flex-shrink-0 flex items-center justify-center">
      <Icon className="w-[18px] h-[18px] text-white" strokeWidth={2} />
    </div>
    <div className="flex flex-col">
      <h4 className="text-[13px] lg:text-[16px] font-bold text-white leading-tight">{title}</h4>
      <p className="text-[12px] lg:text-[14px] font-normal text-white/60 mt-1 leading-snug">
        {description}
      </p>
    </div>
  </div>
);

const servicesData = [
  {
    title: "Premium Watch Websites",
    image: "/images/service-1.png",
    features: [
      { title: "AI Smart Luxury Website Design", desc: "A completely custom digital experience built around your brand identity.", icon: Monitor, highlighted: true },
      { title: "Luxury Product Presentation", desc: "Present your watches with cinematic layouts, detailed specifications and premium visual storytelling.", icon: Layout },
      { title: "Conversion-Focused Experience", desc: "Guide visitors from discovering your watches to contacting you, booking an appointment or making an enquiry.", icon: MousePointerClick }
    ]
  },
  {
    title: "Social Media Design",
    image: "/images/service-2.png",
    features: [
      { title: "Premium Post Design", desc: "Luxury-focused visuals designed specifically for watches.", icon: Camera },
      { title: "Story & Reel Graphics", desc: "Consistent visual assets for Instagram Stories, Reels and other social content.", icon: Clapperboard },
      { title: "Campaign & Launch Creatives", desc: "Build anticipation around new releases, collections and important announcements.", icon: Megaphone }
    ]
  },
  {
    title: "AI Watch Photography",
    image: "/images/service-3.png",
    features: [
      { title: "Luxury Product Scenes", desc: "Place your watches into carefully designed luxury environments.", icon: Aperture },
      { title: "Campaign Concepts", desc: "Create visuals for launches, collections, seasonal campaigns and advertisements.", icon: Lightbulb },
      { title: "Lifestyle Watch Imagery", desc: "Show your watches in aspirational environments without needing a full production setup.", icon: MapPin }
    ]
  }
];

export default function OurService() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % servicesData.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + servicesData.length) % servicesData.length);
  };

  return (
    <section id="services" className="w-full bg-[#0a0a0a] flex flex-col items-center pt-0 pb-16 lg:pt-[100px] lg:pb-[100px]">
      <div className="w-full max-w-[1400px] flex flex-col items-center px-4">
        
        {/* Header Section */}
        <h2 className="text-[28px] lg:text-[32px] xl:text-[38px] 2xl:text-[58px] font-bold text-white text-center leading-tight">
          Our services
        </h2>
        <h3 className="text-[16px] md:text-[22px] lg:text-[29px] font-bold text-white text-center mt-2 lg:mt-4">
          Websites & Digital Systems Built for Independent Watch Brands
        </h3>
        <p className="text-[14px] sm:text-[15px] md:text-[18px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-normal text-white/70 text-center mt-4 max-w-[1137px] leading-relaxed">
          From your website to your social presence and product imagery, we build the digital side of your watch brand around one goal: make your watches impossible to overlook.
        </p>

        {/* Desktop Grid (Hidden on Mobile) */}
        <div className="hidden md:grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10 lg:mt-[80px]">
          {servicesData.map((service, idx) => (
            <div key={idx} className="bg-[#111111] rounded-[20px] border border-white/10 overflow-hidden flex flex-col shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.6)]">
              <div className="relative w-full h-[263px]">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="px-6 pt-6 pb-8 lg:pt-8 lg:pb-10 flex flex-col flex-grow">
                <h3 className="text-[20px] lg:text-[24px] font-bold text-white mb-4 lg:mb-6">{service.title}</h3>
                <div className="flex flex-col gap-6">
                  {service.features.map((feature, fIdx) => (
                    <ServiceFeature 
                      key={fIdx}
                      title={feature.title}
                      description={feature.desc}
                      icon={feature.icon}
                      highlighted={feature.highlighted}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider (Hidden on Desktop) */}
        <div className="md:hidden w-full flex flex-col mt-10">
          <div className="relative w-full overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {servicesData.map((service, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-1">
                  <div className="bg-[#111111] rounded-[20px] border border-white/10 overflow-hidden flex flex-col shadow-2xl h-full">
                    <div className="relative w-full h-[200px]">
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div className="px-6 pt-6 pb-12 flex flex-col flex-grow">
                      <h3 className="text-[20px] font-bold text-white mb-4">{service.title}</h3>
                      <div className="flex flex-col gap-6">
                        {service.features.map((feature, fIdx) => (
                          <ServiceFeature 
                            key={fIdx}
                            title={feature.title}
                            description={feature.desc}
                            icon={feature.icon}
                            highlighted={feature.highlighted}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Slider Controls */}
          <div className="flex justify-center items-center gap-3 mt-4 relative z-10">
            <button 
              onClick={prevSlide}
              className="w-8 h-8 rounded-full bg-[#c89841] flex items-center justify-center transition-transform active:scale-95 hover:opacity-90 shadow-[0_0_10px_rgba(200,152,65,0.4)]"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-8 h-8 rounded-full bg-[#c89841] flex items-center justify-center transition-transform active:scale-95 hover:opacity-90 shadow-[0_0_10px_rgba(200,152,65,0.4)]"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
