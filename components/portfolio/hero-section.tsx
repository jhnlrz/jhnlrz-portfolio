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
      <div className="max-w-4xl animate-fade-up [animation-delay:.08s]">
        <div className="mt-12 mb-8 flex justify-center lg:justify-start">
          <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-2 border-primary/30 shadow-[0_0_40px_-12px_color-mix(in_oklab,var(--primary)_60%,transparent)] animate-float-slow">
            <Image
              src="/john.jpg"
              alt="John Lorezo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <p className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-primary mb-4 animate-fade-up [animation-delay:.12s]">
          Available for projects
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-shimmer animate-fade-up [animation-delay:.16s]">
          John A. Lorezo
        </h1>
        <h2 className="text-xl sm:text-2xl font-medium text-primary mt-2 animate-fade-up [animation-delay:.2s]">
          Computer Science Student
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl leading-relaxed animate-fade-up [animation-delay:.24s]">
          I build accessible, high-quality web experiences that are both functional and visually refined.
        </p>

        <div className="mt-8 max-w-xl space-y-4 text-muted-foreground leading-relaxed animate-fade-up [animation-delay:.28s]">
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

        <div className="flex items-center gap-4 mt-8 animate-fade-up [animation-delay:.32s]">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid place-items-center h-10 w-10 rounded-full border border-border/70 glass-card text-muted-foreground hover:text-primary hover:border-primary/60 transition-all duration-300 hover:-translate-y-1"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}