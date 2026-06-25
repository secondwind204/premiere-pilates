import { FaqSection } from "@/components/faq-section"
import { getHomepage } from "@/lib/sanity/fetch"

export async function FAQ() {
  const { faqs } = await getHomepage()

  return (
    <FaqSection
      faqs={faqs}
      title="Questions & Answers"
      subtitle="FAQ"
      id="faq"
      className="bg-background"
    />
  )
}
