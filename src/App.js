import React, { createContext, useRef, useState } from 'react';
import Intro from './components/Intro/Intro';
import PageContent from './components/PageContent';
import './App.css';

export const RefsContext = createContext();

const App = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const mainPageRef = useRef(null);
  
  // State to manage whether PageContent is active
  const [isPageContentActive, setIsPageContentActive] = useState(false);

  // Function to set PageContent active state
  const handleIntroComplete = () => {
    setIsPageContentActive(true);
  };

  return (
    <RefsContext.Provider value={{ aboutRef, projectsRef, mainPageRef }}>
      {isPageContentActive ? (
        <PageContent isActive={isPageContentActive} refs={{ aboutRef, projectsRef, mainPageRef }} />
      ) : (
        <Intro onComplete={handleIntroComplete} />
      )}
    </RefsContext.Provider>
  );
};

export default App;