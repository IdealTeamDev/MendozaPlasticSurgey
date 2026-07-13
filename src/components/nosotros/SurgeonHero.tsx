import React from 'react';
import './SurgeonHero.css';

interface SurgeonHeroProps {
  subtitle?: string;
  title?: string;
  desc?: string;
  imageUrl?: string;
}

export default function SurgeonHero({ subtitle, title, desc, imageUrl }: SurgeonHeroProps) {
  return (
    <section className="surgeon-hero">
      <div 
        className="surgeon-hero-bg"
        style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}}
      >
        <div className="surgeon-hero-overlay"></div>
      </div>
      
      <div className="container surgeon-hero-container">
        <div className="surgeon-hero-content">
          <p className="surgeon-hero-subtitle">{subtitle || 'DR. MENDOZA'}</p>
          <h1 className="surgeon-hero-title">{title || 'PLASTIC SURGEON'}</h1>
          <p className="surgeon-hero-desc">
            {desc || 'Descubre quién está detrás de cada transformación y conoce el trabajo de nuestro cirujano.'}
          </p>
        </div>
        
        <div className="surgeon-hero-image-wrapper">
          <div className="surgeon-hero-image-card">
            {imageUrl ? (
              <img src={imageUrl} alt="Surgeon Hero" style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block' }} />
            ) : (
              <div className="surgeon-img-placeholder">
                <span>(Placeholder Dr. Mendoza)</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="surgeon-hero-curve">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" fill="#f9f9f9" />
        </svg>
      </div>
    </section>
  );
}
