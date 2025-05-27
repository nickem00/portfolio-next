import Link from "next/link";

interface PhotoSideMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function PhotoSideMenu({ isOpen, onClose }: PhotoSideMenuProps) {
    return (
        <>
            {/* Overlay to capture clicks outside menu */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={onClose}
                />
            )}            <aside className={`
                fixed top-0 right-0 h-full w-64 bg-gray-600/20 text-white dark:bg-gray-600/20 backdrop-blur-md z-50 
                transition-all duration-500 overflow-hidden
                ${isOpen ? "translate-x-0 opacity-100 visible" : "translate-x-full opacity-0 invisible"}
                shadow-2xl
            `}><div className="flex flex-col mt-6 p-8 gap-6">
                    {/* Menu links */}
                    <Link href="/photo/all" className="text-white font-lusitana py-2 text-xl hover:text-gray-400 transition-all" onClick={onClose}>All Photos</Link>
                    <Link href="/photo/people" className="text-white font-lusitana py-2 text-xl hover:text-gray-400 transition-all" onClick={onClose}>People</Link>
                    <Link href="/photo/landscape" className="text-white font-lusitana py-2 text-xl hover:text-gray-400 transition-all" onClick={onClose}>Landscape</Link>
                    <Link href="/photo/animals" className="text-white font-lusitana py-2 text-xl hover:text-gray-400 transition-all" onClick={onClose}>Animals</Link>
                    <Link href="/photo/other" className="text-white font-lusitana py-2 text-xl hover:text-gray-400 transition-all" onClick={onClose}>Other</Link>
                    
                    <span className="h-0.5 w-2/3 bg-white/40"/>

                    <Link href="/" className="text-white font-lusitana py-2 text-xl hover:text-gray-400 transition-all" onClick={onClose}>Developer Portfolio</Link>
                    <Link href="/tree" className="text-white font-lusitana py-2 text-xl hover:text-gray-400 transition-all" onClick={onClose}>Link Tree</Link>
                    <Link href={'https://instagram.com/nicholas_malm'} className="text-white font-lusitana py-2 text-xl hover:text-gray-400 transition-all">Instagram</Link>
                </div>
            </aside>
        </>
    );
}
