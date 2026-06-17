"use client";

import React, { useState } from 'react';
import './FinancingTabs.css';

const TABS = [
  { id: 'cherry', label: 'CHERRY' },
  { id: 'carecredit', label: 'CARECREDIT' }
];

export default function FinancingTabs() {
  const [activeTab, setActiveTab] = useState('carecredit');

  return (
    <section className="financing-tabs-section section-padding">
      <div className="container">
        <h2 className="financing-tabs-title text-center">
          OPCIONES DE FINANCIACIÓN DISPONIBLES PARA TI
        </h2>

        <div className="financing-tabs-header">
          {TABS.map(tab => (
            <button
              key={tab.id}
              className={`fin-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="fin-tab-icon">
                {tab.id === 'cherry' ? (
                  <span className="cherry-icon">%</span>
                ) : (
                  <span className="carecredit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 15l7-7 7 7" stroke="#009688"/><path d="M5 19l7-7 7 7" stroke="#4CAF50"/></svg>
                  </span>
                )}
              </span>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="financing-tabs-content">
          {activeTab === 'carecredit' && (
            <div className="fin-tab-pane">
              <div className="fin-pane-left">
                {/* Placeholder para logo de CareCredit */}
                <div className="carecredit-logo-placeholder">
                   <div className="cc-logo-icon">
                     <span className="cc-green">Care</span><span className="cc-teal">Credit</span>
                   </div>
                   <span className="cc-sub">a Synchrony solution</span>
                </div>
              </div>
              <div className="fin-pane-right">
                <p className="fin-desc">
                  Es una tarjeta de crédito que le permite financiar su cirugía estética con la posibilidad de pagar el procedimiento en cómodas cuotas mensuales, ofrece aprobación inmediata de los créditos y planes a muy bajo interés.
                </p>
                
                <h4 className="fin-subtitle">BENEFICIOS</h4>
                <ul className="fin-list">
                  <li>• Realizar su procedimiento cuando lo desee</li>
                  <li>• Hacer pagos asequibles a lo largo del tiempo</li>
                  <li>• Aprobación instantánea</li>
                </ul>

                <h4 className="fin-subtitle">INTERESES DIFERIDOS</h4>
                <p className="fin-text">6 ó 12 meses interés diferido</p>

                <h4 className="fin-subtitle">APR REDUCIDO/PAGO FIJO</h4>
                <p className="fin-text">24, 36 o 48 meses con un APR fijo</p>
                <p className="fin-small-text">
                  Se cargarán intereses a su cuenta desde la fecha de compra si el saldo promocional no se abona en su totalidad dentro del periodo promocional. Se requieren pagos mensuales mínimos.
                </p>

                <button className="btn fin-btn">Aplica aquí</button>
              </div>
            </div>
          )}

          {activeTab === 'cherry' && (
            <div className="fin-tab-pane">
              <div className="fin-pane-left">
                <div className="cherry-logo-placeholder">
                  <span className="cherry-percent">%</span> Cherry
                </div>
              </div>
              <div className="fin-pane-right">
                <p className="fin-desc">
                  Cherry es un plan de pago rápido y fácil para sus procedimientos estéticos. Aprobación en segundos sin impacto en su puntaje de crédito para calificar.
                </p>
                <button className="btn fin-btn">Aplica con Cherry</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
