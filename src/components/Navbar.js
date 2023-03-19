import '../css/navbar.css';
import { useState } from 'react'
import { Turn as Hamburger } from 'hamburger-react'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h1 className='text-gradient'>Aditya</h1>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger color='#a3b3bc' />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            {/* <li>
              <a className='hover-underline-animation' href="#">Home</a>
            </li> */}
            <li>
              <a className='hover-underline-animation' href="#about">About</a>
            </li>
            <li>
              <a className='hover-underline-animation' href="#skills">Skills</a>
            </li>
            <li>
              <a className='hover-underline-animation' href="#projects">Projects</a>
            </li>
            <li>
              <a className='hover-underline-animation' href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar