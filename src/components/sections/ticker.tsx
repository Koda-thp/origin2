import { ticker } from "@/data/mock";

/** Ruban défilant — animation CSS pure, aucun JS. */
export function Ticker() {
  const chunk = `${ticker.items.join("  \\  ")}  \\  `.repeat(4);

  return (
    <div className="overflow-hidden bg-bordeaux py-3.5 md:py-4">
      <div className="flex w-max animate-marquee">
        <span className="whitespace-nowrap font-display text-sm uppercase tracking-[0.2em] text-cream md:text-base">
          {chunk}
        </span>
        <span
          aria-hidden="true"
          className="whitespace-nowrap font-display text-sm uppercase tracking-[0.2em] text-cream md:text-base"
        >
          {chunk}
        </span>
      </div>
    </div>
  );
}
