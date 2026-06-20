import { FaqSection } from "@/components/faq-section"
import { homepageFaqs } from "@/lib/content/homepage"

export function FAQ() {
  return (
    <FaqSection
      faqs={homepageFaqs}
      title="Questions & Answers"
      subtitle="FAQ"
      id="faq"
      className="bg-background"
    />
  )
}
