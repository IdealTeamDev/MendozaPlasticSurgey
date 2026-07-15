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
            quality={60}
            sizes="100vw"
            style={{ objectFit: 'cover' }} 
          />
        </div>
        <div className="hero-overlay"></div>
      </div>
      

      
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-subtitle" style={{ display: 'block', margin: 0, padding: 0 }}>{subtitle || 'Clínica de cirugía plástica en Atlanta'}</h1>
          {title ? (
            <h2 className="hero-title" dangerouslySetInnerHTML={{ __html: title }} />
          ) : (
            <h2 className="hero-title">Mendoza Plastic Surgery</h2>
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
              quality={70}
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
