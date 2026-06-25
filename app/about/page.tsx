import type { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/cta-section"
import {
  JsonLd,
  breadcrumbSchema,
  createSchemaContext,
  graphSchema,
  localBusinessSchema,
  personSchema,
  webPageSchema,
  websiteSchema,
} from "@/lib/schema"
import { createMetadata } from "@/lib/seo"
import { getHomepage, getSite } from "@/lib/sanity/fetch"

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSite()

  return createMetadata({
    title: "About Nicole Tristram, PT",
    description:
      "Meet Nicole Tristram, PT — Polestar Pilates certified physical therapist with 25+ years of experience in St. Augustine, FL. Former professional dancer specializing in women's health and whole-body rehabilitation.",
    path: "/about",
    site,
    keywords: [
      "Nicole Tristram physical therapist",
      "Polestar Pilates St Augustine",
      "physical therapist St Augustine",
      "women's health PT",
    ],
  })
}

export default async function AboutPage() {
  const [site, homepage] = await Promise.all([getSite(), getHomepage()])
  const { aboutNicoleSummary, pilatesHistory } = homepage
  const schemaCtx = createSchemaContext(site)
  const pageUrl = `${site.url}/about`

  return (
    <>
      <JsonLd
        data={graphSchema([
          websiteSchema(schemaCtx),
          localBusinessSchema(schemaCtx),
          personSchema(schemaCtx),
          webPageSchema(site, "About Nicole Tristram, PT", "Meet Nicole Tristram, PT — Polestar Pilates certified physical therapist in St. Augustine, FL.", pageUrl),
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "About", url: pageUrl },
          ]),
        ])}
      />
      <main className="min-h-screen overflow-x-hidden">
        <Header solid />
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 md:px-12">
            <p className="text-sm tracking-[0.25em] uppercase text-primary-foreground/60 mb-4">About Us</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight max-w-3xl text-balance">
              A perfect balance of body, mind & spirit
            </h1>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div className="relative aspect-[2/3] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-secondary shadow-md order-2 lg:order-1">
                <Image
                  src="/images/nicoleheadshot.jpeg"
                  alt="Nicole Tristram, Physical Therapist and Pilates Rehabilitation Practitioner"
                  fill
                  sizes="(max-width: 1024px) 100vw, 448px"
                  className="object-cover object-top"
                  priority
                />
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-2xl md:text-3xl font-medium mb-2">{aboutNicoleSummary.headline}</h2>
                <p className="text-primary font-medium mb-8">{aboutNicoleSummary.subtitle}</p>

                <div className="space-y-6">
                  {aboutNicoleSummary.fullBio.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-6 md:px-12">
            <p className="text-muted-foreground text-sm tracking-[0.25em] uppercase mb-4">{pilatesHistory.title}</p>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6 max-w-3xl">{pilatesHistory.intro}</h2>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {pilatesHistory.sections.map((section) => (
                <article key={section.title} className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-lg font-medium mb-4">{section.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{section.content}</p>
                </article>
              ))}
            </div>

            <div className="mt-12 max-w-3xl">
              <p className="text-muted-foreground leading-relaxed">
                Pilates Rehabilitation & Fitness specializes in an individualized, whole body approach to Healing and
                Wellness that is essential to achieving your personal goal of an active, healthy lifestyle. Our Physical
                Therapy Services are designed to suit your needs in the comfort of your home, office or in a private
                Pilates Studio environment.
              </p>
            </div>
          </div>
        </section>

        <CtaSection />
        <Footer />
      </main>
    </>
  )
}
