import React from 'react';

type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
  header?: React.ReactNode; // Optional header prop
};

const Container: React.FC<ContainerProps> = ({ children, className = '', header }) => {
  return (
    <div 
      className={
        `w-full col-span-6 md:col-span-8 lg:col-span-12 bg-(--urban-black) min-h-[100vh] mt-30 ${className}`
      }
    >
      {/* Header Section */}
      {header && (
        <div className="text-left mb-4">
          {header}
        </div>
      )}

      {/* Children */}
      {children}
    </div>
  );
};

export default Container;