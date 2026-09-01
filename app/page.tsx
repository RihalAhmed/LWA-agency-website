import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import AboutUs from "@/components/AboutUs";
import WebsiteBeforeYouPay from "@/components/WebsiteBeforeYouPay";
import OurService from "@/components/OurService";
import WhyChooseUs from "@/components/WhyChooseUs";
import StillThinkingAboutIt from "@/components/StillThinkingAboutIt";
import OurProcess from "@/components/OurProcess";
import BlueprintForm from "@/components/BlueprintForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      <AboutUs />
      <WebsiteBeforeYouPay />
      <OurService />
      <WhyChooseUs />
      <StillThinkingAboutIt />
      <OurProcess />
      <BlueprintForm />
    </>
  );
}
