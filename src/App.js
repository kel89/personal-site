// import logo from './logo.svg';
import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

// This one is sick: https://github.com/Sridhar-C-25/react_portfolio_2

import Aos from "aos";
import "aos/dist/aos.css";
import Experience from './components/Experience';

function App() {
    useEffect(() => {
        Aos.init({
          duration: 1800,
          offset: 100,
          disable: "mobile",
        });
      }, []);
    return (
        <>
            <Navbar />
            <Hero />
            <Skills />
            <Experience />
            {/* Experience -- Model off services */}
            {/* Education -- Model off Testimonials*/}
            <Projects />
            <Contact />
        </>
    )
}

export default App;
