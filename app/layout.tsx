import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SiteProvider } from "@/components/site-provider"
import { getLayoutData } from "@/lib/sanity/fetch"
import { baseMetadata } from "@/lib/seo"
import "./globals.css"

export const revalidate = 3600

const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6b4c8a",
}

export async function generateMetadata(): Promise<Metadata> {
  const { site } = await getLayoutData()

  return {
    metadataBase: new URL(site.url),
    title: {
      default: "Premiere Pilates Rehabilitation and Fitness | Physical Therapy & Pilates in St. Augustine, FL",
      template: "%s | Premiere Pilates Rehabilitation and Fitness",
    },
    description: site.description,
    authors: [{ name: site.owner.name, url: `${site.url}/about` }],
    creator: site.owner.name,
    publisher: site.name,
    category: "health",
    ...baseMetadata(site),
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const layoutData = await getLayoutData()

  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <SiteProvider value={layoutData}>{children}</SiteProvider>
        <Analytics />
      </body>
    </html>
  )
}
