import React from 'react';

const testimonialsData = [
    {
        quote: "Lumify completely changed the trajectory of my career. The web development bootcamp was comprehensive, and the instructor support was incredible.",
        avatar: "https://picsum.photos/seed/avatar1/100/100",
        name: "Sarah Johnson",
        course: "Web Development Bootcamp"
    },
    {
        quote: "As a complete beginner in design, I was intimidated. But the UI/UX course was so well-structured and easy to follow. I now have a portfolio I'm proud of!",
        avatar: "https://picsum.photos/seed/avatar2/100/100",
        name: "Michael Chen",
        course: "UI/UX Design Masterclass"
    },
    {
        quote: "The marketing courses here are top-notch. I was able to apply what I learned directly to my small business and saw immediate results. Highly recommend!",
        avatar: "https://picsum.photos/seed/avatar3/100/100",
        name: "Jessica Williams",
        course: "Digital Marketing Masterclass"
    }
];

const TestimonialsSection = () => {
    return (
        <section className="bg-white py-16 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary-text">What Our Students Say</h2>
                    <p className="text-secondary-text mt-2 max-w-2xl mx-auto">Real stories from learners who have transformed their lives with Lumify.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} className="bg-primary-bg p-8 rounded-xl flex flex-col">
                            <p className="text-lg text-primary-text italic mb-6 flex-grow">"{testimonial.quote}"</p>
                            <div className="flex items-center mt-auto">
                                <img src={testimonial.avatar} alt={testimonial.name} className="h-14 w-14 rounded-full object-cover mr-4" />
                                <div>
                                    <p className="font-bold text-primary-text">{testimonial.name}</p>
                                    <p className="text-sm text-secondary-text">{testimonial.course}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;