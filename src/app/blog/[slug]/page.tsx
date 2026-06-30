import React from 'react';
import BlogPostHero from '@/components/blog/BlogPostHero';
import BlogRelated from '@/components/blog/BlogRelated';
import BlogSidebar from '@/components/blog/BlogSidebar';
import { getPostBySlug, getMedia } from '@/lib/wordpress';
import { notFound } from 'next/navigation';

// Import BlogFeed CSS to inherit post card and popular widget styles
import '@/components/blog/BlogFeed.css';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Extract necessary fields
  const title = post.title.rendered;
  const category = 'BLOG'; // Or fetch category dynamically if needed
  const date = new Date(post.date).toLocaleDateString();
  const readTime = '2'; // Estimate from word count if possible, or static
  const author = 'Mendoza Plastic Surgery';

  let imageUrl = null;
  if (post.featured_media) {
    const media = await getMedia(post.featured_media);
    imageUrl = media?.source_url || null;
  }

  return (
    <main style={{ backgroundColor: '#ffffff' }}>
      <BlogPostHero 
        title={title}
        category={category}
        date={date}
        readTime={readTime}
        author={author}
        imageUrl={imageUrl || undefined}
      />
      
      <section className="blog-post-content-section section-padding" style={{ backgroundColor: '#ffffff', color: '#333' }}>
        <div className="container">
          <div className="blog-post-layout" style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            
            <div className="blog-post-main" style={{ flex: '2', minWidth: '300px' }}>
              <div 
                className="wp-content-container" 
                style={{ color: '#333', fontSize: '1.05rem', lineHeight: '1.7' }}
                dangerouslySetInnerHTML={{ __html: post.content.rendered }} 
              />
            </div>

            <BlogSidebar />

          </div>
        </div>
      </section>

      <BlogRelated />
      </main>
  );
}
