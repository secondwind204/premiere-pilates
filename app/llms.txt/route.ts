import { generateLlmsTxt } from "@/lib/content/geo-facts"

export function GET() {
  return new Response(`${generateLlmsTxt()}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  })
}
