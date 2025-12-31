import React, { useState } from "react";
import "./Contact.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Contact = () => {
    useScrollAnimation();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for reaching out! Your message has been sent.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="contact fade-in">
            <h2 className="section-title">Contact Me</h2>
            <div className="contact-container">
                <form onSubmit={handleSubmit} className="contact-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit" className="btn">Send Message</button>
                </form>

                <div className="contact-info">
                    <h3>Let's Connect</h3>
                    <p>Email: <a href="mailto:bokkaanil125@gmail.com">bokkaanil125@gmail.com</a></p>
                    <p className="location">Location: Hyderabad</p>
                    <div className="social-icons">
                        <a href="https://github.com/AnilKumar1471" target="_blank" rel="noreferrer">
                            <img src="https://www.svgrepo.com/download/503359/github.svg" alt="GitHub" />
                        </a>
                        <a href="https://www.linkedin.com/in/anil-kumar-a0b387324" target="_blank" rel="noreferrer">
                            <img src="https://www.svgrepo.com/download/448234/linkedin.svg" alt="LinkedIn" />
                        </a>
                        <a href="https://leetcode.com/u/tB9WZeJNJC/">
                            <img src="https://www.svgrepo.com/download/306328/leetcode.svg" alt="leetcode" />
                        </a>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <p>© {new Date().getFullYear()} Anil Kumar | All Rights Reserved</p>
            </footer>
        </section>
    );
};

export default Contact;
