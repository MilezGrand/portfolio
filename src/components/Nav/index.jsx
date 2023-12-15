import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const Nav = ({ headerRef, aboutRef, projectsRef, contactRef, menuRef }) => {
  const scrollPosition = useScrollPosition();
  const [header, setHeader] = React.useState(null);
  const [about, setAbout] = React.useState(null);
  const [projects, setProjects] = React.useState(null);
  const [contact, setContact] = React.useState(null);

  React.useEffect(() => {
    setHeader(headerRef);
    setAbout(aboutRef);
    setProjects(projectsRef);
    setContact(contactRef);
  }, [headerRef, aboutRef, projectsRef, contactRef, about, projects, contact]);

  const calculatePosition = (element) => {
    if (element == null) {
      return;
    }

    if (
      scrollPosition + 500 >= element.current.offsetTop &&
      scrollPosition + 500 <=
        element.current.offsetTop + element.current.offsetHeight
    ) {
      return true;
    }

    return false;
  };


  return (
    <nav className={scrollPosition > 0 ? "shadow nav" : "nav"}>
      <ul>
        <li>
          <NavLink
            className={calculatePosition(header) ? "activeLink" : ""}
            onClick={() => window.scrollTo(0, 0)}
          >
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink
            className={calculatePosition(about) ? "activeLink" : ""}
            onClick={() => about.current.scrollIntoView()}
          >
            Обо мне
          </NavLink>
        </li>
        <li>
          <NavLink
            className={calculatePosition(projects) ? "activeLink" : ""}
            onClick={() => projects.current.scrollIntoView()}
          >
            Проекты
          </NavLink>
        </li>
        <li>
          <NavLink
            className={calculatePosition(contact) ? "activeLink" : ""}
            onClick={() => contact.current.scrollIntoView()}
          >
            Контакты
          </NavLink>
        </li>
        <img
          src="menu.svg"
          width={35}
          height={35}
          id="menu"
          alt="menu"
          onClick={() => {
            menuRef.current.classList.remove("menu-closed");
          }}
        />
      </ul>
    </nav>
  );
};

export default Nav;
