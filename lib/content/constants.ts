/** Fields that stay in code (URLs, assets, SEO structure) — not in Sanity siteSettings. */
export const SITE_CONSTANTS = {
  shortName: "Premiere Pilates Rehabilitation and Fitness",
  brandLine1: "Premiere Pilates",
  brandLine2: "Rehabilitation and Fitness",
  url: "https://premierepilates.org",
  locale: "en_US",
  scheduleUrl: "/contact",
  ogImage: "/images/unnamed%20(1).webp",
  logo: "/images/premierepilateslogo.png",
  geo: {
    latitude: 29.8947,
    longitude: -81.3145,
  },
  sameAs: ["https://maps.app.goo.gl/EjW6y4F4pVxTp2jV7"],
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
  ],
  knowsAbout: [
    "Physical Therapy",
    "Pilates Rehabilitation",
    "Manual Therapy",
    "Alpha-Stim",
    "Dolphin Neurostim",
    "Post-Surgical Rehabilitation",
    "Chronic Pain Management",
    "Sports Injury Rehabilitation",
    "Women's Health Physical Therapy",
    "Hip and Back Pain",
    "Knee Rehabilitation",
    "Shoulder Injury Recovery",
    "Foot and Ankle Physical Therapy",
    "Plantar Fasciitis",
    "Ankle Sprain Rehabilitation",
    "Oov Rehabilitation",
    "Konnector Pilates",
    "Reformer Pilates",
  ],
  owner: {
    credentials: "PT",
    credentialsList: [
      "Physical Therapist (PT)",
      "Polestar Pilates International Certified",
      "UCF Physical Therapy — Magna Cum Laude, 1998",
    ],
  },
} as const

export const FORM_CATEGORIES = [
  { id: "fitness", label: "Fitness & Wellness" },
  { id: "physical-therapy", label: "Physical Therapy Patients" },
  { id: "pediatric", label: "Pediatric Patients" },
  { id: "functional-scale", label: "Functional Scales" },
  { id: "class", label: "Class Registration" },
] as const

export const CONDITION_CARD_CONFIG = [
  {
    slug: "post-surgical-rehabilitation",
    title: "Post-Surgical Recovery",
    conditions: ["Knee replacement", "Hip replacement", "Shoulder surgery", "Spinal surgery"],
    icon: "stitches",
  },
  {
    slug: "hip-back-pain",
    title: "Hip & Back Pain",
    conditions: ["Hip & back pain", "Sciatica", "Frozen shoulder", "Knee pain"],
    icon: "backPain",
  },
  {
    slug: "womens-health",
    title: "Women's Health",
    conditions: ["Postpartum rehab", "Mastectomy recovery", "Lymphedema", "Pelvic floor & posture"],
    icon: "woman",
  },
  {
    slug: "knee-rehabilitation",
    title: "Knee Rehabilitation",
    conditions: ["Chronic knee pain", "ACL recovery", "Post-replacement", "Stem-cell rehab"],
    icon: "leg",
  },
  {
    slug: "shoulder-injury",
    title: "Shoulder Injury",
    conditions: ["Frozen shoulder", "Rotator cuff", "Impingement", "Post-surgical recovery"],
    icon: "arm",
  },
  {
    slug: "sports-injury",
    title: "Sports Injury",
    conditions: ["Muscle strains", "Overuse injuries", "Return-to-sport", "Tendon injuries"],
    icon: "traumatism",
  },
  {
    slug: "foot-ankle",
    title: "Foot & Ankle",
    conditions: ["Plantar fasciitis", "Ankle sprains", "Achilles pain", "Heel pain"],
    icon: "foot",
  },
  {
    slug: "chronic-pain",
    title: "Chronic Pain Management",
    conditions: ["Persistent pain", "Sciatica", "Fascial restrictions", "Post-injury pain"],
    icon: "painManagement",
  },
] as const
