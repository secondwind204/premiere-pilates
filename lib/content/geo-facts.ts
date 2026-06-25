import type { LocationPage } from "@/lib/content/locations"
import type { ServicePage } from "@/lib/content/services"
import type { Site } from "@/lib/content/site"

export const locationServicesBlurb =
  "Treatment includes manual therapy techniques and modalities (Alpha-Stim and Dolphin Neurostim), plus Pilates rehabilitation on Reformer, Cadillac, Wunda Chair, Spine Corrector, Oov, and Konnector equipment. Conditions treated include post-surgical recovery, hip and back pain, knee and shoulder injuries, foot and ankle pain (plantar fasciitis, ankle sprains, Achilles tendinopathy), sports injuries, chronic pain, and women's health physical therapy."

export const sharedLocationFaqs = [
  {
    question: "Does Nicole treat foot and ankle conditions?",
    answer:
      "Yes. Nicole provides foot and ankle physical therapy for plantar fasciitis, ankle sprains, Achilles tendinopathy, heel pain, and related conditions — with whole-body assessment to address gait and lower-chain compensations.",
  },
  {
    question: "What are Oov and Konnector rehabilitation?",
    answer:
      "The Oov is a dynamic tool for core stability, spinal alignment, and mindful movement training. The Konnector is a Reformer attachment that connects all four limbs to improve proprioception and functional movement integration. Both are used within private one-on-one sessions at Nicole's St. Augustine studio.",
  },
  {
    question: "What modalities does Premiere Pilates Rehabilitation and Fitness use?",
    answer:
      "Nicole integrates manual therapy techniques with Alpha-Stim and Dolphin Neurostim for pain and inflammation management, combined with therapeutic Pilates on studio equipment including Reformer, Cadillac, Wunda Chair, Spine Corrector, Oov, and Konnector.",
  },
] as const

export function buildPracticeFacts(site: Site, services: ServicePage[], locations: LocationPage[]) {
  return {
    businessName: site.name,
    provider: site.owner.name,
    credentials: site.owner.title,
    address: site.address.full,
    phone: site.phone,
    email: site.email,
    website: site.url,
    hours: site.hoursDisplay,
    serviceAreas: site.serviceAreas,
    sessionFormat: "Private one-on-one sessions — full hour with Nicole Tristram, PT every appointment",
    directAccess: "Florida is a direct-access state; no physician referral required to begin physical therapy",
    payment: "Cash-pay with superbills available; Florida Medicare provider",
    googleReviews: `${site.googleReviews.ratingDisplay} stars (${site.googleReviews.count} Google reviews)`,
    modalities: ["Manual therapy techniques", "Alpha-Stim", "Dolphin Neurostim"],
    pilatesEquipment: [
      "Reformer",
      "Cadillac (Trapeze Table)",
      "Wunda Chair",
      "Spine Corrector",
      "Oov",
      "Konnector",
    ],
    specialtyPages: [
      { name: "Oov Rehabilitation", href: "/services/oov" },
      { name: "Konnector Pilates", href: "/services/konnector" },
      { name: "Foot & Ankle Physical Therapy", href: "/services/foot-ankle" },
    ],
    servicePages: services.map((service) => ({
      name: service.title,
      url: `${site.url}/services/${service.slug}`,
      summary: service.metaDescription,
    })),
    locationPages: locations.map((location) => ({
      name: location.name,
      url: `${site.url}/locations/${location.slug}`,
    })),
  }
}

export function generateLlmsTxt(site: Site, services: ServicePage[], locations: LocationPage[]): string {
  const practiceFacts = buildPracticeFacts(site, services, locations)
  const { businessName, provider, credentials, address, phone, email, website, hours } = practiceFacts

  return `# ${businessName}

> ${site.description}

## Provider
- Name: ${provider}
- Title: ${credentials}
- Experience: 25+ years
- Certification: Polestar Pilates International

## Contact
- Address: ${address}
- Phone: ${phone}
- Email: ${email}
- Website: ${website}
- Hours: ${hours}
- Schedule: ${website}/contact

## Session format
- ${practiceFacts.sessionFormat}
- ${practiceFacts.directAccess}
- ${practiceFacts.payment}
- Reviews: ${practiceFacts.googleReviews}

## Service areas
${practiceFacts.serviceAreas.map((area) => `- ${area}, FL`).join("\n")}

## Modalities
${practiceFacts.modalities.map((item) => `- ${item}`).join("\n")}

## Pilates studio equipment
${practiceFacts.pilatesEquipment.map((item) => `- ${item}`).join("\n")}

## Services
${practiceFacts.servicePages.map((service) => `- ${service.name}: ${service.url}`).join("\n")}

## Location pages
${practiceFacts.locationPages.map((location) => `- ${location.name}: ${location.url}`).join("\n")}

## Key pages
- Home: ${website}
- About Nicole Tristram, PT: ${website}/about
- Contact / Schedule: ${website}/contact
- Get Started: ${website}/get-started
- Patient Forms: ${website}/get-started/forms

## What is Pilates rehabilitation?
Pilates rehabilitation combines clinical physical therapy with equipment-based Pilates — using tools like the Reformer, Cadillac, Wunda Chair, Spine Corrector, Oov, and Konnector to rebuild core stability, flexibility, and healthy movement patterns during recovery. It emphasizes mindful, controlled movement tailored to each patient's diagnosis and stage of healing.

## Last updated
${site.lastReviewed}
`
}
