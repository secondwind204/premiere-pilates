import type { Metadata } from "next"
import type { Site } from "@/lib/content/site"

export const localGeoKeywords = [
  "St Augustine FL",
  "St Johns County FL",
  "Ponte Vedra FL",
  "Jacksonville FL",
  "Palm Coast FL",
  "Northeast Florida",
] as const

export const serviceSeoKeywords: Record<string, string[]> = {
  "post-surgical-rehabilitation": ["post-surgical physical therapy", "knee replacement rehab", "hip replacement rehab"],
  "hip-back-pain": ["hip pain physical therapy", "back pain physical therapy", "sciatica treatment"],
  "womens-health": ["women's health physical therapy", "postpartum rehabilitation", "mastectomy recovery PT"],
  "knee-rehabilitation": ["knee pain physical therapy", "ACL rehabilitation"],
  "shoulder-injury": ["shoulder pain physical therapy", "rotator cuff rehabilitation", "frozen shoulder treatment"],
  "sports-injury": ["sports injury physical therapy", "return to sport rehabilitation"],
  "chronic-pain": [
    "chronic pain physical therapy",
    "pain management physical therapy",
    "Ehlers-Danlos syndrome physical therapy",
    "EDS physical therapy St Augustine",
    "joint hypermobility physical therapy",
  ],
  "foot-ankle": ["plantar fasciitis treatment", "ankle sprain rehabilitation", "foot and ankle physical therapy"],
  oov: ["Oov rehabilitation", "Oov physical therapy", "Polestar Pilates rehabilitation"],
  konnector: ["Konnector Pilates", "Konnector Reformer training", "proprioception rehabilitation"],
}

type CreateMetadataOptions = {
  title: string
  description: string
  path: string
  ogTitle?: string
  ogDescription?: string
  keywords?: string[]
  absoluteTitle?: boolean
  site: Site
}

export function absoluteUrl(path: string, site: Site) {
  return path.startsWith("http") ? path : `${site.url}${path.startsWith("/") ? path : `/${path}`}`
}

export function baseMetadata(site: Site): Metadata {
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
  site,
}: CreateMetadataOptions): Metadata {
  const url = absoluteUrl(path, site)
  const base = baseMetadata(site)

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...base.openGraph,
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      url,
    },
    twitter: {
      ...base.twitter,
      title: ogTitle ?? title,
      description: ogDescription ?? description,
    },
    robots: base.robots,
    other: base.other,
  }
}
