"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 3.0;
    }
  }, []);

  const handleScroll = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGithub = () => {
    window.open("https://github.com/ketanpinto", "_blank");
  };

  const handleCVdownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // make sure the file is in your public folder
    link.download = "KetanPinto_Resume.pdf"; // optional custom filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center">
       {/* Video Background */}
  <video
    ref={videoRef}
    autoPlay
    loop
    muted
    playsInline
    poster="/fallbackimage.jpg"
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source src="/videoplayback.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

      <motion.div
        className="z-10 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Ketan Pinto
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl mb-6 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Computer Systems Engineering Student
        </motion.h2>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.8 }}>
        
          <div className="flex flex-col space-y-4 justify-center items-center sm:flex-row sm:space-y-0 sm:space-x-4"/>
           
          <div className="flex flex-col items-center justify-center mt-8">
  <Button
    variant="outline"
    size="lg"
    className="border-pink-500 text-black hover:text-white hover:bg-pink-500/20"
    onClick={handleScroll}
  >
    Explore My Work
  </Button>

  <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
    <Button
      variant="outline"
      size="lg"
      className="border-cyan-500 text-black hover:text-white hover:bg-cyan-500/20"
      onClick={handleGithub}
    >
      Check out my GitHub
    </Button>

    <Button
      variant="outline"
      size="lg"
      className="border-green-500 text-black hover:text-white hover:bg-green-200/20"
      onClick={handleCVdownload}
    >
      Download my CV
    </Button>
  </div>
</div>
        </motion.div>
      </motion.div>


      

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 1.5,
        }}
      >
        <ChevronDown className="h-8 w-8 text-gray-400" onClick={handleScroll} />
      </motion.div>
    </section>
  )
}


