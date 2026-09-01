"use client";

import { useState, useEffect } from "react";

const trustPairs = [
  {
    question: "What if I pay and get nothing?",
    boldAnswer: "$0 Until You Approve",
    lightAnswer: " — final payment only after you've seen the live site",
  },
  {
    question: "They won't get the watch industry",
    boldAnswer: "Built Exclusively for Watch Dealers",
    lightAnswer: " — not a generalist agency guessing at your market",
  },
  {
    question: "I don't have time for this",
    boldAnswer: "You Approve, We Build",
    lightAnswer: " — a 15-min call is all we need from you to start",
  },
  {
    question: "What if I don't like it?",
    boldAnswer: "Free $350 Concept Preview",
    lightAnswer: " — walk away with zero cost if it's not a fit",
  },
];

export default function TrustBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % trustPairs.length);
    }, 9500);
    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <>
      {/* Desktop Trust Banner (Full Bleed) */}
      <div 
        className="hidden lg:flex w-full bg-[#181818] justify-center h-[82px] -mt-[20px] 2xl:mt-auto relative bottom-0 z-30 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-full max-w-[1800px] h-full relative">
          {trustPairs.map((pair, idx) => {
            let positionClass = "opacity-0 translate-y-4 pointer-events-none"; // next or default
            if (idx === currentIndex) {
              positionClass = "opacity-100 translate-y-0 z-10"; // active
            } else if (idx === (currentIndex - 1 + trustPairs.length) % trustPairs.length) {
              positionClass = "opacity-0 -translate-y-4 pointer-events-none"; // previous (sliding up and out)
            }

            return (
              <div
                key={idx}
                className={`absolute inset-0 flex items-center transition-all duration-[1500ms] ease-in-out ${positionClass}`}
              >
                <span className="absolute left-[72px] text-[13px] 2xl:text-[16px] font-medium tracking-[0.1em] uppercase text-[#ffffffcc]">
                  {pair.question}
                </span>
                <span className="absolute left-[45%] 2xl:left-[779px] w-full max-w-[50%] 2xl:max-w-none text-[13px] 2xl:text-[16px] tracking-[0.1em] text-[#ffffffcc]">
                  <strong className="font-bold text-white">{pair.boldAnswer}</strong>
                  {pair.lightAnswer}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Trust Banner (Full bleed) */}
      <div 
        className="flex lg:hidden w-full bg-[#181818] px-6 py-8 flex-col relative z-30 overflow-hidden min-h-[140px] justify-center -mt-[50px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {trustPairs.map((pair, idx) => {
          let positionClass = "opacity-0 translate-y-4 pointer-events-none"; // next or default
          if (idx === currentIndex) {
            positionClass = "opacity-100 translate-y-0 z-10"; // active
          } else if (idx === (currentIndex - 1 + trustPairs.length) % trustPairs.length) {
            positionClass = "opacity-0 -translate-y-4 pointer-events-none"; // previous
          }

          return (
            <div
              key={idx}
              className={`absolute inset-0 flex flex-col items-center justify-center gap-4 text-center px-6 transition-all duration-[1500ms] ease-in-out ${positionClass}`}
            >
              <span className="text-[12px] sm:text-[14px] font-medium uppercase tracking-widest text-white/80 w-full">
                {pair.question}
              </span>
              <span className="text-[12px] sm:text-[14px] tracking-wide text-white/80 w-full">
                <strong className="font-bold text-white">{pair.boldAnswer}</strong>
                {pair.lightAnswer}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}
