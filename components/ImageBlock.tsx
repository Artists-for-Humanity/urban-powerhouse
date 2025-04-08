import React from 'react';
import Image from 'next/image';

interface ImageBlockProps {
  images: string[];
  className?: string; 
}

const ImageBlock: React.FC<ImageBlockProps> = ({ images, className = '' }) => {

  
  return (
    <div className={`grid grid-cols-subgrid col-span-full ${className}`}>
      {/* Mobile Layout */}
      <div className="grid col-span-full gap-y-[4px] md:hidden">
        {images.slice(0, 4).map((src, index) => (
          <div key={index} className="col-span-full">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      {/* Tablet Layout */}
      <div className="hidden md:grid col-start-2 col-span-6 grid-cols-subgrid md:grid-cols-2 md:gap-4 lg:hidden">
        {images.slice(0, 9).map((src, index) => (
          <div
            key={index}
            className={index === 0 ? 'col-span-full' : 'col-span-1'} 
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Desktop Layout */}
      
      <div className="hidden lg:grid col-span-full grid-cols-subgrid lg:grid-cols-3 lg:gap-2 mb-[32px] " style={{ gridAutoRows: '300px' }}>
        {images.map((src, index) => (
          <div 
          key={index}
          className={index === 0 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'} 
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageBlock;