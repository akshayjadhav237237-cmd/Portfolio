import React from 'react'
import '../css/about.css'
const About = () => {
  return (
    <div className='about-container' id="about">
      <h1 className='about-head hover-underline-animation'>About Me</h1>
      <div className='about-text-container'>
        <div className='about-text'>
          <p>I am pre-final year student in Indian Institute of Information Technology, Surat. Currently  I am pursuing Bachelors of Technology in Electronics & Communication Engineering.
          </p>
          <p>I have a deep interest in programming 👨🏻‍💻 and full stack web development. </p>
          <p>As a developer, I am passionate about learning new things and continuously improving my skills. I enjoy collaborating with others and am always eager to take on new challenges. Whether it's building a new feature, debugging complex issues, or optimizing code, I am always ready to tackle the task at hand⚡</p>
          <div className='resume-btn'><a href='https://drive.google.com/file/d/1ZVB19GwAwSj7UQ9my98PNTIrimUhc7g5/view?usp=sharing' target="_blank" className='text-gradient' rel="noreferrer">Resume</a></div>
        </div>

        <div className='about-img'>
          <img src={require('../img/profile1.jpeg')} alt='about'></img>
        </div>
      </div>
    </div>
  )
}

export default About