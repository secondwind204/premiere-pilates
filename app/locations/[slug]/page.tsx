import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LocationPageLayout } from "@/components/location-page-layout"
import { getLocationBySlug, locations } from "@/lib/content/locations"
import { createMetadata, localGeoKeywords, serviceSeoKeywords } from "@/lib/seo"
import { site } from "@/lib/content/site"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const location = getLocationBySlug(slug)
  if (!location) return {}

  return createMetadata({
    title: location.title,
    description: location.metaDescription,
    path: `/locations/${location.slug}`,
    keywords: [
      `physical therapy ${location.name}`,
      `Pilates rehabilitation ${location.name}`,
      `physical therapist ${location.name} FL`,
      site.name,
      "Nicole Tristram PT",
      "private physical therapy",
      ...localGeoKeywords,
      ...serviceSeoKeywords["foot-ankle"],
      ...serviceSeoKeywords.oov,
      ...serviceSeoKeywords.konnector,
    ],
  })
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params
  const location = getLocationBySlug(slug)

  if (!location) notFound()

  return <LocationPageLayout location={location} />
}
