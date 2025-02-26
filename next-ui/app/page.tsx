import Hero from "@/components/Hero";
import WhyUseAlienUI from "@/components/WhyUseAlienUI";
import NewsLetter from "@/components/NewsLetter";
import FaQ from "@/components/FaQ";
import Inspiration from "@/components/Inspiration";
import Contributors from "@/components/Contributors";
import Products from "../components/Products";

export default function Home() {
  return (
    <section>
      <Hero />
      <WhyUseAlienUI />
      <Inspiration />
      <Products />
      <NewsLetter />
      <FaQ />
      <Contributors />
    </section>
  );
}
