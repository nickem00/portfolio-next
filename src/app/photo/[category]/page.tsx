'use client';

import { useEffect, useState } from 'react';
import { photoImages, categories } from '../images';
import PhotoPortHeader from '@/components/PhotoPort/header';
import MasonryGrid from '@/components/PhotoPort/MasonryGrid';
import { notFound } from 'next/navigation';
import React from 'react';

interface PageParams {
  category: string;
}

export default function CategoryPage({ params }: { params: PageParams }) {  const [filteredImages, setFilteredImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const category = params.category.toLowerCase();
  
  // Redirect to 404 if category is invalid
  useEffect(() => {
    if (!categories.map(c => c.toLowerCase()).includes(category)) {
      notFound();
    }
  }, [category]);

  // Filter images based on category
  useEffect(() => {
    setLoading(true);
    
    let images: string[];
    
    if (category === 'all') {
      images = [...photoImages];
    } else {
      // Filter images that start with the category name (case-insensitive)
      images = photoImages.filter(img => 
        img.toLowerCase().startsWith(category.toLowerCase() + '/')
      );
    }
    
    setFilteredImages(images);
    setLoading(false);
  }, [category]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start 
      pr-4 pl-4 pb-20
      sm:pr-24 sm:pl-24">
      <PhotoPortHeader />
      
      <h1 className="text-3xl sm:text-4xl font-bold mt-24 mb-8 font-lusitana">
        {category.charAt(0).toUpperCase() + category.slice(1)} Photos
      </h1>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 dark:border-white"></div>
        </div>
      ) : (
        <MasonryGrid images={filteredImages} />
      )}
    </main>
  );
}
