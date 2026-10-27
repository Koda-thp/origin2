import { CheckIcon, FlameIcon, GaugeIcon, TimerIcon, ZapIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
import type { SiteSettings } from "@/sanity/types";

export function Method({ method }: { method: SiteSettings["method"] }) {
  return (
    <section id="methode" className="py-16 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <Reveal>
          <div className="relative text-center">
            <SectionHeading className="inline-block">
              {method.titleTop} <Accent>{method.titleScript}</Accent>
            </SectionHeading>
            <p className="absolute -right-8 top-4 hidden rotate-[-6deg] font-script text-2xl text-terracotta md:block">
              La méthode
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-bordeaux/80 md:ml-12 md:mr-4 md:text-lg">
            {method.introduction}
          </p>
        </Reveal>

        <div className="mt-12 md:mt-16">
          <div className="grid gap-6 md:grid-cols-12 md:gap-6">
            <Reveal delay={100} className="md:col-span-7">
              <article className="flex h-full flex-col rounded-2xl bg-tan p-7 md:p-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bordeaux/10">
                    <ZapIcon />
                  </div>
                  <h3 className="font-display text-lg uppercase tracking-wide text-bordeaux md:text-xl">
                    {method.features[0].title}
                  </h3>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-bordeaux/80 md:text-base">
                  {method.features[0].description}
                </p>
              </article>
            </Reveal>

            <Reveal delay={140} className="md:col-span-5 md:-mt-8">
              <article className="flex h-full flex-col rounded-2xl bg-rose p-7 md:p-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bordeaux/10">
                    <TimerIcon />
                  </div>
                  <h3 className="font-display text-lg uppercase tracking-wide text-bordeaux md:text-xl">
                    {method.features[1].title}
                  </h3>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-bordeaux/80 md:text-base">
                  {method.features[1].description}
                </p>
              </article>
            </Reveal>

            <Reveal delay={180} className="md:col-span-5 md:mt-4">
              <article className="flex h-full flex-col rounded-2xl bg-rose-soft p-7 md:p-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bordeaux/10">
                    <GaugeIcon />
                  </div>
                  <h3 className="font-display text-lg uppercase tracking-wide text-bordeaux md:text-xl">
                    {method.features[2].title}
                  </h3>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-bordeaux/80 md:text-base">
                  {method.features[2].description}
                </p>
              </article>
            </Reveal>

            <Reveal delay={220} className="md:col-span-7 md:-mt-4">
              <article className="flex h-full flex-col rounded-2xl bg-terracotta p-7 md:p-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bordeaux/10">
                    <FlameIcon />
                  </div>
                  <h3 className="font-display text-lg uppercase tracking-wide text-bordeaux md:text-xl">
                    {method.features[3].title}
                  </h3>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-bordeaux/80 md:text-base">
                  {method.features[3].description}
                </p>
              </article>
            </Reveal>
          </div>
        </div>

        <Reveal delay={260}>
          <div className="relative mt-12 md:mt-16">
            <p className="absolute -top-4 right-6 rotate-[-4deg] font-script text-xl text-terracotta md:-top-6 md:right-12 md:text-2xl">
              Bienfaits
            </p>
            <div className="rounded-2xl bg-bordeaux p-7 md:p-10">
              <h3 className="font-display text-lg uppercase tracking-wide text-tan md:text-xl">
                {method.benefits.title}
              </h3>
              <ul className="mt-7 grid gap-4 md:grid-cols-2 md:gap-6">
                {method.benefits.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-tan md:text-base">
                    <CheckIcon className="text-rose" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="relative mt-12 md:mt-16">
            <div className="ml-auto max-w-2xl rounded-2xl bg-rose-soft p-7 md:p-10">
              <h3 className="font-display text-lg uppercase tracking-wide text-bordeaux md:text-xl">
                {method.differentiation.title}
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-bordeaux/80 md:text-base">
                {method.differentiation.text}
              </p>
            </div>
            <p className="absolute -bottom-3 -left-4 rotate-[-5deg] font-script text-2xl text-terracotta md:-bottom-4 md:-left-8 md:text-3xl">
              Unique
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
