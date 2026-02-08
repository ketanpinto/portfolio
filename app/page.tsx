"use client"

import { useState, useEffect, useRef, cloneElement, isValidElement, ReactElement } from "react"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion"
import {
  Zap, Menu, X, ArrowUpRight, Github, Mail, Phone, FileText, ChevronDown,
  Code2, Database, Globe, Cpu, Layers, Terminal, Play, ExternalLink,
  GraduationCap, Calendar, MapPin, Briefcase, Award, Send, MessageSquare,
  Heart, Linkedin, Instagram, Plus, Rocket, Star, Code, Layout
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Dynamic Three.js Imports
const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), { ssr: false })
const OrbitControls = dynamic(() => import("@react-three/drei").then((mod) => mod.OrbitControls), { ssr: false })
const Text = dynamic(() => import("@react-three/drei").then((mod) => mod.Text), { ssr: false })
const Float = dynamic(() => import("@react-three/drei").then((mod) => mod.Float), { ssr: false })

// --- TYPES ---
type Position = { x: number; y: number }
type GitHubUser = {
  login: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  name: string;
  bio: string;
}

// --- SUB-COMPONENTS ---

function AnimatedCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", mouseMove)
    return () => window.removeEventListener("mousemove", mouseMove)
  }, [])

  useEffect(() => {
    const handleLinkHover = () => setCursorVariant("link")
    const handleLinkLeave = () => setCursorVariant("default")
    const links = document.querySelectorAll("a, button")
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHover)
      link.addEventListener("mouseleave", handleLinkLeave)
    })
    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHover)
        link.removeEventListener("mouseleave", handleLinkLeave)
      })
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      backgroundColor: "rgba(99, 102, 241, 0.5)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    },
    link: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: "rgba(99, 102, 241, 0.1)",
      border: "1px solid rgba(99, 102, 241, 0.5)",
    },
  }

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[100] hidden md:block backdrop-blur-[2px]"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    />
  )
}

const SkillSphere = ({ skill, position, color }: { skill: string; position: [number, number, number]; color: string }) => {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Text position={position} fontSize={0.4} color={color} anchorX="center" anchorY="middle">
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

function GitHubStats() {
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://api.github.com/users/ketanpinto`);
      const data = await res.json();
      setUserData(data);
    };
    fetchData();
  }, []);

  if (!userData) return <p className="text-white text-center">Loading GitHub stats...</p>;

  return (
    <div className="max-w-md mx-auto bg-slate-900/50 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden text-white border border-white/5">
      <div className="flex items-center gap-4 p-6">
        <img src={userData.avatar_url} alt="GitHub Avatar" className="w-20 h-20 rounded-full border-2 border-indigo-500" />
        <div>
          <h2 className="text-xl font-bold">{userData.name}</h2>
          <p className="text-sm text-gray-400">@{userData.login}</p>
          <p className="text-sm mt-2 text-slate-300">{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-indigo-400 text-sm font-semibold hover:underline mt-2 inline-block">
            View GitHub Profile
          </a>
        </div>
      </div>
      <div className="bg-white/5 p-4 flex justify-around text-sm font-bold border-t border-white/5">
        <div className="text-center"><p className="text-slate-400 uppercase text-[10px] mb-1">Repos</p><p className="text-indigo-400 text-lg">{userData.public_repos}</p></div>
        <div className="text-center"><p className="text-slate-400 uppercase text-[10px] mb-1">Followers</p><p className="text-indigo-400 text-lg">{userData.followers}</p></div>
        <div className="text-center"><p className="text-slate-400 uppercase text-[10px] mb-1">Following</p><p className="text-indigo-400 text-lg">{userData.following}</p></div>
      </div>
    </div>
  );
}

const TimelineItem = ({ item, index, type }: { item: any; index: number; type: 'exp' | 'edu' }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative pl-12 pb-12 last:pb-0"
  >
    <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-indigo-500/20" />
    <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(99,102,241,0.5)]">
      {(() => {
        const Icon = item.icon
        return <Icon className="w-3 h-3 text-indigo-400" />
      })()}
    </div>
    <div className="glass-card p-6 rounded-2xl hover:border-white/20 transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
        <h3 className="text-xl font-outfit font-bold text-white">{type === 'exp' ? item.title : item.degree}</h3>
        <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 bg-white/5 rounded-full text-indigo-400 border border-white/10">{item.period}</span>
      </div>
      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-4">
        <span className="text-indigo-400 font-semibold">{type === 'exp' ? item.company : item.institution}</span>
        <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /><span>{item.location}</span></div>
      </div>
      <p className="text-slate-400 leading-relaxed text-sm">{item.description}</p>
    </div>
  </motion.div>
)

