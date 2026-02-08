"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-mesh">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden group shadow-2xl shadow-indigo-500/10">
              <Image
                src="/meehe.jpg"
                alt="Ketan Pinto"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 glass-card rounded-3xl flex items-center justify-center p-4 text-center">
              <span className="text-xl font-bold font-outfit text-indigo-400">Final Year</span>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <span className="text-indigo-500 font-semibold tracking-widest uppercase text-sm mb-4 block">
                The Story
              </span>
              <h2 className="text-4xl md:text-6xl font-outfit font-bold tracking-tighter mb-6">
                Bridging Hardware <br />
                <span className="text-gradient-primary">& Software.</span>
              </h2>
              <div className="h-1 w-20 bg-indigo-600 rounded-full mb-8" />
            </div>

            <p className="text-xl text-slate-300 leading-relaxed font-inter">
              I'm a <span className="text-white font-semibold">Computer Systems Engineering</span> student at Middlesex University Dubai.
              My expertise lies at the intersection of digital architecture and innovative software development.
            </p>

            <p className="text-lg text-slate-400 leading-relaxed font-inter">
              From building Smart Mirrors to complex IoT ecosystems, I focus on creating systems that are not just functional,
              but seamlessly integrated into the user's life. I'm passionate about embedded systems, full-stack performance,
              and clean, efficient code.
            </p>

            <div className="pt-6 flex flex-wrap gap-3">
              {["Embedded Systems", "Full-Stack Dev", "IoT Architecture", "Problem Solving"].map((tag) => (
                <span
                  key={tag}
                  className="px-5 py-2 glass border-white/5 text-sm font-medium rounded-2xl text-slate-200 hover:border-indigo-500/50 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
