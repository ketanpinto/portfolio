"use client"

import { useState, useEffect, isValidElement, cloneElement, ReactElement } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Zap, Menu, Star, Code, Layout, Plus, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "About", href: "/#about", icon: Star },
        { name: "Projects", href: "/#projects", icon: Code },
        { name: "Work", href: "/work", icon: Layout },
        { name: "Contact", href: "/#contact", icon: Plus },
    ]

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 24 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full pointer-events-none px-4"
        >
            <motion.div
                layout
                onMouseEnter={() => setIsExpanded(true)}
                onMouseLeave={() => setIsExpanded(false)}
                className={`
          pointer-events-auto relative flex flex-col bg-slate-950/90 backdrop-blur-3xl border border-white/10 
          shadow-[0_20px_80px_rgba(0,0,0,0.9)] cursor-pointer overflow-hidden
          ${isExpanded
                        ? "rounded-[1.5rem] md:rounded-[2rem] p-4 md:px-8 md:py-5 w-full md:w-[450px]"
                        : "rounded-full px-5 md:px-7 py-2 md:py-3 w-max min-w-[160px] md:min-w-[190px]"
                    } 
          ${isScrolled ? "luminescence" : ""}
        `}
                transition={{ type: "spring", stiffness: 300, damping: 30, mass: 1 }}
            >
                <AnimatePresence mode="popLayout" initial={false}>
                    {!isExpanded ? (
                        <motion.div
                            layout
                            key="collapsed"
                            initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
                            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                            exit={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center justify-center gap-8 md:gap-10 w-full"
                        >
                            <div className="flex items-center gap-3">
                                <motion.div layout="position" className="bg-indigo-600 w-7 h-7 md:w-8 md:h-8 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                                    <Zap size={14} className="text-white fill-white/20" />
                                </motion.div>
                                <motion.span layout="position" className="text-sm md:text-base font-outfit font-bold text-white tracking-tight">Ketan.</motion.span>
                            </div>
                            <motion.div layout="position" className="w-[1px] h-5 bg-white/10" />
                            <div className="flex items-center gap-3">
                                <motion.span layout="position" className="text-slate-300 font-bold text-xs md:text-sm">Explore</motion.span>
                                <motion.div layout="position" className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                    <Menu size={12} className="text-indigo-400" />
                                </motion.div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            layout
                            key="expanded"
                            initial={{ opacity: 0, filter: "blur(15px)", y: 10 }}
                            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                            exit={{ opacity: 0, filter: "blur(15px)", y: 10 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col w-full"
                        >
                            <div className="flex items-center justify-between mb-5">
                                <div className="flex items-center gap-4">
                                    <motion.div layout="position" className="bg-indigo-600 w-9 h-9 md:w-11 md:h-11 rounded-xl flex items-center justify-center shadow-2xl shadow-indigo-500/30">
                                        <Zap size={20} className="text-white fill-white/20" />
                                    </motion.div>
                                    <motion.div layout="position" className="flex flex-col">
                                        <h2 className="text-lg md:text-2xl font-outfit font-black text-white leading-none">Ketan</h2>
                                        <p className="text-[8px] md:text-[10px] font-inter text-indigo-400 font-bold uppercase tracking-[0.3em] mt-1">Systems Engineer</p>
                                    </motion.div>
                                </div>
                                <Button
                                    variant="outline"
                                    className="hidden md:flex rounded-lg border-white/10 bg-white/5 hover:bg-white/10 text-white gap-2 font-bold h-9 px-4 text-xs"
                                    onClick={(e) => { e.stopPropagation(); window.open('https://github.com/ketanpinto', '_blank'); }}
                                >
                                    Source <ArrowUpRight size={14} />
                                </Button>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                                {navLinks.map((link) => {
                                    const Icon = link.icon
                                    return (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-indigo-600 group transition-all duration-300 gap-1"
                                            onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }}
                                        >
                                            <div className="text-indigo-400 group-hover:text-white transition-colors">
                                                <Icon size={14} />
                                            </div>
                                            <span className="text-white font-bold text-xs">{link.name}</span>
                                        </Link>
                                    )
                                })}
                            </div>

                            <Button
                                className="w-full bg-indigo-600 hover:bg-indigo-500 rounded-xl h-12 md:h-14 flex items-center justify-center gap-4 font-black text-sm md:text-base text-white shadow-2xl shadow-indigo-600/40"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    const contact = document.getElementById('contact');
                                    if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                                    else window.location.href = '/#contact';
                                    setIsExpanded(false);
                                }}
                            >
                                Let's Build Something <ArrowUpRight size={18} />
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.header>
    )
}
