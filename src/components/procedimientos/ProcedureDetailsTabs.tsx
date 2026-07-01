"use client";

import React, { useState } from 'react';
import './ProcedureDetailsTabs.css';

export interface ProcedureDetailTabItem {
  id: string;
  label: string;
  titleSubtitle: string;
  titleMain: string;
  content: string;
}

interface ProcedureDetailsTabsProps {
  tabs?: ProcedureDetailTabItem[];
}
const DEFAULT_TABS: ProcedureDetailTabItem[] = [
  {
    id: "realiza",
    label: "¿CÓMO SE REALIZA?",
    titleSubtitle: "¿CÓMO SE REALIZA",
    titleMain: "LA LIPOSUCCIÓN?",
    content: "La liposucción se realiza bajo anestesia general o local, dependiendo del área a tratar. El cirujano realiza pequeñas incisiones por las que se introduce una cánula para succionar la grasa.\n\nEl procedimiento puede durar de una a varias horas, dependiendo de la cantidad de grasa a retirar. Se utiliza tecnología de punta para minimizar el trauma en los tejidos y acelerar la recuperación."
  },
  {
    id: "paciente",
    label: "PACIENTE IDEAL",
    titleSubtitle: "QUIÉN ES EL",
    titleMain: "PACIENTE IDEAL?",
    content: "El paciente ideal es aquel que se encuentra en un peso estable y cercano al ideal, pero que presenta acúmulos de grasa localizada que no responden a dieta ni ejercicio.\n\nEs importante tener buena salud general y expectativas realistas sobre los resultados que la cirugía puede ofrecer."
  }
];

export default function ProcedureDetailsTabs({ tabs }: ProcedureDetailsTabsProps) {
  const activeTabs = tabs && tabs.length > 0 ? tabs : DEFAULT_TABS;
  const [activeTab, setActiveTab] = useState(activeTabs[0].id);

  // Sync state if tabs prop changes and the activeTab is no longer valid
  React.useEffect(() => {
    if (activeTabs.length > 0 && !activeTabs.find(t => t.id === activeTab)) {
      setActiveTab(activeTabs[0].id);
    }
  }, [activeTabs, activeTab]);

  const currentData = activeTabs.find(t => t.id === activeTab) || activeTabs[0];

  return (
    <section className="proc-details-tabs-section">
      <div className="container">
        
        <div className="proc-details-nav-wrapper">
          <div className="proc-details-nav">
            {activeTabs.map(tab => (
              <button
                key={tab.id}
                className={`proc-details-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="proc-details-content-box">
          
          <div className="proc-details-col-left">
            <span className="proc-details-subtitle">{currentData.titleSubtitle}</span>
            <h2 className="proc-details-title">{currentData.titleMain}</h2>
          </div>
          
          <div className="proc-details-col-right" dangerouslySetInnerHTML={{ __html: currentData.content }}>
          </div>

        </div>

      </div>
    </section>
  );
}
