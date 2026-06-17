import React from 'react';
import './BlogPostHero.css';

interface BlogPostHeroProps {
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
}

export default function BlogPostHero({ title, category, date, readTime, author }: BlogPostHeroProps) {
  return (
    <section className="blog-post-hero">
      <div className="blog-post-hero-bg">
        <div className="blog-post-hero-overlay"></div>
      </div>
      
      <div className="container blog-post-hero-container">
        <div className="blog-post-hero-content">
          <h1 className="blog-post-hero-title">{title}</h1>
          <div className="blog-post-hero-meta">
            <span className="blog-meta-category">{category}</span>
            <span className="blog-meta-dot">•</span>
            <span>{date}</span>
            <span className="blog-meta-dot">•</span>
            <span>{readTime} MINUTOS</span>
            <span className="blog-meta-dot">•</span>
            <span>POR {author.toUpperCase()}</span>
          </div>
        </div>
      </div>

      <div className="blog-post-hero-curve">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" fill="#fafafa" />
        </svg>
      </div>
    </section>
  );
}
