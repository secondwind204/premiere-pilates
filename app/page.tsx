import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProblemSolution } from "@/components/problem-solution"
import { Conditions } from "@/components/conditions"
import { PilatesRehabilitation } from "@/components/pilates-rehabilitation"
import { AboutPreview, SocialProof } from "@/components/about-preview"
import { AreasServed } from "@/components/areas-served"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQ } from "@/components/faq"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"
import {
  JsonLd,
  createSchemaContext,
  faqSchema,
  graphSchema,
  localBusinessSchema,
  personSchema,
  reviewSchema,
  websiteSchema,
} from "@/lib/schema"
import { createMetadata } from "@/lib/seo"
import { getContent, getHomepage } from "@/lib/sanity/fetch"
import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const { site } = await getContent()

  return createMetadata({
    title: "Premiere Pilates Rehabilitation and Fitness | One-on-One Physical Therapy & Pilates in St. Augustine, FL",
    description: site.description,
    path: "/",
    absoluteTitle: true,
    site,
    keywords: [
      "physical therapy St Augustine",
      "Pilates rehabilitation St Augustine",
      "private physical therapist St Augustine",
      "Nicole Tristram PT",
      "post-surgical rehabilitation St Augustine",
      "foot and ankle physical therapy",
      "plantar fasciitis treatment St Augustine",
      "Oov rehabilitation",
      "Konnector Pilates",
      "Alpha-Stim physical therapy",
      "manual therapy St Augustine",
      "women's health physical therapy",
    ],
  })
}

export default async function Home() {
  const [{ site, services }, homepage] = await Promise.all([getContent(), getHomepage()])
  const schemaCtx = createSchemaContext(site, { services, testimonials: homepage.testimonials })

  return (
    <>
      <JsonLd
        data={graphSchema([
          websiteSchema(schemaCtx),
          localBusinessSchema(schemaCtx),
          personSchema(schemaCtx),
          faqSchema(homepage.faqs),
          ...reviewSchema(site, homepage.testimonials),
        ])}
      />
      <main className="min-h-screen overflow-x-hidden">
        <Header lightBackground />
        <Hero />
        <ProblemSolution strugglePoints={homepage.strugglePoints} />
        <Conditions />
        <PilatesRehabilitation />
        <SocialProof />
        <TestimonialsSection testimonials={homepage.testimonials} site={site} featured />
        <AboutPreview />
        <AreasServed />
        <FAQ />
        <CallToAction />
        <Footer />
      </main>
    </>
  )
}
