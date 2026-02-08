"use client"

import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, Github, Mail, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const previewRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5 // Slightly slower for a more premium/calm feel
    }
  }, [])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleGithub = () => {
    window.open("https://github.com/ketanpinto", "_blank")
  }

  const handleCVdownload = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "KetanPinto_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-mesh"
    >
      {/* Video Background with overlay */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30 grayscale"
        >
          <source src="/videoplayback.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950" />
      </div>

      {/* Background Decorative Orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow" />

      <motion.div
        style={{ y: y1, opacity }}
        className="z-10 text-center px-6 max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-white/5 border border-white/10 rounded-full text-indigo-400">
            Available for new opportunities
          </span>
          <h1 className="text-6xl md:text-8xl font-outfit font-bold mb-6 tracking-tighter leading-none">
            Designing <span className="text-gradient-primary">Intelligence</span>.
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-10 font-inter max-w-2xl mx-auto leading-relaxed">
            I'm <span className="text-white font-semibold">Ketan Pinto</span>, a Computer Systems Engineering student building the next generation of IoT and smart systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-white text-slate-950 hover:bg-slate-200 px-8 py-6 text-md font-bold rounded-2xl transition-all duration-300 shadow-xl shadow-white/10 hover:scale-105 active:scale-95"
            onClick={scrollToProjects}
          >
            Explore Projects
          </Button>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="w-14 h-14 rounded-2xl glass-card border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300"
              onClick={handleGithub}
            >
              <Github className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-14 h-14 rounded-2xl glass-card border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
              onClick={handleCVdownload}
            >
              <FileText className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-14 h-14 rounded-2xl glass-card border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-6 h-6" />
            </Button>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="cursor-pointer"
          onClick={scrollToProjects}
        >
          <ChevronDown className="h-8 w-8 text-slate-500 hover:text-white transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  )
}


