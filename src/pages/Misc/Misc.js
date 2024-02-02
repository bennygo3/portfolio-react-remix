import React, { useState } from 'react';
import './Misc.css';
import ReactPlayer from 'react-player';
import footballVid from '../../assets/BenFootball.mp4';
import babyBen from '../../assets/babyBenCowboyPlastic.png';
import moon from '../../assets/moonBright.png';
import benGolf from '../../assets/TPCGolf.png';
import { useNavigate } from 'react-router-dom';
import setBodyColor from '../background';

import TV from '../../assets/TV.png';
import remote from '../../assets/Remote.png';

const Misc = () => {

    const mediaContent = [
        { type: 'video', url: footballVid },
        { type: 'image', url: benGolf },
        { type: 'image', url: moon },
        { type: 'image', url: babyBen },
    ];

    const [currentChannel, setCurrentChannel] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);

    const nextChannel = () => {
        setCurrentChannel((prevChannel) => (prevChannel + 1) % mediaContent.length);
    };

    const previousChannel = () => {
        setCurrentChannel((prevChannel) => {
            return prevChannel === 0 ? mediaContent.length - 1 : prevChannel - 1;
        });
    };

    const navigate = useNavigate(); // hook for routing

    const togglePlayPause = () => {
        setPlaying(!playing);
    };

    const increaseVolume = () => {
        setVolume((oldVolume) => Math.min(oldVolume + 0.2, 1));
    };

    const decreaseVolume = () => {
        setVolume((oldVolume) => Math.max(oldVolume - 0.2, 0));
    };

    const goHome = () => {
        navigate("/"); // navigate to home page
    };

    const renderMedia = (media) => {
        if (media.type === 'video') {
            return (
                <ReactPlayer
                    className="video"
                    url={media.url}
                    playing={playing}
                    volume={volume}
                    height="100%"
                    width="88%"
                />
            );
        } else if (media.type === 'image') {
            return <img src={media.url} alt="Media content" style={{ height: '91%', width: '91%' }} />
        }
    }

    setBodyColor({ color: "#5e725a" });
    return (
        <div className='electronics'>
            <div className='tvContainer'>
                {renderMedia(mediaContent[currentChannel])}
                <img className="tv" src={TV} alt="TV frame" />
            </div>
            <div className='remoteContainer'>
                <img id='remote' src={remote} alt="TV remote" />
                <div className="remoteButtons">
                  <div className="topButtons">
                    <button onClick={togglePlayPause}>{playing ? 'Pause' : 'Play'}</button>
                    <button onClick={goHome}>Home</button>
                  </div>
                  
                  <div className="buttonGroups">
                    <div className="volumeButtons">
                      <button onClick={increaseVolume}>Vol +</button>
                      <button onClick={decreaseVolume}>Vol -</button>
                    </div>
                    <div className="channelButtons">
                      <button onClick={nextChannel}>Ch &#8593;</button>
                      <button onClick={previousChannel}>Ch &#8595;</button>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Misc;

                //  <div className="remoteButtons">
                //    <div>
                //     <button onClick={togglePlayPause}>{playing ? 'Pause' : 'Play'}</button>
                //     <button onClick={goHome}>Home</button>
                //     </div>
                    
                //     <button onClick={increaseVolume}>Vol +</button>
                //     <button onClick={decreaseVolume}>Vol -</button>
                    
                    
                //     <button onClick={nextChannel}>Ch &#8593;</button>
                //     <button onClick={previousChannel}>Ch &#8595;</button>
                   
                // </div>