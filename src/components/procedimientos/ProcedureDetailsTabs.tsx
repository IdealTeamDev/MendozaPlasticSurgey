"use client";

import React, { useState } from 'react';
import './ProcedureDetailsTabs.css';

const DETAILS_TABS = {
  realiza: {
    label: "¿CÓMO SE REALIZA?",
    titleSubtitle: "¿CÓMO SE REALIZA",
    titleMain: "LA LIPOSUCCIÓN?",
    content: "La liposucción se realiza bajo anestesia general o local, dependiendo del área a tratar. El cirujano realiza pequeñas incisiones por las que se introduce una cánula para succionar la grasa.\\n\\nEl procedimiento puede durar de una a varias horas, dependiendo de la cantidad de grasa a retirar. Se utiliza tecnología de punta para minimizar el trauma en los tejidos y acelerar la recuperación."
  },
  paciente: {
    label: "PACIENTE IDEAL",
    titleSubtitle: "QUIÉN ES EL",
    titleMain: "PACIENTE IDEAL?",
    content: "El paciente ideal es aquel que se encuentra en un peso estable y cercano al ideal, pero que presenta acúmulos de grasa localizada que no responden a dieta ni ejercicio.\\n\\nEs importante tener buena salud general y expectativas realistas sobre los resultados que la cirugía puede ofrecer."
  },
  recuperacion: {
    label: "RECUPERACIÓN",
    titleSubtitle: "TIEMPO DE",
    titleMain: "RECUPERACIÓN",
    content: "La recuperación inicial toma aproximadamente 1 a 2 semanas, tiempo en el que se recomienda usar una prenda de compresión especial para reducir la inflamación y ayudar a la piel a retraerse.\\n\\nLos resultados finales se aprecian luego de varios meses, a medida que la hinchazón desaparece por completo."
  },
  esperar: {
    label: "¿QUÉ PUEDO ESPERAR?",
    titleSubtitle: "RESULTADOS",
    titleMain: "ESPERADOS",
    content: "Puedes esperar una figura más esbelta, con un contorno corporal notablemente mejorado. La ropa te ajustará mejor y tendrás una silueta más armónica.\\n\\nPara mantener los resultados a largo plazo, es esencial mantener un estilo de vida saludable, con dieta balanceada y ejercicio regular."
  },
  galerias: {
    label: "GALERÍAS",
    titleSubtitle: "GALERÍA DE",
    titleMain: "RESULTADOS",
    content: "Te invitamos a revisar nuestra galería de antes y después durante tu consulta para que veas los resultados transformadores que hemos logrado en pacientes con características similares a las tuyas."
  }
};

type DetailsTabKey = keyof typeof DETAILS_TABS;

export default function ProcedureDetailsTabs() {
  const [activeTab, setActiveTab] = useState<DetailsTabKey>('realiza');

  const currentData = DETAILS_TABS[activeTab];

  return (
    <section className="proc-details-tabs-section">
      <div className="container">
        
        <div className="proc-details-nav-wrapper">
          <div className="proc-details-nav">
            {(Object.keys(DETAILS_TABS) as DetailsTabKey[]).map(key => (
              <button
                key={key}
                className={`proc-details-tab-btn ${activeTab === key ? 'active' : ''}`}
                onClick={() => setActiveTab(key)}
              >
                {DETAILS_TABS[key].label}
              </button>
            ))}
          </div>
        </div>

        <div className="proc-details-content-box">
          
          <div className="proc-details-col-left">
            <span className="proc-details-subtitle">{currentData.titleSubtitle}</span>
            <h2 className="proc-details-title">{currentData.titleMain}</h2>
          </div>
          
          <div className="proc-details-col-right">
            {currentData.content.split('\\n\\n').map((paragraph, index) => (
              <p key={index} className="proc-details-text">{paragraph}</p>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
