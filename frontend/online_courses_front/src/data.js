export const TRENDING_COURSES = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'The Complete Web Developer Course 3.0',
    instructor: 'Dr. Angela Yu',
    rating: '4.7',
    reviews: '278,211',
    price: '$84.99'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff980e625934?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
    instructor: 'Maximilian Schwarzmüller',
    rating: '4.6',
    reviews: '178,422',
    price: '$89.99'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1522252234503-e35653245856?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'The Complete JavaScript Course 2024: From Zero to Expert!',
    instructor: 'Jonas Schmedtmann',
    rating: '4.7',
    reviews: '159,348',
    price: '$79.99'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    title: 'Python for Data Science and Machine Learning Bootcamp',
    instructor: 'Jose Portilla',
    rating: '4.6',
    reviews: '124,876',
    price: '$94.99'
  },
];

export const BEGINNER_COURSES = {
  Programming: [TRENDING_COURSES[0], TRENDING_COURSES[2]],
  Content: [TRENDING_COURSES[1]],
  Marketing: [TRENDING_COURSES[3]],
};

export const FEATURES = [
    {
        iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
        title: "Interactive Learning",
        description: "Engage with quizzes, coding exercises, and projects that provide real-time feedback."
    },
    {
        iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
        title: "Flexible Scheduling",
        description: "Learn at your own pace with lifetime access to courses on any device."
    },
    {
        iconPath: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z",
        title: "Expert Instructors",
        description: "Courses are taught by industry experts who are passionate about sharing their knowledge."
    }
];

export const TESTIMONIALS = [
    {
        quote: "This platform has completely transformed my career. The hands-on projects were invaluable.",
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
        name: 'Sarah Johnson',
        course: 'The Complete Web Developer Course 3.0'
    },
    {
        quote: "I was a complete beginner, but the instructor's clear explanations made learning to code a breeze. Highly recommended!",
        avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
        name: 'Michael Chen',
        course: 'React - The Complete Guide'
    },
    {
        quote: "The quality of the course content is outstanding. I've been able to apply my new skills directly to my job.",
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        name: 'Jessica Rodriguez',
        course: 'Python for Data Science'
    }
];
