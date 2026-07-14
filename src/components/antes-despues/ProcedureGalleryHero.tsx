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

      </section>
  );
}
