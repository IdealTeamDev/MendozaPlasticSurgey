import React from 'react';
import BlogPostHero from '@/components/blog/BlogPostHero';
import BlogRelated from '@/components/blog/BlogRelated';
import BlogSidebar from '@/components/blog/BlogSidebar';
import { getPostBySlug, getMedia, fetchAPI } from '@/lib/wordpress';
import { notFound } from 'next/navigation';

// Import BlogFeed CSS to inherit post card styles
import '@/components/blog/BlogFeed.css';

// Helper to strip HTML tags for word count
function stripHtml(html: string) {
  return html.replace(/<[^>]*>?/gm, '');
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Calculate read time
  const wordCount = stripHtml(post.content.rendered).split(/\s+/).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200)).toString();

  // Extract ACF Stats
  const acf = post.acf || {};
  const vistas = acf.vistas || '1.6K vistas';
  const compartidos = acf.compartidos || '1.2K compartido';

  // Extract necessary fields
  const title = post.title.rendered;
  const category = 'BLOG'; 
  const date = new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
  const author = 'Mendoza Plastic Surgery';

  let imageUrl = null;
  if (post.featured_media) {
    const media = await getMedia(post.featured_media);
    imageUrl = media?.source_url || null;
  }

  // Fetch popular and related posts
  let popularPosts: any[] = [];
  let relatedPosts: any[] = [];
  try {
    const recentPosts = await fetchAPI(`/posts?_embed=1&per_page=5&exclude=${post.id}&orderby=date`);
    if (recentPosts && recentPosts.length > 0) {
      const formattedPosts = await Promise.all(recentPosts.map(async (p: any) => {
        let img = undefined; // Undefined so fallback triggers if needed
        if (p.featured_media) {
          const m = await getMedia(p.featured_media);
          if (m && m.source_url) img = m.source_url;
        }
        
        let categoryName = 'BLOG';
        if (p._embedded && p._embedded['wp:term']) {
          const terms = p._embedded['wp:term'][0] || [];
          if (terms.length > 0) {
            categoryName = terms[0].name.toUpperCase();
          }
        }

        return {
          id: p.id,
          slug: p.slug,
          title: p.title.rendered,
          tag: categoryName,
          date: new Date(p.date).toLocaleDateString('es-ES', { month: 'short', day: 'numeric', year: 'numeric' }),
          imageUrl: img
        };
      }));

      popularPosts = formattedPosts.slice(0, 3);
      relatedPosts = formattedPosts.slice(3, 5);
    }
  } catch (e) {
    console.error(e);
  }

  return (
    <main style={{ backgroundColor: '#fafafa' }}>
      <BlogPostHero 
        title={title}
        category={category}
        date={date}
        readTime={readTime}
        author={author}
        imageUrl={imageUrl || undefined}
        vistas={vistas}
        compartidos={compartidos}
      />
      
      <section className="blog-post-content-section" style={{ backgroundColor: '#fafafa', color: 'var(--negro-50)', paddingBottom: '5rem' }}>
        <div className="container">
          <div className="blog-post-layout" style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
            
            <div className="blog-post-main" style={{ flex: '2', minWidth: '300px' }}>
              <div 
                className="wp-content-container" 
                dangerouslySetInnerHTML={{ __html: post.content.rendered }} 
              />
            </div>

            <BlogSidebar popularPosts={popularPosts} />

          </div>
        </div>
      </section>

      <BlogRelated relatedPosts={relatedPosts} />
      
      {/* Global Gutenberg Styles for this internal page */}
      <style dangerouslySetInnerHTML={{__html: `
        .wp-content-container {
          color: var(--negro-50);
          font-size: 1.05rem;
          line-height: 1.8;
        }
        .wp-content-container p {
          margin-bottom: 1.5rem;
        }
        .wp-content-container h2, .wp-content-container h3 {
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-weight: 400;
          line-height: 1.3;
          text-transform: uppercase;
        }
        /* Custom styled box (e.g. blockquote or specific group block) */
        .wp-content-container blockquote, .wp-content-container .is-style-light-blue, .wp-content-container .wp-block-group {
          background-color: #f0f8fa;
          padding: 2rem;
          border-radius: 8px;
          margin: 2rem 0;
          border: none;
        }
      `}} />
    </main>
  );
}
