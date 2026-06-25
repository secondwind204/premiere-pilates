import Link from "next/link"
import { ArrowRight, Check, Phone } from "lucide-react"
import type { OfferingPage } from "@/lib/content/offerings"
import { primaryCtaClass } from "@/lib/cta-styles"
import { site } from "@/lib/content/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/cta-section"
import {
  JsonLd,
  breadcrumbSchema,
  graphSchema,
  localBusinessSchema,
  offerCatalogSchema,
  personSchema,
  serviceSchema,
  webPageSchema,
  websiteSchema,
} from "@/lib/schema"

export function OfferingPageLayout({ offering }: { offering: OfferingPage }) {
  const pageUrl = `${site.url}/get-started/${offering.slug}`
  const allPricing = [...offering.pricing, ...(offering.pricingPackages ?? [])]

  return (
    <>
      <JsonLd
        data={graphSchema([
          websiteSchema(),
          localBusinessSchema(),
          personSchema(),
          webPageSchema(offering.title, offering.metaDescription, pageUrl),
          serviceSchema(offering.title, offering.metaDescription, pageUrl),
          offerCatalogSchema(allPricing.map((item) => ({ name: item.label, price: item.price }))),
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "Get Started", url: `${site.url}/get-started` },
            { name: offering.headline, url: pageUrl },
          ]),
        ])}
      />
      <main className="min-h-screen overflow-x-hidden">
      <Header solid />
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-12">
          <nav className="text-sm text-primary-foreground/60 mb-8">
            <Link href="/" className="hover:text-primary-foreground transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/get-started" className="hover:text-primary-foreground transition-colors">
              Get Started
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary-foreground/80">{offering.headline}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight max-w-3xl text-balance mb-4">
            {offering.headline}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
            {offering.subheadline}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl space-y-6">
            {offering.intro.map((paragraph) => (
              <p key={paragraph} className="text-lg text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">{offering.approachTitle}</h2>
              {offering.approachLead && (
                <p className="text-muted-foreground leading-relaxed mb-6">{offering.approachLead}</p>
              )}
              <ul className="space-y-3">
                {offering.approachItems.map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {offering.secondarySection && (
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-xl font-medium mb-6">{offering.secondarySection.title}</h3>
                <ul className="space-y-3">
                  {offering.secondarySection.items.map((item) => (
                    <li key={item} className="flex gap-3 text-muted-foreground">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {offering.conditionsOrBenefits && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-8">
              {offering.conditionsOrBenefits.title}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {offering.conditionsOrBenefits.items.map((item) => (
                <div key={item} className="flex gap-3 bg-card border border-border rounded-xl p-4">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {offering.quote && (
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-6 md:px-12">
            <blockquote className="max-w-3xl mx-auto text-center">
              <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed italic">
                &ldquo;{offering.quote}&rdquo;
              </p>
              <footer className="mt-4 text-sm text-muted-foreground">— Joseph Pilates</footer>
            </blockquote>
          </div>
        </section>
      )}

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-8">
            {offering.slug === "pilates" ? `Why ${site.name}` : `Why Clients Choose ${site.name}`}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4 max-w-3xl">
            {offering.whyChoose.map((item) => (
              <li key={item} className="flex gap-3 text-muted-foreground">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-8">Pricing</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
            {offering.pricing.map((item) => (
              <div key={item.label} className="bg-card border border-border rounded-2xl p-6">
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.label}</p>
                <p className="text-2xl font-medium text-foreground">{item.price}</p>
              </div>
            ))}
          </div>

          {offering.pricingPackages && (
            <div className="mt-10">
              <h3 className="text-lg font-medium mb-4">Private Packages</h3>
              <div className="grid sm:grid-cols-2 gap-6 max-w-xl">
                {offering.pricingPackages.map((item) => (
                  <div key={item.label} className="bg-card border border-border rounded-2xl p-6">
                    <p className="text-sm text-muted-foreground mb-3">{item.label}</p>
                    <p className="text-2xl font-medium text-foreground">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {offering.insuranceNote && (
            <div className="mt-12 max-w-3xl">
              <h3 className="text-lg font-medium mb-4">Insurance & Referrals</h3>
              <p className="text-muted-foreground leading-relaxed">{offering.insuranceNote}</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 border-y border-border bg-card">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-2xl">
          <h2 className="text-2xl font-medium mb-4">{offering.ctaTitle}</h2>
          <p className="text-muted-foreground mb-8">{offering.ctaDescription}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={site.scheduleUrl} className={primaryCtaClass}>
              Schedule Evaluation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 border border-border px-8 py-4 text-sm font-medium tracking-wide hover:bg-secondary/60 transition-colors rounded-xl"
            >
              <Phone className="w-4 h-4" />
              Call {site.phone}
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-8">
            Need intake forms?{" "}
            <Link href="/get-started/forms" className="text-primary hover:underline underline-offset-4">
              Download patient forms →
            </Link>
          </p>
        </div>
      </section>

      <Footer />
      </main>
    </>
  )
}
