import React from 'react';
import Link from 'next/link';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">M</span>
              <span className="logo-text">MENDOZA</span>
            </div>
            <p className="footer-desc">
              Un enfoque personalizado a la medicina 
              estética. Con nuestro cirujano plástico,
              Dr. Delouis R. Mendoza, descubrirás un
              plan de tratamiento diseñado 
              especialmente para ti.
            </p>
          </div>

          <div className="footer-links">
            <Link href="/">INICIO</Link>
            <Link href="/nosotros">NOSOTROS</Link>
            <Link href="/procedimientos">PROCEDIMIENTOS</Link>
            <Link href="/contacto">CONTACTO</Link>
          </div>

          <div className="footer-contact">
            <div className="contact-item">
              <span className="icon">📞</span>
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="contact-item">
              <span className="icon">📍</span>
              <span>1234 Medical Blvd, Suite 100<br/>Houston, TX 77002</span>
            </div>
          </div>

          <div className="footer-newsletter">
            <h4>Suscríbete a nuestro boletín</h4>
            <div className="newsletter-input">
              <input type="email" placeholder="Correo electrónico" />
              <button>→</button>
            </div>
            <div className="social-links">
              <a href="#" className="social-icon">T</a>
              <a href="#" className="social-icon">I</a>
              <a href="#" className="social-icon">F</a>
            </div>
          </div>

        </div>
        
        <div className="footer-bottom">
          <p>© 2026 Mendoza Plastic Surgery. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
