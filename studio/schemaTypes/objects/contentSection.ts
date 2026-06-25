import { defineField, defineType } from "sanity"

export const contentSection = defineType({
  name: "contentSection",
  title: "Content Section",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "content", type: "text", rows: 6, validation: (r) => r.required() }),
  ],
  preview: {
    select: { title: "title" },
  },
})
