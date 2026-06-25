import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { primaryCtaClass, primaryCtaInvertedClass } from "@/lib/cta-styles"
import { getSite } from "@/lib/sanity/fetch"

type CtaSectionProps = {
  title?: string
  description?: string
  dark?: boolean
  className?: string
  id?: string
}

export async function CtaSection({
  title = "Ready to feel better?",
  description = "Schedule your initial evaluation. Nicole will assess your condition, explain what's causing your pain, and build a personalized plan.",
  dark = true,
  className = "",
  id = "contact",
}: CtaSectionProps) {
  const site = await getSite()

  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${dark ? "bg-primary text-primary-foreground" : "bg-secondary/50"} ${className}`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6 text-balance">{title}</h2>
          <p
            className={`text-lg leading-relaxed mb-10 ${dark ? "text-primary-foreground/75" : "text-muted-foreground"}`}
          >
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link href={site.scheduleUrl} className={dark ? primaryCtaInvertedClass : primaryCtaClass}>
              Schedule Evaluation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={site.phoneHref}
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium tracking-wide border transition-colors ${
                dark
                  ? "border-primary-foreground/30 hover:bg-primary-foreground/10"
                  : "border-border hover:bg-background"
              }`}
            >
              <Phone className="w-4 h-4" />
              Call {site.phone}
            </a>
          </div>

          <p className={`text-sm ${dark ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
            {site.name} • {site.address.full}
            <br />
            Serving {site.serviceAreas.join(", ")}
          </p>
        </div>
      </div>
    </section>
  )
}
