import React from 'react';
import Link from 'next/link';
import './ProceduresGrid.css';

export interface ProcedureCategory {
  id: number;
  name: string;
  slug: string;
}

export interface ProcedureCard {
  id: number;
  title: string;
  slug: string;
  imageUrl: string;
  categories: number[];
}

interface ProceduresGridProps {
  categories: ProcedureCategory[];
  procedures: ProcedureCard[];
  currentCategorySlug?: string; // 'todos' or category slug
}

export default function ProceduresGrid({ categories, procedures, currentCategorySlug = 'todos' }: ProceduresGridProps) {
  
  // Filter procedures
  let visibleProcedures = procedures;
  if (currentCategorySlug !== 'todos') {
    const currentCat = categories.find(c => c.slug === currentCategorySlug);
    if (currentCat) {
      visibleProcedures = procedures.filter(p => p.categories.includes(currentCat.id));
    }
  }

  // Generate tabs array
  const tabs = [
    { name: 'TODOS', slug: 'todos' },
    ...categories.map(c => ({ name: c.name, slug: c.slug }))
  ];

  return (
    <section className="proc-grid-section section-padding">
      <div className="container">
        
        <div className="proc-grid-header text-center">
          <h2 className="proc-grid-title">
            NUESTRO EQUIPO CUENTA CON EL CONOCIMIENTO,<br/>
            LA EXPERIENCIA Y LAS HABILIDADES PARA<br/>
            BRINDARTE LOS MEJORES RESULTADOS.
          </h2>
        </div>

        <div className="proc-tabs">
          {tabs.map(tab => (
            <Link 
              key={tab.slug} 
              href={tab.slug === 'todos' ? '/procedimientos' : `/procedimientos/${tab.slug}`}
              className={`proc-tab-link ${currentCategorySlug === tab.slug ? 'active' : ''}`}
            >
              {tab.name}
            </Link>
          ))}
        </div>

        <div className="proc-grid">
          {visibleProcedures.length > 0 ? (
            visibleProcedures.map(proc => {
              // Find the primary category for the procedure to build the correct URL
              // If it belongs to multiple, pick the first one. If none, fallback to 'general'
              const primaryCatId = proc.categories[0];
              const primaryCat = categories.find(c => c.id === primaryCatId);
              const catSlug = primaryCat ? primaryCat.slug : 'general';
              
              const procedureUrl = `/procedimientos/${catSlug}/${proc.slug}`;

              return (
                <div className="proc-card" key={proc.id}>
                  <div className="proc-card-img-wrapper">
                    {proc.imageUrl ? (
                      <img src={proc.imageUrl} alt={proc.title} className="proc-card-img" />
                    ) : (
                      <div className="proc-card-placeholder"></div>
                    )}
                  </div>
                  <div className="proc-card-content">
                    <h3 className="proc-card-title">{proc.title}</h3>
                    <Link href={procedureUrl} className="proc-card-btn">Ver más</Link>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="proc-grid-empty">
              No hay procedimientos en esta categoría.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
