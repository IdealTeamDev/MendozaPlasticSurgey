import React from 'react';
import Link from 'next/link';
import './ProcedureIntro.css';

interface ProcedureIntroProps {
  showQuickFacts?: boolean;
  title?: string;
  description?: string;
  quickFacts?: { label: string; value: string }[];
  imageUrl?: string;
}

export default function ProcedureIntro({ 
  showQuickFacts = true,
  title = "LIPOSUCCIÓN EN ATLANTA",
  description = "La liposucción es una cirugía que busca eliminar excesos de grasa en diferentes áreas del cuerpo...",
  quickFacts = [
    { label: "TIPO DE ANESTESIA", value: "Anestesia General" },
    { label: "RECUPERACIÓN", value: "2 a 4 Semanas" },
    { label: "TIEMPO DE PROCEDIMIENTO", value: "Depende del Área" },
    { label: "RESULTADOS", value: "Inmediatos" }
  ],
  imageUrl
}: ProcedureIntroProps) {
  return (
    <section className="proc-intro-section">
      <div className="container">
        
        <div className="proc-intro-layout">
          
          {/* Left Column: Text & Facts */}
          <div className="proc-intro-text-col">
            <h2 className="proc-intro-title">{title}</h2>
            
            <div className="proc-intro-desc" dangerouslySetInnerHTML={{ __html: description }}></div>

            <div className="proc-intro-actions">
              <Link href="/contacto" className="btn proc-btn-black">Agenda tu consulta</Link>
              <Link href="/contacto" className="btn proc-btn-black">Financia aquí</Link>
            </div>

            {showQuickFacts && quickFacts && quickFacts.length > 0 && (
              <div className="proc-quick-facts">
                {quickFacts.map((fact, index) => (
                  <div className="fact-item" key={index}>
                    <span className="fact-label">{fact.label}</span>
                    <span className="fact-value">{fact.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Image */}
          <div className="proc-intro-img-col">
            <div className="proc-intro-img-wrapper">
              {imageUrl ? (
                <img src={imageUrl} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <div className="proc-intro-img-placeholder">
                  (Foto del Procedimiento)
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
