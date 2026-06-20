import type { Metadata } from "next"
import { site } from "@/lib/content/site"

type CreateMetadataOptions = {
  title: string
  description: string
  path: string
  ogTitle?: string
  ogDescription?: string
  keywords?: string[]
  /** Use for homepage to avoid title template suffix duplication */
  absoluteTitle?: boolean
}

export function absoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${site.url}${path.startsWith("/") ? path : `/${path}`}`
}

export function baseMetadata(): Metadata {
  return {
    openGraph: {
      siteName: site.shortName,
      locale: site.locale,
      type: "website",
      images: [
        {
          url: site.ogImage,
          width: 1200,
          height: 630,
          alt: `${site.shortName} — Physical Therapy & Pilates in St. Augustine, FL`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [site.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    other: {
      "geo.region": `US-${site.address.state}`,
      "geo.placename": site.address.city,
      "geo.position": `${site.geo.latitude};${site.geo.longitude}`,
      ICBM: `${site.geo.latitude}, ${site.geo.longitude}`,
    },
  }
}

export function createMetadata({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  keywords,
  absoluteTitle = false,
}: CreateMetadataOptions): Metadata {
  const url = absoluteUrl(path)

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...baseMetadata().openGraph,
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      url,
    },
    twitter: {
      ...baseMetadata().twitter,
      title: ogTitle ?? title,
      description: ogDescription ?? description,
    },
    robots: baseMetadata().robots,
    other: baseMetadata().other,
  }
}
