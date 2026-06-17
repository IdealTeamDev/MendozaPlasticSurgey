import React from 'react';
import Image from 'next/image';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <Image 
          src="/team.png" 
          alt="Clinic Background" 
          fill 
          priority 
          className="hero-bg-img" 
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-subtitle">BIENVENIDO A</p>
          <h1 className="hero-title">MENDOZA PLASTIC<br/>SURGERY</h1>
          <p className="hero-text">
            <strong>Te ofrecemos una atención personalizada</strong><br/>
            y la excelencia quirúrgica para que puedas<br/>
            sacar lo mejor de ti mismo
          </p>
          <button className="btn hero-btn">Reserva tu consulta</button>
        </div>
        
        <div className="hero-card-wrapper">
          <div className="hero-card">
            <Image 
              src="/team.png" 
              alt="Medical Team" 
              fill
              priority
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
