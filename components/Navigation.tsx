import React, { useState } from 'react';
import Button from './Button';
import Logo from './Logo';



const Navigation: React.FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
    <nav className="flex justify-between items-start md:items-center md:justify-center p-4 col-span-6 md:col-span-8 lg:col-span-12 w-full mt-4">
        <Logo className="block md:hidden" size="small" />
        <Button className='text-3xl md:hidden' label="☰" onClick={toggleMenu} variant="default" />

        {/* Sliding menu */}
        <div className={`fixed top-0 right-0 h-full bg-(--urban-black) shadow-lg transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} w-full z-50 md:hidden`}>
            <div className="flex justify-between items-start p-4 col-span-6 md:col-span-8 lg:col-span-12 w-ful">
            <Logo size="small" />
            <Button className='text-3xl' label="x" onClick={toggleMenu} variant="default" />
            </div>
            <div className="flex flex-col  items-start p-4 space-y-4">
                <Button label="Home" href="/" variant="nav" isActive={true} />
                <Button label="News" href="/" variant="nav" isActive={false} />
                <Button label="About Us" href="/" variant="nav" isActive={false} />
                <Button label="FAQ" href="/" variant="nav" isActive={false} />
                <Button label="Registration & Membership" href="/" variant="nav" isActive={false} />
                <Button label="Session Scheduler" href="/" variant="nav" isActive={false} />
                <Button label="Donation" className='text-(--urban-orange)' href="/" variant="nav" isActive={false} />
                <Button label="Sign Up" className='text-(--urban-blue)' href="/" variant="nav" isActive={false} />
            </div>
        </div>

        <nav className="hidden md:flex justify-between items-center p-4 md:col-span-8 lg:col-span-12 w-full max-w-[1200px] max-h-[200px] overflow-hidden scale-[calc(1)]">
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
    </nav>

    );
};

export default Navigation;