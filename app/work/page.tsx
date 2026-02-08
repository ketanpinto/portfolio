"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight, Github, ExternalLink, ChevronDown, Mail } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

/**
 * ENHANCED LANDO NORRIS STYLE
 * Added features:
 * - Lifestyle photo gallery
 * - Animated signature reveals
 * - Quote blocks between projects
 * - Partner/tech logos section
 * - Image caption overlays
 */

interface Project {
    id: string
    title: string
    subtitle: string
    year: string
    location?: string
    description: string
    quote?: string
    image: string
    tech: string[]
    links?: {
        github?: string
        live?: string
    }
    featured?: boolean
}

interface GalleryImage {
    src: string
    caption: string
    location: string
}

const projects: Project[] = [
    //     {
    //         id: "smart-ecosystem",
    //         title: "Smart Ecosystem",
    //         subtitle: "IoT Architecture",
    //         year: "2024",
    //         location: "San Francisco, CA",
    //         description: "A centralized hub for home automation using Raspberry Pi Cluster and custom protocol stack. Orchestrating 50+ smart devices with sub-100ms latency across multiple zones.",
    //         quote: "Building the invisible infrastructure that makes homes intelligent.",
    //         image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=1600&h=900&fit=crop",
    //         tech: ["Raspberry Pi", "MQTT", "Python", "Docker", "Redis"],
    //         links: {
    //             github: "https://github.com",
    //             live: "https://example.com"
    //         },
    //         featured: true
    //     },
    //     {
    //         id: "global-dash",
    //         title: "Global Dash",
    //         subtitle: "Real-Time Analytics",
    //         year: "2024",
    //         location: "New York, NY",
    //         description: "Enterprise-grade dashboard processing millions of events per second with WebSocket streams and custom visualization engine.",
    //         image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop",
    //         tech: ["React", "WebSocket", "D3.js", "Node.js"],
    //         links: { live: "https://example.com" }
    //     },
    //     {
    //         id: "lumiere-os",
    //         title: "Lumiere OS",
    //         subtitle: "Computer Vision",
    //         year: "2023",
    //         location: "London, UK",
    //         description: "Interactive smart mirror operating system with gesture controls and AI-powered facial recognition.",
    //         quote: "The future of personal interfaces is invisible until you need it.",
    //         image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=1600&h=900&fit=crop",
    //         tech: ["Python", "OpenCV", "TensorFlow", "React"]
    //     }
]

// const galleryImages: GalleryImage[] = [
//     {
//         src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
//         caption: "Team collaboration session",
//         location: "San Francisco, 2024"
//     },
//     {
//         src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
//         caption: "Product launch event",
//         location: "New York, 2024"
//     },
//     {
//         src: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&h=600&fit=crop",
//         caption: "Speaking at tech conference",
//         location: "Austin, 2024"
//     },
//     {
//         src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
//         caption: "Development sprint",
//         location: "Remote, 2024"
//     },
//     {
//         src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
//         caption: "Client presentation",
//         location: "London, 2023"
//     },
//     {
//         src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
//         caption: "Hackathon victory",
//         location: "Seattle, 2023"
//     }
// ]

const techLogos = [
    "React", "Next.js", "TypeScript", "Python", "Rust", "Go",
    "Docker", "Kubernetes", "AWS", "PostgreSQL", "Redis", "TensorFlow"
]

// --- SCROLL PROGRESS ---
function ScrollProgress() {
    const { scrollYProgress } = useScroll()

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-lime-400 origin-left z-50"
            style={{ scaleX: scrollYProgress }}
        />
    )
}

// --- HERO SECTION ---
function HeroSection() {
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const y = useTransform(scrollYProgress, [0, 0.5], [0, -50])

    return (
        <section ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
            <motion.div className="relative z-10 text-center px-6" style={{ opacity, y }}>
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="inline-block text-xs md:text-sm uppercase tracking-[0.3em] text-lime-400 font-bold mb-8"
                >
                    Full Stack Engineer Since 2024
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-7xl md:text-9xl lg:text-[14rem] font-black tracking-tighter leading-none text-white mb-6"
                >
                    Under Development
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-xl md:text-3xl font-light text-slate-400 mb-12"
                >
                    2025 Product Designer & Developer
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <ChevronDown className="w-8 h-8 text-lime-400 animate-bounce mx-auto" />
                </motion.div>
            </motion.div>

            {/* Animated Signature */}
            <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.15 }}
                transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
                className="absolute bottom-12 right-12 w-64 h-32 hidden lg:block"
                viewBox="0 0 200 100"
            >
                <motion.path
                    d="M 10 50 Q 50 10, 90 50 T 170 50"
                    fill="none"
                    stroke="rgb(163, 230, 53)"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
            </motion.svg>
        </section>
    )
}

