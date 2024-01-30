import React, { createContext, useRef }  from 'react';
import Intro from './components/Intro/Intro';
import Sidebar from './components/sidebar/sidebar';
import MainPage from './components/MainPage/MainPage';

export const RefsContext = createContext();
const App = () => {

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const mainpageRef = useRef(null);

  return (
    <div>
    <RefsContext.Provider value={{ aboutRef, projectsRef, mainpageRef }}>
      <MainPage />
      <Intro />
      <Sidebar />
    </RefsContext.Provider>

    </div>
  );
};

export default App;
