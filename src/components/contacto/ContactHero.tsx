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

      </section>
  );
}
