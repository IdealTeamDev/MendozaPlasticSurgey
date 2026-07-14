import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Hero.css';

interface HeroProps {
  subtitle?: string;
  title?: string;
  text?: string; // HTML string from ACF Wysiwyg
  imageUrl?: string;
}

export default function Hero({ subtitle, title, text, imageUrl }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-bg-img">
          <Image 
            src={imageUrl || "/team.png"} 
            alt="Hero Background" 
            fill 
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }} 
          />
        </div>
        <div className="hero-overlay"></div>
      </div>
      

      
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-subtitle" style={{ display: 'block' }}>{subtitle || 'Clínica de cirugía plástica en Atlanta'}</span>
          {title ? (
            <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: title }} />
          ) : (
            <h1 className="hero-title">Mendoza Plastic Surgery</h1>
          )}
          
          {text ? (
            <div className="hero-text" dangerouslySetInnerHTML={{ __html: text }} />
          ) : null}
        </div>
        
        <div className="hero-card-wrapper">
          <div className="hero-card">
            <Image 
              src={imageUrl || "/team.png"} 
              alt="Medical Team" 
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="hero-card-img" 
            />
          </div>
        </div>
        
        <Link href="/centro-medico" className="btn hero-btn">Conoce más</Link>
      </div>
    </section>
  );
}
