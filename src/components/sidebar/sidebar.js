import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram, faUsers, faInfoCircle,faMicrochip, faAddressCard, faCircleArrowRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import './sidebar.scss';

const Sidebar = ({ isActive }) => {
  const [hovered, setHovered] = useState(false);
  const [postintro, setSideBarStage] = useState(false)
  const links = [{name:'PROJECTS', icon: faProjectDiagram},
                {name: 'SOCIAL', icon: faUsers }, 
                {name:'ABOUT' , icon:faInfoCircle},
                {name:'CONTACT', icon:faAddressCard}];

  return ( 
    <div className={`sidebar ${isActive ? 'active' : 'inactive'} ${hovered ? 'hover' : 'unhovered'}`} >
     
      <div className={`sidebar-links ${isActive ? 'active' : 'inactive'}`}>
        <li className='sidebar-item-logo'><a className='sidebar-logo' ><span className='link-text-logo'>STANCU DIGITAL</span><FontAwesomeIcon icon={faAnglesRight} /></a></li>

        {links.map((link, index) => (
          <li className='sidebar-item' >
          <a className='sidebar-link'  key={link.name}><FontAwesomeIcon icon={link.icon}/><span className='link-text'>{link.name}</span></a>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
