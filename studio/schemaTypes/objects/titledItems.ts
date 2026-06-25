import { defineField, defineType } from "sanity"

export const titledItems = defineType({
  name: "titledItems",
  title: "Titled List",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "items",
      type: "array",
      of: [{ type: "string" }],
      validation: (r) => r.required().min(1),
    }),
  ],
  preview: {
    select: { title: "title" },
  },
})
