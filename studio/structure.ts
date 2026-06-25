import type { StructureResolver } from "sanity/structure"

const singletonTypes = new Set(["siteSettings", "homepage"])
const singletonIds = new Set(["siteSettings", "homepage"])

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .id("siteSettings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.listItem()
        .title("Homepage")
        .id("homepage")
        .child(S.document().schemaType("homepage").documentId("homepage")),
      S.divider(),
      S.documentTypeListItem("service").title("Services"),
      S.documentTypeListItem("location").title("Locations"),
      S.documentTypeListItem("offering").title("Get Started Pages"),
      S.documentTypeListItem("patientForm").title("Patient Forms"),
    ])

export const singletonActions = new Set(["publish", "discardChanges", "restore"])

export function isSingleton(type: string) {
  return singletonTypes.has(type)
}

export function isSingletonId(id: string) {
  return singletonIds.has(id)
}
