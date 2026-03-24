import { Navigation } from "@/components/portfolio/navigation"
import { MobileNav } from "@/components/portfolio/mobile-nav"
import { HeroSection } from "@/components/portfolio/hero-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { Footer } from "@/components/portfolio/footer"

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Navigation />
      <MobileNav />
      
      <main className="relative z-10 lg:ml-48 px-6 sm:px-12 lg:px-16 max-w-5xl">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </main>

      {/* Decorative background element */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-16 right-[-8%] h-112 w-md rounded-full bg-primary/10 blur-3xl animate-float-slow" />
        <div className="absolute bottom-[8%] left-[-10%] h-88 w-88 rounded-full bg-accent/10 blur-3xl animate-float-slow [animation-delay:1.5s]" />
        <div className="absolute top-[35%] left-[42%] h-40 w-40 rounded-full bg-primary/10 blur-2xl animate-pulse-glow" />
      </div>
    </div>
  )
}
