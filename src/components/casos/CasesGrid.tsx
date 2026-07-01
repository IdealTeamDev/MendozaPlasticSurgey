"use client";

import React, { useState } from 'react';
import './CasesGrid.css';
import CasesModal from './CasesModal';

export interface CaseCardData {
  id: number;
  title: string;
  date: string;
  description: string;
  beforeImg: string;
  afterImg: string;
}

interface CasesGridProps {
  cases: CaseCardData[];
}

export default function CasesGrid({ cases = [] }: CasesGridProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0);

  if (!cases || cases.length === 0) {
    return (
      <div className="cases-grid-empty">
        <p>No se encontraron casos para este procedimiento.</p>
      </div>
    );
  }

  const openModal = (index: number) => {
    setCurrentCaseIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const nextCase = () => {
    setCurrentCaseIndex((prev) => (prev === cases.length - 1 ? 0 : prev + 1));
  };

  const prevCase = () => {
    setCurrentCaseIndex((prev) => (prev === 0 ? cases.length - 1 : prev - 1));
  };

  return (
    <>
      <div className="cases-grid-container">
        {cases.map((c, index) => (
          <div key={c.id} className="cases-card">
            <div className="cases-card-images">
              <div className="cases-card-img-half">
                {c.beforeImg ? (
                  <img src={c.beforeImg} alt={`Antes ${c.title}`} />
                ) : (
                  <div className="cases-card-placeholder">Antes</div>
                )}
              </div>
              <div className="cases-card-img-half">
                {c.afterImg ? (
                  <img src={c.afterImg} alt={`Despu\u00e9s ${c.title}`} />
                ) : (
                  <div className="cases-card-placeholder">Despu\u00e9s</div>
                )}
              </div>
            </div>
            
            <div className="cases-card-content">
              <span className="cases-card-date">{c.date}</span>
              <h4 className="cases-card-title">{c.title.toUpperCase()}</h4>
              {c.description && <p className="cases-card-desc">{c.description}</p>}
              
              <button className="cases-card-btn" onClick={() => openModal(index)}>
                Ver m\u00e1s
              </button>
            </div>
          </div>
        ))}
      </div>

      <CasesModal 
        isOpen={modalOpen} 
        onClose={closeModal} 
        cases={cases} 
        currentIndex={currentCaseIndex} 
        onNext={nextCase} 
        onPrev={prevCase} 
      />
    </>
  );
}
