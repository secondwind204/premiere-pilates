import { revalidatePath, revalidateTag } from "next/cache"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const secret = process.env.SANITY_REVALIDATE_SECRET

  if (!secret) {
    return NextResponse.json({ error: "Revalidation not configured" }, { status: 501 })
  }

  const authHeader = request.headers.get("authorization")
  if (authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    revalidatePath("/", "layout")
    revalidateTag("sanity")
  } catch (error) {
    console.error("Revalidation failed:", error)
    return NextResponse.json({ error: "Revalidation failed" }, { status: 500 })
  }

  return NextResponse.json({ revalidated: true, now: Date.now() })
}
