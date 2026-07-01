import React from 'react';
import BlogCategoryHero from '@/components/blog/BlogCategoryHero';
import BlogFeed from '@/components/blog/BlogFeed';
import BlogSubscription from '@/components/blog/BlogSubscription';
import BlogCategories from '@/components/blog/BlogCategories';
import { getCategoryBySlug, getPaginatedPosts } from '@/lib/wordpress';

const CATEGORY_NAMES: Record<string, string> = {
  'cuerpo': 'CUERPOS',
  'tratamientos': 'TRATAMIENTOS',
  'inyectables': 'INYECTABLES',
  'senos': 'SENOS',
  'faciales': 'FACIALES',
};

// @ts-ignore - Ignoring searchParams type for simplicity
export default async function BlogCategoryPage({ params, searchParams }: { params: Promise<{ slug: string }>, searchParams?: any }) {
  const { slug } = await params;
  const categoryName = CATEGORY_NAMES[slug] || slug.toUpperCase();
  
  // Await searchParams properly in Next.js 15
  const sp = searchParams ? await searchParams : {};
  const currentPage = parseInt(sp.page || '1', 10);

  // Fetch category to get its ID
  const wpCategory = await getCategoryBySlug(slug);
  
  let postsData = [];
  let totalPages = 1;
  
  if (wpCategory) {
    const res = await getPaginatedPosts(currentPage, 6, wpCategory.id);
    postsData = res.data || [];
    totalPages = res.totalPages;
  }

  // Fetch popular posts (we'll fetch the latest 3 posts overall)
  const { data: popularData } = await getPaginatedPosts(1, 3);

  const posts = Array.isArray(postsData) ? postsData.map((p: any) => {
    let imageUrl = null;
    if (p._embedded && p._embedded['wp:featuredmedia']) {
      imageUrl = p._embedded['wp:featuredmedia'][0]?.source_url;
    }
    
    let postCategoryName = categoryName;
    if (p._embedded && p._embedded['wp:term']) {
      const terms = p._embedded['wp:term'][0] || [];
      if (terms.length > 0) {
        postCategoryName = terms[0].name;
      }
    }
    
    return {
      id: p.id,
      slug: p.slug,
      date: p.date,
      title: p.title,
      excerpt: p.excerpt,
      categoryName: postCategoryName,
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

  return (
    <main>
      <BlogCategoryHero categoryTitle={categoryName} />
      
      {posts && posts.length > 0 ? (
        <BlogFeed 
          posts={posts} 
          totalPages={totalPages}
          currentPage={currentPage}
          popularPosts={popularPosts}
        />
      ) : (
        <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <h2>No hay publicaciones en esta categoría.</h2>
        </div>
      )}
      
      <BlogSubscription />
      <BlogCategories />
      </main>
  );
}
