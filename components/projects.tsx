"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  const projects = [
    {
      title: "Smart Home IoT System",
      description:
        "Developed a complete IoT system for home automation using Raspberry Pi, Arduino, and a custom mobile app.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["IoT", "Python", "C++", "React Native"],
      github: "#",
      demo: "#",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Built a full-stack e-commerce platform with user authentication, product management, and payment processing.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
    },
    {
      title: "Real-time Chat Application",
      description:
        "Created a real-time chat application with features like message encryption, file sharing, and user presence.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Socket.io", "Express", "React", "Firebase"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-pink-500/10 opacity-20" />

      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-pink-500">Projects</span>
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden group"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-pink-500/20 border border-pink-500 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-8 border-pink-500 text-black hover:text-white hover:bg-pink-500/20"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-8 border-pink-500 text-black hover:text-white hover:bg-pink-500/20"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
