import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Nav from '../components/Nav';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

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
