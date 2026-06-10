import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { Results } from "@/components/sections/Results";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Results />
      <Pricing />
      <Contact />
    </>
  );
}
