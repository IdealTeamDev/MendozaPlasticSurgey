import React from 'react';
import './PageHero.css';

interface PageHeroProps {
  subtitle?: string;
  title?: string;
  desc?: string;
  imageUrl?: string;
  buttonText?: string;
  buttonHref?: string;
  children?: React.ReactNode;
}

export default function PageHero({ subtitle, title, desc, imageUrl, buttonText, buttonHref, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div 
        className="page-hero-bg"
        style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}}
      >
        <div className="page-hero-overlay"></div>
      </div>
      
      <div className="container page-hero-container">
        <div className="page-hero-content">
          {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
          <h1 className="page-hero-title">{title}</h1>
          {desc && <p className="page-hero-desc">{desc}</p>}
          {buttonText && (
            <a href={buttonHref || "/contacto"} className="btn btn-outline" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
              {buttonText}
            </a>
          )}
          {children}
        </div>
        
        <div className="page-hero-image-wrapper">
          <div className="page-hero-image-card">
            {imageUrl ? (
              <img src={imageUrl} alt={title || "Hero Image"} style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block' }} />
            ) : (
              <div className="page-img-placeholder">
                <span>(Placeholder Imagen)</span>
              </div>
            )}
          </div>
        </div>
      </div>

    </section>
  );
}
