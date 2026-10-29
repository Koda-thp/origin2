"use client";

import { Calendar } from "@/components/sections/calendar";
import { Cta } from "@/components/sections/cta";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { Founder } from "@/components/sections/founder";
import { Hero } from "@/components/sections/hero";
import { Method } from "@/components/sections/method";
import { Navbar } from "@/components/sections/navbar";
import { Pricing } from "@/components/sections/pricing";
import { Studio } from "@/components/sections/studio";
import { Ticker } from "@/components/sections/ticker";
import { Values } from "@/components/sections/values";
import { useSiteSettings } from "@/sanity/lib/use-site-settings";

export default function Home() {
  const { data, error, loading } = useSiteSettings();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-bordeaux">Chargement...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-bordeaux">
          Impossible de charger le contenu. Veuillez réessayer dans quelques instants.
        </p>
      </div>
    );
  }

  return (
    <>
      <Navbar site={data.site} nav={data.nav} logo={data.images.logo} />
      <main>
        <Hero hero={data.hero} image={data.images.hero} />
        <Method method={data.method} />
        <Studio studio={data.studio} images={data.images} />
        <Founder founder={data.founder} images={data.images} />
        <Values values={data.values} />
        <Calendar calendar={data.calendar} />
        <Pricing pricing={data.pricing} />
        <Ticker ticker={data.ticker} />
        <Faq faq={data.faq} image={data.images.faq} />
        <Cta cta={data.cta} image={data.images.cta} />
      </main>
      <Footer site={data.site} footer={data.footer} logo={data.images.logo} />
    </>
  );
}
