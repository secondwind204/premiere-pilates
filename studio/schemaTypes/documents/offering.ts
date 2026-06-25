import { defineField, defineType } from "sanity"

export const offering = defineType({
  name: "offering",
  title: "Get Started Page",
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
    defineField({ name: "subheadline", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "intro",
      type: "array",
      of: [{ type: "text", rows: 4 }],
      validation: (r) => r.required().min(1),
    }),
    defineField({ name: "approachTitle", type: "string", validation: (r) => r.required() }),
    defineField({ name: "approachLead", type: "text", rows: 3 }),
    defineField({
      name: "approachItems",
      type: "array",
      of: [{ type: "string" }],
      validation: (r) => r.required().min(1),
    }),
    defineField({ name: "secondarySection", type: "titledItems" }),
    defineField({ name: "conditionsOrBenefits", type: "titledItems" }),
    defineField({ name: "quote", type: "text", rows: 3 }),
    defineField({
      name: "whyChoose",
      type: "array",
      of: [{ type: "string" }],
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: "pricing",
      type: "array",
      of: [{ type: "pricingItem" }],
      validation: (r) => r.required().min(1),
    }),
    defineField({ name: "pricingPackages", type: "array", of: [{ type: "pricingItem" }] }),
    defineField({ name: "insuranceNote", type: "text", rows: 4 }),
    defineField({ name: "ctaTitle", type: "string", validation: (r) => r.required() }),
    defineField({ name: "ctaDescription", type: "string", validation: (r) => r.required() }),
  ],
  preview: {
    select: { title: "headline", subtitle: "slug.current" },
  },
})
