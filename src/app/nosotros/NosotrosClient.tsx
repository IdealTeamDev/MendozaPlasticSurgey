"use client";

import React, { useState } from 'react';
import SurgeonHero from '@/components/nosotros/SurgeonHero';
import ProcedureResultsSlider from '@/components/procedimientos/ProcedureResultsSlider';
import SurgeonDetails from '@/components/nosotros/SurgeonDetails';
import SurgeonFunFacts from '@/components/nosotros/SurgeonFunFacts';
import MedicalCenterHero from '@/components/nosotros/MedicalCenterHero';
import MedicalCenterDetails from '@/components/nosotros/MedicalCenterDetails';
import MedicalCenterServices from '@/components/nosotros/MedicalCenterServices';

interface NosotrosProps {
  acf?: any;
  cases?: any[];
  procedureCategories?: any[];
}

export default function NosotrosClient({ acf, cases, procedureCategories }: NosotrosProps) {
  const [activeTab, setActiveTab] = useState<'surgeon' | 'medical'>('surgeon');

  return (
    <>
      <div className="nosotros-toggle-wrapper">
        <div className="nosotros-toggle">
          <button 
            className={`toggle-btn ${activeTab === 'surgeon' ? 'active' : ''}`}
            onClick={() => setActiveTab('surgeon')}
          >
            Surgeon
          </button>
          <button 
            className={`toggle-btn ${activeTab === 'medical' ? 'active' : ''}`}
            onClick={() => setActiveTab('medical')}
          >
            Medical Center
          </button>
        </div>
      </div>

      {activeTab === 'surgeon' ? (
        <div className="tab-content fade-in">
          <SurgeonHero 
            subtitle={acf?.surgeon_subtitle}
            title={acf?.surgeon_title}
            desc={acf?.surgeon_desc}
            imageUrl={acf?.surgeon_image}
          />
          <section style={{ backgroundColor: '#f9f9f9', paddingTop: '4rem' }}>
            <div className="container" style={{ textAlign: 'left', marginBottom: '2rem' }}>
              <p style={{ fontSize: '0.9rem', color: '#666', letterSpacing: '2px', textTransform: 'uppercase' }}>ANTES Y DESPUÉS</p>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '300', color: 'var(--black)' }}>CIRUGÍA PLÁSTICA</h2>
            </div>
            <ProcedureResultsSlider cases={cases} />
          </section>
          <SurgeonDetails 
            estudiosText={acf?.surgeon_estudios_text}
            estudiosImage={acf?.surgeon_estudios_image}
            certificacionesText={acf?.surgeon_certificaciones_text}
            certificacionesImage={acf?.surgeon_certificaciones_image}
            clinicaText={acf?.surgeon_clinica_text}
            clinicaImage={acf?.surgeon_clinica_image}
          />
          <SurgeonFunFacts 
            funfactsText={acf?.surgeon_funfacts_text}
            funfactsImage={acf?.surgeon_funfacts_image}
          />
        </div>
      ) : (
        <div className="tab-content fade-in">
          <MedicalCenterHero 
            title={acf?.medical_title}
            desc={acf?.medical_desc}
            imageUrl={acf?.medical_image}
          />
          <MedicalCenterDetails 
            acercaText={acf?.medical_acerca_text}
            acercaImage={acf?.medical_acerca_image}
            porqueText={acf?.medical_porque_text}
            porqueImage={acf?.medical_porque_image}
          />
          <MedicalCenterServices categories={procedureCategories} />
        </div>
      )}
    </>
  );
}
