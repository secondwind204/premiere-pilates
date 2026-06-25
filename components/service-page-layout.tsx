import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, Phone } from "lucide-react"
import type { ServicePage } from "@/lib/content/services"
import { primaryCtaClass, primaryCtaInvertedClass } from "@/lib/cta-styles"
import { site } from "@/lib/content/site"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FaqSection } from "@/components/faq-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaSection } from "@/components/cta-section"
import {
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  graphSchema,
  localBusinessSchema,
  medicalWebPageSchema,
  offerCatalogSchema,
  personSchema,
  serviceSchema,
  websiteSchema,
} from "@/lib/schema"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ServicePageLayout({ service }: { service: ServicePage }) {
  const pageUrl = `${site.url}/services/${service.slug}`
  const conditionName = service.headline.split(" in ")[0]

  return (
    <>
      <JsonLd
        data={graphSchema([
          websiteSchema(),
          localBusinessSchema(),
          personSchema(),
          medicalWebPageSchema(service.title, service.metaDescription, pageUrl, conditionName),
          serviceSchema(service.title, service.metaDescription, pageUrl),
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "Services", url: `${site.url}/#services` },
            { name: conditionName, url: pageUrl },
          ]),
          faqSchema(service.faqs),
        ])}
      />
      <main className="min-h-screen overflow-x-hidden">
        <Header solid />
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-primary-foreground overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/unnamed.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center lg:object-[center_72%] xl:object-[center_82%]"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-primary/[0.55]" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/75 via-primary/45 to-primary/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
          </div>
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <nav aria-label="Breadcrumb" className="text-sm text-primary-foreground/60 mb-8">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-primary-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/#services" className="hover:text-primary-foreground transition-colors">
                    Services
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <span className="text-primary-foreground/80">{conditionName}</span>
                </li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight max-w-4xl mb-6 text-balance">
              {service.headline}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl leading-relaxed mb-10">
              {service.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={site.scheduleUrl} className={primaryCtaInvertedClass}>
                Schedule Evaluation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 px-8 py-4 text-sm font-medium tracking-wide hover:bg-primary-foreground/10 transition-colors"
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
              <div>
                <p className="text-muted-foreground text-sm tracking-[0.25em] uppercase mb-4">Why It Matters</p>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">Understanding your recovery</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">{service.whyItMatters}</p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-xl font-medium mb-6">What Makes Our Approach Different</h3>
                <ul className="space-y-4">
                  {service.differentiators.map((item) => (
                    <li key={item} className="flex gap-3 text-muted-foreground leading-relaxed">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={2} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-6 md:px-12">
            <p className="text-muted-foreground text-sm tracking-[0.25em] uppercase mb-4">
              {service.whatWeTreatLabel ?? "Conditions Treated"}
            </p>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-10">
              {service.whatWeTreatHeading ?? "What we treat"}
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className={`grid gap-6 ${service.whatWeTreat.length > 1 ? "sm:grid-cols-2" : "grid-cols-1"}`}>
                {service.whatWeTreat.map((group) => (
                  <div
                    key={group.category}
                    className={`bg-card border border-border rounded-2xl p-6 ${
                      service.whatWeTreat.length === 1 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <h3 className="text-lg font-medium mb-4">{group.category}</h3>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li key={item} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                          <span className="text-primary/70">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="hidden lg:flex lg:justify-center">
                <div className="relative w-56 xl:w-60 aspect-[3/4] rounded-2xl overflow-hidden border border-border shadow-sm">
                  <Image
                    src="/images/withpatient2.webp"
                    alt="Nicole Tristram providing one-on-one physical therapy with a patient"
                    fill
                    className="object-cover object-center"
                    sizes="240px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {service.timeline && (
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-6 md:px-12">
              <p className="text-muted-foreground text-sm tracking-[0.25em] uppercase mb-4">Your Recovery Timeline</p>
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-10">What to expect</h2>

              <Tabs defaultValue="0" className="max-w-4xl">
                <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent p-0 mb-8">
                  {service.timeline.map((phase, index) => (
                    <TabsTrigger
                      key={phase.phase}
                      value={String(index)}
                      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-border rounded-full px-5 py-2"
                    >
                      {phase.phase}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {service.timeline.map((phase, index) => (
                  <TabsContent key={phase.phase} value={String(index)} className="mt-0">
                    <div className="bg-card border border-border rounded-2xl p-8">
                      <h3 className="text-xl font-medium mb-6">{phase.title}</h3>
                      <ul className="grid sm:grid-cols-2 gap-4">
                        {phase.items.map((item) => (
                          <li key={item} className="flex gap-3 text-muted-foreground">
                            <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>
        )}

        {service.approach && (
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-6 md:px-12">
              <p className="text-muted-foreground text-sm tracking-[0.25em] uppercase mb-4">Our Approach</p>
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-10">Assessment & treatment</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {service.approach.map((section) => (
                  <div key={section.title} className="bg-card border border-border rounded-2xl p-8">
                    <h3 className="text-xl font-medium mb-6">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-3 text-muted-foreground">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <TestimonialsSection testimonials={service.testimonials} />
        <FaqSection faqs={service.faqs} />
        <CtaSection title="Take the next step" description={service.ctaText} />
        <Footer />
      </main>
    </>
  )
}
