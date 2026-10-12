import Image from "next/image";
import { footer, images, site } from "@/data/mock";

export function Footer() {
  return (
    <footer className="bg-bordeaux-deep text-cream">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 md:px-10 md:pt-24">
        <p
          aria-hidden="true"
          className="select-none text-center font-display text-[clamp(4rem,17vw,15rem)] uppercase leading-[0.85] text-cream/10"
        >
          {footer.wordmark}
        </p>

        <div className="mt-4 grid gap-10 border-t border-cream/15 pt-10 md:grid-cols-3 md:pt-14">
          <div>
            <span className="mb-4 block size-12 overflow-hidden rounded-full">
              <Image
                src={images.logo}
                alt={`Logo ${site.name} ${site.baseline}`}
                width={96}
                height={96}
                className="size-full object-cover"
              />
            </span>
            <p className="text-sm text-cream/70">{footer.tagline}</p>
          </div>

          <nav aria-label="Navigation de pied de page">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream/50">
              Le studio
            </p>
            <ul className="space-y-2.5">
              {footer.nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/80 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Liens légaux">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-cream/50">
              Légal
            </p>
            <ul className="space-y-2.5">
              {footer.legal.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/80 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/15 pt-6 text-xs text-cream/60 md:flex-row">
          <p>
            © 2026 {site.name} — {site.baseline}, {site.city}
          </p>
          <p>{footer.credits}</p>
        </div>
      </div>
    </footer>
  );
}
