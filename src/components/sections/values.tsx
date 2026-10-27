import { Reveal } from "@/components/ui/reveal";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
import type { SiteSettings } from "@/sanity/types";

export function Values({ values }: { values: SiteSettings["values"] }) {
  return (
    <section id="valeurs" className="py-16 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <Reveal>
          <div className="relative text-center">
            <SectionHeading className="inline-block">
              {values.titleTop} <Accent>{values.titleScript}</Accent>
              <br />
              {values.titleBottom}
            </SectionHeading>
            <p className="absolute -left-6 top-6 hidden rotate-[-5deg] font-script text-2xl text-terracotta md:block">
              L'esprit
            </p>
          </div>
        </Reveal>

        <div className="mt-12 md:mt-16">
          <div className="grid gap-6 md:grid-cols-12 md:gap-6">
            <Reveal delay={100} className="md:col-span-7">
              <article className="flex h-full flex-col rounded-2xl bg-rose p-7 md:p-10">
                <h3 className="font-display text-lg uppercase tracking-wide text-bordeaux md:text-xl">
                  {values.items[0].title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-bordeaux/80 md:text-base">
                  {values.items[0].description}
                </p>
              </article>
            </Reveal>

            <Reveal delay={140} className="md:col-span-5 md:-mt-6">
              <article className="flex h-full flex-col rounded-2xl bg-tan p-7 md:p-10">
                <h3 className="font-display text-lg uppercase tracking-wide text-bordeaux md:text-xl">
                  {values.items[1].title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-bordeaux/80 md:text-base">
                  {values.items[1].description}
                </p>
              </article>
            </Reveal>

            <Reveal delay={180} className="md:col-span-5 md:mt-2">
              <article className="flex h-full flex-col rounded-2xl bg-terracotta p-7 md:p-10">
                <h3 className="font-display text-lg uppercase tracking-wide text-bordeaux md:text-xl">
                  {values.items[2].title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-bordeaux/80 md:text-base">
                  {values.items[2].description}
                </p>
              </article>
            </Reveal>

            <Reveal delay={220} className="md:col-span-7 md:-mt-4">
              <article className="flex h-full flex-col rounded-2xl bg-rose-soft p-7 md:p-10">
                <h3 className="font-display text-lg uppercase tracking-wide text-bordeaux md:text-xl">
                  {values.items[3].title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-bordeaux/80 md:text-base">
                  {values.items[3].description}
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
