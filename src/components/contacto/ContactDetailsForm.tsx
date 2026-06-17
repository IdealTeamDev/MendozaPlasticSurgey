import React from 'react';
import './ContactDetailsForm.css';

export default function ContactDetailsForm() {
  return (
    <section className="contact-details-section section-padding">
      <div className="container contact-details-container">
        
        <div className="contact-info-list">
          <div className="info-item">
            <div className="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <div className="info-text">
              <h4>UBICACIÓN</h4>
              <p>3970 Rogers Bridge Rd, Duluth,<br/>GA 30097, Estados Unidos</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <div className="info-text">
              <h4>TELÉFONO</h4>
              <p>+1 770-545-8373</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <div className="info-text">
              <h4>EMAIL</h4>
              <p>info@mendozoplasticsurgery.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <div className="info-text">
              <h4>HORARIOS</h4>
              <p>Lun - Vier 9:00 a.m. - 5:00 p.m.</p>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form">
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
              <input type="tel" placeholder="Ingresa tu número de celular acá" className="error-input" />
              <span className="error-msg">Campo requerido</span>
            </div>

            <div className="form-group">
              <label>Procedimiento deseado*</label>
              <div className="select-wrapper">
                <select defaultValue="">
                  <option value="" disabled>Selecciona un procedimiento</option>
                  <option value="senos">Cirugía de Senos</option>
                  <option value="cuerpo">Contorno Corporal</option>
                  <option value="rostro">Rejuvenecimiento Facial</option>
                </select>
                <span className="select-arrow">▼</span>
              </div>
            </div>

            <div className="form-checkbox">
              <input type="checkbox" id="policy" />
              <label htmlFor="policy">Acepto política de tratamiento de datos</label>
            </div>

            <button type="submit" className="submit-btn">Agenda tu consulta</button>
          </form>
        </div>

      </div>
    </section>
  );
}
