"use client";

import React, { useState } from 'react';
import './SurgeonDetails.css';

export default function SurgeonDetails() {
  const [activeTab, setActiveTab] = useState('estudios');

  return (
    <section className="surgeon-details-section section-padding">
      <div className="container">
        
        <div className="surgeon-tabs-header">
          <button 
            className={`surgeon-tab-btn ${activeTab === 'estudios' ? 'active' : ''}`}
            onClick={() => setActiveTab('estudios')}
          >
            ESTUDIOS
          </button>
          <button 
            className={`surgeon-tab-btn ${activeTab === 'certificaciones' ? 'active' : ''}`}
            onClick={() => setActiveTab('certificaciones')}
          >
            CERTIFICACIONES
          </button>
          <button 
            className={`surgeon-tab-btn ${activeTab === 'clinica' ? 'active' : ''}`}
            onClick={() => setActiveTab('clinica')}
          >
            CLÍNICA
          </button>
        </div>

        <div className="surgeon-tabs-content">
          {activeTab === 'estudios' && (
            <div className="surgeon-tab-pane fade-in">
              <div className="surgeon-pane-left">
                <div className="surgeon-pane-image-card">
                  <div className="surgeon-pane-img-placeholder">
                    <span>(Placeholder Diplomas)</span>
                  </div>
                </div>
              </div>
              <div className="surgeon-pane-right">
                <p>
                  El Dr. Mendoza es originario de Barranquilla, Colombia. A los 8 años de edad emigró a los Estados Unidos. Desde muy joven descubrió su vocación por la medicina, heredada de sus padres, ambos profesionales de la salud. Empezó sus estudios en pre-medicina completando con honores una Licenciatura en Ciencias y posteriormente entró a completar una Maestría en Biología Molecular en la misma universidad.
                </p>
                <p>
                  Después de su maestría, fue aceptado en la escuela de medicina Morehouse School of Medicine en Atlanta, Georgia. Allí completó sus estudios médicos con distinción, descubrió su vocación en el área quirúrgica, se enamoró de la cirugía y terminó su residencia en cirugía general en Wellstar Atlanta Medical Center, un hospital donde se gradúan con alto nivel de preparación para tratar pacientes con casos de traumas extremadamente difíciles.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'certificaciones' && (
            <div className="surgeon-tab-pane fade-in">
              <div className="surgeon-pane-full">
                <p>Información de certificaciones en construcción...</p>
              </div>
            </div>
          )}

          {activeTab === 'clinica' && (
            <div className="surgeon-tab-pane fade-in">
              <div className="surgeon-pane-full">
                <p>Información de clínica en construcción...</p>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
