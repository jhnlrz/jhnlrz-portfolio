"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, Github, Linkedin, Facebook, Send, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactLinks = [
  { icon: Mail, href: "mailto:johnlorezo14@gmail.com", label: "johnlorezo14@gmail.com" },
  { icon: Phone, href: "tel:+639932148165", label: "+63 993 214 8165" },
  { icon: Github, href: "https://github.com/jhnlrz", label: "github.com/jhnlrz" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/john-lorezo-769710363/", label: "linkedin.com/in/john-lorezo-769710363" },
  { icon: Facebook, href: "https://www.facebook.com/john.lorezo.14/", label: "facebook.com/john.lorezo.14" },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const name = formData.name.trim()
    const email = formData.email.trim()
    const message = formData.message.trim()

    if (!name || !email || !message) return

    setIsSubmitting(true)
    setSubmitStatus("idle")
    setSubmitMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      })

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null
        throw new Error(data?.error || "Failed to send message")
      }

      setSubmitStatus("success")
      setSubmitMessage("Message sent successfully. Thank you!")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong. Please try again."
      setSubmitStatus("error")
      setSubmitMessage(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-8 lg:hidden">
        Contact
      </h2>

      <div className="max-w-2xl">
        <h3 className="text-2xl font-medium text-foreground mb-4">
          Get In Touch
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-8">
          I&apos;m currently looking for new opportunities. Whether you have a question, 
          a project in mind, or just want to say hi, my inbox is always open!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 mb-12">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-muted-foreground">
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-card border-border focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-muted-foreground">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-card border-border focus:border-primary"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm text-muted-foreground">
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Your message..."
              rows={5}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-card border-border focus:border-primary resize-none"
            />
          </div>
          <Button type="submit" className="gap-2" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
            <Send className="w-4 h-4" />
          </Button>
          {submitStatus !== "idle" && (
            <p
              className={`text-sm ${submitStatus === "success" ? "text-primary" : "text-destructive"}`}
              role="status"
            >
              {submitMessage}
            </p>
          )}
        </form>

        <div className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Or reach out directly
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {contactLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <link.icon className="w-4 h-4 shrink-0" />
                <span className="group-hover:underline underline-offset-4">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
