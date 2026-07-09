import React from 'react';
import './ProcedureFinancing.css';

interface ProcedureFinancingProps {
  subtitle?: string;
  title?: string;
  text?: string;
}

export default function ProcedureFinancing({ subtitle, title, text }: ProcedureFinancingProps) {
  if (!title && !text) return null;

  return (
    <section className="proc-financing-section">
      <div className="container">
        <div className="proc-financing-content">
          {subtitle && <p className="proc-financing-subtitle">{subtitle}</p>}
          {title && <h2 className="proc-financing-title">{title}</h2>}
          {text && (
            <div 
              className="proc-financing-text"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
