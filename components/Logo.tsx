import React from 'react';
import Image from 'next/image';

interface LogoProps {
    size: 'small' | 'large';
    className?: string; // Add className as an optional prop
}

const Logo: React.FC<LogoProps> = ({ size, className }) => {
    const logoSrc = size === 'small' ? '/logoSmall.svg' : '/logoLarge.svg';

    return (
        <Image 
            src={logoSrc}
            className={`z-[1] ${className}`} // Pass the className prop to the Image component
            alt="Logo" 
            width={size === 'small' ? 144 : 100} 
            height={size === 'small' ? 111 : 100} 
        />
    );
};

export default Logo;