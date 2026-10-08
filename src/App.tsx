import { MotionConfig } from "motion/react"
import { About } from "./components/About/About"
import { Contact } from "./components/Contact/Contact"
import { Experience } from "./components/Experience/Experience"
import { Footer } from "./components/Footer/Footer"
import { Hero } from "./components/Hero/Hero"
import { Journey } from "./components/Journey/Journey"
import { Navbar } from "./components/Navbar/Navbar"
import { Projects } from "./components/Projects/Projects"
import { Skills } from "./components/Skills/Skills"

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-50 focus:bg-page focus:px-3 focus:py-2 focus:text-[12px] focus:font-medium focus:tracking-[1px] focus:text-ink"
      >
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <Projects />
        <Experience />
        <Journey />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
