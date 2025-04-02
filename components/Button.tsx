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
      <Link href={href || '#'} passHref>
        <div
          className={`
            text-var(--urban-white) text-2xl md:text-base font-semibold md:font-normal px-3 whitespace-nowrap hover:underline
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
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={
        `
        relative px-4 py-3 rounded-lg text-white  whitespace-nowrap font-bold bg-(--urban-blue) transition-all
        ${isDisabled ? 'bg-gray-400 cursor-not-allowed' : ''}
        ${!isDisabled ? 'shadow-[8px_8px_0_0_var(--urban-orange)]' : ''}  
        ${!isDisabled ? 'hover:bg-[var(--urban-orange)] hover:shadow-[0px_0px_0_0_var(--urban-blue)] hover:translate-x-[5px] hover:translate-y-[5px] hover:cursor-pointer' : ''}
        ${className}
      `
      }
    >
      {label}
    </button>
  );
};

export default Button;