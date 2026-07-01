"use client";

import React, { useState } from 'react';
import './ProcedureResultsSlider.css';

interface CaseExample {
  before: string;
  after: string;
}

interface CaseData {
  id: number | string;
  title: string;
  shortDescription?: string;
  longDescription?: string;
  examples: CaseExample[];
}

interface ProcedureResultsSliderProps {
  cases?: CaseData[];
}

export default function ProcedureResultsSlider({ cases = [] }: ProcedureResultsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentExampleIndex, setCurrentExampleIndex] = useState(0);

  if (!cases || cases.length === 0) {
    return null; // Don't render if there are no cases
  }

  const nextCase = () => {
    setCurrentIndex((prev) => (prev === cases.length - 1 ? 0 : prev + 1));
    setCurrentExampleIndex(0); // Reset example index when changing case
  };

  const prevCase = () => {
    setCurrentIndex((prev) => (prev === 0 ? cases.length - 1 : prev - 1));
    setCurrentExampleIndex(0); // Reset example index when changing case
  };

  const currentCase = cases[currentIndex];
  
  const nextExample = () => {
    setCurrentExampleIndex((prev) => (prev === currentCase.examples.length - 1 ? 0 : prev + 1));
  };

  const prevExample = () => {
    setCurrentExampleIndex((prev) => (prev === 0 ? currentCase.examples.length - 1 : prev - 1));
  };

  const currentExample = currentCase.examples[currentExampleIndex] || { before: '', after: '' };

  return (
    <section className="proc-results-section">
      <div className="container">
        
        <div className="proc-results-card">
          
          <div className="proc-results-info">
            <span className="proc-results-label">RESULTADOS</span>
            <h2 className="proc-results-title">INMEDIATOS</h2>
            <button className="btn proc-btn-black">Conoce más</button>
          </div>

          <div className="proc-results-carousel">
            
            <div className="proc-results-images" style={{ position: 'relative' }}>
              
              {/* Internal Slider Controls (Floating) */}
              {currentCase.examples.length > 1 && (
                <button className="example-nav-btn prev" onClick={prevExample} aria-label="Anterior Ejemplo">&#10094;</button>
              )}
              {currentCase.examples.length > 1 && (
                <button className="example-nav-btn next" onClick={nextExample} aria-label="Siguiente Ejemplo">&#10095;</button>
              )}
              <div className="proc-result-img-box">
                <span className="proc-result-tag">ANTES</span>
                {currentExample.before ? (
                  <img src={currentExample.before} alt={`Antes - ${currentCase.title}`} className="proc-result-img" />
                ) : (
                  <div className="proc-result-img-placeholder">(Sin Imagen)</div>
                )}
              </div>
              <div className="proc-result-img-box">
                <span className="proc-result-tag">DESPUÉS</span>
                {currentExample.after ? (
                  <img src={currentExample.after} alt={`Después - ${currentCase.title}`} className="proc-result-img" />
                ) : (
                  <div className="proc-result-img-placeholder">(Sin Imagen)</div>
                )}
              </div>
            </div>

            {/* Clinical Note */}
            <p className="proc-results-clinical-note" style={{ color: '#555', fontSize: '0.9rem', fontStyle: 'italic', marginTop: '2rem' }}>
              * Los resultados pueden variar. {currentCase.shortDescription}
            </p>

            {/* Sub-slider controls for multiple examples in the SAME case */}
            {currentCase.examples.length > 1 && (
              <div style={{ textAlign: 'center', marginTop: '1rem', fontFamily: 'var(--font-subtitle)', fontSize: '0.9rem', color: '#888' }}>
                Foto {currentExampleIndex + 1} de {currentCase.examples.length}
              </div>
            )}

            {/* Main slider controls for Cases */}
            {cases.length > 1 && (
              <div className="proc-results-controls" style={{ marginTop: '2rem' }}>
                <span style={{ alignSelf: 'center', marginRight: '1rem', fontSize: '0.9rem', color: '#888' }}>Siguiente Caso:</span>
                <button className="slider-btn" onClick={prevCase} aria-label="Caso Anterior">&lt;</button>
                <button className="slider-btn" onClick={nextCase} aria-label="Caso Siguiente">&gt;</button>
              </div>
            )}
            
          </div>
          
        </div>

      </div>
    </section>
  );
}
