import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogHero from '@/components/blog/BlogHero';
import BlogFeed from '@/components/blog/BlogFeed';
import BlogSubscription from '@/components/blog/BlogSubscription';
import BlogCategories from '@/components/blog/BlogCategories';
import { getPosts } from '@/lib/wordpress';

export default async function BlogPage() {
  const posts = await getPosts(); // You can pass categoryId if needed

  return (
    <main>
      <Navbar />
      <BlogHero />
      {posts && posts.length > 0 ? (
        <BlogFeed posts={posts} />
      ) : (
        <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <h2>No hay publicaciones disponibles en este momento.</h2>
        </div>
      )}
      <BlogSubscription />
      <BlogCategories />
      <Footer />
    </main>
  );
}
