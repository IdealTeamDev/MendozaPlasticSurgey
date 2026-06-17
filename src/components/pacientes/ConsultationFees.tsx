import React from 'react';
import './ConsultationFees.css';

export default function ConsultationFees() {
  return (
    <section className="consultation-fees-section section-padding">
      {/* Decorative background shapes */}
      <div className="bg-shape shape-left"></div>
      <div className="bg-shape shape-right"></div>

      <div className="container consultation-fees-container">
        <div className="consultation-header">
          <span className="consultation-subtitle">INFORMACIÓN SOBRE</span>
          <h2 className="consultation-title">CONSULTAS Y HONORARIOS QUIRÚRGICOS</h2>
        </div>

        <div className="fees-cards-wrapper">
          {/* Mobile navigation arrows */}
          <button className="fees-nav-btn prev mobile-only">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          <div className="fees-cards">
            {/* Card 1 */}
            <div className="fee-card">
              <div className="fee-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  <circle cx="9" cy="9" r="2"></circle>
                  <circle cx="15" cy="9" r="2"></circle>
                </svg>
              </div>
              <h3 className="fee-card-title">Consulta</h3>
              <p className="fee-card-text">
                Al momento de la reserva usted deberá realizar el pago de 50 dólares para agendar su cita, los cuales se aplicarán al costo total del procedimiento o cirugía en caso de continuar con el proceso.
              </p>
            </div>

            {/* Card 2 */}
            <div className="fee-card">
              <div className="fee-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className="fee-card-title">Cotización</h3>
              <p className="fee-card-text">
                En el momento de la consulta, en el valor total se incluirá los honorarios del cirujano y el anestesista, los costos del quirófano, los implantes y las prendas a utilizar.
              </p>
            </div>

            {/* Card 3 */}
            <div className="fee-card">
              <div className="fee-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="2" y1="10" x2="22" y2="10"></line>
                </svg>
              </div>
              <h3 className="fee-card-title">Formas de pago</h3>
              <p className="fee-card-text">
                Se recibe efectivo, cheques personales, cheques de caja, giros postales y todas las principales tarjetas de crédito (VISA, MasterCard, Discover y American Express).
                <br/><br/>
                <strong>Se ofrece un descuento del 3 % por pago en efectivo.</strong>
              </p>
            </div>
          </div>

          <button className="fees-nav-btn next mobile-only">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>

        <div className="consultation-footer text-center">
          <a href="#politica" className="policy-link">Política de tratamiento</a>
        </div>
      </div>
    </section>
  );
}
