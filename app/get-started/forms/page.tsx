import type { Metadata } from "next"
import { GetStartedForms } from "@/components/get-started-forms"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/cta-section"
import Link from "next/link"
import {
  JsonLd,
  breadcrumbSchema,
  createSchemaContext,
  graphSchema,
  localBusinessSchema,
  webPageSchema,
  websiteSchema,
} from "@/lib/schema"
import { createMetadata } from "@/lib/seo"
import { getFormCategories, getPatientForms, getSite } from "@/lib/sanity/fetch"

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSite()

  return createMetadata({
    title: "Patient Forms",
    description:
      "Download patient intake forms and medical history questionnaires for Premiere Pilates Rehabilitation and Fitness in St. Augustine, FL.",
    path: "/get-started/forms",
    site,
  })
}

export default async function GetStartedFormsPage() {
  const [site, intakeForms, formCategories] = await Promise.all([
    getSite(),
    getPatientForms(),
    getFormCategories(),
  ])
  const schemaCtx = createSchemaContext(site)
  const pageUrl = `${site.url}/get-started/forms`

  return (
    <>
      <JsonLd
        data={graphSchema([
          websiteSchema(schemaCtx),
          localBusinessSchema(schemaCtx),
          webPageSchema(site, "Patient Forms", "Download intake forms for Premiere Pilates in St. Augustine, FL.", pageUrl),
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "Get Started", url: `${site.url}/get-started` },
            { name: "Patient Forms", url: pageUrl },
          ]),
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
                  <Link href="/get-started" className="hover:text-primary-foreground transition-colors">
                    Get Started
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <span className="text-primary-foreground/80">Patient Forms</span>
                </li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight max-w-3xl text-balance mb-6">
              Patient forms & intake paperwork
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl leading-relaxed">
              Download and complete the forms relevant to your visit prior to your appointment. New clients complete a
              musculoskeletal screening and postural analysis before training begins.
            </p>
          </div>
        </section>

        <GetStartedForms intakeForms={intakeForms} formCategories={formCategories} />

        <CtaSection
          title="Ready to begin?"
          description="Schedule your initial evaluation. Nicole will perform a musculoskeletal assessment and postural analysis to design a program tailored to your physical abilities."
        />
        <Footer />
      </main>
    </>
  )
}
