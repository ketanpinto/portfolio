"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCap, Calendar, MapPin, CalendarHeart, Network, Workflow } from "lucide-react"

export default function Education() {
  const educationRef = useRef(null)
  const isEducationInView = useInView(educationRef, { once: false, amount: 0.3 })

  const experienceRef = useRef(null)
  const isExperienceInView = useInView(experienceRef, { once: false, amount: 0.3 })

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
    <div>
      <section id="experience" className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 to-cyan-500/10 opacity-20" />

        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            My <span className="text-pink-500">Experience</span>
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            <motion.div
              ref={experienceRef}
              variants={containerVariants}
              initial="hidden"
              animate={isExperienceInView ? "visible" : "hidden"}
              className="relative border-l-2 border-pink-500 pl-8 ml-4"
            >
              <motion.div variants={itemVariants} className="mb-12 relative">
                <span className="absolute w-5 h-5 bg-pink-500 rounded-full -left-[2.7rem] top-0" />
                <div className="p-6 bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Network className="h-5 w-5 text-pink-500 mr-2" />
                    <h3 className="text-xl font-bold">Something</h3>
                  </div>
                  <div className="flex items-center text-gray-400 mb-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>2024 - Present</span>
                  </div>
                  <div className="flex items-center text-gray-400 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Example Company</span>
                  </div>
                  <p className="text-gray-300">
                    Developed and maintained web applications using React and Node.js.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-12 relative">
                <span className="absolute w-5 h-5 bg-pink-500 rounded-full -left-[2.7rem] top-0" />
                <div className="p-6 bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Workflow className="h-5 w-5 text-pink-500 mr-2" />
                    <h3 className="text-xl font-bold">example</h3>
                  </div>
                  <div className="flex items-center text-gray-400 mb-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>2023</span>
                  </div>
                  <div className="flex items-center text-gray-400 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Another Example Company</span>
                  </div>
                  <p className="text-gray-300">
                    Assisted in the development of a new e-commerce platform.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

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
              ref={educationRef}
              variants={containerVariants}
              initial="hidden"
              animate={isEducationInView ? "visible" : "hidden"}
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
                    <h3 className="text-xl font-bold">High School</h3>
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
    </div>
  )
}
