import '../css/navbar.css';
import { useState, useEffect, useRef } from 'react'
import { Turn as Hamburger } from 'hamburger-react'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const navbarRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setShowNavbar(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [navbarRef]);

  const handleLinkClick = () => {
    setShowNavbar(false);
  }

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="container">
        <div className="logo">
          <h1 className='text-gradient'>AJ.</h1>
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
              <a className='hover-underline-animation' href="#about" onClick={handleLinkClick}>About</a>
            </li>
            <li>
              <a className='hover-underline-animation' href="#skills" onClick={handleLinkClick}>Skills</a>
            </li>
            <li>
              <a className='hover-underline-animation' href="#projects" onClick={handleLinkClick}>Projects</a>
            </li>
            <li>
              <a className='hover-underline-animation' href="#contact" onClick={handleLinkClick}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
