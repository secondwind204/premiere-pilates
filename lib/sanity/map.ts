import { CONDITION_CARD_CONFIG, FORM_CATEGORIES, SITE_CONSTANTS } from "@/lib/content/constants"
import type { FormDownload } from "@/lib/content/forms"
import type { OfferingPage } from "@/lib/content/offerings"
import type { LocationPage } from "@/lib/content/locations"
import type { FaqItem, ServicePage, Testimonial } from "@/lib/content/services"
import type { Site, NavLink, LocationLink } from "@/lib/content/site"

type SanitySlug = { current: string }

function slugValue(slug: SanitySlug | string | undefined): string {
  if (!slug) return ""
  return typeof slug === "string" ? slug : slug.current
}

type RawSiteSettings = {
  name?: string
  tagline?: string
  description?: string
  phone?: string
  phoneHref?: string
  fax?: string
  email?: string
  contactFormEmail?: string
  address?: Site["address"]
  mapsUrl?: string
  hoursDisplay?: string
  serviceAreas?: string[]
  googleReviews?: Site["googleReviews"]
  lastReviewed?: string
  differentiators?: string[]
  owner?: { name?: string; title?: string; bio?: string }
}

type RawHomepage = {
  faqs?: FaqItem[]
  strugglePoints?: string[]
  testimonials?: Testimonial[]
  aboutNicole?: {
    headline?: string
    subtitle?: string
    paragraphs?: string[]
    fullBio?: string[]
  }
  pilatesRehabilitation?: {
    title?: string
    paragraphs?: string[]
    equipment?: string[]
  }
  pilatesHistory?: {
    title?: string
    intro?: string
    sections?: { title: string; content: string }[]
  }
}

type RawService = Omit<ServicePage, "slug"> & { slug?: SanitySlug | string }
type RawLocation = Omit<LocationPage, "slug"> & { slug?: SanitySlug | string }
type RawOffering = Omit<OfferingPage, "slug"> & { slug?: SanitySlug | string }
type RawPatientForm = FormDownload & { _id?: string }

export type RawContent = {
  siteSettings: RawSiteSettings | null
  homepage: RawHomepage | null
  services: RawService[]
  locations: RawLocation[]
  offerings: RawOffering[]
  patientForms: RawPatientForm[]
}

export function mapSite(doc: RawSiteSettings | null): Site {
  if (!doc) throw new Error("Missing siteSettings document in Sanity")

  return {
    ...SITE_CONSTANTS,
    name: doc.name ?? SITE_CONSTANTS.shortName,
    tagline: doc.tagline ?? "",
    description: doc.description ?? "",
    phone: doc.phone ?? "",
    phoneHref: doc.phoneHref ?? "",
    fax: doc.fax ?? "",
    email: doc.email ?? "",
    contactFormEmail: doc.contactFormEmail ?? "",
    address: doc.address ?? { street: "", city: "", state: "", zip: "", full: "" },
    mapsUrl: doc.mapsUrl ?? "",
    hoursDisplay: doc.hoursDisplay ?? "",
    serviceAreas: doc.serviceAreas ?? [],
    googleReviews: doc.googleReviews ?? { rating: 5, ratingDisplay: "5.0", count: 0, url: "" },
    lastReviewed: doc.lastReviewed ?? new Date().toISOString().slice(0, 10),
    owner: {
      ...SITE_CONSTANTS.owner,
      name: doc.owner?.name ?? "",
      title: doc.owner?.title ?? "",
      bio: doc.owner?.bio ?? "",
    },
  }
}

export function mapDifferentiators(doc: RawSiteSettings | null): string[] {
  return doc?.differentiators ?? []
}

export function mapService(doc: RawService): ServicePage {
  return {
    ...doc,
    slug: slugValue(doc.slug),
  }
}

export function mapLocation(doc: RawLocation): LocationPage {
  return {
    ...doc,
    slug: slugValue(doc.slug),
  }
}

export function mapOffering(doc: RawOffering): OfferingPage {
  return {
    ...doc,
    slug: slugValue(doc.slug),
  }
}

export function mapPatientForm(doc: RawPatientForm): FormDownload {
  return {
    title: doc.title,
    description: doc.description,
    category: doc.category,
    href: doc.href,
    fileLabel: doc.fileLabel,
  }
}

