import type { SiteSettings } from "@/sanity/types";

export function Ticker({ ticker }: { ticker: SiteSettings["ticker"] }) {
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
