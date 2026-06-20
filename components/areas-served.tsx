import Link from "next/link"
import { ArrowUpRight, MapPin } from "lucide-react"
import { locationLinks } from "@/lib/content/site"

export function AreasServed() {
  return (
    <section className="py-16 md:py-20 border-y border-border bg-background" aria-labelledby="areas-served-heading">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-10">
          <p className="text-muted-foreground text-sm tracking-[0.25em] uppercase mb-4">Local Care</p>
          <h2 id="areas-served-heading" className="text-2xl md:text-3xl font-medium tracking-tight text-balance mb-4">
            Physical therapy serving St. Johns County & Northeast Florida
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Premiere Pilates is located in St. Augustine and welcomes patients from across Northeast Florida. Private
            one-on-one physical therapy and Pilates rehabilitation — schedule your evaluation today.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {locationLinks.map((location) => (
            <li key={location.href}>
              <Link
                href={location.href}
                className="group flex items-start justify-between gap-3 bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-md transition-all h-full"
              >
                <span>
                  <span className="flex items-center gap-2 text-lg font-medium group-hover:text-primary transition-colors">
                    <MapPin className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                    {location.label}
                  </span>
                  <span className="block mt-2 text-sm text-muted-foreground">
                    Physical therapy near {location.label}, FL
                  </span>
                </span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary shrink-0" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