export type HomepageContent = {
  faqs: FaqItem[]
  strugglePoints: string[]
  testimonials: Testimonial[]
  aboutNicoleSummary: {
    headline: string
    subtitle: string
    paragraphs: string[]
    fullBio: string[]
  }
  pilatesRehabilitationIntro: {
    title: string
    paragraphs: string[]
    equipment: string[]
  }
  pilatesHistory: {
    title: string
    intro: string
    sections: { title: string; content: string }[]
  }
}

export function mapHomepage(doc: RawHomepage | null): HomepageContent {
  if (!doc) throw new Error("Missing homepage document in Sanity")

  return {
    faqs: doc.faqs ?? [],
    strugglePoints: doc.strugglePoints ?? [],
    testimonials: doc.testimonials ?? [],
    aboutNicoleSummary: {
      headline: doc.aboutNicole?.headline ?? "",
      subtitle: doc.aboutNicole?.subtitle ?? "",
      paragraphs: doc.aboutNicole?.paragraphs ?? [],
      fullBio: doc.aboutNicole?.fullBio ?? [],
    },
    pilatesRehabilitationIntro: {
      title: doc.pilatesRehabilitation?.title ?? "",
      paragraphs: doc.pilatesRehabilitation?.paragraphs ?? [],
      equipment: doc.pilatesRehabilitation?.equipment ?? [],
    },
    pilatesHistory: {
      title: doc.pilatesHistory?.title ?? "",
      intro: doc.pilatesHistory?.intro ?? "",
      sections: doc.pilatesHistory?.sections ?? [],
    },
  }
}

const NAV_SERVICE_LABELS: Record<string, string> = {
  "post-surgical-rehabilitation": "Post-Surgical Rehabilitation",
  "hip-back-pain": "Hip & Back Pain",
  "womens-health": "Women's Health",
  "knee-rehabilitation": "Knee Rehabilitation",
  "shoulder-injury": "Shoulder Injury Recovery",
  "sports-injury": "Sports Injury Recovery",
  "chronic-pain": "Chronic Pain Management",
  "foot-ankle": "Foot & Ankle",
  oov: "Oov® Rehabilitation",
  konnector: "Konnector Pilates",
}

export function buildNavLinks(services: ServicePage[]): NavLink[] {
  return [
    {
      label: "Services",
      href: "/#services",
      children: services.map((service) => ({
        label: NAV_SERVICE_LABELS[service.slug] ?? service.headline,
        href: `/services/${service.slug}`,
      })),
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
  ]
}

export function buildLocationLinks(locations: LocationPage[]): LocationLink[] {
  return locations.map((location) => ({
    label: location.name,
    href: `/locations/${location.slug}`,
  }))
}

export function buildConditionCards(services: ServicePage[]) {
  const bySlug = new Map(services.map((s) => [s.slug, s]))
  return CONDITION_CARD_CONFIG.filter((card) => bySlug.has(card.slug)).map((card) => ({
    title: card.title,
    conditions: card.conditions,
    href: `/services/${card.slug}`,
    icon: card.icon,
  }))
}

export function buildGetStartedPaths(offerings: OfferingPage[]) {
  const offeringCards = offerings.map((offering) => ({
    title: offering.headline,
    description: offering.metaDescription,
    href: `/get-started/${offering.slug}`,
  }))

  return [
    ...offeringCards,
    {
      title: "Patient Forms",
      description: "Download intake forms and registration paperwork.",
      href: "/get-started/forms",
    },
  ]
}

export { FORM_CATEGORIES as formCategories }

export function mapContent(raw: RawContent) {
  const site = mapSite(raw.siteSettings)
  const services = raw.services.map(mapService)
  const locations = raw.locations.map(mapLocation)
  const offerings = raw.offerings.map(mapOffering)
  const patientForms = raw.patientForms.map(mapPatientForm)
  const homepage = mapHomepage(raw.homepage)
  const differentiators = mapDifferentiators(raw.siteSettings)

  return {
    site,
    services,
    locations,
    offerings,
    patientForms,
    homepage,
    differentiators,
    navLinks: buildNavLinks(services),
    locationLinks: buildLocationLinks(locations),
    conditionCards: buildConditionCards(services),
    getStartedPaths: buildGetStartedPaths(offerings),
    formCategories: FORM_CATEGORIES,
  }
}

export type SiteContent = ReturnType<typeof mapContent>
