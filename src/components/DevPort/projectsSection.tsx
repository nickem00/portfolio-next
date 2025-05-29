'use client';

import { useState } from 'react';
import Image from 'next/image';
import ProjectModal from '@/components/DevPort/ProjectModal';
import { projectData, Project } from '@/data/projects';


// Project data
// const projectData: Project[] = [
//     {
//         title: "House 18",
//         description: "House 18 is a fullstack web application built as part of a university project during the " +
//         "course Full Stack Development - DA219B at Kristianstad University. The app simulates a modern clothing " +
//         "store with user authentication, a responsive shopping experience and admin product management. Feel free to read more at " +
//         "the README on GitHub.",
//         image: "/images/House18Screenshot.png",
//         github: "https://github.com/nickem00/house-18",
//         demo: "https://house-18.vercel.app/",
//         authors: [
//             "Nicholas Malm (Me)",
//             "Hugo Nilsson",
//             "Jacob Hellgren",
//             "Pontus Havmyr"
//         ],
//         skills: ["React", "Vite", "Node.js", "Express", "MongoDB", "CSS"]
//     },
//     {
//         title: "Solace",
//         description: "Solace is a desktop application we developed during the Agile Development Methods course. " + 
//         "Its purpose is to help users manage stress and anxiety by logging their mood and stress levels," +
//         " which are visualized in a dashboard. The app is built with Python and Tkinter. It was a group project" +
//         " following agile workflows from concept to final product.",
//         image: "/images/solace-logo.png",
//         github: "https://github.com/HugNil/Solace",
//         demo: null,
//         authors: [
//             "Nicholas Malm",
//             "Jacob Hellgren",
//             "Hugo Nilsson",
//             "Pontus Havmyr"
//         ],
//         skills: ["Python", "Tkinter", "MYSQL", "Agile"]
//     },
//     {
//         title: "Course work Frontend",
//         description: 
//             "This is a front end assignment in the course Front End at Kristianstad University. " +
//             "We learned how to fetch data from an API. There were also a lot of focus on semantic design and responsiveness. " +
//             "Languages used were JavaScript, HTML and CSS.",
//         image: "/images/chatter-logo.png",
//         github: "https://github.com/nickem00/FrontEnd-Module2",
//         demo: "https://front-end-module2.vercel.app/",
//         authors: ["Nicholas Malm"],
//         skills: ["JavaScript", "HTML", "CSS", "API", "Responsive Design"]
//     },
//     {
//         title: "More coming...",
//         description: "No more featured projects yet. Feel free to check out my GitHub in the meantime.",
//         image: "/images/more-coming.png",
//         github: "https://github.com/nickem00/",
//         authors: [],
//         demo: null,
//         skills: []
//     }
// ];


export default function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="projects" className="w-full min-h-screen flex flex-col items-center justify-center py-16">
            <div className="max-w-7xl w-11/12 mx-auto">
                <div className='flex justify-center sm:justify-start'>
                    <h2 className="text-4xl font-lusitana  tracking-wide mb-12 relative inline-block">
                        My Projects
                        <span className="absolute -bottom-2 left-1/2 sm:left-8 transform -translate-x-1/2 w-16 h-0.5 bg-black/60 dark:bg-white/60"></span>
                    </h2>
                </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                        {projectData.map((project, index) => (
                            <div 
                                key={index} 
                                className="relative rounded-lg overflow-hidden shadow-lg aspect-[3/2] transition-transform duration-300 hover:transform hover:scale-105 cursor-pointer group"
                                onClick={() => setSelectedProject(project)}
                            >
                                {/* Image with blur effect on hover */}
                                <Image 
                                    src={project.image} 
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-all duration-300 group-hover:blur-[2px] group-hover:brightness-50"
                                />
                                <div className='backdrop-blur-[1px] group-hover:opacity-0 w-full h-full inset-0 '></div>
                                {/* Text overlay */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white z-10">
                                    <h3 className="text-3xl md:text-4xl text-center font-bold mb-2 text-shadow-md opacity-100">
                                        {project.title}
                                    </h3>
                                    
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                        text-center">
                                        <div className="flex flex-wrap justify-center gap-2 mt-2">
                                            {project.skills.slice(0, 3).map((skill, idx) => (
                                                <span key={idx} className="text-xs bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                                                    {skill}
                                                </span>
                                            ))}
                                            {project.skills.length > 3 && (
                                                <span className="text-xs bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                                                    +{project.skills.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
            </div>
            
            {selectedProject && (
                <ProjectModal 
                    project={selectedProject} 
                    onClose={() => setSelectedProject(null)} 
                />
            )}
        </section>
    );
}