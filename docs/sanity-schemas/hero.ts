// @ts-nocheck
import { defineField, defineType, type Rule } from "sanity";

export const hero = defineType({
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Eyebrow (sous-titre haut)",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "titleTop",
      title: "Titre (partie haute)",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "titleScript",
      title: "Titre (partie script)",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "titleBottom",
      title: "Titre (partie basse)",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Sous-titre",
      type: "text",
      rows: 3,
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "ctaPrimary",
      title: "CTA principal",
      type: "object",
      fields: [
        { name: "label", type: "string", title: "Label" },
        { name: "href", type: "string", title: "Lien" },
      ],
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "ctaSecondary",
      title: "CTA secondaire",
      type: "object",
      fields: [
        { name: "label", type: "string", title: "Label" },
        { name: "href", type: "string", title: "Lien" },
      ],
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "annotation",
      title: "Annotation (texte manuscrit)",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "imageAlt",
      title: "Texte alternatif de l'image",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "titleTop", subtitle: "titleScript" },
    prepare({ title, subtitle }: { title: string; subtitle: string }) {
      return { title: `${title} ${subtitle}` };
    },
  },
});
