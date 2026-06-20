import type { Metadata } from "next"
import { OfferingPageLayout } from "@/components/offering-page-layout"
import { physicalTherapyOffering } from "@/lib/content/offerings"
import { createMetadata } from "@/lib/seo"

export const metadata: Metadata = createMetadata({
  title: physicalTherapyOffering.title,
  description: physicalTherapyOffering.metaDescription,
  path: "/get-started/physical-therapy",
  keywords: [
    "private physical therapy St Augustine",
    "one-on-one physical therapist",
    "direct access physical therapy Florida",
    "Nicole Tristram PT",
  ],
})

export default function PhysicalTherapyOfferingPage() {
  return <OfferingPageLayout offering={physicalTherapyOffering} />
}
