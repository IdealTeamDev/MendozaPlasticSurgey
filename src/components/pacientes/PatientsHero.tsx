import React from 'react';
import './PatientsHero.css';
import Image from 'next/image';

export default function PatientsHero() {
  return (
    <section className="patients-hero">
      <div className="patients-hero-bg">
        <div className="patients-hero-overlay"></div>
      </div>
      
      <div className="container patients-hero-container">
        <div className="patients-hero-content">
          <p className="patients-hero-subtitle">OPCIONES DE FINANCIAMIENTO</p>
          <h1 className="patients-hero-title">PARA CIRUGÍAS Y TRATAMIENTOS ESTÉTICOS</h1>
        </div>
        
        <div className="patients-hero-image-wrapper">
          <div className="patients-hero-image-card">
            <div className="patients-img-placeholder">
              <span>(Placeholder Imagen Chica)</span>
            </div>
            {/* Si tuvieras la imagen real, la usaríamos así: */}
            {/* <Image src="/patients-hero.jpg" alt="Atención al paciente" fill className="patients-img" /> */}
          </div>
        </div>
      </div>

      <div className="patients-hero-curve">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" fill="#ffffff" />
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
