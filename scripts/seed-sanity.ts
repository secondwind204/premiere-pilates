/**
 * Import content using an API write token (for CI/automation).
 *
 * Prefer `npm run seed:sanity:cli` — uses your `sanity login` session instead.
 *
 * To create a token with write access via CLI:
 *   cd studio && npx sanity tokens add "Seed script" --role=editor --yes
 */

import { createClient, type SanityClient } from "@sanity/client"
import { readFileSync, existsSync } from "fs"
import { resolve } from "path"
import { buildSeedDocuments } from "./sanity-seed-data"

function loadEnvFile(filename: string) {
  const path = resolve(process.cwd(), filename)
  if (!existsSync(path)) return

  for (const line of readFileSync(path, "utf8").split("\n")) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith("#")) continue
    const eq = trimmed.indexOf("=")
    if (eq === -1) continue
    const key = trimmed.slice(0, eq).trim()
    const value = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, "")
    if (key && process.env[key] === undefined) {
      process.env[key] = value
    }
  }
}

loadEnvFile(".env")
loadEnvFile(".env.local")

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "iqs3w3hj"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production"
const token = process.env.SANITY_API_WRITE_TOKEN

if (!token) {
  console.error(
    "\nMissing SANITY_API_WRITE_TOKEN.\n\n" +
      "Easiest option — use your Sanity login instead:\n\n" +
      "  npx sanity login\n" +
      "  npm run seed:sanity:cli\n\n" +
      "Or create a token with write role via CLI:\n\n" +
      "  cd studio && npx sanity tokens add \"Seed script\" --role=editor --yes\n"
  )
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-01-01",
  useCdn: false,
})

async function commitInChunks(client: SanityClient, documents: Record<string, unknown>[], chunkSize = 5) {
  for (let i = 0; i < documents.length; i += chunkSize) {
    const chunk = documents.slice(i, i + chunkSize)
    const tx = client.transaction()
    for (const doc of chunk) {
      tx.createOrReplace(doc)
    }
    const label = chunk.map((d) => d._id).join(", ")
    process.stdout.write(`  uploading ${label}... `)
    try {
      await tx.commit()
      console.log("ok")
    } catch (err) {
      console.log("FAILED")
      throw err
    }
  }
}

async function verify(client: SanityClient) {
  const docs = await client.fetch<{ _type: string }[]>(`*[]{ _type }`)
  const counts = Object.entries(
    docs.reduce<Record<string, number>>((acc, doc) => {
      acc[doc._type] = (acc[doc._type] ?? 0) + 1
      return acc
    }, {})
  ).map(([type, count]) => ({ type, count }))
  return { total: docs.length, counts }
}

async function seed() {
  console.log(`\nSeeding project ${projectId} / dataset "${dataset}"\n`)
  await commitInChunks(client, buildSeedDocuments())
  const { total, counts } = await verify(client)
  console.log(`\nDone — ${total} documents in dataset:\n`)
  for (const row of counts) {
    console.log(`  ${row.type}: ${row.count}`)
  }
  console.log(`\nOpen studio: npm run studio\n`)
}

seed().catch((err) => {
  const details = err?.responseBody ?? err?.details ?? err
  console.error("\nSeed failed:\n", typeof details === "string" ? details : JSON.stringify(details, null, 2))
  console.error(
    "\nTip: tokens from the web UI often lack create permission.\n" +
      "Use `npm run seed:sanity:cli` instead, or run:\n" +
      "  cd studio && npx sanity tokens add \"Seed\" --role=editor --yes\n"
  )
  process.exit(1)
})
