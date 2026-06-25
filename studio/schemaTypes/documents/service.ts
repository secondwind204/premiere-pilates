import { defineField, defineType } from "sanity"

export const service = defineType({
  name: "service",
  title: "Service Page",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "headline", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "metaDescription", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({ name: "headline", type: "string", validation: (r) => r.required() }),
    defineField({ name: "subheadline", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({ name: "whyItMatters", type: "text", rows: 5, validation: (r) => r.required() }),
    defineField({
      name: "whatWeTreat",
      type: "array",
      of: [{ type: "categoryItems" }],
      validation: (r) => r.required().min(1),
    }),
    defineField({ name: "whatWeTreatLabel", type: "string" }),
    defineField({ name: "whatWeTreatHeading", type: "string" }),
    defineField({ name: "approach", type: "array", of: [{ type: "titledItems" }] }),
    defineField({ name: "timeline", type: "array", of: [{ type: "timelinePhase" }] }),
    defineField({
      name: "differentiators",
      type: "array",
      of: [{ type: "string" }],
      validation: (r) => r.required().min(1),
    }),
    defineField({ name: "testimonials", type: "array", of: [{ type: "testimonial" }] }),
    defineField({ name: "faqs", type: "array", of: [{ type: "faq" }] }),
    defineField({ name: "ctaText", type: "text", rows: 2, validation: (r) => r.required() }),
  ],
  preview: {
    select: { title: "headline", subtitle: "slug.current" },
  },
})
