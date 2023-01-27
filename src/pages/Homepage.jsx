import React from "react";
import About from "../components/home/About";
import Contact from "../components/home/Contact";
import Footer from "../components/home/Footer";
import Intro from "../components/home/Intro";
import Navbar from "../components/home/Navbar";
import Portfolio from "../components/home/Portfolio";
import Skills from "../components/home/Skills";

const Homepage = () => {
  return (
    <div>
      <div >
        <Navbar />
        <Intro />
      </div>
      <div >
        <About />
      </div>
      <div >
        <Skills />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
