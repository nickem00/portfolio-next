// This is the Contact Section of the Dev Portfolio.

export default function ContactSection() {
    return (
         <section className="flex flex-col items-center justify-center
            h-screen w-full">
            
            <h2 className="text-5xl font-lusitana">
                Contact
            </h2>

            <span className="
                w-16 h-0.5 mt-3 mb-6 bg-white"/>

            <p className="text-lg text-center max-w-2xl mb-8">
                Would you like to get in touch with me? Feel free to send an email!
            </p>

            <a
                href="mailto:nickemalm00@gmail.com"
                className="relative inline-block px-6 py-3 font-semibold text-black rounded-lg overflow-hidden border border-white group transition-colors duration-300"
                >
                <span
                    className="absolute inset-0 w-0 bg-white transition-all duration-300 group-hover:w-full"
                    aria-hidden="true"
                ></span>
                <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">
                    Send Email
                </span>
            </a>


         </section>
    )
}