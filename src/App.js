import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { Analytics } from '@vercel/analytics/react';
import Contact from "./components/Contact"
import { useState } from "react";

function App() {
  // hide the navbar when user clicks outside the navbar
  
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  }

  return (
    <>
    <div className="gradient__bg1" onClick={handleClick}>
      <Navbar hideBurger={isClicked} />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Analytics />
    </div>
    </>
  );
}

export default App;
