import Navigation from '../components/ui/Navigation'
import Hero from '../components/sections/Hero'
import Projects from '../components/sections/Projects'
import Experience from '../components/sections/Experience'
import Skills from '../components/sections/Skills'
import Certifications from '../components/sections/Certifications'
import About from '../components/sections/About'
import Contact from '../components/sections/Contact'
import BackgroundElements from '../components/ui/BackgroundElements'
import Footer from '../components/ui/Footer'
import styles from '../styles/home-new.module.css'

export default function Home() {
  return (
    <main id="top" className={styles.container}>
      <BackgroundElements />
      <Navigation />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Certifications />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
