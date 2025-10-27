import React from 'react';

const CtaSection = () => {
    return (
        <section className="bg-primary-text">
            <div 
                className="container mx-auto px-4 sm:px-6 lg:py-24 py-16 text-center"
                style={{
                    backgroundImage: `
                        radial-gradient(circle at 10% 20%, rgba(221, 230, 237, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 90%, rgba(221, 230, 237, 0.1) 0%, transparent 50%)
                    `
                }}
            >
                <h2 className="text-4xl font-extrabold text-white mb-4">Start Learning Today</h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                    Join thousands of learners and take the next step in your personal or professional journey.
                </p>
                <a href="#" className="inline-block px-10 py-4 text-lg font-semibold text-primary-text bg-white rounded-full hover:bg-gray-200 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Join for Free
                </a>
            </div>
        </section>
    );
};

export default CtaSection;