import type { MetadataRoute } from "next"
import { locations } from "@/lib/content/locations"
import { getStartedPaths } from "@/lib/content/offerings"
import { services } from "@/lib/content/services"
import { site } from "@/lib/content/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = services.map((service) => ({
    url: `${site.url}/services/${service.slug}`,
    lastModified: new Date(site.lastReviewed),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }))

  const locationPages = locations.map((location) => ({
    url: `${site.url}/locations/${location.slug}`,
    lastModified: new Date(site.lastReviewed),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }))

  const getStartedPages = getStartedPaths.map((path) => ({
    url: `${site.url}${path.href}`,
    lastModified: new Date(site.lastReviewed),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [
    {
      url: site.url,
      lastModified: new Date(site.lastReviewed),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${site.url}/about`,
      lastModified: new Date(site.lastReviewed),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/contact`,
      lastModified: new Date(site.lastReviewed),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${site.url}/get-started`,
      lastModified: new Date(site.lastReviewed),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...getStartedPages,
    ...locationPages,
    ...servicePages,
    {
      url: `${site.url}/llms.txt`,
      lastModified: new Date(site.lastReviewed),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ]
}
