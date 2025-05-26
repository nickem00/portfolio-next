import Image from "next/image";
import Link from "next/link";

export default function TreePage() {
    return (
        <main className="relative min-h-screen flex flex-col items-center p-24 overflow-hidden justify-center">            
            
            <Image
                src={'/images/ocean.jpg'}
                width={2000} 
                height={2000}
                quality={80}
                alt="Background image of ocean"
                className="absolute inset-0 object-cover w-full h-full -z-30"
                />

            <div className="absolute inset-0 w-full h-full -z-20 backdrop-brightness-75" />
            
            <div className="main-div
                flex flex-col items-center justify-center
                backdrop-blur-sm bg-sky-800/0
                p-8 rounded-xl
                sm:flex-row sm:justify-between sm:gap-40 sm:h-96">                <div className="info flex flex-col items-center">
                    <h1 className="
                        font-lusitana text-5xl text-nowrap text-white">
                        Nicholas Malm
                    </h1>
                    <p className="
                        font-lusitana text-white">
                        Developer Student • Photographer
                    </p>
                </div>
                
                <span className="block sm:hidden h-0.5 mt-16 mb-16 w-8/12 bg-white/50"></span>

                <div className="links mt-6 flex flex-col gap-3">
                    <Link href="/" className="relative cursor-pointer py-4 px-8 text-center inline-flex  justify-center text-base uppercase text-white rounded-lg transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden">
                        <span className="relative z-20">Developer Portfolio</span>
                        
                        <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                        
                        <span className="w-1/2 transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
                        <span className="w-1/2 transition-all duration-300 block border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
                        <span className="w-1/2 transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
                        <span className="w-1/2 transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
                    </Link>

                    <Link href="/photo" className="relative cursor-pointer py-4 px-8 text-center inline-flex justify-center text-base uppercase text-white rounded-lg transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden">
                        <span className="relative z-20">Photography Portfolio</span>
                        
                        <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                        
                        <span className="w-1/2 transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
                        <span className="w-1/2 transition-all duration-300 block border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
                        <span className="w-1/2 transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
                        <span className="w-1/2 transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
                    </Link>

                </div>
                
            </div>
            
        </main>
    );
}