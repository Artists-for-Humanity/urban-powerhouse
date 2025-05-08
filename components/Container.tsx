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
           ` grid grid-cols-subgrid w-full col-span-full gap-y-[0px] items-start bg-(--urban-black) h-100% pb-10 mt-[2vh] ${className}`
      }
    >
      {/* Header Section */}
      {header = "ABout Us" && (
        <div className="text-left mb-4 col-span-full">
          {header}
          <div className="text-[70px] p-5 absolute text-white z-1">Thank you</div>
          <video width="700px" height="700px" controls>
            <source src="/logos/file.mp4"/></video> 
          <div className="text-5xl ">About Urban Powerhouse</div>
        </div>
      )}
        

      {/* Children */}
      {children}
    </div>
  );
};

export default Container;