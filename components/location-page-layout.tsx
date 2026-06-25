import Link from "next/link"
import { ArrowRight, Check, MapPin, Phone } from "lucide-react"
import type { LocationPage } from "@/lib/content/locations"
import { practiceFacts } from "@/lib/content/geo-facts"
import { conditionCards } from "@/lib/content/services"
import { site } from "@/lib/content/site"
import { primaryCtaClass, primaryCtaInvertedClass } from "@/lib/cta-styles"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import {
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  graphSchema,
  localBusinessSchema,
  locationPageSchema,
  personSchema,
  websiteSchema,
} from "@/lib/schema"

export function LocationPageLayout({ location }: { location: LocationPage }) {
  const pageUrl = `${site.url}/locations/${location.slug}`

  return (
    <>
      <JsonLd
        data={graphSchema([
          websiteSchema(),
          localBusinessSchema(),
          personSchema(),
          locationPageSchema(location.name, location.title, location.metaDescription, pageUrl),
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: location.name, url: pageUrl },
          ]),
          faqSchema(location.faqs),
        ])}
      />
      <main className="min-h-screen overflow-x-hidden">
        <Header solid />
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 md:px-12">
            <nav aria-label="Breadcrumb" className="text-sm text-primary-foreground/60 mb-8">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-primary-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <span className="text-primary-foreground/80">{location.name}</span>
                </li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight max-w-4xl text-balance mb-6">
              {location.headline}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl leading-relaxed mb-10">
              {location.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={site.scheduleUrl} className={primaryCtaInvertedClass}>
                Schedule Evaluation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 px-8 py-[1.125rem] text-sm font-semibold tracking-wide hover:bg-primary-foreground/10 transition-colors rounded-xl"
              >
                <Phone className="w-4 h-4" />
                Call {site.phone}
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div className="space-y-6">
                {location.intro.map((paragraph) => (
                  <p key={paragraph} className="text-lg text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl font-medium mb-6">Why patients choose us</h2>
                <ul className="space-y-4">
                  {location.highlights.map((item) => (
                    <li key={item} className="flex gap-3 text-muted-foreground leading-relaxed">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-6 md:px-12">
            <p className="text-muted-foreground text-sm tracking-[0.25em] uppercase mb-4">Services & Modalities</p>
            <h2 className="text-2xl md:text-3xl font-medium mb-6">What Nicole offers in {location.name}</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              <div>
                <h3 className="text-lg font-medium mb-3">Treatment modalities</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {practiceFacts.modalities.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-primary/60 shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Pilates studio equipment</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {practiceFacts.pilatesEquipment.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-primary/60 shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              {practiceFacts.specialtyPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="text-sm font-medium text-primary hover:underline underline-offset-4"
                >
                  {page.name} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-secondary/45">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">Conditions we treat</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">
              Specialized one-on-one physical therapy and Pilates rehabilitation for patients in{" "}
              {location.name} and surrounding areas.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {conditionCards.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <h3 className="text-lg font-medium mb-2 group-hover:text-primary">{card.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {card.conditions.slice(0, 3).join(" • ")}
                  </p>
                  <span className="text-sm font-medium text-primary">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 border-y border-border bg-background">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-medium mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Studio location
                </h2>
                <p className="text-muted-foreground mb-2">{site.address.full}</p>
                <p className="text-sm text-muted-foreground mb-4">{site.hoursDisplay}</p>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary hover:underline underline-offset-4"
                >
                  Get directions →
                </a>
              </div>
              <div>
                <h2 className="text-xl font-medium mb-3">Nearby communities</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {location.nearbyAreas.join(" • ")}
                </p>
              </div>
            </div>
          </div>
        </section>

        <FaqSection
          faqs={location.faqs}
          title={`Questions about physical therapy in ${location.name}`}
          subtitle="FAQ"
          className="bg-background"
        />
        <CtaSection
          title={`Ready to feel better in ${location.name}?`}
          description={`Schedule your initial evaluation with Nicole Tristram, PT. Private one-on-one physical therapy and Pilates at ${site.address.full}.`}
        />
        <Footer />
      </main>
    </>
  )
}
