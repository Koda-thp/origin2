import { twMerge } from "tailwind-merge";
import { CheckIcon } from "@/components/ui/icons";
import { PillButton } from "@/components/ui/pill-button";
import { Reveal } from "@/components/ui/reveal";
import { pricing } from "@/data/mock";

const cardVariants = {
  dark: {
    card: "bg-bordeaux text-cream",
    divider: "border-cream/20",
    feature: "text-cream/85",
    button: "outlineLight" as const,
  },
  featured: {
    card: "bg-rose text-bordeaux shadow-xl",
    divider: "border-bordeaux/15",
    feature: "text-bordeaux/85",
    button: "solid" as const,
  },
  light: {
    card: "bg-tan text-bordeaux",
    divider: "border-bordeaux/15",
    feature: "text-bordeaux/85",
    button: "solid" as const,
  },
};

const offsets = ["md:mt-0", "md:mt-14", "md:mt-7"];

export function Pricing() {
  return (
    <section id="tarifs" className="relative overflow-x-hidden py-24 md:py-36">
      {/* Typographie XXL débordante — glisse SOUS les cartes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-6 select-none md:top-2"
      >
        <p className="whitespace-nowrap text-center font-display text-[clamp(4.5rem,17vw,16rem)] uppercase leading-none text-bordeaux">
          {pricing.backgroundWord}
        </p>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 pt-[clamp(3.5rem,11vw,9rem)] md:px-10">
        <Reveal>
          <p className="text-center font-script text-3xl text-terracotta md:text-4xl">
            {pricing.titleScript}
          </p>
        </Reveal>

        <div className="mt-10 grid items-start gap-6 md:mt-14 md:grid-cols-3 md:gap-7">
          {pricing.plans.map((plan, index) => {
            const styles = cardVariants[plan.variant];
            return (
              <Reveal key={plan.name} delay={index * 100} className={offsets[index]}>
                <article className={twMerge("flex flex-col rounded-2xl p-7 md:p-9", styles.card)}>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.24em]">{plan.name}</h3>
                  <p className="mt-4 font-display text-6xl uppercase leading-none">{plan.price}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] opacity-70">
                    {plan.period}
                  </p>

                  <hr className={twMerge("my-7 border-t", styles.divider)} />

                  <ul className="space-y-3.5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className={twMerge("flex items-start gap-2.5 text-sm", styles.feature)}
                      >
                        <CheckIcon className="size-4" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <PillButton href="#tarifs" variant={styles.button} className="mt-9 w-full">
                    {plan.cta}
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
