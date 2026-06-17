import React from 'react';
import './SurgeonFunFacts.css';

export default function SurgeonFunFacts() {
  return (
    <section className="surgeon-funfacts-section section-padding">
      <div className="container surgeon-funfacts-container">
        
        <div className="funfacts-left">
          <h3 className="funfacts-subtitle">DATOS CURIOSOS DEL</h3>
          <h2 className="funfacts-title">DOCTOR MENDOZA</h2>
          <p className="funfacts-text">
            En sus momentos de descanso, el Dr. Mendoza disfruta de la compañía de su esposa y sus dos hijas. Amante de su familia, de igual, de todo tipo de música, meditar, el ejercicio y el velero.
          </p>
        </div>

        <div className="funfacts-right">
          <div className="funfacts-image-card">
            <div className="funfacts-img-placeholder">
              <span>(Placeholder Familia)</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
