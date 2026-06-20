"use client"

import { useEffect, useRef, useState } from "react"
import { strugglePoints } from "@/lib/content/homepage"
import { differentiators } from "@/lib/content/site"
import {
  Award,
  BadgeCheck,
  HeartPulse,
  Layers,
  ScanSearch,
  User,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react"

const differentiatorIcons: Record<(typeof differentiators)[number], LucideIcon> = {
  "Private, one-on-one sessions (not group PT)": User,
  "Whole-body assessment — we find the root cause": ScanSearch,
  "PT + Pilates combination (a rare specialty)": Layers,
  "25+ years of experience": Award,
  "Alpha-Stem technology": Zap,
  "Women's health expertise": HeartPulse,
  "No insurance hassles (cash-pay; superbill available)": BadgeCheck,
}

export function ProblemSolution() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 lg:items-stretch">
          <div
            className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p className="text-muted-foreground text-sm tracking-[0.25em] uppercase mb-4">Problem / Solution</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-8 text-balance">
              Are you struggling with…
            </h2>

            <ul className="space-y-4 mb-10">
              {strugglePoints.map((point) => (
                <li key={point} className="flex gap-3 text-muted-foreground text-lg">
                  <X className="w-5 h-5 text-destructive/60 shrink-0 mt-1" strokeWidth={2} />
                  {point}
                </li>
              ))}
            </ul>

            <p className="text-lg leading-relaxed text-foreground">
              You deserve better. At Premiere Pilates Rehabilitation & Fitness, you get Nicole&apos;s undivided
              attention for the full hour — every session. No juggling multiple patients. No cookie-cutter exercises.
              Just personalized, hands-on treatment that finds and fixes the root cause of your pain.
            </p>
          </div>

          <div
            className={`h-full transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-primary/15 bg-secondary/75 p-7 md:p-8 shadow-[0_8px_40px_-12px_rgba(80,50,120,0.22)]">
              <div
                className="absolute inset-0 bg-gradient-to-br from-primary/[0.07] via-transparent to-primary/[0.04] pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative flex h-full min-h-0 flex-col">
                <div>
                  <p className="text-muted-foreground text-sm tracking-[0.25em] uppercase mb-3">
                    What Makes Us Different
                  </p>
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight text-balance">
                    Private, personalized care
                  </h3>
                </div>

                <ul className="mt-5 flex flex-col gap-2.5 md:gap-3 lg:mt-6 lg:flex-1 lg:justify-between lg:gap-0">
                  {differentiators.map((item) => {
                    const Icon = differentiatorIcons[item]

                    return (
                      <li key={item} className="flex gap-2.5">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/12 text-primary">
                          <Icon className="w-3.5 h-3.5" strokeWidth={1.75} />
                        </div>
                        <span className="text-[0.8125rem] md:text-sm text-foreground/85 leading-snug pt-px">
                          {item}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
