"use client";

import { LuSun as SunIcon } from "react-icons/lu";
import { IoMdMoon as MoonIcon } from "react-icons/io";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState<"light" | "dark">("light");    
    
    useEffect(() => {
        if (typeof window === "undefined") return;

        const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        if (storedTheme) {
            setTheme(storedTheme);
            document.documentElement.classList.toggle("dark", storedTheme === "dark");
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(prefersDark ? "dark" : "light");
            document.documentElement.classList.toggle("dark", prefersDark);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    }

    return (
        <button
            onClick={toggleTheme}
            className="
            fixed flex flex-col bottom-4 right-4 z-50 w-[38px] 
             bg-[#3c474880] text-foreground 
            border border-gray-600 px-4 py-2 rounded-full shadow 
            hover:bg-gray-700 transition-colors justify-center items-center"
            aria-label="Toggle theme"
            >
            {theme === "dark" ? <MoonIcon className="text-xl text-white" /> : <SunIcon className=" text-xl text-white dark:text-black"/>}
        </button>
    )
}