// @ts-nocheck
import { defineField, defineType, type Rule } from "sanity";

export const nav = defineType({
  name: "nav",
  title: "Navigation",
  type: "document",
  fields: [
    defineField({
      name: "links",
      title: "Liens de navigation",
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
          preview: {
            select: { title: "label" },
            prepare({ title }: { title: string }) {
              return { title };
            },
          },
        },
      ],
      validation: (rule: Rule) => rule.required().min(1),
    }),
    defineField({
      name: "cta",
      title: "CTA de navigation",
      type: "object",
      fields: [
        { name: "label", type: "string", title: "Label" },
        { name: "href", type: "string", title: "Lien" },
      ],
      validation: (rule: Rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "links" },
    prepare({ title }: { title?: Array<{ label: string; href: string }> }) {
      return { title: `Navigation: ${title?.length ?? 0} liens` };
    },
  },
});
