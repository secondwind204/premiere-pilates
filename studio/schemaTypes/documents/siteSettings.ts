import { defineField, defineType } from "sanity"

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "tagline", type: "string" }),
    defineField({ name: "description", type: "text", rows: 4 }),
    defineField({ name: "phone", type: "string" }),
    defineField({ name: "phoneHref", type: "string" }),
    defineField({ name: "fax", type: "string" }),
    defineField({ name: "email", type: "string" }),
    defineField({ name: "contactFormEmail", type: "string" }),
    defineField({
      name: "address",
      type: "object",
      fields: [
        defineField({ name: "street", type: "string" }),
        defineField({ name: "city", type: "string" }),
        defineField({ name: "state", type: "string" }),
        defineField({ name: "zip", type: "string" }),
        defineField({ name: "full", type: "string" }),
      ],
    }),
    defineField({ name: "mapsUrl", type: "url" }),
    defineField({ name: "hoursDisplay", type: "string" }),
    defineField({ name: "serviceAreas", type: "array", of: [{ type: "string" }] }),
    defineField({
      name: "googleReviews",
      type: "object",
      fields: [
        defineField({ name: "rating", type: "number" }),
        defineField({ name: "ratingDisplay", type: "string" }),
        defineField({ name: "count", type: "number" }),
        defineField({ name: "url", type: "url" }),
      ],
    }),
    defineField({ name: "lastReviewed", type: "date" }),
    defineField({ name: "differentiators", type: "array", of: [{ type: "string" }] }),
    defineField({
      name: "owner",
      type: "object",
      fields: [
        defineField({ name: "name", type: "string" }),
        defineField({ name: "title", type: "string" }),
        defineField({ name: "bio", type: "text", rows: 4 }),
      ],
    }),
  ],
})
