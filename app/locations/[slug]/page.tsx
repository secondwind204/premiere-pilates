import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LocationPageLayout } from "@/components/location-page-layout"
import { createMetadata, localGeoKeywords } from "@/lib/seo"
import { getLocationBySlug, getLocations, getSite } from "@/lib/sanity/fetch"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const locations = await getLocations()
  return locations.map((location) => ({ slug: location.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const [location, site] = await Promise.all([getLocationBySlug(slug), getSite()])
  if (!location) return {}

  return createMetadata({
    title: location.title,
    description: location.metaDescription,
    path: `/locations/${location.slug}`,
    site,
    keywords: [location.name, "physical therapy", site.name, "Nicole Tristram PT", ...localGeoKeywords],
  })
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params
  const location = await getLocationBySlug(slug)

  if (!location) notFound()

  return <LocationPageLayout location={location} />
}
