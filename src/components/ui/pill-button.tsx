import Link from "next/link";
import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type PillVariant = "solid" | "outline" | "solidLight" | "outlineLight";

const variants: Record<PillVariant, string> = {
  solid: "bg-bordeaux text-cream hover:bg-bordeaux-deep",
  outline: "border border-bordeaux/60 text-bordeaux hover:bg-bordeaux hover:text-cream",
  solidLight: "bg-cream text-bordeaux hover:bg-rose",
  outlineLight: "border border-cream/60 text-cream hover:bg-cream hover:text-bordeaux",
};

interface PillButtonProps {
  href: string;
  children: ReactNode;
  variant?: PillVariant;
  className?: string;
}

export function PillButton({ href, children, variant = "solid", className }: PillButtonProps) {
  return (
    <Link
      href={href}
      className={twMerge(
        "inline-flex w-fit items-center justify-center rounded-full px-7 py-3",
        "text-xs font-semibold uppercase tracking-[0.18em]",
        "transition-all duration-300 hover:-translate-y-0.5",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
