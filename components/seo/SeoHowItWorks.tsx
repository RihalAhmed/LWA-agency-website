"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const processData = [
  { 
    step: "STEP 1", 
    title: "A 15-MINUTE CALL", 
    text: (
      <>
        Tell us about your brand, your watches, your customers, and <span className="font-bold text-white">what isn&apos;t working on your current site.</span>
      </>
    )
  },
  { 
    step: "STEP 2", 
    title: "WE BUILD IT", 
    text: (
      <>
        <span className="font-bold text-white">Design, development, 3D presentation, mobile experience, and copy structure</span> — handled entirely on our end.
      </>
    )
  },
  { 
    step: "STEP 3", 
    title: "YOU SEE IT LIVE BEFORE YOU PAY", 
    text: (
      <>
        You approve the <span className="font-bold text-white">finished, live site.</span> If it&apos;s not something you&apos;d proudly put in front of a collector, we keep working. Final payment only comes after approval.
      </>
    )
  },
];

export default function SeoHowItWorks() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % processData.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + processData.length) % processData.length);
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-[#00050C] via-[#000306] to-[#010101] flex flex-col items-center py-14 lg:pt-[100px] lg:pb-[140px] overflow-hidden">
      <div className="w-full max-w-[1800px] px-5 sm:px-6 lg:px-8 xl:px-12 flex flex-col items-center z-10">
        
        {/* Header */}
        <div className="w-full flex flex-col items-center text-center max-w-[1137px] mx-auto mb-6 lg:mb-16">
          <h2 className="text-[26px] sm:text-[30px] md:text-[40px] lg:text-[32px] xl:text-[38px] 2xl:text-[58px] font-bold text-white leading-tight mb-3 lg:mb-6">
            How <span className="capitalize">This</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f7cd67] to-[#e8b94b] capitalize">Actually Works</span>
          </h2>
          <p className="text-[13px] sm:text-[15px] md:text-[18px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-medium text-white/80 leading-relaxed px-2">
            No long onboarding, no guesswork. No six-week strategy phase.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid w-full grid-cols-3 gap-8 max-w-[1594px] mx-auto">
          {processData.map((item, idx) => (
            <div key={idx} className="w-full bg-[#141414] border-[0.5px] border-white/30 rounded-[20px] overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-all duration-300">
              {/* Tag & Banner */}
              <div className="w-full flex flex-col relative pt-[70px]">
                {/* Gold Tag */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-[#f7cd67] to-[#e8b94b] w-[132px] h-[34px] flex items-center justify-center rounded-b-[20px]">
                    <span className="text-[#141414] font-bold text-[14px] uppercase tracking-wider">{item.step}</span>
                  </div>
                </div>
                {/* Banner */}
                <div className="w-full bg-[#181818] px-4 sm:px-8 py-4 border-y border-white/5 relative z-10 flex items-center justify-center min-h-[82px]">
                  <h3 className="text-[16px] sm:text-[18px] lg:text-[22px] font-bold text-white uppercase leading-tight text-center">
                    {item.title}
                  </h3>
                </div>
              </div>
              {/* Body */}
              <div className="p-6 sm:p-8 lg:p-10 flex-grow flex flex-col justify-center">
                <p className="text-[15px] sm:text-[16px] lg:text-[20px] font-medium text-white/70 leading-relaxed text-center">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="w-full lg:hidden flex flex-col mt-4">
          <div className="relative w-full overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-4"
              style={{ transform: `translateX(calc(-${activeSlide * 85}% - ${activeSlide * 16}px))` }}
            >
              {processData.map((item, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setActiveSlide(idx)}
                  className={`w-[85%] flex-shrink-0 cursor-pointer transition-opacity duration-300 ${activeSlide === idx ? 'opacity-100' : 'opacity-50'}`}
                >
                  <div className="bg-[#141414] border-[0.5px] border-white/30 rounded-[20px] overflow-hidden flex flex-col shadow-2xl h-full pb-8">
                    {/* Tag & Banner */}
                    <div className="w-full flex flex-col relative pt-[60px]">
                      {/* Gold Tag */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20">
                        <div className="bg-gradient-to-r from-[#f7cd67] to-[#e8b94b] w-[110px] h-[30px] flex items-center justify-center rounded-b-[16px]">
                          <span className="text-[#141414] font-bold text-[12px] uppercase tracking-wider">{item.step}</span>
                        </div>
                      </div>
                      {/* Banner */}
                      <div className="w-full bg-[#181818] px-4 py-4 border-y border-white/5 relative z-10 flex items-center justify-center min-h-[70px]">
                        <h3 className="text-[14px] font-bold text-white uppercase leading-tight text-center">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    {/* Body */}
                    <div className="p-6 flex-grow flex flex-col justify-center">
                      <p className="text-[14px] font-medium text-white/70 leading-relaxed text-center">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Slider Controls */}
          <div className="flex justify-center items-center gap-3 mt-6">
            <button 
              onClick={prevSlide}
              className="w-8 h-8 rounded-full bg-[#c89841] flex items-center justify-center transition-transform active:scale-95 hover:opacity-90 shadow-[0_0_10px_rgba(200,152,65,0.4)]"
              aria-label="Previous step"
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-8 h-8 rounded-full bg-[#c89841] flex items-center justify-center transition-transform active:scale-95 hover:opacity-90 shadow-[0_0_10px_rgba(200,152,65,0.4)]"
              aria-label="Next step"
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Mid-page CTA */}
        <div className="mt-10 lg:mt-16 w-full sm:w-auto px-2 sm:px-0 flex justify-center">
          <Link
            href="https://calendly.com/rihalahmed10/introductory-call"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-fit px-8 sm:px-10 lg:px-12 min-h-[46px] lg:h-[60px] rounded-[99px] bg-gradient-to-r from-[#d8aa4e] to-[#f7cd67] flex items-center justify-center text-[13px] sm:text-[15px] lg:text-[18px] font-bold text-[#000000] uppercase hover:shadow-[0_0_15px_rgba(247,205,103,0.5)] transition-all duration-300 text-center"
          >
            See Your Free $350 Concept Preview →
          </Link>
        </div>

      </div>
    </section>
  );
}
