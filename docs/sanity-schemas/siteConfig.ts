// @ts-nocheck
import { defineField, defineType, type Rule } from "sanity";

export const siteConfig = defineType({
  name: "siteConfig",
  title: "Configuration du site",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nom du site",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "baseline",
      title: "Baseline",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "city",
      title: "Ville",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description SEO",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
      validation: (rule: Rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "baseline" },
    prepare({ title, subtitle }: { title: string; subtitle: string }) {
      return { title, subtitle };
    },
  },
});
