"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export default function Education() {
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="education" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 to-cyan-500/10 opacity-20" />

      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-pink-500">Education</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative border-l-2 border-pink-500 pl-8 ml-4"
          >
            <motion.div variants={itemVariants} className="mb-12 relative">
              <span className="absolute w-5 h-5 bg-pink-500 rounded-full -left-[2.7rem] top-0" />
              <div className="p-6 bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg">
                <div className="flex items-center mb-2">
                  <GraduationCap className="h-5 w-5 text-pink-500 mr-2" />
                  <h3 className="text-xl font-bold">Computer Systems Engineering (Hons)</h3>
                </div>
                <div className="flex items-center text-gray-400 mb-1">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>2023 - Present</span>
                </div>
                <div className="flex items-center text-gray-400 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Middlesex University Dubai</span>
                </div>
                <p className="text-gray-300">
                  Currently in my second year, focusing on both hardware and software aspects of computer systems.
                  Coursework includes programming, digital systems design, networking, and embedded systems.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-12 relative">
              <span className="absolute w-5 h-5 bg-pink-500 rounded-full -left-[2.7rem] top-0" />
              <div className="p-6 bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg">
                <div className="flex items-center mb-2">
                  <GraduationCap className="h-5 w-5 text-pink-500 mr-2" />
                  <h3 className="text-xl font-bold">High School Diploma</h3>
                </div>
                <div className="flex items-center text-gray-400 mb-1">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>2020 - 2022</span>
                </div>
                <div className="flex items-center text-gray-400 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Don Bosco High School, Panaji, Goa</span>
                </div>
                <p className="text-gray-300">
                  Graduated specializing in Physics, Chemistry, Math, Computer Science. Participated in various tech
                  competitions and hackathons.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <span className="absolute w-5 h-5 bg-pink-500 rounded-full -left-[2.7rem] top-0" />
              <div className="p-6 bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg">
                <div className="flex items-center mb-2">
                  <GraduationCap className="h-5 w-5 text-pink-500 mr-2" />
                  <h3 className="text-xl font-bold">Online Certifications</h3>
                </div>
                <div className="flex items-center text-gray-400 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>2021 - Present</span>
                </div>
                <p className="text-gray-300">
                  Completed various certifications in web development, machine learning, and cloud computing from
                  platforms like Coursera, Udemy, and freeCodeCamp.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
