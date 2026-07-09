import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './About.css';

interface AboutProps {
  subtitle?: string;
  title?: string;
  text?: string;
  imageUrl?: string;
}

export default function About({ subtitle, title, text, imageUrl }: AboutProps) {
  return (
    <section className="about section-padding" id="nosotros">
      <div className="container about-container">
        <div className="about-image-wrapper">
          <div className="about-image-mask">
            <Image 
              src={imageUrl || "/doctor.png"} 
              alt={title || "Dr. Delquis R. Mendoza"} 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="about-img" 
            />
          </div>
        </div>
        
        <div className="about-content">
          <h2 className="about-subtitle">{subtitle || 'Cirujano plástico en Atlanta, GA'}</h2>
          <h2 className="about-title">{title || 'Dr. Delquis R. Mendoza, M.S., M.D.'}</h2>
          
          {text ? (
            <div className="about-text" dangerouslySetInnerHTML={{ __html: text }} />
          ) : (
            <div className="about-text">
              <p>
                El Dr. Mendoza es un cirujano general por American Board of Surgery con especialización en cirugía plástica y reconstructiva de la Universidad de Tennessee en Chattanooga. Médico especialista de alta calidad con experiencia comprobable en cirugía reconstructiva y cosmética, se mantiene a la vanguardia de las técnicas y tecnología para brindar seguridad de cada paciente, siendo esto una prioridad.
              </p>
            </div>
          )}
          
          <Link href="/centro-medico" className="btn btn-primary">Conocer más</Link>
        </div>
      </div>
    </section>
  );
}
