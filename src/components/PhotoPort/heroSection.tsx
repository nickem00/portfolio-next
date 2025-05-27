import Image from 'next/image';
import Link from 'next/link';
import { categories } from '@/app/photo/images';

export default function PhotoPortHero() {
    return (
        <section className="w-full h-screen flex flex-col items-center justify-center
            sm:items-start">
            <Image 
                src={'/images/photography/Landscape/DSC09426.webp'}
                width={2000}
                height={2000}
                quality={80}
                alt="Background image showcase"
                className="absolute inset-0 object-cover w-full h-full -z-30 object-center brightness-75"
            />            
            
            <div className='img-overlay absolute inset-0 -z-20 bg-gradient-to-t from-black via-black/50 to-transparent' />
            
            <div className="hero-div flex flex-col">
                <h2 className='
                    font-lusitana text-5xl text-white'>
                    Nicholas Malm
                </h2>
                
                <h3 className='
                    font-lusitana text-3xl text-white mt-2'>
                    Photography
                </h3>

                <span className='h-0.5 mt-4 mb-4 w-8/12 bg-white/60'></span>                <p className='text-white'>Capturing moments through my lens.</p>

                <div className='categories-div mt-8 flex gap-3 flex-wrap'>
                    {categories.map((category, index) => (
                        <Link 
                            key={index} 
                            href={`/photo/${category.toLowerCase()}`} 
                            className='text-white border border-white rounded-lg 
                            px-4 py-2
                            hover:bg-white hover:text-black transition-all duration-300'
                        >
                            {category}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
