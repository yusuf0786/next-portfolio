"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in")
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform built with Next.js, featuring product listings, cart functionality, and payment processing.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "React", "Tailwind CSS", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills, built with modern web technologies.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description: "A productivity application for managing tasks and projects with drag-and-drop functionality.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that displays current and forecasted weather data for any location.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "API Integration", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-800 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#fdfdfd80]">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is built with modern technologies and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group">
                <Image
                width={100}
                height={100}
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#fdfdfd80]">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
