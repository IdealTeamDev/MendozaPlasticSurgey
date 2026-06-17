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

      <div className="ba-hero-curve">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" fill="#fafafa" />
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
