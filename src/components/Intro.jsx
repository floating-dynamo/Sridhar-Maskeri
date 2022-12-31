import React from 'react'
import "./Intro.css"
import { Link } from "react-router-dom"
import { GitHub, LinkedIn, Twitter } from '@material-ui/icons'
import medium from "../assets/socials/mediumLogo.png"
import landingPagePic from "../assets/LandingPagePic.png"

const Intro = () => {
  return (
    <div className='intro'>
      <div className='socials'>
        <a href="https://github.com/floating-dynamo" target='_blank' rel="noopener noreferrer">
          <GitHub className='social-icon' fontSize='large' />
        </a>
        <a href="https://twitter.com/SridharMaskeri" target='_blank' rel="noopener noreferrer">
          <Twitter className='social-icon' fontSize='large' />
        </a>
        <a href="https://www.linkedin.com/in/sridhar-maskeri-1714001aa/" target='_blank' rel="noopener noreferrer">
        <LinkedIn className='social-icon' fontSize='large' />
        </a>
        <a href="https://medium.com/@shridharmaskeri" target='_blank' rel="noopener noreferrer">
          <img src={medium} alt="Medium Logo" className='social-icon' id='medium-icon' />
        </a>
      </div>
      <div className='about-me'>
        <p id='title-1'>👋 Hi, I am </p>
        <p id='name'>Sridhar Maskeri 👨‍💻</p>
        <div className='moving-titles'>
          <div className="moving-titles-wrapper">
            <p className="title-2">Web Developer 🚀</p>
            <p className="title-2"> Designer 🚀</p>
            <p className="title-2">Software Engineer 🚀</p>
          </div>
        </div>
        <p id='sub-title'>SWE | Curious | Creative</p>
        <div className='btns'>
          <button className='btn'>Download CV</button>
          <button className='btn'>Contact Me</button>
        </div>
      </div>
      <img id='page-pic' src={landingPagePic} alt="LandingPagePic.png" />
    </div>
  )
}

export default Intro
