import Image from "next/image";
import Link from "next/link";
import { PillButton } from "@/components/ui/pill-button";
import { images, nav, site } from "@/data/mock";

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10 md:py-6">
        <Link href="#" aria-label={`${site.name} — ${site.baseline}`} className="block">
          <span className="block size-12 overflow-hidden rounded-full shadow-sm transition-transform duration-300 hover:scale-105 md:size-14">
            <Image
              src={images.logo}
              alt={`Logo ${site.name} ${site.baseline}`}
              width={112}
              height={112}
              priority
              className="size-full object-cover"
            />
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-bordeaux/80 transition-colors hover:text-bordeaux"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <PillButton href={nav.cta.href} className="px-5 py-2.5 md:px-7 md:py-3">
          {nav.cta.label}
        </PillButton>
      </div>
    </header>
  );
}
