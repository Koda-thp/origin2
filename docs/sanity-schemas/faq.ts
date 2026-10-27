// @ts-nocheck
import { defineField, defineType, type Rule } from "sanity";

export const faq = defineType({
  name: "faq",
  title: "FAQ",
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
    defineField({
      name: "items",
      title: "Questions/Réponses",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "question",
              type: "string",
              title: "Question",
              validation: (rule: Rule) => rule.required(),
            },
            {
              name: "answer",
              type: "text",
              title: "Réponse",
              rows: 4,
              validation: (rule: Rule) => rule.required(),
            },
          ],
          preview: {
            select: { title: "question" },
            prepare({ title }: { title: string }) {
              return { title };
            },
          },
        },
      ],
      validation: (rule: Rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: { title: "titleTop", subtitle: "titleScript" },
    prepare({ title, subtitle }: { title: string; subtitle: string }) {
      return { title: `${title} ${subtitle}` };
    },
  },
});
