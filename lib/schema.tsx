import { homepageTestimonials } from "@/lib/content/homepage"
import { services } from "@/lib/content/services"
import { site } from "@/lib/content/site"
import { absoluteUrl } from "@/lib/seo"

const BUSINESS_ID = `${site.url}/#business`
const WEBSITE_ID = `${site.url}/#website`
const PERSON_ID = `${site.url}/#nicole-tristram`

function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  }
}

function openingHours() {
  return site.hours.map((entry) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: entry.days,
    opens: entry.opens,
    closes: entry.closes,
  }))
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: site.shortName,
    url: site.url,
    description: site.description,
    inLanguage: "en-US",
    publisher: { "@id": BUSINESS_ID },
  }
}

export function localBusinessSchema() {
  return {
    "@type": ["PhysicalTherapy", "LocalBusiness", "MedicalBusiness"],
    "@id": BUSINESS_ID,
    name: site.name,
    alternateName: site.shortName,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: absoluteImage(site.ogImage),
    logo: absoluteImage(site.logo),
    address: postalAddress(),
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
    openingHoursSpecification: openingHours(),
    founder: { "@id": PERSON_ID },
    employee: { "@id": PERSON_ID },
    knowsAbout: site.knowsAbout,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${site.name} Services`,
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        name: service.title,
        url: absoluteUrl(`/services/${service.slug}`),
      })),
    },
    paymentAccepted: "Cash, Check, Credit Card, Medicare",
    currenciesAccepted: "USD",
    medicalSpecialty: "PhysicalTherapy",
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: absoluteUrl(site.scheduleUrl),
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      name: "Schedule Evaluation",
    },
  }
}

export function personSchema() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: site.owner.name,
    jobTitle: site.owner.title,
    description: site.owner.bio,
    url: `${site.url}/about`,
    worksFor: { "@id": BUSINESS_ID },
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
  title: string,
  description: string,
  url: string,
  conditionName?: string,
) {
  return {
    "@type": "MedicalWebPage",
    name: title,
    description,
    url,
    inLanguage: "en-US",
    isPartOf: { "@id": WEBSITE_ID },
    about: conditionName
      ? { "@type": "MedicalCondition", name: conditionName }
      : undefined,
    lastReviewed: site.lastReviewed,
    reviewedBy: { "@id": PERSON_ID },
    author: { "@id": PERSON_ID },
    publisher: { "@id": BUSINESS_ID },
  }
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    "@type": "MedicalTherapy",
    name,
    description,
    url,
    provider: { "@id": BUSINESS_ID },
    areaServed: site.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
  }
}

export function webPageSchema(title: string, description: string, url: string) {
  return {
    "@type": "WebPage",
    name: title,
    description,
    url,
    inLanguage: "en-US",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": BUSINESS_ID },
    publisher: { "@id": BUSINESS_ID },
  }
}

export function reviewSchema() {
  return homepageTestimonials.slice(0, 3).map((testimonial) => ({
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
    itemReviewed: { "@id": BUSINESS_ID },
  }))
}

export function offerCatalogSchema(
  offers: { name: string; price: string; description?: string }[],
) {
  return {
    "@type": "OfferCatalog",
    name: `${site.name} Services`,
    itemListElement: offers.map((offer) => ({
      "@type": "Offer",
      name: offer.name,
      price: offer.price.replace(/[^0-9.]/g, "") || undefined,
      priceCurrency: "USD",
      description: offer.description,
      seller: { "@id": BUSINESS_ID },
      areaServed: site.serviceAreas,
    })),
  }
}

export function locationPageSchema(
  locationName: string,
  title: string,
  description: string,
  url: string,
) {
  return {
    "@type": "WebPage",
    name: title,
    description,
    url,
    inLanguage: "en-US",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": BUSINESS_ID },
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
    mentions: { "@id": BUSINESS_ID },
  }
}

export function graphSchema(nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  }
}

function absoluteImage(path: string) {
  return path.startsWith("http") ? path : `${site.url}${path}`
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
