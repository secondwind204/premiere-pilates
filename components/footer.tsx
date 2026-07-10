import { getLayoutData } from "@/lib/sanity/fetch"
import Link from "next/link"
import { Facebook, Instagram, Phone, Star } from "lucide-react"

export async function Footer() {
  const { site, navLinks, locationLinks } = await getLayoutData()
  const servicesLink = navLinks.find((l) => l.label === "Services")

  return (
    <footer className="py-16 md:py-24 border-t border-border bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="block font-medium tracking-tight">
                <span className="text-sm uppercase tracking-[0.15em] text-muted-foreground">{site.brandLine1}</span>
                <span className="block text-sm uppercase tracking-[0.12em] text-muted-foreground/80 mt-0.5">
                  {site.brandLine2}
                </span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-4">{site.description}</p>
            <address className="not-italic text-sm text-muted-foreground mb-4">
              {site.address.full}
              <br />
              <a href={site.phoneHref} className="hover:text-foreground transition-colors">
                {site.phone}
              </a>
              {" · "}
              <a href={`mailto:${site.email}`} className="hover:text-foreground transition-colors">
                {site.email}
              </a>
            </address>
            <div className="flex items-center gap-2 text-sm mb-4">
              <div className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-muted-foreground">
                {site.googleReviews.ratingDisplay} Stars ({site.googleReviews.count} Google Reviews)
              </span>
            </div>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Instagram className="w-4 h-4" aria-hidden="true" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Facebook className="w-4 h-4" aria-hidden="true" />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={site.social.googleBusiness}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Google Business Profile
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-medium mb-4">Services</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {servicesLink?.children?.map((child) => (
                <li key={child.href}>
                  <Link href={child.href} className="hover:text-foreground transition-colors">
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-medium mb-4">Areas Served</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {locationLinks.map((location) => (
                <li key={location.href}>
                  <Link href={location.href} className="hover:text-foreground transition-colors">
                    {location.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-medium mb-4">Contact</h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>{site.hoursDisplay}</li>
              <li>
                <a href={site.phoneHref} className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  Get directions
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Schedule evaluation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row md:items-end justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="space-y-4 md:text-right">
            <p>Serving {site.serviceAreas.join(" • ")}</p>
            <p>
              Web Presence by{" "}
              <a
                href="https://secondwind.cloud/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:text-foreground transition-colors"
              >
                Second Wind
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
