import {motion,useScroll} from 'motion/react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import Seperation from './components/Seperation'
import Skills from './components/Skills'
function App() {
  
const {scrollYProgress}=useScroll()
  return (
  <div className='bg-black min-h-screen flex flex-col '>
    <motion.div
    style={{scaleX:scrollYProgress}}
    transition={{ ease: "easeOut", duration: 0.3 }}
    className='origin-left bg-yellow-300 w-full h-2 fixed top-0 left-0 z-50'></motion.div>
<Header/>
<Hero/>
<Seperation/>
<Skills/>
<Seperation/>
<About/>
<Footer/>
  </div>
  )}
export default App
