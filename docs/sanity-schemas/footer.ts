// @ts-nocheck
import { defineField, defineType, type Rule } from "sanity";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "wordmark",
      title: "Wordmark (texte géant)",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "nav",
      title: "Navigation du footer",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "label",
              type: "string",
              title: "Label",
              validation: (rule: Rule) => rule.required(),
            },
            {
              name: "href",
              type: "string",
              title: "Lien",
              validation: (rule: Rule) => rule.required(),
            },
          ],
        },
      ],
      validation: (rule: Rule) => rule.required().min(1),
    }),
    defineField({
      name: "legal",
      title: "Liens légaux",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "label",
              type: "string",
              title: "Label",
              validation: (rule: Rule) => rule.required(),
            },
            {
              name: "href",
              type: "string",
              title: "Lien",
              validation: (rule: Rule) => rule.required(),
            },
          ],
        },
      ],
      validation: (rule: Rule) => rule.required().min(1),
    }),
    defineField({
      name: "credits",
      title: "Crédits",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "wordmark" },
    prepare({ title }: { title: string }) {
      return { title };
    },
  },
});
