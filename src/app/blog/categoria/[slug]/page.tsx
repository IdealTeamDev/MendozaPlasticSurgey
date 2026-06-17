"use client";

import React, { use } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCategoryHero from '@/components/blog/BlogCategoryHero';
import BlogFeed from '@/components/blog/BlogFeed';
import BlogSubscription from '@/components/blog/BlogSubscription';
import BlogCategories from '@/components/blog/BlogCategories';

const CATEGORY_NAMES: Record<string, string> = {
  'cuerpo': 'CUERPOS',
  'tratamientos': 'TRATAMIENTOS',
  'inyectables': 'INYECTABLES',
  'senos': 'SENOS',
  'faciales': 'FACIALES',
};

export default function BlogCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const categoryName = CATEGORY_NAMES[slug] || slug.toUpperCase();

  return (
    <main>
      <Navbar />
      <BlogCategoryHero categoryTitle={categoryName} />
      <BlogFeed />
      <BlogSubscription />
      <BlogCategories />
      <Footer />
    </main>
  );
}
