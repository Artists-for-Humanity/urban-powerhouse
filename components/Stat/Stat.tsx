import React from 'react';

interface StatProps {
  number: number | string; 
  description: string;
  className?: string;
}

const Stat: React.FC<StatProps> = ({ number, description, className = '' }) => {
  return (
    <div className={`flex flex-col items-start lg:items-center text-center text-(--urban-white)  ${className}`}>
      <span className=" font-semibold text-[28px] sm:text-[88px]">{number}</span>
      <p className=" font-normal text-[20px] mb-[35px] mt-2 sm:text-[28px] text-left lg:text-center">{description}</p>
    </div>
  );
};

export default Stat;