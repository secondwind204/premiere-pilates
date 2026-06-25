"use client"

import { useState } from "react"
import type { FormDownload } from "@/lib/content/forms"
import { useSiteContext } from "@/components/site-provider"
import { Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

type FormCategory = { id: string; label: string }

type GetStartedFormsProps = {
  intakeForms: FormDownload[]
  formCategories: readonly FormCategory[]
}

export function GetStartedForms({ intakeForms, formCategories }: GetStartedFormsProps) {
  const { site } = useSiteContext()
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const filteredForms =
    activeCategory === "all"
      ? intakeForms
      : intakeForms.filter((form) => form.category === activeCategory)

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-wrap gap-2 mb-10">
          <Button
            variant={activeCategory === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory("all")}
            className="rounded-full"
          >
            All Forms
          </Button>
          {formCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className="rounded-full"
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredForms.map((form) => (
            <div key={form.title} className="bg-card border border-border rounded-2xl p-6 flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium mb-2">{form.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{form.description}</p>
                {form.href ? (
                  <a
                    href={form.href}
                    download
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
                  >
                    <Download className="w-4 h-4" />
                    Download {form.fileLabel ?? "File"}
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Available at your visit —{" "}
                    <a href={`mailto:${site.email}`} className="text-foreground hover:underline">
                      contact us
                    </a>{" "}
                    if you need a copy beforehand.
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground mt-10 max-w-2xl">
          Questions about intake forms? Call{" "}
          <a href={site.phoneHref} className="text-foreground hover:underline">
            {site.phone}
          </a>{" "}
          or email{" "}
          <a href={`mailto:${site.email}`} className="text-foreground hover:underline">
            {site.email}
          </a>
          .
        </p>
      </div>
    </section>
  )
}
