export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  liveUrl: string
  githubUrl: string
}

export const projectCategories = [
  "All",
  "Web Development",
  "E-commerce",
  "Mobile App",
  "Dashboard",
  "Social Media",
  "Education",
] as const

export type ProjectCategory = (typeof projectCategories)[number]

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform built with Next.js, featuring product listings, cart functionality, payment processing with Stripe, user authentication, order management, and an admin dashboard. The platform includes advanced features like product search, filtering, reviews, and real-time inventory management.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "React", "Tailwind CSS", "Stripe", "PostgreSQL", "Prisma"],
    category: "E-commerce",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/ecommerce",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing projects and skills, built with modern web technologies. Features include smooth scrolling navigation, animated sections, contact form with email integration, and a blog section. The site is optimized for performance and SEO.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Next.js"],
    category: "Web Development",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/portfolio",
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description:
      "A productivity application for managing tasks and projects with drag-and-drop functionality. Features include team collaboration, real-time updates, file attachments, time tracking, and detailed analytics. Built with modern technologies for optimal performance.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
    category: "Dashboard",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/task-manager",
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "A comprehensive weather application that displays current and forecasted weather data for any location worldwide. Features include interactive maps, weather alerts, historical data, and customizable widgets. The app uses multiple weather APIs for accurate data.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "API Integration", "Chart.js", "Mapbox", "TypeScript"],
    category: "Dashboard",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/weather-dashboard",
  },
  {
    id: "social-media-app",
    title: "Social Media App",
    description:
      "A modern social media platform with real-time messaging, post sharing, and user interactions. Features include image/video uploads, story functionality, live notifications, and advanced privacy controls. Built with scalability and performance in mind.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Socket.io", "MongoDB", "Cloudinary", "Redis"],
    category: "Social Media",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/social-app",
  },
  {
    id: "learning-platform",
    title: "Learning Platform",
    description:
      "An online learning management system with course creation, video streaming, quizzes, and progress tracking. Features include interactive assignments, discussion forums, certificates, and payment integration for course purchases.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Video.js", "Stripe", "PostgreSQL", "AWS S3"],
    category: "Education",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/learning-platform",
  },
  {
    id: "mobile-banking-app",
    title: "Mobile Banking App",
    description:
      "A secure mobile banking application with account management, money transfers, bill payments, and investment tracking. Features include biometric authentication, real-time notifications, and comprehensive financial analytics.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React Native", "TypeScript", "Node.js", "MongoDB", "JWT"],
    category: "Mobile App",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/banking-app",
  },
  {
    id: "restaurant-website",
    title: "Restaurant Website",
    description:
      "A modern restaurant website with online menu, table reservations, and food ordering system. Features include interactive menu with dietary filters, real-time availability, and integration with payment systems.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "Sanity CMS"],
    category: "Web Development",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/restaurant-site",
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  if (category === "All") {
    return projects
  }
  return projects.filter((project) => project.category === category)
}
