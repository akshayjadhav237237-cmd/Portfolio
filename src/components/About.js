import React from 'react'
import '../css/about.css'
const About = () => {
  return (
    <div className='about-container' id="about">
      <h1 className='about-head'>About Me</h1>
      <div className='about-text-container'>
        <div className='about-text'>
          <p>I am a graduate from Indian Institute of Information Technology, Surat, with a Bachelor's degree in Electronics & Communication Engineering. Currently working as an Analyst at Effiya Technologies in <strong>Abu Dhabi</strong>, where I'm contributing to fraud management solutions for one of the UAE's largest banks.</p>
          <p>I specialize in full-stack development and data analysis, with expertise in React, Node.js, and SAS. My passion lies in solving complex problems and creating innovative solutions that bridge technical and business needs. 👨🏻‍💻</p>
          
          <p>I thrive in collaborative environments and enjoy taking on new challenges. Whether it's developing applications or implementing data-driven solutions, I'm always eager to learn and grow! ⚡</p>
          <div className='resume-btn'>
            <a href='https://drive.google.com/file/d/1ZVB19GwAwSj7UQ9my98PNTIrimUhc7g5/view?usp=sharing' target="_blank" className='text-gradient' rel="noreferrer">Resume</a>
          </div>
        </div>

        <div className='about-img'>
          <img src={require('../img/profile1.jpeg')} alt='about'></img>
        </div>
      </div>
    </div>
  )
}

export default About