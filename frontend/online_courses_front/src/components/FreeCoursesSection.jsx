import React, { useState } from 'react';
import CourseCard from './CourseCard';

const allFreeCourses = [
    { id: 10, title: 'Introduction to Python', instructor: 'Codecademy', rating: 4.7, price: 0, image: 'https://picsum.photos/seed/free1/600/400', category: 'Programming' },
    { id: 11, title: 'HTML & CSS for Beginners', instructor: 'FreeCodeCamp', rating: 4.8, price: 0, image: 'https://picsum.photos/seed/free2/600/400', category: 'Programming' },
    { id: 12, title: 'JavaScript Essentials', instructor: 'Scrimba', rating: 4.6, price: 0, image: 'https://picsum.photos/seed/free3/600/400', category: 'Programming' },
    { id: 13, title: 'Content Creation Basics', instructor: 'HubSpot Academy', rating: 4.5, price: 0, image: 'https://picsum.photos/seed/free4/600/400', category: 'Content' },
    { id: 14, title: 'Introduction to SEO', instructor: 'Moz', rating: 4.7, price: 0, image: 'https://picsum.photos/seed/free5/600/400', category: 'Marketing' },
    { id: 15, title: 'Social Media Marketing 101', instructor: 'Buffer', rating: 4.6, price: 0, image: 'https://picsum.photos/seed/free6/600/400', category: 'Marketing' },
];

const categories = ['Programming', 'Content', 'Marketing'];

const FreeCoursesSection = () => {
    const [activeTab, setActiveTab] = useState('Programming');

    const filteredCourses = allFreeCourses.filter(course => course.category === activeTab);

    return (
        <section className="bg-primary-bg py-16 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary-text">Explore Free Beginner Courses</h2>
                    <p className="text-secondary-text mt-2 max-w-2xl mx-auto">Start your learning journey with our curated selection of free courses designed for beginners.</p>
                </div>
                
                {/* Tabs */}
                <div className="flex justify-center border-b border-border-color mb-8">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`px-6 py-3 text-lg font-medium transition-colors duration-300 ${
                                activeTab === category 
                                ? 'border-b-2 border-primary-text text-primary-text'
                                : 'text-secondary-text hover:text-primary-text'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCourses.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FreeCoursesSection;