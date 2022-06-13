import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Home.css';
// import PlayerControlExample from '../VideoPlayer/VP';
import { Link } from 'react-router-dom';
// import VideoPlayer from '../VideoPlayer/VP';
// import { Button } from 'reactstrap';
import TV from '../../assets/TV.svg';
import remote from '../../assets/tvRemote.svg';
import footballVid from '../../assets/BenFootball.mp4';
// import lilCowboy from '../../assets/babyBenCowboyPlastic.png';
// import Arrow from '../../assets/Arrow.png';
import { Player, ControlBar, PlayToggle, VolumeMenuButton } from 'video-react';
// import { VolumeMenuButton } from 'video-react';


// const appRootEl = document.getElementById('app-root');
const modalRootEl = document.getElementById('modal-root');

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }
    componentDidMount() {
        modalRootEl.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRootEl.removeChild(this.el);
    }

    

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        );
    }
}
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { showModal: false }

        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
        
    }

    handleShow() {
        this.setState({ showModal: true });
    }

    handleHide() {
        this.setState({ showModal: false });
    }

   
   
    render() {
        const modal = this.state.showModal ? (
            <Modal>
                <div className='modal'>
                
                <button id="modalButton" onClick={this.handleHide}>Close Modal</button>
                    <Player 
                        // poster= {lilCowboy}
                    //     ref={player => {
                    //     this.player = player;
                    // }}
                     
                    >
                        
                    <img id="tv" src = {TV} alt= "cowboy"></img>
                    <img id="remote" src= {remote} alt= "tv remote"></img>
                    <source src={footballVid} />
                    <ControlBar autoHide={true} className="my-class" /> 
                    <PlayToggle /> 
                    
                    <VolumeMenuButton />
                    
                    
                    
                    </Player>
                    
                    
                        
                    
                </div>

            </Modal>
        ) : null;
        return (
            <div className='background'>
                <h1 className='name'>Benjamin A. Gomez</h1>
                {/* <h2 className = 'menu'>$Entree---></h2> */}

                <div className='links'>
                    <div id='about'>
                        <Link to='/aboutme'> - About me</Link>
                    </div>
                    <div id='portfolio' onClick={() => console.log("clicked2")}>
                        <Link to='/portfolio'> - Portfolio  </Link>
                    </div>
                    <div id='resume' onClick={() => console.log("clicked3")}>
                        <Link to='/resume'> - Resume</Link>
                    </div>
                    <div id='contact' onClick={() => console.log("clicked4")}>
                        <Link to='/contact'> - Contact</Link>
                    </div>
                    <div id='misc'>
                       <div onClick={this.handleShow}> - Misc.</div>
                            {modal}
                        </div>
                    
                </div>
            </div>
        );
    }
}


export default Home;

// Graveyard:

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