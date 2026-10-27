// @ts-nocheck
import { defineField, defineType, type Rule } from "sanity";

export const founder = defineType({
  name: "founder",
  title: "Fondatrice",
  type: "document",
  fields: [
    defineField({
      name: "script",
      title: "Texte script (ex: Rencontrez)",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "name",
      title: "Prénom",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "titleScript",
      title: "Titre script (ex: d')",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "titleSuffix",
      title: "Suffixe titre (ex: Origin)",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "role",
      title: "Rôle",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "bio",
      title: "Biographie",
      type: "array",
      of: [{ type: "text" }],
      validation: (rule: Rule) => rule.required().min(1),
    }),
    defineField({
      name: "cta",
      title: "CTA",
      type: "object",
      fields: [
        { name: "label", type: "string", title: "Label" },
        { name: "href", type: "string", title: "Lien" },
      ],
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "imageMain",
      title: "Image principale",
      type: "image",
      options: { hotspot: true },
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "imageMainAlt",
      title: "Texte alternatif image principale",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "imageAlt",
      title: "Image secondaire",
      type: "image",
      options: { hotspot: true },
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "imageAltAlt",
      title: "Texte alternatif image secondaire",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "title" },
    prepare({ title, subtitle }: { title: string; subtitle: string }) {
      return { title, subtitle };
    },
  },
});
