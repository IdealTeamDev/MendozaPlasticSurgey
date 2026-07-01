import React from 'react';
import BlogHero from '@/components/blog/BlogHero';
import BlogFeed from '@/components/blog/BlogFeed';
import BlogSubscription from '@/components/blog/BlogSubscription';
import BlogCategories from '@/components/blog/BlogCategories';
import { getPaginatedPosts, getPageBySlug, getMedia } from '@/lib/wordpress';

export default async function BlogPage({ searchParams }: { searchParams: { page?: string } }) {
  const currentPage = parseInt(searchParams.page || '1', 10);
  
  // Fetch paginated posts (6 per page)
  const { data: postsData, totalPages } = await getPaginatedPosts(currentPage, 6);
  
  // Fetch popular posts (we'll fetch the latest 3 posts overall to use as "Popular" for now)
  const { data: popularData } = await getPaginatedPosts(1, 3);
  
  const posts = Array.isArray(postsData) ? postsData.map((p: any) => {
    // With _embed=1, featured media is available directly
    let imageUrl = null;
    if (p._embedded && p._embedded['wp:featuredmedia']) {
      imageUrl = p._embedded['wp:featuredmedia'][0]?.source_url;
    }
    
    // Extract category name
    let categoryName = 'BLOG';
    if (p._embedded && p._embedded['wp:term']) {
      // wp:term is an array of arrays, categories are usually the first sub-array
      const terms = p._embedded['wp:term'][0] || [];
      if (terms.length > 0) {
        categoryName = terms[0].name;
      }
    }
    
    return {
      id: p.id,
      slug: p.slug,
      date: p.date,
      title: p.title,
      excerpt: p.excerpt,
      categoryName,
      imageUrl
    };
  }) : [];

  const popularPosts = Array.isArray(popularData) ? popularData.map((p: any) => {
    let imageUrl = null;
    if (p._embedded && p._embedded['wp:featuredmedia']) {
      imageUrl = p._embedded['wp:featuredmedia'][0]?.media_details?.sizes?.thumbnail?.source_url || p._embedded['wp:featuredmedia'][0]?.source_url;
    }
    return {
      id: p.id,
      slug: p.slug,
      date: p.date,
      title: p.title,
      imageUrl
    };
  }) : [];
  
  const wpPage = await getPageBySlug('blog');
  const acf = wpPage?.acf || {};

  const heroImage = typeof acf?.hero_imagen === 'number' 
    ? (await getMedia(acf.hero_imagen))?.source_url 
    : acf?.hero_imagen;

  return (
    <main>
      <BlogHero 
        title={acf?.hero_titulo}
        desc={acf?.hero_texto}
        imageUrl={heroImage}
      />
      {posts && posts.length > 0 ? (
        <BlogFeed 
          posts={posts} 
          totalPages={totalPages} 
          currentPage={currentPage}
          popularPosts={popularPosts}
        />
      ) : (
        <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <h2>No hay publicaciones disponibles en este momento.</h2>
        </div>
      )}
      <BlogSubscription />
      <BlogCategories />
      </main>
  );
}
