import type { FaqItem } from "@/lib/content/services"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

type FaqSectionProps = {
  faqs: FaqItem[]
  title?: string
  subtitle?: string
  id?: string
  className?: string
}

export function FaqSection({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "FAQ",
  id = "faq",
  className = "",
}: FaqSectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-12">
          <p className="text-muted-foreground text-sm tracking-[0.25em] uppercase mb-4">{subtitle}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-balance">{title}</h2>
        </div>

        <Accordion type="single" collapsible className="max-w-3xl">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
