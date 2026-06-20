import type { FaqItem } from "./services"

export type LocationPage = {
  slug: string
  name: string
  title: string
  metaDescription: string
  headline: string
  subheadline: string
  intro: string[]
  highlights: string[]
  nearbyAreas: string[]
  faqs: FaqItem[]
}

export const locations: LocationPage[] = [
  {
    slug: "st-augustine",
    name: "St. Augustine",
    title: "Physical Therapy & Pilates in St. Augustine, FL",
    metaDescription:
      "Private one-on-one physical therapy and Pilates rehabilitation in St. Augustine, FL. Nicole Tristram, PT treats post-surgical recovery, chronic pain, sports injuries, and women's health with personalized care.",
    headline: "Physical Therapy & Pilates in St. Augustine, FL",
    subheadline:
      "Premiere Pilates is located in St. Augustine and provides private, one-on-one physical therapy and Pilates rehabilitation for residents across the Ancient City and St. Johns County.",
    intro: [
      "Looking for a physical therapist in St. Augustine who gives you their full attention for the entire session? At Premiere Pilates Rehabilitation & Fitness, every appointment is private and personalized — never a crowded clinic where you're one of several patients at once.",
      "Nicole Tristram, PT has 25+ years of experience helping St. Augustine patients recover from surgery, resolve chronic pain, rehabilitate sports injuries, and restore strength through a unique combination of physical therapy and Pilates.",
    ],
    highlights: [
      "Private studio at 4057 Seminole Point Court",
      "One-on-one sessions — full hour with Nicole every time",
      "Post-surgical, chronic pain, sports, and women's health expertise",
      "Direct-access physical therapy — no referral required in Florida",
      "Cash-pay with superbills; Florida Medicare provider",
    ],
    nearbyAreas: ["Vilano Beach", "World Golf Village", "Nocatee", "St. Augustine South"],
    faqs: [
      {
        question: "Where is Premiere Pilates located in St. Augustine?",
        answer:
          "Premiere Pilates is at 4057 Seminole Point Court, St. Augustine, FL 32086 — a private studio setting for one-on-one physical therapy and Pilates sessions.",
      },
      {
        question: "Do I need a referral for physical therapy in St. Augustine?",
        answer:
          "No. Florida is a direct-access state. You can schedule a physical therapy evaluation with Nicole Tristram, PT without a physician referral.",
      },
      {
        question: "What conditions do you treat in St. Augustine?",
        answer:
          "Post-surgical rehabilitation, hip and back pain, knee and shoulder injuries, sports injuries, chronic pain, women's health conditions, and Pilates-based wellness programs.",
      },
    ],
  },
  {
    slug: "ponte-vedra",
    name: "Ponte Vedra",
    title: "Physical Therapy Near Ponte Vedra & Ponte Vedra Beach, FL",
    metaDescription:
      "Private physical therapy and Pilates rehabilitation serving Ponte Vedra and Ponte Vedra Beach, FL. One-on-one care with Nicole Tristram, PT for post-surgical recovery, chronic pain, and sports injuries.",
    headline: "Physical Therapy Serving Ponte Vedra & Ponte Vedra Beach",
    subheadline:
      "Premiere Pilates in nearby St. Augustine provides private, one-on-one physical therapy and Pilates for Ponte Vedra residents seeking personalized rehabilitation and lasting results.",
    intro: [
      "Ponte Vedra and Ponte Vedra Beach residents often travel to St. Augustine for specialized care they can't find in high-volume clinics. Premiere Pilates offers exactly that — private sessions with an experienced physical therapist who treats the whole body, not just your symptoms.",
      "Whether you're recovering from a golf or tennis injury, post-surgical rehabilitation, or chronic hip or back pain, Nicole builds a personalized plan using hands-on therapy and Pilates-based movement retraining.",
    ],
    highlights: [
      "Short drive from Ponte Vedra to our St. Augustine studio",
      "Sports injury and golf-related rehabilitation expertise",
      "Private sessions — no shared treatment bays",
      "Whole-body assessment to find root causes of pain",
      "In-home visits available by request",
    ],
    nearbyAreas: ["Ponte Vedra Beach", "Palm Valley", "Nocatee", "Jacksonville Beach"],
    faqs: [
      {
        question: "How far is Premiere Pilates from Ponte Vedra?",
        answer:
          "Our studio at 4057 Seminole Point Court in St. Augustine is a short drive from Ponte Vedra and Ponte Vedra Beach — convenient for private one-on-one appointments.",
      },
      {
        question: "Do you treat golf and tennis injuries near Ponte Vedra?",
        answer:
          "Yes. Nicole treats sports injuries including shoulder, hip, knee, and back pain common in golf, tennis, and other active lifestyles in the Ponte Vedra area.",
      },
      {
        question: "Can I schedule a physical therapy evaluation from Ponte Vedra?",
        answer:
          "Yes. Call (904) 315-0667 or schedule online. Florida direct-access allows you to begin physical therapy without a physician referral.",
      },
    ],
  },
  {
    slug: "jacksonville",
    name: "Jacksonville",
    title: "Physical Therapy Serving Jacksonville, FL",
    metaDescription:
      "Private one-on-one physical therapy and Pilates rehabilitation serving Jacksonville, FL. Nicole Tristram, PT specializes in post-surgical recovery, chronic pain, and personalized rehabilitation.",
    headline: "Physical Therapy Serving Jacksonville, FL",
    subheadline:
      "Jacksonville patients choose Premiere Pilates in St. Augustine for private, undivided physical therapy and Pilates care that high-volume clinics can't match.",
    intro: [
      "Many Jacksonville patients drive to St. Augustine for the level of personalized care Premiere Pilates provides. Nicole Tristram, PT dedicates a full hour to you alone — assessing movement, treating the root cause, and building a plan for lasting recovery.",
      "From post-surgical rehabilitation to chronic pain, sports injuries, and women's health conditions, Nicole combines 25+ years of physical therapy experience with advanced Pilates rehabilitation for faster, more durable results.",
    ],
    highlights: [
      "Private studio — one patient, one therapist, every session",
      "Post-surgical, chronic pain, and sports rehabilitation",
      "PT + Pilates combination for whole-body recovery",
      "Direct-access care — schedule without a referral",
      "Medicare provider; superbills available for reimbursement",
    ],
    nearbyAreas: ["Southside Jacksonville", "Mandarin", "Jacksonville Beach", "San Marco"],
    faqs: [
      {
        question: "Do Jacksonville patients come to Premiere Pilates?",
        answer:
          "Yes. Many Jacksonville residents travel to our St. Augustine studio for private one-on-one physical therapy and Pilates that isn't available in typical high-volume clinics.",
      },
      {
        question: "What makes Premiere Pilates different from Jacksonville clinic chains?",
        answer:
          "Every session is private with Nicole Tristram, PT for the full hour. Treatment addresses root causes using hands-on therapy and Pilates-based movement — not cookie-cutter exercises in an open gym.",
      },
      {
        question: "How do I schedule from Jacksonville?",
        answer:
          "Call (904) 315-0667 or use our contact page to schedule your initial evaluation at 4057 Seminole Point Court, St. Augustine, FL 32086.",
      },
    ],
  },
  {
    slug: "st-johns-county",
    name: "St. Johns County",
    title: "Physical Therapy in St. Johns County, FL",
    metaDescription:
      "Private physical therapy and Pilates rehabilitation serving all of St. Johns County, FL including St. Augustine, Ponte Vedra, Nocatee, and surrounding communities. One-on-one care with Nicole Tristram, PT.",
    headline: "Physical Therapy Serving St. Johns County, FL",
    subheadline:
      "Premiere Pilates provides private, one-on-one physical therapy and Pilates rehabilitation for patients throughout St. Johns County from our St. Augustine studio.",
    intro: [
      "St. Johns County residents deserve physical therapy that actually fixes the problem — not rushed appointments in crowded clinics. At Premiere Pilates, Nicole Tristram, PT provides undivided, one-on-one care for the full session, every session.",
      "Serving communities across St. Johns County including St. Augustine, Ponte Vedra, Nocatee, and surrounding areas, Nicole treats post-surgical recovery, chronic pain, sports injuries, women's health conditions, and wellness through Pilates.",
    ],
    highlights: [
      "Central St. Johns County location in St. Augustine",
      "One-on-one sessions with 25+ years of experience",
      "Post-surgical, chronic pain, sports, and women's health",
      "Alpha-Stem technology and Pilates-based rehabilitation",
      "Cash-pay, Medicare, and superbill options",
    ],
    nearbyAreas: ["Nocatee", "Fruit Cove", "Julington Creek", "Hastings"],
    faqs: [
      {
        question: "What areas of St. Johns County do you serve?",
        answer:
          "Premiere Pilates serves patients throughout St. Johns County including St. Augustine, Ponte Vedra, Ponte Vedra Beach, Nocatee, and surrounding communities from our studio at 4057 Seminole Point Court.",
      },
      {
        question: "Is Premiere Pilates a Medicare provider in St. Johns County?",
        answer:
          "Yes. Premiere Pilates is a Florida Medicare provider and also accepts major insurance plans. Cash-pay with superbills is available for out-of-network reimbursement.",
      },
      {
        question: "How do I start physical therapy in St. Johns County?",
        answer:
          "Schedule your initial evaluation by calling (904) 315-0667. Florida direct-access allows you to begin without a physician referral.",
      },
    ],
  },
]

export function getLocationBySlug(slug: string): LocationPage | undefined {
  return locations.find((location) => location.slug === slug)
}
