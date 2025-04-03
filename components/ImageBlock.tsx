import React from 'react';
import Image from 'next/image';

interface ImageBlockProps {
  images: string[]; // Array of image sources
  className?: string; // Optional additional class names
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
      <div className="hidden md:grid col-start-2 grid-cols-subgrid col-span-6 md:gap-4 lg:hidden">
        {images.slice(0, 9).map((src, index) => (
          <div
            key={index}
            className={index === 0 ? 'col-span-full' : 'col-span-3'} // First image spans full width
          >
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

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6">
        {images.map((src, index) => (
          <div key={index} className="col-span-1">
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
    </div>
  );
};

export default ImageBlock;