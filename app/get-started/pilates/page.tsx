import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { OfferingPageLayout } from "@/components/offering-page-layout"
import { createMetadata } from "@/lib/seo"
import { getOfferingBySlug, getSite } from "@/lib/sanity/fetch"

export async function generateMetadata(): Promise<Metadata> {
  const [offering, site] = await Promise.all([getOfferingBySlug("pilates"), getSite()])
  if (!offering) return {}

  return createMetadata({
    title: offering.title,
    description: offering.metaDescription,
    path: "/get-started/pilates",
    site,
    keywords: [
      "private Pilates St Augustine",
      "Pilates training St Augustine",
      "Polestar Pilates",
      "Nicole Tristram PT",
    ],
  })
}

export default async function PilatesOfferingPage() {
  const offering = await getOfferingBySlug("pilates")
  if (!offering) notFound()

  return <OfferingPageLayout offering={offering} />
}
