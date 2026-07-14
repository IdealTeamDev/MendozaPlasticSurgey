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
          {(categoryTitle && categoryTitle.toUpperCase() !== 'BLOG') && (
            <p className="blog-cat-hero-subtitle">BLOG</p>
          )}
          <h1 className="blog-cat-hero-title">{categoryTitle}</h1>
        </div>
      </div>

      </section>
  );
}
