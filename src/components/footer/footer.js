import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faLinke}from '@fortawesome/free-solid-svg-icons';
import { faLinkedin,faGithub, faWhatsapp, faFacebookMessenger} from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <footer>
            <div className='footer-links'>
                <a href='https://www.linkedin.com/in/stancurudolfluca/' target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href='https://github.com/lucaRUD' target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
                <a  href="https://wa.me/40763179205" target='_blank'><FontAwesomeIcon icon={faWhatsapp} /></a>
                <a href=' https://m.me/luca.rudolf.stancu' target='_blank'><FontAwesomeIcon icon={faFacebookMessenger} /></a>
            </div>
            <div className='footer-text'>
                <p>Portofolio made by Stancu Luca</p>


            </div>
        </footer>
    );
};

export default Footer;