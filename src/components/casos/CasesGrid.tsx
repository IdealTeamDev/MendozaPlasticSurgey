"use client";

import React, { useState } from 'react';
import './CasesGrid.css';
import CasesModal from './CasesModal';

interface CaseExample {
  beforeImg: string;
  afterImg: string;
}

export interface CaseCardData {
  id: number | string;
  title: string;
  date: string;
  description: string;
  examples: CaseExample[];
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
                {c.examples[0]?.beforeImg ? (
                  <img src={c.examples[0].beforeImg} alt={`Antes ${c.title}`} />
                ) : (
                  <div className="cases-card-placeholder">Antes</div>
                )}
              </div>
              <div className="cases-card-img-half">
                {c.examples[0]?.afterImg ? (
                  <img src={c.examples[0].afterImg} alt={`Después ${c.title}`} />
                ) : (
                  <div className="cases-card-placeholder">Después</div>
                )}
              </div>
            </div>
            
            <div className="cases-card-content">
              <span className="cases-card-date">{c.date}</span>
              <h4 className="cases-card-title">{c.title.toUpperCase()}</h4>
              {c.description && <p className="cases-card-desc">{c.description}</p>}
              
              <button className="cases-card-btn" onClick={() => openModal(index)}>
                Ver más
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
