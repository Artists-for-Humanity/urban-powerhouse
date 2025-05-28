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
        grid px-4 min-h-[100vh]
        grid-cols-6 sm:grid-cols-8 lg:grid-cols-12
        gap-x-[13px] sm:gap-x-[24px] lg:gap-x-[24px]
        justify-items-center h-full max-w-full m-auto lg:px-0 ${className}
        
      `
      }>
      {children}

    </div>
    </div>
  );
};

export default Grid;