export const allContentQuery = `{
  "siteSettings": *[_type == "siteSettings"][0],
  "homepage": *[_type == "homepage"][0],
  "services": *[_type == "service"] | order(headline asc),
  "locations": *[_type == "location"] | order(name asc),
  "offerings": *[_type == "offering"] | order(headline asc),
  "patientForms": *[_type == "patientForm"] | order(title asc)
}`
