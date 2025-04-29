'use client';
import React, { useState } from 'react';
import Link from 'next/link';

type DropdownOption = {
  label: string;
  href: string;
};

type ButtonProps = {
  label: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  href?: string;
  variant?: 'nav' | 'default' | 'nav-dropdown';
  isActive?: boolean;
  isDisabled?: boolean;
  className?: string;
  dropdownOptions?: DropdownOption[];
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  href,
  variant = 'default',
  isActive = false,
  isDisabled = false,
  className = '',
  dropdownOptions = [],
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) { // Desktop
      setIsDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) { // Desktop
      setIsDropdownOpen(false);
    }
  };

  const handleToggleMobile = () => {
    if (window.innerWidth < 768) { // Mobile
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  if (variant === 'nav' && href) {
    return (
      <Link href={href} passHref className="z-[1]">
        <div
          className={`
            text-[--urban-white] text-2xl lg:text-base font-semibold whitespace-nowrap hover:underline
            ${isActive ? 'text-[--urban-blue] ' : ''}
            ${className}
          `}
        >
          {label}
        </div>
      </Link>
    );
  }


  if (variant === 'nav-dropdown') {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
    return (
      <div
        className={`relative ${isMobile ? '' : 'inline-block text-left'} z-[2]`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Parent button */}
        <button
          type="button"
          onClick={handleToggleMobile}
          className={`
            flex items-center gap-1 w-full
            text-[--urban-white] text-2xl lg:text-base font-semibold whitespace-nowrap hover:underline
            ${className}
          `}
        >
          {label}
          <span className="transform transition-transform scale-[.6]"  style={{
      transform: isMobile && isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    }}>
            ▼
          </span>
        </button>
  
        {/* Dropdown panel */}
        {isDropdownOpen && (
          <div
            className={`${
              isMobile ? 'w-full pl-4 space-y-2 mt-2' : 'absolute left-0 top-full w-52 mt-1 z-50 bg-[--urban-black] rounded-md shadow-lg ring-1 ring-black ring-opacity-10'
            }`}
          >
            <div className={`${isMobile ? 'flex flex-col' : 'py-1'}`}>
              {dropdownOptions.map((option, index) => (
                <Link key={index} href={option.href} passHref>
                  <div
                    className={`block font-normal cursor-pointer ${
                      isMobile
                        ? 'text-stone-300 text-l my-1'
                        : 'px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    • {option.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
  

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
