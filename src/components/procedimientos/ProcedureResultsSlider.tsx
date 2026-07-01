"use client";

import React, { useState } from 'react';
import './ProcedureResultsSlider.css';

interface CaseData {
  id: number | string;
  title: string;
  before: string;
  after: string;
}

interface ProcedureResultsSliderProps {
  cases?: CaseData[];
}

export default function ProcedureResultsSlider({ cases = [] }: ProcedureResultsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!cases || cases.length === 0) {
    return null; // Don't render if there are no cases
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === cases.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? cases.length - 1 : prev - 1));
  };

  const currentCase = cases[currentIndex];

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
            
            <div className="proc-results-images">
              <div className="proc-result-img-box">
                <span className="proc-result-tag">ANTES</span>
                {currentCase.before ? (
                  <img src={currentCase.before} alt={`Antes - ${currentCase.title}`} className="proc-result-img" />
                ) : (
                  <div className="proc-result-img-placeholder">(Sin Imagen)</div>
                )}
              </div>
              <div className="proc-result-img-box">
                <span className="proc-result-tag">DESPUÉS</span>
                {currentCase.after ? (
                  <img src={currentCase.after} alt={`Después - ${currentCase.title}`} className="proc-result-img" />
                ) : (
                  <div className="proc-result-img-placeholder">(Sin Imagen)</div>
                )}
              </div>
            </div>

            {cases.length > 1 && (
              <div className="proc-results-controls">
                <button className="slider-btn" onClick={prevSlide}>&lt;</button>
                <button className="slider-btn" onClick={nextSlide}>&gt;</button>
              </div>
            )}
            
          </div>
          
        </div>

      </div>
    </section>
  );
}
