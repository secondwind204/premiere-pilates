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

      <div className="container mx-auto px-6 md:px-12 pt-28 pb-16 md:pt-32 md:pb-24 lg:pt-36 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-1 lg:order-1 min-w-0 relative z-10">
            <p className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase text-muted-foreground mb-4 text-balance">
              Serving St. Augustine & St. Johns County, Florida
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-medium text-foreground mb-6 tracking-tight leading-[1.1] text-balance">
              One-on-One Physical Therapy & Pilates Rehabilitation
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed text-balance">
              Private Sessions • Personalized Treatment • Long-Term Relief
            </p>

            <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-2 mb-10 text-xs sm:text-sm">
              <div className="flex items-center gap-1.5 min-w-0">
                <div className="flex shrink-0">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="font-medium text-foreground/80">
                  {site.googleReviews.ratingDisplay} Stars ({site.googleReviews.count} Google Reviews)
                </span>
              </div>

              <span className="text-muted-foreground/50" aria-hidden="true">
                ·
              </span>

              <span className="font-medium text-foreground/80">25+ Years</span>

              <span className="text-muted-foreground/50" aria-hidden="true">
                ·
              </span>

              <span className="font-medium text-foreground/80">PT + Pilates Rehabilitation Practitioner</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={site.scheduleUrl} className={cn(primaryCtaClass, "w-full sm:w-auto")}>
                Schedule Evaluation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 border border-border bg-card text-foreground px-8 py-4 text-sm font-medium tracking-wide hover:bg-secondary/60 transition-colors rounded-xl"
              >
                <Phone className="w-4 h-4" />
                Call {site.phone}
              </a>
            </div>
          </div>

          <div className="order-2 lg:order-2 w-full min-w-0 flex justify-center lg:justify-end relative z-0 mt-8 lg:mt-0">
            <div className="relative mx-auto w-full max-w-[min(100%,340px)] sm:max-w-[420px] lg:max-w-[500px] lg:mx-0 lg:-translate-x-5">
              <div
                className="pointer-events-none absolute inset-0 -z-10 hidden lg:block rounded-3xl bg-primary/20 blur-3xl scale-110"
                aria-hidden="true"
              />
              <div className="relative rounded-3xl p-1 bg-gradient-to-br from-primary/50 via-primary/20 to-primary/5 shadow-[0_16px_48px_-12px_rgba(80,50,120,0.28)] lg:shadow-[0_24px_64px_-16px_rgba(80,50,120,0.35)]">
                <div className="rounded-[1.35rem] overflow-hidden ring-[5px] ring-white relative aspect-[6/5]">
                  <Image
                    src="/images/unnamed%20(1).webp"
                    alt="Nicole Tristram providing one-on-one physical therapy with a patient in her St. Augustine studio"
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 420px, 500px"
                    className="object-cover object-[62%_22%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
