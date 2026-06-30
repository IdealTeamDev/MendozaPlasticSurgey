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
          <h1 className="blog-hero-title">{title || 'BLOG'}</h1>
          <p className="blog-hero-text">
            {desc || 'Conoce las últimas noticias, casos médicos de los casos más de renombre de belleza y de vida de los mas prestigiados pacientes que el cirujano Dr. Mendoza ha intervenido.'}
          </p>
        </div>
        
        <div className="blog-hero-image-wrapper">
          <div className="blog-hero-image-card">
            {imageUrl ? (
              <img src={imageUrl} alt={title || 'Blog'} className="blog-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <div className="blog-img-placeholder">
                <span>(Foto Dr. Mendoza con iPad)</span>
              </div>
            )}
          </div>
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
