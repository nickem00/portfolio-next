import PhotoPortHeader from '@/components/PhotoPort/header';
import PhotoPortHero from '@/components/PhotoPort/heroSection';

export default function PhotoPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between 
      pr-4 pl-4
      sm:pr-24 sm:pl-24">
      <PhotoPortHeader />
      <PhotoPortHero />
      
      {/* Photo grid will be added here later */}
    </main>
  );
}