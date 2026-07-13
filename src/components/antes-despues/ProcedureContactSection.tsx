import React from 'react';
import './ProcedureContactSection.css';

export default function ProcedureContactSection() {
  return (
    <section className="proc-contact-section">
      <div className="proc-contact-bg">
        {/* Background image goes here */}
        <div className="proc-contact-overlay"></div>
      </div>

      <div className="container proc-contact-container">
        
        <div className="proc-contact-left">
          <h2 className="proc-contact-title">¡EL CAMBIO QUE QUIERES ES AHORA!</h2>
          <p className="proc-contact-text">
            Reserva una valoración con el Dr. Mendoza, cirujano plástico en Atlanta y conoce sobre tu procedimiento.
          </p>
          <p className="proc-contact-text">
            Descubre el potencial de tu belleza en nuestras modernas instalaciones con el mejor equipo de profesionales de Mendoza.
          </p>
        </div>

        <div className="proc-contact-right">
          <div className="proc-form-card">
            <form className="proc-form" action="https://formsubmit.co/manuel@idealteamcolombia.com" method="POST">
              <input type="hidden" name="_subject" value="Nuevo contacto desde Procedimientos - Mendoza Plastic Surgery" />
              <div className="form-group">
                <label>Nombre*</label>
                <input type="text" name="nombre" placeholder="Ingresa tu nombre" required />
              </div>
              <div className="form-group">
                <label>Correo electrónico*</label>
                <input type="email" name="email" placeholder="Ingresa tu correo electrónico" required />
              </div>
              <div className="form-group">
                <label>Celular*</label>
                <input type="tel" name="celular" placeholder="Ingresa tu número de celular" required />
              </div>
              <div className="form-group">
                <label>Procedimiento deseado*</label>
                <select name="procedimiento" required defaultValue="">
                  <option value="" disabled>Selecciona un procedimiento</option>
                  <option value="aumento">Aumento de senos</option>
                  <option value="reduccion">Reducción de senos</option>
                  <option value="levantamiento">Levantamiento de senos</option>
                </select>
              </div>
              <div className="form-checkbox">
                <input type="checkbox" id="proc-terms" name="terminos" required />
                <label htmlFor="proc-terms">Acepto política de tratamiento de datos</label>
              </div>
              <button type="submit" className="btn submit-btn">Agenda tu consulta</button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
