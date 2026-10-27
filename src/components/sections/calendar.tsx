import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { SiteSettings } from "@/sanity/types";

export function Calendar({ calendar }: { calendar: SiteSettings["calendar"] }) {
  return (
    <section id="planning" className="py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <SectionHeading className="text-center">{calendar.title}</SectionHeading>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-bordeaux/15 bg-cream md:mt-16">
            <iframe
              src={calendar.bookingUrl}
              width="100%"
              height="800"
              title="Calendrier de réservation ORIGIN Studio Lagree"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
