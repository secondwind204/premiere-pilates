import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { primaryCtaClass } from "@/lib/cta-styles"
import { getSite } from "@/lib/sanity/fetch"

export async function Hero() {
  const site = await getSite()

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-secondary/50 via-background to-secondary/30"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.95_0.04_305)_0%,_transparent_55%)] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)] py-16 md:py-24">
          <div className="max-w-xl">
            <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-6">{site.tagline}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-6 text-balance">
              One-on-One Physical Therapy &amp; Pilates Rehabilitation
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
              {site.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/contact" className={cn(primaryCtaClass, "inline-flex items-center justify-center gap-2")}>
                Schedule Your Evaluation
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border bg-background/80 text-foreground font-medium hover:bg-secondary transition-colors"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                {site.phone}
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span>
                {site.googleReviews.ratingDisplay} stars · {site.googleReviews.count} Google reviews
              </span>
            </div>
          </div>

          <div className="relative lg:justify-self-end w-full max-w-lg mx-auto lg:mx-0">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
              <Image
                src="/images/unnamed%20(1).webp"
                alt="Nicole Tristram, PT providing one-on-one physical therapy at Premiere Pilates in St. Augustine"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 1024px) 100vw, 512px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
