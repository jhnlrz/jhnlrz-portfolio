import { Github, Linkedin, Mail, Facebook } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const socialLinks = [
  { icon: Mail, href: "mailto:johnlorezo14@gmail.com", label: "Email" },
  { icon: Github, href: "https://github.com/jhnlrz", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/john-lorezo-769710363/", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/john.lorezo.14/", label: "Facebook" },
]

export function HeroSection() {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 lg:py-0">
      <div className="max-w-4xl">
        <div className="mt-12 mb-8 flex justify-center lg:justify-start">
          <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-2 border-primary/20">
            <Image
              src="/john.jpg"
              alt="John Lorezo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
          John A. Lorezo
        </h1>
        <h2 className="text-xl sm:text-2xl font-medium text-primary mt-2">
          Computer Science Student
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl leading-relaxed">
          I build accessible, high-quality web experiences that are both functional and visually refined.
        </p>

        <div className="mt-8 max-w-xl space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I&apos;m a Computer Science student at{" "}
            <span className="text-foreground font-medium">University of Caloocan City </span> 
            with a strong interest in frontend development and UI/UX design. 
            I enjoy turning ideas into responsive, intuitive interfaces while ensuring performance and usability remain a priority.
          </p>
          <p>
            My work focuses on combining thoughtful design with solid engineering to create seamless digital experiences. 
            I&apos;m continuously improving my skills and building projects that reflect both creativity and functionality.
          </p>
          <p>
            Outside of coding, I spend time exploring new technologies, contributing to projects, and staying updated 
            with the latest trends in web development.
          </p>
        </div>

        <div className="flex items-center gap-4 mt-8">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}