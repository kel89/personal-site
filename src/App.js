// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

// This one is sick: https://github.com/Sridhar-C-25/react_portfolio_2

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Skills />
            <Projects />
            <Contact />
        </>
    )
}

export default App;
