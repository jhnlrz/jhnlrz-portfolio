import { Navigation } from "@/components/portfolio/navigation"
import { MobileNav } from "@/components/portfolio/mobile-nav"
import { HeroSection } from "@/components/portfolio/hero-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { Footer } from "@/components/portfolio/footer"

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      <MobileNav />
      
      <main className="lg:ml-48 px-6 sm:px-12 lg:px-16 max-w-4xl">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </main>

      {/* Decorative background element */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
      </div>
    </div>
  )
}
