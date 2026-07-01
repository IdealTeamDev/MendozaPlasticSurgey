import React from 'react';
import './BlogHero.css';

interface BlogHeroProps {
  title?: string;
  desc?: string;
  imageUrl?: string;
}

export default function BlogHero({ title, desc, imageUrl }: BlogHeroProps) {
  return (
    <section className="blog-hero">
      <div className="blog-hero-bg" style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}}>
        <div className="blog-hero-overlay"></div>
      </div>
      
      <div className="container blog-hero-container">
        <div className="blog-hero-content">
          <span className="blog-hero-subtitle">BLOG</span>
          <h1 className="blog-hero-title">{title || 'BLOG'}</h1>
        </div>
      </div>

      <div className="blog-hero-curve">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" fill="#fafafa" />
        </svg>
      </div>
    </section>
  );
}
