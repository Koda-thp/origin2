import { Concept } from "@/components/sections/concept";
import { Cta } from "@/components/sections/cta";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { Founder } from "@/components/sections/founder";
import { Hero } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
import { Pricing } from "@/components/sections/pricing";
import { Ticker } from "@/components/sections/ticker";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Founder />
        <Concept />
        <Pricing />
        <Ticker />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
