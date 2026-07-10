export type FormDownload = {
  title: string
  description: string
  category: "fitness" | "physical-therapy" | "pediatric" | "class"
  href?: string
  fileLabel?: string
}

export const intakeForms: FormDownload[] = [
  {
    title: "Fitness & Wellness Client Questionnaire",
    description:
      "All Fitness & Wellness clients are required to undergo a Pilates Wellness Assessment consisting of a musculoskeletal screening and postural analysis.",
    category: "fitness",
    href: "/forms/639150-Premiere_Pilates_Fitness__Wellness_Client_Questionnaire.docx",
    fileLabel: "DOCX",
  },
  {
    title: "Medical History Questionnaire",
    description: "Complete prior to your initial evaluation if you are a Physical Therapy patient.",
    category: "physical-therapy",
    href: "/forms/639142-Premiere_Pilates_Medical_History_Questionnaire.doc",
    fileLabel: "DOC",
  },
  {
    title: "Release Of Liability",
    description: "Release of liability waiver.",
    category: "physical-therapy",
    href: "/forms/639148-Premiere_Pilates_Release_Of_Liability.doc",
    fileLabel: "DOC",
  },
  {
    title: "Pediatric Health & Fitness Questionnaire",
    description: "To be completed by a Parent or Guardian if the patient is a minor.",
    category: "pediatric",
    href: "/forms/639151-Premiere_Pilates_Pediatric_Health__Fitness_Questionnaire.doc",
    fileLabel: "DOC",
  },
  {
    title: "Pediatric Liability Waiver",
    description: "Liability waiver for pediatric patients.",
    category: "pediatric",
    href: "/forms/639152-Pediatric_Liability_Waiver.docx",
    fileLabel: "DOCX",
  },
  {
    title: "Therapilates Registration Form",
    description: "Complete prior to coming to class or upon your arrival.",
    category: "class",
    href: "/forms/642998-Therapilates_Registration_Form.pdf",
    fileLabel: "PDF",
  },
]

export const formCategories = [
  { id: "fitness", label: "Fitness & Wellness" },
  { id: "physical-therapy", label: "Physical Therapy Patients" },
  { id: "pediatric", label: "Pediatric Patients" },
  { id: "class", label: "Class Registration" },
] as const
