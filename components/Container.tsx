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
           ` grid grid-cols-subgrid w-full col-span-full gap-y-[0px] items-start bg-(--urban-black) h-100% pb-10 mt-[2vh] ${className} `
      }
    >
      {/* Header Section */}
      {header && (
        <div className="text-left mb-4 col-span-full">
          {header}
        </div>
      )}

      {/* Children */}
      {children}
    </div>
  );
};

export default Container;