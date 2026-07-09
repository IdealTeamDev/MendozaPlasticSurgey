import React from 'react';
import Link from 'next/link';
import './Financing.css';

interface FinancingProps {
  title?: string;
  text?: string;
  buttonText?: string;
}

export default function Financing({ title, text, buttonText }: FinancingProps) {
  return (
    <section className="financing-section">
      <div className="financing-overlay"></div>
      <div className="container financing-container">
        {title ? (
          <h2 className="financing-title" dangerouslySetInnerHTML={{ __html: title }} />
        ) : (
          <h2 className="financing-title">Financiación para cirugía plástica</h2>
        )}
        
        {text ? (
          <div className="financing-text" dangerouslySetInnerHTML={{ __html: text }} style={{ color: 'var(--white)', textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem', lineHeight: '1.6' }} />
        ) : (
          <p className="financing-text" style={{ color: 'var(--white)', textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem', lineHeight: '1.6' }}>
            Tu bienestar y confianza no tienen por qué esperar. En Mendoza Plastic Surgery ponemos a tu disposición opciones de financiamiento flexibles que te ayudarán a acceder a tu cirugía plástica o tratamiento estético de forma más sencilla.
          </p>
        )}
        
        <Link href="/financiamiento" className="btn btn-primary financing-btn">{buttonText || 'Conoce más'}</Link>
      </div>
    </section>
  );
}
