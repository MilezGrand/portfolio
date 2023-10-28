import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

function Menu({ aboutRef, projectsRef, contactRef, menuRef }) {
  const [menu, setMenu] = React.useState(null);
  const [about, setAbout] = React.useState(null);
  const [projects, setProjects] = React.useState(null);
  const [contact, setContact] = React.useState(null);

  React.useEffect(() => {
    setMenu(menuRef);
    setAbout(aboutRef);
    setProjects(projectsRef);
    setContact(contactRef);
  }, [aboutRef, projectsRef, contactRef, menuRef]);

  return (
    <div ref={menuRef} className={'menu menu-closed'}>
      <span>
        <img
          src="close.svg"
          alt="close"
          width={35}
          height={35}
          onClick={() => {
            menu.current.classList.add('menu-closed');
          }}
        />
      </span>
      <ul>
        <li>
          <NavLink
            onClick={() => {
              window.scrollTo(0, 0);
              menu.current.classList.add('menu-closed');
            }}
          >
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              about.current.scrollIntoView();
              menu.current.classList.add('menu-closed');
            }}
          >
            Обо мне
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              projects.current.scrollIntoView();
              menu.current.classList.add('menu-closed');
            }}
          >
            Проекты
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              contact.current.scrollIntoView();
              menu.current.classList.add('menu-closed');
            }}
          >
            Контакты
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
