// Define the Project type
export type Project = {
    title: string;
    description: string;
    image: string;
    github: string;
    demo: string | null;
    authors: string[];
    skills: string[];
};

export const projectData: Project[] = [
    {
        title: "Portfolio",
        description: "A personal portfolio built with Next.js 15 (App Router) and TypeScript, showcasing my development projects as well as a separate photography gallery. Everything is designed and developed by me, with focus on modern web development, responsive design and great user experience. The site is hosted on Vercel and uses Tailwind CSS, React Icons and has a complete project structure with component library, categorization, and image gallery management. This project was built both to create a portfolio to showcase my work and to learn Next.js and Tailwind CSS.",
        image: "/images/PortfolioThumbnail.webp",
        github: "https://github.com/nickem00/portfolio-next",
        demo: "https://nicholasmalm.com",
        authors: ["Nicholas Malm (Me)"],
        skills: ["Next.js", "React", "Tailwind CSS", "Vercel", "TypeScript"]
    },
    {
        title: "House 18",
        description: "House 18 is a fullstack web application built as part of a university project during the course Full Stack Development - DA219B at Kristianstad University. The app simulates a modern clothing store with user authentication, a responsive shopping experience and admin product management. Feel free to read more at the README on GitHub.",
        image: "/images/House18Screenshot.png",
        github: "https://github.com/nickem00/house-18",
        demo: "https://house-18.vercel.app/",
        authors: [
            "Nicholas Malm (Me)",
            "Hugo Nilsson",
            "Jacob Hellgren",
            "Pontus Havmyr"
        ],
        skills: ["React", "Vite", "Node.js", "Express", "MongoDB", "CSS"]
    },
    {
        title: "Solace",
        description: "Solace is a desktop application we developed during the Agile Development Methods course. Its purpose is to help users manage stress and anxiety by logging their mood and stress levels, which are visualized in a dashboard. The app is built with Python and Tkinter. It was a group project following agile workflows from concept to final product.",
        image: "/images/solace-logo.png",
        github: "https://github.com/HugNil/Solace",
        demo: null,
        authors: [
            "Nicholas Malm",
            "Jacob Hellgren",
            "Hugo Nilsson",
            "Pontus Havmyr"
        ],
        skills: ["Python", "Tkinter", "MYSQL", "Agile"]
    },
    {
        title: "Course work Frontend",
        description: "This is a front end assignment in the course Front End at Kristianstad University. We learned how to fetch data from an API. There were also a lot of focus on semantic design and responsiveness. Languages used were JavaScript, HTML and CSS.",
        image: "/images/chatter-logo.png",
        github: "https://github.com/nickem00/FrontEnd-Module2",
        demo: "https://front-end-module2.vercel.app/",
        authors: ["Nicholas Malm"],
        skills: ["JavaScript", "HTML", "CSS", "API", "Responsive Design"]
    },
    {
        title: "More coming...",
        description: "No more featured projects yet. Feel free to check out my GitHub in the meantime.",
        image: "/images/more-coming.png",
        github: "https://github.com/nickem00/",
        authors: [],
        demo: null,
        skills: []
    }
];