import { PillButton } from "@/components/ui/pill-button";
import { Reveal } from "@/components/ui/reveal";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
import { Visual } from "@/components/ui/visual";
import { urlFor } from "@/sanity/lib/image";
import type { SiteSettings } from "@/sanity/types";

export function Founder({
  founder,
  images,
}: {
  founder: SiteSettings["founder"];
  images: SiteSettings["images"];
}) {
  return (
    <section id="fondatrice" className="relative overflow-x-clip py-16 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-12 md:gap-8 md:px-10">
        <div className="order-2 md:order-1 md:col-span-6">
          <Reveal>
            <p className="mb-2 font-script text-4xl text-terracotta md:text-5xl">
              {founder.script}
            </p>
            <SectionHeading>
              {founder.name},
              <br />
              {founder.title} <Accent>{founder.titleScript}</Accent>
              {founder.titleSuffix}
            </SectionHeading>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-bordeaux/70 md:text-xs">
              {founder.role}
            </p>
            {founder.bio.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="mt-4 max-w-lg text-sm leading-relaxed text-bordeaux/80 md:text-base"
              >
                {paragraph}
              </p>
            ))}
            <PillButton href={founder.cta.href} className="mt-8">
              {founder.cta.label}
            </PillButton>
          </Reveal>
        </div>

        <div className="relative order-1 md:order-2 md:col-span-5 md:col-start-8">
          <Reveal className="relative">
            <Visual
              src={urlFor(images.founderMain).url()}
              alt={founder.imageMainAlt}
              sizes="(min-width: 768px) 38vw, 100vw"
              className="aspect-[3/4] w-full"
            />
            <Visual
              src={urlFor(images.founderAlt).url()}
              alt={founder.imageAltAlt}
              sizes="(min-width: 768px) 16vw, 40vw"
              className="absolute -bottom-8 -left-6 hidden w-40 rotate-[-5deg] rounded-xl border-4 border-cream shadow-lg sm:block md:-left-14 md:w-52"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
