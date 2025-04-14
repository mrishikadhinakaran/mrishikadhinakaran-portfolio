import {motion, useScroll, useSpring} from 'framer-motion'
import { useEffect} from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import Seperation from './components/Seperation'
import Skills from './components/Skills'

function App() {
  const {scrollYProgress} = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  })

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <div className='min-h-screen flex flex-col bg-gradient1'>
      <motion.div
        style={{scaleX}}
        className='origin-left bg-gradient-to-r from-gradient3 to-gradient4 w-full h-2 fixed top-0 left-0 z-50'>
      </motion.div>

      <Header/>
      <section id='Home'>
        <Hero/>
      </section>
      <Seperation/>
      <section id='Technologies'>
        <Skills/>
      </section>
      <Seperation/>
      <section id='About'>
        <About />
      </section>
      <Footer/>
    </div>
  )
}

export default App