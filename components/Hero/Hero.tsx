import React from 'react';
import Navigation from '../Navigation';
import HeroText from './HeroText';
import Video from '../Video/Video';

interface HeroProps {
  title: string; 
  subtitle: string; 
  videoSrc?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, videoSrc }) => {       return (
      <div className='col-span-full w-full'>
        <Video src={videoSrc || "/file.mp4"} isBackground={true}/>
        <Navigation/>
        <HeroText 
          title=   {title} 
          subtitle= {subtitle}
        />
      </div>
    );
};

export default Hero;