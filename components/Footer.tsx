import Image from "next/image";
import Link from "next/link";

/* ─── shared li class ─── */
const li = "text-[14px] sm:text-[15px] lg:text-[16px] 2xl:text-[22px] font-medium text-white/90 flex items-center before:content-['•'] before:mr-3 before:text-[1.5em] before:leading-none";
const liStart = "text-[14px] sm:text-[15px] lg:text-[16px] 2xl:text-[22px] font-medium text-white/90 flex items-start before:content-['•'] before:mr-3 before:text-[1.5em] before:leading-none before:shrink-0";
const h4 = "text-[16px] sm:text-[18px] lg:text-[20px] 2xl:text-[22px] font-bold text-white/90 mb-2 lg:mb-5";
const ul = "flex flex-col gap-1.5 lg:gap-3 list-none p-0 m-0";
const link = "hover:text-[#f7cd67] transition-colors pt-1";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-white/20">

      {/* Background diagonal gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,_#00050c_0%,_#010408_50%,_#010101_84%)]" />

      {/* Bottom-right golden glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_bottom_right,_rgba(247,205,103,0.20)_0%,_rgba(166,115,38,0.08)_50%,_transparent_75%)] pointer-events-none" />

      {/* ─── CONTENT ─── */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-5 sm:px-8 lg:px-[80px] pt-8 sm:pt-10 lg:pt-[60px]">

        {/* ══ MOBILE: stacked | TABLET: 2-col grid | DESKTOP: 3-col flex ══ */}

        {/* Logo — always centered, always on top on mobile */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8 lg:hidden">
          <div className="w-[130px] h-[112px] sm:w-[155px] sm:h-[133px] relative mb-2">
            <Image src="/images/logo@2x.png" alt="The Luxury Watch Agency" fill className="object-contain" />
          </div>
          <p className="text-[14px] sm:text-[15px] 2xl:text-[18px] font-medium text-white/90 leading-snug mt-4">
            A Website That Makes Your<br />Watch Feel Worth The Price.<br />That&apos;s A Promise.
          </p>
        </div>

        {/* ── ROW 1 desktop: [Quick Links + Socials] — [Logo] — [Contact Us] ── */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-12 sm:gap-16 lg:gap-0">

          {/* Left block: Quick Links + Socials (side-by-side at all sizes) */}
          <div className="flex flex-row gap-16 sm:gap-24 lg:gap-16 shrink-0">

            {/* Quick Links */}
            <div className="flex flex-col">
              <h4 className={h4}>Quick Links</h4>
              <ul className={ul}>
                <li className={li}><Link href="/"          className={link}>Home</Link></li>
                <li className={li}><Link href="#about"     className={link}>About Us</Link></li>
                <li className={li}><Link href="#services"  className={link}>Our Services</Link></li>
                <li className={li}><Link href="#portfolio" className={link}>Portfolio</Link></li>
                <li className={li}><Link href="#contact"   className={link}>Contact Us</Link></li>
              </ul>
            </div>

            {/* Socials */}
            <div className="flex flex-col">
              <h4 className={h4}>Socials</h4>
              <ul className={ul}>
                <li className={li}>
                  <a href="https://www.instagram.com/theluxurywatchagency/" target="_blank" rel="noopener noreferrer" className={link}>Instagram</a>
                </li>
                <li className={li}>
                  <a href="https://www.linkedin.com/company/the-luxury-watch-agency" target="_blank" rel="noopener noreferrer" className={link}>LinkedIn</a>
                </li>
                <li className={li}>
                  <a href="https://api.whatsapp.com/send?phone=8801302668778" target="_blank" rel="noopener noreferrer" className={link}>Whatsapp</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Center: Logo + Tagline — hidden on mobile (shown above), visible on lg+ */}
          <div className="hidden lg:flex flex-col items-center text-center flex-1">
            <div className="w-[165px] h-[142px] relative mb-1">
              <Image src="/images/logo@2x.png" alt="The Luxury Watch Agency" fill className="object-contain" />
            </div>
            <p className="text-[15px] xl:text-[16px] 2xl:text-[24px] font-medium text-white/90 leading-tight mt-4">
              A Website That Makes Your<br />Watch Feel Worth The Price.<br />That&apos;s A Promise.
            </p>
          </div>

          {/* Right: Contact Us */}
          <div className="flex flex-col shrink-0 lg:w-[380px] xl:w-[468px]">
            <h4 className={h4}>Contact Us</h4>
            <ul className={ul}>
              <li className={liStart}>
                <span className="pt-1">Email: <a href="mailto:mirrihalbinamith@gmail.com" className={link}>mirrihalbinamith@gmail.com</a></span>
              </li>
              <li className={liStart}>
                <span className="pt-1">Phone: <a href="tel:+8801763364217" className={link}>+8801763364217</a></span>
              </li>
              <li className={liStart}>
                <span className="pt-1">Address: Custom Mor, Churhash, Kushtia, Bangladesh</span>
              </li>
            </ul>
          </div>

        </div>

        {/* ── ROW 2: Term & Policies | Connect With Us Now ── */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 sm:gap-16 lg:gap-0 mt-12 sm:mt-16 lg:mt-[50px]">

          {/* Term & Policies — horizontal row */}
          <div className="flex flex-col">
            <h4 className={h4}>Term &amp; Policies</h4>
            <ul className="flex flex-row flex-wrap gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-3 list-none p-0 m-0">
              <li className={li}><Link href="/privacy"   className={link}>Privacy Policy</Link></li>
              <li className={li}><Link href="/terms"     className={link}>Terms Of Service</Link></li>
              <li className={li}><Link href="/copyright" className={link}>Copyright</Link></li>
            </ul>
          </div>

          {/* Connect With Us Now + CTA */}
          <div className="flex flex-col shrink-0 w-full lg:w-auto">
            <h4 className={h4}>Connect With Us Now</h4>
            <Link
              href="https://calendly.com/rihalahmed10/introductory-call"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-fit px-8 xl:w-[406px] h-[50px] xl:h-[60px] rounded-full bg-gradient-to-r from-[#d8ab4e] to-[#f7cd67] flex items-center justify-center transition-all duration-300 hover:brightness-110 shadow-[0_4px_80px_rgba(247,205,103,0.25)] hover:shadow-[0_0_15px_rgba(247,205,103,0.5)]"
            >
              <span className="text-[16px] xl:text-[20px] font-bold text-[#000000] uppercase">
                Apply For A Free Project
              </span>
            </Link>
          </div>

        </div>

      </div>

      {/* ── Bottom Bar ── */}
      <div className="relative z-10 w-full border-t border-white/20 mt-6 sm:mt-8 lg:mt-[40px] py-4 lg:py-6 flex justify-center items-center px-4">
        <p className="text-[11px] sm:text-[13px] lg:text-[16px] font-medium text-white/60 text-center">
          © 2026 The Luxury Watch Agency. All content protected. Reproduction strictly prohibited.
        </p>
      </div>

    </footer>
  );
}
