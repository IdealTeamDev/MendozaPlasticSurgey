"use client";

import React, { use } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogPostHero from '@/components/blog/BlogPostHero';
import BlogPostContent from '@/components/blog/BlogPostContent';
import BlogRelated from '@/components/blog/BlogRelated';

// Import BlogFeed CSS to inherit post card and popular widget styles
import '@/components/blog/BlogFeed.css';

// Mock data fetching based on slug
const getPostData = (slug: string) => {
  // In a real app, you would fetch data from CMS based on the slug.
  return {
    title: '¿QUÉ PASA CON TU CUERPO DESPUÉS DE UNA ABDOMINOPLASTIA?',
    category: 'CUERPOS',
    date: 'Abril 10, 2024',
    readTime: '5',
    author: 'Dr. Edgar Mendoza'
  };
};

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const postData = getPostData(resolvedParams.slug);

  return (
    <main>
      <Navbar />
      <BlogPostHero 
        title={postData.title}
        category={postData.category}
        date={postData.date}
        readTime={postData.readTime}
        author={postData.author}
      />
      <BlogPostContent />
      <BlogRelated />
      <Footer />
    </main>
  );
}
