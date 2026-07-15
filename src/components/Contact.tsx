"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import './Contact.css';

interface ContactProps {
  subtitle?: string;
  titleBold?: string;
  text?: string;
}

export default function Contact({ subtitle, titleBold, text }: ContactProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      nombre: formData.get('nombre'),
      email: formData.get('email'),
      celular: formData.get('celular'),
      procedimiento: formData.get('procedimiento'),
      formSource: 'Sección Principal (Contact)'
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push('/thank-you');
      } else {
        alert('Hubo un error al enviar el mensaje. Por favor intenta nuevamente.');
      }
    } catch (error) {
      console.error(error);
      alert('Hubo un error de red. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact section-padding" id="contacto">
      <Image 
        src="/hero_bg.png" 
        alt="Contact background"
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', zIndex: 0, opacity: 0.8 }}
      />
      <div className="contact-bg-shape">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" width="100%" height="100%">
          <path fill="var(--white)" d="M 0 0 L 100 0 L 100 35 L 60 35 C 45 35, 45 95, 30 95 L 0 95 Z" />
        </svg>
      </div>
      <div className="container contact-container">
        
        <div className="contact-info">
          <h1 className="contact-title" style={{ color: 'var(--black)', fontSize: '2.5rem', lineHeight: '1.2', fontWeight: 600, marginBottom: '1rem' }}>
            {titleBold ? (
              <span dangerouslySetInnerHTML={{ __html: titleBold }} />
            ) : (
              "Mendoza Plastic Surgery"
            )}
          </h1>
          {text ? (
            <div className="contact-text-wrapper" dangerouslySetInnerHTML={{ __html: text }} />
          ) : (
            <div className="contact-text">
              <p style={{ fontWeight: 600, marginBottom: '1rem', fontSize: '1.1rem' }}>
                Elegir una experiencia basada en la seguridad, la confianza y la personalización.
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.6' }}>
                <li style={{ marginBottom: '0.5rem' }}>Cirujano plástico profesional con amplia experiencia</li>
                <li style={{ marginBottom: '0.5rem' }}>Equipo profesional bilingües</li>
                <li style={{ marginBottom: '0.5rem' }}>Acompañamiento antes, durante y después de tu procedimiento</li>
                <li style={{ marginBottom: '0.5rem' }}>Instalaciones modernas y tecnología de última generación.</li>
              </ul>
              <p style={{ lineHeight: '1.6' }}>
                Más que realizar una cirugía, nuestro compromiso es brindarte una atención cercana, resolver todas tus dudas y acompañarte para que vivas el proceso con tranquilidad y confianza.
              </p>
            </div>
          )}
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombre*</label>
              <input type="text" name="nombre" placeholder="Ingresa tu nombre acá" required />
            </div>
            <div className="form-group">
              <label>Correo electrónico*</label>
              <input type="email" name="email" placeholder="Ingresa tu correo electrónico acá" required />
            </div>
            <div className="form-group">
              <label>Celular*</label>
              <input type="tel" name="celular" placeholder="Ingresa tu número de celular acá" required />
            </div>
            <div className="form-group">
              <label>Procedimiento deseado*</label>
              <select name="procedimiento" defaultValue="" required>
                <option value="" disabled>Selecciona un procedimiento</option>
                <option value="cuerpo">Cirugía de cuerpo</option>
                <option value="rostro">Cirugía de rostro</option>
                <option value="senos">Cirugía de senos</option>
                <option value="inyectables">Inyectables</option>
              </select>
            </div>
            <div className="form-checkbox">
              <input type="checkbox" id="policy" name="terminos" required />
              <label htmlFor="policy">Acepto política de tratamiento de datos</label>
            </div>
            <button type="submit" className="btn submit-btn-black" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Agenda tu consulta'}
            </button>
          </form>
        </div>
        
      </div>
    </section>
  );
}
