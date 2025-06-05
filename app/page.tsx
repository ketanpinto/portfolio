import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import AnimatedCursor from "@/components/animated-cursor"
import SnakeGame from "@/components/snakegame"
import GitHubStats from "@/components/githubstats"
import Header from "@/components/header"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <Header />
      <AnimatedCursor />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GitHubStats />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
