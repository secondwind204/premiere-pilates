import {
  aboutNicoleSummary,
  homepageFaqs,
  homepageTestimonials,
  pilatesHistory,
  pilatesRehabilitationIntro,
  strugglePoints,
} from "../lib/content/homepage"
import { intakeForms } from "../lib/content/forms"
import { locations } from "../lib/content/locations"
import { pilatesOffering, physicalTherapyOffering } from "../lib/content/offerings"
import { services } from "../lib/content/services"
import { differentiators, site } from "../lib/content/site"

function key() {
  return Math.random().toString(36).slice(2, 12)
}

function slugField(slug: string) {
  return { _type: "slug" as const, current: slug }
}

function strings(values: readonly string[] | string[]) {
  return [...values]
}

function faqs(items: { question: string; answer: string }[]) {
  return items.map((item) => ({ _type: "faq" as const, _key: key(), ...item }))
}

function testimonials(items: { quote: string; author: string }[]) {
  return items.map((item) => ({ _type: "testimonial" as const, _key: key(), ...item }))
}

function categoryItems(items: { category: string; items: string[] }[]) {
  return items.map((item) => ({
    _type: "categoryItems" as const,
    _key: key(),
    category: item.category,
    items: [...item.items],
  }))
}

function titledItems(items: { title: string; items: string[] }[]) {
  return items.map((item) => ({
    _type: "titledItems" as const,
    _key: key(),
    title: item.title,
    items: [...item.items],
  }))
}

function titledItem(item: { title: string; items: string[] }) {
  return {
    _type: "titledItems" as const,
    _key: key(),
    title: item.title,
    items: [...item.items],
  }
}

function timelinePhases(items: { phase: string; title: string; items: string[] }[]) {
  return items.map((item) => ({
    _type: "timelinePhase" as const,
    _key: key(),
    phase: item.phase,
    title: item.title,
    items: [...item.items],
  }))
}

function pricingItems(items: { label: string; price: string; note?: string }[]) {
  return items.map((item) => ({ _type: "pricingItem" as const, _key: key(), ...item }))
}

function contentSections(items: { title: string; content: string }[]) {
  return items.map((item) => ({ _type: "contentSection" as const, _key: key(), ...item }))
}

function paragraphs(values: string[]) {
  return values.map((value) => value)
}

/** All documents to import into Sanity (matches studio schemas). */
export function buildSeedDocuments(): Record<string, unknown>[] {
  return [
    {
      _id: "siteSettings",
      _type: "siteSettings",
      name: site.name,
      tagline: site.tagline,
      description: site.description,
      phone: site.phone,
      phoneHref: site.phoneHref,
      fax: site.fax,
      email: site.email,
      contactFormEmail: site.contactFormEmail,
      address: { ...site.address },
      mapsUrl: site.mapsUrl,
      hoursDisplay: site.hoursDisplay,
      serviceAreas: strings(site.serviceAreas),
      googleReviews: { ...site.googleReviews },
      lastReviewed: site.lastReviewed,
      differentiators: strings(differentiators),
      owner: {
        name: site.owner.name,
        title: site.owner.title,
        bio: site.owner.bio,
      },
    },
    {
      _id: "homepage",
      _type: "homepage",
      faqs: faqs(homepageFaqs),
      strugglePoints: strings(strugglePoints),
      testimonials: testimonials(homepageTestimonials),
      aboutNicole: {
        headline: aboutNicoleSummary.headline,
        subtitle: aboutNicoleSummary.subtitle,
        paragraphs: paragraphs([...aboutNicoleSummary.paragraphs]),
        fullBio: paragraphs([...aboutNicoleSummary.fullBio]),
      },
      pilatesRehabilitation: {
        title: pilatesRehabilitationIntro.title,
        paragraphs: paragraphs([...pilatesRehabilitationIntro.paragraphs]),
        equipment: strings(pilatesRehabilitationIntro.equipment),
      },
      pilatesHistory: {
        title: pilatesHistory.title,
        intro: pilatesHistory.intro,
        sections: contentSections(pilatesHistory.sections.map((s) => ({ ...s }))),
      },
    },
    ...services.map((service) => ({
      _id: `service-${service.slug}`,
      _type: "service",
      slug: slugField(service.slug),
      title: service.title,
      metaDescription: service.metaDescription,
      headline: service.headline,
      subheadline: service.subheadline,
      whyItMatters: service.whyItMatters,
      whatWeTreat: categoryItems(service.whatWeTreat),
      whatWeTreatLabel: service.whatWeTreatLabel,
      whatWeTreatHeading: service.whatWeTreatHeading,
      approach: service.approach ? titledItems(service.approach) : undefined,
      timeline: service.timeline ? timelinePhases(service.timeline) : undefined,
      differentiators: strings(service.differentiators),
      testimonials: testimonials(service.testimonials),
      faqs: faqs(service.faqs),
      ctaText: service.ctaText,
    })),
    ...locations.map((location) => ({
      _id: `location-${location.slug}`,
      _type: "location",
      slug: slugField(location.slug),
      name: location.name,
      title: location.title,
      metaDescription: location.metaDescription,
      headline: location.headline,
      subheadline: location.subheadline,
      intro: paragraphs([...location.intro]),
      highlights: strings(location.highlights),
      nearbyAreas: strings(location.nearbyAreas),
      faqs: faqs(location.faqs),
    })),
    ...[physicalTherapyOffering, pilatesOffering].map((offering) => ({
      _id: `offering-${offering.slug}`,
      _type: "offering",
      slug: slugField(offering.slug),
      title: offering.title,
      metaDescription: offering.metaDescription,
      headline: offering.headline,
      subheadline: offering.subheadline,
      intro: paragraphs([...offering.intro]),
      approachTitle: offering.approachTitle,
      approachLead: offering.approachLead,
      approachItems: strings(offering.approachItems),
      secondarySection: offering.secondarySection ? titledItem(offering.secondarySection) : undefined,
      conditionsOrBenefits: offering.conditionsOrBenefits ? titledItem(offering.conditionsOrBenefits) : undefined,
      quote: offering.quote,
      whyChoose: strings(offering.whyChoose),
      pricing: pricingItems(offering.pricing),
      pricingPackages: offering.pricingPackages ? pricingItems(offering.pricingPackages) : undefined,
      insuranceNote: offering.insuranceNote,
      ctaTitle: offering.ctaTitle,
      ctaDescription: offering.ctaDescription,
    })),
    ...intakeForms.map((form, index) => ({
      _id: `patientForm-${index + 1}`,
      _type: "patientForm",
      title: form.title,
      description: form.description,
      category: form.category,
      href: form.href,
      fileLabel: form.fileLabel,
    })),
  ]
}
