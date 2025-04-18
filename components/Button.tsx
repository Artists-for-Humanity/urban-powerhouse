import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  label: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
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
  // Nav links should use Link
  if (variant === 'nav' && href) {
    return (
      <Link href={href} passHref className="z-[1]">
        <div
          className={`
            text-[--urban-white] text-2xl lg:text-base font-semibold px-3 whitespace-nowrap hover:underline
            ${isActive ? 'text-blue-500 underline' : ''}
            ${className}
          `}
        >
          {label}
        </div>
      </Link>
    );
  }

  // Button with optional link behavior
  if (href) {
    return (
      <Link href={href} passHref className="z-[1]">
        <div
          className={`
            relative pl-4 pr-4 py-3 rounded-lg text-[--urban-white] whitespace-nowrap font-bold bg-[var(--urban-blue)] transition-all
            ${isDisabled ? 'bg-gray-400 cursor-not-allowed' : ''}
            ${!isDisabled ? 'shadow-[4px_4px_0_0_var(--urban-orange)]' : ''}
            ${!isDisabled ? 'hover:bg-[var(--urban-orange)] hover:shadow-[0px_0px_0_0_var(--urban-blue)] hover:translate-x-[4px] hover:translate-y-[4px] hover:cursor-pointer' : ''}
            ${className}
          `}
        >
          {label}
        </div>
      </Link>
    );
  }

  // Plain button
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        onClick?.(e);
      }}
      disabled={isDisabled}
      className={`
        relative pl-4 pr-4 py-3 rounded-lg text-[--urban-white] whitespace-nowrap font-bold bg-[var(--urban-blue)] transition-all
        ${isDisabled ? 'bg-gray-400 cursor-not-allowed' : ''}
        ${!isDisabled ? 'shadow-[4px_4px_0_0_var(--urban-orange)]' : ''}
        ${!isDisabled ? 'hover:bg-[var(--urban-orange)] hover:shadow-[0px_0px_0_0_var(--urban-blue)] hover:translate-x-[4px] hover:translate-y-[4px] hover:cursor-pointer' : ''}
        ${className}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
