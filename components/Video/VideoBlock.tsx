import React from 'react';
import Button from '../Button';
import Video from './Video'; // Assuming this is your custom Video component

interface VideoBlockProps {
  className?: string;
  videoFilePath: string;
  title: string;
  description: string;
  buttonText: string;
  href?: string; // Optional href for the button
 
}

const VideoBlock: React.FC<VideoBlockProps> = ({
  className = '',
  videoFilePath,
  title,
  description,
  buttonText,
  href

}) => {
  return (
    <div className={`grid grid-cols-subgrid col-span-full ${className}`}>
      {/* Video Wrapper with 16:9 Aspect Ratio */}
      {/* <div className="col-span-full mb-[42px] aspect-w-16 aspect-h-9 max-h-[700px] ">
        <Video className="w-full h-full overflow-hidden object-cover object-center bg-black" src={videoFilePath} isBackground={false} />
      </div> */}
        <div className="col-span-full mb-[42px] aspect-w-16 aspect-h-9 max-h-[700px]">
          <Video
            className="w-full h-full overflow-hidden object-scale-down object-center bg-black"
            src={videoFilePath}
            isBackground={false}
          />
        </div>

      <div className="col-span-full g:col-span-10 mx-[32px] sm:mx-[83px] lg:mx-0 lg:col-span-10">
        <h2 className="text-(--urban-white) text-[32px] font-semibold leading-[1.125] m-0 mb-[13px]">
          {title}
        </h2>
        <p className="m-0 text-(--urban-white) text-[16px] font-semibold leading-6 mb-[42px] lg:mb-0">
          {description}
        </p>
      </div>

      <div className="col-start-5 col-span-2 sm:col-start-6 lg:col-start-11 lg:flex lg:justify-end lg:items-end">
        <Button
          label={buttonText}
          className="text-urban-blue"
          href={href} 
          variant="default"
          isActive={false}
        />
      </div>
    </div>
  );
};

export default VideoBlock;