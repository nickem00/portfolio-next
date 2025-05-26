'use client';

import { useEffect } from 'react';
import Image from 'next/image';

// Define the Project type
type Project = {
    title: string;
    description: string;
    image: string;
    github: string;
    demo: string | null;
    authors: string[];
    skills: string[];
};

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    // Handle body scroll when modal is open
    useEffect(() => {
        // Save current body overflow style
        const originalStyle = window.getComputedStyle(document.body).overflow;
        // Disable scrolling on body
        document.body.style.overflow = 'hidden';
        
        // Cleanup function
        return () => {
            document.body.style.overflow = originalStyle;
        };
    }, []);

    return (
        // Modal overlay
        <div 
            className="fixed inset-0 bg-black/75 backdrop-blur-sm flex justify-center items-center z-50 animate-fadeIn"
            onClick={onClose}
        >
            {/* Modal content */}            
            <div 
                className="bg-gradient-to-br from-zinc-200 to-zinc-400 dark:from-zinc-700 dark:to-zinc-900 p-8 max-w-2xl w-11/12 rounded-xl relative text-center shadow-2xl max-h-[85vh] overflow-y-auto animate-slideUp scrollbar-hide"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button 
                    className="absolute top-4 right-4 w-8 h-8 z-20 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
                    onClick={onClose}
                >
                    ×
                </button>
                
                {/* Project image */}
                <div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden">
                    <Image 
                        src={project.image} 
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-[1.02]"
                    />
                </div>
                  {/* Project details */}
                <h2 className="text-2xl font-bold text-zinc-800 dark:text-white mb-4">{project.title}</h2>
                <p className="text-zinc-700 dark:text-gray-200 mb-6">{project.description}</p>
                
                {project.authors && project.authors.length > 0 && (
                    <p className="text-zinc-600 dark:text-gray-300 mb-4">
                        <strong>Authors:</strong> {project.authors.join(", ")}
                    </p>
                )}
                  {/* Skills section */}
                {project.skills && project.skills.length > 0 && (
                    <div className="mb-6">
                        <strong className="text-zinc-800 dark:text-gray-200">Skills:</strong>
                        <div className="flex flex-wrap gap-2 justify-center mt-2">
                            {project.skills.map((skill, index) => (
                                <span 
                                    key={index} 
                                    className="bg-zinc-800 px-3 py-1 rounded-full text-sm text-gray-200 hover:bg-zinc-700 transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
                
                {/* Action buttons */}
                <div className="flex gap-4 justify-center mt-6">
                    <a 
                        href={project.github} 
                        className="bg-zinc-800 w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-zinc-700 transition-colors"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                    
                    {project.demo && (
                        <a 
                            href={project.demo} 
                            className="bg-zinc-800 px-4 py-2 rounded-md text-white hover:bg-zinc-700 transition-colors"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            View Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
