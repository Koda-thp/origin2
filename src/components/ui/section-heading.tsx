import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

/**
 * Titre de section éditorial : méga-bold uppercase (Anton)
 * entrecoupé de mots de liaison en script fin (Caveat).
 */
interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({ children, className, as: Tag = "h2" }: SectionHeadingProps) {
  return (
    <Tag
      className={twMerge(
        "font-display uppercase leading-[0.92] tracking-tight text-bordeaux",
        "text-[clamp(2.6rem,8vw,6.5rem)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Mot de liaison manuscrit, à insérer entre deux mots bold. */
export function Accent({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={twMerge(
        "inline-block -rotate-2 font-script normal-case tracking-normal",
        "mx-1 align-baseline text-[0.72em] text-terracotta md:mx-2",
        className,
      )}
    >
      {children}
    </span>
  );
}
