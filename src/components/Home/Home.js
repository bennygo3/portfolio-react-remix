import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Home.css';

import { Link } from 'react-router-dom';
// import VideoPlayer from '../VideoPlayer/VP';
import { Button } from 'reactstrap';
import TV from '../../assets/TV.svg';
import remote from '../../assets/tvRemote.svg';
import footballVid from '../../assets/BenFootball.mp4';
import lilCowboy from '../../assets/babyBenCowboyPlastic.png';
// import Arrow from '../../assets/Arrow.png';
import { Player, PlayToggle } from 'video-react';

const sources = {
    footballVid: '../../assets/BenFootball.mp4'
};
class VideoPlayer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            source: sources.footballVid
        };
            // this.play = play; ?
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.load = this.load.bind(this);
        this.changeCurrentTime = this.changeCurrentTime.bind(this);
        this.seek = this.seek.bind(this);
        this.changePlaybackRateRate = this.changePlaybackRateRate.bind(this);
        this.changeVolume = this.changeVolume.bind(this);
        this.setMuted = this.setMuted.bind(this);
    }

    componentDidMount() {
        // subscribe state change
        this.player.subscribeToStateChange(this.handleStateChange.bind(this));
    }

    setmuted(muted) {
        return () => {
            this.player.muted = muted;
        };
    }

    handleStateChange(state) {
        // copy player state to this component's state
        this.setState({
            player: state
        });
    }

    play() {
        this.player.play();
    }

    pause() {
        this.player.pause();
    }

    load() {
        this.player.load();
    }

    changeCurrentTime(seconds) {
        return () => {
            const { player } = this.player.getState();
            this.player.seek(player.currentTime + seconds);
        };
    }

    seek(seconds) {
        return () => {
            this.player.seek(seconds);
        };
    }

    changePlaybackRateRate(steps) {
        return () => {
            const { player } = this.player.getState();
            this.player.playbackRate = player.playbackRate + steps;
        };
    }

    changeVolume(steps) {
        return () => {
            const { player } = this.player.getState();
            this.player.volume = player.volume + steps;
        };
    }

    changeSource(name) {
        return () => {
            this.setState({
                source: sources[name]
            });
            this.player.load();
        };
    }

    render() {
        return (
            <div>
                <Player
                    ref={player => {
                        this.player = player;
                    }}
                    autoPlay
                    >
                    <source src={footballVid} />
                    {/* <ControlBar autoHide={false} /> */}
                    </Player>
                    <div className="py-3">
          <Button onClick={this.play} className="mr-3">
            play()
          </Button>
          <Button onClick={this.pause} className="mr-3">
            pause()
          </Button>
          <Button onClick={this.load} className="mr-3">
            load()
          </Button>
        </div>
        <div className="pb-3">
          <Button onClick={this.changeCurrentTime(10)} className="mr-3">
            currentTime += 10
          </Button>
          <Button onClick={this.changeCurrentTime(-10)} className="mr-3">
            currentTime -= 10
          </Button>
          <Button onClick={this.seek(50)} className="mr-3">
            currentTime = 50
          </Button>
        </div>
        <div className="pb-3">
          <Button onClick={this.changePlaybackRateRate(1)} className="mr-3">
            playbackRate++
          </Button>
          <Button onClick={this.changePlaybackRateRate(-1)} className="mr-3">
            playbackRate--
          </Button>
          <Button onClick={this.changePlaybackRateRate(0.1)} className="mr-3">
            playbackRate+=0.1
          </Button>
          <Button onClick={this.changePlaybackRateRate(-0.1)} className="mr-3">
            playbackRate-=0.1
          </Button>
        </div>
        <div className="pb-3">
          <Button onClick={this.changeVolume(0.1)} className="mr-3">
            volume+=0.1
          </Button>
          <Button onClick={this.changeVolume(-0.1)} className="mr-3">
            volume-=0.1
          </Button>
          <Button onClick={this.setMuted(true)} className="mr-3">
            muted=true
          </Button>
          <Button onClick={this.setMuted(false)} className="mr-3">
            muted=false
          </Button>
        </div>
        <div className="pb-3">
          <Button onClick={this.changeSource('footballVid')} className="mr-3">
            Football
          </Button>
          <Button onClick={this.changeSource('bunnyTrailer')} className="mr-3">
            Bunny trailer
          </Button>
          <Button onClick={this.changeSource('bunnyMovie')} className="mr-3">
            Bunny movie
          </Button>
          <Button onClick={this.changeSource('test')} className="mr-3">
            Test movie
          </Button>
        </div>
            </div>
        );
    }
}

const VideoJsOptions = {
    controls: true,
    sources: [{
      src: footballVid,
      type: 'video/mp4'

    }]
  }


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
                    // autoPlay 
                    >
                        <VideoPlayer />
                    <img id="tv" src = {TV} alt= "cowboy"></img>
                    <img id="remote" src= {remote} alt= "tv remote"></img>
                    <source src={footballVid} />
                    
                    <PlayToggle id="PTButton" />
                    
                    
                    </Player>
                    {/* <button onClick={this.handleHide}>Hide modal</button> */}
                    
                        {/* <VideoPlayer /> */}
                    
                </div>

            </Modal>
        ) : null;
        return (
            <div className='background'>
                <h1 className='name'>Benjamin A. Gomez</h1>
                {/* <h2 className = 'menu'>$Entree---></h2> */}

                <div className='links'>
                    <div id='about'>
                        <Link to='/aboutme'>About me</Link>
                    </div>
                    <div id='portfolio' onClick={() => console.log("clicked2")}>
                        <Link to='/portfolio'>Portfolio  </Link>
                    </div>
                    <div id='resume' onClick={() => console.log("clicked3")}>
                        <Link to='/resume'>Resume</Link>
                    </div>
                    <div id='contact' onClick={() => console.log("clicked4")}>
                        <Link to='/contact'>Contact</Link>
                    </div>
                    <div id='misc'>
                       <div onClick={this.handleShow}>Misc.</div>
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