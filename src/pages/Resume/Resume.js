import React from 'react';
import { Link } from 'react-router-dom';
import resumeLink from '../../assets/resPPlane.png';
import frame from '../../assets/goldFrameWhiteBck.png';
import starsBackground from '../../assets/yellowStars.jpeg';
import home from '../../assets/homeIcon.png';
import BenResume from './BenjaminGomezResume.pdf';
import './Resume.css';


const Resume = () =>
(
    <div className="container" style={{
        backgroundImage: `url(${starsBackground})`,
    
    }}>
        <div className="pictureFrame" style={{
            backgroundImage: `url(${frame})`
        }}>
            <div>
            <a href={BenResume} target="_blank" rel="noreferrer">
                <img src={resumeLink} id="resumeLink" alt="A link to my resume pdf" />
            </a>

            </div>
            <p>-Click for PDF-</p>
        </div>
        
        <div className="home">
            <Link to="/">
                <img src={home} id="homeButton" alt="link to the landing page"></img>
            </Link>
            <p>Home</p>
        </div>
    </div>
);

export default Resume;

