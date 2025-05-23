"use client";

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
            className="absolute top-4 right-4 z-50 bg-background text-foreground border border-foreground/20 px-4 py-2 rounded shadow hover:bg-foreground hover:text-background transition-colors"
            aria-label="Toggle theme"
            >
            {theme === "dark" ? "Dark Mode" : "Light Mode"}
        </button>
    )
}