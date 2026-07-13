import React from 'react';
import './ProcedureGalleryHero.css';

interface ProcedureGalleryHeroProps {
  categoryTitle: string;
  procedureTitle: string;
}

export default function ProcedureGalleryHero({ categoryTitle, procedureTitle }: ProcedureGalleryHeroProps) {
  return (
    <section className="proc-hero">
      <div className="proc-hero-bg">
        <div className="proc-hero-overlay"></div>
      </div>
      
      <div className="container proc-hero-container">
        <div className="proc-hero-content">
          <p className="proc-hero-subtitle">{categoryTitle}</p>
          <h1 className="proc-hero-title">{procedureTitle}</h1>
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
