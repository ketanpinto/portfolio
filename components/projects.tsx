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

  type Project =
    | {
        title: string;
        description: string;
        image: string;
        tags: string[];
        github: string;
        demo: string;
        website?: string;
        video?: undefined;
      }
    | {
        title: string;
        description: string;
        video: string;
        tags: string[];
        github: string;
        demo: string;
        image?: undefined;
        website?: string;
      };

  const projects = [
    {
      title: "Smart Home IoT System",
      description:
        "Developed a complete IoT system for home automation using Raspberry Pi, Arduino, and a custom mobile app.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["IoT", "Python", "C++", "React Native"],
      github: "#",
      demo: "#",
      website: undefined,
    },
    {
      title: "Lumiere Mirror - Smart Mirror",
      description:
        "Built a fully functioning smart mirror that displays day-to-day info and updates as well as plays music by connecting to Spotify.",
      video: "/mirror.mp4?height=600&width=800",
      tags: ["React", "Node.js", "MongoDB", "Javascript, Spotify API"],
      github: "https://github.com/ninjkaketan/MYRO/tree/main/smart_mirror_system",
      demo: "https://drive.google.com/file/d/1ZBgeZYVZl3SpjvoPDI2-tfBxYDIayWyd/view?usp=sharing",
      website: undefined,
    },
    {
      title: "Hardwired Solutions - Website",
      description:
        "Developed and hosted a website for a company using Next.js and optimized TailwindCSS",
        video: "/hardwiredweb.mp4?height=600&width=800",
      tags: ["Lucide", "Next.js", "TailwindCSS", "EmailJS"],
      github: "https://github.com/ninjkaketan/hardwiredsolutions",
      demo: "https://hardwiredsolutions.in",
      website: undefined,
    }
    
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
                {project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    className="object-cover transition-transform duration-500 group-hover:scale-110 w-full h-full"
                  />
                ) : (
                  <div>
                    {project.website ? (
                      <iframe
                        src={project.website}
                        title={project.title}
                        className="object-cover transition-transform duration-500 group-hover:scale-110 w-full h-full"
                      />
                    ) : (
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}
                  </div>
                )}
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
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-8 border-pink-500 text-black hover:text-white hover:bg-pink-500/20"
                    onClick={() => window.open(project.demo, "_blank")}
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
