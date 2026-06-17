"use client";

import React, { useState } from 'react';
import './ProcedureResultsSlider.css';

const RESULTS_DATA = [
  { id: 1, before: 'Img Antes 1', after: 'Img Después 1' },
  { id: 2, before: 'Img Antes 2', after: 'Img Después 2' },
];

export default function ProcedureResultsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === RESULTS_DATA.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? RESULTS_DATA.length - 1 : prev - 1));
  };

  const currentPair = RESULTS_DATA[currentIndex];

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
                <div className="proc-result-img-placeholder">
                  ({currentPair.before})
                </div>
              </div>
              <div className="proc-result-img-box">
                <span className="proc-result-tag">DESPUÉS</span>
                <div className="proc-result-img-placeholder">
                  ({currentPair.after})
                </div>
              </div>
            </div>

            <div className="proc-results-controls">
              <button className="slider-btn" onClick={prevSlide}>&lt;</button>
              <button className="slider-btn" onClick={nextSlide}>&gt;</button>
            </div>
            
          </div>
          
        </div>

      </div>
    </section>
  );
}
