import React from 'react';
import './ProcedureHero.css';

export default function ProcedureHero() {
  return (
    <section className="proc-hero">
      <div className="proc-hero-bg">
        <div className="proc-hero-overlay"></div>
      </div>
      
      <div className="container proc-hero-container">
        <div className="proc-hero-content">
          <h1 className="proc-hero-title">PROCEDIMIENTOS</h1>
          <p className="proc-hero-text">
            Realizamos una línea completa de procedimientos quirúrgicos: desde inyectables y cirugías faciales, hasta procedimientos corporales y de senos.
          </p>
        </div>
        
        <div className="proc-hero-image-wrapper">
          <div className="proc-hero-image-card">
            <div className="proc-img-placeholder">
              <span>(Foto Dr. Mendoza operando)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="proc-hero-curve">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" fill="#fafafa" />
        </svg>
      </div>
    </section>
  );
}
