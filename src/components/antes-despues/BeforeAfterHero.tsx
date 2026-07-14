import React from 'react';
import './BeforeAfterHero.css';

export default function BeforeAfterHero() {
  return (
    <section className="ba-hero">
      <div className="ba-hero-bg">
        <div className="ba-hero-overlay"></div>
      </div>
      
      <div className="container ba-hero-container">
        <div className="ba-hero-content">
          <h1 className="ba-hero-title">ANTES Y DESPUÉS</h1>
          <button className="btn ba-hero-btn">Agenda tu consulta</button>
        </div>
        
        <div className="ba-hero-image-wrapper">
          <div className="ba-hero-image-card">
            <div className="ba-img-placeholder">
              <span>(Placeholder Cirugía)</span>
            </div>
          </div>
        </div>
      </div>

      </section>
  );
}
