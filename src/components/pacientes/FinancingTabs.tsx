"use client";

import React, { useState } from 'react';
import './FinancingTabs.css';

interface FinTab {
  tab_name: string;
  tab_icon: string;
  tab_logo: string;
  tab_description: string;
  tab_benefits: string;
  tab_interest: string;
  tab_apr: string;
  tab_link: string;
}

interface FinancingTabsProps {
  title?: string;
  tabs?: FinTab[];
}

export default function FinancingTabs({ title, tabs = [] }: FinancingTabsProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  if (!tabs || tabs.length === 0) return null;

  return (
    <section className="financing-tabs-section section-padding">
      <div className="container">
        <h2 className="financing-tabs-title text-center">
          {title || 'OPCIONES DE FINANCIACIÓN DISPONIBLES PARA TI'}
        </h2>
        
        <p className="financing-tabs-subtitle text-center" style={{ marginBottom: '3rem', color: '#555' }}>
          En Mendoza Plastic Surgery queremos que des un paso hacia tu mejor versión sin preocupaciones.
        </p>

        <div className="financing-tabs-header">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`fin-tab-btn ${activeTabIndex === index ? 'active' : ''}`}
              onClick={() => setActiveTabIndex(index)}
            >
              <span className="fin-tab-icon">
                {tab.tab_icon ? (
                  <img src={tab.tab_icon} alt="" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
                ) : null}
              </span>
              {tab.tab_name}
            </button>
          ))}
        </div>

        <div className="financing-tabs-content">
          {tabs.map((tab, index) => (
            activeTabIndex === index && (
              <div key={index} className="fin-tab-pane fade-in">
                <div className="fin-pane-left">
                  {tab.tab_logo ? (
                    <img src={tab.tab_logo} alt={tab.tab_name} className="fin-pane-logo-img" />
                  ) : (
                    <div className="fin-pane-logo-placeholder">{tab.tab_name}</div>
                  )}
                </div>
                <div className="fin-pane-right">
                  {tab.tab_description && (
                    <p className="fin-desc">{tab.tab_description}</p>
                  )}
                  
                  {tab.tab_benefits && (
                    <>
                      <h4 className="fin-subtitle">BENEFICIOS</h4>
                      <div className="fin-list" dangerouslySetInnerHTML={{ __html: tab.tab_benefits }} />
                    </>
                  )}

                  {tab.tab_interest && (
                    <>
                      <h4 className="fin-subtitle">INTERESES DIFERIDOS</h4>
                      <p className="fin-text">{tab.tab_interest}</p>
                    </>
                  )}

                  {tab.tab_apr && (
                    <>
                      <h4 className="fin-subtitle">APR REDUCIDO/PAGO FIJO</h4>
                      <p className="fin-small-text">{tab.tab_apr}</p>
                    </>
                  )}

                  {tab.tab_link && (
                    <a href={tab.tab_link} className="btn fin-btn" target="_blank" rel="noopener noreferrer">
                      Aplica aquí
                    </a>
                  )}
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
