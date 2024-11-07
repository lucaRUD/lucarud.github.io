import React from 'react';
import MainPage from './MainPage/MainPage';
import Sidebar from './sidebar/sidebar';
import './pagecontent.css';

const PageContent = ({ isActive, refs }) => {
  const { aboutRef, projectsRef, mainPageRef } = refs;

  return (
    <div className={`page-content ${isActive ? 'active' : 'inactive'}`}>
      <Sidebar isActive={isActive} />
      <MainPage isActive={isActive}  aboutRef={aboutRef} projectsRef={projectsRef} mainPageRef={mainPageRef} />
    </div>
  );
};

export default PageContent;