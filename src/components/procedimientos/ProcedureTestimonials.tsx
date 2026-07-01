"use client";

import React, { useState } from 'react';
import './ProcedureTestimonials.css';

const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: 'Marzia Fernández',
    date: '15 Enero 2026',
    rating: 5,
    text: 'Operarme con el Dr. Mendoza fue mi mejor decisión. Totalmente agradecida con él y su equipo de trabajo, estuvieron siempre muy pendientes de mí. Los mejores❤️'
  },
  {
    id: 2,
    name: 'Lucia Blanco',
    date: '2 Mayo 2024',
    rating: 5,
    text: 'Excelente atención, excelente trato y lo más importante resultados increíbles con excelente equipo de manos talentosas. Gracias.'
  }
];

export default function ProcedureTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  return (
    <section className="proc-testimonials-section">
      <div className="container">
        
        <div className="proc-test-layout">
          
          {/* Left Column: Stats */}
          <div className="proc-test-stats-col">
            <h2 className="proc-test-title">TESTIMONIOS</h2>
            
            <div className="proc-stats-grid">
              <div className="proc-stat-item">
                <span className="stat-number">+1500</span>
                <span className="stat-label">Cirugías</span>
              </div>
              <div className="proc-stat-item">
                <span className="stat-number">5</span>
                <span className="stat-label">Estrellas</span>
              </div>
              <div className="proc-stat-item">
                <span className="stat-number">+180</span>
                <span className="stat-label">Reviews</span>
              </div>
            </div>
          </div>

          {/* Right Column: Carousel */}
          <div className="proc-test-carousel-col">
            <div className="proc-test-cards-wrapper">
              
              {/* This mimics the 2 cards shown or just showing 1 or 2 depending on screen */}
              {/* We show 2 cards in desktop, 1 in mobile but for simplicity let's map them */}
              <div className="proc-test-cards-container">
                {TESTIMONIALS_DATA.map((testimonial, idx) => (
                  <div key={testimonial.id} className="proc-testimonial-card">
                    <div className="test-card-header">
                      <div className="test-avatar">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="test-info">
                        <h4>{testimonial.name}</h4>
                        <span>{testimonial.date}</span>
                      </div>
                      <div className="test-google-icon">
                        G {/* Google icon placeholder */}
                      </div>
                    </div>
                    <div className="test-rating">
                      {'★'.repeat(testimonial.rating)}
                    </div>
                    <p className="test-text">
                      "{testimonial.text}"
                    </p>
                  </div>
                ))}
              </div>

              <div className="proc-test-controls">
                <button className="slider-btn-small" onClick={prevSlide}>&lt;</button>
                <button className="slider-btn-small" onClick={nextSlide}>&gt;</button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
