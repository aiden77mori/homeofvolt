import React from 'react';
import ReactPlayer from 'react-player';

interface VideoCardProps {
  title: string;
  comment: string;
  videoURL: string;
}

const VideoCard: React.FC<VideoCardProps> = (props) => {
  return (
    <div className="flex flex-col">
      <ReactPlayer
        width="100%"
        className="max-h-[280px]"
        url={props.videoURL}
      />
      <span className="pl-4 mt-4 border-l-2 border-blue-500 xl:text-xl">
        {props.title}
        <br />
        {props.comment}
      </span>
    </div>
  );
};

export default VideoCard;
