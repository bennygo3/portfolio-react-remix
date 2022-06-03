import React from 'react';
import './About.css';
// import Me from '../../assets/BenThought.png'

const AboutMe = () =>{
    return (
        <div>
            
            <div id="meContainer">
                {/* <img src={Me} alt="me talking" className="ben" /> */}
                <div id="info">
                    
                    Hello!<br/> My name is Ben Gomez.  I was born and raised<br />
                    in Scottsdale, Arizona, but moved to Austin, Texas in 2012.<br />
                    <br />
                    
                    I recently completed The Coding Boot Camp at UT Austin<br />
                    and I am now a Full Stack Developer!! Prior to that I worked<br />
                    in the healthcare industry as a licensed paramedic.<br />
                    <br/> 
                    

                    In my spare time I enjoy playing sports, video<br />
                    games, making collages, taking my pups on <br /> 
                    adventures and coding!<br />
                    <br />

                </div>
            </div>
        </div>
    );
}

export default AboutMe