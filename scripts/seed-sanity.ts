import fs from "node:fs";
import path from "node:path";
import { createClient } from "@sanity/client";
import { config } from "dotenv";
import {
  concept,
  cta,
  faq,
  footer,
  founder,
  hero,
  images,
  method,
  nav,
  pricing,
  site,
  studio,
  ticker,
  values,
} from "../src/data/mock";

config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  token: process.env.SANITY_API_TOKEN,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  useCdn: false,
});

async function uploadImage(imagePath: string) {
  const fullPath = path.join(process.cwd(), "public", imagePath);
  if (!fs.existsSync(fullPath)) {
    console.warn(`Image non trouvée: ${fullPath}`);
    return null;
  }
  const imageBuffer = fs.readFileSync(fullPath);
  const asset = await client.assets.upload("image", imageBuffer, {
    filename: path.basename(imagePath),
  });
  return {
    _type: "image" as const,
    asset: {
      _ref: asset._id,
      _type: "reference" as const,
    },
  };
}

async function seed() {
  console.log("🌱 Seed Sanity - ORIGIN Studio");
  console.log("Upload des images...");

  const [
    logo,
    heroImage,
    founderMain,
    founderAlt,
    faqImage,
    ctaImage,
    studioMain,
    studioGallery1,
    studioGallery2,
    studioGallery3,
    studioGallery4,
  ] = await Promise.all([
    uploadImage(images.logo),
    uploadImage(images.hero),
    uploadImage(images.founderMain),
    uploadImage(images.founderAlt),
    uploadImage(images.faq),
    uploadImage(images.cta),
    uploadImage(images.studioMain),
    uploadImage(images.studioGallery1),
    uploadImage(images.studioGallery2),
    uploadImage(images.studioGallery3),
    uploadImage(images.studioGallery4),
  ]);

  console.log("✅ Images uploadées");
  console.log("📝 Création du document siteSettings...");

  const studioGallery = [studioGallery1, studioGallery2, studioGallery3, studioGallery4].filter(
    Boolean,
  );

  const doc = {
    _type: "siteSettings",
    _id: "siteSettings",
    site: {
      name: site.name,
      baseline: site.baseline,
      city: site.city,
      description: site.description,
    },
    images: {
      logo,
      hero: heroImage,
      founderMain,
      founderAlt,
      faq: faqImage,
      cta: ctaImage,
      studioMain,
      studioGallery,
    },
    nav: {
      links: nav.links,
      cta: nav.cta,
    },
    hero: {
      eyebrow: hero.eyebrow,
      titleTop: hero.titleTop,
      titleScript: hero.titleScript,
      titleBottom: hero.titleBottom,
      subtitle: hero.subtitle,
      ctaPrimary: hero.ctaPrimary,
      ctaSecondary: hero.ctaSecondary,
      annotation: hero.annotation,
      imageAlt: hero.imageAlt,
    },
    method: {
      titleTop: method.titleTop,
      titleScript: method.titleScript,
      introduction: method.introduction,
      features: method.features,
      benefits: method.benefits,
      differentiation: method.differentiation,
    },
    studio: {
      titleTop: studio.titleTop,
      titleScript: studio.titleScript,
      introduction: studio.introduction,
      ambiance: studio.ambiance,
      location: studio.location,
      imageMainAlt: studio.imageMainAlt,
    },
    founder: {
      script: founder.script,
      name: founder.name,
      title: founder.title,
      titleScript: founder.titleScript,
      titleSuffix: founder.titleSuffix,
      role: founder.role,
      bio: founder.bio,
      cta: founder.cta,
      imageMainAlt: founder.imageMainAlt,
      imageAltAlt: founder.imageAltAlt,
    },
    concept: {
      titleTop: concept.titleTop,
      titleScript: concept.titleScript,
      titleBottom: concept.titleBottom,
      forYou: concept.forYou,
      notForYou: concept.notForYou,
    },
    pricing: {
      backgroundWord: pricing.backgroundWord,
      titleScript: pricing.titleScript,
      bookingUrl:
        "https://backoffice.bsport.io/m/Origin%20Studio%20Lagree/6139/pass/?isPreview=true&paymentPackCategories=&privatePassCategories=",
      categories: pricing.categories,
    },
    ticker: {
      items: ticker.items,
    },
    values: {
      titleTop: values.titleTop,
      titleScript: values.titleScript,
      titleBottom: values.titleBottom,
      items: values.items,
    },
    faq: {
      titleTop: faq.titleTop,
      titleScript: faq.titleScript,
      imageAlt: faq.imageAlt,
      items: faq.items,
    },
    cta: {
      titleTop: cta.titleTop,
      titleScript: cta.titleScript,
      titleBottom: cta.titleBottom,
      subtitle: cta.subtitle,
      button: cta.button,
      imageAlt: cta.imageAlt,
    },
    calendar: {
      title: "Planning",
      bookingUrl: "https://backoffice.bsport.io/m/Origin%20Studio%20Lagree/6139/calendar/",
    },
    footer: {
      wordmark: footer.wordmark,
      tagline: footer.tagline,
      phone: footer.phone,
      phoneLink: footer.phoneLink,
      instagram: footer.instagram,
      instagramLabel: footer.instagramLabel,
      address: footer.address,
      postalCode: footer.postalCode,
      city: footer.city,
      nav: footer.nav,
      legal: footer.legal,
      credits: footer.credits,
    },
  };

  await client.createOrReplace(doc);
  console.log("✅ Document siteSettings créé avec succès !");
  console.log("🎉 Seed terminé !");
}

seed().catch(console.error);
