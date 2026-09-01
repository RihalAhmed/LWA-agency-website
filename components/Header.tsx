"use client";

import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact Us", href: "#contact" },
];

export default function Header() {
  return (
    <header className="w-full flex flex-col items-center relative z-50">

      {/* ── Top Gold Announcement Bar ── */}
      <div className="w-full bg-gradient-to-r from-[#d8ab4e] to-[#f7cd67] min-h-[35px] py-1 md:py-0 flex items-center justify-end md:justify-center relative z-20">
        <div className="w-full max-w-[1800px] flex justify-end md:justify-center px-4">
          <p className="text-[12px] sm:text-[13px] md:text-[14px] font-medium text-[#000000] text-right md:text-center leading-tight w-full">
            <span className="sm:hidden">1 qualified watch brand gets 1 free website.</span>
            <span className="hidden sm:inline">Now accepting: 1 qualified watch brand. 1 free website. That&apos;s it.</span>
          </p>
        </div>
      </div>

      {/* ── Main Navigation ── */}
      <nav className="w-full max-w-[1800px] mx-auto flex items-center justify-between px-6 lg:px-[72px] pb-4 lg:pb-6 relative -mt-[25px] z-30">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0 z-10 relative">
          {/* Dark mask to cut the gold banner behind the crown peak */}
          <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 w-[180px] h-[48px] z-[-1] pointer-events-none">
            <svg viewBox="0 0 180 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#00050c]">
              <path d="M0,48 L0,41 L46,41 Q56,41 62,33.5 L80,11 C87,2 93,2 100,11 L118,33.5 Q124,41 134,41 L180,41 L180,48 Z" fill="currentColor" />
            </svg>
          </div>
          <Image
            src="/images/logo@2x.png"
            alt="The Luxury Watch Agency Logo"
            width={155}
            height={134}
            className="w-[75px] lg:w-[155px] h-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden xl:flex items-center gap-4 2xl:gap-[66px] mt-[45px]">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`text-[15px] 2xl:text-[20px] whitespace-nowrap font-medium transition-colors duration-200 ${link.label === "Home"
                  ? "gradient-gold-text"
                  : "text-[#ffffff] hover:text-[#f7cd67]"
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Group */}
        <div className="hidden xl:flex items-center gap-2 2xl:gap-[10px] z-10 mt-[45px]">
          <div className="relative">
            <span className="absolute top-[-2px] right-2 2xl:right-[18px] w-[8px] h-[8px] rounded-full bg-[#84cc00]" />
            <a
              href="https://api.whatsapp.com/send?phone=8801302668778"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer w-[160px] 2xl:w-[211px] h-[42px] border border-solid border-[#d8aa4e] rounded-[99px] flex items-center justify-center text-[13px] 2xl:text-[16px] font-bold text-[#ffffff] uppercase transition-colors duration-200 hover:bg-[#d8aa4e]/10 whitespace-nowrap"
            >
              Whatsapp Rihal
            </a>
          </div>
          <Link
            href="https://calendly.com/rihalahmed10/introductory-call"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[180px] 2xl:w-[242px] h-[42px] rounded-[99px] bg-gradient-to-r from-[#d8ab4e] to-[#f7cd67] flex items-center justify-center text-[13px] 2xl:text-[16px] font-bold text-[#000000] uppercase tracking-wider hover:shadow-[0_0_15px_rgba(247,205,103,0.5)] transition-all duration-300 whitespace-nowrap"
          >
            Get a free project
          </Link>
        </div>

        <div className="xl:hidden flex items-center mt-8 relative">
          {/* Green online dot — top-right, slightly to the left */}
          <span className="absolute -top-[2px] right-1 w-[7px] h-[7px] rounded-full bg-[#84cc00] z-10" />
          <a
            href="https://api.whatsapp.com/send?phone=8801302668778"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border border-[#d8aa4e] rounded-full px-3 py-[6px] text-[10px] sm:text-[11px] font-bold text-white uppercase tracking-wide hover:bg-[#d8aa4e]/10 transition-colors duration-200 whitespace-nowrap"
          >
            Whatsapp Rihal
          </a>
        </div>

      </nav>
    </header>
  );
}
