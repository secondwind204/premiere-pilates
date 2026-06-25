import { cache } from "react"
import { client } from "./client"
import { mapContent, type RawContent, type SiteContent } from "./map"
import { allContentQuery } from "./queries"

export const revalidate = 3600

export const getContent = cache(async (): Promise<SiteContent> => {
  const raw = await client.fetch<RawContent>(
    allContentQuery,
    {},
    { next: { revalidate, tags: ["sanity"] } },
  )
  return mapContent(raw)
})

export async function getSite() {
  return (await getContent()).site
}

export async function getHomepage() {
  return (await getContent()).homepage
}

export async function getServices() {
  return (await getContent()).services
}

export async function getServiceBySlug(slug: string) {
  return (await getServices()).find((service) => service.slug === slug)
}

export async function getLocations() {
  return (await getContent()).locations
}

export async function getLocationBySlug(slug: string) {
  return (await getLocations()).find((location) => location.slug === slug)
}

export async function getOfferings() {
  return (await getContent()).offerings
}

export async function getOfferingBySlug(slug: string) {
  return (await getOfferings()).find((offering) => offering.slug === slug)
}

export async function getPatientForms() {
  return (await getContent()).patientForms
}

export async function getLayoutData() {
  const content = await getContent()
  return {
    site: content.site,
    navLinks: content.navLinks,
    locationLinks: content.locationLinks,
    differentiators: content.differentiators,
  }
}

export async function getConditionCards() {
  return (await getContent()).conditionCards
}

export async function getGetStartedPaths() {
  return (await getContent()).getStartedPaths
}

export async function getFormCategories() {
  return (await getContent()).formCategories
}

export async function getDifferentiators() {
  return (await getContent()).differentiators
}
