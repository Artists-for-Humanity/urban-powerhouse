import React from 'react';

type ContainerProps = {
  children?: React.ReactNode;
  className?: string;

};

const Container: React.FC<ContainerProps> = ({ children, className = ''}) => {
  return (
    <div 
      className={
           ` overflow-x-hidden grid grid-cols-subgrid w-full col-span-full gap-y-[0px] items-start bg-(--urban-black) h-100% pb-10 mt-[2vh] ${className}`
      }
    >
      {/* Header Section */}

        

      {/* Children */}
      {children}
    </div>
  );
};

export default Container;