import React,{useState, useEffect,useContext, useRef} from 'react';
import Modal from 'react-modal';
import Footer from '../footer/footer.js'
import { Carousel } from 'react-responsive-carousel';
import { saveAs } from 'file-saver';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import './MainPage.css';
import { RefsContext } from '../../App.js'; // adjust the path as needed
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FontAwesomeIcon,} from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown,faDownload,faXmark } from '@fortawesome/free-solid-svg-icons';
import { faWindowRestore } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import sideVideo from "../../media/neon-light-land.mp4";
import luca from './luca.jpg';
import nebula from "../../media/nebula.mp4";
import './css/top.css';
import './css/about.css';
import './css/project-gallery.css';
import './css/modal.css';


import {projects} from './projects/projectData.js'
import { projectImages } from './projects/projectData.js';


Modal.setAppElement('#root')


function DownloadButtonDesktop() {
  const handleDownload = async () => {
    try {
      const response = await fetch('/CV-Stancu Rudolf Luca-2025.pdf');
      const blob = await response.blob();
      saveAs(blob, 'CV-Stancu-Luca.pdf');
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <button className="download-button desktop" type="button"  onClick={handleDownload}>
                Download my CV<FontAwesomeIcon icon={faDownload} />
    </button>

    
  );
}

function DownloadButtonMobile() {
  const handleDownload = async () => {
    try {
      const response = await fetch('/CV-Stancu Rudolf Luca-2025.pdf');
      const blob = await response.blob();
      saveAs(blob, 'CV-Stancu-Luca.pdf');
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <button className="download-button mobile" type="button"  onClick={handleDownload}>
                Download my CV<FontAwesomeIcon icon={faDownload} />
    </button>

    
  );
}



function Project({ title, image, description, liveLink, repoLink, projectName }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // New state for the selected image

  useEffect(() => {
    const images = projectImages[projectName];
    setImages(images);
  }, [projectName]);

  const handleImageClick = (image) => { // New function to handle image click
    setSelectedImage(image);
    setShowOverlay(true);
  };

  return (
    <div className="project">
      <img src={image} alt={title} onClick={() => setShowOverlay(true)} /> {/* onClick event added back here */}
      <h3>{title}</h3>
      <Modal 
        isOpen={showOverlay}
        onRequestClose={() => setShowOverlay(false)}
        className="modal-content"
        style={{
          overlay: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex:'4000'
          },
        }}
        contentLabel="Example Modal"
      >
        <div className='modal-leftside'>
          <Carousel emulateTouch={true}>
            {images && images.map((image, index) => (
              <div key={index} onClick={() => handleImageClick(image)}>
                <img src={image} />
              </div>
            ))}
          </Carousel>
          <div className='modal-buttons'>
            <button onClick={() => window.open(liveLink, '_blank')}>Go to Project<span><FontAwesomeIcon icon={faWindowRestore} /></span></button>
            <button onClick={() => window.open(repoLink, '_blank')}>Go to Repo<span><FontAwesomeIcon icon={faGithub} /></span></button>
          </div>
        </div>
        <div className='modal-rightside'>
          <h3>Title</h3>
          <p>{title}</p>
          <h2>Project Description</h2>
          <p>{description}</p>
        </div>
        <button className='modal-exit-button' onClick={() => setShowOverlay(false)}><FontAwesomeIcon icon={faXmark} style={{color: "#ffffff",}} /></button>
      </Modal>
      {selectedImage && ( // New Modal for the selected image
        <Modal 
          isOpen={!!selectedImage}
          onRequestClose={() => setSelectedImage(null)}
          className="modal-content-preview"
          style={{
            overlay: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              zIndex:'4000'
            },
          }}
          contentLabel="Selected Image Modal"
        >
          <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%', maxHeight: '90%', objectFit: 'contain'}}/>
          <button className='modal-exit-button' onClick={() => setSelectedImage(null)}><FontAwesomeIcon icon={faXmark} style={{color: "#ffffff",}} /></button>
        </Modal>
      )}
    </div>
  );
}

function ProjectGallery() {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 900, // breakpoint from window width, you can adjust it as per your needs
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='project-gallery-page'>
      <h2>Project Gallery</h2>
      <div className='project-gallery-carousel'>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className='project-gallery-carousel-item'>
            <Project {...project} />
          </div>
        
        ))}
      </Slider>
      </div>
    </div>
  );
}




const MainPage = ({isActive}) => {

  const { aboutRef, projectsRef, mainPageRef } = useContext(RefsContext);

  return (
    <div  className={`main-page ${isActive ? 'active' : 'inactive'}`} >
          <div className='top' id='top' ref={mainPageRef}>
          <div className='video-background-container'>
          <video src={nebula} className="background-video" loop autoPlay muted preload="auto">

          </video>
          </div>
            <div className="header">
              <h1>Hello, I am <br></br>Stancu Rudolf Luca<br></br>and I am a<br></br> Web Developer.</h1>
              {/* <img src={myGif} alt="My gif" /> */}
              <video src={sideVideo} className="side-video" loop autoPlay muted preload="auto"/>
        
            </div>
            <div className='buttons'>
            <button className="button-54" role="button" onClick={() => aboutRef.current.scrollIntoView({ behavior: 'smooth' })}>
                Scroll Down<FontAwesomeIcon icon={faAngleDoubleDown} />
            </button>
            </div>
            
          </div>
        
          <div className='about' id='about'  ref={aboutRef}>
            <div className='about-container'>
              <div className='about-text'>
                  <h2>Who am I?</h2>
                  <p>        My name is Stancu Luca, i am based in Timișoara,Romania. My pursuit in understanding technology started in my childhood and since then, this growing passion has shaped
                  most of my career choices. After finishing middle school i chose mathematics and informatics as my main subject in highschool.After finising highschool i went to college and chose to pursue Computer Science at the West University of Timișoara.
                  In my college years I started getting interested in Web Development and since then I have been on a learning journey, adventuring in various projects.
                  </p>
                  <DownloadButtonDesktop/>

              </div>

              <div className='about-image-container'>
                    <img src={luca} className='about-image' alt="lowerGif"></img>
              </div>
                  

                  <DownloadButtonMobile/>

              </div>

          </div> 
          
          <div id='projects' ref={projectsRef}>
            <ProjectGallery/>
          </div>

          <Footer/>


    </div>
  );
};

export default MainPage;
