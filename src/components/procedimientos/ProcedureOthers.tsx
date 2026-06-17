import React from 'react';
import Link from 'next/link';
import './ProcedureOthers.css';

const OTHERS_DATA = [
  { label: 'Ginecomastia', href: '/procedimientos/ginecomastia' },
  { label: 'Lifting de Muslos', href: '/procedimientos/lifting-muslos' },
  { label: 'BBL', href: '/procedimientos/bbl' }
];

export default function ProcedureOthers() {
  return (
    <section className="proc-others-section">
      <div className="container">
        <h2 className="proc-others-title text-center">OTROS PROCEDIMIENTOS</h2>
        
        <div className="proc-others-pills">
          {OTHERS_DATA.map((item, idx) => (
            <Link key={idx} href={item.href} className="proc-other-pill">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
