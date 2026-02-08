"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Github, ExternalLink, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects = [
    {
      title: "Smart Home IoT System",
      description:
        "A comprehensive IoT ecosystem for home automation, integrating Raspberry Pi and custom mobile controllers.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["IoT", "Python", "React Native"],
      github: "https://github.com/ketanpinto",
      demo: "#",
    },
    {
      title: "Lumiere Smart Mirror",
      description:
        "An interactive smart mirror featuring real-time data visualization and Spotify API integration for music control.",
      video: "/mirror.mp4",
      tags: ["React", "Node.js", "Spotify API"],
      github: "https://github.com/ninjkaketan/MYRO/tree/main/smart_mirror_system",
      demo: "https://drive.google.com/file/d/1ZBgeZYVZl3SpjvoPDI2-tfBxYDIayWyd/view?usp=sharing",
    },
    {
      title: "Hardwired Solutions",
      description:
        "High-performance business website with optimized lead generation components and server-side rendering.",
      video: "/hardwiredweb.mp4",
      tags: ["Next.js", "TailwindCSS", "EmailJS"],
      github: "https://github.com/ninjkaketan/hardwiredsolutions",
      demo: "https://hardwiredsolutions.in",
    }
  ]

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-indigo-500 font-semibold tracking-widest uppercase text-sm mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-outfit font-bold tracking-tighter">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card group relative p-4 rounded-[2rem] flex flex-col h-full hover:border-white/20 transition-all duration-500"
            >
              <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6">
                {project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors duration-500" />

                {project.video && (
                  <div className="absolute bottom-3 right-3 glass p-2 rounded-lg">
                    <Play className="w-4 h-4 text-white fill-white" />
                  </div>
                )}
              </div>

              <div className="px-2 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 rounded-full text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-outfit font-bold mb-3 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex gap-3 mt-auto">
                  <Button
                    variant="outline"
                    className="flex-1 glass border-white/10 hover:border-white/20 hover:bg-white/5 text-xs font-bold rounded-xl h-11"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Source
                  </Button>
                  <Button
                    className="flex-1 bg-white text-slate-950 hover:bg-slate-200 text-xs font-bold rounded-xl h-11 shadow-lg shadow-white/5"
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
