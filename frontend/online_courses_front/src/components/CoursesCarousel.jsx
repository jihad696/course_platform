import React from 'react';
import CourseCard from './CourseCard';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

const CoursesCarousel = ({ title, subtitle, courses }) => {
    return (
        <section className="bg-white py-16 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-primary-text">{title}</h2>
                        <p className="text-secondary-text mt-1">{subtitle}</p>
                    </div>
                    <div className="hidden md:flex items-center space-x-2">
                        <a href="#" className="font-semibold text-primary-text hover:underline">More Courses</a>
                         <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition text-secondary-text">
                            <ChevronLeftIcon className="h-5 w-5" />
                        </button>
                        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition text-secondary-text">
                            <ChevronRightIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                <div className="flex space-x-6 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                    {courses.map(course => (
                        <div key={course.id} className="flex-shrink-0 w-80">
                           <CourseCard course={course} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoursesCarousel;