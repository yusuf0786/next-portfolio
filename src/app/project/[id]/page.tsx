import { notFound } from "next/navigation"
import { ExternalLink, Github, ArrowLeft, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getProjectById } from "@/lib/projects"
import Link from "next/link"
import Image from "next/image"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectById(params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/#projects" className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <ArrowLeft size={18} />
              Back to Projects
            </Link>
          </Button>
        </div>

        <Card className="max-w-4xl mx-auto border border-[#dfdfdf80] dark:border-[#fdfdfd80]">
          <CardContent className="p-0">
            <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image
                    // width={100}
                    // height={100}
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-auto object-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                />
              <div className="absolute top-6 left-6 bg-cyan-500 text-white dark:text-black rounded-l-lg rounded">
                <span className="bg-primary/90 text-primary-foreground text-base font-medium px-4 py-2 rounded-full flex items-center gap-2">
                  <Tag size={16} />
                  {project.category}
                </span>
              </div>
            </div>

            <div className="p-8">
              <h1 className="text-4xl font-bold mb-6 dark:text-[#fdfdfd80]">{project.title}</h1>

              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">{project.description}</p>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 dark:text-[#fdfdfd80]">Technologies Used</h2>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="text-sm font-medium bg-primary/10 text-primary px-4 py-2 rounded-full dark:text-[#fdfdfd80]">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button asChild size="lg" className="flex-1">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border dark:border-gray-600 dark:text-gray-300"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="flex-1">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Github size={20} />
                    View Code
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
