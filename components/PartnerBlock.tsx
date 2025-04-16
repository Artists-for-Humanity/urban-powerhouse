import React from 'react';
import Image from 'next/image';

interface PartnerBlockProps {
  header: string;
  images: { src: string; link: string }[]; // Updated to an array of objects
  className?: string;
}

const PartnerBlock: React.FC<PartnerBlockProps> = ({ header, images, className = '' }) => {
  return (
    <div className={`grid grid-cols-subgrid col-span-full ${className} mb-10`}>

        <div className="text-left text-[32px] font-semibold mb-4 col-span-full sm:col-start-2 sm:col-span-2 lg:col-start-1 lg:col-span-4">
          {header}
        </div>
      {/* Mobile Layout */}
      <div className="grid col-start-2 col-span-4 gap-y-[25px] sm:hidden justify-center items-center">
        {images.slice(0, 8).map(({ src, link }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-full max-w-[261px] max-h-[75px] overflow-hidden flex justify-center items-center"
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={400}
              height={300}
              className="w-full h-full object-contain"
            />
          </a>
        ))}
      </div>

      {/* Tablet Layout */}
      <div className="hidden sm:grid col-start-2 col-span-6 grid-cols-subgrid sm:grid-cols-2 sm:gap-4 lg:hidden">
        {images.slice(0, 9).map(({ src, link }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-1 max-h-[80px] overflow-hidden"
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={400}
              height={300}
              className="w-full h-full object-contain"
            />
          </a>
        ))}
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid col-span-full grid-cols-subgrid lg:grid-cols-4 lg:gap-6 mb-[32px]">
        {images.map(({ src, link }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-1 row-span-1 flex justify-center items-center max-w-[350px] max-h-[80px] overflow-hidden"
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={400}
              height={300}
              className="w-full h-full object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default PartnerBlock;