"use client";

import React, { useState } from 'react';
import './ProcedureTreatmentTypes.css';

interface TreatmentItem {
  nombre_del_tipo: string;
  contenido: string;
}

interface ProcedureTreatmentTypesProps {
  treatments?: TreatmentItem[];
}

export default function ProcedureTreatmentTypes({ treatments = [] }: ProcedureTreatmentTypesProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  if (!treatments || treatments.length === 0) {
    return null;
  }

  const currentData = treatments[activeIndex];

  return (
    <section className="proc-treatments-section section-padding">
      <div className="container">
        
        <div className="proc-treatments-card">
          
          {/* Left Column: Menu */}
          <div className="proc-treatments-menu">
            <span className="treatments-label">TIPOS DE</span>
            <h2 className="treatments-title">TRATAMIENTO</h2>
            
            <div className="treatments-list">
              {treatments.map((treatment, idx) => (
                <button
                  key={idx}
                  className={`treatment-btn ${activeIndex === idx ? 'active' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                >
                  {treatment.nombre_del_tipo}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="proc-treatments-content">
            {/* The WYSIWYG editor content goes here */}
            <div 
              className="treatment-dynamic-content" 
              dangerouslySetInnerHTML={{ __html: currentData?.contenido || '' }}
            />
          </div>
          
        </div>

      </div>
    </section>
  );
}
