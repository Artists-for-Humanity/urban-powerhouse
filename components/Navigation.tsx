import React from 'react';
import Button from './Button';
import Logo from './Logo';



const Navigation: React.FC = () => {
    return (
        <nav className="flex justify-between items-center bg-gray-900 p-4 col-span-12 w-full max-w-[1200px] max-h-[200px] overflow-hidden scale-[calc(1)]">
            <Logo size="small" />
            <Button label="Home" href="/" variant="nav" isActive={true} />
            <Button label="News" href="/" variant="nav" isActive={false} />
            <Button label="About Us" href="/" variant="nav" isActive={false} />
            <Button label="FAQ" href="/" variant="nav" isActive={false} />
            <Button label="Registration & Membership" href="/" variant="nav" isActive={false} />
            <Button label="Session Scheduler" href="/" variant="nav" isActive={false} />
            <Button label="Donation" onClick={() => console.log('Donation clicked')} variant="default" />
            <Button label="Sign In" onClick={() => console.log('Sign Up clicked')} variant="default" />
        </nav>
    );
};

export default Navigation;