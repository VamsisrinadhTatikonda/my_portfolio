// import React from "react";
// import "./Hero.css";

// const Hero = () => {
//     return (
//         <section id="home" className="hero">
//             <div className="hero-content">
//                 <img src="your-photo.jpg" alt="Anil Kumar" className="hero-img" />
//                 <h1>Hi, I'm <span>Anil Kumar</span></h1>
//                 <p>Frontend Developer | React.js Enthusiast</p>
//                 <div className="hero-buttons">
//                     <a href="#projects" className="btn">View Projects</a>
//                     <a href="#contact" className="btn-outline">Contact Me</a>
//                 </div>
//                 <div className="social-links">
//                     <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
//                         <img src="github-icon.png" alt="GitHub" />
//                     </a>
//                     <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
//                         <img src="linkedin-icon.png" alt="LinkedIn" />
//                     </a>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Hero;

// import React from "react";
// import { ReactTyped } from "react-typed";

// import "./Hero.css";

// const Hero = () => {
//     return (
//         <section id="home" className="hero-section">
//             <div className="hero-content">
//                 <h1>Hello, I'm <span className="highlight">Anil Kumar</span></h1>
//                 <h2>
//                     I'm a{" "}
//                     <ReactTyped
//                         strings={[
//                             "Web Developer 💻",
//                             "React JS Enthusiast ⚛️",
//                             "Python Programmer 🐍",
//                             "AI & Chatbot Builder 🤖"
//                         ]}
//                         typeSpeed={70}
//                         backSpeed={50}
//                         loop
//                     />
//                 </h2>
//                 <p className="intro-text">
//                     Passionate about building smart, user-friendly web applications with modern technologies.
//                 </p>
//                 <a href="#projects" className="hero-btn">View My Projects</a>
//             </div>
//         </section>
//     );
// };

// export default Hero;

import React from "react";
import { ReactTyped } from "react-typed";
import "./Hero.css";
import profilePic from "../assets/vv.jpg"; // <-- Add your image here

const Hero = () => {
    const handleClick = () => {
    window.open("https://github.com/VamsisrinadhTatikonda", "_blank");
};

    return (
        <div className="hero">
            <div className="animated-bg"></div> {/* Background animation */}

            <div className="hero-content">
                <img src={profilePic} alt="Profile" className="profile-img" />

                <h1>
                    Hello, I'm <span className="name">VAMSISRINADH TATIKONDA</span>
                </h1>

                <h2>
                    I'm a{" "}
                    <ReactTyped
                        strings={[
                            "Frontend Developer 💻",
                            "React JS Enthusiast ⚛️",
                            "UI/UX Designer 🎨",
                            "Problem Solver 🧠",
                            "hello react js"
                        ]}
                        typeSpeed={80}
                        backSpeed={80}
                        loop
                    />
                </h2>

                <p>
                    I build responsive, dynamic, and creative web applications using
                    React, JavaScript, and modern web technologies.
                </p>

                <button className="hero-btn" onClick={handleClick}>View My Work</button>
            </div>
        </div>
    );
};

export default Hero;

