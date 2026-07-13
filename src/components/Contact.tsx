"use client";

import React from 'react';
import Image from 'next/image';
import './Contact.css';

interface ContactProps {
  subtitle?: string;
  titleBold?: string;
  text?: string;
}

export default function Contact({ subtitle, titleBold, text }: ContactProps) {
  return (
    <section className="contact section-padding" id="contacto">
      <Image 
        src="/hero_bg.png?v=3" 
        alt="Contact background"
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', zIndex: 0, filter: 'grayscale(100%) blur(4px)', opacity: 0.8 }}
      />
      <div className="contact-bg-shape">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" width="100%" height="100%">
          <path fill="var(--white)" d="M 0 0 L 100 0 L 100 35 L 60 35 C 45 35, 45 95, 30 95 L 0 95 Z" />
        </svg>
      </div>
      <div className="container contact-container">
        
        <div className="contact-info">
          <h2 className="contact-title" style={{ color: 'var(--black)' }}>
            {titleBold ? (
              <span className="contact-title-bold" style={{ fontSize: '2.5rem', lineHeight: '1.2', color: 'var(--black)' }} dangerouslySetInnerHTML={{ __html: titleBold }} />
            ) : (
              <span className="contact-title-bold" style={{ fontSize: '2.5rem', lineHeight: '1.2', color: 'var(--black)' }}>Programa una consulta en Mendoza Plastic Surgery</span>
            )}
          </h2>
          {text ? (
            <div className="contact-text-wrapper" dangerouslySetInnerHTML={{ __html: text }} />
          ) : (
            <p className="contact-text">
              Después de diligenciar el formulario, uno de nuestros asesores se pondrá en contacto contigo para fijar la fecha de tu consulta.
            </p>
          )}
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Nombre*</label>
              <input type="text" placeholder="Ingresa tu nombre acá" />
            </div>
            <div className="form-group">
              <label>Correo electrónico*</label>
              <input type="email" placeholder="Ingresa tu correo electrónico acá" />
            </div>
            <div className="form-group error-state">
              <label>Celular*</label>
              <input type="tel" placeholder="Ingresa tu número de celular acá" className="input-error" />
              <span className="error-msg">Campo requerido</span>
            </div>
            <div className="form-group">
              <label>Procedimiento deseado*</label>
              <select defaultValue="">
                <option value="" disabled>Selecciona un procedimiento</option>
                <option value="cuerpo">Cirugía de cuerpo</option>
                <option value="rostro">Cirugía de rostro</option>
                <option value="senos">Cirugía de senos</option>
                <option value="inyectables">Inyectables</option>
              </select>
            </div>
            <div className="form-checkbox">
              <input type="checkbox" id="policy" />
              <label htmlFor="policy">Acepto política de tratamiento de datos</label>
            </div>
            <button type="submit" className="btn submit-btn-black">Agenda tu consulta</button>
          </form>
        </div>
        
      </div>
    </section>
  );
}
