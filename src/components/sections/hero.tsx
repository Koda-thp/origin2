import { PillButton } from "@/components/ui/pill-button";
import { Reveal } from "@/components/ui/reveal";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
import { Visual } from "@/components/ui/visual";
import { hero, images } from "@/data/mock";

export function Hero() {
  return (
    <section className="relative overflow-x-clip">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-28 md:grid-cols-12 md:gap-8 md:px-10 md:pb-24 md:pt-44">
        <div className="flex flex-col justify-center md:col-span-7">
          <Reveal>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-bordeaux/70 md:text-xs">
              {hero.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <SectionHeading as="h1" className="text-[clamp(3.4rem,11vw,9.5rem)]">
              {hero.titleTop} <Accent>{hero.titleScript}</Accent>
              <br />
              {hero.titleBottom}
            </SectionHeading>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-bordeaux/80 md:mt-8 md:text-lg">
              {hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-4 md:mt-10">
              <PillButton href={hero.ctaPrimary.href}>{hero.ctaPrimary.label}</PillButton>
              <PillButton href={hero.ctaSecondary.href} variant="outline">
                {hero.ctaSecondary.label}
              </PillButton>
            </div>
          </Reveal>
        </div>

        <div className="relative md:col-span-5">
          <Reveal delay={200} className="relative">
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 hidden h-full w-full rounded-2xl bg-tan md:block"
            />
            <Visual
              src={images.hero}
              alt={hero.imageAlt}
              priority
              sizes="(min-width: 768px) 40vw, 100vw"
              className="relative aspect-[3/4] w-full md:translate-x-4"
            />
            <p className="absolute -bottom-6 left-2 rotate-[-4deg] font-script text-2xl text-bordeaux md:-left-10 md:text-3xl">
              {hero.annotation}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
