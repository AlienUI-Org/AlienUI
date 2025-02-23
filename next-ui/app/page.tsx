import Hero from "@/components/Hero";
import WhyUseAlienUI from "@/components/WhyUseAlienUI";
import NewsLetter from "@/components/NewsLetter";
import FaQ from "@/components/FaQ";
import Inspiration from "@/components/Inspiration";
import Contributors from "@/components/Contributors";
<<<<<<< HEAD
import Products from "../components/Products";
=======
import GalaxySearchBar from "@/components/comp/Search Bar/GalaxySearchBar";
>>>>>>> 8a7873e9c75c03d245304860e1d5c20b4c771a49

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
      <GalaxySearchBar />
    </section>
  );
}
