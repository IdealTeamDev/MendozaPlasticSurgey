"use client";

import React, { useState } from 'react';
import './ProcedureTreatmentTypes.css';

const TREATMENTS_DATA = {
  myers: {
    label: "Cóctel Myers",
    description: "Esta mezcla ayuda a aumentar la energía, mejora la función inmunológica, aumenta la hidratación y mejora la salud celular. Promueve la claridad mental, una piel sana, huesos más fuertes y una función nerviosa y muscular equilibrada, al tiempo que refuerza tu salud general. Ayuda a reponer electrolitos y nutrientes.",
    includes: [
      "Cloruro de magnesio",
      "Vitamina del complejo B",
      "Hidroxil B12",
      "Gluconato de calcio",
      "Ácido ascórbico"
    ]
  },
  recuperacion: {
    label: "Cóctel de recuperación",
    description: "Diseñado para ayudar a tu cuerpo a recuperarse más rápido después del ejercicio intenso, una cirugía o una enfermedad. Acelera la reparación muscular y reduce la fatiga extrema.",
    includes: [
      "Aminoácidos esenciales",
      "Vitamina C en altas dosis",
      "Zinc",
      "Magnesio"
    ]
  },
  alivio: {
    label: "Cóctel Alivio",
    description: "Ideal para calmar migrañas, dolores de cabeza por tensión y malestar estomacal. Proporciona alivio rápido y rehidratación profunda.",
    includes: [
      "Medicamento anti-náuseas",
      "Analgésico no narcótico",
      "Electrolitos balanceados",
      "Complejo B"
    ]
  },
  reboot: {
    label: "Cóctel Reboot",
    description: "El tratamiento perfecto para la resaca o el agotamiento extremo. Elimina toxinas, restaura la hidratación y alivia síntomas como náuseas y dolor.",
    includes: [
      "Vitamina B12",
      "Vitamina C",
      "Glutatión",
      "Electrolitos"
    ]
  }
};

type TreatmentKey = keyof typeof TREATMENTS_DATA;

export default function ProcedureTreatmentTypes() {
  const [activeTab, setActiveTab] = useState<TreatmentKey>('myers');

  const currentData = TREATMENTS_DATA[activeTab];

  return (
    <section className="proc-treatments-section">
      <div className="container">
        
        <div className="proc-treatments-card">
          
          {/* Left Column: Menu */}
          <div className="proc-treatments-menu">
            <span className="treatments-label">TIPOS DE</span>
            <h2 className="treatments-title">TRATAMIENTO</h2>
            
            <div className="treatments-list">
              {(Object.keys(TREATMENTS_DATA) as TreatmentKey[]).map(key => (
                <button
                  key={key}
                  className={`treatment-btn ${activeTab === key ? 'active' : ''}`}
                  onClick={() => setActiveTab(key)}
                >
                  {TREATMENTS_DATA[key].label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="proc-treatments-content">
            <p className="treatment-desc">
              {currentData.description}
            </p>
            
            <div className="treatment-includes">
              <h3 className="treatment-includes-title">¿QUÉ INCLUYE EL {currentData.label.toUpperCase()}?</h3>
              <ul className="treatment-includes-list">
                {currentData.includes.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
