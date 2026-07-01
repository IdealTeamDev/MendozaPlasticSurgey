import React from 'react';
import Link from 'next/link';
import './BlogRelated.css';

interface RelatedPost {
  id: number;
  slug: string;
  tag: string;
  date: string;
  title: string;
  imageUrl?: string;
}

interface BlogRelatedProps {
  relatedPosts?: RelatedPost[];
}

export default function BlogRelated({ relatedPosts = [] }: BlogRelatedProps) {
  if (!relatedPosts || relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="blog-related-section">
      <div className="container">
        
        <div className="blog-related-header">
          <h2 className="related-title">TAMBIÉN TE PUEDE GUSTAR</h2>
        </div>

        <div className="related-grid">
          {posts.map(post => (
            <div key={post.id} className="blog-post-card">
              <Link href={`/blog/${post.slug}`} className="blog-post-img-wrapper" style={{display: 'block', textDecoration: 'none'}}>
                <span className="blog-post-tag">{post.tag}</span>
                <div 
                  className="blog-post-img-placeholder"
                  style={post.imageUrl ? { backgroundImage: `url(${post.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'transparent' } : {}}
                >
                  (Img Blog)
                </div>
              </Link>
              <div className="blog-post-content">
                <span className="blog-post-date">{post.date}</span>
                <Link href={`/blog/${post.slug}`} style={{textDecoration: 'none'}}>
                  <h3 className="blog-post-card-title">{post.title}</h3>
                </Link>
                <Link href={`/blog/${post.slug}`}>
                  <button className="btn blog-post-btn">Leer más</button>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
