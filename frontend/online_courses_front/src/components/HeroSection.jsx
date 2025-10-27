import React from 'react';

const HeroSection = () => {
    return (
        <div className="relative bg-primary-bg overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-28 md:pb-32">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column */}
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-text leading-tight mb-6">
                            Unlock Your Potential, One Course at a Time.
                        </h1>
                        <p className="text-lg md:text-xl text-secondary-text mb-8 max-w-xl mx-auto md:mx-0">
                            Lumify offers a diverse range of courses to help you achieve your personal and professional goals. Learn from industry experts and join a vibrant community of learners.
                        </p>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="#" className="px-8 py-3 text-lg font-semibold text-white bg-primary-text rounded-full hover:bg-primary-text/90 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                Explore Courses
                            </a>
                            <a href="#" className="px-8 py-3 text-lg font-semibold text-primary-text bg-transparent border-2 border-primary-text rounded-full hover:bg-white transition">
                                Learn More
                            </a>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="hidden md:block">
                        <img 
                            src="https://picsum.photos/seed/collaboration/1200/1000" 
                            alt="People collaborating"
                            className="rounded-2xl shadow-2xl object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
            {/* Wavy Transition */}
            <div className="absolute bottom-0 left-0 w-full">
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0 50C144 16.6667 432 -16.6667 720 50C1008 116.667 1296 83.3333 1440 50V100H0V50Z" fill="#FFFFFF"/>
                </svg>
            </div>
        </div>
    );
};

export default HeroSection;