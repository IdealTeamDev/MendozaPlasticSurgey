import React from 'react';
import './Badges.css';

export default function Badges() {
  return (
    <section className="badges-section">
      <div className="container">
        <div className="badges-container">
          <button className="carousel-btn prev-btn mobile-only">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line></svg>
          </button>
          
          <div className="badge-item">
            <div className="badge-placeholder blue">
              <span className="badge-icon">M</span>
            </div>
          </div>
          <div className="badge-item">
            <div className="badge-placeholder gold">
              <span className="badge-icon">★</span>
            </div>
          </div>
          
          <button className="carousel-btn next-btn mobile-only">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
