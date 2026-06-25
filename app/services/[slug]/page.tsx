import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ServicePageLayout } from "@/components/service-page-layout"
import { getServiceBySlug, services } from "@/lib/content/services"
import { createMetadata, localGeoKeywords, serviceSeoKeywords } from "@/lib/seo"
import { site } from "@/lib/content/site"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}

  const shortTitle = service.title.replace(" | Premiere Pilates", "")

  return createMetadata({
    title: shortTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    ogTitle: service.title,
    keywords: [
      service.headline,
      site.name,
      "Nicole Tristram PT",
      ...localGeoKeywords,
      ...(serviceSeoKeywords[service.slug] ?? []),
    ],
  })
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) notFound()

  return <ServicePageLayout service={service} />
}
