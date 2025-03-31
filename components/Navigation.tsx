import React from 'react';
import Button from './Button';
import Logo from './Logo';



const Navigation: React.FC = () => {
    return (
        <nav className="flex justify-between items-center p-4 col-span-12 w-full max-w-[1200px] max-h-[200px]">
            <Logo size="small" />
            <Button
                label="Home"
                href="/"
                variant="nav"
                isActive={true} 
            />
              <Button
                label="News"
                href="/"
                variant="nav"
                isActive={false}
            />
              <Button
                label="About Us"
                href="/"
                variant="nav"
                isActive={false} 
            />
              <Button
                label="FAQ"
                href="/"
                variant="nav"
                isActive={false}
            />
              <Button
                label="Registration & Membership"
                href="/"
                variant="nav"
                isActive={false}
            />
               <Button
                label="Session Scheduler"
                href="/"
                variant="nav"
                isActive={false}
            />
                <Button
                label="Donation"
                onClick={() => console.log('Button clicked')}
                variant="default"
            />
                <Button
                label="Sign In"
                onClick={() => console.log('Button clicked')}
                variant="default"
            />
            
        </nav>
    );
};

export default Navigation;