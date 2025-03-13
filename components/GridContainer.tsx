// components/Grid.tsx
import React from 'react';

type GridProps = {
  children: React.ReactNode;
  className?: string;
};

const Grid: React.FC<GridProps> = ({ children, className = '' }) => {
  return (
    <div 
      className={
        `
        grid 
        grid-cols-6 md:grid-cols-8 lg:grid-cols-12
        mx-[10] md:mx-[20px] lg:mx-[120px] 
        gap-x-[13px] md:gap-x-[24px] lg:gap-x-[24px]
        items-center justify-items-center min-h-screen ${className}
      `
      }>
      {children}

    </div>
  );
};

export default Grid;