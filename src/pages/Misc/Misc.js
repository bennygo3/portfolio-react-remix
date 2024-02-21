import React, { useState } from 'react';
import MediaDescription from './MediaDescription';
import './Misc.css';
import ReactPlayer from 'react-player';
import footballVid from '../../assets/BenFootball.mp4';
import tetons from '../../assets/tetonScenery.jpg';
import bison from '../../assets/bison.jpg';
import pebbleBBoats from '../../assets/pebbleBoats.jpg';
import pebble from '../../assets/pebbleBeachMorning.jpg';
import eclipse from '../../assets/bloodMoon.jpg';
import jupiter from '../../assets/jupiterAndMoons.jpg';
import pyramid from '../../assets/transAmBuilding.jpg';
import { useNavigate } from 'react-router-dom';
import setBodyColor from '../background';

// import TV from '../../assets/TV.png';
import remote from '../../assets/Remote.png';

const Misc = () => {

    const mediaContent = [
        { type: 'video', url: footballVid },
        { type: 'image', url: tetons },
        { type: 'image', url: bison },
        { type: 'image', url: pebbleBBoats },
        { type: 'image', url: pebble },
        { type: 'image', url: eclipse },
        { type: 'image', url: jupiter },
        { type: 'image', url: pyramid },
    ];

    const mediaDescriptions = [
        "Living in the glory days? Me? Never!",
        "Tetons and scenery from a recent trip to Wyoming",
        "Wyoming locals",
        "Golf wasn't as beautiful as Pebble",
        "Pebble Beach in the morning",
        "Lunar Eclipse, November 8th, 2022",
        "A picture I took of Jupiter",
        "Back to Earth. Beautiful San Francisco",
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
            return <img src={media.url} alt="Media content" style={{ height: '100%', width:'100%', objectFit: 'contain' }} />
        }
    }

    setBodyColor({ color: "#5e725a" });
    return (
        <div className='electronics'>
            <div className="tvRemoteContainer">
            <div className='tvContainer'>
                {renderMedia(mediaContent[currentChannel])}
                {/* <img className="tv" src={TV} alt="TV frame" /> */}
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
            <MediaDescription description={mediaDescriptions[currentChannel]} />
        </div>
    )
}

export default Misc;

