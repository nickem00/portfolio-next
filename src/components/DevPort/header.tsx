"use client";

import { useState, useEffect } from "react"
import HamburgerMenu from "../UI/HamburgerMenu"
import SideMenu from "../UI/SideMenu"

export default function DevPortHeader() {
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
            justify-between box-border z-50
            "> 

            <h1 className="
                font-lusitana text-2xl text-white">
                Nicholas Malm
            </h1>

            <div className={`z-[60] fixed right-4 top-4 transition-all duration-500 ${isOpen ? "right-[13rem] top-0" : ""}`}>
                <HamburgerMenu isOpen={isOpen} onClick={toggleMenu} />
            </div>

            <SideMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </header>
    )
}