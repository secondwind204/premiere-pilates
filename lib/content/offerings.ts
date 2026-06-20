export type PricingItem = {
  label: string
  price: string
  note?: string
}

export type OfferingPage = {
  slug: string
  title: string
  metaDescription: string
  headline: string
  subheadline: string
  intro: string[]
  approachTitle: string
  approachLead?: string
  approachItems: string[]
  secondarySection?: {
    title: string
    items: string[]
  }
  conditionsOrBenefits?: {
    title: string
    items: string[]
  }
  quote?: string
  whyChoose: string[]
  pricing: PricingItem[]
  pricingPackages?: PricingItem[]
  insuranceNote?: string
  ctaTitle: string
  ctaDescription: string
}

export const physicalTherapyOffering: OfferingPage = {
  slug: "physical-therapy",
  title: "Private Physical Therapy",
  metaDescription:
    "Private one-on-one physical therapy in St. Augustine. Comprehensive evaluation, personalized treatment, and direct-access care with Nicole Tristram, PT.",
  headline: "Physical Therapy",
  subheadline: "Private, One-on-One Physical Therapy Designed Around You",
  intro: [
    "At Premiere Pilates Rehabilitation & Fitness, physical therapy is never rushed or generic. Every session is private, one-on-one, and fully tailored to your body, condition, and goals.",
    "Whether you're recovering from surgery, dealing with chronic pain, or working to restore mobility and strength, Nicole provides personalized treatment designed to identify the root cause—not just treat symptoms.",
    "Unlike traditional high-volume clinics, you receive Nicole's full attention for the entire session.",
  ],
  approachTitle: "Our Approach",
  approachLead:
    "Your care begins with a comprehensive initial evaluation to assess movement patterns, posture, strength, mobility, and functional limitations.",
  approachItems: [
    "Manual therapy and soft tissue mobilization",
    "Therapeutic Pilates-based exercise",
    "Neuromuscular re-education",
    "Postural correction",
    "Movement retraining",
    "Pain-relief modalities",
  ],
  secondarySection: {
    title: "Sessions are available in",
    items: ["Private studio sessions", "In-home treatment (by request)", "Office visits (by request)"],
  },
  conditionsOrBenefits: {
    title: "Conditions We Treat",
    items: [
      "Post-surgical rehabilitation",
      "Hip, back, and neck pain",
      "Sacroiliac joint dysfunction",
      "Pelvic floor dysfunction",
      "Pre- and post-natal rehabilitation",
      "Breast cancer recovery",
      "Extremity lymphedema",
      "Fibromyalgia",
      "Osteoporosis",
      "Pediatric physical therapy",
      "Neurological rehabilitation",
      "Performing arts rehabilitation",
    ],
  },
  whyChoose: [
    "Private one-on-one sessions",
    "Whole-body treatment approach",
    "Physical therapy + Pilates expertise",
    "25+ years of clinical experience",
    "Personalized care plans built around your goals",
  ],
  pricing: [
    { label: "Initial Physical Therapy Evaluation (60 min)", price: "$150" },
    { label: "Follow-Up Session (60 min)", price: "$125" },
    { label: "New Client Package (Evaluation + 3 Sessions)", price: "$500" },
  ],
  insuranceNote:
    "Florida is a direct-access state, meaning you can see a physical therapist without a physician referral. Some insurance providers may still require a referral for reimbursement. Premiere Pilates is a Florida Medicare Provider and also accepts major insurance plans.",
  ctaTitle: "Ready to start feeling better?",
  ctaDescription: "Schedule your evaluation today and begin your personalized recovery plan.",
}

export const pilatesOffering: OfferingPage = {
  slug: "pilates",
  title: "Private Pilates Training",
  metaDescription:
    "Private Pilates training in St. Augustine. Personalized assessment, Balanced Body equipment, mat work, and wellness programs with Nicole Tristram, PT.",
  headline: "Private Pilates Training",
  subheadline: "Build Strength, Improve Alignment, and Move Better",
  intro: [
    "Pilates at Premiere Pilates Rehabilitation & Fitness is designed to help you move with greater strength, balance, control, and confidence.",
    "Whether your goal is improving posture, preventing injury, enhancing athletic performance, or supporting long-term wellness, every session is built around your individual needs.",
    "This is not a one-size-fits-all workout. Every program begins with a personalized assessment so Nicole can understand your posture, movement patterns, strength, and areas of imbalance.",
  ],
  approachTitle: "Our Pilates Approach",
  approachLead: "Training combines:",
  approachItems: [
    "Traditional Pilates mat exercises",
    "Balanced Body Pilates equipment",
    "Core strengthening",
    "Postural alignment",
    "Flexibility and mobility work",
    "Functional movement training",
  ],
  secondarySection: {
    title: "Programs are designed for",
    items: ["Beginners", "Active adults", "Injury prevention", "Rehabilitation support", "Long-term wellness"],
  },
  conditionsOrBenefits: {
    title: "Benefits of Pilates",
    items: [
      "Core strength",
      "Posture and alignment",
      "Balance and coordination",
      "Flexibility and mobility",
      "Body awareness",
      "Overall strength and wellness",
    ],
  },
  quote:
    "In 10 sessions you'll feel the difference. In 20 sessions you'll see the difference. In 30 sessions you'll have a new body.",
  whyChoose: [
    "Decades of physical therapy experience combined with advanced Pilates training",
    "Highly personalized programs focused on long-term wellness",
    "Private, duet, and package options",
    "Whole-body assessment before every program",
    "Sustainable results — feel stronger, move better, live healthier",
  ],
  pricing: [
    { label: "Initial Musculoskeletal Assessment & Postural Analysis", price: "$90" },
    { label: "Pilates Wellness Session", price: "$85" },
    { label: "Private Pilates Session", price: "$75" },
    { label: "Duet Session", price: "$45/person" },
  ],
  pricingPackages: [
    { label: "4 Sessions", price: "$285" },
    { label: "8 Sessions", price: "$575" },
  ],
  ctaTitle: "Ready to get started?",
  ctaDescription: "Schedule your initial assessment today.",
}

export const getStartedPaths = [
  {
    title: "Physical Therapy",
    description: "Private one-on-one PT, pricing, insurance, and conditions we treat.",
    href: "/get-started/physical-therapy",
  },
  {
    title: "Private Pilates Training",
    description: "Personalized Pilates programs, packages, and wellness pricing.",
    href: "/get-started/pilates",
  },
  {
    title: "Patient Forms",
    description: "Download intake forms, functional scales, and registration paperwork.",
    href: "/get-started/forms",
  },
] as const

export function getOfferingBySlug(slug: string): OfferingPage | undefined {
  if (slug === "physical-therapy") return physicalTherapyOffering
  if (slug === "pilates") return pilatesOffering
  return undefined
}
