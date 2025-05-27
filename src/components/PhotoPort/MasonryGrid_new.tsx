'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface MasonryGridProps {
  images: string[];
  initialLoadCount?: number;
  batchSize?: number;
}

export default function MasonryGrid({ 
  images, 
  initialLoadCount = 12, 
  batchSize = 12 
}: MasonryGridProps) {
  const [visibleCount, setVisibleCount] = useState(initialLoadCount);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Update loaded images whenever visibleCount changes
  useEffect(() => {
    const newImages = images.slice(0, visibleCount);
    setLoadedImages(newImages);
  }, [visibleCount, images]);
  
  const handleLoadMore = () => {
    setIsLoading(true);
    
    // Small delay to ensure smooth loading animation
    setTimeout(() => {
      setVisibleCount(prev => Math.min(prev + batchSize, images.length));
      setIsLoading(false);
    }, 300);
  };
  
  const hasMoreImages = visibleCount < images.length;

  return (
    <div className="w-full">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 w-full">
        {loadedImages.map((imagePath, index) => (
          <div 
            key={imagePath} 
            className={`mb-4 break-inside-avoid ${
              index >= visibleCount - batchSize && !isLoading 
                ? 'animate-fadeIn' 
                : ''
            }`}
            style={{
              animationDelay: `${(index % batchSize) * 50}ms`
            }}
          >
            <Image
              src={`/images/photography/${imagePath}`}
              alt={`Photo ${index + 1}`}
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
      
      {hasMoreImages && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            disabled={isLoading}
            className={`px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium 
              ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Loading...' : 'View More'}
          </button>
        </div>
      )}
    </div>
  );
}
