"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import './MedicalCenterDetails.css';

interface MedicalCenterDetailsProps {
  tab1Title?: string;
  tab1Image?: string;
  tab1TextLeft?: string;
  tab1TextRight?: string;
  tab2Title?: string;
  tab2Image?: string;
  tab2TextLeft?: string;
  tab2TextRight?: string;
}

export default function MedicalCenterDetails({ 
  tab1Title, tab1Image, tab1TextLeft, tab1TextRight,
  tab2Title, tab2Image, tab2TextLeft, tab2TextRight
}: MedicalCenterDetailsProps) {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="mc-details-section">
      <div className="container">
        
        <div className="mc-tabs-header-clean">
          <button 
            className={`mc-tab-btn-clean ${activeTab === 1 ? 'active' : ''}`}
            onClick={() => setActiveTab(1)}
          >
            {tab1Title || 'CLÍNICA DE CIRUGÍA PLÁSTICA BILINGÜE'}
          </button>
          <button 
            className={`mc-tab-btn-clean ${activeTab === 2 ? 'active' : ''}`}
            onClick={() => setActiveTab(2)}
          >
            {tab2Title || 'CIRUGÍA PLÁSTICA PERSONALIZADA EN ATLANTA'}
          </button>
        </div>

        <div className="mc-tabs-content-clean">
          {activeTab === 1 && (
            <div className="mc-tab-pane-clean fade-in">
              <div className="mc-pane-left-img-wrapper">
                {tab1Image ? (
                  <img src={tab1Image} alt="Clínica Bilingüe" className="mc-custom-shape-img" />
                ) : (
                  <div className="mc-custom-shape-img placeholder"></div>
                )}
              </div>
              <div className="mc-pane-right-content">
                <h2 className="mc-pane-title sr-only" style={{ display: 'none' }}>{tab1Title || 'CLÍNICA DE CIRUGÍA PLÁSTICA BILINGÜE'}</h2>
                <div className="mc-text-columns">
                  <div className="mc-text-col">
                    {tab1TextLeft ? (
                      <div dangerouslySetInnerHTML={{ __html: tab1TextLeft }} />
                    ) : (
                      <p>
                        En Mendoza Plastic Surgery encuentras un enfoque basado en brindar un acompañamiento integral, donde cada paciente pueda tomar decisiones informadas con la tranquilidad de estar en manos de un equipo profesional que prioriza la excelencia, la transparencia y la seguridad en cada etapa del proceso.
                      </p>
                    )}
                  </div>
                  <div className="mc-text-col">
                    {tab1TextRight ? (
                      <div dangerouslySetInnerHTML={{ __html: tab1TextRight }} />
                    ) : (
                      <p>
                        Trabajamos con altos estándares médicos y tecnología avanzada para lograr resultados que reflejen calidad, naturalidad y satisfacción. El Dr. Mendoza, es un cirujano de alta calidad y bilingüe, esperando por ti. Aquí el idioma no es un obstáculo.
                      </p>
                    )}
                  </div>
                </div>
                <div className="mc-action-btn-wrapper">
                  <Link href="/contacto" className="btn mc-black-btn">
                    Agenda tu consulta
                  </Link>
                </div>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="mc-tab-pane-clean fade-in">
              <div className="mc-pane-left-img-wrapper">
                {tab2Image ? (
                  <img src={tab2Image} alt="Cirugía Personalizada" className="mc-custom-shape-img" />
                ) : (
                  <div className="mc-custom-shape-img placeholder"></div>
                )}
              </div>
              <div className="mc-pane-right-content">
                <h2 className="mc-pane-title sr-only" style={{ display: 'none' }}>{tab2Title || 'CIRUGÍA PLÁSTICA PERSONALIZADA EN ATLANTA'}</h2>
                <div className="mc-text-columns">
                  <div className="mc-text-col">
                    {tab2TextLeft ? (
                      <div dangerouslySetInnerHTML={{ __html: tab2TextLeft }} />
                    ) : (
                      <p>
                        Nuestro objetivo principal es la seguridad y satisfacción de nuestros pacientes, es por eso que hemos diseñado protocolos y procesos de atención médica de vanguardia.
                      </p>
                    )}
                  </div>
                  <div className="mc-text-col">
                    {tab2TextRight ? (
                      <div dangerouslySetInnerHTML={{ __html: tab2TextRight }} />
                    ) : (
                      <p>
                        En cada procedimiento quirúrgico y no quirúrgico, te acompañaremos para garantizar una experiencia cómoda y resultados a la altura de tus expectativas.
                      </p>
                    )}
                  </div>
                </div>
                <div className="mc-action-btn-wrapper">
                  <Link href="/contacto" className="btn mc-black-btn">
                    Agenda tu consulta
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
