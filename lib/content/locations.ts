import type { FaqItem } from "./services"
import { locationServicesBlurb, sharedLocationFaqs } from "./geo-facts"

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
      "Private one-on-one physical therapy and Pilates rehabilitation in St. Augustine, FL. Nicole Tristram, PT offers manual therapy, Alpha-Stim, Dolphin Neurostim, foot and ankle rehab, Oov, and Konnector training.",
    headline: "Physical Therapy & Pilates in St. Augustine, FL",
    subheadline:
      "Premiere Pilates Rehabilitation and Fitness is located in St. Augustine and provides private, one-on-one physical therapy and Pilates rehabilitation for residents across the Ancient City and St. Johns County.",
    intro: [
      "Looking for a physical therapist in St. Augustine who gives you their full attention for the entire session? At Premiere Pilates Rehabilitation and Fitness, every appointment is private and personalized — never a crowded clinic where you're one of several patients at once.",
      "Nicole Tristram, PT has 25+ years of experience helping St. Augustine patients recover from surgery, resolve chronic pain, rehabilitate sports injuries, and restore strength through a unique combination of physical therapy and Pilates.",
      locationServicesBlurb,
    ],
    highlights: [
      "Private studio at 4057 Seminole Point Court",
      "One-on-one sessions — full hour with Nicole every time",
      "Foot and ankle rehab: plantar fasciitis, ankle sprains, Achilles pain",
      "Oov and Konnector Pilates integrated into rehabilitation",
      "Manual therapy, Alpha-Stim, and Dolphin Neurostim",
      "Direct-access physical therapy — no referral required in Florida",
      "Cash-pay with superbills; Florida Medicare provider",
    ],
    nearbyAreas: ["Vilano Beach", "World Golf Village", "Nocatee", "St. Augustine South"],
    faqs: [
      {
        question: "Where is Premiere Pilates Rehabilitation and Fitness located in St. Augustine?",
        answer:
          "The studio is at 4057 Seminole Point Court, St. Augustine, FL 32086 — a private setting for one-on-one physical therapy and Pilates rehabilitation sessions with Nicole Tristram, PT.",
      },
      {
        question: "Do I need a referral for physical therapy in St. Augustine?",
        answer:
          "No. Florida is a direct-access state. You can schedule a physical therapy evaluation with Nicole Tristram, PT without a physician referral.",
      },
      {
        question: "What conditions do you treat in St. Augustine?",
        answer:
          "Post-surgical rehabilitation, hip and back pain, knee and shoulder injuries, foot and ankle conditions (plantar fasciitis, ankle sprains), sports injuries, chronic pain, women's health conditions, and Pilates-based wellness — using manual therapy, Alpha-Stim, Dolphin Neurostim, and studio equipment including Oov and Konnector.",
      },
      ...sharedLocationFaqs,
    ],
  },
  {
    slug: "ponte-vedra",
    name: "Ponte Vedra",
    title: "Physical Therapy Near Ponte Vedra & Ponte Vedra Beach, FL",
    metaDescription:
      "Private physical therapy and Pilates rehabilitation serving Ponte Vedra and Ponte Vedra Beach, FL. Manual therapy, foot and ankle rehab, Oov, Konnector, Alpha-Stim, and Dolphin Neurostim with Nicole Tristram, PT.",
    headline: "Physical Therapy Serving Ponte Vedra & Ponte Vedra Beach",
    subheadline:
      "Premiere Pilates Rehabilitation and Fitness in nearby St. Augustine provides private, one-on-one physical therapy and Pilates for Ponte Vedra residents seeking personalized rehabilitation and lasting results.",
    intro: [
      "Ponte Vedra and Ponte Vedra Beach residents often travel to St. Augustine for specialized care they can't find in high-volume clinics. Premiere Pilates Rehabilitation and Fitness offers exactly that — private sessions with an experienced physical therapist who treats the whole body, not just your symptoms.",
      "Whether you're recovering from a golf or tennis injury, post-surgical rehabilitation, plantar fasciitis, or chronic hip or back pain, Nicole builds a personalized plan using hands-on manual therapy, modalities, and Pilates-based movement retraining.",
      locationServicesBlurb,
    ],
    highlights: [
      "Short drive from Ponte Vedra to our St. Augustine studio",
      "Sports injury and golf-related rehabilitation expertise",
      "Foot and ankle physical therapy for active lifestyles",
      "Oov and Konnector training for core control and proprioception",
      "Manual therapy, Alpha-Stim, and Dolphin Neurostim",
      "Private sessions — no shared treatment bays",
      "Whole-body assessment to find root causes of pain",
    ],
    nearbyAreas: ["Ponte Vedra Beach", "Palm Valley", "Nocatee", "Jacksonville Beach"],
    faqs: [
      {
        question: "How far is Premiere Pilates from Ponte Vedra?",
        answer:
          "The studio at 4057 Seminole Point Court in St. Augustine is a short drive from Ponte Vedra and Ponte Vedra Beach — convenient for private one-on-one appointments.",
      },
      {
        question: "Do you treat golf and tennis injuries near Ponte Vedra?",
        answer:
          "Yes. Nicole treats sports injuries including shoulder, hip, knee, and back pain common in golf, tennis, and other active lifestyles — plus foot and ankle conditions like plantar fasciitis and ankle sprains.",
      },
      {
        question: "Can I schedule a physical therapy evaluation from Ponte Vedra?",
        answer:
          "Yes. Call (904) 315-0667 or schedule online. Florida direct-access allows you to begin physical therapy without a physician referral.",
      },
      ...sharedLocationFaqs,
    ],
  },
  {
    slug: "jacksonville",
    name: "Jacksonville",
    title: "Physical Therapy Serving Jacksonville, FL",
    metaDescription:
      "Private one-on-one physical therapy and Pilates rehabilitation serving Jacksonville, FL. Manual therapy, foot and ankle rehab, Oov, Konnector, Alpha-Stim, and Dolphin Neurostim with Nicole Tristram, PT.",
    headline: "Physical Therapy Serving Jacksonville, FL",
    subheadline:
      "Jacksonville patients choose Premiere Pilates Rehabilitation and Fitness in St. Augustine for private, undivided physical therapy and Pilates care that high-volume clinics can't match.",
    intro: [
      "Many Jacksonville patients drive to St. Augustine for the level of personalized care Premiere Pilates Rehabilitation and Fitness provides. Nicole Tristram, PT dedicates a full hour to you alone — assessing movement, treating the root cause, and building a plan for lasting recovery.",
      "From post-surgical rehabilitation to chronic pain, sports injuries, foot and ankle conditions, and women's health, Nicole combines 25+ years of physical therapy experience with advanced Pilates rehabilitation — including Oov and Konnector training — for faster, more durable results.",
      locationServicesBlurb,
    ],
    highlights: [
      "Private studio — one patient, one therapist, every session",
      "Post-surgical, chronic pain, and sports rehabilitation",
      "Foot and ankle PT: plantar fasciitis, ankle sprains, heel pain",
      "Oov and Konnector integrated into one-on-one sessions",
      "Manual therapy, Alpha-Stim, and Dolphin Neurostim",
      "PT + Pilates combination for whole-body recovery",
      "Direct-access care — schedule without a referral",
      "Medicare provider; superbills available for reimbursement",
    ],
    nearbyAreas: ["Southside Jacksonville", "Mandarin", "Jacksonville Beach", "San Marco"],
    faqs: [
      {
        question: "Do Jacksonville patients come to Premiere Pilates Rehabilitation and Fitness?",
        answer:
          "Yes. Many Jacksonville residents travel to the St. Augustine studio at 4057 Seminole Point Court for private one-on-one physical therapy and Pilates that isn't available in typical high-volume clinics.",
      },
      {
        question: "What makes Premiere Pilates different from Jacksonville clinic chains?",
        answer:
          "Every session is private with Nicole Tristram, PT for the full hour. Treatment addresses root causes using manual therapy, Alpha-Stim, Dolphin Neurostim, and Pilates-based movement on Reformer, Oov, Konnector, and other studio equipment — not cookie-cutter exercises in an open gym.",
      },
      {
        question: "How do I schedule from Jacksonville?",
        answer:
          "Call (904) 315-0667 or use the contact page to schedule your initial evaluation at 4057 Seminole Point Court, St. Augustine, FL 32086.",
      },
      ...sharedLocationFaqs,
    ],
  },
  {
    slug: "st-johns-county",
    name: "St. Johns County",
    title: "Physical Therapy in St. Johns County, FL",
    metaDescription:
      "Private physical therapy and Pilates rehabilitation serving St. Johns County, FL — St. Augustine, Ponte Vedra, Nocatee, and surrounding communities. Manual therapy, foot and ankle rehab, Oov, Konnector, Alpha-Stim, and Dolphin Neurostim.",
    headline: "Physical Therapy Serving St. Johns County, FL",
    subheadline:
      "Premiere Pilates Rehabilitation and Fitness provides private, one-on-one physical therapy and Pilates rehabilitation for patients throughout St. Johns County from its St. Augustine studio.",
    intro: [
      "St. Johns County residents deserve physical therapy that actually fixes the problem — not rushed appointments in crowded clinics. At Premiere Pilates Rehabilitation and Fitness, Nicole Tristram, PT provides undivided, one-on-one care for the full session, every session.",
      "Serving communities across St. Johns County including St. Augustine, Ponte Vedra, Nocatee, and surrounding areas, Nicole treats post-surgical recovery, chronic pain, sports injuries, foot and ankle conditions, women's health conditions, and wellness through Pilates.",
      locationServicesBlurb,
    ],
    highlights: [
      "Central St. Johns County location in St. Augustine",
      "One-on-one sessions with 25+ years of experience",
      "Foot and ankle: plantar fasciitis, ankle sprains, Achilles pain",
      "Oov and Konnector Pilates rehabilitation",
      "Manual therapy, Alpha-Stim, Dolphin Neurostim, and Pilates rehabilitation",
      "Post-surgical, chronic pain, sports, and women's health",
      "Cash-pay, Medicare, and superbill options",
    ],
    nearbyAreas: ["Nocatee", "Fruit Cove", "Julington Creek", "Hastings"],
    faqs: [
      {
        question: "What areas of St. Johns County do you serve?",
        answer:
          "Premiere Pilates Rehabilitation and Fitness serves patients throughout St. Johns County including St. Augustine, Ponte Vedra, Ponte Vedra Beach, Nocatee, and surrounding communities from the studio at 4057 Seminole Point Court.",
      },
      {
        question: "Is Premiere Pilates a Medicare provider in St. Johns County?",
        answer:
          "Yes. Premiere Pilates Rehabilitation and Fitness is a Florida Medicare provider and also accepts major insurance plans. Cash-pay with superbills is available for out-of-network reimbursement.",
      },
      {
        question: "How do I start physical therapy in St. Johns County?",
        answer:
          "Schedule your initial evaluation by calling (904) 315-0667. Florida direct-access allows you to begin without a physician referral.",
      },
      ...sharedLocationFaqs,
    ],
  },
]

export function getLocationBySlug(slug: string): LocationPage | undefined {
  return locations.find((location) => location.slug === slug)
}
