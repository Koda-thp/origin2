"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { PillButton } from "@/components/ui/pill-button";
import { urlFor } from "@/sanity/lib/image";
import type { SiteSettings } from "@/sanity/types";

export function Navbar({
  site,
  nav,
  logo,
}: {
  site: SiteSettings["site"];
  nav: SiteSettings["nav"];
  logo: SiteSettings["images"]["logo"];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeMenu]);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 bg-cream/90 backdrop-blur-sm transition-transform duration-300 md:bg-transparent md:backdrop-blur-none md:translate-y-0 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10 md:py-6">
          <Link
            href="#"
            aria-label={`${site.name} — ${site.baseline}`}
            className="block"
            onClick={closeMenu}
          >
            <span className="block size-12 overflow-hidden rounded-full shadow-sm transition-transform duration-300 hover:scale-105 md:size-14">
              <Image
                src={urlFor(logo).url()}
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

          <div className="hidden md:block">
            <PillButton href={nav.cta.href} className="px-7 py-3">
              {nav.cta.label}
            </PillButton>
          </div>

          <button
            type="button"
            onClick={toggleMenu}
            className="relative z-10 flex size-11 items-center justify-center rounded-full bg-bordeaux/10 transition-colors hover:bg-bordeaux/20 md:hidden"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className="relative block size-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-bordeaux transition-all duration-300 ${
                  isOpen ? "top-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-5 rounded-full bg-bordeaux transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-bordeaux transition-all duration-300 ${
                  isOpen ? "-top-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 top-0 z-40 bg-cream transition-all duration-500 ease-out md:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <div
          className={`flex h-full flex-col items-center justify-center gap-8 transition-transform duration-500 ease-out ${
            isOpen ? "translate-y-0" : "-translate-y-8"
          }`}
        >
          <nav aria-label="Navigation mobile" className="flex flex-col items-center gap-6">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-lg font-semibold uppercase tracking-[0.18em] text-bordeaux transition-colors hover:text-bordeaux/70"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-4">
            <PillButton href={nav.cta.href} onClick={closeMenu} className="px-8 py-3.5">
              {nav.cta.label}
            </PillButton>
          </div>
        </div>
      </div>
    </>
  );
}
