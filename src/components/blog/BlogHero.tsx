import React from 'react';
import './BlogHero.css';

interface BlogHeroProps {
  title?: string;
  desc?: string;
  imageUrl?: string;
}

export default function BlogHero({ title, desc, imageUrl }: BlogHeroProps) {
  // Fallback a una imagen por defecto si WordPress no envía ninguna para que el blur funcione
  const bgImage = imageUrl || '/procedures.png';

  return (
    <section className="blog-hero">
      <div className="blog-hero-bg" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="blog-hero-overlay"></div>
      </div>
      
      <div className="container blog-hero-container">
        <div className="blog-hero-content">
          {(title && title.toUpperCase() !== 'BLOG') && (
            <span className="blog-hero-subtitle">BLOG</span>
          )}
          <h1 className="blog-hero-title">{title || 'BLOG'}</h1>
        </div>
      </div>

      <div className="blog-hero-curve">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          {/* Asymmetrical wave mimicking a clip-path */}
          <path d="M0,120 L0,30 C400,120 800,80 1440,90 L1440,120 Z" fill="#fafafa" />
        </svg>
      </div>
    </section>
  );
}
