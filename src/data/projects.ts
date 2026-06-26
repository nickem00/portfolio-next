// Define the Project type
export type Project = {
    title: string;
    description: string;
    image: string;
    github: string | null;
    demo: string | null;
    externalUrl?: string | null;
    externalLabel?: string;
    downloadUrl?: string | null;
    downloadLabel?: string;
    authors: string[];
    skills: string[];
};

export const projectData: Project[] = [
    {
        title: "Combitech Collaboration",
        description: "Trygga Tillsammans is a Combitech collaboration project built as an Android app for the course Development of Mobile Applications (DA324C) at Kristianstad University, focused on Sweden's total defense duty. The app delivers quizzes, facts and mini-checklists in a modern Jetpack Compose UI, using MVVM with Firebase Authentication, Firestore and DataStore to support onboarding, progress tracking and user profiles.",
        image: "/images/icon_trygga_tillsammans_color.png",
        github: null,
        demo: null,
        externalUrl: "https://www.linkedin.com/posts/nicholas-malm_project-completed-in-collaboration-with-activity-7396602219049058304-rZNu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEitF6gBb1xElTuCjNVofdb46zWVBs3VjjI",
        externalLabel: "LinkedIn Post",
        authors: ["Nicholas Malm", "Hugo Nilsson", "Jacob Hellgren", "Pontus Havmyr", "Simon Persson", "Ian Onamu"],
        skills: ["Kotlin", "Jetpack Compose", "Material 3", "Firebase", "Firestore", "DataStore", "MVVM"]
    },
    {
        title: "Interactive House",
        description: "Interactive House is a university Software Engineering project focused on an IoT-style house system where web and mobile units communicate with a central server to observe and control simulated and physical devices. I worked as Project Manager for a large cross-functional student team while also contributing to the server group. My main contribution was setting up and maintaining the project workflow: GitHub Projects, issues, subgroup planning, branching rules, pull requests, reviews, artefact coordination, iteration planning and team communication. The project is useful to show both technical understanding and practical leadership in a larger software project.",
        image: "/images/interactive-house.jpg",
        github: null,
        demo: null,
        externalUrl: "https://www.linkedin.com/posts/nicholas-malm_student-developer-softwareengineering-activity-7465378453396217856-7AsJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEitF6gBb1xElTuCjNVofdb46zWVBs3VjjI",
        externalLabel: "LinkedIn Post",
        authors: ["Nicholas Malm (Project Manager)", "Software Engineering project team"],
        skills: ["Project Management", "GitHub Projects", "Pull Requests", "FastAPI", "IoT", "Team Coordination", "Software Engineering"]
    },
    {
        title: "Bachelor Thesis",
        description: "My bachelor thesis in Computer Science studied performance trade-offs between two API rate-limiting strategies: Queue-on-Limit and Drop-on-Limit. The work combines a systematic literature study, basic queueing theory, and controlled experiments in a Node.js-based API to compare P95 latency and successful request rates under steady and burst-load traffic. The result shows the practical trade-off between prioritizing low latency and maximizing successful requests under high load.",
        image: "/images/thesis-background.png",
        github: null,
        demo: null,
        downloadUrl: "/FinalThesis-Malm-Hellgren.pdf",
        downloadLabel: "Download Thesis",
        authors: ["Nicholas Malm", "Jacob Hellgren"],
        skills: ["Node.js", "API Rate Limiting", "Performance Testing", "Queueing Theory", "P95 Latency", "Experimental Evaluation"]
    },
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
    // {
    //     title: "Course work Frontend",
    //     description: "This is a front end assignment in the course Front End at Kristianstad University. We learned how to fetch data from an API. There were also a lot of focus on semantic design and responsiveness. Languages used were JavaScript, HTML and CSS.",
    //     image: "/images/chatter-logo.png",
    //     github: "https://github.com/nickem00/FrontEnd-Module2",
    //     demo: "https://front-end-module2.vercel.app/",
    //     authors: ["Nicholas Malm"],
    //     skills: ["JavaScript", "HTML", "CSS", "API", "Responsive Design"]
    // },
    // {
    //     title: "More coming...",
    //     description: "No more featured projects yet. Feel free to check out my GitHub in the meantime.",
    //     image: "/images/more-coming.png",
    //     github: "https://github.com/nickem00/",
    //     authors: [],
    //     demo: null,
    //     skills: []
    // }
];
