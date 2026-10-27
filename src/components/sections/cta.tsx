import Image from "next/image";
import { PillButton } from "@/components/ui/pill-button";
import { Reveal } from "@/components/ui/reveal";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
import { urlFor } from "@/sanity/lib/image";
import type { SiteSettings } from "@/sanity/types";

export function Cta({
  cta,
  image,
}: {
  cta: SiteSettings["cta"];
  image: SiteSettings["images"]["cta"];
}) {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden md:min-h-[80vh]">
      <Image
        src={urlFor(image).url()}
        alt={cta.imageAlt}
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-bordeaux-deep/55" />

      <div className="relative z-10 px-5 py-20 text-center">
        <Reveal>
          <SectionHeading className="text-cream">
            {cta.titleTop} <Accent className="text-rose">{cta.titleScript}</Accent>
            <br />
            {cta.titleBottom}
          </SectionHeading>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-cream/85 md:text-base">
            {cta.subtitle}
          </p>
          <PillButton href={cta.button.href} variant="solidLight" className="mx-auto mt-9">
            {cta.button.label}
          </PillButton>
        </Reveal>
      </div>
    </section>
  );
}
