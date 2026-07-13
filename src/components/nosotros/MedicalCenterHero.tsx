import React from 'react';
import Link from 'next/link';
import './MedicalCenterHero.css';

interface MedicalCenterHeroProps {
  title?: string;
  desc?: string;
  imageUrl?: string;
}

export default function MedicalCenterHero({ title, desc, imageUrl }: MedicalCenterHeroProps) {
  return (
    <section className="mc-hero">
      <div 
        className="mc-hero-bg"
        style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}}
      >
        <div className="mc-hero-overlay"></div>
      </div>
      
      <div className="container mc-hero-container">
        <div className="mc-hero-content">
          <h1 className="mc-hero-title">{title || 'MEDICAL CENTER'}</h1>
          {desc && <p className="mc-hero-desc" style={{ color: 'white', marginTop: '1rem', fontSize: '1.1rem' }}>{desc}</p>}
          <Link href="/contacto" className="btn mc-hero-btn">Agenda tu consulta</Link>
        </div>
        
        <div className="mc-hero-image-wrapper">
          <div className="mc-hero-image-card">
            {imageUrl ? (
              <img src={imageUrl} alt="Medical Center" style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block' }} />
            ) : (
              <div className="mc-img-placeholder">
                <span>(Placeholder Equipo Médico)</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mc-hero-curve">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
