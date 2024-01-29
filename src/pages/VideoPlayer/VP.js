import React, { useState, useRef, useEffect } from 'react';

const VideoPlayer = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying])

  return (
    <div>
      <video ref={videoRef} onClick={() =>
      setIsPlaying(!isPlaying)}>
        <source src={props.videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoPlayer;