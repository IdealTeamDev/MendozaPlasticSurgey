import React from 'react';
import './ContactDetailsForm.css';

interface ContactDetailsFormProps {
  location?: string;
  phone?: string;
  email?: string;
  schedule?: string;
}

export default function ContactDetailsForm({ location, phone, email, schedule }: ContactDetailsFormProps) {
  return (
    <section className="contact-details-section section-padding">
      <div className="container contact-details-container">
        
        <div className="contact-info-list" style={{ justifyContent: 'center' }}>
          <div className="contact-text-block" style={{ marginBottom: '2rem' }}>
            <h1 style={{ color: 'var(--black)', fontSize: '2.5rem', lineHeight: '1.2', fontWeight: 600, marginBottom: '1rem' }}>Mendoza Plastic Surgery</h1>
            <p style={{ fontWeight: 600, marginBottom: '1rem', fontSize: '1.1rem', color: 'var(--black)' }}>
              Elegir una experiencia basada en la seguridad, la confianza y la personalización.
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: '1.6', color: '#555' }}>
              <li style={{ marginBottom: '0.5rem' }}>Cirujano plástico profesional con amplia experiencia</li>
              <li style={{ marginBottom: '0.5rem' }}>Equipo profesional bilingües</li>
              <li style={{ marginBottom: '0.5rem' }}>Acompañamiento antes, durante y después de tu procedimiento</li>
              <li style={{ marginBottom: '0.5rem' }}>Instalaciones modernas y tecnología de última generación.</li>
            </ul>
            <p style={{ lineHeight: '1.6', color: '#555' }}>
              Más que realizar una cirugía, nuestro compromiso es brindarte una atención cercana, resolver todas tus dudas y acompañarte para que vivas el proceso con tranquilidad y confianza.
            </p>
          </div>

          <div className="info-item">
            <div className="info-icon" style={{ alignSelf: 'center' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <div className="info-text">
              <h4>LOCACIÓN</h4>
              <p dangerouslySetInnerHTML={{ __html: location || '3970 Rogers Bridge Rd, Duluth,<br/>GA 30097, Estados Unidos' }}></p>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" action="https://formsubmit.co/manuel@idealteamcolombia.com" method="POST">
            <input type="hidden" name="_subject" value="Detalle de contacto - Mendoza Plastic Surgery" />
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
              <div className="select-wrapper">
                <select name="procedimiento" defaultValue="" required>
                  <option value="" disabled>Selecciona un procedimiento</option>
                  <option value="senos">Cirugía de Senos</option>
                  <option value="cuerpo">Contorno Corporal</option>
                  <option value="rostro">Rejuvenecimiento Facial</option>
                </select>
                <span className="select-arrow">▼</span>
              </div>
            </div>

            <div className="form-checkbox">
              <input type="checkbox" id="policy" name="terminos" required />
              <label htmlFor="policy">Acepto política de tratamiento de datos</label>
            </div>

            <button type="submit" className="submit-btn">Agenda tu consulta</button>
          </form>
        </div>

      </div>
    </section>
  );
}
