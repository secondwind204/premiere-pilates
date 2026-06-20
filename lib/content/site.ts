export const site = {
  name: "Premiere Pilates Rehabilitation & Fitness",
  shortName: "Premiere Pilates",
  tagline: "One-on-One Physical Therapy & Pilates Rehabilitation",
  description:
    "Private, one-on-one physical therapy and Pilates rehabilitation in St. Augustine, FL. Nicole Tristram, PT brings 25+ years of experience treating post-surgical recovery, chronic pain, sports injuries, and women's health conditions using a whole-body approach.",
  url: "https://premierepilates.org",
  locale: "en_US",
  phone: "(904) 315-0667",
  phoneHref: "tel:+19043150667",
  fax: "(904) 797-8328",
  email: "Nicole@PremierePilates.org",
  contactFormEmail: "premierepilates@gmail.com",
  address: {
    street: "4057 Seminole Point Court",
    city: "St. Augustine",
    state: "FL",
    zip: "32086",
    full: "4057 Seminole Point Court, St. Augustine, FL 32086",
  },
  geo: {
    latitude: 29.8947,
    longitude: -81.3145,
  },
  mapsUrl: "https://maps.app.goo.gl/EjW6y4F4pVxTp2jV7",
  serviceAreas: ["St. Augustine", "Ponte Vedra", "Jacksonville", "St. Johns County"],
  googleReviews: {
    rating: 5.0,
    ratingDisplay: "5.0",
    count: 56,
    url: "https://maps.app.goo.gl/EjW6y4F4pVxTp2jV7",
  },
  sameAs: ["https://maps.app.goo.gl/EjW6y4F4pVxTp2jV7"],
  scheduleUrl: "/contact",
  ogImage: "/images/unnamed%20(1).webp",
  logo: "/images/premierepilateslogo.png",
  lastReviewed: "2026-06-20",
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
  ],
  hoursDisplay: "Monday–Friday, 8:00 AM – 6:00 PM",
  knowsAbout: [
    "Physical Therapy",
    "Pilates Rehabilitation",
    "Post-Surgical Rehabilitation",
    "Chronic Pain Management",
    "Sports Injury Rehabilitation",
    "Women's Health Physical Therapy",
    "Hip and Back Pain",
    "Knee Rehabilitation",
    "Shoulder Injury Recovery",
  ],
  owner: {
    name: "Nicole Tristram",
    title: "Physical Therapist & Pilates Rehabilitation Practitioner",
    credentials: "PT",
    credentialsList: [
      "Physical Therapist (PT)",
      "Polestar Pilates International Certified",
      "UCF Physical Therapy — Magna Cum Laude, 1998",
    ],
    bio: "Nicole Tristram, PT is a physical therapist and Polestar Pilates certified practitioner with 25+ years of experience in St. Augustine, FL, specializing in whole-body rehabilitation, women's health, and post-surgical recovery.",
  },
} as const

export const navLinks = [
  {
    label: "Services",
    href: "/#services",
    children: [
      { label: "Post-Surgical Rehabilitation", href: "/services/post-surgical-rehabilitation" },
      { label: "Hip & Back Pain", href: "/services/hip-back-pain" },
      { label: "Women's Health", href: "/services/womens-health" },
      { label: "Knee Rehabilitation", href: "/services/knee-rehabilitation" },
      { label: "Shoulder Injury Recovery", href: "/services/shoulder-injury" },
      { label: "Sports Injury Recovery", href: "/services/sports-injury" },
      { label: "Chronic Pain Management", href: "/services/chronic-pain" },
    ],
  },
  {
    label: "Get Started",
    href: "/get-started",
    children: [
      { label: "Physical Therapy", href: "/get-started/physical-therapy" },
      { label: "Private Pilates Training", href: "/get-started/pilates" },
      { label: "Patient Forms", href: "/get-started/forms" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const

export const locationLinks = [
  { label: "St. Augustine", href: "/locations/st-augustine" },
  { label: "Ponte Vedra", href: "/locations/ponte-vedra" },
  { label: "Jacksonville", href: "/locations/jacksonville" },
  { label: "St. Johns County", href: "/locations/st-johns-county" },
] as const

export const differentiators = [
  "Private, one-on-one sessions (not group PT)",
  "Whole-body assessment — we find the root cause",
  "PT + Pilates combination (a rare specialty)",
  "25+ years of experience",
  "Alpha-Stem technology",
  "Women's health expertise",
  "No insurance hassles (cash-pay; superbill available)",
] as const
