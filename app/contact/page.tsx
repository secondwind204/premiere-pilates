import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
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
import { getSite } from "@/lib/sanity/fetch"
import { MapPin, Phone, Mail, Printer, Clock } from "lucide-react"

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSite()

  return createMetadata({
    title: "Contact & Schedule an Evaluation",
    description:
      "Contact Nicole Tristram, PT at Premiere Pilates in St. Augustine. Call (904) 315-0667 or schedule your initial one-on-one physical therapy evaluation.",
    path: "/contact",
    site,
    keywords: [
      "schedule physical therapy St Augustine",
      "Premiere Pilates contact",
      "physical therapy appointment St Augustine",
      "Nicole Tristram phone",
    ],
  })
}

export default async function ContactPage() {
  const site = await getSite()
  const schemaCtx = createSchemaContext(site)
  const pageUrl = `${site.url}/contact`

  return (
    <>
      <JsonLd
        data={graphSchema([
          websiteSchema(schemaCtx),
          localBusinessSchema(schemaCtx),
          personSchema(schemaCtx),
          webPageSchema(site, "Contact Premiere Pilates", "Schedule your one-on-one physical therapy or Pilates evaluation in St. Augustine, FL.", pageUrl),
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "Contact", url: pageUrl },
          ]),
        ])}
      />
      <main className="min-h-screen overflow-x-hidden">
        <Header solid />
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 md:px-12">
            <p className="text-sm tracking-[0.25em] uppercase text-primary-foreground/60 mb-4">Contact Us</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight max-w-3xl text-balance mb-6">
              Schedule your evaluation
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl leading-relaxed">
              Ready to feel better? Contact Nicole to schedule your initial evaluation — a full hour of undivided,
              one-on-one attention in a private studio.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <address className="not-italic">
                <h2 className="text-2xl font-medium mb-2">{site.owner.name}</h2>
                <p className="text-primary font-medium mb-8">{site.owner.title}</p>

                <ul className="space-y-6 mb-10">
                  <li className="flex gap-4">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-medium mb-1">{site.name}</p>
                      <p className="text-muted-foreground">{site.address.full}</p>
                      <a
                        href={site.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-sm font-medium text-primary hover:underline underline-offset-4"
                      >
                        Get directions →
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-medium mb-1">Hours</p>
                      <p className="text-muted-foreground">{site.hoursDisplay}</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-medium mb-1">Office</p>
                      <a href={site.phoneHref} className="text-muted-foreground hover:text-foreground transition-colors">
                        {site.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Printer className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-medium mb-1">Fax</p>
                      <p className="text-muted-foreground">{site.fax}</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <a
                        href={`mailto:${site.email}`}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {site.email}
                      </a>
                    </div>
                  </li>
                </ul>

                <div className="aspect-video rounded-2xl overflow-hidden bg-secondary border border-border">
                  <iframe
                    title="Premiere Pilates location map — St. Augustine, FL"
                    src="https://maps.google.com/maps?q=4057+Seminole+Point+Court,+St+Augustine,+FL+32086&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </address>

              <div className="bg-card border border-border rounded-2xl p-8">
                <h2 className="text-xl font-medium mb-2">Send a message</h2>
                <p className="text-muted-foreground text-sm mb-8">
                  Fill out the form below and Nicole will get back to you shortly.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