const CANVAS_SIZE = 400;
const SCALE = 20;
const INITIAL_SNAKE = [{ x: 8, y: 8 }, { x: 7, y: 8 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };

function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE);
  const [food, setFood] = useState<Position>({ x: 5, y: 5 });
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  function randomFood(): Position {
    return {
      x: Math.floor(Math.random() * (CANVAS_SIZE / SCALE)),
      y: Math.floor(Math.random() * (CANVAS_SIZE / SCALE)),
    };
  }

  useEffect(() => {
    const preventScroll = (e: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key)) e.preventDefault();
    };
    if (gameStarted) window.addEventListener("keydown", preventScroll, { passive: false });
    return () => window.removeEventListener("keydown", preventScroll);
  }, [gameStarted]);

  useEffect(() => {
    if (!gameStarted || isGameOver) return;
    const context = canvasRef.current?.getContext("2d");
    const interval = setInterval(() => {
      if (!context) return;
      const newSnake = [...snake];
      const head = { ...newSnake[0] };
      head.x += direction.x;
      head.y += direction.y;
      if (head.x < 0 || head.y < 0 || head.x >= CANVAS_SIZE / SCALE || head.y >= CANVAS_SIZE / SCALE ||
        newSnake.some((segment) => segment.x === head.x && segment.y === head.y)) {
        setIsGameOver(true);
        return;
      }
      newSnake.unshift(head);
      if (head.x === food.x && head.y === food.y) setFood(randomFood());
      else newSnake.pop();
      setSnake(newSnake);
      context.fillStyle = "#020617";
      context.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
      context.fillStyle = "#6366f1";
      newSnake.forEach(({ x, y }) => context.fillRect(x * SCALE, y * SCALE, SCALE - 2, SCALE - 2));
      context.fillStyle = "#ef4444";
      context.fillRect(food.x * SCALE, food.y * SCALE, SCALE - 2, SCALE - 2);
    }, 150);
    return () => clearInterval(interval);
  }, [snake, direction, food, isGameOver, gameStarted]);

  useEffect(() => {
    if (!gameStarted) return;
    const handleKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp": if (direction.y === 0) setDirection({ x: 0, y: -1 }); break;
        case "ArrowDown": if (direction.y === 0) setDirection({ x: 0, y: 1 }); break;
        case "ArrowLeft": if (direction.x === 0) setDirection({ x: -1, y: 0 }); break;
        case "ArrowRight": if (direction.x === 0) setDirection({ x: 1, y: 0 }); break;
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [direction, gameStarted]);

  return (
    <div className="flex flex-col items-center gap-6">
      {!gameStarted ? (
        <Button onClick={() => { setGameStarted(true); setIsGameOver(false); setSnake(INITIAL_SNAKE); setDirection(INITIAL_DIRECTION); }} className="bg-indigo-600 hover:bg-indigo-500 h-16 px-10 rounded-2xl text-lg font-bold">Wanna play a game?</Button>
      ) : (
        <>
          <canvas ref={canvasRef} width={CANVAS_SIZE} height={CANVAS_SIZE} className="border border-white/10 rounded-3xl bg-slate-950 shadow-2xl" />
          {isGameOver && (
            <div className="text-center animate-bounce">
              <p className="text-red-500 font-black text-2xl mb-4">Game Over</p>
              <Button onClick={() => { setIsGameOver(false); setSnake(INITIAL_SNAKE); setDirection(INITIAL_DIRECTION); }} className="bg-white text-black font-bold">Try Again</Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}


// --- MAIN PAGE COMPONENT ---

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const heroVideoRef = useRef<HTMLVideoElement>(null)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])


  useEffect(() => { if (heroVideoRef.current) heroVideoRef.current.playbackRate = 1.2 }, [])


  const experiences = [
    { title: "Software Developer Intern", company: "FLR Spectron", period: "May 2025 - Present", location: "Dubai, UAE", description: "Developing and maintaining high-performance web applications using Next.js, Three.js, and TailwindCSS.", icon: Briefcase }
  ]

  const education = [
    { degree: "BEng Computer Systems Engineering (Hons)", institution: "Middlesex University Dubai", period: "2023 - Present", location: "Dubai, UAE", description: "Focusing on hardware-software co-design, digital systems, and embedded architectures. Core coursework includes Networking, Real-time Systems, and AI.", icon: GraduationCap },
    { degree: "High School Specialization", institution: "Don Bosco High School", period: "2020 - 2022", location: "Goa, India", description: "Specialized in Computer Science, Math, and Physics. Active participant in state-level hackathons.", icon: Award }
  ]

  const projects = [
    { title: "Smart Home IoT System", description: "A comprehensive IoT ecosystem for home automation, integrating Raspberry Pi and custom mobile controllers.", image: "/placeholder.svg?height=600&width=800", tags: ["IoT", "Python", "React Native"], github: "https://github.com/ketanpinto", demo: "#" },
    { title: "Lumiere Smart Mirror", description: "An interactive smart mirror featuring real-time data visualization and Spotify API integration for music control.", video: "/mirror.mp4", tags: ["React", "Node.js", "Spotify API"], github: "https://github.com/ninjkaketan/MYRO/tree/main/smart_mirror_system", demo: "https://drive.google.com/file/d/1ZBgeZYVZl3SpjvoPDI2-tfBxYDIayWyd/view?usp=sharing" },
    { title: "Hardwired Solutions", description: "High-performance business website with optimized lead generation components and server-side rendering.", video: "/hardwiredweb.mp4", tags: ["Next.js", "TailwindCSS", "EmailJS"], github: "https://github.com/ninjkaketan/hardwiredsolutions", demo: "https://hardwiredsolutions.in" }
  ]

  const springConfig = { type: "spring", stiffness: 260, damping: 32, mass: 1 }

  return (
    <main className="relative min-h-screen bg-slate-950 text-white overflow-hidden scroll-smooth">
      <AnimatedCursor />

      {/* --- HEADER --- */}
      <Header />

      {/* --- HERO --- */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-mesh">
        <div className="absolute inset-0 z-0">
          <video ref={heroVideoRef} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30 grayscale"><source src="/videoplayback.mp4" type="video/mp4" /></video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950" />
        </div>
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow" />
        <motion.div style={{ y: y1, opacity: heroOpacity }} className="z-10 text-center px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-white/5 border border-white/10 rounded-full text-indigo-400">Available for new opportunities</span>
            <h1 className="text-6xl md:text-8xl font-outfit font-bold mb-6 tracking-tighter leading-none">Designing <span className="text-gradient-primary">Intelligence</span>.</h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-10 font-inter max-w-2xl mx-auto leading-relaxed">I'm <span className="text-white font-semibold">Ketan Pinto</span>, a Computer Systems Engineering student building the next generation of IoT and smart systems.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-slate-950 hover:bg-slate-200 px-8 py-6 text-md font-bold rounded-2xl transition-all duration-300 shadow-xl shadow-white/10 hover:scale-105" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>Explore Projects</Button>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="w-14 h-14 rounded-2xl glass-card border-white/10 hover:border-indigo-500/50" onClick={() => window.open("https://github.com/ketanpinto", "_blank")}><Github className="w-6 h-6" /></Button>
              <Button variant="outline" size="icon" className="w-14 h-14 rounded-2xl glass-card border-white/10 hover:border-purple-500/50" onClick={() => { const l = document.createElement("a"); l.href = "/resume.pdf"; l.download = "Resume.pdf"; l.click(); }}><FileText className="w-6 h-6" /></Button>
              <Button variant="outline" size="icon" className="w-14 h-14 rounded-2xl glass-card border-white/10 hover:border-pink-500/50" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}><Mail className="w-6 h-6" /></Button>
            </div>
          </motion.div>
        </motion.div>
        <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="cursor-pointer"><ChevronDown className="h-8 w-8 text-slate-500" /></motion.div>
        </motion.div>
      </section>

      {/* --- ABOUT --- */}
      <section id="about" className="py-32 relative overflow-hidden bg-mesh">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
              <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden group shadow-2xl shadow-indigo-500/10">
                <Image src="/meehe.jpg" alt="Ketan Pinto" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 glass-card rounded-3xl flex items-center justify-center p-4 text-center"><span className="text-xl font-bold font-outfit text-indigo-400">Final Year</span></div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-8">
              <div><span className="text-indigo-500 font-semibold tracking-widest uppercase text-sm mb-4 block">The Story</span><h2 className="text-4xl md:text-6xl font-outfit font-bold tracking-tighter mb-6">Bridging Hardware <br /><span className="text-gradient-primary">& Software.</span></h2><div className="h-1 w-20 bg-indigo-600 rounded-full mb-8" /></div>
              <p className="text-xl text-slate-300 leading-relaxed font-inter">I'm a <span className="text-white font-semibold">Computer Systems Engineering</span> student at Middlesex University Dubai. Expertise at the intersection of digital architecture and innovative software development.</p>
              <p className="text-lg text-slate-400 leading-relaxed font-inter">From Smart Mirrors to complex IoT ecosystems, I focus on creating systems that are seamlessly integrated into users' lives. Passionate about embedded systems, full-stack performance, and clean code.</p>
              <div className="pt-6 flex flex-wrap gap-3">{["Embedded Systems", "Full-Stack Dev", "IoT Architecture", "Problem Solving"].map((tag) => <span key={tag} className="px-5 py-2 glass border-white/5 text-sm font-medium rounded-2xl text-slate-200">{tag}</span>)}</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SKILLS --- */}
      <section id="skills" className="py-32 relative bg-mesh overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-12">
              <div><span className="text-indigo-500 font-semibold tracking-widest uppercase text-sm mb-4 block">Expertise</span><h2 className="text-4xl md:text-6xl font-outfit font-bold tracking-tighter mb-6">Technical <span className="text-gradient-primary">Toolkit.</span></h2><p className="text-lg text-slate-400 max-w-md">A diverse set of technologies I use to bring complex hardware and software ideas to life.</p></div>
              <div className="grid gap-6">
                {/* Fix naming violation */}
                {[
                  { name: "Frontend", icon: Layers, tech: ["React", "Next.js", "TailwindCSS", "Motion"], color: "emerald" },
                  { name: "Systems", icon: Cpu, tech: ["C/C++", "IoT", "Raspberry Pi", "Arduino"], color: "indigo" },
                  { name: "Backend", icon: Terminal, tech: ["Node.js", "Python", "REST", "PostgreSQL"], color: "purple" }
                ].map((category, i) => {
                  const Icon = category.icon
                  return (
                    <div key={i} className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:border-white/20 transition-all">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0"><Icon className="w-6 h-6 text-indigo-400" /></div>
                      <div><h3 className="text-xl font-outfit font-bold mb-2">{category.name}</h3><div className="flex flex-wrap gap-2 text-xs text-slate-500 font-medium">{category.tech.join(" • ")}</div></div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
            <div className="h-[500px] relative glass-card rounded-[3rem] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent" />
              <Canvas camera={{ position: [0, 0, 5], fov: 75 }}><SkillScene /></Canvas>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROJECTS --- */}
      <section id="projects" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-24">
            <span className="text-indigo-500 font-semibold tracking-widest uppercase text-sm mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-outfit font-bold tracking-tighter">Featured <span className="text-gradient-primary">Projects</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="glass-card group p-4 rounded-[2rem] flex flex-col h-full hover:border-white/20 transition-all">
                <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6">
                  {project.video ? <video src={project.video} autoPlay loop muted playsInline className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" /> : <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />}
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors" />
                </div>
                <div className="px-2 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">{project.tags.map((t, i) => <span key={i} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 rounded-full text-indigo-400">{t}</span>)}</div>
                  <h3 className="text-2xl font-outfit font-bold mb-3 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">{project.description}</p>
                  <div className="flex gap-3 mt-auto"><Button variant="outline" className="flex-1 glass border-white/10 rounded-xl h-11" onClick={() => window.open(project.github, "_blank")}><Github className="mr-2 h-4 w-4" />Source</Button><Button className="flex-1 bg-white text-slate-950 hover:bg-slate-200 rounded-xl h-11 shadow-lg" onClick={() => window.open(project.demo, "_blank")}><ExternalLink className="mr-2 h-4 w-4" />Demo</Button></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SOCIAL --- */}
      <section id="social" className="py-32 relative bg-mesh overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><span className="text-indigo-500 font-semibold tracking-widest uppercase text-sm mb-4 block">Connectivity</span><h2 className="text-4xl md:text-6xl font-outfit font-bold tracking-tighter">Digital <span className="text-gradient-primary">Presence</span></h2></motion.div>
          <div className="max-w-4xl mx-auto glass-card p-10 rounded-[3rem] border-white/5 shadow-2xl overflow-hidden"><GitHubStats /></div>
        </div>
      </section>

      {/* --- EDUCATION --- */}
      <section id="education" className="py-32 relative bg-mesh">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-4 mb-12"><div className="w-12 h-12 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center"><Briefcase className="w-6 h-6 text-indigo-400" /></div><h2 className="text-3xl md:text-4xl font-outfit font-bold tracking-tighter">Work <span className="text-indigo-500">Exp.</span></h2></div>
              <div className="relative">{experiences.map((exp, i) => <TimelineItem key={i} item={exp} index={i} type="exp" />)}</div>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-12"><div className="w-12 h-12 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center"><GraduationCap className="w-6 h-6 text-purple-400" /></div><h2 className="text-3xl md:text-4xl font-outfit font-bold tracking-tighter">Education</h2></div>
              <div className="relative">{education.map((edu, i) => <TimelineItem key={i} item={edu} index={i} type="edu" />)}</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="py-32 relative bg-mesh overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-24"><span className="text-indigo-500 font-semibold tracking-widest uppercase text-sm mb-4 block">Collaboration</span><h2 className="text-4xl md:text-6xl font-outfit font-bold tracking-tighter">Get In <span className="text-gradient-primary">Touch.</span></h2></motion.div>
          <div className="grid lg:grid-cols-5 gap-16 max-w-6xl mx-auto">
            <div className="lg:col-span-2 space-y-8">
              {[
                { icon: Mail, label: "Email", value: "ketanpinto16@gmail.com", color: "indigo" },
                { icon: Phone, label: "Phone", value: "+971 522786730", color: "purple" },
                { icon: MapPin, label: "Location", value: "Abu Dhabi, UAE", color: "pink" }
              ].map((info, i) => {
                const Icon = info.icon
                return (
                  <div key={i} className="glass-card p-6 rounded-2xl flex items-start gap-5 hover:border-white/20 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0"><Icon className="w-6 h-6 text-indigo-400" /></div>
                    <div><h3 className="text-[10px] font-bold tracking-widest uppercase text-slate-500 mb-1">{info.label}</h3><p className="text-lg font-bold text-white">{info.value}</p></div>
                  </div>
                )
              })}
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="lg:col-span-3 glass-card p-10 rounded-[3rem] border-white/5 shadow-2xl">
              <div className="flex items-center gap-4 mb-10"><MessageSquare className="w-6 h-6 text-indigo-400" /><h3 className="text-2xl font-outfit font-bold">Send a Message</h3></div>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Sent!"); }}>
                <div className="grid md:grid-cols-2 gap-6"><Input placeholder="Name" className="h-14 bg-white/5 border-white/10 rounded-2xl" /><Input placeholder="Email" type="email" className="h-14 bg-white/5 border-white/10 rounded-2xl" /></div>
                <Textarea placeholder="Message" className="min-h-[180px] bg-white/5 border-white/10 rounded-2xl" />
                <Button className="w-full h-16 bg-white text-slate-950 font-bold rounded-2xl hover:bg-indigo-600 hover:text-white transition-all shadow-xl shadow-white/5"><Send className="h-5 w-5 mr-3" />Dispatch Message</Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SNAKE GAME --- */}
      {/* <div className="py-32 flex flex-col items-center justify-center bg-mesh border-t border-white/5">
        <h3 className="text-3xl md:text-4xl font-outfit font-bold mb-12 text-indigo-400">Play a Game</h3>
        <SnakeGame />
      </div> */}

      {/* --- FOOTER --- */}
      <Footer />
    </main>
  )
}
