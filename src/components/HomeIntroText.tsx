import React from 'react';
import './HomeIntroText.css';

interface HomeIntroTextProps {
  subtitle?: string;
  content?: string;
}

export default function HomeIntroText({ subtitle, content }: HomeIntroTextProps) {
  const defaultContent = `<p>Mendoza Plastic Surgery es un centro de cirugía plástica en Atlanta que trabaja bajo altos estándares de calidad y seguridad. Cuenta con instalaciones modernas, tecnología de vanguardia y un equipo de profesionales bilingües comprometidos con brindarte una atención integral en cada etapa de tu proceso. La clínica es liderada por el Dr. Delquis Mendoza, cirujano de alta calidad.</p><p>Somos especialistas en cirugías mamarias, corporales y faciales, así como en procedimientos inyectables y tratamientos estéticos para el rostro y el cuerpo, ofreciendo soluciones personalizadas para cada paciente.</p>`;

  if (!content && !subtitle && !defaultContent) return null;

  return (
    <section className="home-intro-section">
      <div className="container">
        {subtitle && (
          <h2 className="home-intro-subtitle">{subtitle}</h2>
        )}
        <div 
          className="home-intro-content"
          dangerouslySetInnerHTML={{ __html: content || defaultContent }}
        />
      </div>
    </section>
  );
}
