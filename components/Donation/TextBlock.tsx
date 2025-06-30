import React from 'react';

interface TextBlockProps {
  text: string;
  className?: string;
}

const TextBlock: React.FC<TextBlockProps> = ({ text, className = '' }) => {
  return (
    <div className={`col-span-full grid grid-cols-subgrid ${className} relative`}>
        
      <h1
        className={`
          text-base font-semibold  relative col-span-full  lg:col-start-2 lg:col-span-10 my-10 lg:pl-0
        `}
      >

        {text}
      </h1>
    </div>
  );
};

export default TextBlock;