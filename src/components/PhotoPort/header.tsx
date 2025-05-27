"use client";

import { useState, useEffect } from "react"
import HamburgerMenu from "../UI/HamburgerMenu"
import PhotoSideMenu from "./SideMenu"
import Link from "next/link";

export default function PhotoPortHeader() {
    const [isOpen, setIsOpen] = useState(false);
    
    // Close menu when clicking outside or pressing escape
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };
        
        window.addEventListener('keydown', handleEsc);
        
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    }

    return (        
        <header className="
            absolute flex w-full inset-0 h-fit px-4 py-4
            justify-between box-border z-40 bg-zinc-700/80 dark:bg-zinc-700/0
            rounded-es-2xl rounded-ee-2xl shadow-lg dark:shadow-none
            "> 

            <Link href="/photo" className="
                font-lusitana text-2xl text-white hover:text-gray-300 transition-all">
                Nicholas Malm
            </Link>
            <div className={`z-[60] fixed right-4 top-4 transition-all duration-500 ${isOpen ? "right-[13rem] top-0" : ""}`}>
                <HamburgerMenu isOpen={isOpen} onClick={toggleMenu} />
            </div>

            <PhotoSideMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </header>
    )
}
