import Featured from "@/components/home/Featured";
import Hero from "@/components/home/Hero";
import Tips from "@/components/home/Tips";
import TopBreeds from "@/components/home/TopBreeds";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="Home">
      <Hero />
      <Featured />
      <TopBreeds />
      <Tips />
      <WhyChooseUs />
    </div>
  );
}
