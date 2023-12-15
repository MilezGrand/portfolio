import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Nav from '../components/Nav';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import './index.css';
import { useScrollPosition } from "../hooks/useScrollPosition";

function App() {
  const headerRef = React.useRef(null);
  const aboutRef = React.useRef(null);
  const projectsRef = React.useRef(null);
  const contactRef = React.useRef(null);
  const menuRef = React.useRef(null);

  const reveals = document.querySelectorAll('.reveal');
  const scrollPosition = useScrollPosition();

  React.useEffect(() => {
    reveals.forEach((reveal) => {
      let top = reveal.getBoundingClientRect().top;

      if (top < window.innerHeight - 150 && reveal.classList.contains('reveal')) {
        reveal.classList.add('show');
        reveal.classList.remove('reveal');
      }
    });
  }, [scrollPosition]);

  return (
    <div >
      <Router>
        <Menu
          menuRef={menuRef}
          headerRef={headerRef}
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        <Nav
          headerRef={headerRef}
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
          menuRef={menuRef}
        />
        <Header headerRef={headerRef} />
        <About aboutRef={aboutRef} />
        <Projects projectsRef={projectsRef} />
        <Contact contactRef={contactRef} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
