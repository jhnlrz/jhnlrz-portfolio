const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Dart", "Python", "Java", "HTML/CSS", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "Django"],
  },
  {
    title: "Tools & Platforms",
    skills: ["VS Code", "Figma", "Git", "Docker", "Vercel"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 animate-fade-up [animation-delay:.24s]">
      <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-8 lg:hidden">
        Skills
      </h2>

      <div className="grid sm:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} style={{ animationDelay: `${index * 120}ms` }} className="space-y-4 animate-fade-up rounded-xl p-5 glass-card">
            <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm bg-card/70 border border-border/70 rounded-md text-foreground hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 cursor-default hover:-translate-y-0.5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
