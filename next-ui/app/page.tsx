import Hero from "@/components/Hero";
import WhyUseAlienUI from "@/components/WhyUseAlienUI";
import NewsLetter from "@/components/NewsLetter";
import FaQ from "@/components/FaQ";
import Inspiration from "@/components/Inspiration";

export default function Home() {
  return (
    <section>
      <Hero />
      <WhyUseAlienUI />
      <Inspiration />
      <NewsLetter />
      <FaQ />
    </section>
  );
}
