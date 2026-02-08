"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCap, Calendar, MapPin, Briefcase, Award } from "lucide-react"

export default function Education() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  const experiences = [
    {
      title: "Software Developer Intern",
      company: "FLR Spectron",
      period: "May 2025 - Present",
      location: "Dubai, UAE",
      description: "Developing and maintaining high-performance web applications using Next.js, Three.js, and TailwindCSS.",
      icon: Briefcase,
    }
  ]

  const education = [
    {
      degree: "BEng Computer Systems Engineering (Hons)",
      institution: "Middlesex University Dubai",
      period: "2023 - Present",
      location: "Dubai, UAE",
      description: "Focusing on hardware-software co-design, digital systems, and embedded architectures. Core coursework includes Networking, Real-time Systems, and AI.",
      icon: GraduationCap,
    },
    {
      degree: "High School Specialization",
      institution: "Don Bosco High School",
      period: "2020 - 2022",
      location: "Goa, India",
      description: "Specialized in Computer Science, Math, and Physics. Active participant in state-level hackathons.",
      icon: Award,
    }
  ]

  const TimelineItem = ({ item, index, type }: { item: any; index: number; type: 'exp' | 'edu' }) => (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-12 pb-12 last:pb-0"
    >
      {/* Connector */}
      <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-slate-800" />

      {/* Icon Node */}
      <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center z-10 shadow-[0_0_10px_rgba(99,102,241,0.5)]">
        <item.icon className="w-3 h-3 text-indigo-400" />
      </div>

      <div className="glass-card p-6 rounded-2xl hover:border-white/20 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
          <h3 className="text-xl font-outfit font-bold text-white">
            {type === 'exp' ? item.title : item.degree}
          </h3>
          <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 bg-white/5 rounded-full text-slate-400 border border-white/5">
            {item.period}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-4">
          <div className="flex items-center gap-1.5">
            <span className="text-indigo-400 font-semibold">{type === 'exp' ? item.company : item.institution}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>{item.location}</span>
          </div>
        </div>

        <p className="text-slate-400 leading-relaxed text-sm">
          {item.description}
        </p>
      </div>
    </motion.div>
  )

  return (
    <section id="education" className="py-32 relative bg-mesh">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-indigo-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-outfit font-bold tracking-tighter">
                Work <span className="text-indigo-500">Exp.</span>
              </h2>
            </div>

            <div className="relative">
              {experiences.map((exp, i) => (
                <TimelineItem key={i} item={exp} index={i} type="exp" />
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-2xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-outfit font-bold tracking-tighter">
                Education
              </h2>
            </div>

            <div className="relative">
              {education.map((edu, i) => (
                <TimelineItem key={i} item={edu} index={i} type="edu" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
