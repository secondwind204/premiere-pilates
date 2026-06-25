/**
 * Seed via Sanity CLI (uses your `sanity login` session — no API token needed).
 *
 *   npx sanity login   # once
 *   npm run seed:sanity:cli
 */

import { execSync } from "child_process"
import { writeFileSync } from "fs"
import { resolve } from "path"
import { buildSeedDocuments } from "./sanity-seed-data"

const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production"
const ndjsonPath = resolve(__dirname, "../studio/seed.ndjson")

const documents = buildSeedDocuments()
writeFileSync(
  ndjsonPath,
  documents.map((doc) => JSON.stringify(doc)).join("\n") + "\n",
  "utf8"
)

console.log(`\nWrote ${documents.length} documents to studio/seed.ndjson`)
console.log(`Importing into dataset "${dataset}" using your Sanity login...\n`)

try {
  execSync(`npx sanity dataset import seed.ndjson ${dataset} --replace`, {
    cwd: resolve(__dirname, "../studio"),
    stdio: "inherit",
  })
} catch {
  process.exit(1)
}

console.log("\nRunning verify...")
execSync("npm run seed:verify", { cwd: resolve(__dirname, ".."), stdio: "inherit" })
