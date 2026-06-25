import { NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"
import { site } from "@/lib/content/site"

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  phone: z.string().trim().max(40).optional(),
  email: z.string().trim().email("Valid email is required"),
  subject: z.string().trim().max(200).optional(),
  message: z.string().trim().min(1, "Message is required").max(5000),
  company: z.string().max(0).optional(),
})

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    return NextResponse.json(
      { error: "Email is not configured yet. Please call or email Nicole directly." },
      { status: 503 },
    )
  }

  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.errors[0]?.message ?? "Please check the form and try again." },
      { status: 400 },
    )
  }

  const { name, phone, email, subject, message } = parsed.data

  if (parsed.data.company) {
    return NextResponse.json({ success: true })
  }

  const resend = new Resend(apiKey)
  const to = process.env.CONTACT_TO_EMAIL ?? site.contactFormEmail
  const from =
    process.env.RESEND_FROM_EMAIL ?? `${site.name} <contact@${new URL(site.url).hostname}>`

  const emailSubject = subject?.trim()
    ? `[Website] ${subject.trim()}`
    : `[Website] New message from ${name}`

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: emailSubject,
    text: [
      "New contact form submission from premierepilates.org",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      subject ? `Subject: ${subject}` : null,
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  })

  if (error) {
    console.error("Contact form email failed:", error)
    return NextResponse.json(
      { error: "We couldn't send your message. Please call or email Nicole directly." },
      { status: 502 },
    )
  }

  return NextResponse.json({ success: true })
}
