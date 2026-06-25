import { defineField, defineType } from "sanity"

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({ name: "faqs", type: "array", of: [{ type: "faq" }] }),
    defineField({ name: "strugglePoints", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "testimonials", type: "array", of: [{ type: "testimonial" }] }),
    defineField({
      name: "aboutNicole",
      title: "About Nicole (Homepage Preview)",
      type: "object",
      fields: [
        defineField({ name: "headline", type: "string" }),
        defineField({ name: "subtitle", type: "string" }),
        defineField({ name: "paragraphs", type: "array", of: [{ type: "text", rows: 4 }] }),
        defineField({ name: "fullBio", type: "array", of: [{ type: "text", rows: 4 }] }),
      ],
    }),
    defineField({
      name: "pilatesRehabilitation",
      title: "Pilates Rehabilitation Section",
      type: "object",
      fields: [
        defineField({ name: "title", type: "string" }),
        defineField({ name: "paragraphs", type: "array", of: [{ type: "text", rows: 5 }] }),
        defineField({ name: "equipment", type: "array", of: [{ type: "string" }] }),
      ],
    }),
    defineField({
      name: "pilatesHistory",
      title: "About Pilates (About Page)",
      type: "object",
      fields: [
        defineField({ name: "title", type: "string" }),
        defineField({ name: "intro", type: "text", rows: 4 }),
        defineField({ name: "sections", type: "array", of: [{ type: "contentSection" }] }),
      ],
    }),
  ],
})
