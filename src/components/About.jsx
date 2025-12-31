import React from "react";
import "./About.css";
import useScrollAnimation from "../hooks/useScrollAnimation";
import profilePic from "../assets/vv.jpg";

const About = () => {
    useScrollAnimation();
    return (
        <section id="about" className="about fade-in">
            <div className="about-container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <img
                        src={profilePic}
                        alt="Anil Kumar"
                        className="about-img"
                    />
                    <div className="about-text">
                        <p>
                            Hi, I'm <span>VAMSISRINADH TATIKONDA</span>, a passionate and dedicated web developer
                            who loves turning ideas into reality through code. I specialize in building
                            responsive and user-friendly websites using <b>HTML, CSS, JavaScript,</b> and <b>React.js</b>.
                        </p>

                        <p>
                            I enjoy solving real-world problems and continuously improving my skills
                            through hands-on projects. My goal is to become a full-stack developer and
                            work on innovative projects that make a positive impact.
                        </p>

                        <p>
                            When I’m not coding, I enjoy learning about new technologies and improving
                            my problem-solving abilities.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
