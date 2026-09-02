"use client";

import React, { useState } from "react";
import Image from "next/image";

const FaqRow = ({ 
  question, 
  answer, 
  isLast = false, 
  isFirst = false,
  isOpen,
  onToggle
}: { 
  question: string, 
  answer: string, 
  isLast?: boolean, 
  isFirst?: boolean,
  isOpen: boolean,
  onToggle: () => void
}) => (
  <div className={`w-full flex flex-col lg:flex-row items-stretch ${isLast ? '' : 'border-b border-white/10'}`}>
    {/* Left Column (Question) */}
    <div 
      onClick={onToggle}
      className={`w-full lg:w-[40%] flex-shrink-0 bg-gradient-to-r from-[#212121] to-[#151515] px-5 sm:px-6 lg:pl-10 lg:pr-8 py-4 sm:py-5 lg:py-8 flex items-center cursor-pointer lg:cursor-default transition-all duration-300 ${isFirst ? 'rounded-t-[20px] lg:rounded-tr-none lg:rounded-tl-[20px]' : ''} ${isLast && !isOpen ? 'rounded-b-[20px] lg:rounded-bl-[20px]' : ''} ${isLast && isOpen ? 'lg:rounded-bl-[20px]' : ''}`}
    >
      <div className="flex w-full justify-between items-center">
        <h4 className={`font-medium uppercase leading-snug transition-all duration-300 ${isOpen ? 'text-white text-[14px] sm:text-[15px] lg:text-[18px]' : 'text-white/70 text-[13px] sm:text-[14px] lg:text-white/90 lg:text-[18px]'}`}>
          {question}
        </h4>
        <div className="lg:hidden ml-4 text-white/50 text-[18px]">
          {isOpen ? '−' : '+'}
        </div>
      </div>
    </div>
    
    {/* Right Column (Answer) */}
    <div className={`flex-grow px-5 sm:px-6 lg:pl-12 lg:pr-10 py-4 sm:py-5 lg:py-8 flex-col justify-center bg-[#111111] lg:bg-transparent ${isOpen ? 'flex' : 'hidden lg:flex'} ${isFirst ? 'lg:rounded-tr-[20px]' : ''} ${isLast ? 'rounded-b-[20px] lg:rounded-bl-none lg:rounded-br-[20px]' : ''}`}>
      <p className="text-[12px] sm:text-[13px] lg:text-[16px] font-medium text-white/70 leading-relaxed max-w-[720px]">
        {answer}
      </p>
    </div>
  </div>
);

export default function SeoFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleRow = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  const faqs = [
    {
      question: "How much does a custom watch website cost?",
      answer: "It depends on scope — collection size, whether you need e-commerce or an enquiry-based model, and how much content and photography you already have. We start every project with a free $350 concept preview so you see exactly what you're getting before any commitment."
    },
    {
      question: "How is this different from using a Shopify template?",
      answer: "A template is built to work for any product. We build specifically around how watches are evaluated — case detail, movement, provenance, story — so the site does work a generic template structurally cannot do."
    },
    {
      question: "Do I need to pay before I see the finished website?",
      answer: "No. We build first, you review the live site, and final payment happens only after you approve it."
    },
    {
      question: "How long does a project take?",
      answer: "Most projects move from the initial call to a finished, approved site within a few weeks, depending on how much content is ready on your end."
    },
    {
      question: "Do you work with brands outside the US?",
      answer: "Yes — we work with independent watch brands and dealers in the US, UK, and UAE."
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-[#00050C] via-[#000306] to-[#010101] flex flex-col items-center py-14 lg:pt-[140px] lg:pb-[140px] overflow-hidden">
      <div className="w-full max-w-[1400px] px-5 sm:px-6 lg:px-8 xl:px-12 flex flex-col items-center z-10">
        
        {/* Header */}
        <div className="w-full flex flex-col items-center text-center max-w-[1137px] mx-auto mb-8 lg:mb-16">
          <h2 className="text-[26px] sm:text-[30px] md:text-4xl lg:text-[32px] xl:text-[38px] 2xl:text-[58px] font-bold text-white leading-tight mb-3 lg:mb-6">
            Frequently Asked <span className="text-[#c89841]">Questions</span>
          </h2>
          <p className="text-[13px] sm:text-[14px] md:text-[18px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-medium text-white/80 leading-relaxed max-w-[1137px] px-2">
            Everything you need to know about working with us on your watch website.
          </p>
        </div>

        {/* FAQ Table */}
        <div className="w-full max-w-[1316px] rounded-[20px] border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.03)] flex flex-col bg-[#111111] relative z-20">
          {faqs.map((item, idx) => (
            <FaqRow 
              key={idx}
              question={item.question}
              answer={item.answer}
              isFirst={idx === 0}
              isLast={idx === faqs.length - 1}
              isOpen={openIndex === idx}
              onToggle={() => toggleRow(idx)}
            />
          ))}
        </div>

      </div>

      {/* Glowing Rectangle Background */}
      <div className="absolute bottom-0 left-0 w-full lg:left-1/2 lg:-translate-x-1/2 lg:w-[1255px] h-[120px] sm:h-[150px] lg:h-[218px] opacity-100 pointer-events-none z-0">
        <Image 
          src="/images/glow-rectangle.png" 
          alt="" 
          fill 
          className="object-contain lg:object-cover object-bottom" 
        />
      </div>

    </section>
  );
}