// --- MISSION STATEMENT ---
function MissionStatement() {
    return (
        <section className="relative py-32 md:py-48 px-6 bg-slate-950">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                >
                    <p className="text-3xl md:text-5xl lg:text-6xl font-light text-white leading-[1.3] mb-12">
                        <span className="font-bold text-lime-400">Redefining</span> digital
                        experiences, building for <span className="font-bold">performance</span>,
                        creating solutions that{" "}
                        <span className="font-bold text-lime-400">matter</span>.
                    </p>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-px bg-lime-400 origin-left mb-12"
                    />

                    <p className="text-xl md:text-2xl text-slate-400 font-light italic">
                        "It doesn't matter where you start, it's how you progress from there."
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

// --- PROJECT CARD ---
function ProjectCard({ project, index }: { project: Project; index: number }) {
    const isEven = index % 2 === 0

    return (
        <section className="relative py-12 md:py-24">
            <div className="container mx-auto max-w-7xl px-6">
                {project.featured ? (
                    // Featured Layout
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-150px" }}
                        transition={{ duration: 1 }}
                    >
                        {/* Image */}
                        <div className="relative h-[70vh] md:h-[85vh] mb-12 group overflow-hidden">
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.8 }}
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                            {/* Badges */}
                            <div className="absolute top-8 left-8 flex gap-3">
                                <div className="px-5 py-2 bg-lime-400 text-slate-950 text-xs font-black uppercase tracking-widest">
                                    {project.year}
                                </div>
                                {project.location && (
                                    <div className="px-5 py-2 bg-white/10 backdrop-blur-sm text-white text-xs font-medium uppercase tracking-wider">
                                        {project.location}
                                    </div>
                                )}
                            </div>

                            {/* Bottom Label */}
                            <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="text-sm uppercase tracking-[0.3em] text-lime-400 font-bold">
                                    Featured Project
                                </span>
                            </div>
                        </div>

                        {/* Content Grid */}
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                            <div>
                                <span className="text-xs uppercase tracking-[0.4em] text-lime-400 font-bold mb-6 block">
                                    {project.subtitle}
                                </span>
                                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.95]">
                                    {project.title}
                                </h2>
                                <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className="space-y-8">
                                {/* Tech */}
                                <div>
                                    <h3 className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-4 font-bold">
                                        Technology
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-4 py-2 text-sm bg-white/5 border border-white/10 text-slate-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Links */}
                                {project.links && (
                                    <div className="flex gap-6 pt-4">
                                        {project.links.github && (
                                            <a
                                                href={project.links.github}
                                                className="group flex items-center gap-2 text-white hover:text-lime-400 transition-colors"
                                            >
                                                <Github className="w-5 h-5" />
                                                <span className="font-medium text-sm uppercase tracking-wider">View Code</span>
                                                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                            </a>
                                        )}
                                        {project.links.live && (
                                            <a
                                                href={project.links.live}
                                                className="group flex items-center gap-2 text-white hover:text-lime-400 transition-colors"
                                            >
                                                <span className="font-medium text-sm uppercase tracking-wider">Visit Live</span>
                                                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Quote */}
                        {project.quote && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center py-20 mt-16 border-t border-white/5"
                            >
                                <p className="text-2xl md:text-4xl lg:text-5xl font-light text-white italic max-w-5xl mx-auto leading-relaxed">
                                    "{project.quote}"
                                </p>

                                {/* Signature after quote */}
                                <motion.div
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 0.3 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, delay: 0.3 }}
                                    className="mt-12 flex justify-center"
                                >
                                    <svg className="w-48 h-24" viewBox="0 0 200 100">
                                        <motion.path
                                            d="M 10 50 Q 50 20, 90 50 T 170 50"
                                            fill="none"
                                            stroke="rgb(163, 230, 53)"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </motion.div>
                            </motion.div>
                        )}
                    </motion.div>
                ) : (
                    // Standard Layout
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-150px" }}
                        transition={{ duration: 0.8 }}
                        className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center"
                    >
                        <div className={`relative h-[55vh] md:h-[65vh] group overflow-hidden ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.8 }}
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-6 left-6 flex gap-2">
                                <div className="px-4 py-2 bg-lime-400 text-slate-950 text-xs font-black uppercase">
                                    {project.year}
                                </div>
                                {project.location && (
                                    <div className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-xs font-medium uppercase">
                                        {project.location}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className={isEven ? 'md:order-2' : 'md:order-1'}>
                            <span className="text-xs uppercase tracking-[0.4em] text-lime-400 font-bold mb-4 block">
                                {project.subtitle}
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                                {project.title}
                            </h2>
                            <p className="text-lg text-slate-300 leading-relaxed mb-8">
                                {project.description}
                            </p>

                            <div className="mb-8">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="px-4 py-2 text-sm bg-white/5 border border-white/10 text-slate-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {project.links && (
                                <div className="flex gap-6">
                                    {project.links.github && (
                                        <a href={project.links.github} className="group flex items-center gap-2 text-white hover:text-lime-400 transition-colors">
                                            <Github className="w-5 h-5" />
                                            <span className="font-medium text-sm uppercase">Code</span>
                                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </a>
                                    )}
                                    {project.links.live && (
                                        <a href={project.links.live} className="group flex items-center gap-2 text-white hover:text-lime-400 transition-colors">
                                            <span className="font-medium text-sm uppercase">Live</span>
                                            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>

                        {project.quote && (
                            <div className="md:col-span-2 text-center py-12 mt-8 border-t border-white/5">
                                <p className="text-2xl md:text-3xl font-light text-white italic max-w-4xl mx-auto">
                                    "{project.quote}"
                                </p>
                            </div>
                        )}
                    </motion.div>
                )}
            </div>
        </section>
    )
}

// --- GALLERY SECTION ---
function GallerySection() {
    return (
        <section className="relative py-24 px-6 bg-slate-950">
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-xs uppercase tracking-[0.4em] text-lime-400 font-bold mb-6 block">
                        Behind the Scenes
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight">
                        Highlights
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {galleryImages.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative aspect-[4/3] group overflow-hidden"
                        >
                            <img
                                src={img.src}
                                alt={img.caption}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <p className="text-sm font-medium mb-1">{img.caption}</p>
                                <p className="text-xs text-lime-400 uppercase tracking-wider">{img.location}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// --- TECH STACK ---
function TechSection() {
    return (
        <section className="relative py-32 px-6 bg-slate-950 border-t border-white/5">
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-xs uppercase tracking-[0.4em] text-lime-400 font-bold mb-6 block">
                        Partners & Technologies
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight">
                        Tech Stack
                    </h2>
                </motion.div>

                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {techLogos.map((tech, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="aspect-square flex items-center justify-center bg-white/5 border border-white/10 hover:border-lime-400/50 hover:bg-lime-400/5 transition-all group"
                        >
                            <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors">
                                {tech}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// --- CTA ---
function CTASection() {
    return (
        <section className="relative py-48 px-6 bg-slate-950 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-lime-950/5 to-slate-950" />

            <div className="relative container mx-auto max-w-6xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <span className="text-xs uppercase tracking-[0.4em] text-lime-400 font-bold mb-12 block">
                        Ready to Collaborate?
                    </span>

                    <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white mb-16 tracking-tighter leading-none">
                        Let's build
                        <br />
                        <span className="text-lime-400">together.</span>
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link
                            href="/#contact"
                            className="group inline-flex items-center gap-3 px-12 py-6 bg-lime-400 text-slate-950 text-lg font-black uppercase tracking-wider hover:bg-lime-300 transition-all"
                        >
                            Get in Touch
                            <Mail className="w-6 h-6" />
                        </Link>

                        <a
                            href="mailto:business@youremail.com"
                            className="group inline-flex items-center gap-2 text-slate-400 hover:text-lime-400 transition-colors"
                        >
                            <span className="text-sm uppercase tracking-wider font-medium">business@youremail.com</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>
                    </div>
                </motion.div>

                {/* Large signature element */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.05 }}
                    viewport={{ once: true }}
                    className="absolute -bottom-32 -right-32 text-[25rem] font-black text-lime-400 hidden xl:block pointer-events-none"
                    style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
                >
                    YN
                </motion.div>
            </div>
        </section>
    )
}

// --- MAIN ---
export default function WorkPageLandoEnhanced() {
    return (
        <main className="relative bg-slate-950 text-white">
            {/* <ScrollProgress /> */}
            <Header />

            <HeroSection />
            {/* <MissionStatement /> */}

            {projects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
            ))}

            {/* <GallerySection />
            <TechSection />
            <CTASection />

            <Footer /> */}
        </main>
    )
}