import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogHero from '@/components/blog/BlogHero';
import BlogFeed from '@/components/blog/BlogFeed';
import BlogSubscription from '@/components/blog/BlogSubscription';
import BlogCategories from '@/components/blog/BlogCategories';

export default function BlogPage() {
  return (
    <main>
      <Navbar />
      <BlogHero />
      <BlogFeed />
      <BlogSubscription />
      <BlogCategories />
      <Footer />
    </main>
  );
}
