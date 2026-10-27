import { twMerge } from "tailwind-merge";
import { PillButton } from "@/components/ui/pill-button";
import { Reveal } from "@/components/ui/reveal";
import type { SiteSettings } from "@/sanity/types";

const cardVariants = {
  dark: {
    card: "bg-bordeaux text-cream",
    divider: "border-cream/20",
    item: "text-cream/85",
    button: "outlineLight" as const,
  },
  featured: {
    card: "bg-rose text-bordeaux shadow-xl",
    divider: "border-bordeaux/15",
    item: "text-bordeaux/85",
    button: "solid" as const,
  },
  light: {
    card: "bg-tan text-bordeaux",
    divider: "border-bordeaux/15",
    item: "text-bordeaux/85",
    button: "solid" as const,
  },
};

const offsets = ["md:mt-0", "md:mt-14", "md:mt-7"];

export function Pricing({ pricing }: { pricing: SiteSettings["pricing"] }) {
  return (
    <section id="tarifs" className="relative overflow-x-hidden py-24 md:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-6 overflow-hidden select-none md:top-2"
      >
        <div className="flex w-max animate-marquee-slow">
          <span className="whitespace-nowrap font-display text-[clamp(4.5rem,17vw,16rem)] uppercase leading-none text-bordeaux">
            {`${pricing.backgroundWord} · `.repeat(4)}
          </span>
          <span className="whitespace-nowrap font-display text-[clamp(4.5rem,17vw,16rem)] uppercase leading-none text-bordeaux">
            {`${pricing.backgroundWord} · `.repeat(4)}
          </span>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 pt-[clamp(3.5rem,11vw,9rem)] md:px-10">
        <Reveal>
          <p className="text-center font-script text-3xl text-terracotta md:text-4xl">
            {pricing.titleScript}
          </p>
        </Reveal>

        <div className="mt-10 grid items-start gap-6 md:mt-14 md:grid-cols-3 md:gap-7">
          {pricing.categories.map((category, index) => {
            const styles = cardVariants[category.variant];
            return (
              <Reveal
                key={category.name}
                delay={index * 100}
                className={offsets[index] || "md:mt-0"}
              >
                <article className={twMerge("flex flex-col rounded-2xl p-7 md:p-9", styles.card)}>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.24em]">
                    {category.name}
                  </h3>

                  <ul className="mt-7 space-y-4">
                    {category.items.map((item) => (
                      <li key={item.name} className="flex items-baseline justify-between gap-3">
                        <span className={twMerge("text-sm", styles.item)}>{item.name}</span>
                        <span className="flex shrink-0 items-baseline gap-1.5">
                          <span className="font-display text-xl uppercase leading-none">
                            {item.price}
                          </span>
                          {item.period && (
                            <span className="text-[10px] uppercase tracking-[0.12em] opacity-60">
                              {item.period}
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <hr className={twMerge("my-7 border-t", styles.divider)} />

                  <PillButton
                    href={pricing.bookingUrl}
                    variant={styles.button}
                    className="mt-auto w-full"
                  >
                    Je réserve
                  </PillButton>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
