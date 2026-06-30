import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogPostHero from '@/components/blog/BlogPostHero';
import BlogRelated from '@/components/blog/BlogRelated';
import { getPostBySlug } from '@/lib/wordpress';
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
  const readTime = '5'; // Estimate from word count if possible, or static
  const author = 'Dr. Edgar Mendoza';

  return (
    <main>
      <Navbar />
      <BlogPostHero 
        title={title}
        category={category}
        date={date}
        readTime={readTime}
        author={author}
      />
      
      {/* We inject the content natively instead of BlogPostContent for dynamic CMS */}
      <section className="blog-post-content-section section-padding">
        <div className="container">
          <div className="blog-post-layout">
            <div className="blog-post-main">
              <div 
                className="wp-content-container" 
                dangerouslySetInnerHTML={{ __html: post.content.rendered }} 
              />
            </div>
            {/* Sidebar can be added here similar to static layout */}
          </div>
        </div>
      </section>

      <BlogRelated />
      <Footer />
    </main>
  );
}
