import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Gracias por contactarnos | Mendoza Plastic Surgery',
  description: 'Hemos recibido tu información y nos pondremos en contacto contigo pronto.',
};

export default function ThankYouPage() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: '#f9f9f9'
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '3rem',
        borderRadius: '8px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
        maxWidth: '600px',
        width: '100%'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          backgroundColor: 'var(--primary, #d4af37)',
          color: '#fff',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 auto 2rem auto'
        }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--black, #1a1a1a)' }}>¡Gracias por contactarnos!</h1>
        <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2rem', lineHeight: '1.6' }}>
          Hemos recibido tu solicitud. Nuestro equipo revisará tu información y se pondrá en contacto contigo muy pronto para agendar tu consulta.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{
            padding: '12px 24px',
            backgroundColor: 'var(--black, #1a1a1a)',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '4px',
            fontWeight: '600'
          }}>
            Volver al inicio
          </Link>
          <Link href="/procedimientos" style={{
            padding: '12px 24px',
            backgroundColor: 'transparent',
            border: '1px solid var(--black, #1a1a1a)',
            color: 'var(--black, #1a1a1a)',
            textDecoration: 'none',
            borderRadius: '4px',
            fontWeight: '600'
          }}>
            Ver procedimientos
          </Link>
        </div>
      </div>
    </div>
  );
}
