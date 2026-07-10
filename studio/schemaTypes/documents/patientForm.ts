import { defineField, defineType } from "sanity"

export const patientForm = defineType({
  name: "patientForm",
  title: "Patient Form",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({
      name: "category",
      type: "string",
      options: {
        list: [
          { title: "Fitness & Wellness", value: "fitness" },
          { title: "Physical Therapy", value: "physical-therapy" },
          { title: "Pediatric", value: "pediatric" },
          { title: "Class Registration", value: "class" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: "href", type: "string", description: "Path to the downloadable file, e.g. /forms/example.pdf" }),
    defineField({ name: "fileLabel", type: "string", description: "File type label shown to users, e.g. PDF or DOCX" }),
  ],
  preview: {
    select: { title: "title", subtitle: "category" },
  },
})
