import { CheckIcon, CrossIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
import { concept } from "@/data/mock";

export function Concept() {
  return (
    <section id="concept" className="py-16 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <Reveal>
          <SectionHeading className="text-center">
            {concept.titleTop} <Accent>{concept.titleScript}</Accent>
            <br />
            {concept.titleBottom}
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
          <Reveal className="h-full">
            <article className="flex h-full flex-col rounded-2xl bg-tan p-7 md:p-10">
              <h3 className="font-display text-lg uppercase tracking-wide text-bordeaux md:text-xl">
                {concept.forYou.title}
              </h3>
              <ul className="mt-7 space-y-5">
                {concept.forYou.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-bordeaux md:text-base"
                  >
                    <CheckIcon />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={120} className="h-full md:mt-12">
            <article className="flex h-full flex-col rounded-2xl bg-rose p-7 md:p-10">
              <h3 className="font-display text-lg uppercase tracking-wide text-bordeaux md:text-xl">
                {concept.notForYou.title}
              </h3>
              <ul className="mt-7 space-y-5">
                {concept.notForYou.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-bordeaux/90 md:text-base"
                  >
                    <CrossIcon />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
