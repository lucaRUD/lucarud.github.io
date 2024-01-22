import React, { useState,useEffect} from 'react';
import Sidebar from '../sidebar/sidebar'; // Import your Sidebar component
// import MainContent from '../MainContent/MainContent.tsx';
import MainPage from '../MainPage/MainPage';
import { TextureLoader } from 'three';
import "./Intro.css"
// import domTex from './Nebula24.hdr'
let texture;


// export function preloadTexture() {
//   const loader = new TextureLoader();
//   texture = loader.load(domTex);
// }

// export function getTexture() {
//   return texture;
// }

const Intro = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [buttonStatus,setButtonStatus] = useState(true)
  const [firstTextVisible, setFirstTextVisible] = useState(false);
  const [secondTextVisible, setSecondTextVisible] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [mainContentVisible, setMainContentVisible] =useState(false);
  const [mainPageVisible, setMainPageVisible] =useState(false);
  const [postTransitionVisible, setPostTransitionVisible] =useState(false);
  const [isIntro, setIsIntro] = useState(true);

  

  

  useEffect(() => {
    if (isIntro) {
      document.body.classList.add('body-no-scroll');
    } else {
      document.body.classList.remove('body-no-scroll');
    }
  }, [isIntro]);

  return (
    <div className={`intro ${hovered ? 'hovered' : ''} ${clicked ? 'clicked' : ''} `}>
      <button
        className={`buttonrainbow ${clicked ? 'fade-out' : ''} ${buttonStatus ? 'active' :'inactive'}`}
        onMouseEnter={() => !clicked && setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => {
          setClicked(true);
          setHovered(false);
          setFirstTextVisible(true);
          setTimeout(() => {
            setFirstTextVisible(false);
            setSecondTextVisible(true);
          }, 4000); // Change as needed
          setTimeout(() => {
            setSecondTextVisible(false);
            setSidebarVisible(true);
          }, 10000); // Change as needed
          setTimeout(() => {
            setMainPageVisible(true);
            setPostTransitionVisible(true)
            setIsIntro(false); // End of intro
            setButtonStatus(false);
          }, 8000); // Change as needed
          setTimeout(() => {
            setPostTransitionVisible(false);
          }, 10200);
        }}
      >
        CLICK HERE
      </button>
      {firstTextVisible && <h1 className="center-text">Hello stranger.</h1>}
      {secondTextVisible && <h1 className="center-text-two">Welcome to my portofolio!</h1>}
      
      <div className={`posttransition ${postTransitionVisible ? 'active' : 'inactive'}`}></div>
      <Sidebar isActive={sidebarVisible} /> {/* Always render the Sidebar component */}
      <MainPage isActive={mainPageVisible}/>
    </div>
  );
};

export default Intro;



