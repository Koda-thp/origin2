import Image from "next/image";
import { InstagramIcon } from "@/components/ui/icons";
import { urlFor } from "@/sanity/lib/image";
import type { SiteSettings } from "@/sanity/types";

export function Footer({
  site,
  footer,
  logo,
}: {
  site: SiteSettings["site"];
  footer: SiteSettings["footer"];
  logo: SiteSettings["images"]["logo"];
}) {
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
                src={urlFor(logo).url()}
                alt={`Logo ${site.name} ${site.baseline}`}
                width={96}
                height={96}
                className="size-full object-cover"
              />
            </span>
            <p className="text-sm text-cream/70">{footer.tagline}</p>

            <div className="mt-6 space-y-3">
              <a
                href={footer.phoneLink}
                className="flex items-center gap-2 text-sm text-cream/80 transition-colors hover:text-cream"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                {footer.phone}
              </a>

              <a
                href={footer.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-cream/80 transition-colors hover:text-cream"
              >
                <InstagramIcon />
                <span>Suis-nous sur Insta</span>
              </a>

              <p className="text-sm leading-relaxed text-cream/70">
                {footer.address}
                <br />
                {footer.postalCode} {footer.city}
              </p>
            </div>
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
            © 2026 {site.name} — {site.baseline}
            {site.city && `, ${site.city}`}
          </p>
          <p>
            Fait avec ❤️ par l'{" "}
            <a
              href="https://agence-grey.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-cream/80"
            >
              Agence Grey
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
