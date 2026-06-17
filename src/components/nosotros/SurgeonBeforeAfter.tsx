import React from 'react';
import './SurgeonBeforeAfter.css';

export default function SurgeonBeforeAfter() {
  return (
    <section className="surgeon-ba-section">
      <div className="container surgeon-ba-container">
        <div className="surgeon-ba-card">
          
          <div className="surgeon-ba-left">
            <h3 className="ba-subtitle">ANTES Y DESPUÉS</h3>
            <h2 className="ba-title">CIRUGÍA PLÁSTICA</h2>
            <button className="btn ba-btn">Ver más resultados</button>
          </div>

          <div className="surgeon-ba-right">
            <div className="ba-images-wrapper">
              <div className="ba-image-col">
                <div className="ba-label">( ANTES )</div>
                <div className="ba-img-box">
                  <span>(Antes Placeholder)</span>
                </div>
              </div>
              <div className="ba-image-col">
                <div className="ba-label">( DESPUÉS )</div>
                <div className="ba-img-box">
                  <span>(Después Placeholder)</span>
                </div>
              </div>
            </div>
            
            <div className="ba-nav-controls">
              <button className="ba-nav-btn prev">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              <button className="ba-nav-btn next">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
