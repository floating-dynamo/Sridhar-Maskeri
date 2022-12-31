import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills'

const Homepage = () => {
  return (
    <div>
        <div style={{position:'relative',height:'100vh'}}>
            <Navbar/>
            <Intro/>
        </div>
        <div style={{height:'140vh'}}>
            <About/>
        </div>
        <div style={{height:'100vh'}}>
          <Skills/>
        </div>
        <div style={{height:'100vh'}}>
          <Portfolio />
        </div>
        <div>
          <Footer />
        </div>
    </div>
  )
}

export default Homepage