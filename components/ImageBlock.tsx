import React from 'react';
import Image from 'next/image';

interface ImageBlockProps {
  images: string[]; 
  className?: string; 
}

const ImageBlock: React.FC<ImageBlockProps> = ({ images, className = '' }) => {
  return (
    <div className={`grid grid-cols-subgrid col-span-full gap-y-[4px] mb-[20px] ${className}`}>
      {images.map((src, index) => (
        <div key={index} className="col-span-full">
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            width={1} 
            height={1} 
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageBlock;