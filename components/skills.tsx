"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import dynamic from "next/dynamic"
import { Code2, Database, Globe, Cpu, Layers, Terminal } from "lucide-react"

const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), { ssr: false })
import { OrbitControls, Text, Float } from "@react-three/drei"

const SkillSphere = ({ skill, position, color }: { skill: string; position: [number, number, number]; color: string }) => {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Text position={position} fontSize={0.4} color={color} font="/fonts/Inter-Bold.woff" anchorX="center" anchorY="middle">
        {skill}
      </Text>
    </Float>
  )
}

function SkillScene() {
  const skills = [
    { name: "Three.js", pos: [0, 2, 0] as [number, number, number], color: "#ffffff" },
    { name: "Next.js", pos: [2, 0.5, 0] as [number, number, number], color: "#6366f1" },
    { name: "React", pos: [-2, 0.5, 0] as [number, number, number], color: "#8b5cf6" },
    { name: "Node.js", pos: [0, -1.5, 0] as [number, number, number], color: "#ec4899" },
    { name: "Python", pos: [0, 0, 2] as [number, number, number], color: "#fbbf24" },
  ]

  return (
    <>
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      {skills.map((s, i) => (
        <SkillSphere key={i} skill={s.name} position={s.pos} color={s.color} />
      ))}
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skillCategories = [
    { name: "Frontend", icon: Layers, tech: ["React", "Next.js", "TailwindCSS", "Framer Motion"], color: "indigo" },
    { name: "Systems", icon: Cpu, tech: ["Embedded C/C++", "IoT Systems", "Raspberry Pi", "Arduino"], color: "purple" },
    { name: "Backend", icon: Terminal, tech: ["Node.js", "Python", "REST APIs", "PostgreSQL"], color: "pink" },
  ]

  return (
    <section id="skills" className="py-32 relative bg-mesh overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left side: Content & Grid */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <span className="text-indigo-500 font-semibold tracking-widest uppercase text-sm mb-4 block">
                Expertise
              </span>
              <h2 className="text-4xl md:text-6xl font-outfit font-bold tracking-tighter mb-6">
                Technical <span className="text-gradient-primary">Toolkit.</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-md leading-relaxed">
                A diverse set of technologies I use to bring complex hardware and software ideas to life.
              </p>
            </div>

            <div className="grid gap-6">
              {skillCategories.map((category, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:border-white/20 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl bg-${category.color}-500/10 border border-${category.color}-500/20 flex items-center justify-center shrink-0`}>
                    <category.icon className={`w-6 h-6 text-${category.color}-400`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-outfit font-bold mb-2">{category.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.tech.map((t, j) => (
                        <span key={j} className="text-xs text-slate-500 font-medium">
                          {t}{j < category.tech.length - 1 ? " • " : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side: 3D Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="h-[500px] relative glass-card rounded-[3rem] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5" />
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <SkillScene />
            </Canvas>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
