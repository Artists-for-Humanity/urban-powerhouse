'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
  iconSrc?: string;
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
  iconSrc
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  if (variant === 'nav' && href) {
    return (
      <Link href={href} passHref className="z-[1]">
        <div
          className={`
            text-[--urban-white] text-2xl lg:text-base font-semibold whitespace-nowrap hover:underline
            ${isActive ? 'text-[--urban-blue]' : ''}
            ${className}
          `}
        >
          {label}
        </div>
      </Link>
    );
  }

  if (variant === 'nav-dropdown') {
    return (
      <div className="relative inline-block text-left z-[2]">
        {/* Parent button */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            toggleDropdown();
          }}
          className={`
            flex items-center gap-1 w-full
            text-[--urban-white] text-2xl lg:text-base font-semibold whitespace-nowrap
            ${className}
          `}
        >
          {label}
          <Image
            src={
              isDropdownOpen || hoveredIndex !== null
                ? "/icons/orange-chevron.png"
                : "/icons/blue-chevron.png"
            }
            alt="Chevron"
            width={25}
            height={25}
            className={`transition-transform duration-300 ${isDropdownOpen ? '-rotate-90' : ''
              }`}
            onMouseEnter={() => setHoveredIndex(0)} // Adjust if you have multiple items
            onMouseLeave={() => setHoveredIndex(null)}
          />
        </button>

        {/* Dropdown panel */}
        {isDropdownOpen && (
          <div className="lg:absolute left-0 top-full w-52 mt-1 z-50 bg-[--urban-black] rounded-md">
            <div className="py-1">
              {dropdownOptions.map((option, index) => (
                <Link key={index} href={option.href} passHref>
                  <div className="block bg-black/70 px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900 cursor-pointer">
                    {option.label}
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
          <div className="flex items-center justify-center gap-2">
            {iconSrc && (
              <Image src={iconSrc} alt="icon" width={20} height={20} />
            )}
            <span>{label}</span>
          </div>
          {/* {label} */}
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
      <div className="flex items-center justify-center gap-2">
        {iconSrc && (
          <Image src={iconSrc} alt="icon" width={20} height={20} />
        )}
        <span>{label}</span>
      </div>
    </button>
  );
};

export default Button;
