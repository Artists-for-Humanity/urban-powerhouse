import React from 'react';
import Navigation from '../Navigation';
import HeroText from './HeroText';
import Video from '../Video/Video';

interface HeroProps {
  title: string; 
  subtitle: string; 
  videoSrc?: unknown;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, videoSrc }) => {
    const videoString = videoSrc ? String(videoSrc) : '';
    
    return (
      <div className='col-span-full w-full'>
        {videoString && <Video src={videoString} isBackground={true}/>}
        <Navigation/>
        <HeroText 
          title=   {title} 
          subtitle= {subtitle}
        />
      </div>
    );
};

export default Hero;