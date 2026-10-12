import { Reveal } from "@/components/ui/reveal";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
import { Visual } from "@/components/ui/visual";
import { faq, images } from "@/data/mock";

/** FAQ en <details> natifs — accessible et zéro JS. */
export function Faq() {
  return (
    <section id="faq" className="py-16 md:py-28">
      <div className="mx-auto grid max-w-7xl items-stretch gap-6 px-5 md:grid-cols-2 md:gap-8 md:px-10">
        <Reveal>
          <div className="flex h-full flex-col rounded-3xl bg-rose-soft p-7 md:p-12">
            <SectionHeading className="text-[clamp(2.4rem,6vw,4.5rem)]">
              {faq.titleTop} <Accent className="text-terracotta">{faq.titleScript}</Accent>
            </SectionHeading>

            <div className="mt-8 md:mt-10">
              {faq.items.map((item) => (
                <details key={item.question} className="group border-b border-bordeaux/15">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-xs font-semibold uppercase tracking-[0.18em] text-bordeaux transition-colors hover:text-bordeaux/70 md:text-sm [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <span
                      aria-hidden="true"
                      className="font-display text-xl leading-none transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pb-6 pr-8 text-sm leading-relaxed text-bordeaux/75">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <Visual
            src={images.faq}
            alt={faq.imageAlt}
            sizes="(min-width: 768px) 45vw, 100vw"
            className="aspect-[4/5] w-full md:aspect-auto md:h-full"
          />
        </Reveal>
      </div>
    </section>
  );
}
