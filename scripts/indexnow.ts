/**
 * Submit site URLs to IndexNow (Bing, Yandex, Seznam, Naver, etc.).
 *
 * Requires the key file at /public/{INDEXNOW_KEY}.txt to be live on the host.
 *
 *   npm run indexnow
 */

const KEY = process.env.INDEXNOW_KEY ?? "4bc61d838e8389eb71eefa791fd0949e"
// Live site serves www (apex 308s there). IndexNow key must be on the same host as submitted URLs.
const HOST = process.env.INDEXNOW_HOST ?? "www.premierepilates.org"
const BASE = `https://${HOST}`

const PATHS = [
  "/",
  "/about",
  "/contact",
  "/get-started",
  "/get-started/physical-therapy",
  "/get-started/pilates",
  "/get-started/forms",
  "/locations/st-augustine",
  "/locations/ponte-vedra",
  "/locations/jacksonville",
  "/locations/st-johns-county",
  "/locations/palm-coast",
  "/services/post-surgical-rehabilitation",
  "/services/hip-back-pain",
  "/services/womens-health",
  "/services/knee-rehabilitation",
  "/services/shoulder-injury",
  "/services/sports-injury",
  "/services/chronic-pain",
  "/services/foot-ankle",
  "/services/oov",
  "/services/konnector",
  "/llms.txt",
]

async function main() {
  const keyLocation = `${BASE}/${KEY}.txt`
  const urlList = PATHS.map((path) => (path === "/" ? BASE : `${BASE}${path}`))

  // Confirm key file is reachable before submitting
  const keyRes = await fetch(keyLocation, { redirect: "follow" })
  const keyBody = (await keyRes.text()).trim()
  if (!keyRes.ok || keyBody !== KEY) {
    console.error(
      `\nKey file not ready at ${keyLocation}\n` +
        `Status: ${keyRes.status}, body: ${JSON.stringify(keyBody.slice(0, 80))}\n` +
        `Deploy the key file (public/${KEY}.txt), then re-run: npm run indexnow\n`
    )
    process.exit(1)
  }

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation,
    urlList,
  }

  console.log(`Submitting ${urlList.length} URLs to IndexNow for ${HOST}...`)

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  })

  const text = await res.text()
  console.log(`IndexNow response: ${res.status} ${res.statusText}`)
  if (text) console.log(text)

  if (res.status === 200 || res.status === 202) {
    console.log(`\nSuccess — ${urlList.length} URLs submitted.`)
    if (res.status === 202) console.log("202 Accepted: key validation pending; engines will verify the key file.")
    process.exit(0)
  }

  process.exit(1)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
