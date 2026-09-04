"use client";

import React, { useState } from "react";
import Image from "next/image";

const ObjectionRow = ({ 
  objection, 
  title, 
  text, 
  isLast = false, 
  isFirst = false,
  isOpen,
  onToggle
}: { 
  objection: string, 
  title: string, 
  text: string, 
  isLast?: boolean, 
  isFirst?: boolean,
  isOpen: boolean,
  onToggle: () => void
}) => (
  <div className={`w-full flex flex-col lg:flex-row items-stretch ${isLast ? '' : 'border-b border-white/10'}`}>
    {/* Left Column (Objection) - Clickable on mobile */}
    <div 
      onClick={onToggle}
      className={`w-full lg:w-[40%] flex-shrink-0 bg-gradient-to-r from-[#212121] to-[#151515] px-6 lg:pl-10 lg:pr-8 py-5 lg:py-8 flex items-center cursor-pointer lg:cursor-default transition-all duration-300 ${isFirst ? 'rounded-t-[20px] lg:rounded-tr-none lg:rounded-tl-[20px]' : ''} ${isLast && !isOpen ? 'rounded-b-[20px] lg:rounded-bl-[20px]' : ''} ${isLast && isOpen ? 'lg:rounded-bl-[20px]' : ''}`}
    >
      <div className="flex w-full justify-between items-center">
        <h3 className={`font-medium uppercase leading-snug transition-all duration-300 ${isOpen ? 'text-white text-[14px] sm:text-[15px] lg:text-[18px]' : 'text-white/70 text-[13px] sm:text-[14px] lg:text-white/90 lg:text-[18px]'}`}>
          {objection}
        </h3>
        {/* Optional plus/minus icon for mobile to indicate accordion (hidden on desktop) */}
        <div className="lg:hidden ml-4 text-white/50 text-[18px]">
          {isOpen ? '−' : '+'}
        </div>
      </div>
    </div>
    
    {/* Right Column (Solution) - Hidden on mobile if not open */}
    <div className={`flex-grow px-6 lg:pl-12 lg:pr-10 py-5 lg:py-8 flex-col justify-center bg-[#111111] lg:bg-transparent ${isOpen ? 'flex' : 'hidden lg:flex'} ${isFirst ? 'lg:rounded-tr-[20px]' : ''} ${isLast ? 'rounded-b-[20px] lg:rounded-bl-none lg:rounded-br-[20px]' : ''}`}>
      <h4 className="text-[14px] sm:text-[15px] lg:text-[18px] font-bold text-white uppercase leading-tight mb-2 lg:mb-2">
        {title}
      </h4>
      <p className="text-[12px] sm:text-[13px] lg:text-[16px] font-medium text-white/70 leading-relaxed max-w-[720px]">
        {text}
      </p>
    </div>
  </div>
);

export default function StillThinkingAboutIt() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleRow = (index: number) => {
    // On mobile, clicking an open row could close it, or we can just always open the clicked one.
    // The user requested: "let the top one open and the other one closed... if I click one then the other one will close".
    // A standard accordion sets the clicked index as open.
    setOpenIndex(index === openIndex ? -1 : index);
  };

  const objections = [
    {
      objection: "What if I pay and get nothing?",
      title: "$0 UNTIL YOU APPROVE",
      text: "We don't ask you to pay for a promise. You'll see the finished, live website before the final payment. If you haven't approved it, you haven't finished paying for it."
    },
    {
      objection: "THEY WON'T UNDERSTAND THE WATCH INDUSTRY!",
      title: "BUILT EXCLUSIVELY FOR WATCH DEALERS",
      text: "We're not a generalist agency trying to figure out your market while we're building your site. We built the agency around watches."
    },
    {
      objection: "WHAT IF I DON'T LIKE IT?",
      title: "START WITH A FREE CONCEPT PREVIEW.",
      text: "Before you commit to the full project, we'll show you the direction we're taking. If it's not something you'd proudly put in front of a collector, walk away."
    },
    {
      objection: "I DON’T HAVE TIME FOR ENDLESS MEETINGS!",
      title: "Just a 15 MINUTES call.",
      text: "You don't need to sit in meetings every week or become our project manager. A 15-minute call is enough to get us started. We handle the rest."
    }
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-[#00050C] via-[#000306] to-[#010101] flex flex-col items-center py-16 lg:pt-[160px] lg:pb-[160px] overflow-hidden">
      <div className="w-full max-w-[1400px] px-4 lg:px-8 xl:px-12 flex flex-col items-center z-10">
        
        {/* Header */}
        <div className="w-full flex flex-col items-center text-center max-w-[1137px] mx-auto mb-10 lg:mb-16">
          <h2 className="text-[28px] md:text-[40px] lg:text-[32px] xl:text-[38px] 2xl:text-[58px] font-bold text-white leading-tight mb-4 lg:mb-6">
            Still <span className="text-[#c89841]">Thinking</span> About It?
          </h2>
          <p className="text-[12px] sm:text-[14px] md:text-[18px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-medium text-white/80 leading-relaxed max-w-[1137px] mb-4 lg:mb-6 px-2">
            Hiring an agency comes with risk. You don&apos;t know if they&apos;ll understand your brand, whether you&apos;ll like what they build, or whether you&apos;ll actually get what was promised.
          </p>
          <p className="text-[14px] sm:text-[16px] md:text-[22px] lg:text-[20px] xl:text-[22px] 2xl:text-[29px] font-bold text-white leading-snug px-2">
            So we removed as much of that risk as we could.
          </p>
        </div>

        {/* Objection Table */}
        <div className="w-full max-w-[1316px] rounded-[20px] border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.03)] flex flex-col bg-[#111111] relative z-20">
          {objections.map((item, idx) => (
            <ObjectionRow 
              key={idx}
              objection={item.objection}
              title={item.title}
              text={item.text}
              isFirst={idx === 0}
              isLast={idx === objections.length - 1}
              isOpen={openIndex === idx}
              onToggle={() => toggleRow(idx)}
            />
          ))}
        </div>

      </div>

      {/* Glowing Rectangle Background Element */}
      <div className="absolute bottom-0 left-0 w-full lg:left-1/2 lg:-translate-x-1/2 lg:w-[1255px] h-[120px] sm:h-[150px] lg:h-[218px] opacity-100 pointer-events-none z-0">
        <Image 
          src="/images/glow-rectangle.png" 
          alt="Glowing Accent" 
          fill 
          className="object-contain lg:object-cover object-bottom" 
        />
      </div>

    </section>
  );
}
