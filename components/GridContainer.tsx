// components/Grid.tsx
import React from 'react';

type GridProps = {
  children: React.ReactNode;
  className?: string;
};

const Grid: React.FC<GridProps> = ({ children, className = '' }) => {
  return (
    <div className="bg-(--urban-black) w-full">
    <div 
      className={
        `
        grid px-4
        grid-cols-6 md:grid-cols-8 lg:grid-cols-12
        gap-x-[13px] md:gap-x-[24px] lg:gap-x-[24px]
        justify-items-center h-full max-w-[1200px] m-auto ${className}
        
      `
      }>
      {children}

    </div>
    </div>
  );
};

export default Grid;