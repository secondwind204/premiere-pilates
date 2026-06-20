import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/cta-section"
import { getStartedPaths } from "@/lib/content/offerings"
import { homepageFaqs } from "@/lib/content/homepage"
import {
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  graphSchema,
  webPageSchema,
  websiteSchema,
  localBusinessSchema,
} from "@/lib/schema"
import { createMetadata } from "@/lib/seo"
import { site } from "@/lib/content/site"

export const metadata: Metadata = createMetadata({
  title: "Get Started",
  description:
    "Choose physical therapy or private Pilates training at Premiere Pilates in St. Augustine. View pricing, download patient forms, and schedule your evaluation.",
  path: "/get-started",
})

export default function GetStartedPage() {
  const pageUrl = `${site.url}/get-started`

  return (
    <>
      <JsonLd
        data={graphSchema([
          websiteSchema(),
          localBusinessSchema(),
          webPageSchema(
            "Get Started with Premiere Pilates",
            "Choose physical therapy or private Pilates training in St. Augustine, FL.",
            pageUrl,
          ),
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "Get Started", url: pageUrl },
          ]),
          faqSchema(homepageFaqs.slice(0, 3)),
        ])}
      />
      <main className="min-h-screen overflow-x-hidden">
        <Header solid />
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 md:px-12">
            <p className="text-sm tracking-[0.25em] uppercase text-primary-foreground/60 mb-4">Get Started</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight max-w-3xl text-balance mb-6">
              How would you like to begin?
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl leading-relaxed">
              Premiere Pilates offers two distinct paths — clinical physical therapy and private Pilates training — plus
              intake forms for new clients. Choose the option that fits your goals.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-3 gap-6">
              {getStartedPaths.map((path) => (
                <Link
                  key={path.href}
                  href={path.href}
                  className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h2 className="text-xl font-medium group-hover:text-primary transition-colors">{path.title}</h2>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{path.description}</p>
                </Link>
              ))}
            </div>

            <div className="mt-16 max-w-3xl">
              <h2 className="text-2xl font-medium mb-4">Not sure which is right for you?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Physical therapy treats injury, pain, and rehabilitation — often after surgery or when something isn&apos;t
                healing. Pilates builds core strength, alignment, and movement quality for wellness, injury prevention, and
                long-term fitness. Many clients benefit from both; Nicole combines PT and Pilates expertise in every
                private session.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Florida is a direct-access state — you can schedule physical therapy without a physician referral.{" "}
                <Link href="/contact" className="text-primary hover:underline underline-offset-4">
                  Contact Nicole
                </Link>{" "}
                to discuss your goals and find the right starting point.
              </p>
            </div>
          </div>
        </section>

        <CtaSection
          title="Ready to begin?"
          description="Schedule your initial evaluation or assessment. Nicole will help you choose the right path and build a personalized plan."
        />
        <Footer />
      </main>
    </>
  )
}
