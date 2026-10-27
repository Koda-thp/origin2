"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "origin_cookie_consent";
type Consent = "accepted" | "rejected" | null;

export function CookieBanner() {
  const [consent, setConsent] = useState<Consent>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Consent | null;
    if (stored === "accepted" || stored === "rejected") {
      setConsent(stored);
    } else {
      setVisible(true);
    }
  }, []);

  const handleAccept = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setConsent("accepted");
    setVisible(false);
  }, []);

  const handleReject = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setConsent("rejected");
    setVisible(false);
  }, []);

  if (!visible || consent !== null) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] border-t border-bordeaux/15 bg-cream px-5 py-5 shadow-[0_-8px_30px_rgba(59,19,30,0.12)] md:px-10 md:py-6">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm leading-relaxed text-bordeaux/85">
            Ce site utilise des cookies strictement nécessaires à son fonctionnement. Aucun cookie
            analytique n'est déposé sans votre accord. Vous pouvez accepter ou refuser les cookies
            non essentiels à tout moment.{" "}
            <Link href="/politique-de-confidentialite" className="underline hover:text-bordeaux">
              En savoir plus
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={handleReject}
            className="rounded-full border border-bordeaux/40 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-bordeaux/80 transition-colors hover:bg-bordeaux hover:text-cream"
          >
            Refuser
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="rounded-full bg-bordeaux px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-cream transition-colors hover:bg-bordeaux-deep"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
