import React from 'react';
import './ContactHero.css';

interface ContactHeroProps {
  subtitle?: string;
  title?: string;
  desc?: string;
  imageUrl?: string;
}

export default function ContactHero({ subtitle, title, desc, imageUrl }: ContactHeroProps) {
  return (
    <section className="contact-hero">
      <div className="contact-hero-bg-wrapper">
        <div className="contact-hero-bg-img" style={{ backgroundImage: `url('${imageUrl || '/hero_bg.png?v=3'}')` }}></div>
        <div className="contact-hero-overlay"></div>
      </div>
      
      <div className="container contact-hero-container">
        <div className="contact-hero-content">
          <p className="contact-hero-subtitle">{subtitle || '¡ESTAMOS AQUÍ PARA AYUDARTE Y'}</p>
          <h1 className="contact-hero-title">{title || 'RESOLVER TUS DUDAS!'}</h1>
          <p className="contact-hero-desc">
            {desc || 'Nuestro equipo bilingüe está preparado para aclarar tus inquietudes y guiarte en tu camino hacia la transformación que deseas.'}
          </p>
        </div>
        
        <div className="contact-hero-image-wrapper">
          <div className="contact-hero-image-card">
            {imageUrl ? (
              <img src={imageUrl} alt={title || 'Contacto'} className="contact-img" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            ) : (
              <div className="contact-img-placeholder">
                <span>(Placeholder Imagen Asesora)</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="contact-hero-curve">
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
