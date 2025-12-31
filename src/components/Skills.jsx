// import React, { useEffect, useState } from "react";
// import "./Skills.css";
// import useScrollAnimation from "../hooks/useScrollAnimation";
// import { ReactTyped } from "react-typed";

// const Skills = () => {
//     useScrollAnimation();

//     const skillSet = [
//         { name: "HTML", level: 90 },
//         { name: "CSS", level: 85 },
//         { name: "JavaScript", level: 80 },
//         { name: "React.js", level: 75 },
//         { name: "Python", level: 70 },
//         { name: "SQL", level: 75 },
//     ];

//     const [animatedLevels, setAnimatedLevels] = useState(
//         skillSet.map(() => 0)
//     );

//     // Animate progress bar width
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setAnimatedLevels((prev) =>
//                 prev.map((val, i) =>
//                     val < skillSet[i].level ? val + 2 : skillSet[i].level
//                 )
//             );
//         }, 50);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <section id="skills" className="skills fade-in">
//             <h2 className="section-title">Skills</h2>
//             <div className="skills-container">
//                 {skillSet.map((skill, index) => (
//                     <div className="skill-box" key={index}>
//                         <h3>{skill.name}</h3>
//                         <div className="progress-bar">
//                             <div
//                                 className="progress"
//                                 style={{ width: `${animatedLevels[index]}%` }}
//                             >
//                                 {/* React Typed Animation */}
//                                 {animatedLevels[index] === skill.level && (
//                                     <ReactTyped
//                                         strings={[`${skill.level}%`]}
//                                         typeSpeed={50}
//                                         showCursor={false}
//                                     />
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default Skills;

import React, { useEffect, useState, useRef } from "react";
import "./Skills.css";
import { ReactTyped } from "react-typed";

const Skills = () => {
    const skillSet = [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "SQL", level: 80 },
    ];

    const [animatedLevels, setAnimatedLevels] = useState(skillSet.map(() => 0));
    const sectionRef = useRef(null); // Ref to the skills section

    useEffect(() => {
        const section = sectionRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // When section comes into view, start animation
                        let progress = skillSet.map(() => 0);

                        const interval = setInterval(() => {
                            progress = progress.map((val, i) =>
                                val < skillSet[i].level ? val + 2 : skillSet[i].level
                            );
                            setAnimatedLevels([...progress]);

                            // Stop when all done
                            if (progress.every((val, i) => val >= skillSet[i].level)) {
                                clearInterval(interval);
                            }
                        }, 40);
                    }
                });
            },
            { threshold: 0.3 } // trigger when 30% of section visible
        );

        if (section) observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" ref={sectionRef} className="skills fade-in">
            <h2 className="section-title">Skills</h2>
            <div className="skills-container">
                {skillSet.map((skill, index) => (
                    <div className="skill-box" key={index}>
                        <h3>{skill.name}</h3>
                        <div className="progress-bar">
                            <div
                                className="progress"
                                style={{ width: `${animatedLevels[index]}%` }}
                            >
                                {animatedLevels[index] === skill.level && (
                                    <ReactTyped
                                        strings={[`${skill.level}%`]}
                                        typeSpeed={50}
                                        showCursor={false}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;


