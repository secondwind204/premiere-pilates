import type { Testimonial } from "@/lib/content/services"
import { site } from "@/lib/content/site"
import { Quote, Star } from "lucide-react"

type TestimonialsSectionProps = {
  testimonials: Testimonial[]
  title?: string
  subtitle?: string
  className?: string
  featured?: boolean
}

function StarRating({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`} aria-label={`${site.googleReviews.ratingDisplay} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
      ))}
    </div>
  )
}

export function TestimonialsSection({
  testimonials,
  title = "What Our Clients Say",
  subtitle = "Success Stories",
  className = "",
  featured = false,
}: TestimonialsSectionProps) {
  const featuredTestimonial = featured ? testimonials[0] : null
  const gridTestimonials = featured ? testimonials.slice(1) : testimonials

  return (
    <section className={`py-20 md:py-28 bg-background ${className}`}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-12">
          <p className="text-muted-foreground text-sm tracking-[0.25em] uppercase mb-4">{subtitle}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-balance">{title}</h2>
        </div>

        {featuredTestimonial && (
          <blockquote className="relative mb-10 md:mb-14 overflow-hidden rounded-3xl border border-primary/15 bg-primary/[0.07] p-8 md:p-12 lg:p-14 shadow-[0_8px_40px_-12px_rgba(80,50,120,0.25)]">
            <Quote
              className="absolute top-6 right-6 md:top-8 md:right-8 w-16 h-16 md:w-20 md:h-20 text-primary/10"
              strokeWidth={1}
            />
            <StarRating className="mb-6" />
            <p className="relative text-xl md:text-2xl lg:text-[1.75rem] font-medium leading-relaxed text-foreground max-w-4xl text-balance">
              &ldquo;{featuredTestimonial.quote}&rdquo;
            </p>
            <footer className="relative mt-8 text-base font-medium text-foreground/70">
              — {featuredTestimonial.author}
            </footer>
          </blockquote>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridTestimonials.map((testimonial, index) => (
            <blockquote
              key={index}
              className="relative flex flex-col justify-between rounded-2xl border border-border/80 bg-secondary/55 p-8 shadow-[0_4px_20px_-6px_rgba(80,50,120,0.12)] hover:shadow-[0_8px_28px_-6px_rgba(80,50,120,0.18)] hover:border-primary/20 transition-all duration-300"
            >
              <div>
                <StarRating className="mb-5" />
                <p className="text-base md:text-lg leading-relaxed text-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
              </div>
              <footer className="mt-6 text-sm font-medium text-muted-foreground">— {testimonial.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
