import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Accent, SectionHeading } from "@/components/ui/section-heading";
import { urlFor } from "@/sanity/lib/image";
import type { SiteSettings } from "@/sanity/types";

export function Studio({
  studio,
  images,
}: {
  studio: SiteSettings["studio"];
  images: SiteSettings["images"];
}) {
  return (
    <section id="studio" className="py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <div className="relative text-center">
            <SectionHeading className="inline-block">
              {studio.titleTop} <Accent>{studio.titleScript}</Accent>
            </SectionHeading>
            <p className="absolute -right-6 top-4 hidden rotate-[-5deg] font-script text-2xl text-terracotta md:block">
              {studio.location.city}
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-bordeaux/80 md:mr-12 md:text-lg">
            {studio.introduction}
          </p>
        </Reveal>

        <div className="relative mt-12 overflow-hidden rounded-3xl md:mt-16">
          <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
            <Image
              src={urlFor(images.studioMain).url()}
              alt={studio.imageMainAlt}
              fill
              sizes="(min-width: 768px) 80vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bordeaux/80 to-transparent p-7 md:p-10">
            <div className="max-w-2xl">
              <h3 className="font-display text-xl uppercase tracking-wide text-cream md:text-2xl">
                {studio.ambiance.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/90 md:text-base">
                {studio.ambiance.text}
              </p>
            </div>
          </div>
        </div>

        <Reveal delay={160}>
          <div className="mt-8 grid gap-4 md:grid-cols-3 md:gap-6">
            {studio.ambiance.highlights.map((item, index) => (
              <div
                key={item.label}
                className={`flex flex-col items-center rounded-2xl p-6 text-center ${
                  index === 0 ? "bg-rose" : index === 1 ? "bg-tan" : "bg-terracotta"
                } ${index === 2 ? "text-cream" : "text-bordeaux"}`}
              >
                <p
                  className={`font-display text-3xl uppercase tracking-wide md:text-4xl ${
                    index === 2 ? "text-cream" : ""
                  }`}
                >
                  {item.label}
                </p>
                <p className={`mt-1 text-sm ${index === 2 ? "text-cream/80" : "text-bordeaux/70"}`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <Reveal delay={200}>
              <h3 className="font-display text-lg uppercase tracking-wide text-bordeaux md:text-xl">
                Galerie
              </h3>
            </Reveal>
            <div className="mt-6 grid grid-cols-2 gap-3 md:gap-4">
              {images.studioGallery.map((img, index) => {
                const rotations = [
                  "rotate-[-1deg]",
                  "rotate-[1deg]",
                  "rotate-[0.5deg]",
                  "rotate-[-0.5deg]",
                ];
                const offsets = ["mt-0", "mt-4", "-mt-2", "mt-2"];

                return (
                  <Reveal
                    key={img.asset?._ref || index}
                    delay={220 + index * 40}
                    className={offsets[index] || "mt-0"}
                  >
                    <div
                      className={`relative aspect-[4/3] overflow-hidden rounded-xl ${rotations[index] || "rotate-0"}`}
                    >
                      <Image
                        src={urlFor(img).url()}
                        alt={`Photo studio ${index + 1}`}
                        fill
                        sizes="(min-width: 768px) 25vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-7">
            <Reveal delay={240}>
              <h3 className="font-display text-lg uppercase tracking-wide text-bordeaux md:text-xl">
                {studio.location.title}
              </h3>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-6 overflow-hidden rounded-2xl border border-bordeaux/10">
                <iframe
                  src={studio.location.mapEmbedUrl}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation ORIGIN Studio"
                  className="block"
                />
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-6 rounded-2xl bg-tan p-6">
                <p className="font-display text-base uppercase tracking-wide text-bordeaux">
                  {studio.location.address}
                </p>
                <p className="mt-1 text-sm text-bordeaux/70">
                  {studio.location.postalCode} {studio.location.city}, {studio.location.country}
                </p>
                <p className="mt-3 text-sm text-bordeaux/60">📍 {studio.location.parking}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
