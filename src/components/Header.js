import React from 'react'
import '../css/header.css'
const Header = () => {
  return (
    <div className='header-container' id = "header">
        <p className='header-subtitle'>Hi, I am</p>
        <h1 className='header-title text-gradient'>Aditya Jadhav</h1>
        <p className='header-subtitle header-desc'>Full Stack Developer & <span className='text-gradient'>Pro</span>grammer</p>
        <div className='social-icons'>
          <a href='https://www.linkedin.com/in/adityajadhav02/' target='_blank'><img src={require('../img/linkedin.png')} alt='linkedin'></img></a>
        
          <a href='https://github.com/adityajadhav02' target='_blank'><img src={require('../img/github-white.png')} alt='github'></img></a>
          <a href='https://www.leetcode.com/aditya517' target='_blank'><img src={require('../img/leetcode.png')} alt='leetcode'></img></a>

        </div>
    </div>
  )
}

export default Header