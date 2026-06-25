import { type SchemaTypeDefinition } from "sanity"
import { homepage } from "./documents/homepage"
import { location } from "./documents/location"
import { offering } from "./documents/offering"
import { patientForm } from "./documents/patientForm"
import { service } from "./documents/service"
import { siteSettings } from "./documents/siteSettings"
import { categoryItems } from "./objects/categoryItems"
import { contentSection } from "./objects/contentSection"
import { faq } from "./objects/faq"
import { pricingItem } from "./objects/pricingItem"
import { testimonial } from "./objects/testimonial"
import { timelinePhase } from "./objects/timelinePhase"
import { titledItems } from "./objects/titledItems"

export const schemaTypes: SchemaTypeDefinition[] = [
  // Objects
  faq,
  testimonial,
  pricingItem,
  categoryItems,
  titledItems,
  timelinePhase,
  contentSection,
  // Documents
  siteSettings,
  homepage,
  service,
  location,
  offering,
  patientForm,
]
