import React from 'react';
import './MainPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

const MainPage = ({isActive}) => {
  return (
    <div className={`main-page ${isActive ? 'active' : 'inactive'}`}>
      {/* Add your content here */}
      <div className="header"><h1>Hello, I am <br></br>Stancu Rudolf Luca.</h1>
      
      <div className='buttons'>
      <button className="button-54" role="button">Scroll Down<FontAwesomeIcon icon={faAngleDoubleDown} /></button>
      </div>
      </div>
 
    
    {/* <div className='about'>
      
      <div className='about-text'></div>
      <div className='about-image'></div>
      
      </div>  */}

    </div>
  );
};

export default MainPage;