"use client";

import React, { useState } from 'react';
import './BeforeAfterGallery.css';
import './BeforeAfterLinks.css';

interface Caso {
  id: number;
  slug: string;
  title: string;
  procedimiento?: string;
  thumbnailUrl?: string;
}

interface BeforeAfterGalleryProps {
  cases?: Caso[];
}

export default function BeforeAfterGallery({ cases = [] }: BeforeAfterGalleryProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="ba-gallery-section section-padding">
      <div className="container ba-gallery-container">
        
        <div className="ba-gallery-header text-center">
          <h2 className="ba-gallery-title">RESULTADOS<br/>CIRUGÍA PLÁSTICA</h2>
          <p className="ba-gallery-desc">
            Explora la galería de antes y después, y descubre transformaciones reales.
          </p>
        </div>

        <div className="ba-accordion-list">
          {cases.map(item => (
            <div 
              key={item.id} 
              className={`ba-accordion-item ${openId === item.id.toString() ? 'open' : ''}`}
            >
              <div 
                className="ba-accordion-header" 
                onClick={() => toggleAccordion(item.id.toString())}
              >
                <div className="ba-accordion-left">
                  <div className="ba-acc-img-wrapper" style={{ overflow: 'hidden' }}>
                    {item.thumbnailUrl ? (
                      <img src={item.thumbnailUrl} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <span>(Img)</span>
                    )}
                  </div>
                  <h3 className="ba-acc-title">{item.title}</h3>
                </div>
                <div className="ba-accordion-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              
              <div className="ba-accordion-content">
                <div className="ba-accordion-inner">
                  <ul className="ba-accordion-links">
                    <li>
                      <a href={`/antes-despues/${item.slug}`}>
                        Ver Detalles del Caso {item.procedimiento && ` - ${item.procedimiento}`}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
