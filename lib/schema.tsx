import type { ServicePage, Testimonial } from "@/lib/content/services"
import type { Site } from "@/lib/content/site"
import { absoluteUrl } from "@/lib/seo"

export type SchemaContext = {
  site: Site
  services?: ServicePage[]
  testimonials?: Testimonial[]
}

function ids(site: Site) {
  return {
    business: `${site.url}/#business`,
    website: `${site.url}/#website`,
    person: `${site.url}/#nicole-tristram`,
  }
}

function absoluteImage(site: Site, path: string) {
  return path.startsWith("http") ? path : `${site.url}${path}`
}

function postalAddress(site: Site) {
  return {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  }
}

function openingHours(site: Site) {
  return site.hours.map((entry) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: entry.days,
    opens: entry.opens,
    closes: entry.closes,
  }))
}

export function websiteSchema({ site }: SchemaContext) {
  const { website, business } = ids(site)
  return {
    "@type": "WebSite",
    "@id": website,
    name: site.shortName,
    url: site.url,
    description: site.description,
    inLanguage: "en-US",
    publisher: { "@id": business },
  }
}

export function localBusinessSchema({ site, services = [] }: SchemaContext) {
  const { business, person, website } = ids(site)
  return {
    "@type": ["PhysicalTherapy", "LocalBusiness", "MedicalBusiness"],
    "@id": business,
    name: site.name,
    alternateName: site.shortName,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: absoluteImage(site, site.ogImage),
    logo: absoluteImage(site, site.logo),
    address: postalAddress(site),
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    hasMap: site.mapsUrl,
    areaServed: site.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: `${area}, FL`,
    })),
    sameAs: site.sameAs,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.googleReviews.rating,
      reviewCount: site.googleReviews.count,
      bestRating: 5,
      worstRating: 1,
    },
    priceRange: "$$",
    openingHoursSpecification: openingHours(site),
    founder: { "@id": person },
    employee: { "@id": person },
    knowsAbout: site.knowsAbout,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${site.name} Services`,
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        name: service.title,
        url: absoluteUrl(`/services/${service.slug}`, site),
      })),
    },
    paymentAccepted: "Cash, Check, Credit Card, Medicare",
    currenciesAccepted: "USD",
    medicalSpecialty: "PhysicalTherapy",
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: absoluteUrl(site.scheduleUrl, site),
        actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
      },
      name: "Schedule Evaluation",
    },
    isPartOf: { "@id": website },
  }
}

export function personSchema({ site }: SchemaContext) {
  const { person, business } = ids(site)
  return {
    "@type": "Person",
    "@id": person,
    name: site.owner.name,
    jobTitle: site.owner.title,
    description: site.owner.bio,
    url: `${site.url}/about`,
    worksFor: { "@id": business },
    knowsAbout: site.knowsAbout,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Central Florida",
    },
    hasCredential: site.owner.credentialsList.map((credential) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: credential,
    })),
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function medicalWebPageSchema(
  site: Site,
  title: string,
  description: string,
  url: string,
  conditionName?: string,
) {
  const { website, person, business } = ids(site)
  return {
    "@type": "MedicalWebPage",
    name: title,
    description,
    url,
    inLanguage: "en-US",
    isPartOf: { "@id": website },
    about: conditionName ? { "@type": "MedicalCondition", name: conditionName } : undefined,
    lastReviewed: site.lastReviewed,
    reviewedBy: { "@id": person },
    author: { "@id": person },
    publisher: { "@id": business },
  }
}

export function serviceSchema(site: Site, name: string, description: string, url: string) {
  const { business } = ids(site)
  return {
    "@type": "MedicalTherapy",
    name,
    description,
    url,
    provider: { "@id": business },
    areaServed: site.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
  }
}

export function webPageSchema(site: Site, title: string, description: string, url: string) {
  const { website, business } = ids(site)
  return {
    "@type": "WebPage",
    name: title,
    description,
    url,
    inLanguage: "en-US",
    isPartOf: { "@id": website },
    about: { "@id": business },
    publisher: { "@id": business },
  }
}

export function reviewSchema(site: Site, testimonials: Testimonial[]) {
  const { business } = ids(site)
  return testimonials.slice(0, 3).map((testimonial) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: testimonial.author,
    },
    reviewBody: testimonial.quote,
    reviewRating: {
      "@type": "Rating",
      ratingValue: 5,
      bestRating: 5,
      worstRating: 1,
    },
    itemReviewed: { "@id": business },
  }))
}

export function offerCatalogSchema(
  site: Site,
  offers: { name: string; price: string; description?: string }[],
) {
  const { business } = ids(site)
  return {
    "@type": "OfferCatalog",
    name: `${site.name} Services`,
    itemListElement: offers.map((offer) => ({
      "@type": "Offer",
      name: offer.name,
      price: offer.price.replace(/[^0-9.]/g, "") || undefined,
      priceCurrency: "USD",
      description: offer.description,
      seller: { "@id": business },
      areaServed: site.serviceAreas,
    })),
  }
}

export function locationPageSchema(
  site: Site,
  locationName: string,
  title: string,
  description: string,
  url: string,
) {
  const { website, business } = ids(site)
  return {
    "@type": "WebPage",
    name: title,
    description,
    url,
    inLanguage: "en-US",
    isPartOf: { "@id": website },
    about: { "@id": business },
    contentLocation: {
      "@type": "Place",
      name: locationName,
      address: {
        "@type": "PostalAddress",
        addressLocality: locationName,
        addressRegion: "FL",
        addressCountry: "US",
      },
    },
    mentions: { "@id": business },
  }
}

export function graphSchema(nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  }
}

function flattenSchema(data: object): object[] {
  if ("@graph" in data && Array.isArray((data as { "@graph": object[] })["@graph"])) {
    const { "@graph": graph } = data as { "@context": string; "@graph": object[] }
    return graph.map((node) => ({
      "@context": "https://schema.org",
      ...node,
    }))
  }

  return [{ "@context": "https://schema.org", ...data }]
}

export function JsonLd({ data }: { data: object }) {
  const schemas = flattenSchema(data)

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `${JSON.stringify(schema, null, 2)}\n`,
          }}
        />
      ))}
    </>
  )
}

export function createSchemaContext(
  site: Site,
  options?: { services?: ServicePage[]; testimonials?: Testimonial[] },
): SchemaContext {
  return { site, services: options?.services, testimonials: options?.testimonials }
}
