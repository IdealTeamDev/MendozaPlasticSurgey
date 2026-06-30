import React from 'react';
import Image from 'next/image';
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
            <div className="about-image-logo">
              <span>MENDOZA</span>
            </div>
          </div>
        </div>
        
        <div className="about-content">
          <p className="about-subtitle">{subtitle || 'CIRUJANO PLÁSTICO'}</p>
          <h2 className="about-title">{title || 'DELQUIS R. MENDOZA MS MD'}</h2>
          
          {text ? (
            <div className="about-text" dangerouslySetInnerHTML={{ __html: text }} />
          ) : (
            <div className="about-text">
              <p>
                El Dr. Delquis Mendoza es un cirujano plástico que se dedica a la 
                cirugía estética y reconstructiva. Realizó sus estudios de cirugía general y 
                especialización en la Universidad de Texas en Galveston, uno de los programas 
                más reconocidos de la nación.
              </p>
              <p>
                Durante su entrenamiento, el Dr. Mendoza se enfocó en comprender las 
                necesidades estéticas y funcionales de cada paciente, brindando resultados 
                naturales y armónicos.
              </p>
            </div>
          )}
          
          <button className="btn btn-primary">Conocer más</button>
        </div>
      </div>
    </section>
  );
}
