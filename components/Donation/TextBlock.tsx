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
          text-base font-semibold pl-6 sm:pl-10 relative col-span-full sm:col-start-2 sm:col-span-6 lg:col-start-3 lg:col-span-8 my-10
        `}
      >

        {text}
      </h1>
    </div>
  );
};

export default TextBlock;