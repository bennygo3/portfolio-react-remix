import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import RepeatChar from '../../funFactory/repeatComponent';
import './Home.css';
import setBodyColor from '../background';
import newspaper from '../../assets/BenNewestNews.png';

Modal.setAppElement('#root');

const Home = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }
    
    setBodyColor({color: "#c7bd9c"});

    return (
            <>
                <div className='background'>
                    <div className='links'>
                    
                    <div id='about'>
                        <button onClick={openModal}>-About Me</button>
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            contentLabel="About Me Modal"
                            style= {{
                                content: {
                                    border: '5px double black',
                                },
                            }}
                        >
                            <div id="aboutMeHeader">
                            <h2>About Me</h2>
                            
                            <button onClick={closeModal}>X</button>
                            <img src={newspaper} id="newsModal" alt="information about me pop up"></img>
                            
                            </div>
                            {/* repeatchar component was a challenge to myself. come up with a different way to display repeating elements */}
                            <RepeatChar id="repStars" character="*" count={10} />
                        </Modal>
                        <span id ="star">*</span>
                        
                    </div>
                    <div id='port'>
                        <Link to='/portfolio'>-Portfolio</Link>
                        <span id ="star">*</span>
                    </div>
                    <div id='resume'>
                        <Link to='/resume'>-Resume</Link>
                        <span id ="star">*</span>
                    </div>
                    <div id='contact'>
                        <Link to='/contact'>-Contact</Link>
                        <span id ="star">*</span>
                    </div>
                    <div id='misc'>
                       <Link to='/misc'>-Misc.</Link>
                        <span id ="star">*</span>
                    </div>
                  </div>
                
                </div>
            </>
           
            
    );
    
}

export default Home;

// class Home extends React.Component {
    
//     render() {
//         setBodyColor({color: "#c7bd9c"});
//         return (
//             <>
//                 <div className='background'>
//                     <div className='links'>
                    
//                     <div id='about' >
//                         <Link to='/aboutme'>-About me</Link>
//                         <span id ="star">*</span>
//                     </div>
//                     <div id='port' >
//                         <Link to='/portfolio'>-Portfolio</Link>
//                         <span id ="star">*</span>
//                     </div>
//                     <div id='resume' >
//                         <Link to='/resume'>-Resume</Link>
//                         <span id ="star">*</span>
//                     </div>
//                     <div id='contact' >
//                         <Link to='/contact'>-Contact</Link>
//                         <span id ="star">*</span>
//                     </div>
//                     <div id='misc'>
//                        <Link to='/misc'>-Misc.</Link>
//                         <span id ="star">*</span>
//                     </div>
//                   </div>
                
//                 </div>
//             </>
           
            
//         );
//     }
// }

// export default Home;

// Graveyard:
// import { ModalContext } from '../ModalContext/ModalContext.js';
    // static contextType = ModalContext;

    // handleMiscClick = (event) => {
    //     event.preventDefault();
    //     this.context.setModalOpen(true);
    // }

 /* <img id="tv" src = {TV} alt= "cowboy"></img>
                    <img id="remote" src= {remote} alt= "tv remote"></img> */
                       
                        /* <video id='vid' preload="auto">
                        <source src={footballVid} type="video/mp4" />

                     </video> */


// import VideoJS from '../../VideoJS.jsx';
// import MiscModal from '../Misc/Misc';

// function Home() {
// const [PopUp, setPopUp] = useState(false);
// const [showModal, setShowModal] = useState(false)
// const openModal = () => {
//   setShowModal(prev => !prev);
//  <video>
//     <VideoJS options={VideoJsOptions} /> 
// </video> 
// }
//  {function Misc() {
//     let location = uselocation(); } }


//  <img src = {Arrow} alt = "arrow pointing" id = "arrow"/> */}
//                      <video width= "60%" height= "50%" preload="auto">
//                         <source src={footballVid} type="video/mp4" />

//                     </video> 
// const root = ReactDOM.createRoot(appRootEl);
// root.render(Home);

// import '../UseVP/useVP.css';
// import useVideoPlayer from '../UseVP/useVP.js';

// const videoElement = useRef(null);
//     const {
//     playerState,
//     togglePlay,
//     handleOnTimeUpdate,
//     handleVideoProgress,
//     handleVideoSpeed,
//     toggleMute,
// } = useVideoPlayer(videoElement);
//     return (
        
        
//     <div className="container">
//     <div className="video-wrapper">
//       <video
//         src={footballVid}
//         ref={videoElement}
//         onTimeUpdate={handleOnTimeUpdate}
//       />
//       <div className="controls">
//           <div className="actions">
//             <button onClick={togglePlay}>
//               {!playerState.isPlaying ? (
//                 <i className="bx bx-play"></i>
//               ) : (
//                 <i className="bx bx-pause"></i>
//               )}
//             </button>
//           </div>
//           </div>
//           <input
//             type="range"
//             min="0"
//             max="100"
//             value={playerState.progress}
//             onChange={(e) => handleVideoProgress(e)}
//           />
//           <select
//             className="velocity"
//             value={playerState.speed}
//             onChange={(e) => handleVideoSpeed(e)}
//           >
//             <option value="0.50">0.50x</option>
//             <option value="1">1x</option>
//             <option value="1.25">1.25x</option>
//             <option value="2">2x</option>
//           </select>
//           <button className="mute-btn" onClick={toggleMute}>
//             {!playerState.isMuted ? (
//               <i className="bx bxs-volume-full"></i>
//             ) : (
//               <i className="bx bxs-volume-mute"></i>
//             )}
//           </button>
      
//     </div>
//   </div>