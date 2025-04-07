import React from 'react';

interface StatProps {
  number: number | string; 
  description: string;
  className?: string;
}

const Stat: React.FC<StatProps> = ({ number, description, className = '' }) => {
  return (
    <div className={`flex flex-col items-start lg:items-center text-center text-(--urban-white) ${className}`}>
      <span className="text-4xl font-bold">{number}</span>
      <p className="text-sm mt-2">{description}</p>
    </div>
  );
};

export default Stat;