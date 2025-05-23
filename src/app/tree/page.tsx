import Image from "next/image";
import Link from "next/link";

export default function TreePage() {
    return (
        <main className="relative min-h-screen flex flex-col items-center p-24 overflow-hidden">
            {/* Background Image - lowest z-index */}
            <div className="absolute inset-0 z-[-2]">
                <Image 
                    src={"/images/ocean.jpg"} 
                    alt="Background"
                    fill
                    quality={100}
                    priority
                    className="object-cover"
                />
            </div>
            
            {/* Glassmorphism overlay - just above background */}
            <div className="absolute inset-0 z-[-1] bg-white/5 backdrop-blur-xl"></div>
            
            {/* Main content - all items will be above the overlay by default */}
            <div className="relative w-[150px] h-[150px]">
                <div className="rounded-full overflow-hidden w-full h-full">
                    <Image 
                        src={"/images/prof-pic-1.png"}
                        alt="Profile Picture"
                        width={500}
                        height={500}
                        quality={100}
                        className="object-cover w-full h-full object-left-top"
                    />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-orange-500 pointer-events-none"></div>
            </div>
            
            <h1 className="text-2xl font-bold mt-4">
                Nicholas Malm
            </h1>            <Link
                href={"/"}
                className="mt-10 p-10 bg-black/70 rounded-lg hover:bg-black/90 hover:scale-110 transition-all w-[280px] text-center"
            >
                Developer Portfolio
            </Link>

            <Link
                href={"/photo"}
                className="mt-10 p-10 bg-black/70 rounded-lg hover:bg-black/90 hover:scale-110 transition-all w-[280px] text-center"
            >
                Photography Portfolio
            </Link>
        </main>
    );
}