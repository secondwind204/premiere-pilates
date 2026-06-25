import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { OfferingPageLayout } from "@/components/offering-page-layout"
import { createMetadata } from "@/lib/seo"
import { getOfferingBySlug, getSite } from "@/lib/sanity/fetch"

export async function generateMetadata(): Promise<Metadata> {
  const [offering, site] = await Promise.all([getOfferingBySlug("physical-therapy"), getSite()])
  if (!offering) return {}

  return createMetadata({
    title: offering.title,
    description: offering.metaDescription,
    path: "/get-started/physical-therapy",
    site,
    keywords: [
      "private physical therapy St Augustine",
      "one-on-one physical therapist",
      "direct access physical therapy Florida",
      "Nicole Tristram PT",
    ],
  })
}

export default async function PhysicalTherapyOfferingPage() {
  const offering = await getOfferingBySlug("physical-therapy")
  if (!offering) notFound()

  return <OfferingPageLayout offering={offering} />
}
