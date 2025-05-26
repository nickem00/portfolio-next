import Image from 'next/image';

export default function DevPortHero() {
    return (
        <section className="w-full h-screen flex flex-col items-center justify-center">
              <Image 
                src={'/images/mountainSaltoCropped.jpg'}
                width={2000}
                height={2000}
                quality={80}
                alt="Background image of mountain"
                className="absolute inset-0 object-cover w-full h-full -z-30 object-top brightness-75"
            />            
            
            <div className='img-overlay absolute inset-0 -z-20 bg-gradient-to-t from-black via-black/50 to-transparent' />
            
            <div className="hero-div flex flex-col">

                <h2 className='
                    font-lusitana text-5xl text-white'>
                    Hi, I&apos;m Nicholas
                </h2>

                <span className='h-0.5 mt-4 mb-4 w-8/12 bg-white/60'></span>

                <p className='text-white'>I&apos;m a swedish software developer student.</p>
            </div>
        </section>
    )
}