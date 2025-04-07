import React from 'react';
import Navigation from './Navigation';
import HeroText from './HeroText';
import Video from './Video';

const Hero: React.FC = () => {
    return (
      <div className='col-span-full w-full'>
             <Video src="/file.mp4" isBackground={true}/>

        <Navigation/>
        <HeroText  />
      </div>
    );
};

export default Hero;