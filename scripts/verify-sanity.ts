/**
 * Check whether content exists in the Sanity dataset (no token required).
 */

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "iqs3w3hj"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production"

async function verify() {
  const query = encodeURIComponent("*[]{ _id, _type }")
  const url = (nocache: boolean) =>
    `https://${projectId}.api.sanity.io/v2024-01-01/data/query/${dataset}?query=${query}${nocache ? `&$tag=${Date.now()}` : ""}`

  let docs: { _id: string; _type: string }[] = []
  for (let attempt = 0; attempt < 5; attempt++) {
    const res = await fetch(url(attempt > 0))
    const json = (await res.json()) as { result: { _id: string; _type: string }[] }
    docs = json.result ?? []
    if (docs.length > 0) break
    await new Promise((r) => setTimeout(r, 1000))
  }
  console.log(`\nDataset "${dataset}" in project ${projectId}: ${docs.length} document(s)\n`)

  if (docs.length === 0) {
    console.log("  (empty — run npm run seed:sanity after setting SANITY_API_WRITE_TOKEN)\n")
    process.exit(1)
  }

  const counts = docs.reduce<Record<string, number>>((acc, doc) => {
    acc[doc._type] = (acc[doc._type] ?? 0) + 1
    return acc
  }, {})

  for (const [type, count] of Object.entries(counts).sort()) {
    console.log(`  ${type}: ${count}`)
  }
  console.log()
}

verify().catch((err) => {
  console.error("Verify failed:", err)
  process.exit(1)
})
