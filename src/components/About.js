import React from 'react'
import '../css/about.css'
const About = () => {
  return (
    <div className='about-container' id="about">
      <h1 className='about-head'>About Me</h1>
      <div className='about-text-container'>
        <div className='about-text'>
          <p>I am a final year student in Indian Institute of Information Technology, Surat, pursuing Bachelor's degree in Electronics & Communication Engineering.
          </p>
          <p>I've always had a strong fascination for programming 👨🏻‍💻 and full-stack web development. As a developer, I find immense joy in the process of learning and constantly enhancing my skills. </p>
          
          <p>Collaboration is something I cherish, and I'm always up for embracing new challenges. Whether it involves crafting innovative features✨, unraveling intricate problems, or optimizing code for peak performance, I'm always eager to dive in and make it happen!⚡</p>
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