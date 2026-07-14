import React from 'react';
import Image from 'next/image';
import './BlogPostHero.css';

interface BlogPostHeroProps {
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  imageUrl?: string;
  vistas?: string;
  compartidos?: string;
}

export default function BlogPostHero({ title, category, date, readTime, author, imageUrl, vistas, compartidos }: BlogPostHeroProps) {
  // If no image is provided, use a clean fallback
  const bgImage = imageUrl || '/procedures.png';

  return (
    <section className="blog-post-hero-internal section-padding">
      <div className="container">
        <div className="blog-post-hero-box">
          <Image 
            src={bgImage} 
            alt={title} 
            fill 
            priority
            sizes="(max-width: 1200px) 100vw, 1200px" 
            style={{ objectFit: 'cover', zIndex: 0 }} 
          />
          <div className="blog-post-hero-box-overlay"></div>
          
          <div className="blog-post-hero-box-content">
            <h1 className="blog-post-hero-box-title">{title}</h1>
            <div className="blog-post-hero-box-meta">
              <span>Por {author}</span>
              <span className="blog-meta-sep">—</span>
              <span>{date}</span>
              <span className="blog-meta-sep">—</span>
              <span className="meta-icon"><img src="/icon-time.svg" alt="time" className="meta-icon-img" /></span> <span>{readTime} minutos de lectura</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
