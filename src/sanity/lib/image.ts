import { createImageUrlBuilder } from "@sanity/image-url";
import { client } from "../client";
import type { SanityImage as SanityImageType } from "../types";

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageType) {
  return builder.image(source);
}
