import React from 'react';
import './ContactMap.css';

export default function ContactMap() {
  return (
    <section className="contact-map-section section-padding">
      <div className="container">
        <div className="map-wrapper">
          {/* Aquí se usaría el iframe real de Google Maps. 
              Por ahora usamos un div de fondo con una imagen o color que simula el mapa. */}
          <div className="map-placeholder">
            <span className="map-text">(Mapa de Google Placeholder - Duluth, GA)</span>
          </div>
          {/* <iframe 
            src="https://www.google.com/maps/embed?pb=..." 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
        </div>
      </div>
    </section>
  );
}
