import type { Metadata } from "next"
import { OfferingPageLayout } from "@/components/offering-page-layout"
import { pilatesOffering } from "@/lib/content/offerings"
import { createMetadata } from "@/lib/seo"

export const metadata: Metadata = createMetadata({
  title: pilatesOffering.title,
  description: pilatesOffering.metaDescription,
  path: "/get-started/pilates",
  keywords: [
    "private Pilates St Augustine",
    "Pilates training St Augustine",
    "Pilates rehabilitation",
    "Nicole Tristram Pilates",
  ],
})

export default function PilatesOfferingPage() {
  return <OfferingPageLayout offering={pilatesOffering} />
}
