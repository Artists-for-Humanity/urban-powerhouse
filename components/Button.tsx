import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  label: string;
  onClick?: () => void;
  href?: string;
  variant?: 'nav' | 'default';
  isActive?: boolean;
  isDisabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  href,
  variant = 'default',
  isActive = false,
  isDisabled = false,
  className = '',
}) => {

  //nav buttons
  if (variant === 'nav') {
    return (
      <Link href={href || '#'} passHref className='z-[1]'>
        <div
          className={`
            text-(--urban-white) text-2xl lg:text-base font-semibold whitespace-nowrap hover:underline
            ${isActive ? 'text-blue-500 underline' : ''}
            ${className}
          `}
        >
          {label}
        </div>
      </Link>
    );
  }
  //default button
  return (
    <Link href={href || '#'} passHref className='z-[1]'>
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={
        `
        relative pl-4 pr-4 py-3 rounded-lg text-(--urban-white)  whitespace-nowrap font-bold bg-(--urban-blue) transition-all
        ${isDisabled ? 'bg-gray-400 cursor-not-allowed' : ''}
        ${!isDisabled ? 'shadow-[4px_4px_0_0_var(--urban-orange)]' : ''}  
        ${!isDisabled ? 'hover:bg-[var(--urban-orange)] hover:shadow-[0px_0px_0_0_var(--urban-blue)] hover:translate-x-[4px] hover:translate-y-[4px] hover:cursor-pointer' : ''}
        ${className}
      `
      }
    >
      
      {label}
    </button>
    </Link>
  );
};

export default Button;