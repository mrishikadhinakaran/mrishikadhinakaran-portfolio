
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import Seperation from './components/Seperation'
import Skills from './components/Skills'
function App() {
  

  return (
  <div className='bg-black min-h-screen flex flex-col '>
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
