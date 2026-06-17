import React from 'react';
import './ProcedureIntro.css';

interface ProcedureIntroProps {
  showQuickFacts?: boolean;
}

export default function ProcedureIntro({ showQuickFacts = true }: ProcedureIntroProps) {
  return (
    <section className="proc-intro-section">
      <div className="container">
        
        <div className="proc-intro-layout">
          
          {/* Left Column: Text & Facts */}
          <div className="proc-intro-text-col">
            <h2 className="proc-intro-title">LIPOSUCCIÓN EN ATLANTA</h2>
            
            <p className="proc-intro-desc">
              La liposucción es una cirugía que busca eliminar excesos de grasa en diferentes áreas del cuerpo. Se realiza mediante la inserción de una cánula bajo la piel a través de incisiones que se hacen cerca de las áreas donde se localiza la grasa. La grasa se remueve entonces succionándola, dando como resultado un contorno corporal más definido y estilizado.
            </p>
            <p className="proc-intro-desc">
              La liposucción es útil para personas que presentan mucha grasa en algunas partes y poca en otras, lo que distorsiona las proporciones del cuerpo.
            </p>

            <div className="proc-intro-actions">
              <button className="btn proc-btn-black">Agenda tu consulta</button>
              <button className="btn proc-btn-black">Financia aquí</button>
            </div>

            {showQuickFacts && (
              <div className="proc-quick-facts">
                <div className="fact-item">
                  <span className="fact-label">TIPO DE ANESTESIA</span>
                  <span className="fact-value">Anestesia General</span>
                </div>
                <div className="fact-item">
                  <span className="fact-label">RECUPERACIÓN</span>
                  <span className="fact-value">2 a 4 Semanas</span>
                </div>
                <div className="fact-item">
                  <span className="fact-label">TIEMPO DE PROCEDIMIENTO</span>
                  <span className="fact-value">Depende del Área</span>
                </div>
                <div className="fact-item">
                  <span className="fact-label">RESULTADOS</span>
                  <span className="fact-value">Inmediatos</span>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Image */}
          <div className="proc-intro-img-col">
            <div className="proc-intro-img-wrapper">
              <div className="proc-intro-img-placeholder">
                (Foto Liposucción)
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
