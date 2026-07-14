import React from 'react';
import './ProcedureDetailHero.css';

interface ProcedureDetailHeroProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function ProcedureDetailHero({ title, subtitle = "PROCEDIMIENTOS", imageUrl, buttonText, buttonHref }: ProcedureDetailHeroProps) {
  return (
    <section className="proc-detail-hero">
      <div className="proc-detail-hero-bg" style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}}>
        <div className="proc-detail-hero-overlay"></div>
      </div>
      
      <div className="container proc-detail-hero-container">
        <div className="proc-detail-hero-content">
          {subtitle && <span className="proc-detail-subtitle">{subtitle}</span>}
          <h1 className="proc-detail-title">{title}</h1>
          {buttonText && (
            <a href={buttonHref || "/contacto"} className="btn proc-btn-white" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
              {buttonText}
            </a>
          )}
        </div>
      </div>

      </section>
  );
}
