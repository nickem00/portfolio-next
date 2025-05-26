import Link from "next/link";

interface SideMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SideMenu({ isOpen, onClose }: SideMenuProps) {
    return (
        <>
            {/* Overlay to capture clicks outside menu */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={onClose}
                />
            )}
            <aside className={`
                fixed top-0 right-0 h-full w-64 bg-gray-600/20 text-white dark:bg-gray-600/20 backdrop-blur-md z-50 transition-transform duration-500 
                ${isOpen ? "translate-x-0" : "translate-x-full"}
                shadow-2xl
            `}>                <div className="flex flex-col mt-6 p-8 gap-6">
                    {/* Menu links */}
                    <Link href="#projects" className="text-white font-lusitana py-2 text-xl  hover:text-gray-400 transition-all" onClick={onClose}>Projects</Link>
                    <Link href="#about" className="text-white font-lusitana py-2 text-xl  hover:text-gray-400 transition-all" onClick={onClose}>About</Link>
                    <Link href="#contact" className="text-white font-lusitana py-2 text-xl hover:text-gray-400 transition-all" onClick={onClose}>Contact</Link>
                    
                    <span className="h-0.5 w-2/3 bg-white/40"/>

                    <Link href={'/tree'} className="text-white font-lusitana py-2 text-xl  hover:text-gray-400 transition-all">Link Tree</Link>
                    <Link href={'https://github.com/nickem00'} className="text-white font-lusitana py-2 text-xl  hover:text-gray-400 transition-all">GitHub</Link>

                    
                    {/* Add More links here */}
                </div>
            </aside>
        </>
    );
}