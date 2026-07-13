"use client";

import React, { useState } from 'react';
import './ProcedureFAQ.css';

interface FAQItem {
  pregunta: string;
  respuesta: string;
}

interface ProcedureFAQProps {
  faqs?: FAQItem[];
  title?: string;
}

export default function ProcedureFAQ({ faqs = [], title = "" }: ProcedureFAQProps) {
  const [openId, setOpenId] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) {
    return null; // Do not render section if there are no FAQs
  }

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="proc-faq-section section-padding">
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <div className="proc-faq-header" style={{ marginBottom: '3rem' }}>
          <span className="proc-faq-subtitle" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--blanco-50)', letterSpacing: '2px', fontSize: '1rem' }}>PREGUNTAS FRECUENTES</span>
          {title && <h2 className="proc-faq-title" style={{ fontSize: '2.5rem', fontWeight: 300, color: 'var(--black)', textTransform: 'uppercase' }}>SOBRE {title}</h2>}
        </div>

        <div className="proc-faq-accordion">
          {faqs.map((item, index) => (
            <div 
              key={index} 
              className={`proc-faq-item ${openId === index ? 'open' : ''}`}
            >
              <div 
                className="proc-faq-question"
                onClick={() => toggleAccordion(index)}
              >
                <h3>{item.pregunta}</h3>
                <span className="proc-faq-icon">{openId === index ? '−' : '+'}</span>
              </div>
              <div className="proc-faq-answer">
                <div dangerouslySetInnerHTML={{ __html: item.respuesta }} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
