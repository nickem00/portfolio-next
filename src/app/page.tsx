// This is the main page "/".
// Contains the Dev Portfolio
import Header from '@/components/DevPort/header'
import DevPortHero from '@/components/DevPort/heroSection';
import ProjectsSection from '@/components/DevPort/projectsSection';
import AboutSection from '@/components/DevPort/About';
import ContactSection from '@/components/DevPort/ContactSection';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between 
            pr-4 pl-4
            sm:pr-24 sm:pl-24">
            <Header></Header>
            <DevPortHero></DevPortHero>
            <ProjectsSection></ProjectsSection>
            <AboutSection></AboutSection>
            <ContactSection></ContactSection>
        </main>
    );
}