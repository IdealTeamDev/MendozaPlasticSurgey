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
      
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="round-corners">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 19 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="in" />
          </filter>
        </defs>
      </svg>
      
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-subtitle">{subtitle || 'Clínica de cirugía plástica en Atlanta'}</h1>
          {title ? (
            <h2 className="hero-title" dangerouslySetInnerHTML={{ __html: title }} />
          ) : (
            <h2 className="hero-title">Mendoza Plastic Surgery</h2>
          )}
          
          {text ? (
            <div className="hero-text" dangerouslySetInnerHTML={{ __html: text }} />
          ) : null}
          <Link href="/medical-center" className="btn hero-btn">Conoce más</Link>
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
      </div>

      <button className="floating-support-btn">
        <div className="headset-icon">
          <span className="dot"></span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
        </div>
      </button>
    </section>
  );
}
