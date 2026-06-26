import Image from "next/image";

// This file contains the About section of the Dev Portfolio.
export default function AboutSection() {
    return (
        <section id="about" className="about-section w-full h-screen flex flex-col items-center justify-center py-16">
            <h2 className="font-lusitana text-4xl">About Me</h2>
            <span className="w-10 h-0.5 bg-black dark:bg-white mt-3 mb-3" />
            <p className=" max-w-3xl text-center">
                I&apos;m a software developer with a background in computer science and software development from Kristianstad University.
                I enjoy building practical applications, learning new technologies, and working across web, mobile, backend, and security-focused projects.
            </p>
            <Image 
                src={"/images/prof-pic-2.jpg"}
                alt="Profile Picture"
                width={400}
                height={400}
                quality={50}
                className="mt-8 rounded-[40px] shadow-lg transition-transform duration-300 hover:scale-105"
            />
        </section>
    );
}
