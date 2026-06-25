import { pilatesRehabilitationIntro } from "@/lib/content/homepage"

export function PilatesRehabilitation() {
  return (
    <section id="pilates-rehabilitation" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-10">
          <p className="text-muted-foreground text-sm tracking-[0.25em] uppercase mb-4">Pilates Rehabilitation</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-balance">
            {pilatesRehabilitationIntro.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_minmax(0,280px)] gap-10 lg:gap-16 items-start">
          <div className="space-y-6">
            {pilatesRehabilitationIntro.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="rounded-2xl border border-primary/15 bg-secondary/60 p-6 md:p-8 shadow-[0_4px_24px_-4px_rgba(80,50,120,0.12)]">
            <h3 className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Studio Equipment
            </h3>
            <ul className="space-y-2.5">
              {pilatesRehabilitationIntro.equipment.map((item) => (
                <li key={item} className="text-foreground/85 text-sm leading-relaxed flex gap-2.5">
                  <span className="text-primary/60 shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
