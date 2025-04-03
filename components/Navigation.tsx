import React, { useState } from 'react';
import Button from './Button';
import Logo from './Logo';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu
  const [isTabletMenuOpen, setIsTabletMenuOpen] = useState(false); // For tablet menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTabletMenu = () => {
    setIsTabletMenuOpen(!isTabletMenuOpen);
  };

  return (
    <nav className="flex justify-between items-start md:items-center md:justify-center p-4 col-span-6 md:col-span-8 lg:col-span-12 w-full mt-4">
      {/* Mobile Logo and Hamburger Menu */}
      <Logo className="block md:hidden" size="small" />
      <Button className="text-3xl md:hidden" label="☰" onClick={toggleMenu} variant="default" />

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full bg-(--urban-black) shadow-lg transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } w-full z-50 md:hidden`}
      >
        <div className="flex justify-between items-start p-4">
          <Logo size="small" />
          <Button className="text-3xl" label="x" onClick={toggleMenu} variant="default" />
        </div>
        <div className="flex flex-col items-start p-4 space-y-4">
          <Button label="Home" href="/" variant="nav" isActive={true} />
          <Button label="News" href="/" variant="nav" isActive={false} />
          <Button label="About Us" href="/" variant="nav" isActive={false} />
          <Button label="FAQ" href="/" variant="nav" isActive={false} />
          <Button label="Registration & Membership" href="/" variant="nav" isActive={false} />
          <Button label="Session Scheduler" href="/" variant="nav" isActive={false} />
        </div>
      </div>

      {/* TABLET MENU */}
      <div className="hidden md:flex lg:hidden justify-between items-center w-full max-w-[1200px]">
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
                <Button label="Home" href="/" variant="nav" isActive={true} />
                <Button label="News" href="/" variant="nav" isActive={false} />
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
        <Button label="Home" href="/" variant="nav" isActive={true} />
        <Button label="News" href="/" variant="nav" isActive={false} />
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