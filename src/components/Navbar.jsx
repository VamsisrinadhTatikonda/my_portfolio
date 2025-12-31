// import React from "react";
// import "./Navbar.css";

// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <h1 className="logo">Anil Kumar</h1>
//             <ul className="nav-links">
//                 {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
//                     <li key={item}>
//                         <a href={`#${item.toLowerCase()}`}>{item}</a>
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { ThemeContext } from "../context/ThemeContext";
// import "./Navbar.css";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const handleToggle = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleLinkClick = () => {
//         setIsOpen(false); // close menu after clicking a link
//     };

//     return (
//         <nav className="navbar">
//             <div className="logo">Bokka Anil Kumar</div>

//             <div className={`nav-links ${isOpen ? "open" : ""}`}>
//                 <a href="#home" onClick={handleLinkClick}>Home</a>
//                 <a href="#about" onClick={handleLinkClick}>About</a>
//                 <a href="#projects" onClick={handleLinkClick}>Projects</a>
//                 <a href="#skills" onClick={handleLinkClick}>Skills</a>
//                 <a href="#contact" onClick={handleLinkClick}>Contact</a>
//             </div>

//             <div className="hamburger" onClick={handleToggle}>
//                 <div className={`bar ${isOpen ? "rotate1" : ""}`}></div>
//                 <div className={`bar ${isOpen ? "fade" : ""}`}></div>
//                 <div className={`bar ${isOpen ? "rotate2" : ""}`}></div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="logo">Bokka Anil Kumar</div>

            <div className={`nav-links ${isOpen ? "open" : ""}`}>
                <a href="#home" onClick={handleLinkClick}>Home</a>
                <a href="#about" onClick={handleLinkClick}>About</a>
                <a href="#projects" onClick={handleLinkClick}>Projects</a>
                <a href="#skills" onClick={handleLinkClick}>Skills</a>
                <a href="#contact" onClick={handleLinkClick}>Contact</a>
            </div>

            <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={handleToggle}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </nav>
    );
};

export default Navbar;


