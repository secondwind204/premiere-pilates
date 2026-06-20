import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { aboutNicoleSummary } from "@/lib/content/homepage"
import { site } from "@/lib/content/site"

export function AboutPreview() {
  return (
    <section className="py-20 md:py-28 bg-secondary/45">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-20 lg:items-center">
          <div className="order-1 lg:col-start-2 lg:row-start-1">
            <p className="text-muted-foreground text-sm tracking-[0.25em] uppercase mb-4">About Nicole</p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-2">{aboutNicoleSummary.headline}</h2>
            <p className="text-primary font-medium">{aboutNicoleSummary.subtitle}</p>
          </div>

          <div className="order-2 relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-secondary shadow-md lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:max-w-none">
            <Image
              src="/images/nicoleheadshot.jpeg"
              alt="Nicole Tristram, Physical Therapist and Pilates Rehabilitation Practitioner"
              fill
              sizes="(max-width: 1024px) 384px, 448px"
              className="object-cover object-top"
            />
          </div>

          <div className="order-3 lg:col-start-2 lg:row-start-2">
            {aboutNicoleSummary.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground text-lg leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-medium mt-4 text-primary hover:text-accent transition-colors group"
            >
              Read full bio
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SocialProof() {
  return (
    <section className="py-12 border-y border-border bg-background">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <a
          href={site.googleReviews.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-col sm:flex-row items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
        >
          <span className="text-lg sm:text-2xl font-medium text-foreground text-balance">
            ★★★★★ {site.googleReviews.ratingDisplay} Stars on Google ({site.googleReviews.count} Reviews)
          </span>
          <span className="text-sm group-hover:underline underline-offset-4">Read All Reviews →</span>
        </a>
      </div>
    </section>
  )
}
