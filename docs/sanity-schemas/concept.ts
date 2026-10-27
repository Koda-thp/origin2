// @ts-nocheck
import { defineField, defineType, type Rule } from "sanity";

export const concept = defineType({
  name: "concept",
  title: "Concept",
  type: "document",
  fields: [
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
      name: "forYou",
      title: "Pour toi",
      type: "object",
      fields: [
        {
          name: "title",
          type: "string",
          title: "Titre",
          validation: (rule: Rule) => rule.required(),
        },
        {
          name: "items",
          type: "array",
          of: [{ type: "string" }],
          title: "Éléments",
          validation: (rule: Rule) => rule.required().min(1),
        },
      ],
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "notForYou",
      title: "Pas pour toi",
      type: "object",
      fields: [
        {
          name: "title",
          type: "string",
          title: "Titre",
          validation: (rule: Rule) => rule.required(),
        },
        {
          name: "items",
          type: "array",
          of: [{ type: "string" }],
          title: "Éléments",
          validation: (rule: Rule) => rule.required().min(1),
        },
      ],
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
