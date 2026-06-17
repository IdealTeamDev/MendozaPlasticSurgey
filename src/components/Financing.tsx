import React from 'react';
import './Financing.css';

export default function Financing() {
  return (
    <section className="financing-section">
      <div className="financing-overlay"></div>
      <div className="container financing-container">
        <h2 className="financing-title">CONOCE LAS OPCIONES QUE TENEMOS DE FINANCIAMIENTO<br/><span>PARA TI</span></h2>
        <button className="btn btn-primary financing-btn">Aplica para tu financiamiento</button>
      </div>
    </section>
  );
}
