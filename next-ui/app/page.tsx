import Hero from "@/components/Hero";
import WhyUseAlienUI from "@/components/WhyUseAlienUI";
import NewsLetter from "@/components/NewsLetter";
import FaQ from "@/components/FaQ";
import Inspiration from "@/components/Inspiration";
import Contributors from "@/components/Contributors";
import InstallVSExtensionModal from "@/components/InstallVScodeExtension";
import LandingPageCompDisplayOne from "@/components/LandingPageCompDisplayOne";
import LandingPageCompDisplayTwo from "@/components/LandingPageCompDisplayTwo";

export default function Home() {
  return (
    <section>
      <InstallVSExtensionModal />
      <Hero />
      <LandingPageCompDisplayOne />
      <WhyUseAlienUI />
      <Inspiration />
      <LandingPageCompDisplayTwo />
      <NewsLetter />
      <FaQ />
      <Contributors />
    </section>
  );
}
