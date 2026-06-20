import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { site } from "@/lib/content/site"
import { baseMetadata } from "@/lib/seo"
import "./globals.css"

const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6b4c8a",
}

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Premiere Pilates | Physical Therapy & Pilates in St. Augustine, FL",
    template: "%s | Premiere Pilates",
  },
  description: site.description,
  authors: [{ name: site.owner.name, url: `${site.url}/about` }],
  creator: site.owner.name,
  publisher: site.name,
  category: "health",
  ...baseMetadata(),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
