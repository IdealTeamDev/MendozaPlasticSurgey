import React from 'react';
import './ProcedureHero.css';

interface ProcedureHeroProps {
  title?: string;
  desc?: string;
  imageUrl?: string;
}

export default function ProcedureHero({ title, desc, imageUrl }: ProcedureHeroProps) {
  return (
    <section className="proc-hero">
      <div className="proc-hero-bg" style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}}>
        <div className="proc-hero-overlay"></div>
      </div>
      
      <div className="container proc-hero-container">
        <div className="proc-hero-content">
          <h1 className="proc-hero-title">{title || 'PROCEDIMIENTOS'}</h1>
          <p className="proc-hero-text">
            {desc || 'Realizamos una línea completa de procedimientos quirúrgicos: desde inyectables y cirugías faciales, hasta procedimientos corporales y de senos.'}
          </p>
        </div>

        <div className="proc-hero-image-wrapper">
          <div className="proc-hero-image-card">
            {imageUrl ? (
              <img src={imageUrl} alt={title || 'Procedimientos'} className="proc-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <div className="proc-img-placeholder">
                <span>(Foto Dr. Mendoza operando)</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="proc-hero-curve">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" fill="var(--blanco-100)" />
        </svg>
      </div>
    </section>
  );
}
