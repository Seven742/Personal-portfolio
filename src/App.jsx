import Navbar from "./components/common/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Project from "./sections/Project"
import Contact from "./sections/Contact"

export default function App() {
  return (
    <div className="min-h-screen text-black bg-white dark:bg-slate-900 dark:text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />

    </div>
  )
}
