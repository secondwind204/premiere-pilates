import { defineField, defineType } from "sanity"

export const location = defineType({
  name: "location",
  title: "Location Page",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "metaDescription", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({ name: "headline", type: "string", validation: (r) => r.required() }),
    defineField({ name: "subheadline", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({
      name: "intro",
      type: "array",
      of: [{ type: "text", rows: 4 }],
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: "highlights",
      type: "array",
      of: [{ type: "string" }],
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: "nearbyAreas",
      type: "array",
      of: [{ type: "string" }],
      validation: (r) => r.required().min(1),
    }),
    defineField({ name: "faqs", type: "array", of: [{ type: "faq" }] }),
  ],
  preview: {
    select: { title: "name", subtitle: "slug.current" },
  },
})
