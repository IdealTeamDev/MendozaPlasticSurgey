import React from 'react';
import './MedicalCenterServices.css';

export default function MedicalCenterServices() {
  return (
    <section className="mc-services-section section-padding">
      <div className="container">
        <h2 className="mc-services-title text-center">CONOCE MÁS AQUÍ</h2>
        
        <div className="mc-services-grid">
          
          {/* Card 1 */}
          <div className="mc-service-card">
            <div className="mc-service-bg">
              <div className="mc-img-placeholder">
                <span>(Img Cuerpo)</span>
              </div>
            </div>
            <div className="mc-service-overlay"></div>
            <div className="mc-service-content">
              <h3 className="mc-service-name">CUERPO</h3>
              <button className="mc-service-btn">CONOCE MÁS AQUÍ</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="mc-service-card">
            <div className="mc-service-bg">
              <div className="mc-img-placeholder">
                <span>(Img Tratamientos)</span>
              </div>
            </div>
            <div className="mc-service-overlay"></div>
            <div className="mc-service-content">
              <h3 className="mc-service-name">TRATAMIENTOS</h3>
              <button className="mc-service-btn">CONOCE MÁS AQUÍ</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="mc-service-card">
            <div className="mc-service-bg">
              <div className="mc-img-placeholder">
                <span>(Img Inyectables)</span>
              </div>
            </div>
            <div className="mc-service-overlay"></div>
            <div className="mc-service-content">
              <h3 className="mc-service-name">INYECTABLES</h3>
              <button className="mc-service-btn">CONOCE MÁS AQUÍ</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
