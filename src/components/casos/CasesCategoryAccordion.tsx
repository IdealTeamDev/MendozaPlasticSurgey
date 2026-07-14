"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import './CasesCategoryAccordion.css';

export interface ProcedurePill {
  id: number;
  title: string;
  slug: string;
}

export interface CategoryData {
  id: number;
  name: string;
  image: string;
  procedures: ProcedurePill[];
}

interface CasesCategoryAccordionProps {
  categories: CategoryData[];
}

export default function CasesCategoryAccordion({ categories = [] }: CasesCategoryAccordionProps) {
  const [openCategoryId, setOpenCategoryId] = useState<number | null>(null);

  const toggleCategory = (id: number) => {
    if (openCategoryId === id) {
      setOpenCategoryId(null);
    } else {
      setOpenCategoryId(id);
    }
  };

  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <div className="cases-accordion-container">
      {categories.map((cat) => {
        const isOpen = openCategoryId === cat.id;

        return (
          <div key={cat.id} className={`cases-accordion-item ${isOpen ? 'open' : ''}`}>
            {/* Header / Trigger */}
            <div 
              className="cases-accordion-header" 
              onClick={() => toggleCategory(cat.id)}
            >
              <div className="cases-accordion-info">
                {cat.image ? (
                  <img src={cat.image} alt={cat.name} className="cases-accordion-img" />
                ) : (
                  <img src="/procedures.png" alt={cat.name} className="cases-accordion-img" />
                )}
                <h3 className="cases-accordion-title">{cat.name.toUpperCase()}</h3>
              </div>
              <div className="cases-accordion-icon">
                {/* Simple CSS arrow: up or down */}
                <span className={`cases-category-arrow ${isOpen ? 'up' : 'down'}`}></span>
              </div>
            </div>

            {/* Content (Procedures Pills) */}
            <div className="cases-accordion-content">
              <div className="cases-accordion-content-inner">
                {cat.procedures && cat.procedures.length > 0 ? (
                  <div className="cases-procedures-list">
                    {cat.procedures.map((proc) => (
                      <Link href={`/antes-despues/${proc.slug}`} key={proc.id} className="cases-procedure-pill">
                        {proc.title}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="cases-no-procedures">No hay procedimientos asignados a esta categoría aún.</p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
