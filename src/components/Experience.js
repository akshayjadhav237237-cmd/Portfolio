import React from 'react'
import '../css/experience.css'

const Experience = () => {
    const experiences = [
        {
            company: "Effiya Technologies",
            position: "Analyst",
            duration: "Jul 2024 - Present",
            description: "Currently working on-site in <strong>Abu Dhabi</strong> for one of the largest banks in the UAE, collaborating with business and IT teams on a fraud management project.<br /><br />Developed and configured complex rules and profile logic for the fraud management solution, ensuring real-time fraud detection across multiple banking channels.",
            technologies: ["SAS", "SQL"]
        },
        // Add more experiences as needed
    ];

    return (
        <div className='experience-container' id="experience">
            <h1 className='experience-head text-gradient'>Experience</h1>
            <div className='experience-cards'>
                {experiences.map((exp, index) => (
                    <div key={index} className='experience-card'>
                        <div className='experience-header'>
                            <h2>{exp.position}</h2>
                            <span className='duration'>{exp.duration}</span>
                        </div>
                        <h3 className='company'>{exp.company}</h3>
                        <p className='description' dangerouslySetInnerHTML={{ __html: exp.description }}></p>
                        <div className='tech-stack'>
                            {exp.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className='tech-tag'>{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience 