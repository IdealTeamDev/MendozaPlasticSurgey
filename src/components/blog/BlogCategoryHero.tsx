import React from 'react';
import './BlogCategoryHero.css';

interface BlogCategoryHeroProps {
  categoryTitle: string;
}

export default function BlogCategoryHero({ categoryTitle }: BlogCategoryHeroProps) {
  return (
    <section className="blog-cat-hero">
      <div className="blog-cat-hero-bg">
        <div className="blog-cat-hero-overlay"></div>
      </div>
      
      <div className="container blog-cat-hero-container">
        <div className="blog-cat-hero-content">
          <p className="blog-cat-hero-subtitle">BLOG</p>
          <h1 className="blog-cat-hero-title">{categoryTitle}</h1>
        </div>
      </div>

      <div className="blog-cat-hero-curve">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" fill="#fafafa" />
        </svg>
      </div>
    </section>
  );
}
