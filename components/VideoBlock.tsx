import React from 'react';
import Button from './Button';
import Video from './Video'; // Assuming this is your custom Video component

interface VideoBlockProps {
  videoFilePath: string;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

const VideoBlock: React.FC<VideoBlockProps> = ({ videoFilePath, title, description, buttonText, onButtonClick }) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Video src={videoFilePath} isBackground={false} />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-[80%] m-auto">
        <div>
          <h2 className="text-white text-2xl font-semibold leading-[1.125] m-0 mb-6">{title}</h2>
          <p className="m-0 text-sm font-semibold leading-6 text-white mb-6">{description}</p>
        </div>

        <Button
          label={buttonText}
          className="text-urban-blue ml-auto"
          href="#"
          variant="default"
          isActive={false}
          onClick={onButtonClick}
        />
      </div>
    </div>
  );
};

export default VideoBlock;