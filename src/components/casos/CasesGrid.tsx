"use client";

import React from 'react';
import './CasesGrid.css';

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
  if (!cases || cases.length === 0) {
    return (
      <div className="cases-grid-empty">
        <p>No se encontraron casos para este procedimiento.</p>
      </div>
    );
  }

  return (
    <div className="cases-grid-container">
      {cases.map((c) => (
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
            
            <button className="cases-card-btn" onClick={() => alert('Abriendo pop-up (Pr\u00f3ximamente)')}>
              Ver m\u00e1s
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
