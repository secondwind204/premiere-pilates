"use client"

import { createContext, useContext, type ReactNode } from "react"
import type { Site, NavLink, LocationLink } from "@/lib/content/site"

export type SiteContextValue = {
  site: Site
  navLinks: NavLink[]
  locationLinks: LocationLink[]
  differentiators: string[]
}

const SiteContext = createContext<SiteContextValue | null>(null)

export function SiteProvider({ value, children }: { value: SiteContextValue; children: ReactNode }) {
  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>
}

export function useSiteContext() {
  const ctx = useContext(SiteContext)
  if (!ctx) {
    throw new Error("useSiteContext must be used within SiteProvider")
  }
  return ctx
}
