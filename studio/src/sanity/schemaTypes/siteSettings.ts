import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Paramètres du site",
  type: "document",
  fields: [
    defineField({
      name: "site",
      title: "Informations générales",
      type: "object",
      fields: [
        defineField({ name: "name", title: "Nom", type: "string" }),
        defineField({ name: "baseline", title: "Baseline", type: "string" }),
        defineField({ name: "city", title: "Ville", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text" }),
      ],
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "object",
      fields: [
        defineField({ name: "logo", title: "Logo", type: "image" }),
        defineField({ name: "hero", title: "Hero", type: "image" }),
        defineField({ name: "founderMain", title: "Fondatrice (principale)", type: "image" }),
        defineField({ name: "founderAlt", title: "Fondatrice (alternative)", type: "image" }),
        defineField({ name: "faq", title: "FAQ", type: "image" }),
        defineField({ name: "cta", title: "CTA", type: "image" }),
        defineField({ name: "studioMain", title: "Studio (principal)", type: "image" }),
        defineField({
          name: "studioGallery",
          title: "Studio (galerie)",
          type: "array",
          of: [{ type: "image" }],
        }),
      ],
    }),
    defineField({
      name: "nav",
      title: "Navigation",
      type: "object",
      fields: [
        defineField({
          name: "links",
          title: "Liens",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "label", title: "Label", type: "string" }),
                defineField({ name: "href", title: "Lien", type: "string" }),
              ],
            },
          ],
        }),
        defineField({
          name: "cta",
          title: "Bouton CTA",
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "href", title: "Lien", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "hero",
      title: "Section Hero",
      type: "object",
      fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
        defineField({ name: "titleTop", title: "Titre (haut)", type: "string" }),
        defineField({ name: "titleScript", title: "Titre (script)", type: "string" }),
        defineField({ name: "titleBottom", title: "Titre (bas)", type: "string" }),
        defineField({ name: "subtitle", title: "Sous-titre", type: "text" }),
        defineField({
          name: "ctaPrimary",
          title: "CTA principal",
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "href", title: "Lien", type: "string" }),
          ],
        }),
        defineField({
          name: "ctaSecondary",
          title: "CTA secondaire",
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "href", title: "Lien", type: "string" }),
          ],
        }),
        defineField({ name: "annotation", title: "Annotation", type: "string" }),
        defineField({ name: "imageAlt", title: "Alt image", type: "string" }),
      ],
    }),
    defineField({
      name: "method",
      title: "Section Méthode",
      type: "object",
      fields: [
        defineField({ name: "titleTop", title: "Titre (haut)", type: "string" }),
        defineField({ name: "titleScript", title: "Titre (script)", type: "string" }),
        defineField({ name: "introduction", title: "Introduction", type: "text" }),
        defineField({
          name: "features",
          title: "Caractéristiques",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "title", title: "Titre", type: "string" }),
                defineField({ name: "description", title: "Description", type: "text" }),
              ],
            },
          ],
        }),
        defineField({
          name: "benefits",
          title: "Bienfaits",
          type: "object",
          fields: [
            defineField({ name: "title", title: "Titre", type: "string" }),
            defineField({
              name: "items",
              title: "Éléments",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
        }),
        defineField({
          name: "differentiation",
          title: "Différenciation",
          type: "object",
          fields: [
            defineField({ name: "title", title: "Titre", type: "string" }),
            defineField({ name: "text", title: "Texte", type: "text" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "studio",
      title: "Section Studio",
      type: "object",
      fields: [
        defineField({ name: "titleTop", title: "Titre (haut)", type: "string" }),
        defineField({ name: "titleScript", title: "Titre (script)", type: "string" }),
        defineField({ name: "introduction", title: "Introduction", type: "text" }),
        defineField({
          name: "ambiance",
          title: "Ambiance",
          type: "object",
          fields: [
            defineField({ name: "title", title: "Titre", type: "string" }),
            defineField({ name: "text", title: "Texte", type: "text" }),
            defineField({
              name: "highlights",
              title: "Points forts",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({ name: "label", title: "Label", type: "string" }),
                    defineField({ name: "description", title: "Description", type: "string" }),
                  ],
                },
              ],
            }),
          ],
        }),
        defineField({
          name: "location",
          title: "Localisation",
          type: "object",
          fields: [
            defineField({ name: "title", title: "Titre", type: "string" }),
            defineField({ name: "address", title: "Adresse", type: "string" }),
            defineField({ name: "postalCode", title: "Code postal", type: "string" }),
            defineField({ name: "city", title: "Ville", type: "string" }),
            defineField({ name: "country", title: "Pays", type: "string" }),
            defineField({ name: "mapEmbedUrl", title: "URL embed Google Maps", type: "url" }),
            defineField({ name: "parking", title: "Parking", type: "string" }),
          ],
        }),
        defineField({ name: "imageMainAlt", title: "Alt image principale", type: "string" }),
      ],
    }),
    defineField({
      name: "founder",
      title: "Section Fondatrice",
      type: "object",
      fields: [
        defineField({ name: "script", title: "Script", type: "string" }),
        defineField({ name: "name", title: "Prénom", type: "string" }),
        defineField({ name: "title", title: "Titre", type: "string" }),
        defineField({ name: "titleScript", title: "Titre (script)", type: "string" }),
        defineField({ name: "titleSuffix", title: "Titre (suffixe)", type: "string" }),
        defineField({ name: "role", title: "Rôle", type: "string" }),
        defineField({
          name: "bio",
          title: "Biographie",
          type: "array",
          of: [{ type: "text" }],
        }),
        defineField({
          name: "cta",
          title: "CTA",
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "href", title: "Lien", type: "string" }),
          ],
        }),
        defineField({ name: "imageMainAlt", title: "Alt image principale", type: "string" }),
        defineField({ name: "imageAltAlt", title: "Alt image alternative", type: "string" }),
      ],
    }),
    defineField({
      name: "concept",
      title: "Section Concept",
      type: "object",
      fields: [
        defineField({ name: "titleTop", title: "Titre (haut)", type: "string" }),
        defineField({ name: "titleScript", title: "Titre (script)", type: "string" }),
        defineField({ name: "titleBottom", title: "Titre (bas)", type: "string" }),
        defineField({
          name: "forYou",
          title: "Pour toi si",
          type: "object",
          fields: [
            defineField({ name: "title", title: "Titre", type: "string" }),
            defineField({
              name: "items",
              title: "Éléments",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
        }),
        defineField({
          name: "notForYou",
          title: "Pas pour toi si",
          type: "object",
          fields: [
            defineField({ name: "title", title: "Titre", type: "string" }),
            defineField({
              name: "items",
              title: "Éléments",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "pricing",
      title: "Section Tarifs",
      type: "object",
      fields: [
        defineField({ name: "backgroundWord", title: "Mot de fond", type: "string" }),
        defineField({ name: "titleScript", title: "Titre (script)", type: "string" }),
        defineField({ name: "bookingUrl", title: "URL de réservation", type: "url" }),
        defineField({
          name: "categories",
          title: "Catégories",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "name", title: "Nom", type: "string" }),
                defineField({
                  name: "variant",
                  title: "Variante",
                  type: "string",
                  options: {
                    list: [
                      { title: "Dark", value: "dark" },
                      { title: "Featured", value: "featured" },
                      { title: "Light", value: "light" },
                    ],
                  },
                }),
                defineField({
                  name: "items",
                  title: "Tarifs",
                  type: "array",
                  of: [
                    {
                      type: "object",
                      fields: [
                        defineField({ name: "name", title: "Nom", type: "string" }),
                        defineField({ name: "price", title: "Prix", type: "string" }),
                        defineField({ name: "period", title: "Période", type: "string" }),
                      ],
                    },
                  ],
                }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "ticker",
      title: "Section Ticker",
      type: "object",
      fields: [
        defineField({
          name: "items",
          title: "Éléments",
          type: "array",
          of: [{ type: "string" }],
        }),
      ],
    }),
    defineField({
      name: "values",
      title: "Section Valeurs",
      type: "object",
      fields: [
        defineField({ name: "titleTop", title: "Titre (haut)", type: "string" }),
        defineField({ name: "titleScript", title: "Titre (script)", type: "string" }),
        defineField({ name: "titleBottom", title: "Titre (bas)", type: "string" }),
        defineField({
          name: "items",
          title: "Valeurs",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "title", title: "Titre", type: "string" }),
                defineField({ name: "description", title: "Description", type: "string" }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "faq",
      title: "Section FAQ",
      type: "object",
      fields: [
        defineField({ name: "titleTop", title: "Titre (haut)", type: "string" }),
        defineField({ name: "titleScript", title: "Titre (script)", type: "string" }),
        defineField({ name: "imageAlt", title: "Alt image", type: "string" }),
        defineField({
          name: "items",
          title: "Questions",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "question", title: "Question", type: "string" }),
                defineField({ name: "answer", title: "Réponse", type: "text" }),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "cta",
      title: "Section CTA",
      type: "object",
      fields: [
        defineField({ name: "titleTop", title: "Titre (haut)", type: "string" }),
        defineField({ name: "titleScript", title: "Titre (script)", type: "string" }),
        defineField({ name: "titleBottom", title: "Titre (bas)", type: "string" }),
        defineField({ name: "subtitle", title: "Sous-titre", type: "text" }),
        defineField({
          name: "button",
          title: "Bouton",
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "href", title: "Lien", type: "string" }),
          ],
        }),
        defineField({ name: "imageAlt", title: "Alt image", type: "string" }),
      ],
    }),
    defineField({
      name: "calendar",
      title: "Section Calendar",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Titre", type: "string" }),
        defineField({ name: "bookingUrl", title: "URL de réservation", type: "url" }),
      ],
    }),
    defineField({
      name: "footer",
      title: "Footer",
      type: "object",
      fields: [
        defineField({ name: "wordmark", title: "Wordmark", type: "string" }),
        defineField({ name: "tagline", title: "Tagline", type: "string" }),
        defineField({ name: "phone", title: "Téléphone", type: "string" }),
        defineField({ name: "phoneLink", title: "Lien téléphone", type: "string" }),
        defineField({ name: "instagram", title: "Instagram", type: "url" }),
        defineField({ name: "instagramLabel", title: "Label Instagram", type: "string" }),
        defineField({ name: "address", title: "Adresse", type: "string" }),
        defineField({ name: "postalCode", title: "Code postal", type: "string" }),
        defineField({ name: "city", title: "Ville", type: "string" }),
        defineField({
          name: "nav",
          title: "Navigation",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "label", title: "Label", type: "string" }),
                defineField({ name: "href", title: "Lien", type: "string" }),
              ],
            },
          ],
        }),
        defineField({
          name: "legal",
          title: "Légal",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "label", title: "Label", type: "string" }),
                defineField({ name: "href", title: "Lien", type: "string" }),
              ],
            },
          ],
        }),
        defineField({ name: "credits", title: "Crédits", type: "string" }),
      ],
    }),
  ],
});
