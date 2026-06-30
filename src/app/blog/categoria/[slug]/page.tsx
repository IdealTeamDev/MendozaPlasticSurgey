import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCategoryHero from '@/components/blog/BlogCategoryHero';
import BlogFeed from '@/components/blog/BlogFeed';
import BlogSubscription from '@/components/blog/BlogSubscription';
import BlogCategories from '@/components/blog/BlogCategories';
import { getCategoryBySlug, getPosts } from '@/lib/wordpress';

const CATEGORY_NAMES: Record<string, string> = {
  'cuerpo': 'CUERPOS',
  'tratamientos': 'TRATAMIENTOS',
  'inyectables': 'INYECTABLES',
  'senos': 'SENOS',
  'faciales': 'FACIALES',
};

export default async function BlogCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const categoryName = CATEGORY_NAMES[slug] || slug.toUpperCase();

  // Fetch category to get its ID, then fetch posts for that category
  const wpCategory = await getCategoryBySlug(slug);
  const posts = wpCategory ? await getPosts(wpCategory.id) : [];

  return (
    <main>
      <Navbar />
      <BlogCategoryHero categoryTitle={categoryName} />
      
      {posts && posts.length > 0 ? (
        <BlogFeed posts={posts} />
      ) : (
        <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <h2>No hay publicaciones en esta categoría.</h2>
        </div>
      )}
      
      <BlogSubscription />
      <BlogCategories />
      <Footer />
    </main>
  );
}
