import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { client } from '../lib/sanity';

interface ContactItem {
  label: string;
  value: string;
}

const Footer: React.FC = () => {
  const [contactInfo, setContactInfo] = useState<ContactItem[]>([]);

  // duplicate of Navigation’s account-link handler
  const handleAccountLink = () => {
    const widget = document.querySelector(
      'healcode-widget .healcode-login-register-text-link'
    ) as HTMLElement | null;
    widget?.click();
  };

  useEffect(() => {
    client
      .fetch<ContactItem[]>(`
        *[_type == "homepageImageBlock" && blockType == "contact"][0].contact
      `)
      .then((data) => setContactInfo(data || []))
      .catch((err) => console.error('Sanity fetch error:', err));
  }, []);

  return (
    <footer className=" bottom-0 w-full bg-(--urban-blue) text-(--urban-white) py-8 col-span-6 sm:col-span-8 lg:col-span-12 sm:max-h-[400px] min-w-[100vw] overflow-hidden">
      <div className="mx-auto max-w-[1200px] flex flex-col sm:flex-row justify-between px-4">
        {/* About Section */}
        <div className="flex flex-col mb-10 sm:mb-0">
          <h2 className="font-bold mb-4">About</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/About/OurStory">Our Mission</Link>
            </li>
            <li>
              <Link href="/About/Founders">Leadership</Link>
            </li>
            <li>
              <Link href="/News">News</Link>
            </li>
            <li>
              <Link href="/About/TeenStories">Teen Stories</Link>
            </li>
          </ul>
        </div>

        {/* Membership Section */}
        <div className="flex flex-col mb-10 sm:mb-0">
          <h2 className="font-bold mb-4">Membership</h2>
          <ul className="space-y-2">
            <li>
              <a onClick={handleAccountLink} className="cursor-pointer">
                Login
              </a>
            </li>
            <li>
              <Link href="/Session">Schedule Session</Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
         <div className="flex flex-col mb-10 sm:mb-0">
          <h2 className="font-bold mb-4">Contact Us</h2>
          <ul className="space-y-2">
            {contactInfo.map((item, idx) => (
              <li key={idx}>
                {item.label.toLowerCase().includes('email') ? (
                  <a
                    href={`mailto:${item.value}`}
                    className="hover:underline"
                  >
                    {item.value}
                  </a>
                ) : item.label.toLowerCase().includes('phone') ? (
                  <a
                    href={`tel:${item.value.replace(/\D/g, '')}`}
                    className="hover:underline"
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </li>
            ))}
          </ul>
        </div>


        {/* Social Media Section */}
        <div className="flex flex-col mb-10 sm:mb-0">
          <h2 className="font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/UrbanPowerHouse/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="w-6 h-6 cursor-pointer" />
            </a>
            <a
              href="https://www.youtube.com/@urbanpowerhouse3700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="w-6 h-6 cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/urbanpowerhouse"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-6 h-6 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row max-w-[1200px] mx-auto sm:items-center mt-8 px-4">
        <p className="pr-6">© {new Date().getFullYear()} by Urban PowerHouse</p>
        <p className="pr-2">
          Urban PowerHouse is a 501(c)3 Non-Profit Organization
        </p>
      </div>
    </footer>
  );
};

export default Footer;