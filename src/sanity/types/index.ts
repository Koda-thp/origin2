export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface SiteSettings {
  _id: string;
  _type: "siteSettings";
  site: {
    name: string;
    baseline: string;
    city: string;
    description: string;
  };
  images: {
    logo: SanityImage;
    hero: SanityImage;
    founderMain: SanityImage;
    founderAlt: SanityImage;
    faq: SanityImage;
    cta: SanityImage;
    studioMain: SanityImage;
    studioGallery: SanityImage[];
  };
  nav: {
    links: Array<{ label: string; href: string }>;
    cta: { label: string; href: string };
  };
  hero: {
    eyebrow: string;
    titleTop: string;
    titleScript: string;
    titleBottom: string;
    subtitle: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
    annotation: string;
    imageAlt: string;
  };
  method: {
    titleTop: string;
    titleScript: string;
    introduction: string;
    features: Array<{ title: string; description: string }>;
    benefits: {
      title: string;
      items: string[];
    };
    differentiation: {
      title: string;
      text: string;
    };
  };
  studio: {
    titleTop: string;
    titleScript: string;
    introduction: string;
    ambiance: {
      title: string;
      text: string;
      highlights: Array<{ label: string; description: string }>;
    };
    location: {
      title: string;
      address: string;
      postalCode: string;
      city: string;
      country: string;
      mapEmbedUrl: string;
      parking: string;
    };
    imageMainAlt: string;
  };
  founder: {
    script: string;
    name: string;
    title: string;
    titleScript: string;
    titleSuffix: string;
    role: string;
    bio: string[];
    cta: { label: string; href: string };
    imageMainAlt: string;
    imageAltAlt: string;
  };
  concept: {
    titleTop: string;
    titleScript: string;
    titleBottom: string;
    forYou: {
      title: string;
      items: string[];
    };
    notForYou: {
      title: string;
      items: string[];
    };
  };
  pricing: {
    backgroundWord: string;
    titleScript: string;
    bookingUrl: string;
    categories: Array<{
      name: string;
      variant: "dark" | "featured" | "light";
      items: Array<{
        name: string;
        price: string;
        period?: string;
      }>;
    }>;
  };
  ticker: {
    items: string[];
  };
  values: {
    titleTop: string;
    titleScript: string;
    titleBottom: string;
    items: Array<{ title: string; description: string }>;
  };
  faq: {
    titleTop: string;
    titleScript: string;
    imageAlt: string;
    items: Array<{ question: string; answer: string }>;
  };
  cta: {
    titleTop: string;
    titleScript: string;
    titleBottom: string;
    subtitle: string;
    button: { label: string; href: string };
    imageAlt: string;
  };
  calendar: {
    title: string;
    bookingUrl: string;
  };
  footer: {
    wordmark: string;
    tagline: string;
    phone: string;
    phoneLink: string;
    instagram: string;
    instagramLabel: string;
    address: string;
    postalCode: string;
    city: string;
    nav: Array<{ label: string; href: string }>;
    legal: Array<{ label: string; href: string }>;
    credits: string;
  };
}
