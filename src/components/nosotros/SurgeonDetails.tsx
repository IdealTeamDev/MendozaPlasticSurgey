"use client";

import React, { useState } from 'react';
import './SurgeonDetails.css';

interface SurgeonDetailsProps {
  estudiosText?: string;
  estudiosImage?: string;
  certificacionesText?: string;
  certificacionesImage?: string;
  clinicaText?: string;
  clinicaImage?: string;
}

export default function SurgeonDetails({
  estudiosText,
  estudiosImage,
  certificacionesText,
  certificacionesImage,
  clinicaText,
  clinicaImage
}: SurgeonDetailsProps) {
  const [activeTab, setActiveTab] = useState('biografia');

  return (
    <section className="surgeon-details-section section-padding">
      <div className="container">
        
        <div className="surgeon-tabs-header">
          <button 
            className={`surgeon-tab-btn ${activeTab === 'biografia' ? 'active' : ''}`}
            onClick={() => setActiveTab('biografia')}
          >
            BIOGRAFÍA
          </button>
          <button 
            className={`surgeon-tab-btn ${activeTab === 'estudios' ? 'active' : ''}`}
            onClick={() => setActiveTab('estudios')}
          >
            ESTUDIOS
          </button>
          <button 
            className={`surgeon-tab-btn ${activeTab === 'clinica' ? 'active' : ''}`}
            onClick={() => setActiveTab('clinica')}
          >
            CLÍNICA
          </button>
        </div>

        <div className="surgeon-tabs-content">
          {activeTab === 'biografia' && (
            <div className="surgeon-tab-pane fade-in">
              <div className="surgeon-pane-left">
                <div className="surgeon-pane-image-card">
                  {certificacionesImage ? (
                    <img src={certificacionesImage} alt="Biografía" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div className="surgeon-pane-img-placeholder">
                      <span>(Imagen Biografía)</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="surgeon-pane-right surgeon-pane-right-two-cols">
                {certificacionesText ? (
                  <div dangerouslySetInnerHTML={{ __html: certificacionesText.replace(/universidad\.[\s\S]*?Después/g, "universidad.</p><p style=\"break-before: column;\">Después") }} />
                ) : (
                  <div>
                    <p>
                      El Dr. Mendoza es originario de Barranquilla, Colombia. A la edad de 16 años emigró a los Estados Unidos, donde gracias a su vocación por la medicina heredada de sus padres, también profesionales de la salud, completó sus estudios en pre medicina becado con la Hope Scholarship. Al finalizar, consiguió entrar y completar una maestría en Biología Molecular en la misma universidad.
                    </p>
                    <p>
                      Después de su maestría, fue aceptado en la escuela de medicina Morehouse School of Medicine en Atlanta, Georgia. Allí completó sus estudios médicos con distinción Cum Laude donde se dio cuenta de su pasión por la cirugía y terminó su residencia en cirugía general en Wellstar Atlanta Medical Center, un hospital comunitario de trauma nivel 1 donde aprendió a tratar pacientes en sus momentos más difíciles.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'estudios' && (
            <div className="surgeon-tab-pane fade-in">
              <div className="surgeon-pane-left">
                <div className="surgeon-pane-image-card">
                  {estudiosImage ? (
                    <img src={estudiosImage} alt="Estudios" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div className="surgeon-pane-img-placeholder">
                      <span>(Imagen Estudios)</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="surgeon-pane-right">
                {estudiosText ? (
                  <div dangerouslySetInnerHTML={{ __html: estudiosText }} />
                ) : (
                  <p>Información de estudios en construcción...</p>
                )}
              </div>
            </div>
          )}

          {activeTab === 'clinica' && (
            <div className="surgeon-tab-pane fade-in">
              <div className="surgeon-pane-left">
                <div className="surgeon-pane-image-card">
                  {clinicaImage ? (
                    <img src={clinicaImage} alt="Clínica" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div className="surgeon-pane-img-placeholder">
                      <span>(Imagen Clínica)</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="surgeon-pane-right">
                {clinicaText ? (
                  <div dangerouslySetInnerHTML={{ __html: clinicaText }} />
                ) : (
                  <p>Información de la clínica en construcción...</p>
                )}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
