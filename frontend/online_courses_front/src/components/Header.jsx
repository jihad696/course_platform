import React, { useState } from 'react';
import { Logo, MenuIcon, XIcon, SearchIcon, BellIcon, HeartIcon, ShoppingCartIcon, ChevronDownIcon } from './Icons';

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-border-color">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Left Side: Logo */}
                    <div className="flex-shrink-0">
                        <a href="#" className="flex items-center space-x-2">
                            <Logo className="h-8 w-auto text-primary-text" />
                        </a>
                    </div>

                    {/* Center: Search Bar (Desktop) */}
                    <div className="hidden md:flex flex-1 justify-center px-8 lg:px-16">
                        <div className="relative w-full max-w-lg">
                            <input
                                type="text"
                                placeholder="Search for courses..."
                                className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-primary-text/50 focus:border-transparent transition"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <SearchIcon className="h-5 w-5 text-secondary-text" />
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Nav Links, Icons, Auth Buttons (Desktop) */}
                    <div className="hidden md:flex items-center space-x-6">
                        <div className="group relative">
                            <a href="#" className="flex items-center text-primary-text hover:text-primary-text/80 font-medium transition">
                                Explore <ChevronDownIcon className="h-4 w-4 ml-1" />
                            </a>
                            {/* Mega Menu */}
                            <div className="absolute -left-1/2 top-full mt-4 w-screen max-w-4xl transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                                <div className="bg-white rounded-lg shadow-2xl border border-border-color p-8 grid grid-cols-3 gap-8">
                                    {/* Column 1 */}
                                    <div>
                                        <h3 className="font-bold text-primary-text mb-4">Development</h3>
                                        <ul className="space-y-2">
                                            <li><a href="#" className="text-secondary-text hover:text-primary-text">Web Development</a></li>
                                            <li><a href="#" className="text-secondary-text hover:text-primary-text">Mobile Apps</a></li>
                                            <li><a href="#" className="text-secondary-text hover:text-primary-text">Game Development</a></li>
                                            <li><a href="#" className="text-secondary-text hover:text-primary-text">Data Science</a></li>
                                        </ul>
                                    </div>
                                    {/* Column 2 */}
                                    <div>
                                        <h3 className="font-bold text-primary-text mb-4">Business</h3>
                                        <ul className="space-y-2">
                                            <li><a href="#" className="text-secondary-text hover:text-primary-text">Finance</a></li>
                                            <li><a href="#" className="text-secondary-text hover:text-primary-text">Marketing</a></li>
                                            <li><a href="#" className="text-secondary-text hover:text-primary-text">Entrepreneurship</a></li>
                                            <li><a href="#" className="text-secondary-text hover:text-primary-text">Management</a></li>
                                        </ul>
                                    </div>
                                    {/* Column 3 */}
                                    <div>
                                        <h3 className="font-bold text-primary-text mb-4">Design</h3>
                                        <ul className="space-y-2">
                                            <li><a href="#" className="text-secondary-text hover:text-primary-text">Graphic Design</a></li>
                                            <li><a href="#" className="text-secondary-text hover:text-primary-text">UI/UX Design</a></li>
                                            <li><a href="#" className="text-secondary-text hover:text-primary-text">3D & Animation</a></li>
                                            <li><a href="#" className="text-secondary-text hover:text-primary-text">Interior Design</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="text-secondary-text hover:text-primary-text"><BellIcon className="h-6 w-6" /></a>
                            <a href="#" className="text-secondary-text hover:text-primary-text"><HeartIcon className="h-6 w-6" /></a>
                            <a href="#" className="text-secondary-text hover:text-primary-text"><ShoppingCartIcon className="h-6 w-6" /></a>
                        </div>
                        <div className="flex items-center space-x-2">
                            <a href="#" className="px-4 py-2 text-sm font-semibold text-primary-text rounded-full hover:bg-gray-100 transition">Log in</a>
                            <a href="#" className="px-4 py-2 text-sm font-semibold text-white bg-primary-text rounded-full hover:bg-primary-text/90 transition">Sign up</a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 space-y-4">
                         <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search for courses..."
                                className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-primary-text/50 focus:border-transparent transition"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <SearchIcon className="h-5 w-5 text-secondary-text" />
                            </div>
                        </div>
                        <a href="#" className="block py-2 text-primary-text font-medium">Explore</a>
                        <a href="#" className="block py-2 text-primary-text font-medium">Notifications</a>
                        <a href="#" className="block py-2 text-primary-text font-medium">Favorites</a>
                        <a href="#" className="block py-2 text-primary-text font-medium">Cart</a>
                        <div className="flex items-center space-x-2 pt-4 border-t border-border-color">
                            <a href="#" className="w-full text-center px-4 py-2 text-sm font-semibold text-primary-text rounded-full bg-gray-100 hover:bg-gray-200 transition">Log in</a>
                            <a href="#" className="w-full text-center px-4 py-2 text-sm font-semibold text-white bg-primary-text rounded-full hover:bg-primary-text/90 transition">Sign up</a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;