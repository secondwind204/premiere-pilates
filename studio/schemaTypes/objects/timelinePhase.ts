import { defineField, defineType } from "sanity"

export const timelinePhase = defineType({
  name: "timelinePhase",
  title: "Timeline Phase",
  type: "object",
  fields: [
    defineField({ name: "phase", type: "string", validation: (r) => r.required() }),
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "items",
      type: "array",
      of: [{ type: "string" }],
      validation: (r) => r.required().min(1),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "phase" },
  },
})
