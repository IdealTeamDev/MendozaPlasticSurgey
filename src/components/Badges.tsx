"use client";

import React, { useState } from 'react';
import './Badges.css';

export default function Badges() {
  const BADGES = [
    { id: 1, type: 'blue', icon: 'M', title: 'Top Surgeon' },
    { id: 2, type: 'gold', icon: '★', title: 'Excellence' },
    { id: 3, type: 'blue', icon: '1', title: 'Certified' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % BADGES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? BADGES.length - 1 : prev - 1));
  };

  return (
    <section className="badges-section">
      <div className="container">
        <div className="badges-carousel">
          <button className="carousel-arrow prev-arrow" onClick={prevSlide} aria-label="Previous">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          <div className="badges-viewport">
            <div 
              className="badges-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {BADGES.map(b => (
                <div key={b.id} className="badge-slide">
                  <div className="badge-item">
                    <div className={`badge-placeholder ${b.type}`}>
                      <span className="badge-icon">{b.icon}</span>
                    </div>
                    <h3 className="badge-title">{b.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-arrow next-arrow" onClick={nextSlide} aria-label="Next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
