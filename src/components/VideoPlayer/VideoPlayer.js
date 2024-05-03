import React from "react";

const VideoPlayer = () => {
  return (
    <iframe
      title="video"
      className="video"
      src="https://www.youtube.com/embed/N7Ps9L2JhXs?playlist=N7Ps9L2JhXs&loop=1&autoplay=1&mute=1"
      allow="autoplay"
      loop="1"
    />
  );
};

export default VideoPlayer;
