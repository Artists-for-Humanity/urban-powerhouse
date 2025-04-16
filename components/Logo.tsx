import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
    size: 'small' | 'large';
    className?: string; 
}

const Logo: React.FC<LogoProps> = ({ size, className }) => {
    const logoSrc = size === 'small' ? '/logoSmall.svg' : '/logoLarge.svg';

    return (
        <Link href="/" className="flex items-center justify-center">
        <Image 
            src={logoSrc}
            className={`z-[1] ${className}`} 
            alt="Logo" 
            width={size === 'small' ? 144 : 100} 
            height={size === 'small' ? 111 : 100} 
        />
        </Link>
    );
};

export default Logo;