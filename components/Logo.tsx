import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
                width={size === 'small' ? 120 : 500}
                height={size === 'small' ? 111 : 100}
                style={{ height: 'auto' }}
            />
        </Link>
    );
};

export default Logo;