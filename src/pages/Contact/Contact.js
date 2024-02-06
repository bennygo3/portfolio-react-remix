import React from 'react';
import { Link } from 'react-router-dom';
// import setBodyColor from '../background';
// import starsBackground from '../../assets/yellowStars.jpeg';
import './Contact.css';
import home from '../../assets/homeIcon.png';

export default function Contact() {

  return (
    <div className="contactBckg">
      {/* <div className="contactBckg" style={{ 
      backgroundImage: `url(${starsBackground})`,
     }}> */}

      <header>
        <div id="header">Contact</div>
      </header>

      <div className="thoughtCard">

        <h1 id="email">Email:</h1>
        <a href="mailto:ben3gome@gmail.com" rel="noreferrer" target="_blank">
          <i className="fa-regular fa-envelope"></i>
        </a>


        <h1 id="linkedin">LinkedIn:</h1>
        <a href="https://www.linkedin.com/in/benjamin-a-gomez" rel="noreferrer" target="_blank">
          <i className="fab fa-linkedin"></i>
        </a>


        <h1 id="github">GitHub:</h1>
        <a href="https://github.com/bennygo3" rel="noreferrer" target="_blank">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>

        <Link id="homeContact" to='/'>
          <img src={home} alt="home icon" />
          <p id="homeText">Home</p>
        </Link>

      </div>

    </div>

  );
}