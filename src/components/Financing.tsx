import React from 'react';
import './Financing.css';

interface FinancingProps {
  title?: string;
  buttonText?: string;
}

export default function Financing({ title, buttonText }: FinancingProps) {
  return (
    <section className="financing-section">
      <div className="financing-overlay"></div>
      <div className="container financing-container">
        {title ? (
          <h2 className="financing-title" dangerouslySetInnerHTML={{ __html: title }} />
        ) : (
          <h2 className="financing-title">CONOCE LAS OPCIONES QUE TENEMOS DE FINANCIAMIENTO<br/><span>PARA TI</span></h2>
        )}
        <button className="btn btn-primary financing-btn">{buttonText || 'Aplica para tu financiamiento'}</button>
      </div>
    </section>
  );
}
