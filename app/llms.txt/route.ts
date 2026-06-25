import { generateLlmsTxt } from "@/lib/content/geo-facts"
import { getContent } from "@/lib/sanity/fetch"

export async function GET() {
  const { site, services, locations } = await getContent()
  const body = generateLlmsTxt(site, services, locations)

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
