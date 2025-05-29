"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 to-cyan-500/10 opacity-20" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center"
      >
        <motion.div variants={itemVariants} className="relative h-[400px] w-full rounded-lg overflow-hidden">
          <Image src="/meehe.jpg?height=800&width=600" alt="Profile" fill className="object-cover rounded-lg" />
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/30 to-transparent" />
        </motion.div>

        <div className="space-y-6">
          <motion.h2 variants={itemVariants} className="text-4xl font-bold">
            About <span className="text-pink-500">Me</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-gray-300 text-lg">
            I'm a Computer Systems Engineering student at Middlesex University Dubai, currently entering my second year.
            My passion lies in creating innovative solutions that bridge hardware and software.
          </motion.p>

          <motion.p variants={itemVariants} className="text-gray-300 text-lg">
            With a strong foundation in both programming and systems architecture, I enjoy tackling complex problems and
            building efficient, elegant solutions. I'm particularly interested in embedded systems, IoT, and full-stack
            development.
          </motion.p>

          <motion.div variants={itemVariants} className="pt-4">
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-pink-500/20 border border-pink-500 rounded-full text-sm">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-purple-500/20 border border-purple-500 rounded-full text-sm">
                Tech Enthusiast
              </span>
              <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500 rounded-full text-sm">Fast Learner</span>
              <span className="px-4 py-2 bg-pink-500/20 border border-pink-500 rounded-full text-sm">Team Player</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
