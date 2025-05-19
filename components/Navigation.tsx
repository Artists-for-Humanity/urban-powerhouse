import React, { useState, useEffect} from 'react';
import Button from './Button';
import Logo from './Logo';
import { usePathname } from 'next/navigation';

const Navigation: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTabletMenuOpen, setIsTabletMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTabletMenu = () => {
    setIsTabletMenuOpen(!isTabletMenuOpen);
  };

   useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.mindbodyonline.com/javascripts/healcode.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

   const handleAccountLink = () => {
    const widget = document.querySelector(
      'healcode-widget .healcode-login-register-text-link'
    ) as HTMLElement | null;
    widget?.click();
  };

  return (
    <nav className="flex justify-between items-start z-[1] sm:items-center sm:justify-center py-4 col-span-6 sm:col-span-8 lg:col-span-12 w-full mt-4 max-h-[150px]">
      {/* Mobile Logo and Hamburger Menu */}
      <Logo className="block sm:hidden" size="small" />
      <Button className="text-3xl sm:hidden" label="☰" onClick={toggleMenu} variant="default" />

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full bg-(--urban-black) shadow-lg transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } w-full z-2 sm:hidden`}
      >
        <div className="flex justify-between items-start p-4">
          <Logo size="small" />
          <Button className="text-3xl" label="x" onClick={toggleMenu} variant="default" />
        </div>
        <div className="flex flex-col items-start p-4 space-y-4">
          <Button label="Home" href="/" variant="nav"  isActive={pathname === '/'} />
          <Button label="News" href="/News" variant="nav" isActive={pathname === '/News'} />
          {/* <Button label="About Us" href="/About" variant="nav"  isActive={pathname === '/About'} /> */}
          <Button
                  label="About"
                  variant="nav-dropdown"
                  className='cursor-pointer'
                  dropdownOptions={[
                  { label: 'Meet the Founders', href: '/About/Founders' },
                  { label: 'Teen Story', href: '/About/TeenStories' },
                  { label: 'From Humble Beginnings to Urban Powerhouse', href: '/About/OurStory' },
                  ]}/>
          <Button label="FAQ" href="/FAQ" variant="nav" isActive={pathname === '/FAQ'} />
          {/* <Button label="Registration & Membership" href="/" variant="nav" isActive={false} /> */}
          <Button
          label="Registration & Membership"
          variant="nav-dropdown"
           className='cursor-pointer'
          dropdownOptions={[
          { label: 'New Member Registration', href: '/Registration/Registration' },
          { label: 'Passes', href: '/Registration/Pass' },
          ]}/>
          <Button label="Session Scheduler" href="/Session" variant="nav" isActive={false} />
          <Button label="Donate" className='text-[var(--urban-orange)]' href="/Donation" variant="nav" isActive={false} />
           <Button label="Sign In" className='text-[var(--urban-orange)]' variant="nav"  onClick={handleAccountLink} isActive={false} />
          {/* <Button label="Sign In" className='text-[var(--urban-blue)]'  variant="nav"    isActive={false} /> */}
        </div>
      </div>

      {/* TABLET MENU */}
      <div className="hidden sm:flex lg:hidden justify-between items-center w-full max-w-[1200px]">
        <Logo size="small" />
        <div className="flex gap-4 items-center">
          <Button label="Donation" onClick={() => console.log('Donation clicked')} href='/Donation' variant="default" />
          <Button label="Sign In"  onClick={handleAccountLink} variant="default" />
             <div className="relative">
            <Button className="text-3xl" label="☰" onClick={toggleTabletMenu} variant="default" />
            <div
              className={`fixed top-0 right-0 h-full bg-(--urban-black) shadow-lg transform transition-transform duration-300 ${
                isTabletMenuOpen ? 'translate-x-0' : 'translate-x-full'
              } w-full z-2`}
            >
              <div className="flex justify-between items-start p-4">
                <Logo size="small" />
                <Button className="text-3xl" label="x" onClick={toggleTabletMenu} variant="default" />
              </div>
              <div className="flex flex-col items-start p-4 space-y-4 ">
                <Button label="Home" href="/" variant="nav" isActive={pathname === '/'} />
                <Button label="News" href="/News" variant="nav" isActive={pathname === '/News'} />
                <Button
                  label="About"
                  variant="nav-dropdown"
                   className='cursor-pointer'
                  dropdownOptions={[
                  { label: 'Meet the Founders', href: '/About/Founders' },
                  { label: 'Teen Story', href: '/About/TeenStories' },
                  { label: 'From Humble Beginnings to Urban Powerhouse', href: '/About/OurStory' },
                  ]}/>
                <Button label="FAQ" href="/FAQ" variant="nav" isActive={pathname === '/FAQ'} />
                  <Button
                  label="Registration & Membership"
                  variant="nav-dropdown"
                   className='cursor-pointer'
                  dropdownOptions={[
                  { label: 'New Member Registration', href: '/Registration/Registration' },
                  { label: 'Passes', href: '/Registration/Pass' },
                  ]}/>
                <Button label="Session Scheduler" href="/Session" variant="nav" isActive={false} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden lg:flex justify-between items-center py-4 w-full max-w-[1200px]">
        <Logo size="small" />
        <Button label="Home" href="/" variant="nav" isActive={pathname === '/'} />
        <Button label="News" href="/News" variant="nav" isActive={pathname === '/News'} />
        {/* <Button label="About Us" href="/About" variant="nav" isActive={pathname === '/About'} /> */}
        <Button
                  label="About"
                  variant="nav-dropdown"
                   className='cursor-pointer'
                  dropdownOptions={[
                  { label: 'Meet the Founders', href: '/About/Founders' },
                  { label: 'Teen Story', href: '/About/TeenStories' },
                  { label: 'From Humble Beginnings to Urban Powerhouse', href: '/About/OurStory' },
                  ]}/>
      <Button label="FAQ" href="/FAQ" variant="nav" isActive={pathname === '/FAQ'} />
        <Button
        label="Registration & Membership"
        variant="nav-dropdown"
         className='cursor-pointer'
        dropdownOptions={[
        { label: 'New Member Registration', href: '/Registration/Registration' },
        { label: 'Passes', href: '/Registration/Pass' },
        ]}/>
        <Button label="Session Scheduler" href="/Session" variant="nav" isActive={false} />
        <Button label="Donation" onClick={() => console.log('Donation clicked')} variant="default" href='/Donation' />
        <Button label="Sign In"  onClick={handleAccountLink} variant="default" />
      </div>
        <div
    style={{ display: "none" }}
    dangerouslySetInnerHTML={{
      __html: `<healcode-widget
        data-version="0.2"
        data-link-class="healcode-login-register-text-link"
        data-site-id="105872"
        data-mb-site-id="5724678"
        data-bw-identity-site="true"
        data-type="account-link"
        data-inner-html="Login | Register"
      ></healcode-widget>`
    }}
  />
    </nav>
  );
};

export default Navigation;