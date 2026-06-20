import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LocationPageLayout } from "@/components/location-page-layout"
import { getLocationBySlug, locations } from "@/lib/content/locations"
import { createMetadata } from "@/lib/seo"

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
      `Pilates ${location.name}`,
      `physical therapist ${location.name} FL`,
      "Nicole Tristram PT",
      "private physical therapy",
    ],
  })
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params
  const location = getLocationBySlug(slug)

  if (!location) notFound()

  return <LocationPageLayout location={location} />
}
