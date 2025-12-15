import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticlesBackground from './components/ParticlesBackground'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const toggleTheme = () => setDarkMode(!darkMode)

  return (
    <div className="app">
      <ParticlesBackground />
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
