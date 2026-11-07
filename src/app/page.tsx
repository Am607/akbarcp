import { Hero } from "@/components/home/hero";
import { Marquee } from "@/components/home/marquee";
import { Work } from "@/components/home/work";
import { About } from "@/components/home/about";
import { Experience } from "@/components/home/experience";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Work />
      <About />
      <Experience />
    </>
  );
}
