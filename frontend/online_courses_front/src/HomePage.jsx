import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CoursesCarousel from './components/CoursesCarousel';
import AiInfoSection from './components/AiInfoSection';
import FreeCoursesSection from './components/FreeCoursesSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import './HomePage.css';

const trendingCourses = [
    { id: 1, title: 'The Complete 2024 Web Development Bootcamp', instructor: 'Dr. Angela Yu', rating: 4.8, price: 19.99, image: 'https://picsum.photos/seed/course1/600/400' },
    { id: 2, title: 'Advanced CSS and Sass: Flexbox, Grid, Animations', instructor: 'Jonas Schmedtmann', rating: 4.7, price: 19.99, image: 'https://picsum.photos/seed/course2/600/400' },
    { id: 3, title: 'React - The Complete Guide (incl Hooks, React Router)', instructor: 'Maximilian Schwarzmüller', rating: 4.9, price: 24.99, image: 'https://picsum.photos/seed/course3/600/400' },
    { id: 4, title: 'The Ultimate Drawing Course - Beginner to Advanced', instructor: 'Jaysen Arts', rating: 4.6, price: 14.99, image: 'https://picsum.photos/seed/course4/600/400' },
    { id: 5, title: 'Digital Marketing Masterclass - 23 Courses in 1', instructor: 'Phil Ebiner', rating: 4.5, price: 29.99, image: 'https://picsum.photos/seed/course5/600/400' },
];

const recommendedCourses = [
    { id: 6, title: 'Python for Data Science and Machine Learning Bootcamp', instructor: 'Jose Portilla', rating: 4.7, price: 22.99, image: 'https://picsum.photos/seed/course6/600/400' },
    { id: 7, title: 'Graphic Design Masterclass - Learn GREAT Design', instructor: 'Lindsay Marsh', rating: 4.8, price: 18.99, image: 'https://picsum.photos/seed/course7/600/400' },
    { id: 8, title: 'The Business Intelligence Analyst Course 2024', instructor: '365 Careers', rating: 4.6, price: 34.99, image: 'https://picsum.photos/seed/course8/600/400' },
    { id: 9, title: 'Unreal Engine 5 C++ Developer: Learn C++ & Make Games', instructor: 'GameDev.tv Team', rating: 4.9, price: 25.99, image: 'https://picsum.photos/seed/course9/600/400' },
];

const HomePage = () => {
    return (
        <div className="text-primary-text">
            <Header />
            <main>
                <HeroSection />
                <CoursesCarousel title="Trending Courses" subtitle="Discover the most popular courses on Lumify" courses={trendingCourses} />
                <AiInfoSection />
                <FreeCoursesSection />
                <FeaturesSection />
                <CoursesCarousel title="Recommended For You" subtitle="Courses picked just for your interests" courses={recommendedCourses} />
                <TestimonialsSection />
                <CtaSection />
            </main>
            <Footer />
        </div>
    );
};

export defa