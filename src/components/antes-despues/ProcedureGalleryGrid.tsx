"use client";

import React, { useState } from 'react';
import './ProcedureGalleryGrid.css';

interface Caso {
  id: number;
  slug: string;
  title: string;
  procedimiento: string;
  foto_antes?: string;
  foto_despues?: string;
}

interface ProcedureGalleryGridProps {
  cases?: Caso[];
}

const SIDEBAR_CATEGORIES = [
  { id: 'cuerpo', title: 'Cirugía de cuerpo' },
  { id: 'senos', title: 'Cirugía de senos' },
  { id: 'facial', title: 'Cirugía facial, tratamientos e Inyectables' }
];

export default function ProcedureGalleryGrid({ cases = [] }: ProcedureGalleryGridProps) {
  const [openSidebarId, setOpenSidebarId] = useState<string | null>('senos');

  const toggleSidebar = (id: string) => {
    setOpenSidebarId(openSidebarId === id ? null : id);
  };

  return (
    <section className="proc-grid-section section-padding">
      <div className="container">
        
        <div className="proc-grid-header text-center">
          <h2 className="proc-grid-title">RESULTADOS CIRUGÍA PLÁSTICA</h2>
          <p className="proc-grid-desc">
            Explora la galería de antes y después, y descubre transformaciones reales.
          </p>
        </div>

        <div className="proc-layout">
          
          {/* Grilla Principal */}
          <div className="proc-main-content">
            <div className="proc-cases-grid">
              {cases.map((c, index) => (
                <div key={c.id} className="proc-case-card">
                  <div className="proc-case-images">
                    <div className="proc-case-img-box">
                      {c.foto_antes ? (
                        <img src={c.foto_antes} alt="Antes" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        <span>(Img Antes)</span>
                      )}
                    </div>
                    <div className="proc-case-img-box">
                      {c.foto_despues ? (
                        <img src={c.foto_despues} alt="Después" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        <span>(Img Después)</span>
                      )}
                    </div>
                  </div>
                  <div className="proc-case-info">
                    <h3 className="proc-case-number">CASO {index + 1}</h3>
                    <p className="proc-case-desc">{c.title}</p>
                    <button className="btn proc-case-btn">Ver más</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Paginación */}
            <div className="proc-pagination">
              <button className="pag-btn prev">&lt;</button>
              <button className="pag-btn active">1</button>
              <button className="pag-btn">2</button>
              <button className="pag-btn">3</button>
              <span className="pag-dots">...</span>
              <button className="pag-btn">10</button>
              <button className="pag-btn next">&gt;</button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="proc-sidebar">
            <div className="proc-sidebar-card">
              <h3 className="sidebar-title">PROCEDIMIENTOS</h3>
              <div className="sidebar-accordion">
                {SIDEBAR_CATEGORIES.map(cat => (
                  <div key={cat.id} className={`sidebar-acc-item ${openSidebarId === cat.id ? 'open' : ''}`}>
                    <div className="sidebar-acc-header" onClick={() => toggleSidebar(cat.id)}>
                      <span>{cat.title}</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                    <div className="sidebar-acc-content">
                      <ul>
                        <li><a href="/antes-despues/aumento-de-senos">Aumento de Senos</a></li>
                        <li><a href="#">Reducción de Senos</a></li>
                        <li><a href="#">Levantamiento de Senos</a></li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

        </div>

      </div>
    </section>
  );
}
