import React from 'react';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section className="testimonials section-padding" id="resultados">
      <div className="testimonials-bg-quote">”</div>
      <div className="container testimonials-container">
        
        <div className="testimonials-left">
          <h2 className="stats-title">TESTIMONIOS</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">+1500</span>
              <span className="stat-label">Cirugías</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5</span>
              <span className="stat-label">Estrellas</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">+180</span>
              <span className="stat-label">Reviews</span>
            </div>
          </div>
        </div>

        <div className="testimonials-right">
          <div className="testimonials-cards">
            <div className="review-card">
              <div className="review-header">
                <div className="reviewer-avatar m-initial">M</div>
                <div className="reviewer-info">
                  <h4>Marzia Fernández</h4>
                  <span>15 Enero 2026</span>
                </div>
                <div className="google-icon">
                   <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                </div>
              </div>
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                Operarme con el Dr. Mendoza fue mi mejor decisión. Totalmente agradecida con él y su equipo de trabajo, estuvieron siempre muy pendientes de mí. Los mejores❤️
              </p>
            </div>

            <div className="review-card">
              <div className="review-header">
                <div className="reviewer-avatar l-initial">L</div>
                <div className="reviewer-info">
                  <h4>Lexis Nuñez</h4>
                  <span>3 Abril 2026</span>
                </div>
              </div>
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                Excelente atención, excelente servicio, excelente trato y lo más importante resultados increíbles con excelente cirujano Dr Delkis Mendoza recomendado...
              </p>
              <a href="#" className="read-more">Leer más</a>
            </div>
          </div>
          
          <div className="carousel-nav">
            <button className="nav-btn prev">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button className="nav-btn next">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
}
