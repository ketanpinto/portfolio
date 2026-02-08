"use client"

import Link from "next/link"
import { Github, Linkedin, Instagram, Heart } from "lucide-react"

export default function Footer() {
    return (
        <footer className="py-16 bg-slate-950 border-t border-white/5 relative overflow-hidden">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start">
                        <span className="text-2xl font-outfit font-bold tracking-tighter mb-2">
                            KP<span className="text-indigo-500">.</span>
                        </span>
                        <p className="text-slate-500 text-sm font-inter">Building the future of systems engineering.</p>
                    </div>
                    <div className="flex flex-col items-center gap-8">
                        <div className="flex space-x-6">
                            {[
                                { icon: Github, href: "https://github.com/ketanpinto" },
                                { icon: Linkedin, href: "https://linkedin.com/in/ketanpinto" },
                                { icon: Instagram, href: "https://instagram.com/ketanpinto" }
                            ].map((social, i) => {
                                const Icon = social.icon
                                return (
                                    <Link
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        className="w-12 h-12 rounded-2xl glass border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500 transition-all"
                                    >
                                        <Icon className="h-6 w-6" />
                                    </Link>
                                )
                            })}
                        </div>
                        <p className="text-sm text-slate-600 font-bold flex items-center">
                            Made with <Heart className="h-4 w-4 text-indigo-500 mx-2 fill-indigo-500" /> by Ketan Pinto &bull; &copy; {new Date().getFullYear()}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
