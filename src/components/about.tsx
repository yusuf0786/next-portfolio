"use client"

import { useEffect, useRef } from "react"
import { User, Mail, MapPin, Calendar, Briefcase, GraduationCap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-900 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-[#fdfdfd80]">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-3 border-primary/20">
              <img src="/placeholder.svg?height=600&width=600" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 dark:text-[#fdfdfd80]">Who am I?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate web developer with over 5 years of experience creating modern and responsive websites. I
              specialize in front-end development using React and Next.js, with a strong foundation in UI/UX design
              principles.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              My goal is to build applications that are not only visually appealing but also highly functional and
              user-friendly. I'm constantly learning new technologies and techniques to improve my skills and deliver
              better results.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 flex items-center gap-3 dark:text-white">
                  <User className="text-primary" size={20} />
                  <span>Yusuf Ansari</span>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-center gap-3 dark:text-white">
                  <Mail className="text-primary" size={20} />
                  <span>email@example.com</span>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-center gap-3 dark:text-white">
                  <MapPin className="text-primary" size={20} />
                  <span>Your Location</span>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-center gap-3 dark:text-white">
                  <Calendar className="text-primary" size={20} />
                  <span>Available for Freelance</span>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          <div>
            <div className="flex items-center gap-3 mb-6 dark:text-[#fdfdfd80]">
              <Briefcase className="text-primary" size={24} />
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Senior Frontend Developer",
                  company: "Tech Company",
                  period: "2021 - Present",
                  description:
                    "Led the development of multiple web applications using Next.js and React. Implemented responsive designs and optimized performance.",
                },
                {
                  title: "Web Developer",
                  company: "Digital Agency",
                  period: "2018 - 2021",
                  description:
                    "Developed websites for various clients using modern JavaScript frameworks. Collaborated with designers to implement pixel-perfect UIs.",
                },
              ].map((item, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <h4 className="text-lg font-semibold text-[#fdfdfd80]">{item.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {item.company} | {item.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6 dark:text-[#fdfdfd80]">
              <GraduationCap className="text-primary" size={24} />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-8">
              {[
                {
                  degree: "Master's in Computer Science",
                  institution: "University Name",
                  period: "2016 - 2018",
                  description: "Specialized in web technologies and user interface design. Graduated with honors.",
                },
                {
                  degree: "Bachelor's in Software Engineering",
                  institution: "University Name",
                  period: "2012 - 2016",
                  description:
                    "Studied programming fundamentals, data structures, and web development. Participated in multiple hackathons.",
                },
              ].map((item, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <h4 className="text-lg font-semibold text-[#fdfdfd80]">{item.degree}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {item.institution} | {item.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
