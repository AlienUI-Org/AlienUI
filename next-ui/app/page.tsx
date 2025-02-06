import Hero from "@/components/Hero";
import WhyUseAlienUI from "@/components/WhyUseAlienUI";
import NewsLetter from "@/components/NewsLetter";
import FaQ from "@/components/FaQ";
import Inspiration from "@/components/Inspiration";
import Contributors from "@/components/Contributors";

export default function Home() {
  return (
    <section>
      <Hero />
      <WhyUseAlienUI />
      <Inspiration />
      <NewsLetter />
      <FaQ />
      <Contributors />
    </section>
  );
}
