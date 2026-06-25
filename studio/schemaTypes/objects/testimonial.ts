import { defineField, defineType } from "sanity"

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "object",
  fields: [
    defineField({ name: "quote", type: "text", rows: 4, validation: (r) => r.required() }),
    defineField({ name: "author", type: "string", validation: (r) => r.required() }),
  ],
  preview: {
    select: { title: "author", subtitle: "quote" },
  },
})
