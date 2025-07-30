import React, { useState } from 'react'
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu'
import Home from './sections/Home'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Home />
      <About />
      <Projects />
      <Contact/>
      <Footer/>
    </>
  )
}

export default App