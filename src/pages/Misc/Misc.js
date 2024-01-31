import React, { useState } from 'react';
import './Misc.css';
import ReactPlayer from 'react-player';
import footballVid from '../../assets/BenFootball.mp4';
import babyBen from '../../assets/babyBenCowboyPlastic.png';
import moon from '../../assets/moonBright.png';
import benGolf from '../../assets/TPCGolf.png';
import { useNavigate } from 'react-router-dom';

import TV from '../../assets/TV.png';
import remote from '../../assets/Remote.png';

function Misc() {

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
            return prevChannel === 0 ? mediaContent.length - 1: prevChannel - 1;
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
        if(media.type === 'video') {
            return (
                <ReactPlayer
                    className="video"
                    url={media.url}
                    playing={playing}
                    volume={volume}
                    height="90%"
                    width="89%"
                />
            );
        } else if (media.type === 'image') {
            return <img src={media.url} alt="Media content" style={{ height: '80%', width: '89%' }} />
        }
    }
    return (
        <div>
            <div className='tvContainer'>
                {renderMedia(mediaContent[currentChannel])}
                <img className="tv" src={TV} alt="TV frame" />
            </div>
            <div className='remoteContainer'>
                {/* <img id='remote' src={remote} alt="TV remote" /> */}

                <div className="remoteButtons">
                    <button onClick={togglePlayPause}>{playing ? 'Pause' : 'Play'}</button>
                    <button onClick={increaseVolume}>Volume Up</button>
                    <button onClick={decreaseVolume}>Volume Down</button>
                    <button onClick={nextChannel}>Next Channel</button>
                    <button onClick={previousChannel}>Previous Channel</button>
                    <button onClick={goHome}>Home</button>
                </div>
            </div>

        </div>
    )
}

export default Misc