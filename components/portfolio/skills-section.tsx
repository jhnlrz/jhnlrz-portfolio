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
    <section id="skills" className="py-20">
      <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-8 lg:hidden">
        Skills
      </h2>

      <div className="grid sm:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm bg-card border border-border rounded-md text-foreground hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-default"
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
