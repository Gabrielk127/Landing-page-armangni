// src/components/VideoPlayer.tsx
import React from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  url: string;
  className?: string; // Classe Tailwind para estilo adicional
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <ReactPlayer
        url={url}
        className="react-player"
        width="100%"
        height="100%"
        controls
      />
    </div>
  );
};

export default VideoPlayer;
