import React from 'react';
import './PatientsHero.css';
import Image from 'next/image';
interface PatientsHeroProps {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
}

export default function PatientsHero({ title, subtitle, imageUrl }: PatientsHeroProps) {
  return (
    <section className="patients-hero">
      <div className="patients-hero-bg">
        <div className="patients-hero-overlay"></div>
      </div>
      
      <div className="container patients-hero-container">
        <div className="patients-hero-content">
          <p className="patients-hero-subtitle">{subtitle || 'OPCIONES DE FINANCIAMIENTO'}</p>
          <h1 className="patients-hero-title">{title || 'PARA CIRUGÍAS Y TRATAMIENTOS ESTÉTICOS'}</h1>
        </div>
        
        <div className="patients-hero-image-wrapper">
          <div className="patients-hero-image-card">
            {imageUrl ? (
              <img src={imageUrl} alt="Atención al paciente" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <div className="patients-img-placeholder">
                <span>(Placeholder Imagen Chica)</span>
              </div>
            )}
          </div>
        </div>
      </div>

      </section>
  );
}
