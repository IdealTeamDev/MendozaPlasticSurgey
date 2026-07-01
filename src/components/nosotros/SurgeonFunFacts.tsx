import React from 'react';
import './SurgeonFunFacts.css';

interface SurgeonFunFactsProps {
  funfactsText?: string;
  funfactsImage?: string;
}

export default function SurgeonFunFacts({ funfactsText, funfactsImage }: SurgeonFunFactsProps) {
  return (
    <section className="surgeon-funfacts-section section-padding">
      <div className="container surgeon-funfacts-container">
        
        <div className="funfacts-left">
          <h3 className="funfacts-subtitle">DATOS CURIOSOS DEL</h3>
          <h2 className="funfacts-title">DOCTOR MENDOZA</h2>
          {funfactsText ? (
            <div className="funfacts-text" dangerouslySetInnerHTML={{ __html: funfactsText }} />
          ) : (
            <p className="funfacts-text">
              En sus momentos de descanso, el Dr. Mendoza disfruta de la compañía de su esposa y sus dos hijas. Amante de su familia, de igual, de todo tipo de música, meditar, el ejercicio y el velero.
            </p>
          )}
        </div>

        <div className="funfacts-right">
          <div className="funfacts-image-card">
            {funfactsImage ? (
              <img src={funfactsImage} alt="Datos Curiosos" style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block' }} />
            ) : (
              <div className="funfacts-img-placeholder">
                <span>(Imagen Datos Curiosos)</span>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
