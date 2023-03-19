import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact"

function App() {
  return (
    <>
    <div className="gradient__bg1">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
    </>
  );
}

export default App;
