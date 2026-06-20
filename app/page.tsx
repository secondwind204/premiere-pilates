import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProblemSolution } from "@/components/problem-solution"
import { Conditions } from "@/components/conditions"
import { AboutPreview, SocialProof } from "@/components/about-preview"
import { AreasServed } from "@/components/areas-served"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQ } from "@/components/faq"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"
import { homepageFaqs, homepageTestimonials } from "@/lib/content/homepage"
import {
  JsonLd,
  faqSchema,
  graphSchema,
  localBusinessSchema,
  personSchema,
  reviewSchema,
  websiteSchema,
} from "@/lib/schema"
import { createMetadata } from "@/lib/seo"
import { site } from "@/lib/content/site"
import type { Metadata } from "next"

export const metadata: Metadata = createMetadata({
  title: "Premiere Pilates | One-on-One Physical Therapy & Pilates in St. Augustine, FL",
  description: site.description,
  path: "/",
  absoluteTitle: true,
  keywords: [
    "physical therapy St Augustine",
    "Pilates St Augustine",
    "private physical therapist",
    "Nicole Tristram PT",
    "post-surgical rehabilitation",
    "chronic pain physical therapy",
    "women's health physical therapy",
  ],
})

export default function Home() {
  return (
    <>
      <JsonLd
        data={graphSchema([
          websiteSchema(),
          localBusinessSchema(),
          personSchema(),
          faqSchema(homepageFaqs),
          ...reviewSchema(),
        ])}
      />
      <main className="min-h-screen overflow-x-hidden">
        <Header lightBackground />
        <Hero />
        <ProblemSolution />
        <Conditions />
        <SocialProof />
        <TestimonialsSection testimonials={homepageTestimonials} featured />
        <AboutPreview />
        <AreasServed />
        <FAQ />
        <CallToAction />
        <Footer />
      </main>
    </>
  )
}
