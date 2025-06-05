import React from 'react';
import Logo from '../Logo';
import Button from '../Button';


interface HeroTextProps {
    title: string; 
    subtitle: string; 
  }


  const HeroText: React.FC<HeroTextProps> = ({ title, subtitle }) => {   
     return (
        <div className="w-full h-[50vh] pt-0 flex items-center justify-center col-span-6 sm:col-span-8 lg:col-start-4 lg:col-span-12 ">
            <div className="text-left w-7/8 m-auto sm:text-center flex flex-col items-start sm:items-center space-y-4">
              <Logo size="large" className="w-full h-auto sm:w-1/2" />
                <h1 className="text-(--urban-white) drop-shadow-[0px_3px_0px_#0633F7] text-3xl sm:text-4xl font-semibold leading-normal">
                {title}
                </h1>
              
                <p className="text-(--urban-white) font-normal text-center drop-shadow-[0px_3px_0px_#0633F7] text-2xl sm:text-4xl italic font-light leading-normal max-w-2xl">
                {subtitle}
                </p>
                <Button label="Join Now" href="/" variant="default" />
            </div>
        </div>

    );
};

export default HeroText;