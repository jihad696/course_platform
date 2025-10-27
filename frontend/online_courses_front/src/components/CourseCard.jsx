import React from 'react';
import { StarIcon } from './Icons';

const CourseCard = ({ course }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col h-full">
            <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-primary-text mb-2 flex-grow">{course.title}</h3>
                <p className="text-sm text-secondary-text mb-3">{course.instructor}</p>
                <div className="flex items-center mb-4">
                    <span className="text-highlight font-bold mr-1">{course.rating.toFixed(1)}</span>
                    <div className="flex text-highlight">
                        {[...Array(Math.floor(course.rating))].map((_, i) => <StarIcon key={i} className="h-4 w-4" />)}
                        {course.rating % 1 >= 0.5 && <StarIcon key="half" className="h-4 w-4" style={{ clipPath: 'inset(0 50% 0 0)' }} />}
                    </div>
                </div>
                <p className="text-xl font-extrabold text-primary-text mt-auto">${course.price}</p>
            </div>
        </div>
    );
};

export default CourseCard;