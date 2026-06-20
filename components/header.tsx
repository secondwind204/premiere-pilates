"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { primaryCtaCompactClass, primaryCtaCompactInvertedClass } from "@/lib/cta-styles"
import { navLinks, site } from "@/lib/content/site"
import { ChevronDown, Phone } from "lucide-react"

export function Header({ solid = false, lightBackground = false }: { solid?: boolean; lightBackground?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setOpenMobileDropdown(null)
  }

  const isDarkBar = solid || scrolled || mobileMenuOpen
  const useLightNav = lightBackground && !isDarkBar

  const navLinkClass = useLightNav
    ? "text-foreground/80 hover:text-foreground"
    : "text-primary-foreground/90 hover:text-primary-foreground"

  const logoTextClass = useLightNav ? "text-foreground" : "text-primary-foreground"

  const phoneClass = useLightNav
    ? "text-muted-foreground hover:text-foreground"
    : "text-primary-foreground/80 hover:text-primary-foreground"

  const ctaClass = useLightNav ? primaryCtaCompactClass : primaryCtaCompactInvertedClass

  return (
    <header
      className={cn(
        "fixed z-50 transition-all duration-500",
        solid || scrolled || mobileMenuOpen
          ? "bg-primary/95 backdrop-blur-md py-3 top-3 left-3 right-3 rounded-2xl shadow-lg"
          : lightBackground
            ? "bg-transparent py-4 top-0 left-0 right-0"
            : "bg-transparent py-4 top-0 left-0 right-0",
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 flex items-center gap-4 sm:gap-6 min-w-0">
        <Link
          href="/"
          className="flex items-center gap-3 group shrink-0"
          onClick={closeMobileMenu}
          aria-label="Premiere Pilates home"
        >
          <Image
            src="/images/premierepilateslogo.png"
            alt=""
            width={44}
            height={44}
            className="h-10 w-10 md:h-11 md:w-11 object-contain"
            priority
          />
          <span className={cn("font-medium tracking-tight leading-tight", logoTextClass)}>
            <span className="text-sm uppercase tracking-[0.15em] opacity-80">Premiere</span>
            <span className="block text-lg md:text-xl">Pilates</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8 text-sm ml-12 lg:ml-20 xl:ml-28">
          {navLinks.map((item) =>
            "children" in item && item.children ? (
              <li key={item.label} className="relative group">
                <Link href={item.href} className={cn("flex items-center gap-1 transition-colors", navLinkClass)}>
                  {item.label}
                  <ChevronDown className="w-4 h-4" />
                </Link>
                <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <ul className="bg-card border border-border rounded-xl shadow-xl py-2 min-w-[280px]">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2.5 text-foreground/80 hover:text-foreground hover:bg-secondary/50 transition-colors text-sm"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={item.label}>
                <Link href={item.href} className={cn("transition-colors", navLinkClass)}>
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        <div className="hidden lg:flex items-center ml-auto shrink-0">
          <a
            href={site.phoneHref}
            className={cn(
              "inline-flex items-center gap-2 text-sm transition-colors",
              phoneClass,
            )}
          >
            <Phone className="w-4 h-4" />
            {site.phone}
          </a>

          <Link
            href={site.scheduleUrl}
            className={cn(ctaClass, "ml-8")}
          >
            Schedule Evaluation
          </Link>
        </div>

        <button
          className={cn("lg:hidden z-50 ml-auto", useLightNav ? "text-foreground" : "text-primary-foreground")}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="4" y1="16" x2="20" y2="16" />
            </svg>
          )}
        </button>
      </nav>

      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "max-h-[80vh] opacity-100 mt-6 overflow-y-auto" : "max-h-0 opacity-0",
        )}
      >
        <div className="container mx-auto px-6 pb-6">
          <ul className="flex flex-col gap-4 mb-6">
            {navLinks.map((item) =>
              "children" in item && item.children ? (
                <li key={item.label}>
                  <button
                    onClick={() =>
                      setOpenMobileDropdown(openMobileDropdown === item.label ? null : item.label)
                    }
                    className="flex items-center justify-between w-full text-primary-foreground text-2xl font-light"
                  >
                    {item.label}
                    <ChevronDown
                      className={cn("w-5 h-5 transition-transform", openMobileDropdown === item.label && "rotate-180")}
                    />
                  </button>
                  {openMobileDropdown === item.label && (
                    <ul className="mt-3 ml-4 space-y-2 border-l border-primary-foreground/20 pl-4">
                      <li>
                        <Link
                          href={item.href}
                          className="text-primary-foreground/90 text-base block py-1 font-medium"
                          onClick={closeMobileMenu}
                        >
                          Overview
                        </Link>
                      </li>
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="text-primary-foreground/80 text-base block py-1"
                            onClick={closeMobileMenu}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground text-2xl font-light block"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>

          <Link
            href={site.scheduleUrl}
            className={cn(primaryCtaCompactInvertedClass, "w-full mb-3")}
            onClick={closeMobileMenu}
          >
            Schedule Evaluation
          </Link>
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center gap-2 w-full text-sm px-5 py-3 border border-primary-foreground/30 text-primary-foreground rounded-lg"
            onClick={closeMobileMenu}
          >
            <Phone className="w-4 h-4" />
            Call {site.phone}
          </a>
        </div>
      </div>
    </header>
  )
}
