import React, { useState } from 'react';
import Button from './Button';
import Logo from './Logo';
import { usePathname } from 'next/navigation';

const Navigation: React.FC = () => {
  const pathname = usePathname(); // Get the current route
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTabletMenuOpen, setIsTabletMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTabletMenu = () => {
    setIsTabletMenuOpen(!isTabletMenuOpen);
  };

  return (
    <nav className="flex justify-between items-start z-[1] sm:items-center sm:justify-center p-4 col-span-6 sm:col-span-8 lg:col-span-12 w-full mt-4">
      {/* Mobile Logo and Hamburger Menu */}
      <Logo className="block sm:hidden" size="small" />
      <Button className="text-3xl sm:hidden" label="☰" onClick={toggleMenu} variant="default" />

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full bg-(--urban-black) shadow-lg transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } w-full z-50 sm:hidden`}
      >
        <div className="flex justify-between items-start p-4">
          <Logo size="small" />
          <Button className="text-3xl" label="x" onClick={toggleMenu} variant="default" />
        </div>
        <div className="flex flex-col items-start p-4 space-y-4">
          <Button label="Home" href="/" variant="nav"  isActive={pathname === '/'} />
          <Button label="News" href="/News" variant="nav" isActive={pathname === '/News'} />
          <Button label="About Us" href="/" variant="nav" isActive={false} />
          <Button label="FAQ" href="/" variant="nav" isActive={false} />
          <Button label="Registration & Membership" href="/" variant="nav" isActive={false} />
          <Button label="Session Scheduler" href="/" variant="nav" isActive={false} />
          <Button label="Donate" className='text-(--urban-orange)' href="/" variant="nav" isActive={false} />
          <Button label="Sign Up" className='text-(--urban-blue)' href="/" variant="nav" isActive={false} />
        </div>
      </div>

      {/* TABLET MENU */}
      <div className="hidden sm:flex lg:hidden justify-between items-center w-full max-w-[1200px]">
        <Logo size="small" />
        <div className="flex gap-4 items-center">
          <Button label="Donation" onClick={() => console.log('Donation clicked')} variant="default" />
          <Button label="Sign In" onClick={() => console.log('Sign In clicked')} variant="default" />
             <div className="relative">
            <Button className="text-3xl" label="☰" onClick={toggleTabletMenu} variant="default" />
            <div
              className={`fixed top-0 right-0 h-full bg-(--urban-black) shadow-lg transform transition-transform duration-300 ${
                isTabletMenuOpen ? 'translate-x-0' : 'translate-x-full'
              } w-full z-50`}
            >
              <div className="flex justify-between items-start p-4">
                <Logo size="small" />
                <Button className="text-3xl" label="x" onClick={toggleTabletMenu} variant="default" />
              </div>
              <div className="flex flex-col items-start p-4 space-y-4 ">
                <Button label="Home" href="/" variant="nav" isActive={pathname === '/'} />
                <Button label="News" href="/News" variant="nav" isActive={pathname === '/News'} />
                <Button label="About Us" href="/" variant="nav" isActive={false} />
                <Button label="FAQ" href="/" variant="nav" isActive={false} />
                <Button label="Registration & Membership" href="/" variant="nav" isActive={false} />
                <Button label="Session Scheduler" href="/" variant="nav" isActive={false} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden lg:flex justify-between items-center p-4 w-full max-w-[1200px]">
        <Logo size="small" />
        <Button label="Home" href="/" variant="nav" isActive={pathname === '/'} />
        <Button label="News" href="/News" variant="nav" isActive={pathname === '/News'} />
        <Button label="About Us" href="/" variant="nav" isActive={false} />
        <Button label="FAQ" href="/" variant="nav" isActive={false} />
        <Button label="Registration & Membership" href="/" variant="nav" isActive={false} />
        <Button label="Session Scheduler" href="/" variant="nav" isActive={false} />
        <Button label="Donation" onClick={() => console.log('Donation clicked')} variant="default" />
        <Button label="Sign In" onClick={() => console.log('Sign In clicked')} variant="default" />
      </div>
    </nav>
  );
};

export default Navigation;