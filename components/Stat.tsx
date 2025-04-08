import React from 'react';

interface StatProps {
  number: number | string; 
  description: string;
  className?: string;
}

const Stat: React.FC<StatProps> = ({ number, description, className = '' }) => {
  return (
    <div className={`flex flex-col items-start lg:items-center text-center text-(--urban-white)  ${className}`}>
      <span className=" font-semibold text-[32px] md:text-[88px]">{number}</span>
      <p className=" font-normal text-[20px] mb-[35px] mt-2 md:text-[28px]">{description}</p>
    </div>
  );
};

export default Stat;