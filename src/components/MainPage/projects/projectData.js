import cristocentricpreview from '../project-previews/CRISTOCENTRIC.png';
import cristocentricImages from './cristocentric/images.js';
import haiasPreview from '../project-previews/haiasfull.png';
import haiasImages from './haias/images.js';
import weatherPreview from '../project-previews/weatherfull.png';
import weatherImages from './weather/images.js';




export const projectImages = {
    cristocentric : cristocentricImages,
    haias : haiasImages,
    weather: weatherImages,
    
   // anotherProject: anotherProjectImages,
   // Other projects...
 };

 



export const projects = [{
    image: cristocentricpreview,
    title: 'Cristocentric Website',
    description: `Cristocentric website is a web application developed for the Cristocentric band. It’s built using Angular for frontend and Django for backend. The e-commerce functionality is handled by Stripe for transactions and Prodigi for print-on-demand services, all in a sandbox API environment.

The backend utilizes Django Rest Framework for API endpoints and PostgreSQL for database management. A custom dashboard was developed for managing articles and events on the site. A notification system was implemented using Celery and an email service.

The website includes an authentication system with Google sign-in support. The merchandise available for purchase was designed in-house. Overall, the website serves as a comprehensive digital platform for the band and its followers.`,
    liveLink: 'https://lucarud.github.io/cristocentric-preview/',
    repoLink: 'https://github.com/lucaRUD/cristocentric-frontend',
    projectName: 'cristocentric'
},
{
    image: haiasPreview,
    title: 'Haias Company Website',
    description: `Haias Company website is a professional presentation platform developed for a car wrapping company. The website is built using React.It is connected to a MySQL database because i implemented a form for contact.As a personal project, the Haias Company website showcases technical proficiency in React and MySQL, demonstrating the ability to create a functional and aesthetically pleasing platform for businesses in the automotive industry.`,
    liveLink: 'https://lucarud.github.io/Haias-Company-Site--React/',
    repoLink: 'https://github.com/lucaRUD/Haias-Company-Site--React',
    projectName: 'haias'
},
{
    image: weatherPreview,
    title: 'Weather App',
    description: `The Weather App is a user-friendly application developed using Angular. It leverages the OpenWeatherMap API for geolocation and weather data retrieval.

    The application is designed to automatically detect the user’s location and provide real-time weather updates for that area. This includes necessary data such as temperature, humidity, wind speed, and weather conditions.`,
    liveLink: 'https://lucarud.github.io/Weather-App/',
    repoLink: 'https://github.com/lucaRUD/Weather-App',
    projectName: 'weather'
},

];

