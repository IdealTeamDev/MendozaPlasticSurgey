import React from 'react';
import BlogHero from '@/components/blog/BlogHero';
import BlogFeed from '@/components/blog/BlogFeed';
import BlogSubscription from '@/components/blog/BlogSubscription';
import BlogCategories from '@/components/blog/BlogCategories';
import { getPaginatedPosts, getPageBySlug, getMedia } from '@/lib/wordpress';

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const sp = await searchParams;
  const currentPage = parseInt(sp.page || '1', 10);
  
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

  // Fetch all categories
  const { getCategories, getProcedureCategories } = await import('@/lib/wordpress');
  const allCategoriesRaw = await getCategories();
  
  // Filter out "todos" or "uncategorized"
  const allCategories = allCategoriesRaw.filter((cat: any) => {
    const slug = cat.slug.toLowerCase();
    return slug !== 'todos' && slug !== 'uncategorized' && slug !== 'sin-categoria';
  });

  // ACF Subscription data
  const subTitle = acf.titulo_suscripcion || 'SUSCRÍBETE A NUESTRO BLOG';
  const subDesc = acf.texto_suscripcion || 'Mantente al día con lo último en tendencias sobre la Plastic Surgery con nuestro boletín mensual.';
  const subBgImage = typeof acf.imagen_suscripcion === 'number'
    ? (await getMedia(acf.imagen_suscripcion))?.source_url
    : (acf.imagen_suscripcion || null);

  // Inherit Images from Procedure Categories
  const procCategories = await getProcedureCategories() || [];
  const catImageMap: Record<string, string> = {};
  
  for (const pCat of procCategories) {
    let imgUrl = '';
    const heroAcf = pCat.acf?.hero_imagen;
    if (typeof heroAcf === 'number') {
      imgUrl = (await getMedia(heroAcf))?.source_url || '';
    } else if (typeof heroAcf === 'string') {
      imgUrl = heroAcf;
    }
    
    if (imgUrl) {
      const catName = pCat.name.toLowerCase().trim();
      catImageMap[catName] = imgUrl;
      // Also map singular/plural variants for robustness
      if (catName.endsWith('s')) {
        catImageMap[catName.slice(0, -1)] = imgUrl;
      } else {
        catImageMap[catName + 's'] = imgUrl;
      }
    }
  }

  return (
    <main>
      <BlogHero 
        title={acf?.hero_titulo || 'GENERAL'} 
        desc={acf?.hero_descripcion} 
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
      <BlogSubscription 
        title={subTitle}
        desc={subDesc}
        bgImage={subBgImage}
      />
      <BlogCategories 
        categories={allCategories}
        categoryImages={catImageMap}
      />
    </main>
  );
}
