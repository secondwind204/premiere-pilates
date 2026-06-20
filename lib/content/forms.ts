export type FormDownload = {
  title: string
  description: string
  category: "fitness" | "physical-therapy" | "pediatric" | "functional-scale" | "class"
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
    title: "Insurance Information",
    description: "Insurance information form for new physical therapy patients.",
    category: "physical-therapy",
    href: "/forms/639143-Premiere_Pilates_Insurance_Information.docx",
    fileLabel: "DOCX",
  },
  {
    title: "HIPAA Notice",
    description: "HIPAA privacy notice for all patients.",
    category: "physical-therapy",
    href: "/forms/639145-Premiere_Pilates_HIPAAnotice.docx",
    fileLabel: "DOCX",
  },
  {
    title: "Patient Consent",
    description: "Patient consent form for treatment.",
    category: "physical-therapy",
    href: "/forms/639146-Premiere_Pilates_Patient_Consent.docx",
    fileLabel: "DOCX",
  },
  {
    title: "Release Of Liability",
    description: "Release of liability waiver.",
    category: "physical-therapy",
    href: "/forms/639148-Premiere_Pilates_Release_Of_Liability.doc",
    fileLabel: "DOC",
  },
  {
    title: "Physical Therapy Referral Form",
    description:
      "To obtain a physical therapy referral from your physician, ask your physician to complete this form and fax it to our office.",
    category: "physical-therapy",
    href: "/forms/645334-Physical_Therapy__Referral_Form_.docx",
    fileLabel: "DOCX",
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
    title: "Oswestry Low Back Pain Scale",
    description: "Functional scale for low back pain — complete to the best of your ability.",
    category: "functional-scale",
    href: "/forms/639133-Oswestry_Low_Back_Pain_Scale.pdf",
    fileLabel: "PDF",
  },
  {
    title: "Back Index",
    description: "Functional scale for back conditions.",
    category: "functional-scale",
    href: "/forms/639129-Back_Index.pdf",
    fileLabel: "PDF",
  },
  {
    title: "Lower Extremity Functional Scale",
    description: "Functional scale for lower extremity conditions.",
    category: "functional-scale",
    href: "/forms/639131-Lower_Extremity_Functional_Scale.pdf",
    fileLabel: "PDF",
  },
  {
    title: "Neck Index",
    description: "Functional scale for neck conditions.",
    category: "functional-scale",
    href: "/forms/639134-Neck_Index.pdf",
    fileLabel: "PDF",
  },
  {
    title: "Pelvic Index",
    description: "Functional scale for pelvic conditions.",
    category: "functional-scale",
    href: "/forms/639138-Pelvic_Index.pdf",
    fileLabel: "PDF",
  },
  {
    title: "Quick DASH Upper Extremity Scale",
    description: "Functional scale for upper extremity conditions.",
    category: "functional-scale",
    href: "/forms/639139-Qucik_DASH_Upper_Extremity_Scale.pdf",
    fileLabel: "PDF",
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
  { id: "functional-scale", label: "Functional Scales" },
  { id: "class", label: "Class Registration" },
] as const
