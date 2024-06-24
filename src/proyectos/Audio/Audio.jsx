import React, { useState, useRef } from "react";

function AudioPlayer({ audioSrc }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} src={audioSrc} />
      <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
}

export default AudioPlayer;
