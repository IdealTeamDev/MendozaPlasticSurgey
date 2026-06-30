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
              <img src={imageUrl} alt="Surgeon Hero" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
      
      <button className="floating-support-btn">
        <span className="headset-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
          <span className="dot"></span>
        </span>
      </button>
    </section>
  );
}
