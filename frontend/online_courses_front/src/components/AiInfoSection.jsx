import React from 'react';

const AiInfoSection = () => {
    return (
        <section className="bg-primary-bg py-16 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-primary-text rounded-2xl p-8 md:p-12 lg:p-16 grid md:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="flex justify-center">
                        <img 
                            src="https://picsum.photos/seed/ai-tech/800/600" 
                            alt="Abstract AI technology" 
                            className="rounded-xl shadow-lg object-cover w-full h-full max-h-80"
                        />
                    </div>
                    {/* Content */}
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">AI-Powered Transcripts</h2>
                        <p className="text-lg text-gray-300 mb-8">
                            Never miss a word. Our advanced AI generates accurate, searchable transcripts for every video lesson, making it easier than ever to review and find key concepts.
                        </p>
                        <a href="#" className="inline-block px-8 py-3 text-lg font-semibold text-primary-text bg-highlight rounded-full hover:bg-yellow-400 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                            Explore AI Features
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AiInfoSection;