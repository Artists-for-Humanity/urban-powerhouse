import React from 'react';
import Image from 'next/image';

interface LeadershipProps {
  imageSrc: string;
  name: string;
  description: string[];
}

const Leadership: React.FC<LeadershipProps> = ({ imageSrc, name, description }) => {
  return (
    <div className=" col-span-full grid grid-cols-subgrid mb-20">
      <Image
        src={imageSrc}
        alt={`${name}'s headshot`}
        className="rounded-full object-cover mb-4 col-span-full mx-auto"
        width={380} 
        height={360} 
        sizes="(max-width: 640px) 247px, 360px" 
      />
      <h2 className="text-base font-bold mb-10 mt-2 col-span-full text-center">{name}</h2>
      <div className="text-base font-light 0 space-y-4 col-span-full sm:col-start-2 sm:col-span-6 lg:col-start-3 lg:col-span-8">
        {description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default Leadership;