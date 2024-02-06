import React from 'react';
import { Link } from 'react-router-dom';
import resumeLink from '../../assets/resPPlane.png';
// import frame from '../../assets/goldFrameWhiteBck.png';
// import starsBackground from '../../assets/yellowStars.jpeg';
import home from '../../assets/homeIcon.png';
import BenResume from './Resume.pdf';
import './Resume.css';

export default function Resume() {
    return (
        <div className="resumeContainer">
            <div className="pictureFrame">
                <a id='resumeLink' href={BenResume} target="_blank" rel="noreferrer">
                    
                    <img src={resumeLink} id="resumeImage" alt="A link to my resume pdf" className="resumeImage" />
                
                <p>-Click for PDF-</p>
                </a>
            </div>
            <div className="homeFrame">
                <Link to="/">
                    <img src={home} id="homeButton" alt="link to the landing page"></img>
                    <p className="homeLink">Home</p>
                </Link>
            </div>
        </div>
    );
}


// export default function Resume() {
//     return (
//         <div className="resumeContainer" style={{
//             backgroundImage: `url(${starsBackground})`,
//         }}>
//             <div className="pictureFrame">
                
//                 <a id='resumeLink' href={BenResume} target="_blank" rel="noreferrer">
//                 <div className='frameImage'>
//                     <img src={resumeLink} id="resumeLink" alt="A link to my resume pdf" />
//                     </div>
//                 </a>
                
//                 <p>-Click for PDF-</p>
//             </div>

//             <div className="home">
//                 <Link to="/">
//                     <img src={home} id="homeButton" alt="link to the landing page"></img>
//                     <p>Home</p>
//                 </Link>
//             </div>
//         </div>
//     );
// }

