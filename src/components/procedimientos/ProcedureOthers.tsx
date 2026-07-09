import React from 'react';
import Link from 'next/link';
import './ProcedureOthers.css';

interface ProcedureOthersProps {
  procedures?: { id: number; title: string; slug: string }[];
}

export default function ProcedureOthers({ procedures = [] }: ProcedureOthersProps) {
  if (!procedures || procedures.length === 0) {
    return null;
  }

  return (
    <section className="proc-others-section section-padding">
      <div className="container">
        <h2 className="proc-others-title text-center" style={{ fontSize: '2rem', fontWeight: 400, letterSpacing: '1px', marginBottom: '3rem' }}>CIRUGÍAS COMBINADAS EN ATLANTA</h2>
        
        <div className="proc-others-pills" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          {procedures.map((item, idx) => (
            <Link key={idx} href={`/procedimientos/${item.slug}`} className="proc-other-pill">
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
