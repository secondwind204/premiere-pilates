import { defineField, defineType } from "sanity"

export const categoryItems = defineType({
  name: "categoryItems",
  title: "Category with Items",
  type: "object",
  fields: [
    defineField({ name: "category", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "items",
      type: "array",
      of: [{ type: "string" }],
      validation: (r) => r.required().min(1),
    }),
  ],
  preview: {
    select: { title: "category" },
  },
})
