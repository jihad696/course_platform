import React from 'react';
import { Logo } from './Icons';

const Footer = () => {
    const socialLinks = [
        { name: 'Facebook', href: '#', icon: (props) => <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg> },
        { name: 'Twitter', href: '#', icon: (props) => <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg> },
        { name: 'Instagram', href: '#', icon: (props) => <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2zM12 8.118c-2.147 0-3.882 1.735-3.882 3.882s1.735 3.882 3.882 3.882 3.882-1.735 3.882-3.882S14.147 8.118 12 8.118zm0 6.162c-1.245 0-2.28-1.035-2.28-2.28s1.035-2.28 2.28-2.28 2.28 1.035 2.28 2.28-1.035 2.28-2.28 2.28zm4.965-6.505a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z" clipRule="evenodd" /></svg> },
    ];

    return (
        <footer className="bg-white border-t border-border-color">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Side */}
                    <div className="lg:col-span-4 space-y-4">
                        <Logo className="h-8 w-auto text-primary-text" />
                        <p className="text-secondary-text max-w-xs">Our mission is to make quality education accessible to everyone, everywhere.</p>
                        <div className="flex space-x-4">
                            {socialLinks.map((item) => (
                                <a key={item.name} href={item.href} className="text-secondary-text hover:text-primary-text">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Link Columns */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-sm font-semibold text-primary-text tracking-wider uppercase">Solutions</h3>
                            <ul className="mt-4 space-y-2">
                                <li><a href="#" className="text-secondary-text hover:text-primary-text">Lumify Business</a></li>
                                <li><a href="#" className="text-secondary-text hover:text-primary-text">Teach on Lumify</a></li>
                                <li><a href="#" className="text-secondary-text hover:text-primary-text">Get the app</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-primary-text tracking-wider uppercase">Support</h3>
                            <ul className="mt-4 space-y-2">
                                <li><a href="#" className="text-secondary-text hover:text-primary-text">Help and Support</a></li>
                                <li><a href="#" className="text-secondary-text hover:text-primary-text">Contact Us</a></li>
                                <li><a href="#" className="text-secondary-text hover:text-primary-text">FAQ</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-primary-text tracking-wider uppercase">Company</h3>
                            <ul className="mt-4 space-y-2">
                                <li><a href="#" className="text-secondary-text hover:text-primary-text">About Us</a></li>
                                <li><a href="#" className="text-secondary-text hover:text-primary-text">Careers</a></li>
                                <li><a href="#" className="text-secondary-text hover:text-primary-text">Blog</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-primary-text tracking-wider uppercase">Legal</h3>
                            <ul className="mt-4 space-y-2">
                                <li><a href="#" className="text-secondary-text hover:text-primary-text">Terms</a></li>
                                <li><a href="#" className="text-secondary-text hover:text-primary-text">Privacy Policy</a></li>
                                <li><a href="#" className="text-secondary-text hover:text-primary-text">Cookie Settings</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-border-color pt-8">
                    <p className="text-base text-secondary-text text-center">&copy; 2024 Lumify, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;