import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <ScrollToTop />
        </div>
    );
}

export default App;
