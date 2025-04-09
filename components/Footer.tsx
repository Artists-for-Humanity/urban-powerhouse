import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className=" bottom-0 w-full bg-(--urban-blue) text-white py-8 col-span-6 sm:col-span-8 lg:col-span-12 sm:max-h-[400px] min-w-[99vw] overflow-hidden">
            <div className="mx-auto max-w-[1200px] flex flex-col sm:flex-row justify-between px-4">
                {/* About Section */}
                <div className="flex flex-col mb-10 sm:mb-0">
                    <h2 className="font-bold mb-4">About</h2>
                    <ul className="space-y-2">
                        <li>Our Mission</li>
                        <li>Leadership</li>
                        <li>News</li>
                        <li>Teen Stories</li>
                    </ul>
                </div>

                {/* Membership Section */}
                <div className="flex flex-col mb-10 sm:mb-0">
                    <h2 className="font-bold mb-4">Membership</h2>
                    <ul className="space-y-2">
                        <li>Login</li>
                        <li>Schedule Session</li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="flex flex-col mb-10 sm:mb-0">
                    <h2 className="font-bold mb-4">Contact Us</h2>
                    <ul className="space-y-2">
                        <li>Contact@UrbanPowerHouse.com</li>
                        <li>Phone: 123-888-3434</li>
                        <li>Address: 688 Awesome Road Boston, MA 02140</li>
                    </ul>
                </div>

                {/* Subscribe Section */}
                <div className="flex flex-col mb-10 sm:mb-0">
                    <h2 className="font-bold mb-4">Subscribe</h2>
                    <div className="flex items-center space-x-2 bg-gray-200">
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-2 text-black"
                        />
                    </div>
                </div>

                {/* Social Media Section */}
                <div className="flex flex-col mb-10 sm:mb-0">
                    <h2 className="font-bold mb-4">Follow Us</h2>
                    <div className="flex space-x-4">
                        <FaFacebookF className="w-6 h-6 cursor-pointer" />
                        <FaYoutube className="w-6 h-6 cursor-pointer" />
                        <FaInstagram className="w-6 h-6 cursor-pointer" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row max-w-[1200px] mx-auto sm:items-center mt-8 px-4">
                <p className="pr-6">© 2025 by Urban PowerHouse</p>
                <p className="pr-2">Urban PowerHouse is a 501(c)3 Non-Profit Organization</p>
            </div>
        </footer>
    );
};

export default Footer;