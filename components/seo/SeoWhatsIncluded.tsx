import Image from "next/image";
import Link from "next/link";
import { 
  Palette,
  Film,
  Target,
  Smartphone
} from "lucide-react";

const FeatureItem = ({ title, description, icon: Icon, highlighted }: { title: string, description: string, icon: any, highlighted?: boolean }) => (
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

const includedData = [
  {
    title: "Custom Design, Not a Template",
    image: "/images/service-1.png",
    alt: "Bespoke luxury watch website design and custom typography layout",
    features: [
      { title: "Built From Scratch", desc: "Every site is designed from scratch around your specific brand and collection — nothing recycled from an unrelated industry.", icon: Palette, highlighted: true },
    ]
  },
  {
    title: "Cinematic Product Presentation",
    image: "/images/service-2.png",
    alt: "High-resolution cinematic watch photography and dial presentation",
    features: [
      { title: "Collector-Grade Visuals", desc: "Watches are shown the way a collector would want to examine them in person — detail, craftsmanship, and story front and center.", icon: Film, highlighted: true },
    ]
  },
  {
    title: "Conversion-Focused Structure",
    image: "/images/service-3.png",
    alt: "Conversion-optimized watch boutique checkout and enquiry interface",
    features: [
      { title: "Built to Convert", desc: "The site is built to move a visitor from browsing to booking an appointment, sending an enquiry, or completing a purchase — not just to look nice.", icon: Target, highlighted: true },
    ]
  },
  {
    title: "Mobile-First Build",
    image: "/images/service-1.png",
    alt: "Mobile-responsive luxury watch website experience on smartphone",
    features: [
      { title: "Designed for Mobile Reality", desc: "Most of your collectors are browsing on their phone first. The site is designed for that reality, not adapted to it after the fact.", icon: Smartphone, highlighted: true },
    ]
  },
];

export default function SeoWhatsIncluded() {
  return (
    <section className="w-full bg-[#0a0a0a] flex flex-col items-center py-14 lg:pt-[100px] lg:pb-[100px]">
      <div className="w-full max-w-[1400px] flex flex-col items-center px-5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <h2 className="text-[26px] sm:text-[30px] md:text-4xl lg:text-[32px] xl:text-[38px] 2xl:text-[58px] font-bold text-white text-center leading-tight">
          What&apos;s Actually <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f7cd67] to-[#e8b94b]">Included</span>
        </h2>
        <p className="text-[14px] sm:text-[15px] md:text-[18px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-normal text-white/70 text-center mt-3 sm:mt-4 max-w-[1137px] leading-relaxed px-2">
          Every element is built specifically for how collectors evaluate and buy watches online.
        </p>

        {/* Unified Responsive Grid (Zero duplicate DOM elements) */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 lg:mt-[80px]">
          {includedData.map((item, idx) => (
            <div key={idx} className="bg-[#111111] rounded-[20px] border border-white/10 overflow-hidden flex flex-col shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
              <div className="relative w-full h-[200px] lg:h-[220px]">
                <Image 
                  src={item.image} 
                  alt={item.alt} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="px-5 pt-5 pb-7 lg:pt-6 lg:pb-8 flex flex-col flex-grow">
                <h3 className="text-[16px] lg:text-[18px] font-bold text-white mb-4">{item.title}</h3>
                <div className="flex flex-col gap-4">
                  {item.features.map((feature, fIdx) => (
                    <FeatureItem 
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

        {/* Contextual Internal Link back to Portfolio */}
        <div className="mt-10 lg:mt-14 flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-[14px] sm:text-[16px] text-white/80">
          <span>Want to see how these standards look in a finished build?</span>
          <Link 
            href="/#portfolio" 
            className="text-[#f7cd67] font-semibold underline underline-offset-4 hover:text-[#e8b94b] transition-colors"
          >
            See our recent work and portfolio →
          </Link>
        </div>

      </div>
    </section>
  );
}
