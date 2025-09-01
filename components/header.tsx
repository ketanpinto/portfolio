"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/colleges" },
    //{ name: "Offerings", href: "/offerings" },
    { name: "Blog", href: "/blog" },
    // { name: "About Us", href: "/partner-with-us" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header
      className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 px-4 w-[90%] max-w-7xl ${
        isScrolled
          ? "bg-black/40 backdrop-blur-md shadow-md border border-white/20"
          : "bg-black/30 backdrop-blur-md shadow-sm border border-white/10"
      } rounded-full`}
    >
      <div className="flex justify-between items-center h-16 px-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white hover:text-gray-200 transition-colors">
              Ketan Pinto
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-3 py-2 text-sm font-medium transition-all duration-200 ${
                isActive(link.href)
                  ? "text-white border-b-2 border-[#63D6E0]"
                  : "text-white hover:text-[#63D6E0] hover:scale-105"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className=" text-black hover:bg-gray-50 hover:scale-105">
            Get Started
          </Button>
          <Button className="bg-black hover:bg-[#63D6E0] hover:text-gray-900 hover:scale-105">
            Partner
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-gray-900 p-2 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden absolute left-0 right-0 mx-auto w-full overflow-hidden rounded-b-3xl transition-all duration-300 px-4 w-[90%] max-w-4xl ease-in-out bg-white/100 backdrop-blur-lg ${
          isMenuOpen ? "max-h-[500px] py-4 px-6" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-all ${
                isActive(link.href)
                  ? "text-gray-900 bg-gray-100"
                  : "text-gray-700 hover:text-gray-900"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col space-y-2 mt-4">
          <Button variant="outline" className="w-full">
            Get Started
          </Button>
          <Button className="w-full bg-black hover:bg-gray-800">Partner</Button>
        </div>
      </div>
    </header>
  )
}
