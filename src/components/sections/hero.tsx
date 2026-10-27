import Image from "next/image";
import { PillButton } from "@/components/ui/pill-button";
import { Reveal } from "@/components/ui/reveal";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
import { urlFor } from "@/sanity/lib/image";
import type { SiteSettings } from "@/sanity/types";

export function Hero({
  hero,
  image,
}: {
  hero: SiteSettings["hero"];
  image: SiteSettings["images"]["hero"];
}) {
  return (
    <section className="relative h-[100dvh] overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 hidden w-[45%] bg-rose md:block"
      />

      <div className="relative mx-auto grid h-full max-w-7xl items-center gap-10 px-5 py-10 md:grid-cols-[55fr_45fr] md:gap-0 md:px-10 md:py-16">
        <div className="order-2 flex flex-col justify-center md:order-1 md:px-8 lg:px-12">
          <Reveal>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-bordeaux/70 md:mb-5 md:text-xs">
              {hero.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <SectionHeading as="h1" className="text-[clamp(2.8rem,8vw,6rem)]">
              {hero.titleTop} <Accent>{hero.titleScript}</Accent>
              <br />
              {hero.titleBottom}
            </SectionHeading>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-4 max-w-md text-base leading-relaxed text-bordeaux/80 md:mt-6 md:text-lg">
              {hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <PillButton href={hero.ctaPrimary.href}>{hero.ctaPrimary.label}</PillButton>
              <PillButton href={hero.ctaSecondary.href} variant="outline">
                {hero.ctaSecondary.label}
              </PillButton>
            </div>
          </Reveal>
        </div>

        <div className="order-1 h-full md:order-2">
          <Reveal delay={200} className="relative -mx-5 h-full md:-ml-16 md:-mr-4 lg:-ml-20">
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src={urlFor(image).url()}
                alt={hero.imageAlt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                priority
                className="object-cover"
              />
            </div>
            {hero.annotation && (
              <p className="absolute -bottom-5 left-4 rotate-[-4deg] font-script text-xl text-bordeaux md:-bottom-6 md:left-6 md:text-2xl">
                {hero.annotation}
              </p>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
