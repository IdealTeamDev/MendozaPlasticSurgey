import React from 'react';
import './ContactMap.css';

export default function ContactMap() {
  return (
    <section className="contact-map-section section-padding">
      <div className="container">
        <div className="map-wrapper">
          <iframe 
            src="https://maps.google.com/maps?q=Mendoza%20Plastic%20Surgery,%20Duluth,%20GA&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%" 
            height="100%" 
            style={{ border: 0, minHeight: '400px' }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mendoza Plastic Surgery Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
