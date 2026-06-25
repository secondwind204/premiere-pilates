import { defineField, defineType } from "sanity"

export const pricingItem = defineType({
  name: "pricingItem",
  title: "Pricing Item",
  type: "object",
  fields: [
    defineField({ name: "label", type: "string", validation: (r) => r.required() }),
    defineField({ name: "price", type: "string", validation: (r) => r.required() }),
    defineField({ name: "note", type: "string" }),
  ],
  preview: {
    select: { title: "label", subtitle: "price" },
  },
})
