// @ts-nocheck

import { concept } from "./concept";
import { cta } from "./cta";
import { faq } from "./faq";
import { footer } from "./footer";
import { founder } from "./founder";
import { hero } from "./hero";
import { nav } from "./nav";
import { pricing } from "./pricing";
import { siteConfig } from "./siteConfig";
import { ticker } from "./ticker";

export const schemaTypes = [
  siteConfig,
  hero,
  founder,
  concept,
  pricing,
  faq,
  cta,
  ticker,
  nav,
  footer,
];

export const schema = {
  types: schemaTypes,
};
