"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import dynamic from "next/dynamic"
import { Code2, Database, Server, Cpu, Globe, Layers } from "lucide-react"

// Dynamically import R3F-related code (no SSR)
const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), { ssr: false })
const OrbitControls = dynamic(() => import("@react-three/drei").then((mod) => mod.OrbitControls), { ssr: false })
const Text = dynamic(() => import("@react-three/drei").then((mod) => mod.Text), { ssr: false })
const Float = dynamic(() => import("@react-three/drei").then((mod) => mod.Float), { ssr: false })

const SkillSphere = ({ skill, position, color }: { skill: string; position: [number, number, number]; color: string }) => {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Text position={position} fontSize={0.3} color={color} anchorX="center" anchorY="middle">
        {skill}
      </Text>
    </Float>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  const skills = [
    { name: "Programming", icon: Code2, color: "bg-pink-500/20", borderColor: "border-pink-500" },
    { name: "Databases", icon: Database, color: "bg-purple-500/20", borderColor: "border-purple-500" },
    { name: "Web Development", icon: Globe, color: "bg-cyan-500/20", borderColor: "border-cyan-500" },
    { name: "Github", icon: Server, color: "bg-pink-500/20", borderColor: "border-pink-500" },
    { name: "Hardware Systems", icon: Cpu, color: "bg-purple-500/20", borderColor: "border-purple-500" },
    { name: "Frontend", icon: Layers, color: "bg-cyan-500/20", borderColor: "border-cyan-500" },
  ]

  return (
    <section id="skills" className="py-20 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-purple-500/10 opacity-20" />

      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-pink-500">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left side skills grid */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-lg border ${skill.borderColor} ${skill.color} backdrop-blur-sm`}
              >
                <div className="flex flex-col items-center text-center">
                  <skill.icon className="h-10 w-10 mb-4" />
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right side 3D canvas */}
          <div className="h-[400px] relative">
            <Canvas>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <SkillSphere skill="JavaScript" position={[0, 1.5, 0]} color="#f7df1e" />
              <SkillSphere skill="Python" position={[1.5, 0.5, 0]} color="#3776ab" />
              <SkillSphere skill="C++" position={[-1.5, 0.5, 0]} color="#00599c" />
              <SkillSphere skill="React" position={[0.8, -0.8, 0]} color="#61dafb" />
              <SkillSphere skill="Node.js" position={[-0.8, -0.8, 0]} color="#339933" />
              <SkillSphere skill="C" position={[0, -1.5, 0]} color="#f29111" />
              <SkillSphere skill="Git" position={[0, 0, 1]} color="#f05032" />
              <SkillSphere skill="Next.js" position={[0, 0, -1]} color="#2496ed" />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  )
}
