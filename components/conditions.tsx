import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import {
  Arm,
  BackPain,
  Foot,
  Leg,
  PainManagment,
  Stitches,
  Traumatism,
  Woman,
} from "healthicons-react/outline"
import { getConditionCards } from "@/lib/sanity/fetch"

const iconMap = {
  stitches: Stitches,
  backPain: BackPain,
  woman: Woman,
  leg: Leg,
  arm: Arm,
  foot: Foot,
  traumatism: Traumatism,
  painManagement: PainManagment,
} as const

export async function Conditions() {
  const conditionCards = await getConditionCards()

  return (
    <section id="services" className="py-20 md:py-28 bg-secondary/45">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-12">
          <p className="text-muted-foreground text-sm tracking-[0.25em] uppercase mb-4">Conditions We Treat</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-balance">
            Specialized care for your condition
          </h2>
          <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
            Condition-specific physical therapy and Pilates rehabilitation in St. Augustine — designed to help you
            recover faster and stay pain-free longer.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {conditionCards.map((card) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap]

            return (
              <Link
                key={card.href}
                href={card.href}
                className="group relative flex flex-col bg-card border border-border/80 rounded-2xl p-8 shadow-[0_4px_24px_-4px_rgba(80,50,120,0.12)] hover:shadow-[0_12px_40px_-8px_rgba(80,50,120,0.22)] hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/90 text-primary-foreground shadow-md shrink-0">
                    {Icon && <Icon className="h-9 w-9" width={36} height={36} />}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </div>

                <h3 className="text-xl font-medium mb-4 group-hover:text-primary transition-colors">{card.title}</h3>

                <ul className="space-y-2 flex-1">
                  {card.conditions.map((condition) => (
                    <li key={condition} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary/60">•</span>
                      {condition}
                    </li>
                  ))}
                </ul>
                <span className="inline-block mt-6 text-sm font-medium text-primary group-hover:underline underline-offset-4">
                  Learn More →
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
