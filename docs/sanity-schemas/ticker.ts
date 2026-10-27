// @ts-nocheck
import { defineField, defineType, type Rule } from "sanity";

export const ticker = defineType({
  name: "ticker",
  title: "Ticker (bandeau défilant)",
  type: "document",
  fields: [
    defineField({
      name: "items",
      title: "Éléments du ticker",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule: Rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: { items: "items" },
    prepare({ items }: { items?: string[] }) {
      return { title: `Ticker: ${items?.length ?? 0} éléments` };
    },
  },
});
