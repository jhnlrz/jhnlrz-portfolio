"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

const projects = [
  {
    title: "PillMate: A Smart Dispenser Utilizing IoT for Real-Time Medication Scheduling",
    description: "The Smart IoT-Based Medicine Dispenser helps patients manage their medication schedules accurately and conveniently. By integrating IoT technology with automated hardware and a user-friendly dashboard, it provides timely alerts and precise dispensing, reducing missed doses and improving adherence.",
    image: "/projects/pillmate.jpg",
    technologies: ["IoT", "Embedded Systems", "Dashboard", "Automation"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Bubblelicious - Online Ordering Management System",
    description: "The Bubblelicious Online Ordering Management System is a web-based application developed to automate and improve the daily operations of a milk tea business. It replaces manual processes in order handling, inventory tracking, and payment management with a centralized digital system.",
    image: "/projects/bubblelicious.png",
    technologies: ["Web Application", "Order Management", "Inventory", "Payments"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Aithorix - Project Management Software",
    description: "A web-based project management software where project teams can manage, collaborate, and track project progress and produce project timelines, task assignments, records of the meeting, and any information with the use of AI that can help teams for their project.",
    image: "/projects/aithorix.png",
    technologies: ["Project Management", "Collaboration", "AI", "Web Platform"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    title: "VegoBolt - An IoT-Assisted System for Converting Waste Cooking Oil into Energy",
    description: "VegoBolt is an IoT-assisted waste-to-energy system that converts used cooking oil into electrical energy for small-scale charging applications. It collects, filters, and preheats waste cooking oil to power a generator, while integrating sensors and microcontrollers for real-time monitoring, safety control, and system efficiency.",
    image: "/projects/vegobolt.jfif",
    technologies: ["IoT", "Waste-to-Energy", "Sensors", "Monitoring"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    title: "DTS - NFA Document Tracking System",
    description: "The National Food Authority's Document Tracking System is a digital solution designed to manage and monitor the flow of documents within the National Food Authority. It allows staff to log, track, and update document statuses in real-time, ensuring accountability, minimizing misplacement, and streamlining internal workflows. The system also generates reports to support decision-making and maintain organized records.",
    image: "/projects/nfa.png",
    technologies: ["Document Tracking", "Workflow Automation", "Real-Time Monitoring", "Reporting"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
]

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <section id="projects" className="py-20 animate-fade-up [animation-delay:.18s]">
      <div className="mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2 text-shimmer">
          Featured Projects
        </h2>
        <p className="text-muted-foreground max-w-xl">
          Explore my latest work and innovations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <button
            key={index}
            onClick={() => setSelectedProject(project)}
            style={{ animationDelay: `${index * 110}ms` }}
            className="group animate-fade-up overflow-hidden rounded-xl border border-border/50 glass-card hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1 text-left cursor-pointer w-full"
          >
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden bg-muted">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content Container */}
            <div className="p-6 space-y-4">
              <div>
                <h3 className="font-semibold text-foreground text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="secondary"
                    className="bg-primary/15 text-primary/90 hover:bg-primary/25 border-primary/30 text-xs font-medium"
                  >
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && (
                  <Badge 
                    variant="secondary"
                    className="bg-muted text-muted-foreground text-xs"
                  >
                    +{project.technologies.length - 3}
                  </Badge>
                )}
              </div>

              {/* Featured Badge */}
              {project.featured && (
                <div className="pt-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                    Featured
                  </span>
                </div>
              )}

              {/* View Details Indicator */}
              <div className="pt-2 text-xs text-primary/60 group-hover:text-primary transition-colors duration-300">
                Click to view details →
              </div>
            </div>
            </button>
        ))}
      </div>

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto glass-card border-primary/30">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-shimmer">{selectedProject.title}</DialogTitle>
              </DialogHeader>

              {/* Project Image */}
              <div className="relative w-full h-64 rounded-lg overflow-hidden border border-border/60">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Overview</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* All Technologies */}
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="secondary"
                      className="bg-primary/15 text-primary/90 border-primary/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
