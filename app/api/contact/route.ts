import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs"

const RECEIVER_EMAIL = "johnlorezo14@gmail.com"

type ContactRequest = {
  name?: string
  email?: string
  message?: string
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequest
    const name = body.name?.trim() || ""
    const email = body.email?.trim() || ""
    const message = body.message?.trim() || ""

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Please fill in all fields." }, { status: 400 })
    }

    const gmailUser = process.env.GMAIL_USER
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD

    if (!gmailUser || !gmailAppPassword) {
      return NextResponse.json(
        { error: "Server email is not configured yet. Set GMAIL_USER and GMAIL_APP_PASSWORD in .env.local." },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    })

    const subject = `Portfolio message from ${name}`
    const text = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${gmailUser}>`,
      to: RECEIVER_EMAIL,
      replyTo: email,
      subject,
      text,
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { error: "Unable to send message right now. Please try again." },
      { status: 500 }
    )
  }
}
