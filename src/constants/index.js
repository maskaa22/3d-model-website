import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    brushing,
    books,
    tree,
    portfolio,
    postgresql,
    supabase,
    docker,
    figma,
    swagger,
    postman
} from "../assets/icons";

export const skills = [
    { imageUrl: javascript, name: "JavaScript", type: "Frontend" },
    { imageUrl: typescript, name: "TypeScript", type: "Frontend" },
    { imageUrl: react, name: "React", type: "Frontend" },
    { imageUrl: nextjs, name: "Next.js", type: "Frontend" },
    { imageUrl: redux, name: "Redux Toolkit", type: "Frontend" },
    { imageUrl: html, name: "HTML5", type: "Frontend" },
    { imageUrl: css, name: "CSS3", type: "Frontend" },
    { imageUrl: nodejs, name: "Node.js", type: "Backend" },
    { imageUrl: express, name: "Express.js", type: "Backend" },
    { imageUrl: postgresql, name: "PostgreSQL", type: "Database" },
    { imageUrl: mongodb, name: "MongoDB", type: "Database" },
    { imageUrl: supabase, name: "Supabase", type: "Database" },
    { imageUrl: git, name: "Git", type: "Tools" },
    { imageUrl: github, name: "GitHub", type: "Tools" },
    { imageUrl: docker, name: "Docker", type: "Tools" },
    { imageUrl: swagger, name: "Swagger", type: "Tools" },
    { imageUrl: postman, name: "Postman", type: "Tools" },
    { imageUrl: figma, name: "Figma", type: "Tools" },
];

export const contactInfo = {
    email: "skydanmaria@gmail.com",
    location: "Ukraine",
};

export const experiences = [
    {
        title: "Frontend Developer",
        company_name: "Pythons Team",
        icon: react,
        iconBg: "#a2d2ff",
        date: "August 2025 - November 2026",
        points: [
            "Developed responsive landing pages based on Figma designs and existing layouts.",
            "Built and maintained web applications using React and Next.js.",
            "Integrated frontend applications with backend APIs and microservices.",
            "Implemented new features and improved existing functionality.",
            "Collaborated with developers using Git and code reviews.",
        ],
    },
    {
        title: "Frontend Developer (Part-time)",
        company_name: "VerbUp",
        icon: typescript,
        iconBg: "#b7e4c7",
        date: "May 2025 - Present",
        points: [
            "Contributed to an educational web application for learning English irregular verbs.",
            "Developed interactive learning features and responsive user interfaces.",
            "Implemented game mechanics, vocabulary selection, and progress tracking.",
            "Integrated frontend functionality with backend services.",
            "Worked with application state management using Redux Toolkit.",
        ],
    },
];

export const education = [
    {
        school: "IT School GoIT",
        degree: "Full-Stack Developer",
        period: "2024 - 2025",
    },
    {
        school: "Okten School",
        degree: "Frontend Developer",
        period: "2023",
    },
    {
        school: "Kremenchuk Mykhailo Ostrohradskyi National University",
        degree: "Master's Degree in Computer Science",
        period: "2013 - 2018",
    },
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/maskaa22',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/mariia-skydan/',
    },
];

export const projects = [
    {
        iconUrl: tree,
        theme: 'btn-back-green',
        name: 'PetMind - Pet Wellbeing Platform',
        stack: 'React · TypeScript · Supabase · PostgreSQL · Recharts',
        description: "A full-stack platform that helps pet owners understand and manage their pets' wellbeing: a personalized quiz, pet profiles and dashboards, mood journal, weight tracking, weekly insights, a freemium subscription flow and a rule-based pet care assistant.",
    },
    {
        iconUrl: brushing,
        theme: 'btn-back-pink',
        name: 'Miraé - Beauty Salon & E-commerce',
        stack: 'React · Node.js · Redux · MongoDB',
        link: 'https://o-react.vercel.app/',
        description: 'A full-stack platform that combines beauty salon services with online appointment booking and an integrated product store, including authentication and an admin panel for managing products and content.',
    },
    {
        iconUrl: books,
        theme: 'btn-back-blue',
        name: 'VerbUp - English Learning App',
        stack: 'React · TypeScript · Redux Toolkit · REST API',
        description: 'A mobile-first app for learning English irregular verbs through randomized quizzes, difficulty levels, a personal dictionary, vocabulary decks, progress tracking, achievements and gamification.',
    },
    {
        iconUrl: portfolio,
        theme: 'btn-back-orange',
        name: 'Watchcharm - Responsive Website',
        stack: 'HTML · CSS',
        description: 'A responsive website built by a team. I worked as Team Lead and Developer: coordinated tasks, monitored build quality and page performance, and implemented the website header.',
    },
    {
        iconUrl: portfolio,
        theme: 'btn-back-red',
        name: 'WebGuru - Portfolio Website',
        stack: 'JavaScript · HTML · CSS',
        description: 'A team portfolio website where I contributed to the About Us section and the frontend implementation.',
    },
    {
        iconUrl: books,
        theme: 'btn-back-green',
        name: 'Full Stack Poem Website',
        description: 'Wrote a full-fledged website for the poet, featuring her books and the ability to add poems online.',
        link: 'https://ulia-ushenko.vercel.app/',
    },
    {
        iconUrl: tree,
        theme: 'btn-back-blue',
        name: 'Natural Forest 3D - screen',
        stack: 'React',
        description: 'This site is written in React. The interesting thing about this project is the 3D main screen. Just move the mouse around the screen.',
        link: 'https://forest-site.vercel.app/',
    },
    {
        iconUrl: portfolio,
        theme: 'btn-back-pink',
        name: 'Online Resume',
        stack: 'React',
        description: 'My online resume and portfolio: experience, projects and skills in one place.',
        link: 'https://resume-react-beige.vercel.app/',
    },
];
