"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

/**
 * Apparition douce au scroll (fade + translate).
 * Désactivé sous 768px et si prefers-reduced-motion : contenu visible immédiatement.
 */
interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"hidden" | "visible">("hidden");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const motionOk =
      window.matchMedia("(min-width: 768px)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!motionOk) {
      setState("visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setState("visible");
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-state={state}
      style={state === "visible" && delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
      className={twMerge("reveal", className)}
    >
      {children}
    </div>
  );
}
