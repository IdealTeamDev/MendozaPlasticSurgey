import React from 'react';
import Link from 'next/link';
import './ProcedureGrid.css';

export interface Procedure {
  id: number;
  slug: string;
  title: string;
  imageUrl?: string;
  excerpt?: string;
}

export default function ProcedureGrid({ procedures }: { procedures: Procedure[] }) {
  if (!procedures || procedures.length === 0) return null;

  return (
    <section className="proc-grid-section section-padding">
      <div className="container">
        <div className="proc-grid-header text-center">
          <h2 className="proc-grid-title">NUESTROS PROCEDIMIENTOS</h2>
          <div className="proc-grid-line"></div>
        </div>
        
        <div className="proc-grid">
          {procedures.map(proc => (
            <Link href={`/procedimientos/${proc.slug}`} key={proc.id} className="proc-card">
              <div className="proc-card-img-wrapper">
                <img 
                  src={proc.imageUrl || '/procedures.png'} 
                  alt={proc.title} 
                  className="proc-card-img" 
                />
                <div className="proc-card-overlay">
                  <span className="proc-card-btn">Ver Detalles</span>
                </div>
              </div>
              <div className="proc-card-info">
                <h3 className="proc-card-title">{proc.title}</h3>
                {proc.excerpt && (
                  <p className="proc-card-desc">{proc.excerpt}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
