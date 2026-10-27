// @ts-nocheck
import { defineField, defineType, type Rule } from "sanity";

export const pricing = defineType({
  name: "pricing",
  title: "Tarifs",
  type: "document",
  fields: [
    defineField({
      name: "backgroundWord",
      title: "Mot d'arrière-plan (marquee)",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "titleScript",
      title: "Titre script",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: "plans",
      title: "Plans tarifaires",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              type: "string",
              title: "Nom",
              validation: (rule: Rule) => rule.required(),
            },
            {
              name: "price",
              type: "string",
              title: "Prix",
              validation: (rule: Rule) => rule.required(),
            },
            {
              name: "period",
              type: "string",
              title: "Période",
              validation: (rule: Rule) => rule.required(),
            },
            {
              name: "features",
              type: "array",
              of: [{ type: "string" }],
              title: "Fonctionnalités",
              validation: (rule: Rule) => rule.required().min(1),
            },
            {
              name: "cta",
              type: "string",
              title: "Label CTA",
              validation: (rule: Rule) => rule.required(),
            },
            {
              name: "variant",
              type: "string",
              title: "Variante",
              options: {
                list: [
                  { title: "Dark", value: "dark" },
                  { title: "Featured", value: "featured" },
                  { title: "Light", value: "light" },
                ],
                layout: "radio",
              },
              validation: (rule: Rule) => rule.required(),
            },
          ],
          preview: {
            select: { title: "name", subtitle: "price" },
            prepare({ title, subtitle }: { title: string; subtitle: string }) {
              return { title, subtitle };
            },
          },
        },
      ],
      validation: (rule: Rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: { title: "titleScript" },
    prepare({ title }: { title: string }) {
      return { title };
    },
  },
});
