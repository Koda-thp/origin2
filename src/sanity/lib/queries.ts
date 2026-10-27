import { groq } from "next-sanity";

export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0] {
    _id,
    _type,
    site,
    images {
      logo,
      hero,
      founderMain,
      founderAlt,
      faq,
      cta,
      studioMain,
      studioGallery[]
    },
    nav {
      links[] {
        label,
        href
      },
      cta {
        label,
        href
      }
    },
    hero {
      eyebrow,
      titleTop,
      titleScript,
      titleBottom,
      subtitle,
      ctaPrimary {
        label,
        href
      },
      ctaSecondary {
        label,
        href
      },
      annotation,
      imageAlt
    },
    method {
      titleTop,
      titleScript,
      introduction,
      features[] {
        title,
        description
      },
      benefits {
        title,
        items[]
      },
      differentiation {
        title,
        text
      }
    },
    studio {
      titleTop,
      titleScript,
      introduction,
      ambiance {
        title,
        text,
        highlights[] {
          label,
          description
        }
      },
      location {
        title,
        address,
        postalCode,
        city,
        country,
        mapEmbedUrl,
        parking
      },
      imageMainAlt
    },
    founder {
      script,
      name,
      title,
      titleScript,
      titleSuffix,
      role,
      bio[],
      cta {
        label,
        href
      },
      imageMainAlt,
      imageAltAlt
    },
    concept {
      titleTop,
      titleScript,
      titleBottom,
      forYou {
        title,
        items[]
      },
      notForYou {
        title,
        items[]
      }
    },
    pricing {
      backgroundWord,
      titleScript,
      bookingUrl,
      categories[] {
        name,
        variant,
        items[] {
          name,
          price,
          period
        }
      }
    },
    ticker {
      items[]
    },
    values {
      titleTop,
      titleScript,
      titleBottom,
      items[] {
        title,
        description
      }
    },
    faq {
      titleTop,
      titleScript,
      imageAlt,
      items[] {
        question,
        answer
      }
    },
    cta {
      titleTop,
      titleScript,
      titleBottom,
      subtitle,
      button {
        label,
        href
      },
      imageAlt
    },
    calendar {
      title,
      bookingUrl
    },
    footer {
      wordmark,
      tagline,
      phone,
      phoneLink,
      instagram,
      instagramLabel,
      address,
      postalCode,
      city,
      nav[] {
        label,
        href
      },
      legal[] {
        label,
        href
      },
      credits
    }
  }
`;
