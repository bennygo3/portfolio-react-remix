import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import Arrow from '../../assets/Arrow.png';

const AboutMe = () =>{
    return (
        <div>
            
            <div id="meContainer">
                {/* <img src={Me} alt="me talking" className="ben" /> */}
                <div id="info">
                    
                    -Hello-<br/> My name is Ben Gomez. I was born and raised in<br />
                    Scottsdale, Arizona, but moved to <br />
                     Austin, Texas in 2012.<br />
                    <br />
                    
                    I recently completed The Coding Boot Camp at <br />  UT Austin
                    and I am now a Full Stack Developer.<br /> Prior to that I worked in the healthcare<br />
                    industry as a licensed paramedic.<br />
                    <br/> 
                    

                    In my spare time I enjoy playing sports, video<br />
                    games, making collages, taking my pups on <br /> 
                    adventures and coding!<br />
                    <br />

                    <Link to='/'> 
                    <img 
                        id= "arrow"
                        src={Arrow} 
                        alt="back arrow"
                    />
                    <div id='home'>-Home-</div>
                    </Link >

                </div>
            </div>
        </div>
    );
}

export default AboutMe