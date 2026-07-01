"use client";

import React, { useState } from 'react';
import './MedicalCenterDetails.css';

interface MedicalCenterDetailsProps {
  acercaText?: string;
  acercaImage?: string;
  porqueText?: string;
  porqueImage?: string;
}

export default function MedicalCenterDetails({ acercaText, acercaImage, porqueText, porqueImage }: MedicalCenterDetailsProps) {
  const [activeTab, setActiveTab] = useState('acerca');

  return (
    <section className="mc-details-section section-padding">
      <div className="container">
        
        <div className="mc-tabs-header">
          <button 
            className={`mc-tab-btn ${activeTab === 'acerca' ? 'active' : ''}`}
            onClick={() => setActiveTab('acerca')}
          >
            ACERCA DE LA CONSULTA
          </button>
          <button 
            className={`mc-tab-btn ${activeTab === 'por-que' ? 'active' : ''}`}
            onClick={() => setActiveTab('por-que')}
          >
            POR QUÉ ESCOGERNOS
          </button>
        </div>

        <div className="mc-tabs-content">
          {activeTab === 'acerca' && (
            <div className="mc-tab-pane fade-in">
              <div className="mc-pane-left">
                <div className="mc-pane-image-card">
                  {acercaImage ? (
                    <img src={acercaImage} alt="Acerca de la consulta" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div className="mc-pane-img-placeholder">
                      <span>(Imagen Acerca de la consulta)</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="mc-pane-right">
                {acercaText ? (
                  <div dangerouslySetInnerHTML={{ __html: acercaText }} />
                ) : (
                  <>
                    <p>
                      Bienvenido a Mendoza Plastic Surgery, tu clínica de cirugía plástica en Atlanta, donde un equipo de profesionales liderado por el Dr. Mendoza se dedica a las cirugías de contorno corporal y rejuvenecimiento facial, todo bajo con la excelencia, transparencia y responsabilidad que cada uno de nuestros pacientes merece.
                    </p>
                    <p>
                      En Mendoza Plastic Surgery nos enfocamos en lograr los mejores resultados, comprendiendo las necesidades y objetivos de nuestros pacientes, y trabajando de cerca con ellos para crear un plan de tratamiento personalizado que se adapte a sus requerimientos específicos.
                    </p>
                  </>
                )}
              </div>
            </div>
          )}

          {activeTab === 'por-que' && (
            <div className="mc-tab-pane fade-in">
              <div className="mc-pane-left">
                <div className="mc-pane-image-card">
                  {porqueImage ? (
                    <img src={porqueImage} alt="Por qué escogernos" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div className="mc-pane-img-placeholder">
                      <span>(Imagen Por qué escogernos)</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="mc-pane-right">
                {porqueText ? (
                  <div dangerouslySetInnerHTML={{ __html: porqueText }} />
                ) : (
                  <p>Información de Por qué escogernos en construcción...</p>
                )}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
