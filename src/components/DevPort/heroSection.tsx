import Image from 'next/image';
import Link from 'next/link';

export default function DevPortHero() {
    return (
        <section className="w-full h-screen flex flex-col items-center justify-center
            sm:items-start">
              <Image 
                src={'/images/mountainSaltoCropped.jpg'}
                width={2000}
                height={2000}
                quality={80}
                alt="Background image of mountain"
                className="absolute inset-0 object-cover w-full h-full -z-30 object-top brightness-75"
            />            
            
            <div className='img-overlay absolute inset-0 -z-20 light-gradient dark:dark-gradient' />
            
            <div className="hero-div flex flex-col">

                <h2 className='
                    font-lusitana text-5xl text-white'>
                    Hi, I&apos;m Nicholas
                </h2>

                <span className='h-0.5 mt-4 mb-4 w-8/12 bg-white/60'></span>

                <p className='text-white'>I&apos;m a software developer with a B.Sc. in Computer Science / Software Development.</p>

                <div className='buttons-div mt-4 flex gap-3'>
                    <Link href={'#projects'} 
                    className='text-white border border-white rounded-lg 
                    px-4 py-2
                    hover:bg-white hover:text-black transition-all duration-300'
                    >
                        Projects
                    </Link>
                    <details className='relative group'>
                        <summary className='list-none cursor-pointer text-white border border-white rounded-lg 
                        px-4 py-2
                        hover:bg-white hover:text-black transition-all duration-300'>
                            Download CV
                        </summary>
                        <div className='absolute left-0 top-full mt-2 min-w-40 overflow-hidden rounded-lg border border-white/30 bg-black/80 backdrop-blur-sm shadow-lg'>
                            <Link
                                href={'/Nicholas_Malm_CV_English.pdf'}
                                download={true}
                                target='_blank'
                                className='block px-4 py-2 text-sm text-white hover:bg-white hover:text-black transition-all duration-300'
                            >
                                English CV
                            </Link>
                            <Link
                                href={'/Nicholas_Malm_CV_Svenska.pdf'}
                                download={true}
                                target='_blank'
                                className='block px-4 py-2 text-sm text-white hover:bg-white hover:text-black transition-all duration-300'
                            >
                                Svenskt CV
                            </Link>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    )
}
