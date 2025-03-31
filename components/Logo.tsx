import React from 'react';
import Image from 'next/image';

interface LogoProps {
    size: 'small' | 'large';
}

const Logo: React.FC<LogoProps> = ({ size }) => {

    const logoSrc = size === 'small' ? '/logoSmall.svg' : '/logoLarge.svg';
    return (
    <Image 
    src={logoSrc} 
    alt="Logo" 
    width={size === 'small' ? 144 : 100} height={size === 'small' ? 111 : 100} />
);

};

export default Logo;