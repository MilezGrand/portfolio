import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';

function App() {
  const headerRef = React.useRef(null);
  const aboutRef = React.useRef(null);
  const projectsRef = React.useRef(null);
  const contactRef = React.useRef(null);
  const menuRef = React.useRef(null);
  return (
    <div className="App">
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
