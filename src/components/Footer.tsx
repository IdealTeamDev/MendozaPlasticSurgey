"use client";

import React from 'react';
import Link from 'next/link';
import './Footer.css';

interface SocialLink {
  red_social: string;
  url: string;
}

interface FooterProps {
  logoUrl?: string | null;
  description?: string;
  phone?: string;
  address?: string;
  socialLinks?: SocialLink[];
}

export default function Footer({ logoUrl, description, phone, address, socialLinks }: FooterProps) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          <div className="footer-col-left">
            <div className="footer-logo">
              {logoUrl ? (
                <img src={`${logoUrl}?v=2`} alt="Mendoza Plastic Surgery Logo" style={{ height: '40px', objectFit: 'contain', marginBottom: '15px' }} />
              ) : (
                <img src="/default-logo.png?v=2" alt="Mendoza Plastic Surgery Logo" style={{ height: '40px', objectFit: 'contain', marginBottom: '15px' }} />
              )}
            </div>
            <p className="footer-desc">
              {description || 'Buscamos construir relaciones duraderas, basadas en la confianza y el cuidado personalizado. Nos adaptamos a las necesidades de cada paciente con el fin de cumplir tus expectativas. Nuestra prioridad es tu satisfacción y bienestar.'}
            </p>
          </div>

          <div className="footer-col-middle">
            <div className="footer-nav">
              <Link href="/cirujano">DR. MENDOZA</Link>
              <Link href="/centro-medico">MEDICAL CENTER</Link>
              <Link href="/procedimientos">PROCEDIMIENTOS</Link>
              <Link href="/contacto">CONTACTO</Link>
            </div>
            <div className="footer-contact-info">
              <div className="contact-item">
                <span className="icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </span>
                <span>{phone || 'Tel. (+1) 770-545-8373'}</span>
              </div>
              <div className="contact-item">
                <span className="icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </span>
                <span>{address || '3970 Rogers Bridge Rd, Duluth, GA 30097'}</span>
              </div>
            </div>
          </div>

          <div className="footer-col-right">
            <h4 className="newsletter-title">Suscríbete a nuestro boletín</h4>
            <form className="newsletter-form" action="https://formsubmit.co/manuel@idealteamcolombia.com" method="POST">
              <input type="hidden" name="_subject" value="Nuevo registro al boletín - Mendoza Plastic Surgery" />
              <input type="email" name="email" placeholder="Ingresa tu correo electrónico acá" required />
              <button type="submit">Enviar →</button>
            </form>
            <div className="social-icons">
              {socialLinks && socialLinks.length > 0 ? (
                socialLinks.map((social, idx) => (
                  <a href={social.url} target="_blank" rel="noopener noreferrer" className="social-icon" key={idx}>
                    {social.red_social === 'instagram' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    )}
                    {social.red_social === 'facebook' && (
                      <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.68a6.34 6.34 0 0 0 6.27 6.32 6.32 6.32 0 0 0 6.16-5.45V8a8.21 8.21 0 0 0 5 1.71V6.3a4.23 4.23 0 0 1-2.84-.61z"/></svg>
                    )}
                    {social.red_social === 'youtube' && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96C1 8.16 1 12 1 12s0 3.84.46 5.58a2.78 2.78 0 0 0 1.94 1.96c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96C23 15.84 23 12 23 12s0-3.84-.46-5.58zM9.54 15.56V8.44L15.81 12l-6.27 3.56z"/></svg>
                    )}
                    {social.red_social === 'pinterest' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.182 0 7.433 2.981 7.433 6.953 0 4.156-2.618 7.502-6.255 7.502-1.22 0-2.368-.634-2.763-1.385l-.752 2.868c-.272 1.043-1.009 2.35-1.5 3.159 1.194.37 2.473.57 3.795.57 6.627 0 11.99-5.367 11.99-11.987C24 5.367 18.644 0 12.017 0z"/></svg>
                    )}
                    {social.red_social === 'tiktok' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c-.01 1.75-.48 3.51-1.43 4.97-1.44 2.21-3.9 3.57-6.53 3.7-2.6.14-5.26-.64-7.05-2.43C-.19 19.8-.46 16.92.51 14.28c.95-2.58 3.32-4.4 6.06-4.78 1.34-.18 2.72-.03 3.99.38v4.13c-.92-.35-1.95-.42-2.9-.13-.8.24-1.48.8-1.89 1.52-.39.71-.47 1.57-.28 2.34.25.96 1.01 1.71 1.95 1.97 1.13.31 2.37.1 3.32-.57.87-.61 1.4-1.57 1.48-2.62V.02z"/></svg>
                    )}
                  </a>
                ))
              ) : (
                <>
                  <a href="#" className="social-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.68a6.34 6.34 0 0 0 6.27 6.32 6.32 6.32 0 0 0 6.16-5.45V8a8.21 8.21 0 0 0 5 1.71V6.3a4.23 4.23 0 0 1-2.84-.61z"/></svg>
                  </a>
                  <a href="#" className="social-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="#" className="social-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                </>
              )}
            </div>
          </div>

        </div>
        
        <div className="footer-bottom">
          <p>Copyright © 2026 Mendoza Plastic Surgery. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
