import { client } from "../client";
import type { SiteSettings } from "../types";
import { SITE_SETTINGS_QUERY } from "./queries";

export async function fetchSiteSettings(): Promise<SiteSettings | null> {
  const data = await client.fetch<SiteSettings>(SITE_SETTINGS_QUERY, {});
  return data;
}
