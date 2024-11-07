import React, { useState, useEffect, useContext } from 'react';
import { RefsContext } from '../../App'; // Adjust the import path as needed
import "./Intro.css";

const Intro = ({ onComplete }) => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [firstTextVisible, setFirstTextVisible] = useState(false);
  const [secondTextVisible, setSecondTextVisible] = useState(false);

  const refs = useContext(RefsContext); // Use context to get refs

  useEffect(() => {
    document.body.classList.add('body-no-scroll');
    return () => {
      document.body.classList.remove('body-no-scroll');
    };
  }, []);

  const handleClick = () => {
    setClicked(true);
    setFirstTextVisible(true);
    setTimeout(() => {
      setFirstTextVisible(false);
      setSecondTextVisible(true);
    }, 4000);
    setTimeout(() => {
      setSecondTextVisible(false);
      // Call the onComplete function to signal that intro is done
      onComplete();
    }, 8000); // Adjust the timing as needed
  };

  return (
    <div className={`intro ${hovered ? 'hovered' : ''} ${clicked ? 'clicked' : ''}`}>
      <button
        className={`buttonrainbow ${clicked ? 'fade-out' : ''}`}
        onMouseEnter={() => !clicked && setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleClick}
      >
        CLICK HERE
      </button>
      {firstTextVisible && <h1 className="center-text">Hello stranger.</h1>}
      {secondTextVisible && <h1 className="center-text-two">Welcome to my portfolio!</h1>}
    </div>
  );
};

export default Intro;