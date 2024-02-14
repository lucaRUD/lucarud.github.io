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
import myGif from './movingwall.gif';
import luca from './luca.jpg';
import './css/top.css';
import './css/about.css';
import './css/project-gallery.css';
import './css/modal.css';

import cristocentricpreview from './project-previews/CRISTOCENTRIC.png';
import cristocentricImages from './projects/cristocentric/images.js';



const projectImages = {
   cristocentric : cristocentricImages,
  // anotherProject: anotherProjectImages,
  // Other projects...
};

Modal.setAppElement('#root')


function DownloadButtonDesktop() {
  const handleDownload = async () => {
    try {
      const response = await fetch('/CVjan2024.pdf');
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
      const response = await fetch('/CVjan2024.pdf');
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



function Project({ title, image, description, liveLink, repoLink, projectName}) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [images, setImages] = useState([]);


  useEffect(() => {
    // Use the projectName prop to select the correct import
    const images = projectImages[projectName];
    setImages(images);
  }, [projectName]);


  return (
    <div className="project">
      <img src={image} alt={title} onClick={() => setShowOverlay(true)} />
      <h3>{title}</h3>
      <Modal 
        isOpen={showOverlay}
        onRequestClose={() => setShowOverlay(false)}
        className="modal-content"
        style={{
          overlay: {
            display: 'flex',
            userSelectL: 'none',
            justifyContent: 'center', // centers modal horizontally
            alignItems: 'center', // centers modal vertically
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex:'4000'
          },
        }}
        contentLabel="Example Modal"
      >
        <div className='modal-leftside'>
            <Carousel emulateTouch={true}>
              {images.map((image, index) => (
                <div key={index}>
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
          {/* <p>{description}</p> */}
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum, enim at pulvinar imperdiet, enim orci pretium est, et consectetur tellus nisl et ligula. Nunc eget varius ipsum. Nam at varius dui. Curabitur auctor finibus tortor, non lobortis justo congue vitae. Nunc sit amet dolor eu lorem efficitur tristique id quis dolor. Fusce quis est arcu. Sed lacinia mattis elementum.

Vivamus vitae lectus massa. Aliquam lobortis purus sapien, id interdum risus ultricies vel. Duis iaculis odio nisl, cursus sodales enim convallis sed. Suspendisse at magna et nisl condimentum sagittis eu quis risus. Maecenas lacinia commodo ultrices. Fusce mattis pharetra massa convallis porta. Nullam faucibus metus eget erat porta, eget vehicula massa aliquam. Integer posuere fringilla justo, ut lobortis diam iaculis a. Maecenas volutpat ultricies ante, a convallis turpis tincidunt a. Proin finibus, libero vitae ullamcorper cursus, erat libero aliquet odio, id scelerisque lectus orci mollis mi. Maecenas congue nulla eget ante hendrerit, in porta nulla imperdiet. Mauris id erat nibh. Suspendisse sollicitudin faucibus massa in dictum. Quisque rhoncus eu nisi in dignissim.

Donec quis pellentesque tellus. In pharetra posuere erat, et egestas leo tempus vitae. Mauris egestas leo sit amet lorem eleifend egestas. Aenean diam ligula, efficitur a ex non, laoreet aliquet neque. Praesent tristique metus non elit hendrerit varius. Etiam egestas posuere erat eu pharetra. Vestibulum sodales neque eu lectus finibus, a porttitor ligula rhoncus. Pellentesque ultrices vitae mauris auctor vestibulum. Maecenas accumsan condimentum diam non auctor. Mauris non elit at mauris pellentesque cursus. Duis tincidunt magna ac mi luctus dignissim. Nullam ac aliquet ex. Sed lacinia, orci sit amet malesuada ornare, tellus dui consectetur diam, ac tincidunt mi justo at diam. Phasellus a lorem suscipit, mollis dolor sit amet, interdum turpis. Fusce placerat ligula quam, id tristique tellus aliquet eget. Fusce posuere, metus in maximus viverra, est ligula posuere sapien, a placerat augue tortor a lacus. </p>

        </div>


        <button className='modal-exit-button' onClick={() => setShowOverlay(false)}><FontAwesomeIcon icon={faXmark} style={{color: "#ffffff",}} /></button>
      </Modal>
    </div>
  );
}
function ProjectGallery() {
  const projects = [
    { image:cristocentricpreview , title:'Cristocentric Website', description: 'Description 1', liveLink: 'liveLink1', repoLink: 'repoLink1', projectName:'cristocentric'},
    { image:cristocentricpreview , title:'Cristocentric Website', description: 'Description 1', liveLink: 'liveLink1', repoLink: 'repoLink1', projectName:'cristocentric'},
    { image:cristocentricpreview , title:'Cristocentric Website', description: 'Description 1', liveLink: 'liveLink1', repoLink: 'repoLink1', projectName:'cristocentric'},
    { image:cristocentricpreview , title:'Cristocentric Website', description: 'Description 1', liveLink: 'liveLink1', repoLink: 'repoLink1', projectName:'cristocentric'},
    { image:cristocentricpreview , title:'Cristocentric Website', description: 'Description 1', liveLink: 'liveLink1', repoLink: 'repoLink1', projectName:'cristocentric'},
    // { image:cristocentric , title:'Cristocentric Website', description: 'Description 1', liveLink: 'liveLink1', repoLink: 'repoLink1' },
  ];

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

  const { aboutRef, projectsRef, mainpageRef } = useContext(RefsContext);

  return (
    <div  className={`main-page ${isActive ? 'active' : 'inactive'}`} >
          <div className='top' id='top' ref={mainpageRef}>
            <div className="header"><h1>Hello, I am <br></br>Stancu Rudolf Luca.<br></br>and I am a<br></br> Web Developer.</h1>
              <img src={myGif} alt="My gif" />
        
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


                <img src={luca} className='about-image' alt="lowerGif"></img>

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
