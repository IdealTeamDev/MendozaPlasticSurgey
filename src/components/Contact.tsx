"use client";

import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact section-padding" id="contacto">
      <div className="container contact-container">
        
        <div className="contact-info">
          <h2 className="contact-title">EL CAMBIO QUE QUERÍAS<br/>¡AHORA!</h2>
          <p className="contact-text">
            Mendoza Plastic Surgery es la respuesta para las que 
            quieren verse mejor. Te ofrecemos una atención 
            personalizada.
          </p>
          <p className="contact-text">
            No esperes a que pasen los años o más días. Nosotras 
            tenemos los planes de pago que necesitas. Da un clic y 
            luce como tú querías.
          </p>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Nombre</label>
              <input type="text" placeholder="Escribe tu nombre" />
            </div>
            <div className="form-group">
              <label>Correo Electrónico</label>
              <input type="email" placeholder="Escribe tu correo" />
            </div>
            <div className="form-group">
              <label>Celular</label>
              <input type="tel" placeholder="Escribe tu número de celular" />
            </div>
            <div className="form-group">
              <label>Procedimiento de interés</label>
              <select defaultValue="">
                <option value="" disabled>Selecciona el procedimiento de interés</option>
                <option value="cuerpo">Cirugía de cuerpo</option>
                <option value="rostro">Cirugía de rostro</option>
                <option value="senos">Cirugía de senos</option>
                <option value="inyectables">Inyectables</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">Agendar tu consulta</button>
          </form>
        </div>
        
      </div>
    </section>
  );
}
