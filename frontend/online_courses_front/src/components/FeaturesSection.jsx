import React from 'react';
import { BookOpenIcon, VideoCameraIcon, UsersIcon } from './Icons';

const featuresData = [
    {
        icon: <BookOpenIcon className="h-10 w-10 text-primary-text" />,
        title: 'Expert Instructors',
        description: 'Learn from industry professionals who are passionate about teaching and bring real-world experience to every course.'
    },
    {
        icon: <VideoCameraIcon className="h-10 w-10 text-primary-text" />,
        title: 'Flexible Learning',
        description: 'Access your courses anytime, anywhere. Learn at your own pace with on-demand video lessons and downloadable resources.'
    },
    {
        icon: <UsersIcon className="h-10 w-10 text-primary-text" />,
        title: 'Vibrant Community',
        description: 'Connect with fellow learners and instructors through Q&A sections, forums, and direct messaging.'
    }
];

const FeaturesSection = () => {
    return (
        <section className="bg-white py-16 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary-text">Why Learn With Lumify?</h2>
                    <p className="text-secondary-text mt-2 max-w-2xl mx-auto">We provide the tools and community to help you succeed in your learning journey.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuresData.map((feature, index) => (
                        <div key={index} className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg hover:bg-white transition-all duration-300 transform hover:-translate-y-2">
                            <div className="flex items-center justify-center h-20 w-20 mx-auto mb-6 bg-primary-bg rounded-full">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary-text mb-2">{feature.title}</h3>
                            <p className="text-secondary-text">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;