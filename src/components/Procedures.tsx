"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import './Procedures.css';

export interface ProcedureItem {
  id: string;
  tabLabel: string;
  desc: string;
  imageUrl: string;
}

interface ProceduresProps {
  title?: string;
  procedures?: ProcedureItem[];
}

const DEFAULT_PROCEDURES: ProcedureItem[] = [
  { id: 'cuerpo', tabLabel: 'CIRUGÍA DE CUERPO', desc: 'Nos enfocamos en guiar responsablemente a nuestros pacientes en sus procesos de contorno corporal.', imageUrl: '/procedures.png' },
  { id: 'inyectables', tabLabel: 'INYECTABLES', desc: 'Tratamientos inyectables para rejuvenecimiento facial.', imageUrl: '/procedures.png' },
  { id: 'tratamientos', tabLabel: 'TRATAMIENTOS', desc: 'Diversos tratamientos estéticos para tu bienestar.', imageUrl: '/procedures.png' },
];

export default function Procedures({ title, procedures }: ProceduresProps) {
  const activeProcedures = procedures && procedures.length > 0 ? procedures : DEFAULT_PROCEDURES;
  const [activeTab, setActiveTab] = useState(activeProcedures[0].id);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const activeProc = activeProcedures.find(p => p.id === activeTab) || activeProcedures[0];

  return (
    <section className="procedures section-padding" id="procedimientos">
      <div className="container">
        <h2 className="text-center procedures-title">{title || 'PROCEDIMIENTOS'}</h2>
        
        <div 
          className="procedures-card" 
          style={{ backgroundImage: `url(${activeProc.imageUrl})` }}
        >
          {/* Desktop Tabs */}
          <div className="procedures-tabs desktop-tabs">
            {activeProcedures.map(proc => (
              <button 
                key={proc.id}
                className={`tab-btn ${activeTab === proc.id ? 'active' : ''}`}
                onClick={() => setActiveTab(proc.id)}
              >
                {proc.tabLabel}
              </button>
            ))}
          </div>

          {/* Mobile Dropdown Tab */}
          <div className="mobile-tabs">
            <button 
              className="mobile-tab-selector"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="current-tab">{activeProc.tabLabel}</span>
              <span className="menu-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              </span>
            </button>
            {isDropdownOpen && (
              <div className="mobile-dropdown-menu">
                {activeProcedures.map(proc => (
                  <button 
                    key={proc.id}
                    className={`dropdown-item ${activeTab === proc.id ? 'active' : ''}`}
                    onClick={() => {
                      setActiveTab(proc.id);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {proc.tabLabel}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <div className="procedures-content" key={activeTab}>
            <div className="procedures-image">
              <Image 
                src={activeProc.imageUrl || "/procedures.png"} 
                alt={activeProc.tabLabel} 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="proc-img" 
              />
            </div>
            
            <div className="procedures-info">
              <p className="procedures-desc">
                {activeProc.desc}
              </p>
              
              <div className="procedures-badges">
                <div className="proc-badge">
                  <span className="proc-badge-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                  </span>
                  Senos
                </div>
                <div className="proc-badge">
                  <span className="proc-badge-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                  </span>
                  Cuerpo
                </div>
                <div className="proc-badge">
                  <span className="proc-badge-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path></svg>
                  </span>
                  Rostro
                </div>
              </div>
              
              <button className="btn proc-btn-white">Conoce más</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
