import React, { useState, useEffect,useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram, faUsers, faInfoCircle,faMicrochip, faAddressCard, faCircleArrowRight,faHouseChimney,faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import './sidebar.scss';
import { RefsContext } from '../../App'; // adjust the path as needed

const Sidebar = ({ isActive }) => {
  const { aboutRef, projectsRef, mainPageRef } = useContext(RefsContext);
  const [hovered, setHovered] = useState(false);

  const links = [
    { name: 'HOME', icon: faHouseChimney, ref: mainPageRef },
    { name: 'ABOUT', icon: faInfoCircle, ref: aboutRef },
    { name: 'PROJECTS', icon: faProjectDiagram, ref: projectsRef },
  ];

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`sidebar ${isActive ? 'active' : 'inactive'} ${hovered ? 'hover' : 'unhovered'}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`sidebar-links ${isActive ? 'active' : 'inactive'}`}>
        <li className='sidebar-item-logo'>
          <a className='sidebar-logo'>
            <span className='link-text-logo'>STANCU DIGITAL</span>
            <FontAwesomeIcon icon={faAnglesRight} />
          </a>
        </li>
        {links.map((link) => (
          <li className='sidebar-item' key={link.name}>
            <a className='sidebar-link' onClick={() => scrollToRef(link.ref)}>
              <FontAwesomeIcon icon={link.icon} />
              <span className='link-text'>{link.name}</span>
            </a>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;