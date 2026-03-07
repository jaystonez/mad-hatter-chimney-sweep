import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, phone, message, image, imageName } = await request.json()

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required" },
        { status: 400 }
      )
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set")
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      )
    }

    const emailPayload: Record<string, unknown> = {
      from: "Mad Hatter Contact Form <services@themadhatterchimneysweep.com>",
      to: ["services@themadhatterchimneysweep.com"],
      subject: `New Contact Form Submission from ${name}`,
      reply_to: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message || "No message provided"}</p>
        ${image ? "<p><strong>Photo attached</strong></p>" : ""}
      `,
    }

    if (image && typeof image === "string") {
      const base64Data = image.split(",")[1]
      const mimeMatch = image.match(/data:(.+?);base64/)
      const contentType = mimeMatch ? mimeMatch[1] : "image/jpeg"
      emailPayload.attachments = [
        {
          filename: imageName || "photo.jpg",
          content: base64Data,
          type: contentType,
        },
      ]
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify(emailPayload),
    })

    if (!res.ok) {
      const errorData = await res.json()
      console.error("Resend API error:", errorData)
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
