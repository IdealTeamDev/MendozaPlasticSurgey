"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import './ProcedureTabs.css';

export interface ProcedureTabItem {
  id: string;
  tabLabel: string;
  desc: string;
  imageUrl: string;
  procedures?: any[];
}

interface ProcedureTabsProps {
  title?: string;
  tabs?: ProcedureTabItem[];
}

const DEFAULT_TABS: ProcedureTabItem[] = [
  {
    id: "cuerpo",
    tabLabel: "CUERPO",
    imageUrl: "/procedures.png",
    desc: "Las cirugías corporales están diseñadas para moldear, definir y mejorar el contorno del cuerpo.",
  },
  {
    id: "senos",
    tabLabel: "SENOS",
    imageUrl: "/procedures.png",
    desc: "Nuestros procedimientos de senos buscan realzar tu feminidad y confianza.",
  }
];

export default function ProcedureTabs({ title, tabs }: ProcedureTabsProps) {
  const activeTabs = tabs && tabs.length > 0 ? tabs : DEFAULT_TABS;
  const [activeTab, setActiveTab] = useState(activeTabs[0].id);

  const currentData = activeTabs.find(t => t.id === activeTab) || activeTabs[0];

  return (
    <section className="proc-tabs-section section-padding">
      <div className="container">
        
        <div className="proc-tabs-header text-center">
          <h2 className="proc-tabs-title">
            {title || 'NUESTRO EQUIPO CUENTA CON EL CONOCIMIENTO, LA EXPERIENCIA Y LAS HABILIDADES PARA BRINDARTE LOS MEJORES RESULTADOS.'}
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="proc-tabs-nav-wrapper">
          <div className="proc-tabs-nav">
            {activeTabs.map(tab => (
              <button
                key={tab.id}
                className={`proc-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.tabLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="proc-tab-content">
          <div className="proc-tab-img-col">
            <div className="proc-tab-img-wrapper">
              {currentData.imageUrl ? (
                <img src={currentData.imageUrl} alt={currentData.tabLabel} className="proc-tab-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <div className="proc-tab-img-placeholder">
                  ({currentData.tabLabel})
                </div>
              )}
            </div>
          </div>
          
          <div className="proc-tab-text-col">
            <p className="proc-tab-desc">
              {currentData.desc}
            </p>
            {currentData.procedures && currentData.procedures.length > 0 && (
              <div className="proc-pill-links">
                {currentData.procedures.map((proc: any) => (
                  <Link href={`/procedimientos/${proc.slug}`} key={proc.id} className="proc-pill-link">
                    {proc.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
