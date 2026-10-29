"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/client";
import type { SiteSettings } from "@/sanity/types";
import { SITE_SETTINGS_QUERY } from "./queries";

interface SiteSettingsState {
  data: SiteSettings | null;
  error: Error | null;
  loading: boolean;
}

export function useSiteSettings(): SiteSettingsState {
  const [data, setData] = useState<SiteSettings | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    client
      .fetch<SiteSettings>(SITE_SETTINGS_QUERY, {})
      .then((result) => {
        if (cancelled) return;
        setData(result);
        setLoading(false);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setError(err instanceof Error ? err : new Error("Erreur de chargement des données"));
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { data, error, loading };
}
